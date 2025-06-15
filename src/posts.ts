import { readdir, readFile } from "fs/promises";
import path from "path";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Metadata, TCategory } from "./app/types";

export type TPost = Metadata & {
  slug: string;
  title: string;
  content: string;
}

export const postsPerPage = 5 as const;

export async function getPosts(): Promise<TPost[]> {
  // Retreive slugs from post routes
  const slugs = (
    await readdir("./src/app/post", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retreive metadata from MDX files
  const allPosts = await Promise.all(
    slugs
    .map(async ({ name }) => {
      const filePath = path.join(
        process.cwd(),
        "src/app/post",
        name,
        "page.mdx"
      );

      let title;

      const mdContent = await readFile(filePath, "utf-8");
      const htmlContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkFrontmatter, ["yaml", "toml"])
        // @ts-expect-error fix
        .use(() => {
          return function (tree: Node) {
            // @ts-expect-error fix
            const h1Metadata = tree.children.find((c) => c.tagName === "h1");
            // @ts-expect-error fix
            title = h1Metadata.children.find((x) => x.type === "text").value;
          };
        })
        .use(rehypeStringify)
        .process(mdContent);

      const { default: metadata } = await import(
        `./app/post/${name}/metadata.ts`
      );

      return {
        slug: name,
        content: String(htmlContent),
        title,
        ...metadata,
      };
    })
  );

  // Sort posts from newest to oldest
  allPosts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  const filteredPosts = allPosts.filter(({isDraft}) => {
    // All posts are visible in dev mode
    if (process.env.NODE_ENV === 'development') {
      return true;
    }

    // But in other envs, we should check if the post is not draft!
    return !isDraft
  })

  return filteredPosts;
}

export async function getPostsByCategory({
  category,
}: {
  category: TCategory['id'];
}): Promise<TPost[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories?.find(c => c.id === category)
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: TPost[]; total: number }> {
  const allPosts = await getPosts();

  // Get a subset of posts pased on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}

export async function getPaginatedPostsByCategory({
  page,
  limit,
  category,
}: {
  page: number;
  limit: number;
  category: TCategory['id'];
}): Promise<{ posts: TPost[]; total: number }> {
  const allCategoryPosts = await getPostsByCategory({ category });

  // Get a subset of posts pased on page and limit
  const paginatedCategoryPosts = allCategoryPosts.slice(
    (page - 1) * limit,
    page * limit
  );

  return {
    posts: paginatedCategoryPosts,
    total: allCategoryPosts.length,
  };
}

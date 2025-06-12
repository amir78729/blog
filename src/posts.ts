import { readdir, readFile } from "fs/promises";

import path from "path";
import fs from "fs";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Category } from "./app/types";
export interface Post {
  slug: string;
  title: string;
  publishDate: string;
  categories: Category[];
  content: string;
}

export const postsPerPage = 5 as const;

export async function getPosts(): Promise<Post[]> {
  // Retreive slugs from post routes
  const slugs = (
    await readdir("./src/app/post", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // Retreive metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const filePath = path.join(
        process.cwd(),
        "src/app/post",
        name,
        "page.mdx"
      );
      let publishDate;
      let title;
      fs.stat(filePath, (err, stats) => {
        if (err) {
          throw err;
        }
        publishDate = stats.ctime;
      });

      const mdContent = await readFile(filePath, "utf-8");
      const htmlContent = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(remarkFrontmatter, ["yaml", "toml"])
        .use(() => {
          return function (tree: Node) {
            const h1Metadata = tree.children.find((c) => c.tagName === "h1");
            title = h1Metadata.children.find((x) => x.type === "text").value;
          };
        })
        .use(rehypeStringify)
        .process(mdContent);

      const metadata = await import(`./app/post/${name}/metadata.ts`);
      return {
        slug: name,
        content: String(htmlContent),
        ...metadata,
        publishDate,
        title,
      };
    })
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPostsByCategory({
  category,
}: {
  category: Category;
}): Promise<Post[]> {
  const allPosts = await getPosts();

  // Filter posts by specified category
  const posts = allPosts.filter(
    (post) => post.categories?.indexOf(category) !== -1
  );

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
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
  category: Category;
}): Promise<{ posts: Post[]; total: number }> {
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

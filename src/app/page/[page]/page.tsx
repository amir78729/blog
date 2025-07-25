import { Pagination } from "@/components";
import Posts from "@/components/Posts/index.ts";
import { getPaginatedPosts, getPosts, postsPerPage } from "@/posts.ts";
import { notFound, redirect } from "next/navigation";

export default async function Page({ params }: { params: { page: number } }) {
  let { page } = params;

  page = Number(page);

  if (page < 1) notFound();

  if (page === 1) redirect("/");

  const { posts, total } = await getPaginatedPosts({
    page,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <main>
      <h1>Blog</h1>
      <Posts posts={posts} />
      <Pagination
        baseUrl="/page"
        page={page}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const pages = Math.ceil(posts.length / postsPerPage);

  return [...Array(pages)].map((_, i) => ({
    page: `${i + 1}`,
  }));
}

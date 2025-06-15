import { Categories } from "@/app/constants.tsx";
import { type TCategory } from "@/app/types.ts";
import Pagination from "@/components/Pagination/index.ts";
import Posts from "@/components/Posts/index.ts";
import {
  getPaginatedPostsByCategory,
  getPostsByCategory,
  postsPerPage,
} from "@/posts.ts";
import { notFound, redirect } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { category: TCategory["id"]; page: number };
}) {
  const { category } = params;
  let { page } = params;

  page = Number(page);

  if (page < 1) notFound();

  if (page === 1) redirect(`/category/${category}`);

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page,
    limit: postsPerPage,
  });

  if (!posts.length) notFound();

  return (
    <main>
      <h1>
        Category: {category} (Page: {page})
      </h1>
      <Posts posts={posts} />

      <Pagination
        baseUrl={`/category/${category}/page`}
        page={page}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const paths = await Promise.all(
    Object.values(Categories).map(async category => {
      const posts = await getPostsByCategory({ category: category.id });
      const pages = Math.ceil(posts.length / postsPerPage);

      return [...Array(pages)].map((_, i) => ({
        category: category.id,
        page: `${i + 1}`,
      }));
    }),
  );

  return paths.flat();
}

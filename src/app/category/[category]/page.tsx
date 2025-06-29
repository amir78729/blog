import { Categories } from "@/app/constants.tsx";
import { type TCategory } from "@/app/types.ts";
import { H1 } from "@/components/md-override/index.ts";
import { Pagination } from "@/components";
import Posts from "@/components/Posts/index.ts";
import { getPaginatedPostsByCategory, postsPerPage } from "@/posts.ts";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: TCategory["id"] };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (!Object.values(Categories).find(c => c.id === category)) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
  });

  return (
    <>
      <H1>Blog</H1>
      <p>
        Posts with{" "}
        <b>
          {Categories[category].icon} {Categories[category].name}
        </b>{" "}
        Category:
      </p>
      <Posts posts={posts} />
      <Pagination
        baseUrl={`/category/${category}/page`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </>
  );
}

export function generateStaticParams() {
  return Object.values(Categories).map(category => ({
    category: category.id,
  }));
}

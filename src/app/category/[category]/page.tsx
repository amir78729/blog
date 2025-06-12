
import { Categories } from "@/app/constants";
import { TCategory } from "@/app/types";
import Pagination from "@/components/Pagination";
import { Posts } from "@/components/Posts/Posts";
import { Button } from "@/components/ui/button";
import {
  getPaginatedPostsByCategory,
  postsPerPage,
} from "@/posts";
import { notFound } from "next/navigation";

export default async function Category({
  params,
}: {
  params: { category: TCategory };
}) {
  const { category } = params;

  // 404 if the category does not exist
  if (Object.values(Categories).indexOf(category) == -1) notFound();

  const { posts, total } = await getPaginatedPostsByCategory({
    category,
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main>
      <h1>Category: {category}</h1>
      <Posts posts={posts} />
      <Button>Click me</Button>

      <Pagination
        baseUrl={`/category/${category}/page`}
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </main>
  );
}

export function generateStaticParams() {
  return Object.values(Categories).map((category) => ({
    category,
  }));
}

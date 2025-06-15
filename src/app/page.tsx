import Pagination from "@/components/Pagination/index.ts";
import Posts from "@/components/Posts/index.ts";
import { getPaginatedPosts, postsPerPage } from "@/posts.ts";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <>
      <h1>Blog</h1>
      <p className="sr-only">
        You can select recent blog posts from this page. you can navigate to
        older posts using &quot;Older Posts&quot; link.
      </p>
      <Posts posts={posts} />
      <Pagination
        baseUrl="/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />

      {/* <h2>Categories</h2>
      <ul>
        {Object.values(Categories).map((cat) => (
          <li key={cat}>
            <a href={`category/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul> */}
    </>
  );
}

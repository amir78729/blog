import Post from "@/components/Post/index.ts";
import { type TPost } from "@/posts.ts";
import s from "./Posts.module.css";

export default function Posts({ posts }: { posts: TPost[] }) {
  return (
    <div className={s.container}>
      {posts.map(post => (
        <Post
          key={post.slug}
          {...post}
        />
      ))}
    </div>
  );
}

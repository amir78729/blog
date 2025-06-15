import { type TPost } from "@/posts";
import s from './Posts.module.css'
import { Post } from "@/components/Post";


export function Posts({ posts }: { posts: TPost[] }) {
    return (
        <div className={s.container}>
            {posts.map((post) => <Post key={post.slug} {...post} />)}
        </div>
    );
}

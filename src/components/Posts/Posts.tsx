import { type Post } from "@/posts";
import Link from "next/link";
import s from './Posts.module.css'

export function Posts({ posts }: { posts: Post[] }) {
    return (
        <div className={s.container}>
            {posts.map(({ slug, publishDate, categories, content, title }) => (
                <section className={s.card} key={slug} aria-label={`visit the "${title}" post`} >
                    {/* <p>
                        <strong>Published:</strong>{" "}
                        {new Date(publishDate).toLocaleDateString()}{" "}
                        {categories && (
                            <>
                                <strong>Categories:</strong>{" "}
                                {categories.map((cat, i) => `${i ? ", " : ""}${cat}`)}
                            </>
                        )}      
                    </p> */}
                    <div className={s.preview} aria-hidden="true" >
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                    <Link className={s['read-more']} href={`/post/${slug}`} aria-label={`visit the "${title}" post`} >Read More</Link>
                </section>
            ))}
        </div>
    );
}

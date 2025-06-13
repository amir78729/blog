import { type Post } from "@/posts";
import Link from "next/link";
import s from './Posts.module.css'
import { Calendar } from "lucide-react";
import Tags from "@/components/Tags";

export function Posts({ posts }: { posts: Post[] }) {
    return (
        <div className={s.container}>
            {posts.map(({ slug, publishDate, categories, content, title }, i) => {
                const a11yLabel = [
                    `visit "${title}" post.`,
                    `published at ${new Date(publishDate).toDateString()}.`,
                    categories ? `about ${categories.join(' and ')}` : null,
                ].join(' ')

                console.log(a11yLabel)
                return (
                    <>
                        {i !== 0 && <hr />}
                        <Link className={s.card} key={slug} href={`/post/${slug}`} aria-label={a11yLabel} >
                            <p className={s.date} aria-hidden="true">
                                <span><Calendar size={16} /></span> {new Date(publishDate).toDateString()}
                            </p>
                            <h2>{title}</h2>
                            <Tags categories={categories} />
                        </Link>
                    </>
                )
            })}
        </div>
    );
}

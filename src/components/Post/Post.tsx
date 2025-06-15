import { type TPost } from "@/posts";
import Link from "next/link";
import s from './Post.module.css'
import { Calendar } from "lucide-react";
import Tags from "@/components/Tags";
import { useId } from "react";

export function Post({ title, publishDate, categories, slug, isDraft }: TPost) {
    const dateId = useId();
    const tagsId = useId();

    return (
        <Link className={s.card} key={slug} href={`/post/${slug}`} aria-label={`visit "${title}" post.`} aria-describedby={`${tagsId} ${dateId}`}>
            <div className={s.date}>
                <span><Calendar size={16} /></span> {new Date(publishDate).toDateString()}
                <Tags id={tagsId} categories={categories} />
            </div>
            <h2>{title}</h2>
            {isDraft && <small>❌ POST IS DRAFT!</small>}
            <p id={dateId} className="sr-only">the post was published at {new Date(publishDate).toDateString()}.</p>
        </Link>
    )
}

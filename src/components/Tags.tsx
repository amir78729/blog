import { Metadata } from "@/app/types"
import Link from "next/link"

type Props = {
    categories: Metadata['categories'];
    id: string;
}
const Tags = ({ categories, id }: Props) => {
    if (!categories || categories.length === 0) return null
    return (
        <ul aria-label={`the post is about ${categories.map(c => c.name).join(' and ')}.`} className="chip-group" id={id}>
            {categories.map(category => (
                <li key={category.id}>
                    <Link href={`/category/${category.id}`} className="chip">
                        {category.icon} {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Tags;
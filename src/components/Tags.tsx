import { Metadata } from "@/app/types"

type Props = {
    categories: Metadata['categories']
}
const Tags = ({ categories }: Props) => {
    if (!categories || categories.length === 0) return null
    return (
        <ul className="chip-group">
            {categories.map(category => (
                <>
                    <li className="chip" key={category}>{category}</li>
                </>
            ))}
        </ul>
    )
}

export default Tags;
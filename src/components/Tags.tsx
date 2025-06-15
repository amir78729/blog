import { type Metadata } from "@/app/types.ts";
import Link from "next/link";

type Props = {
  categories: Metadata["categories"];
  id: string;
};
const Tags = ({ categories, id }: Props) => {
  if (!categories || categories.length === 0) return null;
  return (
    <ul
      aria-label="categories of the post."
      className="chip-group"
      id={id}
    >
      {categories.map(category => (
        <li key={category.id}>
          <Link
            href={`/category/${category.id}`}
            className="chip"
          >
            {category.icon} {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;

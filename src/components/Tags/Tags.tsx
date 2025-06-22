"use client";

import { type Metadata } from "@/app/types.ts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import s from "./Tags.module.css";

type Props = {
  categories: Metadata["categories"];
  id: string;
  removeLink?: boolean;
};

const Tags = ({ categories, id, removeLink }: Props) => {
  const router = useRouter();

  const goToCategoryPage = (id: string) => {
    router.push(`/category/${id}`);
  };

  return (
    <ul
      aria-label="categories of the post."
      className={s["chip-group"]}
      id={id}
    >
      {categories?.length > 0 &&
        categories.map(category => (
          <li key={category.id}>
            {!removeLink ? (
              <Link
                href={`/category/${category.id}`}
                className={s.chip}
              >
                {category.icon} {category.name}
              </Link>
            ) : (
              <div className={s.chip}>
                {category.icon} {category.name}
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Tags;

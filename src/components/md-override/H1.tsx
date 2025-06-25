import { LinkedHeading } from "@/components";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function H1({ children, id }: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Link
        href="/"
        aria-label="go back to blog's main page"
        id="back-link"
      >
        <ArrowLeft size="1rem" /> Back to all posts
      </Link>
      <LinkedHeading id={id}>
        <h1>{children}</h1>
      </LinkedHeading>
    </div>
  );
}

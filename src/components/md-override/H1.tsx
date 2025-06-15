import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { LinkedHeading } from "../LinkedHeading/index.ts";

type Props = {
  children?: React.ReactNode;
};

export function H1({ children }: Props) {
  return (
    <div style={{ position: "relative" }}>
      <Link
        href="/"
        aria-label="go back to blog's main page"
        id="back-link"
      >
        <ArrowLeft size="1rem" /> Back to all posts
      </Link>
      <LinkedHeading>
        <h1>{children}</h1>
      </LinkedHeading>
    </div>
  );
}

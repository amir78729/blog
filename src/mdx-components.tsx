import type { MDXComponents } from "mdx/types";
import { H1, H2, H3, H4, Img, Table, A } from "@/components/md-override";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: A,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    img: Img,
    table: Table,
    ...components,
  };
}

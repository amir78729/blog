import {
  A,
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  Img,
  Table,
} from "@/components/md-override/index.ts";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: A,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    img: Img,
    table: Table,
    blockquote: Blockquote,
    code: Code,
    ...components,
  };
}

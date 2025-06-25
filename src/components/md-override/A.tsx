import { type AnchorHTMLAttributes, type DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export function A({ children, ...restProps }: Props) {
  return (
    <a
      {...restProps}
    >
      {children}
    </a>
  );
}

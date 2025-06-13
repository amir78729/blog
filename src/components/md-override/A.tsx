import React, { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export function A({ children, ...restProps }: Props) {
  return (
    <a target="_blank" {...restProps}>
      {children}
    </a>
  );
}

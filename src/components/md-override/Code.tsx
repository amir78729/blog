import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Code({ children, ...props }: Props) {
  return (
    <code
      tabIndex={0}
      {...props}
    >
      {children}
    </code>
  );
}

import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import LinkedHeading from "../LinkedHeading/index.ts";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function H2({ children, id }: Props) {
  return (
    <LinkedHeading id={id}>
      <h2>{children}</h2>
    </LinkedHeading>
  );
}

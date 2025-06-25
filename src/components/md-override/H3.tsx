import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import LinkedHeading from "../LinkedHeading/index.ts";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function H3({ children, id }: Props) {
  return (
    <LinkedHeading id={id}>
      <h3>{children}</h3>
    </LinkedHeading>
  );
}

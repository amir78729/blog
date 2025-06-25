import { type DetailedHTMLProps, type HTMLAttributes } from "react";
import LinkedHeading from "../LinkedHeading/index.ts";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function H4({ children, id }: Props) {
  return (
    <LinkedHeading id={id}>
      <h4>{children}</h4>
    </LinkedHeading>
  );
}

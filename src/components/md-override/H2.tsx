import React from "react";
import { LinkedHeading } from "../LinkedHeading/index.ts";

type Props = {
  children?: React.ReactNode;
};

export function H2({ children }: Props) {
  return (
    <LinkedHeading>
      <h2>{children}</h2>
    </LinkedHeading>
  );
}

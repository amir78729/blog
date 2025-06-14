import React from "react";
import { LinkedHeading } from "../LinkedHeading/index.ts";

type Props = {
  children?: React.ReactNode;
};

export function H3({ children }: Props) {
  return (
    <LinkedHeading>
      <h3>{children}</h3>
    </LinkedHeading>
  );
}

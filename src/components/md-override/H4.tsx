import React from "react";
import { LinkedHeading } from "../LinkedHeading/index.ts";

type Props = {
  children?: React.ReactNode;
};

export function H4({ children }: Props) {
  return (
    <LinkedHeading>
      <h4>{children}</h4>
    </LinkedHeading>
  );
}

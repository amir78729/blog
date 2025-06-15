import { type DetailedHTMLProps, type TableHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export function Table(props: Props) {
  return (
    <div
      style={{
        width: "100%",
        overflow: "auto",
      }}
    >
      <table
        tabIndex={0}
        {...props}
      ></table>
    </div>
  );
}

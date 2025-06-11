import React from "react";

type Props = {
  children?: React.ReactNode
}

export function H1({ children }: Props) {
  return (
    <h1 className="bg-blue-500 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
}

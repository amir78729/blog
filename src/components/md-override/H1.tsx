import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useId } from "react";
import { LinkedHeading } from "../LinkedHeading";

type Props = {
  children?: React.ReactNode
}

export function H1({ children }: Props) {
  return (
    <div style={{ position: 'relative' }}>
      <Link
        href="/"
        aria-label="go back to blog's main page"
        style={{
          position: 'absolute',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.75rem',
          transform: 'translateY(calc(-100% - 0.5rem))',
          color: "#fff7"
        }}
      >
        <ArrowLeft size="1rem" /> Back to Posts
      </Link>
      <LinkedHeading><h1>{children}</h1></LinkedHeading>

    </div>
  );
}

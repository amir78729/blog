import {
  Info,
  Lightbulb,
  MessageCircleWarning,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";

export const BlockquoteVariant = {
  NOTE: "[!NOTE]",
  VIRGOOL: "[!VIRGOOL]",
  WARNING: "[!WARNING]",
  TIP: "[!TIP]",
  IMPORTANT: "[!IMPORTANT]",
  CAUTION: "[!CAUTION]",
} as const;

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Blockquote({ children }: Props) {
  //@ts-expect-error fix
  const text = children?.[1]?.props?.children;

  if (!text || !text.startsWith) return <blockquote>{children}</blockquote>;

  let variant = "";
  let title = "";
  let icon = null;
  let content = children;

  if (text.startsWith(BlockquoteVariant.NOTE)) {
    variant = "note";
    icon = <Info size={18} />;
    title = "Note";
    content = text.slice(BlockquoteVariant.NOTE.length);
  } else if (text.startsWith(BlockquoteVariant.WARNING)) {
    variant = "warning";
    icon = <TriangleAlert size={16} />;
    title = "Warning";
    content = text.slice(BlockquoteVariant.WARNING.length);
  } else if (text.startsWith(BlockquoteVariant.TIP)) {
    variant = "tip";
    icon = <Lightbulb size={16} />;
    title = "Tip";
    content = text.slice(BlockquoteVariant.TIP.length);
  } else if (text.startsWith(BlockquoteVariant.IMPORTANT)) {
    variant = "important";
    icon = <MessageCircleWarning size={16} />;
    title = "Important";
    content = text.slice(BlockquoteVariant.IMPORTANT.length);
  } else if (text.startsWith(BlockquoteVariant.CAUTION)) {
    variant = "caution";
    icon = <OctagonAlert size={16} />;
    title = "Caution";
    content = text.slice(BlockquoteVariant.CAUTION.length);
  }

  return (
    <blockquote className={variant}>
      {title && (
        <p className="blockquote-title">
          {icon} {title}
        </p>
      )}
      {content}
    </blockquote>
  );
}

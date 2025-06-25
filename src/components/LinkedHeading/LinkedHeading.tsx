import { Link } from "lucide-react";
import { type DetailedHTMLProps, type HTMLAttributes } from "react";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export default function LinkedHeading({ children, id }: Props) {
  // @ts-expect-error fix
  const headingContent = children?.props?.children?.toString();

  const renderLinkIcon = () => (
    <a
      aria-label={`navigate to "${headingContent}" section`}
      className="heading-link"
      href={`#${id}`}
    >
      <Link size="0.75rem" />
    </a>
  );

  return (
    <div className="heading">
      <div
        id={id}
        className="content"
      >
        {children} {renderLinkIcon()}
      </div>
    </div>
  );
}

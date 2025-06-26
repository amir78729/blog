import { useId, type DetailedHTMLProps, type ImgHTMLAttributes } from "react";

type Props = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export function Img({ src, alt }: Props) {
  const descriptionId = useId();

  return (
    <>
      <img
        src={src}
        alt={alt}
        aria-describedby={descriptionId}
      />
      <span
        id={descriptionId}
        className="image-description"
        aria-hidden="true"
      >
        {alt}
      </span>
    </>
  );
}

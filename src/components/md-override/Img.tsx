import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export function Img({ src, alt }: Props) {
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption aria-hidden="true">{alt}</figcaption>
    </figure>
  );
}

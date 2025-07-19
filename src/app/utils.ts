import { type Metadata } from "./types";

export const getPostSeoData = (metadata: Metadata) => {
  const keywords = metadata.categories.flatMap(c => c.keywords).join(", ");

  const title = `${metadata.title} | Amirhossein Alibakhshi`;

  return {
    title,
    keywords,
  };
};

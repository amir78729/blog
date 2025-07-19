import { type Categories } from "./constants.tsx";

export type TCategory = (typeof Categories)[keyof typeof Categories];

export type Metadata = {
  title: string;
  isDraft?: boolean;
  categories: TCategory[];
  publishDate: Date;
  virgool?: string;
};

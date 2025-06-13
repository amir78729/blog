import { Categories } from "./constants";

export type TCategory = (typeof Categories)[keyof typeof Categories];

export type Metadata = {
  categories: TCategory[];
  publishDate: Date;
};

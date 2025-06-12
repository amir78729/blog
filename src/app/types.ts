import { Categories } from "./constants";

export type Category = (typeof Categories)[keyof typeof Categories];

export type Metadata = {
  category: Category[];
};

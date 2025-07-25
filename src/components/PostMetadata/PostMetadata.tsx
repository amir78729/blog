import { type Metadata } from "@/app/types.ts";
import { Tags } from "@/components/index.ts";
import classNames from "classnames";
import { Calendar, Tag } from "lucide-react";
import Head from "next/head";
import s from "./PostMetadata.module.css";

type Props = {
  metadata: Metadata;
};

const PostMetadata = ({ metadata }: Props) => {
  const postKeywords = metadata.categories.flatMap(c => c.keywords).join(", ");

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={postKeywords}
          key="keywords"
        />
      </Head>
      <section className={s.container}>
        {metadata.categories?.length > 0 && (
          <div className="row">
            <Tag size={16} />
            <Tags
              categories={metadata.categories}
              id="post-tags"
            />
          </div>
        )}
        <div className={classNames("row", s.time)}>
          <span>
            <Calendar size={16} />
          </span>{" "}
          Published at {new Date(metadata.publishDate).toDateString()}
        </div>
        {metadata.virgool && (
          <div className="row">
            <svg
              fill="currentColor"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.214 0A9.646 9.646 0 0 0 8.97.522C5.462 1.787 3.438 4.448 3.167 8.234c-.261 3.647 1.388 6.36 4.45 8.236.777.48 1.683.742 2.564 1.109-.811 1.134-1.666 2.311-2.53 3.524 1.431.977 2.818 1.929 4.232 2.897.13-.166.21-.27.288-.375 1.378-1.902 2.783-3.795 4.144-5.715 1.186-1.684 2.39-3.367 3.473-5.121 1.073-1.736 1.265-3.69.907-5.68-.549-3.06-2.968-5.926-6.281-6.85-.688 1.163-1.679 2.853-1.99 3.366.505.171 1.027.28 1.478.51 1.79.914 2.817 2.362 2.827 4.403.013 2.123-1.007 3.7-2.907 4.548-3.21 1.442-6.176-.664-6.822-3.173-.286-1.092-.263-2.197.271-3.209.53-1.023 1.129-2.007 1.724-3.003z" />
            </svg>
            <span>
              Persian translation is available on{" "}
              <a href={metadata.virgool}>Virgool</a>.
            </span>
          </div>
        )}
      </section>
    </>
  );
};

export default PostMetadata;

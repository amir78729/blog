// import Link from "next/link";
// import s from './Pagination.module.css'

// export default function Pagination({
//   baseUrl,
//   page,
//   perPage,
//   total,
// }: {
//   baseUrl: string;
//   page: number;
//   perPage: number;
//   total: number;
// }) {
//   return (
//     <nav className={s.container}>
//       {page !== 1 ? (
//         <Link className={s.item} href={`${baseUrl}/${page - 1}`} rel="prev" aria-label="visit to newer posts">
//           Newer Posts
//         </Link>
//       ) : <div />}
//       {perPage * page < total ? (
//         <Link className={s.item} href={`${baseUrl}/${page + 1}`} rel="next" aria-label="visit to older posts">
//           Older Posts
//         </Link>
//       ) : <div />}
//     </nav>
//   );
// }

import classNames from "classnames";
import Link from "next/link";
import s from "./Pagination.module.css"; // adjust this to your actual style module

export default function Pagination({
  baseUrl,
  page,
  perPage,
  total,
}: {
  baseUrl: string;
  page: number;
  perPage: number;
  total: number;
}) {
  const totalPages = Math.ceil(total / perPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (pageNumbers.length === 1) {
    return null;
  }

  return (
    <nav
      className={s.container}
      aria-labelledby="pagination"
    >
      <h2
        id="pagination"
        className="sr-only"
      >
        Pagination
      </h2>

      <ul className={s.pageList}>
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber}>
            {pageNumber === page ? (
              <span
                className={classNames(s.item, s.current)}
                aria-current="page"
              >
                {pageNumber}
              </span>
            ) : (
              <Link
                className={s.item}
                href={`${baseUrl}/${pageNumber}`}
              >
                {pageNumber}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

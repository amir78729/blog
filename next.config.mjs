import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from 'rehype-highlight';
import rehypeToc from 'rehype-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // basePath: "/blog",
  reactStrictMode: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // rehypePrism, 
      // rehypeAutolinkHeadings,
      rehypeHighlight,
      rehypeSlug,
      rehypeAutolinkHeadings,
      [rehypeToc, {
        headings: ["h2", "h3", "h4"],
      }],
    ],
  },
})

// Combine MDX and Next.js config
export default withMDX(nextConfig)
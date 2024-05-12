import Link from "next/link";

import HtmlRender from "@shared/components/HtmlRenderer";
import { highlightKeywords } from "../utils/highlightKeywords";
import { type PostWithLinks } from "@entities/posts";

export default function Post({ post }: { post: PostWithLinks; }) {
  const { description, title, publish_date, keywords, links } = post;

  const highlightedDescription = highlightKeywords(description, keywords);

  return (
    <div className="p-4 border border-slate-600 rounded-xl font-bold shadow-lg bg-slate-50 dark:bg-slate-600">
      <div>{title}</div>
      <div className="mt-2 text-sm font-light">
        <HtmlRender htmlString={highlightedDescription} />
      </div>
      <div className="mt-2 text-xs font-thin">
        {publish_date}
      </div>
      <div className="mt-2 flex flex-row gap-3 items-baseline">
        <div className="text-xs font-thin">read more:</div>
        {links.map(link => {
          return (
            <Link
              href={link.url}
              key={link.id}
              target="_blank"
              className="font-semibold text-xs hover:text-red-500"
            >
              {link.type}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

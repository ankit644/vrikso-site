import Link from "next/link";

/** Renders inline markdown-style links — [label](/path) or [label](https://…) —
    inside an otherwise plain string. Shared by blog posts and glossary terms. */
export default function InlineText({ x }: { x: string }) {
  const parts = x.split(/(\[[^\]]+\]\([^)]+\))/g);
  if (parts.length === 1) return <>{x}</>;
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return part;
        const [, label, href] = m;
        const cls =
          "font-medium text-violet-deep underline decoration-lilac-line underline-offset-2 transition-colors hover:decoration-violet";
        return href.startsWith("/") ? (
          <Link key={i} href={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={i} href={href} rel="noopener" className={cls}>
            {label}
          </a>
        );
      })}
    </>
  );
}

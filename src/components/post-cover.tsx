import Image from "next/image";
import BlogCover from "./blog-cover";

/**
 * Renders a post's cover: a real image (from /public) when the post provides
 * one, otherwise the on-brand generated SVG cover. Drop into any `relative`,
 * sized, `overflow-hidden` container.
 */
export default function PostCover({
  image,
  cover = 0,
  category,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 720px, 100vw",
  priority = false,
}: {
  image?: string;
  cover?: number;
  category?: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={alt ?? category ?? "Article cover"}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return <BlogCover cover={cover} category={category} className={className} priority={priority} />;
}

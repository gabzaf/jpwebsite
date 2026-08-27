import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const posts = getBlogPosts();

  return (
    <main className="blog-pagina">
      <h2 className="titulo-principal">Blog</h2>
      {posts.length === 0 ? (
        <p>{dict.blogSoon}</p>
      ) : (
        <ul className="blog-lista">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/${locale}/blog/${post.slug}`}>
                <h2>{post.title}</h2>
                {post.date ? <time dateTime={post.date}>{post.date}</time> : null}
                {post.excerpt ? <p>{post.excerpt}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

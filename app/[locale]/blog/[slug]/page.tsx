import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, LOCALES } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const posts = getBlogPosts();
  return LOCALES.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  const dict = isLocale(locale) ? getDictionary(locale) : getDictionary("pt");
  return { title: post?.title ?? dict.blogArticle };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="blog-pagina">
      <h2 className="titulo-principal">{post.title}</h2>
      {post.date ? (
        <p>
          <time dateTime={post.date}>{post.date}</time>
        </p>
      ) : null}
      {post.body.split("\n\n").map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
    </main>
  );
}

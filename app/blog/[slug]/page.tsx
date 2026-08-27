import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return { title: post?.title ?? "Artigo" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
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

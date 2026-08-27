import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="blog-pagina">
      <h2 className="titulo-principal">Blog</h2>
      {posts.length === 0 ? (
        <p>Em breve publicamos notas sobre sessões, retouch e o processo no estúdio.</p>
      ) : (
        <ul className="blog-lista">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
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

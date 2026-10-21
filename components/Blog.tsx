import BlogPostCard from "@/components/BlogPostCard";
import { posts } from "@/data/blog";

export default function Blog({ active }: { active: boolean }) {
  return (
    <article className={`blog ${active ? "active" : ""}`}>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {posts.map((post) => (
            <BlogPostCard key={post.title} {...post} />
          ))}
        </ul>
      </section>
    </article>
  );
}

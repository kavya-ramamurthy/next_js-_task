import { posts } from "@/data/posts"

/**
 * Generate static paths (replacement for getStaticPaths)
 */
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * SEO metadata for each blog
 */
export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  return {
    title: post?.title,
    description: post?.description,
  }
}


export default function BlogDetailPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  )
}

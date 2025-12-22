export default function BlogDetailPage({ params }) {
  const { category, slug } = params

  return (
    <div>
      <h1>Blog Detail</h1>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Slug:</strong> {slug}
      </p>
    </div>
  )
}

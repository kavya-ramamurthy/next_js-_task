export default function ProductDetailPage({ params }) {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {params.id}</p>
    </div>
  )
}

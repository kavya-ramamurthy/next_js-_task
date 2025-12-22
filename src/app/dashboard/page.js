async function getDashboardData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store", 
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data")
  }

  return res.json()
}

export default async function DashboardPage() {
  const data = await getDashboardData()

  return (
    <div>
      <h1>Dashboard</h1>

      <ul>
        {data.slice(0, 15).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

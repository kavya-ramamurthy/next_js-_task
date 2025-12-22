

async function getTime() {
  const res = await fetch(
    "https://worldtimeapi.org/api/timezone/Etc/UTC",
    {
      next: { revalidate: 10 }, 
    }


  )

  if (!res.ok) {
    throw new Error("Failed to fetch time")
  }

  return res.json()
}
  

export default async function ISRPage() {
  const data = await getTime()

  return (
    <div>
      <h1>ISR Demo</h1>
      <p>Current UTC Time:{}</p>
      <h2>{data.datetime}</h2>
      <p>(Page regenerates every 10 seconds)</p>
    </div>
  )
}

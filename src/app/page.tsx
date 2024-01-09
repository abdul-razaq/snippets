import db from "@/db"

export default async function Home() {

  const snippets = await db.snippet.findMany()

  return (
    <main>
      { snippets.map(snippet => {
        return (
          <div key={snippet.title}>
            {snippet.title}
          </div>
        )
      })}
    </main>
  )
}

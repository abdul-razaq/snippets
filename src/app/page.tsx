import db from "@/db"

import Link from "next/link"

export default async function Home() {

  const snippets = await db.snippet.findMany()

  return (
    <article className="flex flex-col space-y-2 justify-center w-1/2 mx-auto my-10 font-sans font-medium">
      <main className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Snippets</h1>
        <Link className="bg-blue-400 py-2 text-white text-center rounded-lg px-4 shadow-md" href="/snippets/new">Add Snippet</Link>
      </main>
      { snippets.map(snippet => {
        return (
          <div className="flex items-center justify-between font-light text-slate-800" key={snippet.id}>
            <p>{snippet.title}</p>
            <Link className="text-blue-600 font-regular" href={`snippets/${snippet.id}`}>View</Link>
          </div>
        )
      })}
    </article>
  )
}

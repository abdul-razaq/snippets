import React from 'react'
import { notFound } from 'next/navigation';
import Link from 'next/link';

import db from '@/db';
import * as actions from '@/actions';

interface ViewSnippetPageProps {
  params: {
    id: string
  }
}

export default async function ViewSnippetPage(props: ViewSnippetPageProps) {
  const { params: { id }} = props;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) }})

  if (!snippet) return notFound();

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className='p-4'>
      <div className='flex items-center my-6'>
        <h1 className='grow text-3xl text-slate-800 font-sans font-bold ml-8'>{snippet.title}</h1>
        <Link className='p-3 font-sans font-medium border border-slate-600 rounded text-xl mx-3' href={`/snippets/${id}/edit`}>Edit</Link>
        <form action={deleteSnippetAction}>
          <button className='p-3 font-sans font-medium border border-slate-600 rounded text-xl mx-3'>Delete</button>
        </form>
      </div>
      <pre className='bg-slate-300 p-10 font-sans font-medium text-2xl m-6 rounded-lg text-slate-800'>
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}

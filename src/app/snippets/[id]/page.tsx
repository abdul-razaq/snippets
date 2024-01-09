import React from 'react'
import { notFound } from 'next/navigation';

import db from '@/db';

interface ViewSnippetPageProps {
  params: {
    id: string
  }
}

export default async function ViewSnippetPage(props: ViewSnippetPageProps) {
  const { params: { id }} = props;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) }})

  if (!snippet) return notFound();

  return (
    <div>
      <h1>Snippet {snippet.id}</h1>
      <h2>{snippet.title}</h2>
      <code>{snippet.code}</code>
    </div>
  )
}

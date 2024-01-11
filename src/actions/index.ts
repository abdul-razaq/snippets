'use server';

import { redirect } from "next/navigation";
import db from "@/db";

export async function createSnippet(formState: any, formData:FormData) {
    
  const title = formData.get('title')
  const code = formData.get('code')

  if (typeof title !== 'string' || title.length < 3) {
    return {
      message: 'title needs to be longer'
    }
  }
  if (typeof code !== 'string' || code.length < 10) {
    return {
      message: 'code needs to be longer'
    }
  }

  const createdSnippet = await db.snippet.create({
    data: {
      title,
      code
    }
  })

  redirect('/')
}

export async function updateSnippet(id: number, code: string, formData: FormData) {
  await db.snippet.update({
    where: { id },
    data: {
      code
    }
  })

  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({where: { id }});

  redirect('/')
}

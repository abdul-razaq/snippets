'use client';

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

import * as actions from '@/actions';

interface IEditSnippetFormProps {
  snippet: Snippet
}

export default function EditSnippetForm({ snippet }: IEditSnippetFormProps) {
  const [enteredCode, setEnteredCode] = useState(snippet.code);

  function handleEditorChange(value: string = '') {
    setEnteredCode(value);
  }

  const editSnippetAction = actions.updateSnippet.bind(null, snippet.id, enteredCode)

  return (
    <div className="p-6">
      <form action={editSnippetAction} className="flex flex-col items-start gap-6">
        <Editor
          height="40vh"
          theme="vs-dark"
          language="javascript"
          defaultValue={snippet.code}
          onChange={handleEditorChange}
          options={{
            minimap: {enabled: false}
          }}
       />

       <button type="submit" className="p-3 bg-blue-400 text-white font-sans font-medium rounded-lg shadow-md">Submit Changes</button>
      </form>
    </div>
  )
}

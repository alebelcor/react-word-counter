'use client';

import { useState } from "react"

export default function Home() {
  const [content, setContent] = useState('')
  const [wordCount, setWordCount] = useState(0)

  return (
    <main className="py-4 px-8 flex flex-col items-center gap-8">
      <h1 className="text-2xl font-semibold text-center">Word Counter</h1>

      <textarea
        className="p-4 w-full max-w-4xl resize-y border border-black rounded-lg text-black "
        name="text"
        value={content}
        onChange={(event) => {
          const content = event.target.value ?? '';

          setContent(content);
          setWordCount(content.replace(/[.,;:\-–—\/]/g, ' ').split(' ').filter(Boolean).length)
        }}
      />

      {wordCount > 0 ? wordCount : undefined}
    </main>
  )
}

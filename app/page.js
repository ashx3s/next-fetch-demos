'use client';

import { useState, useEffect } from 'react'

export default function Home() {
  const [characters, setCharacters] = useState(null)
 
  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch('https://api.disneyapi.dev/character')
      const data = await res.json()
      setCharacters(data)
      console.log(data)
    }
    fetchCharacters()
  }, [])
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        {/* TODO: Render Data  */}
      </main>

    </div>
  );
}

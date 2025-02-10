"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {

        const res = await fetch("https://api.disneyapi.dev/character");
        const data = await res.json();
        setCharacters(data.data);
      } catch(err) { 
        console.error("Fetch Error: ", err)
      }
    }
    fetchCharacters();
  }, []);

  console.log("Characters: ", characters);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <ul>
          {characters.map((character, index) => {
            return <li key={index}>{character.name}</li>
          })}  
        </ul>
      </main>
    </div>
  );
}

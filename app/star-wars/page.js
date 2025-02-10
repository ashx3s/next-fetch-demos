"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function StarWars() {
  const [starWarsChars, setStarWarsChars] = useState([]);

  useEffect(() => {
    async function fetchStarWars() {
      try {
        let { data: characters, error } = await supabase
          .from("characters")
          .select("name");
          setStarWarsChars(characters);
      } catch (err) {
        console.error("Fetch Error: ", err);
      }
    }
    fetchStarWars();
  }, []);

  console.log("Star Characters: ", starWarsChars);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1>Star wars characters</h1>
        <ul>
          {starWarsChars.map((character) => {
            return (
              <li key={character.id}>{character.name}</li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}

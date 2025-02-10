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
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className=''>
        <header className='my-12'>
          <h1 className='text-4xl'>Star wars characters</h1>
          <p>
            These characters are coming from the supabase instance we looked at
            in class
          </p>
        </header>
        <div>
          <ul>
            {starWarsChars.map((character, index) => {
              return <li key={index}>{character.name}</li>;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

import { supabase } from "../../lib/supabase";
async function StarWarsCharacters() {
  let characters;
  try {
    let { data, error } = await supabase.from("characters").select("name");
    if (error) {
      throw new Error(error);
    }
    characters = data;
  } catch (error) {
    console.error("Fetch Error: ", error);
  }
  return (
    <div>
      <ul>
        {characters.map((character, index) => {
          return <li key={index}>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default function StarWars() {
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
        <StarWarsCharacters />
      </main>
    </div>
  );
}

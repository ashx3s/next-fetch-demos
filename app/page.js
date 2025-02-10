async function CharacterList() {
  // fetch from api
  let characters = [];
  try {
    const res = await fetch("https://api.disneyapi.dev/character");
    if (!res.ok) {
      throw new Error("Fetch response error");
    }
    const data = await res.json();
    characters = data.data;
  } catch (error) {
    console.error("Data Fetching Error: ", error);
  }
  return (
    <ul>
      {characters.map((character, index) => {
        return <li key={index}>{character.name}</li>;
      })}
    </ul>
  );
}
export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

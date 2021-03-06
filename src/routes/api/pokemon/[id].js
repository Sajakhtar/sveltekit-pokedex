export async function get({ params }) {

  const id = params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();

  return {
    status: 200,
    body: pokeman
  }
}


// navigate to http://localhost:3000/api/pokemon/1 to see results, or use any other ID

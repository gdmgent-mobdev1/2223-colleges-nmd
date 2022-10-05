const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";
const POST_USERS_API ="https://reqres.in/api/users";
const getPokemon =  async(name) => {
const response = await fetch(`${POKE_API_URL}${name}`)
if(!response.ok) throw new Error("The given response is not ok");
const pokemon = await response.json();
return
}

getPokemon('ditto')
  .then((pokemonData) => {
    console.log(pokemonData)
  })
  .catch((e) => console.error(e.message));
  
  
const createUser = async () => {
  const user = {
    name: 'Jannes',
    job: 'webdev'
  }

  const response = await fetch(POST_USERS_API, {
    method: 'post',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if(!response.ok) throw new Error('The given response is not ok');
  return await response.json();

}

createUser()
.then((user) => console.log(user))
.catch((e) => console.error(e.message));
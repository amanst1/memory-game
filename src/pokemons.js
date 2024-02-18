import {v4 as uuidv4} from 'uuid'

const randomInt = Math.floor(Math.random() * 100) + 1;

const pokemons = [
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${randomInt}/`, 
        id: uuidv4()
    }
]

export default pokemons
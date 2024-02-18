import {v4 as uuidv4} from 'uuid'

const numbers = []
    
while (numbers.length < 13) {
    const num = Math.floor(Math.random() * 100) + 1;
    if(numbers.includes(num)) {
        continue
    } else {
        numbers.push(num)
    }
}

const pokemons = [
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[0]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[1]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[2]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[3]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[4]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[5]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[6]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[7]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[8]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[9]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[10]}/`, 
        id: uuidv4()
    },
    {
        url:`https://pokeapi.co/api/v2/pokemon/${numbers[11]}/`, 
        id: uuidv4()
    }
]

export default pokemons
import { generatePokeImg } from '@/utils/generatePokeImg';
import { type NextRequest } from 'next/server';

const getPokemon = (pokemon: Pokemon) => {
    let pokemonId = Number(pokemon.url.split("/").at(-2));
    pokemon.id = pokemonId;
    pokemon.front_default = generatePokeImg(pokemonId);
    return pokemon;
}

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    let pokemons: Pokemons = [];
    if (slug !== 'selected') {
        const { pokemon }: { pokemon: PokemonForms; } = await (await fetch(`https://pokeapi.co/api/v2/type/${slug}`)).json();
        pokemons = pokemon.map(({ pokemon }) => getPokemon(pokemon));
    } else {
        const { results }: { results: Pokemons } = await (await fetch(`https://pokeapi.co/api/v2/pokemon`)).json();
        pokemons = results.map(getPokemon);
    }
    return Response.json(pokemons);
}

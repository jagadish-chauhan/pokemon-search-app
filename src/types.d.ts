type Pokemon = {
    name: string;
    url: string;
    front_default?: string;
    id?: string | number;
}
type Pokemons = Pokemon[];
type PokemonType = {
    name: string;
    url: string;
}
type PokemonsType = PokemonType[];
type PokemonForm = {
    pokemon: Pokemon,
    slot: number,
}
type PokemonForms = PokemonForm[];
export function generatePokeImg(pokemonId: number | string) {
    const LINK = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    return LINK;
}

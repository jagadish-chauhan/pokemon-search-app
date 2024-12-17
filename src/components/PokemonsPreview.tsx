import { useCallback } from "react";
import PokemonPreview from "./PokemonPreview"

type PokemonsPreviewProps = {
    items: Pokemons;
    loading: boolean;
    searchKey: string;
}

export default function PokemonsPreview({ items, loading, searchKey }: PokemonsPreviewProps) {

    let filteredResult = useCallback(() => {
        return items.filter((item) => item.name.toLowerCase().includes(searchKey))
    }, [searchKey, loading]);

    if (loading) {
        return <div className="ml-4 mt-7 font-bold text-lg"> Loading Pokemons </div>
    } else if (filteredResult().length === 0) {
        return <div className="ml-4 mt-7 font-bold text-lg"> No Pokemon found </div>
    } else {
        return filteredResult().map(item => <PokemonPreview key={item.name} data={item} />)
    }

}
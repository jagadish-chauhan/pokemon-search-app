'use client'
import React from "react";
import PokemonsPreview from "@/components/PokemonsPreview";
import SearchInput from "@/components/SearchInput";
import SelectPokemonType from "@/components/SelectPokemonType";
import useFilter from "@/hooks/useFilters";

export default function Page() {

  const {
    selectedType,
    setSelectedType,
    setSearchKey,
    items,
    loading,
    searchKey
  } = useFilter();

  return (
    <div className="relative px-4 gap-3 flex flex-col" >
      <div className="max-w-md">
        <SelectPokemonType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
      <div className="max-w-xl">
        <SearchInput setSearchKey={setSearchKey} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <PokemonsPreview items={items} loading={loading} searchKey={searchKey} />
      </div>
    </div>
  );
}

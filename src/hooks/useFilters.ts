'use client'

import { generatePokeImg } from "@/utils/generatePokeImg";
import { useEffect, useState } from "react";

export default function useFilter() {

    const [searchKey, setSearchKey] = useState<string>("");
    const [selectedType, setSelectedType] = useState<string>("Selected");
    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<any>([]);

    
    useEffect(() => {
        setLoading(true);
        setSearchKey("");
        fetch(`/api/type/${selectedType.toLowerCase()}`)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .finally(() => setLoading(false))
    }, [selectedType])

    return {
        selectedType,
        setSelectedType,
        searchKey,
        setSearchKey,
        items,
        loading,
    }
}
import { useEffect, useState } from "react";

import { TGetCharactersFilterArgs } from "../services/characters/getCharactersService.types";

export type TUseFiltersState = TGetCharactersFilterArgs

export const useFilters = () => {
    const [filters, setFilters] = useState<TUseFiltersState>({
        name: undefined,
        status: undefined,
        species: undefined,
        type: undefined,
        gender: undefined
    });


    const handleFilterChange = (key: keyof TUseFiltersState, value: TUseFiltersState[keyof TUseFiltersState]) => {
        const newFilters = {
            ...filters,
            [key]: value
        };
        setFilters(newFilters);
    };

    return {
        filters,
        handleFilterChange
    };

}

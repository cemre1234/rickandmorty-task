import { Container, Row } from "react-bootstrap";
import { Maybe, ObjectKeys } from "../utils/appTypes";
import { TGetCharactersFilterArgs, TGetCharactersServiceArgs } from "../services/characters/getCharactersService.types";
import { useEffect, useRef, useState } from "react";

import { CharacterList } from "../components/CharacterList";
import { FilterArea } from "../components/FilterArea";
import { ListPagination } from "../components/ListPagination";
import { useCharacters } from "../hooks/useCharacters";
import { useFilters } from "../hooks/useFilters";
import { usePagination } from "../hooks/usePagination";

export const HomeScreen: React.FC = () => {

    const lastCalledServiceArgsRef = useRef<Maybe<TGetCharactersServiceArgs>>(null);

    const { characters, loading, responseInfo, getCharacters } = useCharacters();
    const totalPages = responseInfo?.pages || 1;

    const { filters, handleFilterChange } = useFilters();

    const { page, setPage } = usePagination({
        initialPage: 1,
        totalPages: responseInfo?.pages || 1
    });

    useEffect(() => {
        const filterKeys = Object.keys(filters) as ObjectKeys<TGetCharactersFilterArgs>;

        const areFiltersSame = lastCalledServiceArgsRef.current === null || filterKeys.every((key) => filters[key] === lastCalledServiceArgsRef.current?.[key])
        const isPageSame = lastCalledServiceArgsRef.current?.page === page;
        
        console.log('areFiltersSame', areFiltersSame);
        console.log('isPageSame', isPageSame);
        if (areFiltersSame && isPageSame) {
            return;
        }

        getCharacters({ page, ...filters });
        lastCalledServiceArgsRef.current = { page, ...filters };
        () => {
            lastCalledServiceArgsRef.current = null;
        }
    }, [getCharacters, page, filters]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container-wrapper">
            <Container>
                <FilterArea onFilterChange={handleFilterChange} filters={filters} />
                <CharacterList characters={characters} />
                <Row className="justify-content-center">
                    <ListPagination page={page} totalPages={totalPages} onPageChange={setPage} />
                </Row>
            </Container>
        </div>
    );
}
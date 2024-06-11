import { useState } from "react";

export type TUsePaginationResult = {
    page: number;
    nextPage: () => void;
    previousPage: () => void;
    setPage: (page: number) => void;
}

export type TUsePaginationProps = {
    initialPage: number;
    totalPages: number;
}

export const usePagination = (
    {
        initialPage,
        totalPages,
    }: TUsePaginationProps
): TUsePaginationResult => {
    
    const [page, setPageNumber] = useState(initialPage);

    const nextPage = () => {
        if (page < totalPages)
            setPage(page + 1);
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const setPage = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setPageNumber(page);
        }
    }

    return { page, nextPage, previousPage, setPage };
}
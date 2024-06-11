import { useEffect, useState } from "react";

import { Pagination } from "react-bootstrap";

export type TListPaginationProps = {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const ListPagination: React.FC<TListPaginationProps> = ({ page, totalPages, onPageChange }) => {
    const [displayRange, setDisplayRange] = useState<number[]>([]);

    const calculateDisplayRange = (page: number, totalPages: number) => {
        let start = page - 2;
        let end = page + 2;

        if (start < 1) {
            start = 1;
            end = 5;
        }

        if (end > totalPages) {
            end = totalPages;
            start = totalPages - 4 > 0 ? totalPages - 4 : 1;
        }

        // Create an array of numbers from start to end
        // [1, 2, 3, 4, 5]
        const result = Array.from({ length: end - start + 1 }).map((_, index) => start + index);
        return result;
    }

    useEffect(() => {
        setDisplayRange(calculateDisplayRange(page, totalPages));
    }, [page, totalPages]);

    console.log('displayRange', displayRange);
    return (
        <Pagination className="d-contents">
            <Pagination.First onClick={() => onPageChange(1)} />
            <Pagination.Prev onClick={() => onPageChange(page - 1)} />
            {displayRange.map((item, index) => (
                <Pagination.Item
                    key={`${item}-${index}`}
                    active={item === page}
                    onClick={() => onPageChange(item)}
                >
                    {item}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => onPageChange(page + 1)} />
            <Pagination.Last onClick={() => onPageChange(totalPages)} />
        </Pagination>
    );
}
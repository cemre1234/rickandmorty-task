import { Col, Form, Row } from "react-bootstrap";

import { FilterSelectCol } from "./FilterSelectCol";
import { FilterTextCol } from "./FilterTextCol";
import React from "react";
import { useFilters } from "../hooks/useFilters";

export type TFilterAreaProps = {
    onFilterChange: ReturnType<typeof useFilters>['handleFilterChange'];
    filters: ReturnType<typeof useFilters>['filters'];
}

export const FilterArea: React.FC<TFilterAreaProps> = ({
    onFilterChange,
    filters
}) => {

    return (
        <Form.Group className="mb-20">
            <Row>
                <FilterTextCol value={filters?.name} label="Filter by Name" placeholder="Enter name" name="name" onFilterChange={onFilterChange} />
                <FilterTextCol value={filters?.species} label="Filter by Species" placeholder="Enter species" name="species" onFilterChange={onFilterChange} />
                <FilterTextCol value={filters?.type} label="Filter by Type" placeholder="Enter type" name="type" onFilterChange={onFilterChange} />
                <FilterSelectCol value={filters?.gender} label="Filter by Gender" name="gender" options={[
                    { value: "", text: "All" },
                    { value: "female", text: "Female" },
                    { value: "male", text: "Male" },
                    { value: "genderless", text: "Genderless" },
                    { value: "unknown", text: "Unknown" },
                ]} onFilterChange={onFilterChange} />
                <FilterSelectCol value={filters?.status} label="Filter by Status" name="status" options={[
                    { value: "", text: "All" },
                    { value: "alive", text: "Alive" },
                    { value: "dead", text: "Dead" },
                    { value: "unknown", text: "Unknown" },
                ]} onFilterChange={onFilterChange} />
            </Row>
        </Form.Group>
    );
}
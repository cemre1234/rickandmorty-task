import { Col, Form } from "react-bootstrap";

import React from "react";
import { TFilterAreaProps } from "./FilterArea";
import { TGetCharactersFilterArgs } from "../services/characters/getCharactersService.types";

export type TFilterColTextProps = {
    label?: string,
    placeholder?: string,
    name: keyof TGetCharactersFilterArgs,
    onFilterChange: TFilterAreaProps['onFilterChange'],
    value?: string
}

export const FilterTextCol: React.FC<TFilterColTextProps> = ({
    label,
    placeholder,
    name,
    onFilterChange,
    value
}) =>
    <Col md={2}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control type="text" placeholder={placeholder} onChange={(evt) => onFilterChange(name, evt.target.value)} value={value} />
    </Col>
import { Col, Form } from "react-bootstrap"

import { TFilterAreaProps } from "./FilterArea"
import { TGetCharactersFilterArgs } from "../services/characters/getCharactersService.types"

export type TFilterColSelectProps = {
    label?: string,
    options: Array<{ value: string, text: string }>,
    name: keyof TGetCharactersFilterArgs,
    onFilterChange: TFilterAreaProps['onFilterChange'],
    value?: string
}


export const FilterSelectCol: React.FC<TFilterColSelectProps> = ({
    label,
    name,
    options,
    onFilterChange,
    value
}) =>
    <Col md={3}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control as="select" name={name} onChange={(evt) => {
            const value = evt.target.value.length === 0 ? undefined : evt.target.value
            onFilterChange(name, value)
        }} >
            {options.map((option) => (
                <option value={option.value} selected={value === option.value}>{option.text}</option>
            ))}
        </Form.Control>
    </Col>
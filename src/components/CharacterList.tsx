import { Col, Row } from "react-bootstrap";

import { CharacterListItem } from "./CharacterListItem";
import { TCharacter } from "../services/characters/getCharactersService.types";

export type TCharacterListProps = {
    characters: Array<TCharacter>;
}

export const CharacterList: React.FC<TCharacterListProps> = ({
    characters
}) => {
    return (
        <Row>
            {characters.map((character) => (
                <Col md={3} className="mb-20">
                    <CharacterListItem key={character.id} character={character} />
                </Col>
            ))}
        </Row>
    );
}
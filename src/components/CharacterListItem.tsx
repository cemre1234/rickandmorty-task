import { Card } from "react-bootstrap";
import { TCharacter } from "../services/characters/getCharactersService.types";
import { detailRoutePath } from "../utils/appRouter";
import { useNavigate } from "react-router-dom";

export type TCharacterListItemProps = {
    character: TCharacter;
}

export const CharacterListItem: React.FC<TCharacterListItemProps> = ({
    character
}) => {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(detailRoutePath(character.id))} className="pointer">
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                    {character.species} - {character.status}
                </Card.Text>
                <Card.Text>
                    {character.gender}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
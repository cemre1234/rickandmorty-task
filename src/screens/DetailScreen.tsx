import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useMemo, useState } from "react"

import { DetailHeader } from "../components/DetailHeader";
import { Maybe } from "../utils/appTypes";
import { TCharacter } from "../services/characters/getCharactersService.types";
import { apiEndpoints } from "../utils/apiEndpoints";
import { getSingleCharacterService } from "../services/characters/getSingleCharacterService"
import { useParams } from "react-router-dom";

export const DetailScreen: React.FC = () => {

    const [character, setCharacter] = useState<Maybe<TCharacter>>(null)
    const { characterId } = useParams();

    useEffect(() => {
        if (!characterId) return

        getSingleCharacterService(parseInt(characterId))
            .then((character) => {
                setCharacter(character)
            })

    }, [characterId])


    const episodeList = useMemo(() => {
        if (!character) return ""
        return character.episode.map(item => item.replace(`${apiEndpoints.episodes}/`, '')).join(", ")
    }, [character])


    if (!character) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <DetailHeader 
                back={() => window.history.back()}
                title={`Details of ${character.name}`}
            />
            <Row>
                <Col md={6}>
                    <img src={character.image} alt={character.name} className="w-100"/>
                </Col>
                <Col md={6}>
                    <h2>{character.name}</h2>
                    <p>{character.species} - {character.status}</p>

                    <h3>Origin</h3>
                    <p>{character.origin.name}</p>

                    <h3>Location</h3>
                    <p>{character.location.name}</p>

                    <h3>Episodes</h3>
                    <p>
                        {episodeList}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
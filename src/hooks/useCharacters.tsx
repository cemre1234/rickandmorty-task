import { TCharacter, TGetCharactersServiceArgs } from "../services/characters/getCharactersService.types";
import { useCallback, useState } from "react";

import { Maybe } from "../utils/appTypes";
import { TApiResponseInfo } from "../services/common/apiResponse";
import { getCharactersService } from "../services/characters/getCharactersService";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Array<TCharacter>>([]);
    const [loading, setLoading] = useState(true);
    const [responseInfo, setResponseInfo] = useState<Maybe<TApiResponseInfo>>(null);

    const getCharacters = useCallback((args?: TGetCharactersServiceArgs) => {
        getCharactersService(args || {})
            .then((data) => {
                setResponseInfo(data.info);
                setCharacters(data.results);
                setLoading(false);
            });
    }, []);

    return { characters, loading, responseInfo, getCharacters };
}
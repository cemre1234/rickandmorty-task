import { TCharacter, TGetCharactersServiceArgs } from "./getCharactersService.types";

import { TApiResponse } from "../common/apiResponse";
import { apiEndpoints } from "../../utils/apiEndpoints";
import { fetchHelper } from "../../utils/fetchHelper";

export const getCharactersService = async ({
    page = 1,
    ...args
}: TGetCharactersServiceArgs): Promise<TApiResponse<TCharacter>> => {
    
    const url = new URL(apiEndpoints.characters);
    url.searchParams.set("page", page.toString());

    Object.entries(args).forEach(([key, value]) => {
        if (!value) return;
        url.searchParams.set(key, value);
    });

    const data = await fetchHelper<TApiResponse<TCharacter>>(url.toString());
    return data;
};

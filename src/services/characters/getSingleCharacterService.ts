import { apiEndpoints } from "../../utils/apiEndpoints";
import { fetchHelper } from "../../utils/fetchHelper";

export const getSingleCharacterService = async (id: number) => {
    const url = new URL(`${apiEndpoints.characters}/${id}`);
    const data = await fetchHelper<TCharacter>(url.toString());
    return data;
}
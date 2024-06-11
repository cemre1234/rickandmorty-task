export type TCharacterGender = 'female' | 'male' | 'genderless' | 'unknown'
export type TCharacterStatus = 'alive' | 'dead' | 'unknown'

export type TGetCharactersFilterArgs = {
    name?: string;
    status?: TCharacterStatus;
    species?: string;
    type?: string;
    gender?: TCharacterGender
}

export type TGetCharactersServiceArgs = {
    page?: number;
} & TGetCharactersFilterArgs;

export type TCharacterLocation = {
    name: string;
    url: string;
}

export type TCharacter = {
    id: number;
    name: string;
    status: TCharacterStatus;
    species: string;
    type: string
    gender: TCharacterGender;
    origin: TCharacterLocation;
    location: TCharacterLocation;
    image: string;
    episode: Array<string>;
    url: string;
    created: string;
}
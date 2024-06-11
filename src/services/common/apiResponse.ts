export type TApiResponseInfo = {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export type TApiResponse<T> = {
    info: TApiResponseInfo;
    results: Array<T>;
}
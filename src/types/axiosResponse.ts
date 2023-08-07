export interface IAxiosResponse<T> {
    data: T;
    statusCode: number;
    error?: string;
}

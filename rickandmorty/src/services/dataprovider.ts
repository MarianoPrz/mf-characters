
import axios, { AxiosRequestConfig } from 'axios';
import { CharacterResponse } from '../models/character';
const BASE_URL = "https://rickandmortyapi.com/api";
import { rmApiResult } from '../rmApiResults';
class DataProvider {
    private static instance: DataProvider;
    private static headers: Record<string, string> = { "Content-Type": "application/json;charset=UTF-8" };


    public static setHeader(name: string, value: string) {
        this.headers[name] = value;
    }

    public static getHeader(name: string) {
        return this.headers[name];
    }

    private constructor() {

        const UNAUTHORIZED = 401;

        axios.interceptors.response.use(
            response => response,
            (error) => {
                const { status } = error.response;

                if (status === UNAUTHORIZED) {
                    //we do something to get fresh token
                }
                return Promise.reject(error);
            }
        );

    }
    public static getInstance(): DataProvider {
        if (!DataProvider.instance) {
            DataProvider.instance = new DataProvider();
        }

        return DataProvider.instance;
    }


    private static async get<T>(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(BASE_URL + path, {
            ...options, params,
            paramsSerializer: {
                encode: (params) => {
                    return params;
                }
            }, headers: this.headers
        });
        return response.data;
    }

    public async fetchCharacters(options?: AxiosRequestConfig): Promise<CharacterResponse> {
        // return DataProvider.get('/character', {}, options);
        return new Promise((resolve) => {
            setTimeout(() => resolve(rmApiResult), 400);
        });
    }
}

export default DataProvider;

export interface IValue {
    id: number;
    name: string;
}

export interface IFormModel {
    username: string;
    password: string;
}

export interface IDecodeToken {
    exp: number;
    iat: number;
    nameid: string;
    nbf: number;
    unique_name: string;
}
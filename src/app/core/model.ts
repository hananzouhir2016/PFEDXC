export interface JwtToken {
    idtoken: string;
}
export interface BarCode{
    barCode: string;
}
export interface WrapperResponse {
    jToken: JwtToken;
    barCode: BarCode;
}

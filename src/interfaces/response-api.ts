export default interface ResponseApi {
  message: string;
  error: boolean;
}

export interface ResponseApiResponse {
  response: ResponseApi;
}

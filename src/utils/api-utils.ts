import type ResponseApi from '@/interfaces/response-api';
import type { AxiosError } from 'axios';

export function getError(e: unknown): string {
  const axiosError = e as AxiosError;
  const error = axiosError.response;
  if (!error) {
    return `Erro desconhecido, entre em contato com o administrador.`;
  }
  const responseApi = error.data as ResponseApi;
  if (Array.isArray(responseApi.message)) {
    return responseApi.message.join(', ');
  }
  return responseApi.message;
}

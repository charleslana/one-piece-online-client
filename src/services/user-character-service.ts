import api from '@/config/api';
import type { ResponseApiResponse } from '@/interfaces/response-api';
import type ResponseApi from '@/interfaces/response-api';
import type {
  CreateUserCharacter,
  UserCharacter,
  UserCharacterResponse,
} from '@/interfaces/user-character';

export default class UserCharacterService {
  private static baseUrl = 'api.json';

  static async getAll(): Promise<UserCharacter[]> {
    const response = await api.get<UserCharacterResponse>(this.baseUrl);
    return response.data.userCharacters;
  }

  static async createCharacter(dto: CreateUserCharacter): Promise<ResponseApi> {
    const response = await api.post<ResponseApiResponse>(this.baseUrl, dto);
    return response.data.response;
  }

  static async selectCharacter(id: string): Promise<UserCharacter[]> {
    const response = await api.get<UserCharacterResponse>(`${this.baseUrl}/${id}`);
    return response.data.userCharacters;
  }

  static async deleteCharacter(_id: string): Promise<ResponseApi> {
    // const response = await api.delete<ResponseApiResponse>(`${this.baseUrl}/${id}`);
    const response = await api.delete<ResponseApiResponse>(this.baseUrl);
    return response.data.response;
  }
}

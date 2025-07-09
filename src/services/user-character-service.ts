import api from '@/config/api';
import type { UserCharacter, UserCharacterResponse } from '@/interfaces/user-character';

export default class UserCharacterService {
  private static baseUrl = 'api.json';

  static async getAll(): Promise<UserCharacter[]> {
    const response = await api.get<UserCharacterResponse>(this.baseUrl);
    return response.data.userCharacters;
  }
}

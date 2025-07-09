import api from '@/config/api';
import type { Character, CharacterResponse } from '@/interfaces/character';

export default class CharacterService {
  private static baseUrl = 'api.json';

  static async getAll(): Promise<Character[]> {
    const response = await api.get<CharacterResponse>(this.baseUrl);
    return response.data.characters;
  }
}

import api from '@/config/api';
import type { Sea, SeaResponse } from '@/interfaces/sea';

export default class SeaService {
  private static baseUrl = 'api.json';

  static async getAll(): Promise<Sea[]> {
    const response = await api.get<SeaResponse>(this.baseUrl);
    return response.data.sea;
  }
}

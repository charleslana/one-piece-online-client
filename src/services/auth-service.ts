import api from '@/config/api';
import type { Auth } from '@/interfaces/auth';

export default class AuthService {
  //   private static baseUrl = '/auth/login';
  private static baseUrl = 'api.json';

  static async login(email: string, password: string): Promise<string> {
    const response = await api.post<Auth>(this.baseUrl, { email, password });
    return response.data.auth.access_token;
  }
}

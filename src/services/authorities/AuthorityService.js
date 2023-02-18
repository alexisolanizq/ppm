import HttpClient from '@Services/api/HttpClient';
import { API_AUTHORITIES } from '@Const/constUrls';

export default class AuthorityService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AuthorityService();
    }

    return this.classInstance;
  }

  getAuthorities = async () =>
    this.instance.get(API_AUTHORITIES).then(
      (response) => response,
      (error) => error
    );

  createAuthority = async (data) =>
    this.instance.post(API_AUTHORITIES, data).then(
      (response) => response,
      (error) => error
    );

  updateAuthority = async (id, data) =>
    this.instance.put(`${API_AUTHORITIES}/${id}`, data).then(
      (response) => response,
      (error) => error
    );
}

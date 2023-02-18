import HttpClient from '../api/HttpClient';
import { API_LEVEL } from '@Const/constUrls';

export default class PermissionService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PermissionService();
    }

    return this.classInstance;
  }

  listPermissions = () =>
    this.instance.get(API_LEVEL).then((response) => response);

  createPermissionLevel = (data) =>
    this.instance.post(API_LEVEL, data).then((response) => response);

  updatePermissionLevel = async (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_LEVEL}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}

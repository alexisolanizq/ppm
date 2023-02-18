import HttpClient from '@Services/api/HttpClient';
import { API_TMP_REPO_FOLDERS } from '@Const/constUrls';

export default class TempFolderService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new TempFolderService();
    }

    return this.classInstance;
  }

  listTempRepoFolders = async () =>
    this.instance.get(API_TMP_REPO_FOLDERS).then(
      (response) => response,
      (error) => error
    );

  newTempRepoFolders = async (data) =>
    this.instance.post(API_TMP_REPO_FOLDERS, data).then(
      (response) => response,
      (error) => error
    );

  updateTempRepoFolders = async (id, data) =>
    this.instance.put(`${API_TMP_REPO_FOLDERS}/${id}`, data).then(
      (response) => response,
      (error) => error
    );
}

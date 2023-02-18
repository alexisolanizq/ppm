import CustomHttpClient from '@Services/api/CustomHttpClient';
import { EDITOR_API_URL } from '@Const/config';

const requestHeaders = { 'Content-Type': 'multipart/form-data' };

export default class SyncfusionService extends CustomHttpClient {
  constructor() {
    super(EDITOR_API_URL, requestHeaders);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new SyncfusionService();
    }

    return this.classInstance;
  }

  getFile = async (data) =>
    this.instance.post('Import', data).then(
      (response) => response,
      (error) => error
    );
}

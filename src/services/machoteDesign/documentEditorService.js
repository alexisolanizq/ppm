import CustomHttpClient from '@Services/api/CustomHttpClient';
import { EDITOR_API_URL } from '@Const/config';

const responseType = 'blob';
const requestHeaders = { 'Content-Type': 'application/msword' };

export default class DocumentEditorService extends CustomHttpClient {
  constructor() {
    super(EDITOR_API_URL, requestHeaders, responseType);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new DocumentEditorService();
    }

    return this.classInstance;
  }

  getFile = async () =>
    this.instance.get('getFile').then(
      (response) => response,
      (error) => error
    );

  sendFile = async (data) => {
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    return this.instance.post('uploadFile', data, options).then(
      (response) => response,
      (error) => error
    );
  };
}

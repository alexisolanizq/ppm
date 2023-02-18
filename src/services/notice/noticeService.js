
import HttpClient from '../api/HttpClient';
import {
  API_HOLDER_LIST,
  API_NOTICE,
  API_NOTICES
} from '@Const/constUrls';

export default class NoticeService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new NoticeService();
    }

    return this.classInstance;
  }

  getNotices = () => this.instance.get(API_NOTICE).then((response) => response);

  getHolders = () =>
    this.instance.get(API_HOLDER_LIST).then((response) => response.data);

  getNoticeNames = () =>
    this.instance.get(API_NOTICES).then((response) => response.data);

  createNotice = (payload) => {
    const data = payload || {};

    return this.instance.post(API_NOTICE, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateNotice = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_NOTICE}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}

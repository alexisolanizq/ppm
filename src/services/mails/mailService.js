import HttpClient from '../api/HttpClient';
import { API_BANKS, GET_CURRENCIES, API_MAILS } from '@Const/constUrls';
import { STORAGE_ACCESS_TOKEN } from '@Const/storage';

export const accessToken = localStorage.getItem(STORAGE_ACCESS_TOKEN);
export default class MailService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MailService();
    }

    return this.classInstance;
  }
  
  findMails = (data) => 
    this.instance.get(`${API_MAILS}/query/${data}?access_token=${accessToken}`).then((response) => response.data);
 
  getMails = () => 
    this.instance.get(`${API_MAILS}?access_token=${accessToken}&maxResults=10`).then((response) => response.data);

  getMailsSends = () => 
    this.instance.get(`${API_MAILS}/list/SENT?access_token=${accessToken}&maxResults=5`).then((response) => response.data);
 
  getMailsAttachment = () => 
    this.instance.get(`${API_MAILS}/list/DRAFT?access_token=${accessToken}`).then((response) => response.data);

  getMail = (messageId) => 
    this.instance.get(`${API_MAILS}/${messageId}?access_token=${accessToken}`).then((response) => response.data);
  
  getAttachmentFile = ({ emailAddress, messageId,attachmentId, filename, mimeType}) => this.instance.get(`${API_MAILS}/attachment?emailAddress=${emailAddress}&messageId=${messageId}&attachmentId=${attachmentId}&fileName=${filename}&mimeType=${mimeType}&access_token=${accessToken}`).then((response) => response.data);

  getCurrencies = () =>
    this.instance.get(GET_CURRENCIES).then((response) => response.data);

  createMail = (payload) => {
    const data = payload || {};

    return this.instance.post(API_MAILS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createMailDraft = (payload) => {
    const data = payload || {};

    return this.instance.post(`${API_MAILS}/draft`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateBank = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_BANKS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}

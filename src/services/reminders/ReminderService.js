import { API_REMINDERS } from '@Const/constUrls';
import HttpClient from '../api/HttpClient';

export default class ReminderService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ReminderService();
    }
    return this.classInstance;
  }

  getReminders = () =>
    this.instance.get(API_REMINDERS).then((response) => response.data);

  createReminder = (payload) => {
    const data = payload || {};
    return this.instance.post(API_REMINDERS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateReminder = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_REMINDERS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}

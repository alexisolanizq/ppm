import HttpClient from '../api/HttpClient';
import { API_COORDINATIONS } from '@Const/constUrls';

export default class CoordinationsService extends HttpClient {
  static getInstance() {
      if (!this.classInstance) {
        this.classInstance = new CoordinationsService();
      }
  
      return this.classInstance;
  }
  
  getCoordinations = () =>
    this.instance.get(API_COORDINATIONS).then((response) => response.data);
    
  createCoordinations = (payload) => {
    const data = payload || {};

    return this.instance.post(API_COORDINATIONS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateCoordinations = (id, payload) => {
    const data = payload || {}
    return this.instance.put(`${API_COORDINATIONS}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

}
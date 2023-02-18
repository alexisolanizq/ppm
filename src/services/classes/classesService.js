import HttpClient from '../api/HttpClient';
import {
  API_REFERENCE_TYPE_CLASSES,
  API_TYPE_CLASSES,
  API_PPM_CLASSES
} from '@Const/constUrls';

export default class ClassesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ClassesService();
    }

    return this.classInstance;
  }
  
  getPPMClass = () =>
  this.instance.get(API_PPM_CLASSES).then((response) => response.data);
  
  getReferenceTypeClasses = () =>
  this.instance.get(API_REFERENCE_TYPE_CLASSES).then((response) => response.data);
  
  getTypeClasse = () =>
    this.instance.get(API_TYPE_CLASSES).then((response) => response.data);

  createClasses = (payload) => {
    const data = payload || {};

    return this.instance.post(API_REFERENCE_TYPE_CLASSES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createPPMClass = (payload) => {
    const data = payload || {};
    return this.instance.post(API_PPM_CLASSES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateClasses = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_REFERENCE_TYPE_CLASSES}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updatePPMClasses = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_PPM_CLASSES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}

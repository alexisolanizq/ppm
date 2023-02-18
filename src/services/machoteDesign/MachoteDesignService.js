import HttpClient from '@Services/api/HttpClient';
import {
  GET_LANGUAGES,
  GET_TEMPLATE_TYPES,
  GET_AGENTS,
  GET_HOLDERS
} from '@Const/constUrls';

export default class MachoteDesignService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MachoteDesignService();
    }

    return this.classInstance;
  }

  getLanguages = async () =>
    this.instance.get(GET_LANGUAGES).then(
      (response) => response,
      (error) => error
    );

  getTemplateTypes = async () =>
    this.instance.get(GET_TEMPLATE_TYPES).then(
      (response) => response,
      (error) => error
    );

  getAgents = async () =>
    this.instance.get(GET_AGENTS).then(
      (response) => response,
      (error) => error
    );

  getHolders = async () =>
    this.instance.get(GET_HOLDERS).then(
      (response) => response,
      (error) => error
    );
}

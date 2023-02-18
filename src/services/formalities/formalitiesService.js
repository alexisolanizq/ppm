import { API_FORMALITIES } from "@Const/constUrls";
import HttpClient from "@Services/api/HttpClient";

export default class FormalitiesService extends HttpClient {

    static getInstance(){
        if (!this.classInstance) {
            this.classInstance = new FormalitiesService()
        }
        return this.classInstance
    }

    getFormalitieById = (id) => this.instance.get(`${API_FORMALITIES}/${id}`).then(response => response.data)

    listFormalities = () => this.instance.get(API_FORMALITIES).then(response => response.data)
}

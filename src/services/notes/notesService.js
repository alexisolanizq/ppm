import HttpClient from '../api/HttpClient';
import { API_NOTES } from '@Const/constUrls'

export default class NotesService extends HttpClient {
    static getInstance() {
        if (!this.classInstance) {
          this.classInstance = new NotesService();
        }
    
        return this.classInstance;
    }
    
    listNotes = () => (
        this.instance.get(API_NOTES)
        .then((response) => response.data)
    )

    createNote = async (data) => (
        this.instance.post(API_NOTES, data)
            .then(
                (response) => response.status,
            (error) => error
        )
    )

    updateNote = async (id, data) => (
        this.instance.put(`${API_NOTES}/${id}`, data)
        .then(
            (response) => response.status,
            (error) => error
        )
    )
}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

// Com essa anotação informamos que nossa classe pode ser injetável 
// e vamos utilizar somente uma instância para toda a aplicação
@Injectable({providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient){}

    listFromUser(userName: string){
       return this.http.get<Photo[]>(API + '/flavio/photos');     
    }
}
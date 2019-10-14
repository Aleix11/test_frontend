import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {Gnome} from "../models/gnome";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GnomeService {

    // URL to web api
    private url: string = '/rrafols/mobile_test/master/data.json';

    constructor(public http: HttpClient) {
    }

    getGnome() : Observable<any> {
        httpOptions.headers.append('Access-Control-Allow-Origin' , '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.get<any>(`${this.url}`, httpOptions);
    }

}

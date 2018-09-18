import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: Http) {}

  getUrl(url){
    return this.http.get(url);
 }
 

}

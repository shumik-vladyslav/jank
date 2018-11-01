import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private _code:string;
  public set code(v : string) {
    localStorage.setItem('chipher_works_code', v);
    this._code = v;
  }
  
  public get code() : string {
    return this._code;
  }
  
  constructor() {
    this._code = localStorage.getItem('chipher_works_code');
  }

  public signOut() {
    localStorage.removeItem('chipher_works_code');
  }

}

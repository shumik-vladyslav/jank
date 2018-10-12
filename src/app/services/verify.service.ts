import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  url = "http://cwpilotone.us-east-2.elasticbeanstalk.com";

  constructor(private http: Http) { }

  getUrl(url, obj) {
    return this.http.post(url, obj);
  }

  singUp(name, email) {
    return this.http.post(this.url + `/cwRegisterDataAgent?companyName=${name}&emailId=${email}`, [])
  }

  singIn(user, pass) {
    return this.http.post(this.url + `/cwLogin?emailId=${user}&password=${pass}`, [])
  }

  forgetPass(user) {
    return this.http.post(this.url + `/cwResetPassword?emailId=${user}`, [])
  }
  
  changePass(email, oldPass, newPass) {
    return this.http.post(this.url + `/cwConfirmRegistration?emailId=${email}&oldPass=${oldPass}&newPass=${newPass}`, [])
  }

  DataOwnerRequestQueue(obj:any) {
    return this.http.post(this.url + `/cwGetDataOwnerRequestSummary?${obj.minId ? 'minId=' + obj.minId : ''}${obj.recordCount ? '&recordCount=' + obj.recordCount : ''}${obj.type ? '&type=' + obj.type : ''}${obj.sigId ? '&sigId=' + obj.sigId : ''}${obj.userId ? '&userId=' + obj.userId : ''}${obj.requestDateBegin ? '&requestDateBegin=' + obj.requestDateBegin : ''}${obj.requestDateEnd ? '&requestDateEnd=' + obj.requestDateEnd : ''}${obj.fulfillDateBegin ? '&fulfillDateBegin=' + obj.fulfillDateBegin : ''}${obj.fulfillDateEnd ? '&fulfillDateEnd=' + obj.fulfillDateEnd : ''}${obj.status ? '&status=' + obj.status : ''}`, [])
  }
  
  GetDEKeySummary(obj:any) {
    return this.http.post(this.url + `/cwGetDEKeySummary?${obj.minId ? 'minId=' + obj.minId : ''}${obj.recordCount ? '&recordCount=' + obj.recordCount : ''}${obj.keyRingId ? '&keyRingId=' + obj.keyRingId : ''}  ${obj.keyId ? '&keyId=' + obj.keyId : ''}  ${obj.version ? '&version=' + obj.version : ''}  ${obj.status || obj.status == 0 ? '&status=' + obj.status : ''}  ${obj.createDateBegin ? '&createDateBegin=' + obj.createDateBegin : ''}  ${obj.createDateEnd ? '&createDateEnd=' + obj.createDateEnd : ''}  ${obj.updateDateBegin ? '&updateDateBegin=' + obj.updateDateBegin : ''}  ${obj.updateDateEnd ? '&updateDateEnd=' + obj.updateDateEnd : ''}  ${obj.expiryDateBegin ? '&expiryDateBegin=' + obj.expiryDateBegin : ''}  ${obj.expiryDateEnd ? '&expiryDateEnd=' + obj.expiryDateEnd : ''}`, [])
  }

  PutDEKeyDetails(obj:any) {
    return this.http.post(this.url + `/cwPutDEKeyDetails?id=${obj.id}&keyRingId=${obj.keyRingId}&keyId=${obj.keyId}&version=${obj.version}&expirationDate=${obj.expirationTime}&status=${obj.status}&masterKeyProvider=${obj.masterKeyProvider}&masterKeyConnectionString=${obj.masterKeyConnectionString}&description=${obj.description}`,[])
  }

  DeleteDEKey(obj:any) {
    return this.http.post(this.url + `/cwDeleteDEKey?id=${obj.id}&keyRingId=${obj.keyRingId}&keyId=${obj.keyId}&version=${obj.version}`,[])
  }

  GetSensetiveDataSummary(obj:any){
    //return this.http.post(this.url + `/cwGetSensitiveDataSummary?${obj.minId ? 'minId=' + obj.minId : ''}${obj.recordCount ? '&recordCount=' + obj.recordCount : ''}${obj.sigId ? '&sigId=' + obj.sigId : ''}${obj.status ? '&status=' + obj.status : ''}&keyContext=${obj.keyContext}-${obj.keyId}-${obj.version}${obj.createDateBegin ? '&createDateBegin=' + obj.createDateBegin : ''}${obj.createDateEnd ? '&createDateEnd=' + obj.createDateEnd : ''}${obj.updateDateBegin ? '&updateDateBegin=' + obj.updateDateBegin : ''}${obj.updateDateEnd ? '&updateDateEnd=' + obj.updateDateEnd : ''}${obj.expirationDateBegin ? '&expirationDateBegin=' + obj.expirationDateBegin : ''}${obj.expirationDateEnd ? '&expirationDateEnd=' + obj.expirationDateEnd : ''}`,[])
    return this.http.post(this.url + `/cwGetSensitiveDataSummary?${obj.minId ? 'minId=' + obj.minId : ''}${obj.recordCount ? '&recordCount=' + obj.recordCount : ''}${obj.sigId ? '&sigId=' + obj.sigId : ''}${obj.status ? '&status=' + obj.status : ''}${obj.keyContext ? '&keyContext=' + obj.keyContext + '-' + obj.keyId + '-' + obj.version : ''}${obj.createDateBegin ? '&createDateBegin=' + obj.createDateBegin : ''}${obj.createDateEnd ? '&createDateEnd=' + obj.createDateEnd : ''}${obj.updateDateBegin ? '&updateDateBegin=' + obj.updateDateBegin : ''}${obj.updateDateEnd ? '&updateDateEnd=' + obj.updateDateEnd : ''}${obj.expirationDateBegin ? '&expirationDateBegin=' + obj.expirationDateBegin : ''}${obj.expirationDateEnd ? '&expirationDateEnd=' + obj.expirationDateEnd : ''}`,[])
  }

  AddCommentToSigId(obj:any){
    return this.http.post(this.url + `/cwAddCommentToSigId?sigId=${obj.sigId}&comment=${obj.comment}`,[])
  }
  putData(obj:any) {
    return this.http.post(this.url + `/cwPutDataOwnerRequest?id=${obj.id}&status=${obj.status}&newComment=${obj.newComment}`, {})
  }
}

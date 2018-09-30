import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: Http) { }

  getUrl(url, obj) {
    return this.http.post(url, obj);
  }

  singUp(name, email) {
    return this.http.post('http://cwpilotone.us-east-2.elasticbeanstalk.com' + `/cwRegisterDataAgent?companyName=${name}&emailId=${email}`, [])
  }

  singIn(user, pass) {
    return this.http.post('http://cwpilotone.us-east-2.elasticbeanstalk.com' + `/cwAuthenticateUser?user=${user}&pass=${pass}`, [])
  }

  forgetPass(user) {
    return this.http.post('http://cwpilotone.us-east-2.elasticbeanstalk.com' + `/cwResetPassword?emailId=${user}`, [])
  }
  
  changePass(email, oldPass, newPass) {
    return this.http.post('http://cwpilotone.us-east-2.elasticbeanstalk.com' + `/cwChangePassword?email=${email}&oldPass=${oldPass}&newPass=${newPass}`, [])
  }

  DataOwnerRequestQueue(obj:any) {
    return this.http.post('http://cwpilotone.us-east-2.elasticbeanstalk.com' + `/cwGetReportRequests?minId=${obj.minId}&recordCount=${obj.recordCount}&type=${obj.type}&sigId=${obj.sigId}&userId=${obj.userId}&requestDateBegin=${obj.requestDateBegin}&requestDateEnd=${obj.requestDateEnd}&fulfillDateBegin=${obj.fulfillDateBegin}&fulfillDateEnd=${obj.fulfillDateEnd}&status=${obj.status}`, [])
  }
}

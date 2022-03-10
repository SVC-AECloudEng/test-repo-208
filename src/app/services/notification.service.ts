import { NOTIFICATION, environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private headers = new HttpHeaders({
    "x-ibm-client-id": `${NOTIFICATION.ITOUCH_CLIENT_ID}`,
    "x-ibm-client-secret": `${NOTIFICATION.ITOUCH_API_KEY}`
  });

  private smsConfig = {
    "UserId": `${NOTIFICATION.ITOUCH_USER_ID}`,
    "Password": `${NOTIFICATION.ITOUCH_USER_PWD}`
  }

  constructor(private _http: HttpClient) { }

  sendSMS(cellNumber: string, message: string){
    const payload = new HttpParams()
      .set("UserId", NOTIFICATION.ITOUCH_USER_ID)
      .set("Password", NOTIFICATION.ITOUCH_USER_PWD)
      .set("PhoneNumber", cellNumber)
      .set("MessageText", message);

    this.smsConfig['PhoneNumber'] = cellNumber;
    this.smsConfig['MessageText'] = message;

    return this._http.post(`${NOTIFICATION.ITOUCH_API_URL}`, payload, {
      headers: this.headers,
      responseType: "text"
    });
  }

  sendEmail(){
    
  }
}

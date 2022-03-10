import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _currentUserSubject: BehaviorSubject<User>;

  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) { 
    this._currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  get getCurrentUser(): User{
    return this._currentUserSubject.value;
  }

  get getUserObservable(): Observable<User>{
    return this._currentUserSubject.asObservable();
  }

  async authenticate(abnumber: string, password: string){
    const body: string = JSON.stringify({"username": abnumber ,"pwd": password, "accountType": "Domain Accounts", domain: "CORP"});

    return this._httpClient.post<User>(`${environment.AUTH_API}`, body, {headers: this._headers, observe: 'response'})
      .toPromise()
      .then(resp => {
        const user: User = {
          abnumber: resp.body.abnumber,
          firstName: resp.body.firstName,
          lastName: resp.body.lastName,
          displayName: resp.body.displayName,
          email: resp.body.email,
          jobDescription: resp.body.jobDescription,
          initials: resp.body.initials,
          division: resp.body.division,
          department: resp.body.department,
          telephoneNumber: resp.body.telephoneNumber,
          token: resp.body.token
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        this._currentUserSubject.next(user);
      })
      .catch(error => {
        //TODO: Use loggin framework to keep track of application errors.
        throw error;
      });
  }

  async reAuthenticate(){

  }

  async deAuthenticate(){
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
  }
}

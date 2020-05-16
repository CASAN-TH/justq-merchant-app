import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;
  AUTH_SERVER_ADDRESS:  string  =  'http://192.168.1.100:3000'; // Your Node Address

  constructor(
    private http: HttpClient,
    private storage: Storage
  ) { }

  login(user : User) {
    //console.log(user);
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/login`,
      user
    ).pipe(
      tap(token => {
        //this.storage.setItem('token', token)
        this.storage.set('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  register(fName: String, lName: String, email: String, password: String) {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/register`,
      {first_name: fName, last_name: lName, email: email, password: password}
    )
  }

  logout() {
    console.log('Logout')
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    });
    return this.http.get(`${this.AUTH_SERVER_ADDRESS}/auth/logout`, { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  user() {
    console.log('GET User Data');
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(`${this.AUTH_SERVER_ADDRESS}/user`, { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    //return this.storage.getItem('token').then(
    return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}
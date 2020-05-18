// import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';



// const helper = new JwtHelperService();

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   redirectUrl: string;

//   private userData = new BehaviorSubject(null);
//   constructor(private http: HttpClient, private router: Router) {
    
//   }


//   login(credentials): Promise<any> {
//     return new Promise((resolve, reject) => {
//       //เรียก Api ได้ token
//       let token = "ddddd"
      
//       // storage token in local storage
//       window.localStorage.setItem(`token@${environment.appName}`, token);
      
//       // decode token to user data
//       //let decoded = helper.decodeToken(token);
//       let decoded = {};
      
//       // emit user Data to subscriber
//       this.userData.next(decoded);
      
//       // resolve user data to login page
//       resolve(decoded);
//     })

//   }

//   getUser() {
//     return this.userData.getValue();
//   }

//   logout() {
//     window.localStorage.remove(`token@${environment.appName}`).then(() => {
//       this.router.navigateByUrl('/');
//       this.userData.next(null);
//     });
//   }

// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from './models/user';
import { Storage } from '@ionic/storage'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;
  AUTH_SERVER_ADDRESS:  string  =  environment.apiUrl; // Your Node Address

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

  register(user : User) {
    return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/register`,
      user
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

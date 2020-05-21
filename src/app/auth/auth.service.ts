import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { User } from "./models/user";
import { Storage } from "@ionic/storage";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  AUTH_SERVER_ADDRESS: string = environment.apiUrl; // Your Node Address

  constructor(private http: HttpClient, private storage: Storage) {}

  login(user: any) {
    //console.log(user);
    return this.http
      .post(`${this.AUTH_SERVER_ADDRESS}/api/auth/signin`, user)
      .pipe(
        tap((res: any) => {
          //this.storage.setItem('token', token)
          this.storage.set("token", res.token).then(
            () => {
              console.log("Token Stored");
            },
            (error) => console.error("Error storing item", error)
          );
          this.token = res.token;
          this.isLoggedIn = true;
          return res.token;
        })
      );
  }

  register(user: User) {
    user.email = `${user.firstname}.${user.lastname}@จัดคิว.com`;
    return this.http
    .post(`${this.AUTH_SERVER_ADDRESS}/api/auth/signup`, user)
    .pipe(
      tap((res: any) => {
        //this.storage.setItem('token', token)
        this.storage.set("token", res.token).then(
          () => {
            console.log("Token Stored");
          },
          (error) => console.error("Error storing item", error)
        );
        this.token = res.token;
        this.isLoggedIn = true;
        return res.token;
      })
    );
  }

  logout() {
    console.log("Logout");
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"] + " " + this.token["access_token"]
    // });
    // return this.http.get(`${this.AUTH_SERVER_ADDRESS}/auth/logout`, { headers: headers })
    // .pipe(
    //   tap(data => {
    //     this.storage.remove("token");
    //     this.isLoggedIn = false;
    //     delete this.token;
    //     return data;
    //   })
    // )
    // this.storage.remove("shop");
    // this.storage.remove("token");
    this.storage.clear();
    this.isLoggedIn = false;
    delete this.token;
    // // return new Promise<void>((resolve))
    return Promise.resolve({status:200,Message:"loged out"});
  }

  user() {
    console.log("GET User Data");
    const headers = new HttpHeaders({
      Authorization:
        "Bearer" + " " + this.token,
    });
    return this.http
      .get<User>(`${this.AUTH_SERVER_ADDRESS}/me`, { headers: headers })
      .pipe(
        tap((user) => {
          return user;
        })
      );
  }

  getToken() {
    //return this.storage.getItem('token').then(
    return this.storage.get("token").then(
      (data) => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      (error) => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}

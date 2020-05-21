import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  haveShop = false;
  token: any;
  SHOP_SERVER_ADDRESS: string = environment.apiUrl; // Your Node Address
  constructor(private http: HttpClient, private storage: Storage) {
    this.storage.get("token").then(token=>{
      this.token = token;
    });
  }


  createShop(shop: any) {
    const headers = new HttpHeaders({
      Authorization: "Bearer" + " " + this.token,
    });
    return this.http
      .post(`${this.SHOP_SERVER_ADDRESS}/api/shops`, shop, { headers: headers })
      .pipe(
        tap((res: any) => {
          //this.storage.setItem('token', token)
          this.storage.set("shop", res.data).then(
            () => {
              console.log("shop Stored");
            },
            (error) => console.error("Error storing item", error)
          );
          this.haveShop = true;
          return res.data;
        })
      );
  }
}

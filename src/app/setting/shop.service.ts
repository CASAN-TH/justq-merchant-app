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
  shop: any;
  SHOP_SERVER_ADDRESS: string = environment.apiUrl; // Your Node Address
  constructor(private http: HttpClient, private storage: Storage) {
    // this.getToken();
    // this.getMyShop();
  }

  // getShop() {
  //   return this.storage.get("shop").then(
  //     (data) => {
  //       if (data != null) {
  //         this.haveShop = true;
  //       } else {
  //         this.haveShop = false;
  //       }
  //     },
  //     (error) => {
  //       this.haveShop = false;
  //     }
  //   );
  // }

  async getToken() {
    this.token = await this.storage.get("token");
    console.log(this.token);
  }

  async getMyShop(){
    this.shop = await this.storage.get("shop");
    return this.shop;
  }


  createShop(shop: any) {
    return this.http
      .post(`${this.SHOP_SERVER_ADDRESS}/api/shops`, shop)
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

  updateShop(shop: any) {
    return this.http
      .put(`${this.SHOP_SERVER_ADDRESS}/api/shops/${shop._id}`, shop)
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

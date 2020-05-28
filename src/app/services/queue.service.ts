import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage";

const api_url = environment.apiUrl + "/api/reservationsbyshop";

@Injectable({
  providedIn: "root",
})
export class QueueService {
  constructor(private http: HttpClient, private storage: Storage) {}

  getQueueData(shopId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get("token").then((val) => {
        let token: any;
        token = val;
        const headers = new HttpHeaders().set(
          "Authorization",
          "Bearer " + token
        );

        this.http
          .post(api_url, { shopId: shopId }, { headers: headers })
          .subscribe((res: any) => {
            resolve(res.data);
          }, reject);
      });
    });
  }

  updateQueueData(id) {
    console.log(id);
  }
}

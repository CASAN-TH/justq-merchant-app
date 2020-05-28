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
    return new Promise(async (resolve, reject) => {
      const token = await this.storage.get("token");
      const headers = new HttpHeaders().set("Authorization", "Bearer " + token);

      this.http
        .post(api_url, { shopId: shopId }, { headers: headers })
        .subscribe((res: any) => {
          resolve(res.data);
        }, reject);
    });
  }

  updateQueueData(id) {
    console.log(id);
  }
}

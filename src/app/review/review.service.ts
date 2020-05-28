import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Storage } from "@ionic/storage";

const api_url = environment.apiUrl + "/api/reviews";

@Injectable({
  providedIn: "root",
})
export class ReviewService {
  token: any;

  constructor(private http: HttpClient, private storage: Storage) {}

  getReviewData(pageNo, pageSize, shopId): Promise<any> {
    return new Promise(async (resolve, reject) => {
      this.token = await this.storage.get("token");
      const headers = new HttpHeaders({
        Authorization: "Bearer" + " " + this.token,
      });
      const params = new HttpParams()
        .set("pageNo", `${pageNo + 1}`)
        .set("size", `${pageSize}`)
        .set("shopId", `${shopId}`);
      this.http
        .get(api_url, { headers: headers, params: params })
        .subscribe((res: any) => {
          resolve(res.data);
        }, reject);
    });
  }
}

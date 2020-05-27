import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from "@ionic/storage";

const api_url = environment.apiUrl + "/api/reviews";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  token: any;

  constructor(private http: HttpClient, private storage: Storage) {
    console.log("service");
    this.getToken();
  }


  async getToken() {
    this.token = await this.storage.get("token");
    console.log(this.token);
  }


  getDataList(pageNo, pageSize, shopId) {
    this.storage.get("token").then(async (data) => {
      const headers = new HttpHeaders({
        Authorization: "Bearer" + " " + data
      })
      const params = new HttpParams()
        .set("pageNo", `${pageNo + 1}`)
        .set("size", `${pageSize}`)
        .set("shopId", `${shopId}`);
      const res = await this.http.get(api_url, {
        headers: headers,
        params: params,
      }).toPromise();
      return res;
    })
    // return this.http.get(api_url, {
    //   headers: headers,
    //   params: params,
    // }).toPromise();
  }
  getReviewData(pageNo, pageSize, shopId): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get("token").then((token) => {
        const headers = new HttpHeaders({
          Authorization: "Bearer" + " " + token
        });
        const params = new HttpParams()
          .set("pageNo", `${pageNo + 1}`)
          .set("size", `${pageSize}`)
          .set("shopId", `${shopId}`);
        this.http.get(api_url, { headers: headers, params: params }).subscribe((res) => {
          resolve(res);
        }, reject)
      })
    })
  }

}

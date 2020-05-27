import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(
    private http: HttpClient
  ) { }

  getQueueData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/queue/queueList.json')
        .subscribe((res: any) => {
          resolve(res.data);
        }, reject);
    });
  }

  updateQueueData(id) {
    console.log(id);
  }
}

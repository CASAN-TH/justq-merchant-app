import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { AlertService } from '../services/alert.service';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  user: any;
  queueData: any;
  body = {
    shopId: ''
  };

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private queueService: QueueService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        (res: any) => {
          console.log(res);
          this.user = res.data;
          this.body.shopId = this.user._id;
          this.getQueueDatas();
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {

        }
      );
    });
  }

  async doRefresh(event) {
    const res = await this.queueService.getQueueData(this.body);
    this.queueData = res;
    event.target.complete();
  }

  async getQueueDatas() {
    const res = await this.queueService.getQueueData(this.body);
    this.queueData = res;
    console.log(this.queueData);
  }

  onTel() {
    window.location.href = `tel: ${this.queueData[0].customerTel}`;
  }

  onSuccess(id) {
    this.queueService.updateQueueData(id);
    console.log(`onSuccess ${id}`);
  }

  onCancel(id) {
    console.log(`onCancel ${id}`);
  }
}

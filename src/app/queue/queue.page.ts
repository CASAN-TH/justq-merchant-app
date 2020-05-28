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

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private queueService: QueueService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');

  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        (res: any) => {
          console.log(res);
          this.user = res.data;
          this.getQueueDatas()
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
    const res = await this.queueService.getQueueData(this.user.ref1);
    this.queueData = res;
    event.target.complete();
  }

  async getQueueDatas() {
    const res = await this.queueService.getQueueData(this.user.ref1);
    this.queueData = res;
    console.log(this.queueData);
  }

  onTel() {
    window.location.href = `tel: ${this.queueData[0].customerTel}`;
  }

  onSuccess(id) {
    this.queueService.updateQueueData(id, 'close').then((res) => {
      this.getQueueDatas();
    });
  }

  onCancel(id) {
    this.queueService.updateQueueData(id, 'cancel').then((res) => {
      this.getQueueDatas();
    });
  }
}

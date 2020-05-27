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
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        (res: any) => {
          console.log(res);
          this.user = res.data;
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

  getQueueDatas() {

    const body = {
      shopId: this.user._id
    };
    this.queueService.getQueueData(body).then((res) => {
      console.log(res);
      this.queueData = res;
    });
  }

  onTel() {
    console.log('tel');
  }

  onSuccess(id) {
    this.queueService.updateQueueData(id);
    console.log(`onSuccess ${id}`);
  }

  onCancel(id) {
    console.log(`onCancel ${id}`);
  }
}

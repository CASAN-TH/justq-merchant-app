import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";

import { Storage } from "@ionic/storage";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private storage: Storage
  ) {
    this.initializeApp();
    if (platform.is("cordova")) {
      this.oneSignalConfig();
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  oneSignalConfig() {
    this.oneSignal.startInit(
      "3be709ff-f973-4ee8-ab18-68d84b47e910",
      "justq-merchant"
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.Notification
    );

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

    this.oneSignal
      .getIds()
      .then((data) => {
        console.log(`oneSignal data : ${data}`); 
        this.storage.set(`${environment.appName}@oneSignal`, data).then(
          () => {
            console.log("oneSignalId Stored");
          },
          (error) => console.error("Error storing item", error)
        );
        //  window.localStorage.setItem(Constants.URL() + '@oneSignal', JSON.stringify(data));
      })
      .catch((error) => {
        throw error;
      });
  }
}

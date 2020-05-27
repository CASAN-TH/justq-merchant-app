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
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = true;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    this.oneSignal.startInit('b98f6130-5b29-4316-976e-82e013c6555a', '116012923728');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((onReceived) => {
      // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
  }
}

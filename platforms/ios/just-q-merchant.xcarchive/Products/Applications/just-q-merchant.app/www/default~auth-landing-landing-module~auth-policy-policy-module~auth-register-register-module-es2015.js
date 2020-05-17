(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-landing-landing-module~auth-policy-policy-module~auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงทะเบียน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>ลงทะเบียน จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">ชื่อ</ion-label>\n      <ion-input\n        name=\"firstname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">นามสกุล</ion-label>\n      <ion-input\n        name=\"lastname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"usrername\"\n        type=\"text\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงทะเบียน</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงทะเบียนผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';

// const helper = new JwtHelperService();
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   redirectUrl: string;
//   private userData = new BehaviorSubject(null);
//   constructor(private http: HttpClient, private router: Router) {
//   }
//   login(credentials): Promise<any> {
//     return new Promise((resolve, reject) => {
//       //เรียก Api ได้ token
//       let token = "ddddd"
//       // storage token in local storage
//       window.localStorage.setItem(`token@${environment.appName}`, token);
//       // decode token to user data
//       //let decoded = helper.decodeToken(token);
//       let decoded = {};
//       // emit user Data to subscriber
//       this.userData.next(decoded);
//       // resolve user data to login page
//       resolve(decoded);
//     })
//   }
//   getUser() {
//     return this.userData.getValue();
//   }
//   logout() {
//     window.localStorage.remove(`token@${environment.appName}`).then(() => {
//       this.router.navigateByUrl('/');
//       this.userData.next(null);
//     });
//   }
// }





let AuthService = class AuthService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
        this.AUTH_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl; // Your Node Address
    }
    login(user) {
        //console.log(user);
        return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/login`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(token => {
            //this.storage.setItem('token', token)
            this.storage.set('token', token)
                .then(() => {
                console.log('Token Stored');
            }, error => console.error('Error storing item', error));
            this.token = token;
            this.isLoggedIn = true;
            return token;
        }));
    }
    register(fName, lName, email, password) {
        return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/register`, { first_name: fName, last_name: lName, email: email, password: password });
    }
    logout() {
        console.log('Logout');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(`${this.AUTH_SERVER_ADDRESS}/auth/logout`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
            this.storage.remove("token");
            this.isLoggedIn = false;
            delete this.token;
            return data;
        }));
    }
    user() {
        console.log('GET User Data');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(`${this.AUTH_SERVER_ADDRESS}/user`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => {
            return user;
        }));
    }
    getToken() {
        //return this.storage.getItem('token').then(
        return this.storage.get('token').then(data => {
            this.token = data;
            if (this.token != null) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        }, error => {
            this.token = null;
            this.isLoggedIn = false;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], AuthService);



/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0px !important;\n  border: 0 !important;\n  color: transparent !important;\n}\n\nion-content {\n  --background: url('queue.jpg') 0 0/100% 30% no-repeat;\n}\n\nion-avatar {\n  margin: 10px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  border: 3px solid #e4b724c4 !important;\n  border-radius: 50px;\n}\n\n.social {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFJSSxxREFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZmYgODAlLCAjZmJiMTNiZDUgOTklKTtcbiAgICBcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAtNTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICAvLyBib3gtc2hhZG93OiAycHggNXB4ICNmN2NhMDRhOSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlNGI3MjRjNCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uc29jaWFsIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2U0YjcyNGM0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5zb2NpYWwge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RegisterPage = class RegisterPage {
    constructor(_location, auth, router, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
        this.accepted = false;
        this.readed = false;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
    register() { }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=default~auth-landing-landing-module~auth-policy-policy-module~auth-register-register-module-es2015.js.map
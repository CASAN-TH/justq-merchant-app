(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-landing-landing-module"],{

/***/ "./node_modules/@ionic-native/facebook/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/facebook/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var Facebook = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Facebook, _super);
    function Facebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    Facebook.prototype.login = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {}, arguments); };
    Facebook.prototype.logout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments); };
    Facebook.prototype.getLoginStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLoginStatus", {}, arguments); };
    Facebook.prototype.getAccessToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAccessToken", {}, arguments); };
    Facebook.prototype.showDialog = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showDialog", {}, arguments); };
    Facebook.prototype.api = function (requestPath, permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "api", {}, arguments); };
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    Facebook.prototype.logPurchase = function (value, currency) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logPurchase", {}, arguments); };
    Facebook.prototype.getDeferredApplink = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDeferredApplink", {}, arguments); };
    Facebook.prototype.activateApp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "activateApp", {}, arguments); };
    Facebook.pluginName = "Facebook";
    Facebook.plugin = "cordova-plugin-facebook4";
    Facebook.pluginRef = "facebookConnectPlugin";
    Facebook.repo = "https://github.com/jeduan/cordova-plugin-facebook4";
    Facebook.install = "ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    Facebook.installVariables = ["APP_ID", "APP_NAME"];
    Facebook.platforms = ["Android", "iOS", "Browser"];
    Facebook = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Facebook);
    return Facebook;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2Vib29rL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQXFIMUMsNEJBQWlCOzs7UUFDN0MsWUFBTSxHQUFHO1lBQ1Asd0JBQXdCLEVBQUUsd0JBQXdCO1lBQ2xELDBCQUEwQixFQUFFLDBCQUEwQjtZQUN0RCxnQ0FBZ0MsRUFBRSw2QkFBNkI7WUFDL0QsZ0NBQWdDLEVBQUUsaUNBQWlDO1lBQ25FLGlDQUFpQyxFQUFFLGlDQUFpQztZQUNwRSx5QkFBeUIsRUFBRSx3QkFBd0I7WUFDbkQsbUJBQW1CLEVBQUUsa0JBQWtCO1lBQ3ZDLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyw2QkFBNkIsRUFBRSwrQkFBK0I7WUFDOUQsOEJBQThCLEVBQUUsNkJBQTZCO1lBQzdELHdCQUF3QixFQUFFLHVCQUF1QjtZQUNqRCw0QkFBNEIsRUFBRSwyQkFBMkI7WUFDekQsNkJBQTZCLEVBQUUsOEJBQThCO1lBQzdELDZCQUE2QixFQUFFLDRCQUE0QjtZQUMzRCxvQkFBb0IsRUFBRSxvQkFBb0I7WUFDMUMseUJBQXlCLEVBQUUsMEJBQTBCO1lBQ3JELCtCQUErQixFQUFFLGdDQUFnQztZQUNqRSx3QkFBd0IsRUFBRSx5QkFBeUI7WUFDbkQsb0JBQW9CLEVBQUUsYUFBYTtZQUNuQywrQkFBK0IsRUFBRSx3QkFBd0I7WUFDekQsd0JBQXdCLEVBQUUsaUJBQWlCO1lBQzNDLHNCQUFzQixFQUFFLGVBQWU7WUFDdkMseUJBQXlCLEVBQUUsa0JBQWtCO1lBQzdDLG1CQUFtQixFQUFFLFlBQVk7WUFDakMsNEJBQTRCLEVBQUUscUJBQXFCO1lBQ25ELGtDQUFrQyxFQUFFLDJCQUEyQjtZQUMvRCxxQkFBcUIsRUFBRSxjQUFjO1lBQ3JDLGlCQUFpQixFQUFFLFVBQVU7WUFDN0IsdUJBQXVCLEVBQUUsZ0JBQWdCO1lBQ3pDLDhCQUE4QixFQUFFLHlCQUF5QjtZQUN6RCxxQkFBcUIsRUFBRSxHQUFHO1lBQzFCLG9CQUFvQixFQUFFLEdBQUc7U0FDMUIsQ0FBQzs7O0lBd0JGLHdCQUFLLGFBQUMsV0FBcUI7SUFXM0IseUJBQU07SUErQk4saUNBQWM7SUFVZCxpQ0FBYztJQXNCZCw2QkFBVSxhQUFDLE9BQVk7SUFrQnZCLHNCQUFHLGFBQUMsV0FBbUIsRUFBRSxXQUFxQjtJQWdCOUMsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLFVBQW1CO0lBWTNELDhCQUFXLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBUzNDLHFDQUFrQjtJQVNsQiw4QkFBVzs7Ozs7Ozs7SUFwTUEsUUFBUTtRQURwQixVQUFVLEVBQUU7T0FDQSxRQUFRO21CQXRIckI7RUFzSDhCLGlCQUFpQjtTQUFsQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmFjZWJvb2tMb2dpblJlc3BvbnNlIHtcbiAgc3RhdHVzOiBzdHJpbmc7XG5cbiAgYXV0aFJlc3BvbnNlOiB7XG4gICAgc2Vzc2lvbl9rZXk6IGJvb2xlYW47XG5cbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG4gICAgZXhwaXJlc0luOiBudW1iZXI7XG5cbiAgICBzaWc6IHN0cmluZztcblxuICAgIHNlY3JldDogc3RyaW5nO1xuXG4gICAgdXNlcklEOiBzdHJpbmc7XG4gIH07XG59XG5cbi8qKlxuICogQG5hbWUgRmFjZWJvb2tcbiAqIEBkZXNjcmlwdGlvblxuICogVXNlIHRoZSBGYWNlYm9vayBDb25uZWN0IHBsdWdpbiB0byBvYnRhaW4gYWNjZXNzIHRvIHRoZSBuYXRpdmUgRkIgYXBwbGljYXRpb24gb24gaU9TIGFuZCBBbmRyb2lkLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0ZhY2Vib29rIENvbm5lY3RdKGh0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0KS5cbiAqXG4gKiAjIyMjIEluc3RhbGxhdGlvblxuICpcbiAqICBUbyB1c2UgdGhlIEZCIHBsdWdpbiwgeW91IGZpcnN0IGhhdmUgdG8gY3JlYXRlIGEgbmV3IEZhY2Vib29rIEFwcCBpbnNpZGUgb2YgdGhlIEZhY2Vib29rIGRldmVsb3BlciBwb3J0YWwgYXQgW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzKS5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTFdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMS5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIFJldHJpZXZlIHRoZSBgQXBwIElEYCBhbmQgYEFwcCBOYW1lYC5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTJdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIFRoZW4gdHlwZSBpbiB0aGUgZm9sbG93aW5nIGNvbW1hbmQgaW4geW91ciBUZXJtaW5hbCwgd2hlcmUgQVBQX0lEIGFuZCBBUFBfTkFNRSBhcmUgdGhlIHZhbHVlcyBmcm9tIHRoZSBGYWNlYm9vayBEZXZlbG9wZXIgcG9ydGFsLlxuICpcbiAqIGBgYGJhc2hcbiAqICBpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIlxuICogYGBgXG4gKlxuICogQWZ0ZXIsIHlvdSdsbCBuZWVkIHRvIGFkZCB0aGUgbmF0aXZlIHBsYXRmb3JtcyB5b3UnbGwgYmUgdXNpbmcgdG8geW91ciBhcHAgaW4gdGhlIEZhY2Vib29rIERldmVsb3BlciBwb3J0YWwgdW5kZXIgeW91ciBhcHAncyBTZXR0aW5nczpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTNdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svMy5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIENsaWNrIGAnQWRkIFBsYXRmb3JtJ2AuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC00XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzQucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBBdCB0aGlzIHBvaW50IHlvdSdsbCBuZWVkIHRvIG9wZW4geW91ciBwcm9qZWN0J3MgW2Bjb25maWcueG1sYF0oaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvZG9jcy9lbi9sYXRlc3QvY29uZmlnX3JlZi9pbmRleC5odG1sKSBmaWxlLCBmb3VuZCBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgeW91ciBwcm9qZWN0LlxuICpcbiAqIFRha2Ugbm90ZSBvZiB0aGUgYGlkYCBmb3IgdGhlIG5leHQgc3RlcDpcbiAqIGBgYFxuICogPHdpZGdldCBpZD1cImNvbS5teWNvbXBhbnkudGVzdGFwcFwiIHZlcnNpb249XCIwLjAuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvbnMvd2lkZ2V0c1wiIHhtbG5zOmNkdj1cImh0dHA6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvbnMvMS4wXCI+XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGFsc28gZWRpdCB0aGUgYGlkYCB0byB3aGF0ZXZlciB5b3UnZCBsaWtlIGl0IHRvIGJlLlxuICpcbiAqICMjIyMgaU9TIEluc3RhbGxcbiAqIFVuZGVyICdCdW5kbGUgSUQnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNV0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay81LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICpcbiAqICMjIyMgQW5kcm9pZCBJbnN0YWxsXG4gKiBVbmRlciAnR29vZ2xlIFBsYXkgUGFja2FnZSBOYW1lJywgYWRkIHRoZSBgaWRgIGZyb20geW91ciBgY29uZmlnLnhtbGAgZmlsZTpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTZdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNi5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqXG4gKiBBbmQgdGhhdCdzIGl0ISBZb3UgY2FuIG5vdyBtYWtlIGNhbGxzIHRvIEZhY2Vib29rIHVzaW5nIHRoZSBwbHVnaW4uXG4gKlxuICogIyMgRXZlbnRzXG4gKlxuICogQXBwIGV2ZW50cyBhbGxvdyB5b3UgdG8gdW5kZXJzdGFuZCB0aGUgbWFrZXVwIG9mIHVzZXJzIGVuZ2FnaW5nIHdpdGggeW91ciBhcHAsIG1lYXN1cmUgdGhlIHBlcmZvcm1hbmNlIG9mIHlvdXIgRmFjZWJvb2sgbW9iaWxlIGFwcCBhZHMsIGFuZCByZWFjaCBzcGVjaWZpYyBzZXRzIG9mIHlvdXIgdXNlcnMgd2l0aCBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcy5cbiAqXG4gKiAtIFtpT1NdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50cylcbiAqIC0gW0FuZHJvaWRdIFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvYW5kcm9pZC9hcHAtZXZlbnRzKVxuICogLSBbSlNdIERvZXMgbm90IGhhdmUgYW4gRXZlbnRzIEFQSSwgc28gdGhlIHBsdWdpbiBmdW5jdGlvbnMgYXJlIGVtcHR5IGFuZCB3aWxsIHJldHVybiBhbiBhdXRvbWF0aWMgc3VjY2Vzc1xuICpcbiAqIEFjdGl2YXRpb24gZXZlbnRzIGFyZSBhdXRvbWF0aWNhbGx5IHRyYWNrZWQgZm9yIHlvdSBpbiB0aGUgcGx1Z2luLlxuICpcbiAqIEV2ZW50cyBhcmUgbGlzdGVkIG9uIHRoZSBbaW5zaWdodHMgcGFnZV0oaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2luc2lnaHRzLykuXG4gKlxuICogRm9yIHRyYWNraW5nIGV2ZW50cywgc2VlIGBsb2dFdmVudGAgYW5kIGBsb2dQdXJjaGFzZWAuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlYm9vaywgRmFjZWJvb2tMb2dpblJlc3BvbnNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlYm9vay9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZhY2Vib29rKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZiLmxvZ2luKFsncHVibGljX3Byb2ZpbGUnLCAndXNlcl9mcmllbmRzJywgJ2VtYWlsJ10pXG4gKiAgIC50aGVuKChyZXM6IEZhY2Vib29rTG9naW5SZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ0xvZ2dlZCBpbnRvIEZhY2Vib29rIScsIHJlcykpXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBsb2dnaW5nIGludG8gRmFjZWJvb2snLCBlKSk7XG4gKlxuICpcbiAqIHRoaXMuZmIubG9nRXZlbnQodGhpcy5mYi5FVkVOVFMuRVZFTlRfTkFNRV9BRERFRF9UT19DQVJUKTtcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRmFjZWJvb2snLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQnLFxuICBwbHVnaW5SZWY6ICdmYWNlYm9va0Nvbm5lY3RQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2plZHVhbi9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vazQnLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJywgJ0FQUF9OQU1FJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBFVkVOVFMgPSB7XG4gICAgRVZFTlRfTkFNRV9BQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2FjdGl2YXRlX2FwcCcsXG4gICAgRVZFTlRfTkFNRV9ERUFDVElWQVRFRF9BUFA6ICdmYl9tb2JpbGVfZGVhY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfU0VTU0lPTl9JTlRFUlJVUFRJT05TOiAnZmJfbW9iaWxlX2FwcF9pbnRlcnJ1cHRpb25zJyxcbiAgICBFVkVOVF9OQU1FX1RJTUVfQkVUV0VFTl9TRVNTSU9OUzogJ2ZiX21vYmlsZV90aW1lX2JldHdlZW5fc2Vzc2lvbnMnLFxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1JFR0lTVFJBVElPTjogJ2ZiX21vYmlsZV9jb21wbGV0ZV9yZWdpc3RyYXRpb24nLFxuICAgIEVWRU5UX05BTUVfVklFV0VEX0NPTlRFTlQ6ICdmYl9tb2JpbGVfY29udGVudF92aWV3JyxcbiAgICBFVkVOVF9OQU1FX1NFQVJDSEVEOiAnZmJfbW9iaWxlX3NlYXJjaCcsXG4gICAgRVZFTlRfTkFNRV9SQVRFRDogJ2ZiX21vYmlsZV9yYXRlJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9UVVRPUklBTDogJ2ZiX21vYmlsZV90dXRvcmlhbF9jb21wbGV0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1BVU0hfVE9LRU5fT0JUQUlORUQ6ICdmYl9tb2JpbGVfb2J0YWluX3B1c2hfdG9rZW4nLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fQ0FSVDogJ2ZiX21vYmlsZV9hZGRfdG9fY2FydCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9UT19XSVNITElTVDogJ2ZiX21vYmlsZV9hZGRfdG9fd2lzaGxpc3QnLFxuICAgIEVWRU5UX05BTUVfSU5JVElBVEVEX0NIRUNLT1VUOiAnZmJfbW9iaWxlX2luaXRpYXRlZF9jaGVja291dCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9QQVlNRU5UX0lORk86ICdmYl9tb2JpbGVfYWRkX3BheW1lbnRfaW5mbycsXG4gICAgRVZFTlRfTkFNRV9QVVJDSEFTRUQ6ICdmYl9tb2JpbGVfcHVyY2hhc2UnLFxuICAgIEVWRU5UX05BTUVfQUNISUVWRURfTEVWRUw6ICdmYl9tb2JpbGVfbGV2ZWxfYWNoaWV2ZWQnLFxuICAgIEVWRU5UX05BTUVfVU5MT0NLRURfQUNISUVWRU1FTlQ6ICdmYl9tb2JpbGVfYWNoaWV2ZW1lbnRfdW5sb2NrZWQnLFxuICAgIEVWRU5UX05BTUVfU1BFTlRfQ1JFRElUUzogJ2ZiX21vYmlsZV9zcGVudF9jcmVkaXRzJyxcbiAgICBFVkVOVF9QQVJBTV9DVVJSRU5DWTogJ2ZiX2N1cnJlbmN5JyxcbiAgICBFVkVOVF9QQVJBTV9SRUdJU1RSQVRJT05fTUVUSE9EOiAnZmJfcmVnaXN0cmF0aW9uX21ldGhvZCcsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9UWVBFOiAnZmJfY29udGVudF90eXBlJyxcbiAgICBFVkVOVF9QQVJBTV9DT05URU5UX0lEOiAnZmJfY29udGVudF9pZCcsXG4gICAgRVZFTlRfUEFSQU1fU0VBUkNIX1NUUklORzogJ2ZiX3NlYXJjaF9zdHJpbmcnLFxuICAgIEVWRU5UX1BBUkFNX1NVQ0NFU1M6ICdmYl9zdWNjZXNzJyxcbiAgICBFVkVOVF9QQVJBTV9NQVhfUkFUSU5HX1ZBTFVFOiAnZmJfbWF4X3JhdGluZ192YWx1ZScsXG4gICAgRVZFTlRfUEFSQU1fUEFZTUVOVF9JTkZPX0FWQUlMQUJMRTogJ2ZiX3BheW1lbnRfaW5mb19hdmFpbGFibGUnLFxuICAgIEVWRU5UX1BBUkFNX05VTV9JVEVNUzogJ2ZiX251bV9pdGVtcycsXG4gICAgRVZFTlRfUEFSQU1fTEVWRUw6ICdmYl9sZXZlbCcsXG4gICAgRVZFTlRfUEFSQU1fREVTQ1JJUFRJT046ICdmYl9kZXNjcmlwdGlvbicsXG4gICAgRVZFTlRfUEFSQU1fU09VUkNFX0FQUExJQ0FUSU9OOiAnZmJfbW9iaWxlX2xhdW5jaF9zb3VyY2UnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX1lFUzogJzEnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX05POiAnMCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIExvZ2luIHRvIEZhY2Vib29rIHRvIGF1dGhlbnRpY2F0ZSB0aGlzIGFwcC5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIHNlc3Npb25fa2V5OiB0cnVlLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgZXhwaXJlc0luOiA1MTgzOTc5LFxuICAgKiAgICAgc2lnOiAnLi4uJyxcbiAgICogICAgIHNlY3JldDogJy4uLicsXG4gICAqICAgICB1c2VySUQ6ICc2MzQ1NjU0MzUnXG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mbyBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIubG9nb3V0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC4gIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGEgdXNlcjpcbiAgICpcbiAgICogMSkgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gKGNvbm5lY3RlZClcbiAgICogMikgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChub3RfYXV0aG9yaXplZClcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggYSByZXNwb25zZSBsaWtlOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIGF1dGhSZXNwb25zZToge1xuICAgKiAgICAgdXNlcklEOiAnMTIzNDU2Nzg5MTIzNDUnLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgc2Vzc2lvbl9LZXk6IHRydWUsXG4gICAqICAgICBleHBpcmVzSW46ICc1MTgzNzM4JyxcbiAgICogICAgIHNpZzogJy4uLidcbiAgICogICB9LFxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmdldExvZ2luU3RhdHVzKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYWNjZXNzIHRva2VuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBvbmUgb2YgdmFyaW91cyBGYWNlYm9vayBkaWFsb2dzLiBFeGFtcGxlIG9mIG9wdGlvbnMgZm9yIGEgU2hhcmUgZGlhbG9nOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIG1ldGhvZDogJ3NoYXJlJyxcbiAgICogICBocmVmOiAnaHR0cDovL2V4YW1wbGUuY29tJyxcbiAgICogICBjYXB0aW9uOiAnU3VjaCBjYXB0aW9uLCB2ZXJ5IGZlZWQuJyxcbiAgICogICBkZXNjcmlwdGlvbjogJ011Y2ggZGVzY3JpcHRpb24nLFxuICAgKiAgIHBpY3R1cmU6ICdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBGb3IgbW9yZSBvcHRpb25zIHNlZSB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0I3Nob3ctYS1kaWFsb2cpIGFuZCB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3JlZmVyZW5jZS9GQi51aSlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIGRpYWxvZyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93RGlhbG9nKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYWxsIHRvIEZhY2Vib29rIEdyYXBoIEFQSS4gQ2FuIHRha2UgYWRkaXRpb25hbCBwZXJtaXNzaW9ucyBiZXlvbmQgdGhvc2UgZ3JhbnRlZCBvbiBsb2dpbi5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlOlxuICAgKlxuICAgKiAgQ2FsbGluZyB0aGUgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmFwaVxuICAgKiAgR3JhcGggRXhwbG9yZXIgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL3Rvb2xzL2V4cGxvcmVyXG4gICAqICBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZ3JhcGgtYXBpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcmVxdWVzdFBhdGggR3JhcGggQVBJIGVuZHBvaW50IHlvdSB3YW50IHRvIGNhbGxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXBpKHJlcXVlc3RQYXRoOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhbiBldmVudC4gIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgbmFtZSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gIFtwYXJhbXNdIEFuIG9iamVjdCBjb250YWluaW5nIGV4dHJhIGRhdGEgdG8gbG9nIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgW3ZhbHVlVG9TdW1dIGFueSB2YWx1ZSB0byBiZSBhZGRlZCB0byBhZGRlZCB0byBhIHN1bSBvbiBlYWNoIGV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIGxvZ0V2ZW50KG5hbWU6IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCB2YWx1ZVRvU3VtPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9nIGEgcHVyY2hhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgdmFsdWUgVmFsdWUgb2YgdGhlIHB1cmNoYXNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIGN1cnJlbmN5IFRoZSBjdXJyZW5jeSwgYXMgYW4gW0lTTyA0MjE3IGN1cnJlbmN5IGNvZGVdKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzQyMTcpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ1B1cmNoYXNlKHZhbHVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZWZlcnJlZEFwcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlQXBwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/line-login/ngx/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic-native/line-login/ngx/index.js ***!
  \************************************************************/
/*! exports provided: LineLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineLogin", function() { return LineLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var LineLogin = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLogin.prototype.initialize = function (param) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "initialize", {}, arguments); };
    LineLogin.prototype.login = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {}, arguments); };
    LineLogin.prototype.loginWeb = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "loginWeb", {}, arguments); };
    LineLogin.prototype.logout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments); };
    LineLogin.prototype.getAccessToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAccessToken", {}, arguments); };
    LineLogin.prototype.verifyAccessToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "verifyAccessToken", {}, arguments); };
    LineLogin.prototype.refreshAccessToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "refreshAccessToken", {}, arguments); };
    LineLogin.pluginName = "LineLogin";
    LineLogin.plugin = "cordova-line-login-plugin";
    LineLogin.pluginRef = "lineLogin";
    LineLogin.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLogin.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLogin.installVariables = ["LINE_CHANNEL_ID"];
    LineLogin.platforms = ["Android", "iOS"];
    LineLogin = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LineLogin);
    return LineLogin;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xpbmUtbG9naW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBbUZ6Qyw2QkFBaUI7Ozs7SUFPOUMsOEJBQVUsYUFBQyxLQUFzQjtJQVNqQyx5QkFBSztJQVVMLDRCQUFRO0lBU1IsMEJBQU07SUFTTixrQ0FBYztJQVNkLHFDQUFpQjtJQVNqQixzQ0FBa0I7Ozs7Ozs7O0lBOURQLFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkFwRnRCO0VBb0YrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblBhcmFtcyB7XG4gIC8qKlxuICAgKiBMaW5lIENoYW5uZWwgSURcbiAgICovXG4gIGNoYW5uZWxfaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5Qcm9maWxlIHtcbiAgLyoqXG4gICAqIExpbmUgVXNlciBJRFxuICAgKi9cbiAgdXNlcklEOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExpbmUgUHJvZmlsZSBJbWFnZSBVUkxcbiAgICovXG4gIHBpY3R1cmVVUkw6IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBQcm9maWxlIE5hbWVcbiAgICovXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEVtYWlsXG4gICAqL1xuICBlbWFpbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5BY2Nlc3NUb2tlbiB7XG4gIC8qKlxuICAgKiBMaW5lIEFjY2VzcyBUb2tlblxuICAgKi9cbiAgYWNjZXNzVG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogTGluZSBBY2Nlc3MgVG9rZW4gRXhwaXJlIFRpbWVcbiAgICovXG4gIGV4cGlyZVRpbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBMaW5lIExvZ2luXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBsb2dpbiwgbG9ncyBvdXQsIGFjcXVpcmVzLCB2ZXJpZmllcywgYW5kIHJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLiBUaGUgdmVyc2lvbiBvZiBMaW5lU0RLIHlvdSBhcmUgdXNpbmcgaXMgYXMgZm9sbG93cy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IExpbmVMb2dpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbGluZS1sb2dpbi9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpbmVMb2dpbjogTGluZUxvZ2luKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5saW5lTG9naW4uaW5pdGlhbGl6ZSh7IGNoYW5uZWxfaWQ6IFwieHh4eHh4eHh4eFwiIH0pXG4gKlxuICogdGhpcy5saW5lTG9naW4ubG9naW4oKVxuICogICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogTGluZUxvZ2luUGFyYW1zXG4gKiBMaW5lTG9naW5Qcm9maWxlXG4gKiBMaW5lTG9naW5BY2Nlc3NUb2tlblxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdMaW5lTG9naW4nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLWxpbmUtbG9naW4tcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAnbGluZUxvZ2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxuICBpbnN0YWxsOlxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbi5naXQgLS12YXJpYWJsZSBMSU5FX0NIQU5ORUxfSUQ9XCJ5b3VyX2xpbmVfY2hhbm5lbF9pZFwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydMSU5FX0NIQU5ORUxfSUQnXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpbmVMb2dpbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVcbiAgICogQHBhcmFtIHBhcmFtIExpbmVMb2dpblBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGluaXRpYWxpemUocGFyYW06IExpbmVMb2dpblBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ2luXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB3aXRoIFdlYlxuICAgKiAoaU9TIG9ubHkpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luV2ViKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IEFjY2VzcyBUb2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZnkgQWNjZXNzVG9rZW5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIEFjY2VzcyBUb2tlblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZnJlc2hBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot/forgot.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/landing/landing.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/landing/landing.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content  fullscreen=\"true\">\n  <ion-img class=\"logo\" [src]=\"'../../../assets/icon/icon.png'\"></ion-img>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h3>เครื่องมือบริหารจัดการเวลาคุณภาพ</h3>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n\n  <ion-row>\n    <ion-col padding=\"10\" >\n      <ion-button size=\"large\" expand=\"block\" color=\"success\" (click)=\"loginLine()\"> <ion-icon slot=\"start\" class=\"absolute-icon\" src=\"assets/icon/line-logo.svg\"></ion-icon> Line</ion-button>\n      <ion-button size=\"large\" expand=\"block\" color=\"secondary\"  (click)=\"loginFacebook()\"> <ion-icon src=\"assets/icon/facebook.svg\" slot=\"start\" class=\"absolute-icon\"></ion-icon> Facebook</ion-button>\n      <ion-button size=\"large\" expand=\"block\" color=\"tertiary\" (click)=\"login()\">  Login</ion-button>\n      <ion-button size=\"large\" expand=\"block\" color=\"dark\"  (click)=\"register()\">  register</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงชื่อเข้าใช้</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>เราดีใจที่ท่านกลับมา จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"username\"\n        type=\"tel\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงชื่อเข้าใช้</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" text-left>\n        <ion-button fill=\"clear\" expand=\"block\" (click)=\"gotoForgot()\">\n          ลืมรหัสผ่าน คลิ๊กเลย\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงชื่อเข้าใช้ผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/policy/policy.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/policy/policy.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ข้อตกลงการให้บริการ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n>\n<h4>ข้อตกลงและเงื่อนไขในการให้บริการ</h4>\n<p>ข้อตกลงและเงื่อนไขในการให้บริการแอพพลิเคชั่น จัดคิว เพื่อปกป้องสิทธิของผู้ใช้บริการ โปรดอ่านเงื่อนไขการให้บริการทั้งหมดและตกลงที่จะปฏิบัติตามข้อตกลงและเงื่อนไขทั้งหมดต่อไปนี้</p>\n<p>\n  ข้อ 1 ขอบเขตของข้อตกลงและเงื่อนไขการใช้บริการ ข้อตกลงและเงื่อนไขการให้บริการนี้ทำขึ้นระหว่าง บริษัทไซเบอร์ แอดวานซ์ ซิสเต็ม\n  แอน เน็ตเวิร์ค จำกัด ซึ่งต่อไปนี้จะเรียกว่า “บริษัท” ซึ่งเป็นผู้ผลิตแอพพลิเคชั่นหรือเป็นผู้ที่ได้รับลิขสิทธิ์ในการให้บริการแอพพลิเคชั่น\n  เพื่อกำหนดข้อตกลงและเงื่อนไขการให้บริการระหว่างผู้เข้ามาใช้บริการ ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้บริการ” โดยจะใช้บริการแอพพลิเคชั่นของบริษัท\n  ซึ่งต่อไปนี้จะเรียกว่า “บริการ”\n</p>\n<p>\n  ข้อ 2 การยอมรับข้อตกลงและเงื่อนไขการใช้บริการ ผู้ใช้บริการจะต้องตกลงและปฏิบัติตามเงื่อนไขซึ่งปรากฏอยู่บนเงื่อนไขการเป็นสมาชิกบริการและเงื่อนไขการใช้บริการฉบับนี้\n  หรือในฉบับแก้ไขเพิ่มเติมอันอาจจะมีขึ้นในภายหน้า และการที่ท่านได้ตกลงในการใช้บริการของ บริษัท ถือว่าท่านได้ยินยอมและเห็นด้วยกับข้อตกลงและเงื่อนไขการให้บริการฉบับนี้แล้ว\n</p>\n<p>\n  2.1 เงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพลิเคชั่นฉบับนี้เป็นไปตามตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพิเคชั่นของสัญญาการให้บริการแอพพลิเคชั่นมือถือ\n  หากผู้ใช้บริการยอมรับต่อคำถาม ถือว่าผู้ใช้บริการได้ยอมรับเงื่อนไขการให้บริการ และถือว่าเงื่อนไขการเป็นสมาชิก และเงื่อนไขการให้บริการแอพพลิเคชั่นนี้มีผลบังคับใช้\n</p>\n<p>\n  2.2 บริษัทสามารถเปลี่ยนแปลงตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการได้ตามความเหมาะสมและเงื่อนไขการให้บริการที่มีการเปลี่ยนแปลงจะถูกประกาศให้ทราบบนแอพพลิเคชั่น จัดคิว\n</p>\n<p>\n  2.3 ผู้ใช้บริการมีหน้าที่ต้องเข้าไปเยี่ยมชมแอพพลิเคชั่นป็นระยะและตรวจสอบเนื้อหาข้อตกลงที่มีการเปลี่ยนแปลงและได้ประกาศไว้แล้ว\n  หากผู้ใช้บริการได้มีการเข้าใช้บริการหลังจากมีการประกาศเปลี่ยนแปลงไปแล้ว ถือว่าท่านได้ยอมรับและเห็นด้วยในการเปลี่ยนแปลงในเนื้อหาดังกล่าวนั้น\n  และทางบริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆของผู้ใช้บริการ อันเกิดจากการไม่ทราบเนื้อหาประกาศของข้อตกลงนั้นๆ\n</p>\n<p>\n  2.4 ผู้ใช้บริการที่อายุยังไม่ถึง 15 ปีบริบูรณ์ในวันที่ใช้บริการจะต้องมีผู้ปกครอง (ผู้แทนโดยชอบธรรม หรือผู้ปกครอง) ของผู้ใช้บริการ\n  ในการดูแล ยินยอม หรือให้คำแนะนำ เพื่อทำความเข้าใจในข้อตกลงและเงื่อนไขการให้บริการ ทั้งนี้เพื่อความสะดวกในการใช้บริการให้ถือว่าวันที่ผู้ช้บริการได้ทำการยอมรับข้อตกลงและเงื่อนไขการให้บริการของบริษัทแล้วนั้น\n  ให้ถือเป็นการยอมรับและอนุญาตในข้อตกลงเงื่อนไขการให้บริการของผู้ปกครองแล้วโดยปริยาย\n</p>\n<p>\n  2.5 ผู้ใช้บริการ จะต้องขอลงทะเบียนเป็นผู้ใช้บริการ โดยกรอกข้อมูลชื่อนามสกุลและข้อมูลส่วนตัวตามความเป็นจริง ของผู้ใช้บริการ\n  และดำเนินตามขั้นตอนการขอเป็นผู้ใช้บริการด้วยข้อมูลที่เป็นความจริง\n</p>\n</ion-content>\n<ion-footer>\n  <ion-item lines=\"none\">\n    <ion-checkbox\n      [(ngModel)]=\"accepted\"\n      [disabled]=\"!readed\"\n      color=\"primary\"\n    ></ion-checkbox>\n    <ion-label class=\"ion-text-wrap\">\n      ข้าพเจ้ารับทราบ และยินยอมตามข้อตกลงและเงื่อนไขตามที่กำหนด</ion-label\n    >\n  </ion-item>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button\n        size=\"medium\"\n        expand=\"block\"\n        [disabled]=\"!accepted\"\n        (click)=\"acceptTerm()\"\n        >ยอมรับข้อตกลง</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงทะเบียน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>ลงทะเบียน จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">ชื่อ</ion-label>\n      <ion-input\n        name=\"firstname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">นามสกุล</ion-label>\n      <ion-input\n        name=\"lastname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"username\"\n        type=\"text\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงทะเบียน</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงทะเบียนผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot/forgot-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/forgot/forgot-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");




var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
var ForgotPageRoutingModule = /** @class */ (function () {
    function ForgotPageRoutingModule() {
    }
    ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ForgotPageRoutingModule);
    return ForgotPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot/forgot.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.module.ts ***!
  \**********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");







var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.ts ***!
  \********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ForgotPage = /** @class */ (function () {
    function ForgotPage(_location, auth, router, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
    }
    ForgotPage.prototype.ngOnInit = function () { };
    ForgotPage.prototype.close = function () {
        // this._location.back();
        this.modalController.dismiss();
    };
    ForgotPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-forgot",
            template: __webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/auth/forgot/forgot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ }),

/***/ "./src/app/auth/landing/landing-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/landing/landing-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/auth/landing/landing.page.ts");




var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }
];
var LandingPageRoutingModule = /** @class */ (function () {
    function LandingPageRoutingModule() {
    }
    LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LandingPageRoutingModule);
    return LandingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/landing/landing.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/landing/landing.module.ts ***!
  \************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/auth/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/auth/landing/landing.page.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "./src/app/auth/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register/register.module */ "./src/app/auth/register/register.module.ts");
/* harmony import */ var _forgot_forgot_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgot/forgot.module */ "./src/app/auth/forgot/forgot.module.ts");
/* harmony import */ var _policy_policy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../policy/policy.module */ "./src/app/auth/policy/policy.module.ts");
/* harmony import */ var _ionic_native_line_login_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/line-login/ngx */ "./node_modules/@ionic-native/line-login/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");













var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
                _register_register_module__WEBPACK_IMPORTED_MODULE_8__["RegisterPageModule"],
                _forgot_forgot_module__WEBPACK_IMPORTED_MODULE_9__["ForgotPageModule"],
                _policy_policy_module__WEBPACK_IMPORTED_MODULE_10__["PolicyPageModule"]
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]],
            providers: [_ionic_native_line_login_ngx__WEBPACK_IMPORTED_MODULE_11__["LineLogin"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__["Facebook"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/auth/landing/landing.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/landing/landing.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: -70px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n}\n\n.logo {\n  margin: 10% auto;\n  width: 60% !important;\n  height: 60% !important;\n}\n\nh2 {\n  margin: 80px auto;\n}\n\n.absolute-icon {\n  position: absolute;\n  left: var(--padding-start);\n}\n\nion-content {\n  --ion-background-color: #fdae40;\n}\n\n.vertical-align-content > * {\n  display: -webkit-box !important;\n  display: flex !important;\n  align-content: center !important;\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNBSjs7QURPQTtFQUNJLCtCQUFBO0FDSko7O0FEV0E7RUFFSywrQkFBQTtFQUFBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtVQUFBLDhCQUFBO0FDVEwiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IC03MHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luOiAxMCUgYXV0bztcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbiAgICBcbn1cblxuaDIge1xuICAgIG1hcmdpbjogODBweCBhdXRvO1xufVxuXG4uYWJzb2x1dGUtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IHZhcigtLXBhZGRpbmctc3RhcnQpO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZXtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvc3BsYXNoLnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZGFlNDA7XG59XG5cbi8vIGlvbi1jb2x7XG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0ZCQjAzQjtcbi8vIH1cblxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnQgPiAqXG57XG4gICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xuICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbn1cblxuIiwiaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogLTcwcHggYXV0bztcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MCUgIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDgwcHggYXV0bztcbn1cblxuLmFic29sdXRlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IHZhcigtLXBhZGRpbmctc3RhcnQpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZGFlNDA7XG59XG5cbi52ZXJ0aWNhbC1hbGlnbi1jb250ZW50ID4gKiB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/landing/landing.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/landing/landing.page.ts ***!
  \**********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _policy_policy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../policy/policy.page */ "./src/app/auth/policy/policy.page.ts");
/* harmony import */ var _ionic_native_line_login_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/line-login/ngx */ "./node_modules/@ionic-native/line-login/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/setting/shop.service */ "./src/app/setting/shop.service.ts");











var LandingPage = /** @class */ (function () {
    function LandingPage(router, modalController, lineLogin, fb, authService, alertService, shopService) {
        this.router = router;
        this.modalController = modalController;
        this.lineLogin = lineLogin;
        this.fb = fb;
        this.authService = authService;
        this.alertService = alertService;
        this.shopService = shopService;
    }
    LandingPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shopService.getMyShop()];
                    case 1:
                        _a.myShop = _b.sent();
                        console.log(this.myShop);
                        return [2 /*return*/];
                }
            });
        });
    };
    LandingPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var policyModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _policy_policy_page__WEBPACK_IMPORTED_MODULE_4__["PolicyPage"],
                        })];
                    case 1:
                        policyModal = _a.sent();
                        return [4 /*yield*/, policyModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LandingPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loginModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
                        })];
                    case 1:
                        loginModal = _a.sent();
                        return [4 /*yield*/, loginModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LandingPage.prototype.loginLine = function () {
        var _this = this;
        this.lineLogin.initialize({ channel_id: "1654214807" });
        // this.lineLogin
        //   .login()
        //   .then((result) => console.log(result))
        //   .catch((error) => console.log(error));
        this.lineLogin.login()
            .then(function (user) {
            user.shop_id = _this.myShop._id;
            _this.authService.lineLogin(user).subscribe(function (data) {
                _this.alertService.presentToast("Logged In");
            }, function (error) {
                // console.log(error);
                _this.alertService.presentToast(error.error.message);
            }, function () {
                _this.router.navigateByUrl('/app');
            });
        })
            .catch(function (error) { return console.log(error); });
    };
    LandingPage.prototype.loginFacebook = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            _this.fb.api('/me?fields=id,first_name,last_name,picture.width(300).height(300)', []).then(function (user) {
                // this.auth.facebookLogin(user).then(() => {
                //   if (this.auth.redirectUrl) {
                //     this.router.navigateByUrl(this.auth.redirectUrl);
                //   } else {
                //     this.router.navigateByUrl('');
                //   }
                // }).catch(() => {
                //   //this.router.navigateByUrl('phoneno');
                //   this.nextStep("facebook", user);
                // })
            });
        })
            .catch(function (err) { return alert(JSON.stringify(err)); });
    };
    LandingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_line_login_ngx__WEBPACK_IMPORTED_MODULE_5__["LineLogin"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
        { type: src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_10__["ShopService"] }
    ]; };
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-landing",
            template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/auth/landing/landing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_line_login_ngx__WEBPACK_IMPORTED_MODULE_5__["LineLogin"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_10__["ShopService"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
            exports: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0px !important;\n  border: 0 !important;\n  color: transparent !important;\n}\n\nion-avatar {\n  margin: 10px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  border: 3px solid #e4b724c4 !important;\n  border-radius: 50px;\n}\n\nion-content {\n  --background: url('queue.jpg') 0 0/100% 30% no-repeat;\n}\n\n.label-fixed {\n  -webkit-box-flex: 0;\n          flex: 0 0 10px;\n  width: 40px;\n  min-width: 40px;\n  font-weight: bold;\n}\n\n.social {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBRUEsc0NBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBSUkscURBQUE7QUNISjs7QURNQTtFQUVJLG1CQUFBO1VBQUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICAgIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICAgIC8vIGJveC1zaGFkb3c6IDJweCA1cHggI2Y3Y2EwNGE5ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2U0YjcyNGM0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZmYgODAlLCAjZmJiMTNiZDUgOTklKTtcbiAgICBcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAtNTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG4ubGFiZWwtZml4ZWQge1xuICAgIC1tcy1mbGV4OiAwIDAgMTBweDtcbiAgICBmbGV4OiAwIDAgMTBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zb2NpYWwge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTRiNzI0YzQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG4ubGFiZWwtZml4ZWQge1xuICAtbXMtZmxleDogMCAwIDEwcHg7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNvY2lhbCB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot/forgot.page */ "./src/app/auth/forgot/forgot.page.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/setting/shop.service */ "./src/app/setting/shop.service.ts");









var LoginPage = /** @class */ (function () {
    function LoginPage(_location, auth, router, alertService, shopService, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
        this.shopService = shopService;
        this.modalController = modalController;
        this.showPassword = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shopService.getMyShop()];
                    case 1:
                        _a.myShop = _b.sent();
                        console.log(this.myShop);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.close = function () {
        // this._location.back();
        this.modalController.dismiss();
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        form.value.ref1 = this.myShop._id;
        this.auth.login(form.value).subscribe(function (data) {
            _this.alertService.presentToast("Logged In");
        }, function (error) {
            // console.log(error);
            _this.alertService.presentToast(error.error.message);
        }, function () {
            _this.close();
            _this.router.navigateByUrl('/app');
        });
    };
    LoginPage.prototype.gotoForgot = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var forgotModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.router.navigateByUrl("phoneno");
                        this.close();
                        return [4 /*yield*/, this.modalController.create({
                                component: _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"],
                            })];
                    case 1:
                        forgotModal = _a.sent();
                        return [4 /*yield*/, forgotModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_8__["ShopService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_8__["ShopService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/auth/policy/policy-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/policy/policy-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function() { return PolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy.page */ "./src/app/auth/policy/policy.page.ts");




var routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
    }
];
var PolicyPageRoutingModule = /** @class */ (function () {
    function PolicyPageRoutingModule() {
    }
    PolicyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PolicyPageRoutingModule);
    return PolicyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/policy/policy.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/policy/policy.module.ts ***!
  \**********************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "./src/app/auth/policy/policy-routing.module.ts");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.page */ "./src/app/auth/policy/policy.page.ts");







var PolicyPageModule = /** @class */ (function () {
    function PolicyPageModule() {
    }
    PolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"]
            ],
            declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
        })
    ], PolicyPageModule);
    return PolicyPageModule;
}());



/***/ }),

/***/ "./src/app/auth/policy/policy.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/policy/policy.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcG9saWN5L3BvbGljeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/policy/policy.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/policy/policy.page.ts ***!
  \********************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.page */ "./src/app/auth/register/register.page.ts");






var PolicyPage = /** @class */ (function () {
    function PolicyPage(auth, router, modalController) {
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
        this.accepted = false;
        this.readed = false;
    }
    PolicyPage.prototype.ngOnInit = function () { };
    PolicyPage.prototype.close = function () {
        // this._location.back();
        this.modalController.dismiss();
    };
    PolicyPage.prototype.logScrollStart = function () { };
    PolicyPage.prototype.logScrolling = function () { };
    PolicyPage.prototype.logScrollEnd = function () {
        this.readed = true;
    };
    PolicyPage.prototype.acceptTerm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registerModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.close();
                        return [4 /*yield*/, this.modalController.create({
                                component: _register_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"],
                            })];
                    case 1:
                        registerModal = _a.sent();
                        return [4 /*yield*/, registerModal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PolicyPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    PolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy',
            template: __webpack_require__(/*! raw-loader!./policy.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/policy/policy.page.html"),
            styles: [__webpack_require__(/*! ./policy.page.scss */ "./src/app/auth/policy/policy.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], PolicyPage);
    return PolicyPage;
}());



/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/setting/shop.service */ "./src/app/setting/shop.service.ts");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(_location, auth, router, alertService, shopService, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
        this.shopService = shopService;
        this.modalController = modalController;
        this.accepted = false;
        this.readed = false;
        this.showPassword = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shopService.getMyShop()];
                    case 1:
                        _a.myShop = _b.sent();
                        console.log(this.myShop);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.close = function () {
        // this._location.back();
        this.modalController.dismiss();
    };
    RegisterPage.prototype.register = function (form) {
        var _this = this;
        form.value.ref1 = this.myShop._id;
        this.auth.register(form.value).subscribe(function (data) {
            _this.alertService.presentToast("Logged In");
        }, function (error) {
            // console.log(error);
            _this.alertService.presentToast(error.error.message);
        }, function () {
            _this.close();
            _this.router.navigateByUrl("/app");
        });
    };
    RegisterPage.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            src_app_setting_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(toastController) {
        this.toastController = toastController;
    }
    AlertService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: "top",
                            color: "dark",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/setting/shop.service.ts":
/*!*****************************************!*\
  !*** ./src/app/setting/shop.service.ts ***!
  \*****************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var ShopService = /** @class */ (function () {
    function ShopService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.haveShop = false;
        this.SHOP_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl; // Your Node Address
        // this.getToken();
        // this.getMyShop();
    }
    // getShop() {
    //   return this.storage.get("shop").then(
    //     (data) => {
    //       if (data != null) {
    //         this.haveShop = true;
    //       } else {
    //         this.haveShop = false;
    //       }
    //     },
    //     (error) => {
    //       this.haveShop = false;
    //     }
    //   );
    // }
    ShopService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get("token")];
                    case 1:
                        _a.token = _b.sent();
                        console.log(this.token);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopService.prototype.getMyShop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get("shop")];
                    case 1:
                        _a.shop = _b.sent();
                        return [2 /*return*/, this.shop];
                }
            });
        });
    };
    ShopService.prototype.createShop = function (shop) {
        var _this = this;
        return this.http
            .post(this.SHOP_SERVER_ADDRESS + "/api/shops", shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("shop", res.data).then(function () {
                console.log("shop Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.haveShop = true;
            return res.data;
        }));
    };
    ShopService.prototype.updateShop = function (shop) {
        var _this = this;
        return this.http
            .put(this.SHOP_SERVER_ADDRESS + "/api/shops/" + shop._id, shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("shop", res.data).then(function () {
                console.log("shop Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.haveShop = true;
            return res.data;
        }));
    };
    ShopService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ShopService);
    return ShopService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-landing-landing-module-es5.js.map
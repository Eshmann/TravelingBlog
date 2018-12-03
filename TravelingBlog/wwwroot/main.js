(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/email.validator.directive */ "./src/app/directives/email.validator.directive.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.routing */ "./src/app/account/account.routing.ts");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _account_routing__WEBPACK_IMPORTED_MODULE_6__["routing"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationFormComponent"], _directives_email_validator_directive__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"], _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginComponent"]],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-form/registration-form.component */ "./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facebook-login/facebook-login.component */ "./src/app/account/facebook-login/facebook-login.component.ts");




var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    { path: 'register', component: _registration_form_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationFormComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"] },
    { path: 'facebook-login', component: _facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginComponent"] }
]);


/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col\" style=\"text-align:center\">\n    <a *ngIf=\"!isRequesting\" href=\"javascript:void(0)\" (click)=\"launchFbLogin()\"> <img class=\"img-fluid\" src=\"/assets/facebook-login.png\" /></a>\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n    <div *ngIf=\"failed\" class=\"alert alert-danger\" role=\"alert\">\n      <p><strong>Oops!</strong> Your facebook login failed.</p>\n      <ul>\n        <li>Error: {{error}}</li>\n        <li>Description: {{errorDescription}}</li>\n      </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZmFjZWJvb2stbG9naW4vZmFjZWJvb2stbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/facebook-login/facebook-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/facebook-login/facebook-login.component.ts ***!
  \********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacebookLoginComponent = (function () {
    function FacebookLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener('message', this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent('onmessage', this.handleMessage.bind(this));
        }
    }
    FacebookLoginComponent.prototype.launchFbLogin = function () {
        // tslint:disable-next-line:max-line-length
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=312472109343376&display=popup&redirect_uri=http://travelingblog.azurewebsites.net/facebook-auth.html&scope=email', null, 'width=600,height=400');
    };
    FacebookLoginComponent.prototype.handleMessage = function (event) {
        var _this = this;
        var message = event;
        // Only trust messages from the below origin.
        if (message.origin !== 'http://travelingblog.azurewebsites.net')
            return;
        this.authWindow.close();
        var result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) {
                _this.failed = true;
                _this.error = error;
            });
        }
    };
    FacebookLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facebook-login',
            template: __webpack_require__(/*! ./facebook-login.component.html */ "./src/app/account/facebook-login/facebook-login.component.html"),
            styles: [__webpack_require__(/*! ./facebook-login.component.scss */ "./src/app/account/facebook-login/facebook-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FacebookLoginComponent);
    return FacebookLoginComponent;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\n  <div class=\"container\">\n    <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n      <strong>All set!</strong> Please signin with your account\n    </div>\n  <h1>S I G N</h1>\n  \n    <label for=\"email\">Email</label>\n    <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\n    <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\n\n    <p>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">S I G N - I N</button> \n      OR \n      <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/register\">\n        S I G N - U P\n      </button> \n    </p>\n    <p>\n    </p>\n    \n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n        \n    <hr>\n      <app-facebook-login></app-facebook-login>\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oops!</strong> {{errors}}\n    </div>\n  </div>\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-user-alert {\n  padding-top: 2.5rem; }\n\nform {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 30px;\n  width: 35%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 5px;\n  margin-top: 10px;\n  text-align: center; }\n\nbutton[type=button] {\n  margin-left: 9.5px; }\n\nbutton[type=submit] {\n  margin-right: 9.5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi1mb3JtL0Q6XFxTT0ZUXFxUb0JlRGVsZXRlZFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxhY2NvdW50XFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQ0YsRUFBQzs7QUFDRDtFQUNFLDBDQUF5QztFQUN6QyxpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLGVBQWMsRUFFZjs7QUFDRDtFQUNFLGNBQWE7RUFDYixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsMEJBQXlCO0VBRXpCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQix1QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUVFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUVFLG9CQUNGLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctdXNlci1hbGVydCB7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW1cbn1cbmZvcm17XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgNCwgMTUsIDAuNTU1KSBcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMzUlO1xufVxuZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEyZjtcbiAgLy8gYm9yZGVyOiA4cHggc29saWQgIzM3MTk2NjtcbiAgcGFkZGluZzogMjBweDtcbn1cbmhyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDBweCAwcHggOHB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5idXR0b25bdHlwZSA9IGJ1dHRvbl17XG4gIC8vd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDkuNXB4O1xufVxuYnV0dG9uW3R5cGUgPSBzdWJtaXRde1xuICAvL3dpZHRoOiA0MCU7XG4gIG1hcmdpbi1yaWdodDogOS41cHhcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/login-form/login-form.component.ts ***!
  \************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\n  <div class=\"container\">\n      <h1>Register</h1>\n      <p>Please fill in this form to create an account.</p>\n      <p>OR</p>\n      <p><app-facebook-login></app-facebook-login></p>\n      <hr>\n<!-- Enter firstName part-->\n    <label for=\"first-name\"><b>First name</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Your first name\" name=\"firstName\" tmFocus ngModel>\n  \n<!-- Enter lastName part -->\n    <label for=\"last-name\"><b>Last name</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Your last name\" name=\"lastName\" ngModel>\n  \n<!-- Enter email -->\n    <label for=\"email\"><b>Email</b></label>\n    <input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel #email=\"ngModel\">\n    <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n\n<!-- password part -->\n    <label for=\"password\"><b>Password</b></label>\n    <input id=\"password\" type=\"password\" class=\"form-control\"name=\"password\" placeholder=\"Password\" ngModel>\n  \n<!-- Choose country -->\n    <label for=\"country\"><b>Country</b></label>\n    <input type=\"text\" class=\"form-control\" id=\"location\"  name=\"location\" ngModel placeholder=\"Location\" ngModel>\n        \n    <hr>\n    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\n\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\n\n    <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n\n  </div>\n    <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oops!</strong> {{errors}}\n    </div>\n\n</form>\n\n\n"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  color: #f1f1f1; }\n\n.container {\n  padding: 30px;\n  width: 65%; }\n\ndiv {\n  border-radius: 15px;\n  background-color: #31312f;\n  padding: 20px; }\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 15px; }\n\na {\n  color: dodgerblue; }\n\ninput {\n  margin-left: 10px; }\n\ninput[type=text], input[type=password], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 0px 0px 8px 0px;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box; }\n\nlabel {\n  margin-bottom: 0px; }\n\nh1 {\n  text-align: center; }\n\np {\n  margin-bottom: 3px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9EOlxcU09GVFxcVG9CZURlbGV0ZWRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcYWNjb3VudFxccmVnaXN0cmF0aW9uLWZvcm1cXHJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQXlDO0VBQ3pDLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsZUFBYyxFQUVmOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFdBQVUsRUFFWDs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFFekIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLG1CQUNGLEVBQUM7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9yZWdpc3RyYXRpb24tZm9ybS9yZWdpc3RyYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBjb2xvcjogI2YxZjFmMTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgNCwgMTUsIDAuNTU1KSBcbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogNjUlO1xuXG59XG5kaXYge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTJmO1xuICAvLyBib3JkZXI6IDhweCBzb2xpZCAjMzcxOTY2O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaHIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuYSB7XG4gIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuaW5wdXR7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogMHB4IDBweCA4cHggMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmxhYmVse1xuICBtYXJnaW4tYm90dG9tOiAwcHhcbn1cbmgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5we1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/registration-form/registration-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationFormComponent", function() { return RegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__(/*! ./registration-form.component.html */ "./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__(/*! ./registration-form.component.scss */ "./src/app/account/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  margin: 0px;\n  padding: 0px;\n  max-width: 100%;\n  min-height: 200%;\n  max-height: 200%;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFNPRlRcXFRvQmVEZWxldGVkXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNwQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFFakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDAlO1xuICBtYXgtaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate-xhr.backend */ "./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.module */ "./src/app/edit/edit.module.ts");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* App Root */



/* Account Imports */

/* Dashboard Imports */

/*Edit Imports */



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["DashboardModule"],
                _edit_edit_module__WEBPACK_IMPORTED_MODULE_11__["EditModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            providers: [_shared_utils_config_service__WEBPACK_IMPORTED_MODULE_12__["ConfigService"], {
                    provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["XHRBackend"],
                    useClass: _authenticate_xhr_backend__WEBPACK_IMPORTED_MODULE_4__["AuthenticateXHRBackend"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/*!*********************************************!*\
  !*** ./src/app/authenticate-xhr.backend.ts ***!
  \*********************************************/
/*! exports provided: AuthenticateXHRBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateXHRBackend", function() { return AuthenticateXHRBackend; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["BrowserXhr"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["ResponseOptions"], _angular_http__WEBPACK_IMPORTED_MODULE_0__["XSRFStrategy"]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(_angular_http__WEBPACK_IMPORTED_MODULE_0__["XHRBackend"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/dashboard/trips/trips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_5__["RootComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], _trips_trips_component__WEBPACK_IMPORTED_MODULE_10__["TripsComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips/trips.component */ "./src/app/dashboard/trips/trips.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");






var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'dashboard',
        component: _root_root_component__WEBPACK_IMPORTED_MODULE_1__["RootComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"] },
            { path: 'trips', component: _trips_trips_component__WEBPACK_IMPORTED_MODULE_4__["TripsComponent"] },
        ]
    }
]);


/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-sm-3\">\n    <p>{{homeDetails?.message}}</p>\n    <p><strong>Name:</strong> {{homeDetails?.firstName}} {{homeDetails?.lastName}}</p>\n    <p *ngIf=\"homeDetails?.location\"><strong>Location:</strong> {{homeDetails?.location}}</p>\n    <p *ngIf=\"homeDetails?.locale\"><strong>Locale:</strong> {{homeDetails?.locale}}</p>\n    <p *ngIf=\"homeDetails?.gender\"><strong>Gender:</strong> {{homeDetails?.gender}}</p>\n    <p *ngIf=\"homeDetails?.facebookId\"><strong>Facebook Id:</strong> {{homeDetails?.facebookId}}</p>\n    <div *ngIf=\"homeDetails?.pictureUrl\"><img src=\"{{homeDetails?.pictureUrl}}\" /></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getHomeDetails()
            .subscribe(function (homeDetails) {
            _this.homeDetails = homeDetails;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/models/trip.details.interface.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/models/trip.details.interface.ts ***!
  \************************************************************/
/*! exports provided: TripDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetails", function() { return TripDetails; });
var TripDetails = (function () {
    function TripDetails(id, name, isDone, description) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.description = description;
    }
    return TripDetails;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\n    <router-outlet></router-outlet>\n  </main>\n  <nav class=\"col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar pull-right\">\n    <ul class=\"nav nav-pills flex-column\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/trips\">My Trips</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\" routerLink=\"/dashboard/settings\">Settings</a>\n        </li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Sidebar\n */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 20px 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-left: 1px solid #eee; }\n.sidebar .nav {\n  margin-bottom: 20px; }\n.sidebar .nav-item {\n  width: 100%; }\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3QvRDpcXFNPRlRcXFRvQmVEZWxldGVkXFxUcmF2ZWxpbmdCbG9nXFxUcmF2ZWxpbmdCbG9nLkFuZ3VsYXIvc3JjXFxhcHBcXGRhc2hib2FyZFxccm9vdFxccm9vdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUVIO0VBQ0UsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsVUFBUztFQUNULFNBQVE7RUFDUixjQUFhO0VBQ2IsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQUUsOERBQThEO0VBQ2hGLDRCQUEyQixFQUM1QjtBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCO0FBRUQ7RUFDRSxZQUFXLEVBQ1o7QUFFRDtFQUNFLGVBQWMsRUFDZjtBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTaWRlYmFyXG4gKi9cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTFweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMjBweCAwO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZTtcbn1cblxuLnNpZGViYXIgLm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zaWRlYmFyIC5uYXYtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZWJhciAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNpZGViYXIgLm5hdi1saW5rIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/dashboard/root/root.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var DashboardService = (function (_super) {
    __extends(DashboardService, _super);
    function DashboardService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    DashboardService.prototype.getHomeDetails = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/dashboard/home", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.getTrips = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/trip/mytrips", { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DashboardService.prototype.createTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.baseUrl + "/api/trip/addTrip", JSON.stringify(trip), { headers: headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    DashboardService.prototype.updateTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.baseUrl + "/api/trip/" + trip.id, trip, { headers: headers });
    };
    DashboardService.prototype.deleteTrip = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.delete(this.baseUrl + "/api/trip/" + id, { headers: headers });
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], DashboardService);
    return DashboardService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/dashboard/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6 col-sm-3\">\r\n        <h1>Your Trips:</h1>\r\n        <input type=\"button\" value=\"AddTrip\" class=\"btn btn-default\" (click)=\"add()\" />\r\n        <ul *ngIf=\"tableMode; else create\">           \r\n            <li *ngFor=\"let p of trips\">\r\n                <!--<ng-template [ngIf]=\"trip?.id != p.id\" [ngIfElse]=\"edit\">-->\r\n                <ng-template [ngIf]=\"trip?.id != p.id\">\r\n                    <div>Name: {{ p?.name }}</div>\r\n                    <div [ngClass]=\"{greenclass: p?.isDone == true, redclass: p?.isDone == false}\">Finished: {{ p?.isDone }}</div>\r\n                    <p>\r\n                        <textarea rows=\"3\" cols=\"60\" readonly=\"readonly\" class=\"form-control\">{{ p?.description }}</textarea>\r\n                    </p>\r\n                    <p>\r\n                        <button class=\"btn btn-sm btn-primary\" href=\"#\" routerLink=\"/edit/trip/{{p.id}}\">Edit</button>\r\n                        <button class=\"btn btn-sm btn-danger\"  (click)=\"delete(p)\">Delete</button>\r\n                    </p>\r\n                </ng-template>\r\n            </li>     \r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n  <!--шаблон для редактирования--><!--\r\n<ng-template #edit>\r\n        <label>Name:</label>\r\n        <input type=\"text\" [(ngModel)]=\"trip.name\" class=\"form-control\" />\r\n        \r\n        <p>\r\n            <label>Finished:</label>\r\n            <select [(ngModel)]=\"trip.isDone\" class=\"custom-select\">\r\n                <option value=\"true\">True</option>\r\n                <option value=\"false\">False</option>\r\n            </select>\r\n        <p>\r\n        <p>\r\n            <label>Description</label>\r\n            <textarea [(ngModel)]=\"trip.description\" class=\"form-control\"></textarea>\r\n        <p>\r\n        <p>\r\n            <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-sm btn-success\" />\r\n            <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning\" />\r\n        <p>\r\n    </ng-template>-->\r\n     \r\n    <!--шаблон для добавления-->\r\n    <ng-template #create>\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" [(ngModel)]=\"trip.name\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"form-group\"> \r\n            <label>Description</label>\r\n            <textarea [(ngModel)]=\"trip.description\" class=\"form-control\"></textarea>\r\n        </div>\r\n        <div>\r\n            <input type=\"button\" value=\"Save\" (click)=\"save()\" class=\"btn btn-success\" />\r\n            <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n        </div>\r\n    </ng-template>\r\n"

/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  resize: none; }\n\n.redclass {\n  color: red; }\n\n.greenclass {\n  color: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RyaXBzL0Q6XFxTT0ZUXFxUb0JlRGVsZXRlZFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxkYXNoYm9hcmRcXHRyaXBzXFx0cmlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVMsRUFDWjs7QUFFRDtFQUNJLGFBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC90cmlwcy90cmlwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLnJlZGNsYXNze1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4uZ3JlZW5jbGFzc3tcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/trips/trips.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/trips/trips.component.ts ***!
  \****************************************************/
/*! exports provided: TripsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsComponent", function() { return TripsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/trip.details.interface */ "./src/app/dashboard/models/trip.details.interface.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TripsComponent = (function () {
    function TripsComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.trip = new _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__["TripDetails"]();
        this.tableMode = true;
    }
    TripsComponent.prototype.ngOnInit = function () {
        this.loadTrips();
    };
    TripsComponent.prototype.loadTrips = function () {
        var _this = this;
        this.dashboardService.getTrips()
            .subscribe(function (trips) {
            _this.trips = trips;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    TripsComponent.prototype.save = function () {
        var _this = this;
        if (this.trip.id == null) {
            this.dashboardService.createTrip(this.trip).subscribe(function (data) { return _this.loadTrips(); });
        }
        else {
            this.dashboardService.updateTrip(this.trip).subscribe(function (data) { return _this.loadTrips(); });
        }
        this.cancel();
    };
    TripsComponent.prototype.editTrip = function (trip) {
        this.trip = trip;
    };
    TripsComponent.prototype.cancel = function () {
        this.trip = new _models_trip_details_interface__WEBPACK_IMPORTED_MODULE_1__["TripDetails"]();
        this.tableMode = true;
    };
    TripsComponent.prototype.delete = function (trip) {
        var _this = this;
        var r = confirm("Are you sure?");
        if (r == true) {
            this.dashboardService.deleteTrip(trip.id).subscribe(function (data) { return _this.loadTrips(); });
        }
    };
    TripsComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    TripsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trips',
            template: __webpack_require__(/*! ./trips.component.html */ "./src/app/dashboard/trips/trips.component.html"),
            styles: [__webpack_require__(/*! ./trips.component.scss */ "./src/app/dashboard/trips/trips.component.scss")],
            providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]] //
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], TripsComponent);
    return TripsComponent;
}());



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/email.validator.directive.ts ***!
  \*********************************************************/
/*! exports provided: EmailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/focus.directive.ts ***!
  \***********************************************/
/*! exports provided: myFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myFocus", function() { return myFocus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _edit_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.routing */ "./src/app/edit/edit.routing.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/edit/trip/trip.component.ts");
/* harmony import */ var _services_edit_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/edit.services */ "./src/app/edit/services/edit.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditModule = (function () {
    function EditModule() {
    }
    EditModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _edit_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_trip_trip_component__WEBPACK_IMPORTED_MODULE_8__["TripEditComponent"]],
            exports: [],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _services_edit_services__WEBPACK_IMPORTED_MODULE_9__["EditService"]]
        })
    ], EditModule);
    return EditModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.routing.ts":
/*!**************************************!*\
  !*** ./src/app/edit/edit.routing.ts ***!
  \**************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip/trip.component */ "./src/app/edit/trip/trip.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");



var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
    {
        path: 'edit',
        component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__["TripEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: 'trip/:id', component: _trip_trip_component__WEBPACK_IMPORTED_MODULE_1__["TripEditComponent"] }
        ]
    }
]);


/***/ }),

/***/ "./src/app/edit/models/trip.with.post.interface.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit/models/trip.with.post.interface.ts ***!
  \*********************************************************/
/*! exports provided: TripWithPost, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripWithPost", function() { return TripWithPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var TripWithPost = (function () {
    function TripWithPost(id, name, isDone, description, postBlogs) {
        this.id = id;
        this.name = name;
        this.isDone = isDone;
        this.description = description;
        this.postBlogs = postBlogs;
    }
    return TripWithPost;
}());

var Post = (function () {
    function Post(id, name, plot, datOfCreation, tripId) {
        this.id = id;
        this.name = name;
        this.plot = plot;
        this.datOfCreation = datOfCreation;
        this.tripId = tripId;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/edit/services/edit.services.ts":
/*!************************************************!*\
  !*** ./src/app/edit/services/edit.services.ts ***!
  \************************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Add the RxJS Observable operators we need in this app.

var EditService = (function (_super) {
    __extends(EditService, _super);
    function EditService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    EditService.prototype.getTrip = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.get(this.baseUrl + "/api/trip/GetTripWithPosts/" + id, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditService.prototype.updateTrip = function (trip) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.put(this.baseUrl + "/api/trip/" + trip.id, trip, { headers: headers });
    };
    EditService.prototype.createPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        return this.http.post(this.baseUrl + "/api/PostBlog", JSON.stringify(post), { headers: headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    EditService.prototype.updatePost = function (post) {
        console.log("itworls?)");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', "Bearer " + authToken);
        //return this.http.put(this.baseUrl + "/api/PostBlog/" + post.id, JSON.stringify(post), { headers }).map(response => response.json()).catch(this.handleError);
        return this.http.put(this.baseUrl + "/api/postblog/" + post.id, post, { headers: headers });
    };
    EditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], EditService);
    return EditService;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/edit/trip/trip.component.html":
/*!***********************************************!*\
  !*** ./src/app/edit/trip/trip.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <main role=\"main\" class=\"col-sm-9 ml-sm-auto col-md-10 pt-3\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-3\">\r\n                <input type=\"button\" value=\"AddPost\" class=\"btn btn-default\" (click)=\"add()\" />\r\n                <div *ngIf=\"tableMode; else create\">\r\n                    <h3>Trip</h3>\r\n                    <label>Name:</label>\r\n                    <input type=\"text\" [(ngModel)]=\"trip.name\" class=\"form-control\" />\r\n                    <p>\r\n                        <label>Finished:</label>\r\n                        <select [(ngModel)]=\"trip.isDone\" class=\"custom-select\">\r\n                            <option value=\"true\">True</option>\r\n                            <option value=\"false\">False</option>\r\n                        </select>\r\n                    </p>\r\n                    <p>\r\n                        <label>Description</label>\r\n                        <textarea [(ngModel)]=\"trip.description\" class=\"form-control\"></textarea>\r\n                    </p>\r\n                    <input type=\"button\" value=\"Save\" (click)=\"saveTrip()\" class=\"btn btn-sm btn-success\" />\r\n\r\n                    <h3>Posts:</h3>\r\n                    <li *ngFor=\"let p of trip.postBlogs\">\r\n                        <label>Name:</label>\r\n                        <input type=\"text\" [(ngModel)]=\"p.name\" class=\"form-control\"/>\r\n                        <p>\r\n                            <label>Plot</label>\r\n                            <textarea [(ngModel)]=\"p.plot\" class=\"form-control\"></textarea>\r\n                        </p>\r\n                        <input type=\"button\" value=\"Save\" (click)=\"save(p)\" class=\"btn btn-sm btn-success\" />\r\n                        <h1></h1>\r\n                    </li>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </main>\r\n</div>\r\n\r\n<!--шаблон для добавления-->\r\n<ng-template #create>\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" [(ngModel)]=\"post.name\" class=\"form-control\" />\r\n    </div>\r\n    <div class=\"form-group\"> \r\n        <label>Plot</label>\r\n        <textarea [(ngModel)]=\"post.plot\" class=\"form-control\"></textarea>\r\n    </div>\r\n    <div>\r\n        <input type=\"button\" value=\"Save\" (click)=\"save(post)\" class=\"btn btn-success\" />\r\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" class=\"btn btn-warning\" />\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/edit/trip/trip.component.scss":
/*!***********************************************!*\
  !*** ./src/app/edit/trip/trip.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvdHJpcC90cmlwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/trip/trip.component.ts":
/*!*********************************************!*\
  !*** ./src/app/edit/trip/trip.component.ts ***!
  \*********************************************/
/*! exports provided: TripEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripEditComponent", function() { return TripEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_edit_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/edit.services */ "./src/app/edit/services/edit.services.ts");
/* harmony import */ var _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/trip.with.post.interface */ "./src/app/edit/models/trip.with.post.interface.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripEditComponent = (function () {
    function TripEditComponent(editService, router, activeRoute) {
        this.editService = editService;
        this.router = router;
        this.loaded = false;
        this.post = new _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.tableMode = true;
        // this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        //this.id = activeRoute.snapshot.params['id'];
        this.id = router.url.toString();
        var s;
        s = this.id.substring(11, this.id.length);
        this.id = s;
    }
    TripEditComponent.prototype.ngOnInit = function () {
        this.loadTrip(this.id);
    };
    TripEditComponent.prototype.loadTrip = function (id) {
        var _this = this;
        this.editService.getTrip(this.id)
            .subscribe(function (data) {
            _this.trip = data;
            if (_this.trip != null)
                _this.loaded = true;
        });
    };
    TripEditComponent.prototype.save = function (post) {
        var _this = this;
        this.post.tripId = Number.parseInt(this.id);
        console.log(this.trip.postBlogs);
        console.log(post);
        if (post.id == null) {
            this.editService.createPost(post).subscribe(function (data) { return _this.loadTrip(_this.id); });
        }
        else {
            console.log("hello");
            this.editService.updatePost(post).subscribe(function (data) { return _this.loadTrip(_this.id); });
        }
        this.cancel();
    };
    TripEditComponent.prototype.cancel = function () {
        this.post = new _models_trip_with_post_interface__WEBPACK_IMPORTED_MODULE_3__["Post"]();
        this.tableMode = true;
    };
    TripEditComponent.prototype.saveTrip = function () {
        var _this = this;
        this.editService.updateTrip(this.trip).subscribe(function (data) { return _this.loadTrip(_this.id); });
    };
    TripEditComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    TripEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.component.html */ "./src/app/edit/trip/trip.component.html"),
            styles: [__webpack_require__(/*! ./trip.component.scss */ "./src/app/edit/trip/trip.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_edit_services__WEBPACK_IMPORTED_MODULE_2__["EditService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TripEditComponent);
    return TripEditComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-basic\">\n    <footer>\n        <div class=\"social\"><a href=\"#\"><i class=\"icon ion-social-instagram\"></i></a><a href=\"#\"><i class=\"icon ion-social-snapchat\"></i></a><a href=\"#\"><i class=\"icon ion-social-twitter\"></i></a><a href=\"#\"><i class=\"icon ion-social-facebook\"></i></a></div>\n        <ul class=\"list-inline\">\n            <li class=\"list-inline-item\"><a href=\"#\">Home</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Services</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">About</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n            <li class=\"list-inline-item\"><a href=\"#\">Privacy Policy</a></li>\n        </ul>\n        <p class=\"copyright\">Company Name © 2018</p>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-basic {\n  padding: 30px 0;\n  background-color: #050505d2;\n  color: #ffffff; }\n\n.footer-basic ul {\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  font-size: 18px;\n  line-height: 1.6;\n  margin-bottom: 0; }\n\n.footer-basic li {\n  padding: 0 10px; }\n\n.footer-basic ul a {\n  color: inherit;\n  text-decoration: none;\n  opacity: 0.8; }\n\n.footer-basic ul a:hover {\n  opacity: 1; }\n\n.footer-basic .social {\n  text-align: center;\n  padding-bottom: 25px; }\n\n.footer-basic .social > a {\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin: 0 8px;\n  color: inherit;\n  opacity: 0.75; }\n\n.footer-basic .social > a:hover {\n  opacity: 0.9; }\n\n.footer-basic .copyright {\n  margin-top: 15px;\n  text-align: center;\n  font-size: 13px;\n  color: #aaa;\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxTT0ZUXFxUb0JlRGVsZXRlZFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFjO0VBQ2QsNEJBQTBCO0VBQzFCLGVBQWEsRUFDYjs7QUFFRjtFQUNFLFdBQVM7RUFDVCxpQkFBZTtFQUNmLG1CQUFpQjtFQUNqQixnQkFBYztFQUNkLGlCQUFlO0VBQ2YsaUJBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBYyxFQUNmOztBQUVEO0VBQ0UsZUFBYTtFQUNiLHNCQUFvQjtFQUNwQixhQUFXLEVBQ1o7O0FBRUQ7RUFDRSxXQUFTLEVBQ1Y7O0FBRUQ7RUFDRSxtQkFBaUI7RUFDakIscUJBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsZ0JBQWM7RUFDZCxZQUFVO0VBQ1YsYUFBVztFQUNYLGtCQUFnQjtFQUNoQixzQkFBb0I7RUFDcEIsbUJBQWlCO0VBQ2pCLG1CQUFpQjtFQUNqQix1QkFBcUI7RUFDckIsY0FBWTtFQUNaLGVBQWE7RUFDYixjQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFXLEVBQ1o7O0FBRUQ7RUFDRSxpQkFBZTtFQUNmLG1CQUFpQjtFQUNqQixnQkFBYztFQUNkLFlBQVU7RUFDVixpQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJhc2ljIHtcbiAgICBwYWRkaW5nOjMwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwNTA1MDVkMjtcbiAgICBjb2xvcjojZmZmZmZmO1xuICAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyB1bCB7XG4gICAgcGFkZGluZzowO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXNpemU6MThweDtcbiAgICBsaW5lLWhlaWdodDoxLjY7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIGxpIHtcbiAgICBwYWRkaW5nOjAgMTBweDtcbiAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyB1bCBhIHtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIG9wYWNpdHk6MC44O1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIHVsIGE6aG92ZXIge1xuICAgIG9wYWNpdHk6MTtcbiAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyAuc29jaWFsIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbToyNXB4O1xuICB9XG4gIFxuICAuZm9vdGVyLWJhc2ljIC5zb2NpYWwgPiBhIHtcbiAgICBmb250LXNpemU6MjRweDtcbiAgICB3aWR0aDo0MHB4O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OjQwcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjowIDhweDtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIG9wYWNpdHk6MC43NTtcbiAgfVxuICBcbiAgLmZvb3Rlci1iYXNpYyAuc29jaWFsID4gYTpob3ZlciB7XG4gICAgb3BhY2l0eTowLjk7XG4gIH1cbiAgXG4gIC5mb290ZXItYmFzaWMgLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIGNvbG9yOiNhYWE7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICB9XG4gIFxuICAiXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n    <!-- Logo -->\n    <a class=\"navbar-brand mb-0 h1\" href=\"#\">\n      <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDq_dCjo9JFjXBoftUnO0ENqioclM8bgfI3mc9lO22XbqIQ62k\" width=\"45\" height=\"45\" class=\"d-inline-block align-top\" alt=\"\">\n      TraveligBlog\n    </a>\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- end logo -->\n\n    <!-- Navigation components -->\n    <!-- Home - Guide - Trips buttons -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav nav1 mr-auto\">\n        <li>\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Guids</a>\n        </li>\n        <li>\n            <a class=\"nav-link\" href=\"#\">Trips</a>\n          </li>\n      </ul>\n      <ul class=\"navbar-nav navbar-left\">\n        <form class=\"form-inline my-1 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n          </form>\n      </ul>\n\n<!-- Right navbar before sign -->\n      <ul *ngIf=\"!status\" class=\"navbar-nav ml-auto\">\n        <li>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm\" href=\"#\"  routerLink=\"/login\">SIGN-IN</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n            <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/register\">SIGN-UP</a>\n          </div>\n        </li>\n      </ul>\n\n<!-- Right navbar after sign -->\n      <ul *ngIf=\"status\" class=\"navbar-nav ml-auto\">\n        <li >\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \" href=\"#\" routerLink=\"/dashboard\">My Page</a>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Second group\">\n              <a class=\"btn btn-info btn-sm \"(click)=\"logout()\" href=\"#\">SIGN OUT</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-right {\n  padding-right: 40px; }\n\n.form-group {\n  padding: 10px; }\n\n.color-blue {\n  color: #0080c5; }\n\n.color-red {\n  color: #FF0000; }\n\n.error-message {\n  font-size: 10px; }\n\n.nav1 {\n  margin-right: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxTT0ZUXFxUb0JlRGVsZXRlZFxcVHJhdmVsaW5nQmxvZ1xcVHJhdmVsaW5nQmxvZy5Bbmd1bGFyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLG9CQUFtQixFQUFHOztBQUNwQztFQUFZLGNBQWEsRUFBRzs7QUFDNUI7RUFBYSxlQUFjLEVBQUc7O0FBQzlCO0VBQVksZUFBYyxFQUFHOztBQUM3QjtFQUFnQixnQkFBZSxFQUFHOztBQUNsQztFQUVJLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXJpZ2h0e3BhZGRpbmctcmlnaHQ6IDQwcHg7fVxuLmZvcm0tZ3JvdXB7cGFkZGluZzogMTBweDt9XG4uY29sb3ItYmx1ZSB7Y29sb3I6ICMwMDgwYzU7fVxuLmNvbG9yLXJlZCB7Y29sb3I6ICNGRjAwMDA7fVxuLmVycm9yLW1lc3NhZ2Uge2ZvbnQtc2l6ZTogMTBweDt9XG4ubmF2MXtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"carousel-item active\" style=\"background-image: url('assets/images/carousel-img/7.jpg')\">\n\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Travels inspire us to adventure</h3>\n          <p class=\"lead\">Why us? Our travel blog will help you in organizing a wonderful trip for you.</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/4.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Wanna share emotions with other travellers?</h3>\n          <p class=\"lead\">Create a trip and tell everything about your journey. Don`t forget to add photo,\n            descriptions!</p>\n        </div>\n      </div>\n      <div class=\"carousel-item\" style=\"background-image: url('assets/images/carousel-img/5.jpg')\">\n        <div class=\"carousel-caption d-none d-md-block\">\n          <h3 class=\"display-4\">Let`s start! </h3>\n          <p class=\"lead\">Discover the world with us! Read blogs, get inspired and plan your trip!</p>\n        </div>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</header>\n\n\n<aside id=\"testimonials\" class=\"text-center\" data-enllax-ratio=\".2\" tabindex=\"-1\" style=\"background-position: center 34px;\">\n  <div class=\"section-heading\">\n    <h2 class=\"section-title\">Our experienced blogs!</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <blockquote class=\" testimonial classic\">\n        <img src=\"assets/images/user-img/user-1.jpg\" alt=\"User\" />\n        <h3>England - why not?</h3>\n        <q>Brits love to sip, slurp and gulp down tea while occasionally dunking a digestive in there too.\n          Among the three ghosts said to haunt Athelhampton House, one of them is an ape.\n          An interesting fact is that French was the official language of England for about 300 years. </q>\n        <footer>Julie Fan - Happy Customer</footer>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-3.jpg\" alt=\"User\" />\n        <h3>\"Like Spain, I am bound to the past.\"</h3>\n        <q>It’s like a dream to come to Spain and stay for a couple of years and get somebody to teach me Spanish\n          music.\n          I have seen dawn and sunset on moors and windy hills coming in solemn beauty like slow old tunes of Spain.\n        </q>\n        <footer>Thomas Doe </footer>\n      </blockquote>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <blockquote class=\"testimonial classic\">\n        <img src=\"assets/images/user-img/user-2.jpg\" alt=\"User\" />\n        <h3>Trip to the Netherland</h3>\n        <q>Yep, a country so small you can drive through it from its Northern- to its Southern-tip (the largest\n          distance)\n          in just about two hours if you don’t hit any heavy traffic.\n          Somehow the Dutch still manage to crank out enough food to “Feed the World” with so little space! I liked it!</q>\n        <footer>Roslyn Doe </footer>\n      </blockquote>\n    </div>\n  </div>\n\n</aside>\n\n<section id=\"portfolios\" class=\"section-padding\">\n  <div class=\"container\">\n    <h2 class=\"section-title\" data-wow-delay=\"0.4s\">Countries and places which inspire</h2>\n    <div class=\"row\">\n      <div id=\"portfolio\" class=\"row\" data-wow-delay=\"0.4s\">\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/1.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/1.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/2.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/2.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/3.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/3.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/4.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/4.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/5.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/5.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design\">\n          <div class=\"portfolio-item\">\n            <div class=\"shot-item\">\n              <img src=\"assets/images/block-img/6.jpg\" alt=\"\" />\n              <div class=\"overlay\">\n                <div class=\"icons\">\n                  <a class=\"lightbox preview\" href=\"assets/images/block-img/6.jpg\">\n                    <i class=\"icon-preview\"></i>\n                  </a>\n                  <a class=\"link\" href=\"#\">\n                    <i class=\"icon-link\"></i>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<form>\n  <div class=\"button-section\">\n    <h3>Let`s register and start your advantures!</h3>\n    <input class=\"registrationButton\" type=\"button\" value=\"Register\" onclick=\"window.location.href='/register'\" />\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n  height: 65vh;\n  min-height: 500px;\n  background: no-repeat center center scroll;\n  background-size: cover; }\n\n.ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n  background-color: #333; }\n\n@nest .active {\n  .ul {\n    background-color: #4CAF50; } }\n\nli {\n  float: left; }\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n  background-color: #111; }\n\n.btn {\n  color: #4CAF50;\n  margin: 8px;\n  float: right; }\n\n.button-section {\n  text-align: center; }\n\n.container {\n  margin-top: 10px; }\n\ndiv#footer {\n  padding: 10px;\n  color: white;\n  background-color: black; }\n\n.col-3 {\n  width: 33.33%; }\n\n.section-heading {\n  padding: 0 0 15px 0; }\n\n.row {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n.row-1 {\n  padding: 15px !important;\n  flex-wrap: wrap;\n  margin-left: -45px;\n  margin-right: -45px; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.testimonial {\n  padding: 15px; }\n\nblockquote {\n  position: relative; }\n\n.testimonial img {\n  max-height: 250px;\n  border-radius: 300em; }\n\n.testimonial footer {\n  padding-top: 12px; }\n\n.testimonial.classic img {\n  display: inline-block;\n  margin-bottom: 25px; }\n\n.testimonial.classic q {\n  display: block; }\n\n.testimonial.classic footer:before {\n  display: block;\n  content: \"\";\n  width: 30px;\n  height: 4px;\n  margin: 10px auto 15px auto; }\n\n.text-center {\n  text-align: center; }\n\n.registrationButton {\n  background-color: #4CAF50;\n  color: black;\n  font-size: 20px;\n  border: 2px solid black;\n  width: 30%;\n  border: none;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer; }\n\n.registrationButton:hover {\n  color: #ffff00;\n  background: #000;\n  border: 1px solid #fff; }\n\n.portfolio {\n  visibility: visible; }\n\n.section-title {\n  text-align: center; }\n\n#portfolios .mix {\n  padding: 10px; }\n\n.col-md-4 {\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%; }\n\n#portfolios .portfolio-item .shot-item {\n  margin: 0px; }\n\n.shot-item {\n  margin-right: 15px;\n  border-radius: 4px;\n  background: #fff;\n  position: relative; }\n\n.shot-item img {\n  width: 100%; }\n\n.shot-item .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 180, 217, 0.6);\n  opacity: 0; }\n\n.icon-eye:before {\n  content: \"\\e087\"; }\n\n.overlay {\n  opacity: 0; }\n\n.overlay .icons i {\n  height: 42px;\n  width: 42px;\n  line-height: 42px;\n  color: #00b4d9;\n  left: 50%;\n  margin-left: -24px;\n  margin-top: -24px;\n  top: 50%;\n  position: absolute;\n  z-index: 2;\n  cursor: pointer;\n  text-align: center;\n  font-size: 20px;\n  background: #fff;\n  border-radius: 4px; }\n\n.overlay .preview {\n  position: absolute;\n  left: 45%;\n  top: 50%;\n  color: #fff; }\n\n.overlay .link {\n  position: absolute;\n  left: 60%;\n  margin-left: 10px;\n  top: 50%;\n  color: #fff; }\n\n.shot-item:hover .overlay {\n  opacity: 1; }\n\n.icon {\n  width: 50px;\n  height: 60px; }\n\n.lead {\n  text-align: center;\n  color: ghostwhite;\n  font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcU09GVFxcVG9CZURlbGV0ZWRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsMkNBQTBDO0VBSTFDLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osdUJBQXNCLEVBS3pCOztBQUhHO0VBUkY7SUFTTSwwQkFBeUIsRUFFaEMsRUFBQTs7QUFFRDtFQUVJLFlBQVcsRUFFZDs7QUFFRDtFQUNJLGVBQWM7RUFDZCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFFeEI7O0FBRUQsb0RBQW9EOztBQUNwRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFJRDtFQUNJLGVBQWM7RUFDZCxZQUFXO0VBQ1gsYUFBWSxFQUNmOztBQUVEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0ksaUJBQWdCLEVBR25COztBQUdEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWix3QkFBdUIsRUFDMUI7O0FBR0Q7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0MseUJBQXdCO0VBQ3hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUVuQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN6QixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDbkI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLFlBQVcsRUFDWjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDbEIscUJBQW9CLEVBQ3RCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUdEO0VBQ0ksc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsWUFBVztFQUNYLFlBQVc7RUFDWCxZQUFXO0VBQ1gsNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBRUksMEJBQXlCO0VBQ3hCLGFBQVk7RUFDWixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixXQUFVO0VBQ1YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLGdCQUFlLEVBRW5COztBQUVEO0VBQ0UsZUFBYztFQUNkLGlCQUFnQjtFQUNoQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFFcEI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxxQkFBb0I7RUFFcEIsc0JBQ0YsRUFBQzs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLFFBQU87RUFDUCxPQUFNO0VBQ04sbUNBQWtDO0VBQ2xDLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLFdBQVUsRUFDWDs7QUFFRDtFQUNFLGFBQVk7RUFDWixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFNBQVE7RUFDUixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULGtCQUFpQjtFQUNqQixTQUFRO0VBQ1IsWUFBVyxFQUNaOztBQUVEO0VBQ0UsV0FBVSxFQUNYOztBQUVEO0VBRUUsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiA2NXZoO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIFxuICAgIEBuZXN0IC5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIH1cbn1cblxubGkge1xuICAgXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgXG59XG5cbmxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgIFxufVxuXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG5saSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xufVxuXG5cblxuLmJ0bntcbiAgICBjb2xvcjogIzRDQUY1MDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idXR0b24tc2VjdGlvbntcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxuXG59XG5cblxuZGl2I2Zvb3RlciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cblxuLmNvbC0zIHtcbiAgICB3aWR0aDogMzMuMzMlO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xufVxuXG4ucm93IHtcbiBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gZmxleC13cmFwOiB3cmFwO1xuIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICBcbn1cblxuLnJvdy0xe1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gZmxleC13cmFwOiB3cmFwO1xuIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiBtYXJnaW4tcmlnaHQ6IC00NXB4O1xufVxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGVzdGltb25pYWwge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbmJsb2NrcXVvdGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRlc3RpbW9uaWFsIGltZyB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICBib3JkZXItcmFkaXVzOiAzMDBlbTtcbn1cblxuLnRlc3RpbW9uaWFsIGZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRlc3RpbW9uaWFsLmNsYXNzaWMgcSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50ZXN0aW1vbmlhbC5jbGFzc2ljIGZvb3RlcjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMTVweCBhdXRvO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdHJhdGlvbkJ1dHRvbntcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgIGNvbG9yOiBibGFjaztcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAgd2lkdGg6IDMwJTtcbiAgICAgYm9yZGVyOiBub25lO1xuICAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbi5yZWdpc3RyYXRpb25CdXR0b246aG92ZXJ7XG4gIGNvbG9yOiAjZmZmZjAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4ucG9ydGZvbGlve1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG59XG4uc2VjdGlvbi10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcG9ydGZvbGlvcyAubWl4IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbC1tZC00e1xuICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcbiBcbiAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlXG59XG5cbiNwb3J0Zm9saW9zIC5wb3J0Zm9saW8taXRlbSAuc2hvdC1pdGVtIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zaG90LWl0ZW0ge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2hvdC1pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hvdC1pdGVtIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTgwLCAyMTcsIDAuNik7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5pY29uLWV5ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTA4N1wiO1xufVxuXG4ub3ZlcmxheSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5vdmVybGF5IC5pY29ucyBpIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGNvbG9yOiAjMDBiNGQ5O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIHRvcDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm92ZXJsYXkgLnByZXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1JTtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ub3ZlcmxheSAubGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2hvdC1pdGVtOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmljb257XG5cbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbiBcbi5sZWFke1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBnaG9zdHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/*!***********************************!*\
  !*** ./src/app/rxjs-operators.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators








/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/focus.directive */ "./src/app/directives/focus.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            exports: [_directives_focus_directive__WEBPACK_IMPORTED_MODULE_2__["myFocus"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _utils_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/config.service */ "./src/app/shared/utils/config.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var _rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rxjs-operators */ "./src/app/rxjs-operators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.baseUrl + "/api/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/api/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post(this.baseUrl + '/api/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _utils_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], UserService);
    return UserService;
}(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/config.service.ts ***!
  \************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'http://travelingblog.azurewebsites.net';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div> \n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9EOlxcU09GVFxcVG9CZURlbGV0ZWRcXFRyYXZlbGluZ0Jsb2dcXFRyYXZlbGluZ0Jsb2cuQW5ndWxhci9zcmNcXGFwcFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsdURBQXNEO0VBQ3RELCtDQUE4QyxFQUMvQzs7QUFFRDtFQUNFLCtCQUE4QjtFQUM5Qix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRTtJQUNFLDRCQUE2QixFQUFBO0VBRy9CO0lBQ0UsNEJBQTZCLEVBQUEsRUFBQTs7QUFJakM7RUFDRTtJQUNFLG9CQUFxQjtJQUNyQiw0QkFBNkIsRUFBQTtFQUcvQjtJQUNFLG9CQUFxQjtJQUNyQiw0QkFBNkIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMClcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMClcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SOFT\ToBeDeleted\TravelingBlog\TravelingBlog.Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
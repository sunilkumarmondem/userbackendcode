webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_group_component__ = __webpack_require__("./src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editgroup_editgroup_component__ = __webpack_require__("./src/app/editgroup/editgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdetail_userdetail_component__ = __webpack_require__("./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edituser_edituser_component__ = __webpack_require__("./src/app/edituser/edituser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_5__group_group_component__["a" /* GroupComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */]] },
    { path: 'editgroup/:_id', component: __WEBPACK_IMPORTED_MODULE_6__editgroup_editgroup_component__["a" /* EditgroupComponent */] },
    { path: 'userdetail/:_id', component: __WEBPACK_IMPORTED_MODULE_7__userdetail_userdetail_component__["a" /* UserdetailComponent */] },
    { path: 'edituser/:_id', component: __WEBPACK_IMPORTED_MODULE_8__edituser_edituser_component__["a" /* EdituserComponent */] },
    { path: 'users/:gnm', component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container pt-3\">\n  <ngx-flash-messages></ngx-flash-messages>\n  <router-outlet></router-outlet>            \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__group_group_component__ = __webpack_require__("./src/app/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guard__ = __webpack_require__("./src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__editgroup_editgroup_component__ = __webpack_require__("./src/app/editgroup/editgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__userdetail_userdetail_component__ = __webpack_require__("./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__edituser_edituser_component__ = __webpack_require__("./src/app/edituser/edituser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__group_group_component__["a" /* GroupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__editgroup_editgroup_component__["a" /* EditgroupComponent */],
                __WEBPACK_IMPORTED_MODULE_17__userdetail_userdetail_component__["a" /* UserdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__edituser_edituser_component__["a" /* EdituserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_flash_messages__["a" /* FlashMessagesModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_15__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__manage_service__["a" /* ManageService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.service.loggedin()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.registerurl = 'register';
        this.loginurl = 'authenticate';
        this.profileurl = 'profile';
    }
    AuthenticationService.prototype.registeruser = function (user) {
        return this.http.post(this.registerurl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    AuthenticationService.prototype.loginuser = function (user) {
        return this.http.post(this.loginurl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    AuthenticationService.prototype.storeuserdata = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authtoken = token;
        this.user = user;
    };
    AuthenticationService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.loggedin = function () {
        return !!localStorage.getItem('id_token');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());

/*getprofile(){
  
  this.loadtoken();
  const httpOptions1 = {
  
  headers1: new HttpHeaders({'Authorization':this.authtoken}),
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
  return this.http.get<any>(this.profileurl,httpOptions1).pipe(tap(data =>console.log(data)));
}

loadtoken(){
  const token = localStorage.getItem('id_token');
  this.authtoken=token;
}*/


/***/ }),

/***/ "./src/app/editgroup/editgroup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/editgroup/editgroup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<div>\n\t\t\t\t<h3>Edit GroupName</h3>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"group\">\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>GroupName:</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"group.name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"save()\">save</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"goback()\">Goback</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\n\t\t\t</div>\n\t\n\n\t\t</div>\n\t\t\n\t</div>\n</div>\n\t"

/***/ }),

/***/ "./src/app/editgroup/editgroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditgroupComponent = /** @class */ (function () {
    function EditgroupComponent(service, router, flash, route, location) {
        this.service = service;
        this.router = router;
        this.flash = flash;
        this.route = route;
        this.location = location;
        this.group = {};
    }
    EditgroupComponent.prototype.ngOnInit = function () {
        this.editgroup();
    };
    EditgroupComponent.prototype.editgroup = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        this.service.editgroups(_id).subscribe(function (data) {
            _this.group = data;
        });
    };
    EditgroupComponent.prototype.goback = function () {
        this.location.back();
    };
    EditgroupComponent.prototype.save = function () {
        var _this = this;
        this.service.updategroup(this.group).subscribe(function (data) {
            _this.flash.show('updated successfuuly', { classes: ['alert', 'alert-success'], timeout: 1000 });
            _this.goback();
        });
    };
    EditgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editgroup',
            template: __webpack_require__("./src/app/editgroup/editgroup.component.html"),
            styles: [__webpack_require__("./src/app/editgroup/editgroup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], EditgroupComponent);
    return EditgroupComponent;
}());



/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n\t<div *ngIf=\"users\">\n  <h2>Edit {{users.usersname}} Details</h2>\n  <form class=\"form-horizontal\" >\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"username\">username:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"email\" class=\"form-control\" id=\"username\" [(ngModel)]=\"users.username\" name=\"username\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"firstname\">firstname:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"firstname\" [(ngModel)]=\"users.firstname\" name=\"firstname\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"lastname\">lastname:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"lastname\" [(ngModel)]=\"users.lastname\" name=\"lastname\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"email\">email:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"users.email\" name=\"email\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" for=\"password\">password:</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"users.password\" name=\"password\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n    \t<button type=\"button\" class=\"btn btn-success\" (click)=\"save()\">save</button>\n    \t<button type=\"button\" class=\"btn btn-info\" (click)=goback()>Goback</button>\n    </div>\n    \n\n    \n   \n   \n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EdituserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(service, route, location, flash) {
        this.service = service;
        this.route = route;
        this.location = location;
        this.flash = flash;
        this.users = {};
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.getuserdetailforedit();
    };
    EdituserComponent.prototype.getuserdetailforedit = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        this.service.getuserdetailsforedit(_id).subscribe(function (data) {
            _this.users = data;
        });
    };
    ;
    EdituserComponent.prototype.goback = function () {
        this.location.back();
    };
    EdituserComponent.prototype.save = function () {
        var _this = this;
        this.service.saveupdateuser(this.users).subscribe(function (data) {
            _this.flash.show('user updated successfully', { classes: ['alert', 'alert-success'], timeout: 1000 });
            _this.goback();
        });
    };
    EdituserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edituser',
            template: __webpack_require__("./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__("./src/app/edituser/edituser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]])
    ], EdituserComponent);
    return EdituserComponent;
}());



/***/ }),

/***/ "./src/app/group/group.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\"></div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div *ngIf=\"!hiddenform\">\n\t\t\t\t<h3>Add GroupName</h3>\n\t\t\t\t\t<form (submit)=\"addgroup()\" >\n\t\t\t\t\t\t\n\t\t\t\t\t  <div class=\"form-group\">\n\t\t\t\t\t    <label for=\"name\">Group Name:</label>\n\t\t\t\t\t    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" required>\n\t\t\t\t\t  </div>\n\t\t\t\t\t  \n\t\t\t\t\t   \n\t\t\t\t\t  <button type=\"submit\" class=\"btn btn-success \" value=\"submit\">Submit</button>\n\t\t\t\t\t  <button type=\"button\" class=\"btn btn-info\" (click)=\"cancel()\">cancel</button>\n\t\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"!hiddenbutton\">\n\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"newgroup()\">Add group</button>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<table class=\"table table-hover\">\n\t\t\t    <thead>\n\t\t\t      <tr>\n\t\t\t        <th>Group name</th>\n\t\t\t        <th>users</th>\n\t\t\t        <th>Edit</th>\n\t\t\t        <th>Delete</th>\n\t\t\t      </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t      <tr *ngFor=\"let group of groups\">\n\t\t\t        <td>{{group.name}}</td>\n\t\t\t        <td><a routerLink=\"/users/{{group.name}}\" >users</a></td>\n\t\t\t        <td>\n\t\t\t        \t\n\t\t\t        \t<a routerLink=\"/editgroup/{{group._id}}\"><button type=\"button\" class=\"btn btn-primary\">Edit</button></a>\n\t\t\t       \n\t\t\t        </td>\n\t\t\t        <td>\n\t\t\t        \t\n\t\t\t        \t<button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(group._id)\" >Delete</button>\n\t\t\t        \t\n\t\t\t        </td>\n\n\t\t\t      </tr>\n\t\t\t      \n\t\t\t      \n\t\t\t    </tbody>\n  </table>\n\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupComponent = /** @class */ (function () {
    function GroupComponent(service, router, validser, flash) {
        this.service = service;
        this.router = router;
        this.validser = validser;
        this.flash = flash;
        this.hiddenform = true;
        this.hiddenbutton = false;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.getgroupsfrom();
    };
    GroupComponent.prototype.getgroupsfrom = function () {
        var _this = this;
        this.service.getgroups().subscribe(function (data) {
            _this.groups = data;
        });
    };
    ;
    GroupComponent.prototype.newgroup = function () {
        this.hiddenform = false;
        this.hiddenbutton = true;
    };
    GroupComponent.prototype.cancel = function () {
        this.hiddenform = true;
        this.hiddenbutton = false;
    };
    GroupComponent.prototype.addgroup = function () {
        var _this = this;
        var group = {
            name: this.name
        };
        if (!this.validser.validgroup(group)) {
            this.flash.show('please fill group name', { classes: ['alert', 'alert-danger'], timeout: 1000 });
            return false;
        }
        this.service.addgroups(group).subscribe(function (data) {
            _this.groups.push(data);
            _this.hiddenform = true;
            _this.hiddenbutton = false;
            _this.flash.show('Group created successfully', { classes: ['alert', 'alert-success'], timeout: 1000 });
            _this.name = null;
            return false;
        });
    };
    GroupComponent.prototype.delete = function (group) {
        var _this = this;
        this.service.deletegroups(group).subscribe(function (data) {
            _this.getgroupsfrom();
            _this.flash.show('Group deleted ', { classes: ['alert', 'alert-danger'], timeout: 1000 });
        });
    };
    GroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group',
            template: __webpack_require__("./src/app/group/group.component.html"),
            styles: [__webpack_require__("./src/app/group/group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_flash_messages__["b" /* FlashMessagesService */]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n\t<div class=\"col-md-9 mx-auto\">\n\t\t<div class=\"card rounded-0\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3 class=\"mb-0\">Login</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<form (submit)=\"login()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"username\">username</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"login\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flash, authservice, router) {
        this.flash = flash;
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authservice.loginuser(user).subscribe(function (data) {
            if (data.success) {
                _this.authservice.storeuserdata(data.token, data.user);
                _this.flash.show('you are logged in', { classes: ['alert', 'alert-success'], timeout: 3000 });
                _this.router.navigate(['/groups']);
            }
            else {
                _this.flash.show(data.msg, { classes: ['alert', 'alert-danger'], timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ManageService = /** @class */ (function () {
    function ManageService(http) {
        this.http = http;
        this.getgroup = 'groups';
        this.addgroup = 'addgroup';
        this.getusersurl = 'users';
        this.adduserurl = 'adduser';
        this.getuserwithgroupurl = 'users_group';
    }
    ManageService.prototype.getgroups = function () {
        return this.http.get(this.getgroup).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.addgroups = function (group) {
        return this.http.post(this.addgroup, group, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.deletegroups = function (group) {
        return this.http.delete(this.getgroup + "/" + group, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.editgroups = function (_id) {
        return this.http.get(this.getgroup + "/" + _id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.updategroup = function (group) {
        return this.http.put(this.getgroup + "/" + group._id, group, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.getgroups1 = function () {
        return this.http.get(this.getgroup).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.getusers = function () {
        return this.http.get(this.getusersurl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.addusers = function (user) {
        return this.http.post(this.adduserurl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.deleteusers = function (user) {
        return this.http.delete(this.getusersurl + "/" + user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.getuserdetails = function (_id) {
        return this.http.get(this.getusersurl + "/" + _id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.getuserdetailsforedit = function (_id) {
        return this.http.get(this.getusersurl + "/" + _id).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.saveupdateuser = function (user) {
        return this.http.put(this.getusersurl + "/" + user._id, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService.prototype.getuserswithgroup = function (gnm) {
        return this.http.get(this.getuserwithgroupurl + "/" + gnm).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* tap */])(function (data) { return console.log(data); }));
    };
    ManageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ManageService);
    return ManageService;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">UserManagementSystem</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/groups\" routerLinkActive=\"active\">Groups</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <a  *ngIf=\"!authservice.loggedin()\" class=\"nav-link\"   routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        <a *ngIf=\"!authservice.loggedin()\" class=\"nav-link\"  routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n\n        <a *ngIf=\"authservice.loggedin()\" class=\"nav-link\" href=\"#\" (click)=\"logoutuser()\">Logout</a>\n        \n          \n    </ul>\n  </div>\n</nav> "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(flash, authservice, router) {
        this.flash = flash;
        this.authservice = authservice;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutuser = function () {
        this.authservice.logout();
        this.flash.show("you are logged out", { classes: ['alert', 'alert-danger'], timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-5\">\n\t<div class=\"col-md-9 mx-auto\">\n\t\t<div class=\"card rounded-0\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3 class=\"mb-0\">Register</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<form (submit)=\"register()\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"name\" name=\"name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"username\">Username</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"username\" name=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password \">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" value=\"submit\">submit</button> \n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, flash, authservice, router) {
        this.service = service;
        this.flash = flash;
        this.authservice = authservice;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.service.validregister(user)) {
            this.flash.show('please fill all fields', { classes: ['alert', 'alert-danger'], timeout: 3000 });
            return false;
        }
        if (!this.service.validemail(user.email)) {
            this.flash.show('please use valid email', { classes: ['alert', 'alert-danger'], timeout: 3000 });
            return false;
        }
        this.authservice.registeruser(user).subscribe(function (data) {
            if (data.success) {
                _this.flash.show('you are registered successfully', { classes: ['alert', 'alert-success'], timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flash.show('something went wrong', { classes: ['alert', 'alert-danger'], timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/userdetail/userdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userdetail/userdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2\">\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div *ngIf=\"users\">\n\t\t\t\t<div class=\"card\" style=\"width: 40rem;\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h2 class=\"card-title\" style=\"color:green;\">{{users.username}} details</h2>\n\t\t\t\t   \n\t\t\t\t    <div class=\"card-text\">\n\t\t\t\t    \t<div><h4>Firstname: {{users.firstname}}</h4></div>\n\t\t\t\t    \t<div><h4>Lastname: {{users.lastname}}</h4></div>\n\t\t\t\t    \t<div><h4>Email: {{users.email}}</h4></div>\n\t\t\t\t    \t<div><h4>Group: {{users.group}}</h4></div>\n\t\t\t\t    \t<div><h4>Date of birth: {{users.dateofbirth | date:'shortDate'}}</h4>\n\t\t\t\t    \t\t<div>\n\t\t\t\t    \t\t\t<br>\n\t\t\t\t    \t<button type=\"button\" class=\"btn btn-success\" value=\"Goback\" (click)=\"goback()\">Goback</button>\n\t\t\t\t    </div>\n\t\t\t\t    \n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/userdetail/userdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserdetailComponent = /** @class */ (function () {
    function UserdetailComponent(service, route, location) {
        this.service = service;
        this.route = route;
        this.location = location;
        this.users = {};
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        this.getuserdetail();
    };
    UserdetailComponent.prototype.getuserdetail = function () {
        var _this = this;
        var _id = this.route.snapshot.paramMap.get('_id');
        this.service.getuserdetails(_id).subscribe(function (data) {
            _this.users = data;
        });
    };
    UserdetailComponent.prototype.goback = function () {
        this.location.back();
    };
    UserdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-userdetail',
            template: __webpack_require__("./src/app/userdetail/userdetail.component.html"),
            styles: [__webpack_require__("./src/app/userdetail/userdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], UserdetailComponent);
    return UserdetailComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\"></div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div *ngIf=\"!hiddenform\">\n\t\t\t\t<h3>Add user</h3>\n\t\t\t\t<form >\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"firstname\">username</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"firstname\" [(ngModel)]=\"username\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"firstname\">email</label>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"firstname\" [(ngModel)]=\"email\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"password\">password</label>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"firstname\" [(ngModel)]=\"password\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"firstname\">firstname</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" [(ngModel)]=\"firstname\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"lastname\">lastname</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lastname\" name=\"lastname\" [(ngModel)]=\"lastname\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"group\">Group</label>\n\t\t\t\t\t\t<select [(ngModel)]=\"group\" name=\"group\" id=\"group\">\n\t\t\t\t\t\t\t<option *ngFor=\"let group of groups\" value=\"{{group.name}}\">{{group.name}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"dateofbirth\">Dateofbirth</label>\n\t\t\t\t\t\t<input type=\"date\" class=\"form-control\" id=\"dateofbirth\" name=\"dateofbirth\" [(ngModel)]=\"dateofbirth\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" value=\"submit\" (click)=\"adduser()\">submit</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" value=\"cancel\" (click)=\"cancel()\">cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"!hiddenbutton\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"newuser()\">AddUser</button>\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div *ngIf=\"!hiddenform2\">\n\t\t\t<table class=\"table table-hover\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Username</th>\n\t\t\t\t\t\t<th>Groupname</th>\n\t\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t\t<th>Edit</th>\n\t\t\t\t\t\t<th>Delete</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let user of users\">\n\t\t\t\t\t\t<td><a style=\"text-decoration:none;\" routerLink=\"/userdetail/{{user._id}}\">{{user.username}}</a></td>\n\t\t\t\t\t\t<td>{{user.group}}</td>\n\t\t\t\t\t\t<td>{{user.email}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a routerLink=\"/edituser/{{user._id}}\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\">Edit</button>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteuser(user._id)\">Delete</button></td>\n\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manage_service__ = __webpack_require__("./src/app/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate_service__ = __webpack_require__("./src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("./node_modules/ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(service, validser, flash, route) {
        this.service = service;
        this.validser = validser;
        this.flash = flash;
        this.route = route;
        this.hiddenform = true;
        this.hiddenbutton = false;
        this.hiddenform2 = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var gnm = this.route.snapshot.paramMap.get('gnm');
        gnm == null ? this.getuser() : this.getuserwithgroup(gnm);
        this.groupnames();
    };
    UsersComponent.prototype.groupnames = function () {
        var _this = this;
        this.service.getgroups1().subscribe(function (data) {
            _this.groups = data;
        });
    };
    UsersComponent.prototype.getuser = function () {
        var _this = this;
        this.service.getusers().subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent.prototype.newuser = function () {
        this.hiddenform = false;
        this.hiddenform2 = true;
        this.hiddenbutton = true;
    };
    UsersComponent.prototype.cancel = function () {
        this.hiddenform = true;
        this.hiddenform2 = false;
        this.hiddenbutton = false;
    };
    UsersComponent.prototype.adduser = function () {
        var _this = this;
        var user = {
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            group: this.group,
            dateofbirth: this.dateofbirth
        };
        if (!this.validser.validuser(user)) {
            this.flash.show('please fill all fields', { classes: ['alert', 'alert-danger'], timeout: 1000 });
            return false;
        }
        if (!this.validser.validuseremail(user.email)) {
            this.flash.show('please use valid email', { classes: ['alert', 'alert-danger'], timeout: 1000 });
            return false;
        }
        this.service.addusers(user).subscribe(function (data) {
            _this.users.push(data);
            _this.flash.show('user created successfully', { classes: ['alert', 'alert-success'], timeout: 1000 });
            _this.hiddenform = true;
            _this.hiddenform2 = false;
            _this.hiddenbutton = false;
            _this.username = null;
            _this.firstname = null;
            _this.lastname = null;
            _this.email = null;
            _this.password = null;
            _this.group = null;
            _this.dateofbirth = null;
            return false;
        });
    };
    UsersComponent.prototype.deleteuser = function (user) {
        var _this = this;
        this.service.deleteusers(user).subscribe(function (data) {
            _this.flash.show('user deleted ', { classes: ['alert', 'alert-danger'], timeout: 1000 });
            _this.getuser();
        });
    };
    UsersComponent.prototype.getuserwithgroup = function (gnm) {
        var _this = this;
        this.service.getuserswithgroup(gnm).subscribe(function (data) {
            _this.users = data;
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manage_service__["a" /* ManageService */],
            __WEBPACK_IMPORTED_MODULE_2__validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["b" /* FlashMessagesService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validregister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validemail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validgroup = function (group) {
        if (group.name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validuser = function (user) {
        if (user.username == undefined || user.firstname == undefined || user.lastname == undefined || user.email == undefined ||
            user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validuseremail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
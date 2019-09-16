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

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 text-center\">\n      <h1>CREATE AND SHARE ONLINE EXAMS EASILY</h1><br/>\n      <p>Deliver an exceptional and seamless online exam experience to your learners. </p>\n      <p>Over 5 million assessments evaluated.</p>\n    </div>\n    \n  </div><br/>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n  \n            <img src=\"assets/ab1.png\"><br/><br/>\n          \n            <h3>CLEAN AND SIMPLE UI</h3>\n            <p>With our clean and no non-sense UI, </p>\n            <p>you can create and share your first test </p>\n            <p>in few minutes.</p>\n          </div>\n      \n\n          <div class=\"col-sm-4\">\n  \n              <img src=\"assets/ab2.png\"><br/><br/>\n            \n              <h3>USER ENGAGEMENT</h3>\n              <p>Discussion forum integrated with online  </p>\n              <p>exams and e-notes to engage the users  </p>\n              <p>with the coaching academies.</p>\n            </div>\n            \n\n            <div class=\"col-sm-4\">\n  \n                <img src=\"assets/ab4.png\"><br/><br/>\n              \n                <h3>FREE TECHNICAL SUPPORT</h3>\n                <p>Testpress provides free technical  </p>\n                <p>support to learners of your coaching  </p>\n                <p>academy.s</p>\n              </div>\n\n\n        </div>\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AdminService = /** @class */ (function () {
    //inject http client object
    function AdminService(ac, route) {
        this.ac = ac;
        this.route = route;
    }
    AdminService.prototype.getData = function () {
        return this.ac.get('/admin/userinformation');
    };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluied\">\n    <div class=\"row bg-secondary\" style=\"height:3rem\">\n        <div class=\"col-sm-9 text-center\">\n          <h1 class=\"text-white\">Welcome To Admin</h1>\n        </div>\n        <div class=\"col-sm-3 text-right\">\n            <a href=\"#\" class=\"text-danger\">LogOut</a>\n        </div>\n      </div>\n  \n        <div class=\"row\">\n      <div class=\"col-sm-2\">\n  <nav class=\"nav flex-column navbar-whites bg-info navbar-dark nav-tabs\" style=\"height:30rem\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item pt-2\"><a routerLink =\"uploads\" class=\"nav-link\">Uploads</a></li>\n      <li class=\"nav-item pt-2\"><a routerLink=\"userinformation\" class=\"nav-link\">UserInformation</a></li>\n      <li class=\"nav-item pt-2\"><a routerLink =\"userperformance\" class=\"nav-link\">UserPerformance</a></li>\n    </ul>\n  \n  </nav>\n  </div>\n      <div class=\"col-sm-10\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/angularbasic/angularbasic.component.css":
/*!*********************************************************!*\
  !*** ./src/app/angularbasic/angularbasic.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXJiYXNpYy9hbmd1bGFyYmFzaWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/angularbasic/angularbasic.component.html":
/*!**********************************************************!*\
  !*** ./src/app/angularbasic/angularbasic.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angularbasic works!\n</p>\n"

/***/ }),

/***/ "./src/app/angularbasic/angularbasic.component.ts":
/*!********************************************************!*\
  !*** ./src/app/angularbasic/angularbasic.component.ts ***!
  \********************************************************/
/*! exports provided: AngularbasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularbasicComponent", function() { return AngularbasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularbasicComponent = /** @class */ (function () {
    function AngularbasicComponent() {
    }
    AngularbasicComponent.prototype.ngOnInit = function () {
    };
    AngularbasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angularbasic',
            template: __webpack_require__(/*! ./angularbasic.component.html */ "./src/app/angularbasic/angularbasic.component.html"),
            styles: [__webpack_require__(/*! ./angularbasic.component.css */ "./src/app/angularbasic/angularbasic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularbasicComponent);
    return AngularbasicComponent;
}());



/***/ }),

/***/ "./src/app/angularexpert/angularexpert.component.css":
/*!***********************************************************!*\
  !*** ./src/app/angularexpert/angularexpert.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXJleHBlcnQvYW5ndWxhcmV4cGVydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/angularexpert/angularexpert.component.html":
/*!************************************************************!*\
  !*** ./src/app/angularexpert/angularexpert.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angularexpert works!\n</p>\n"

/***/ }),

/***/ "./src/app/angularexpert/angularexpert.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/angularexpert/angularexpert.component.ts ***!
  \**********************************************************/
/*! exports provided: AngularexpertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularexpertComponent", function() { return AngularexpertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularexpertComponent = /** @class */ (function () {
    function AngularexpertComponent() {
    }
    AngularexpertComponent.prototype.ngOnInit = function () {
    };
    AngularexpertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angularexpert',
            template: __webpack_require__(/*! ./angularexpert.component.html */ "./src/app/angularexpert/angularexpert.component.html"),
            styles: [__webpack_require__(/*! ./angularexpert.component.css */ "./src/app/angularexpert/angularexpert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularexpertComponent);
    return AngularexpertComponent;
}());



/***/ }),

/***/ "./src/app/angularintermediate/angularintermediate.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/angularintermediate/angularintermediate.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXJpbnRlcm1lZGlhdGUvYW5ndWxhcmludGVybWVkaWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/angularintermediate/angularintermediate.component.html":
/*!************************************************************************!*\
  !*** ./src/app/angularintermediate/angularintermediate.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angularintermediate works!\n</p>\n"

/***/ }),

/***/ "./src/app/angularintermediate/angularintermediate.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/angularintermediate/angularintermediate.component.ts ***!
  \**********************************************************************/
/*! exports provided: AngularintermediateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularintermediateComponent", function() { return AngularintermediateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularintermediateComponent = /** @class */ (function () {
    function AngularintermediateComponent() {
    }
    AngularintermediateComponent.prototype.ngOnInit = function () {
    };
    AngularintermediateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angularintermediate',
            template: __webpack_require__(/*! ./angularintermediate.component.html */ "./src/app/angularintermediate/angularintermediate.component.html"),
            styles: [__webpack_require__(/*! ./angularintermediate.component.css */ "./src/app/angularintermediate/angularintermediate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularintermediateComponent);
    return AngularintermediateComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _exams_exams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./exams/exams.component */ "./src/app/exams/exams.component.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _javaintermediate_javaintermediate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./javaintermediate/javaintermediate.component */ "./src/app/javaintermediate/javaintermediate.component.ts");
/* harmony import */ var _javaexpert_javaexpert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./javaexpert/javaexpert.component */ "./src/app/javaexpert/javaexpert.component.ts");
/* harmony import */ var _cbasic_cbasic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cbasic/cbasic.component */ "./src/app/cbasic/cbasic.component.ts");
/* harmony import */ var _cintermediate_cintermediate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cintermediate/cintermediate.component */ "./src/app/cintermediate/cintermediate.component.ts");
/* harmony import */ var _cexpert_cexpert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cexpert/cexpert.component */ "./src/app/cexpert/cexpert.component.ts");
/* harmony import */ var _angularbasic_angularbasic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angularbasic/angularbasic.component */ "./src/app/angularbasic/angularbasic.component.ts");
/* harmony import */ var _angularintermediate_angularintermediate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./angularintermediate/angularintermediate.component */ "./src/app/angularintermediate/angularintermediate.component.ts");
/* harmony import */ var _angularexpert_angularexpert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./angularexpert/angularexpert.component */ "./src/app/angularexpert/angularexpert.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./uploads/uploads.component */ "./src/app/uploads/uploads.component.ts");
/* harmony import */ var _userinformation_userinformation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userinformation/userinformation.component */ "./src/app/userinformation/userinformation.component.ts");
/* harmony import */ var _userperformance_userperformance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./userperformance/userperformance.component */ "./src/app/userperformance/userperformance.component.ts");
/* harmony import */ var _userdashbord_userdashbord_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./userdashbord/userdashbord.component */ "./src/app/userdashbord/userdashbord.component.ts");



























var routes = [
    { path: 'child', component: _child_child_component__WEBPACK_IMPORTED_MODULE_3__["ChildComponent"], children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"] },
            { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_8__["AboutusComponent"] },
        ] },
    { path: '', redirectTo: "child/home", pathMatch: "full" },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], children: [{ path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] }, { path: 'exams', component: _exams_exams_component__WEBPACK_IMPORTED_MODULE_12__["ExamsComponent"] }, { path: 'userdashbord', component: _userdashbord_userdashbord_component__WEBPACK_IMPORTED_MODULE_26__["UserdashbordComponent"] }, { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_22__["ChangepasswordComponent"] }, { path: '', redirectTo: "userdashbord", pathMatch: "full" }] },
    { path: 'basic', component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_13__["BasicComponent"] },
    { path: 'javaintermediate', component: _javaintermediate_javaintermediate_component__WEBPACK_IMPORTED_MODULE_14__["JavaintermediateComponent"] },
    { path: 'javaexpert', component: _javaexpert_javaexpert_component__WEBPACK_IMPORTED_MODULE_15__["JavaexpertComponent"] },
    { path: 'cbasic', component: _cbasic_cbasic_component__WEBPACK_IMPORTED_MODULE_16__["CbasicComponent"] },
    { path: 'cexpert', component: _cexpert_cexpert_component__WEBPACK_IMPORTED_MODULE_18__["CexpertComponent"] },
    { path: 'cintermediate', component: _cintermediate_cintermediate_component__WEBPACK_IMPORTED_MODULE_17__["CintermediateComponent"] },
    { path: 'angularbasic', component: _angularbasic_angularbasic_component__WEBPACK_IMPORTED_MODULE_19__["AngularbasicComponent"] },
    { path: 'angularintermediate', component: _angularintermediate_angularintermediate_component__WEBPACK_IMPORTED_MODULE_20__["AngularintermediateComponent"] },
    { path: 'angularexpert', component: _angularexpert_angularexpert_component__WEBPACK_IMPORTED_MODULE_21__["AngularexpertComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"], children: [{ path: 'uploads', component: _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_23__["UploadsComponent"] }, { path: 'userinformation', component: _userinformation_userinformation_component__WEBPACK_IMPORTED_MODULE_24__["UserinformationComponent"] }, { path: 'userperformance', component: _userperformance_userperformance_component__WEBPACK_IMPORTED_MODULE_25__["UserperformanceComponent"] }, { path: '', redirectTo: "uploads", pathMatch: "full" }] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _exams_exams_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exams/exams.component */ "./src/app/exams/exams.component.ts");
/* harmony import */ var _basic_basic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./basic/basic.component */ "./src/app/basic/basic.component.ts");
/* harmony import */ var _javaintermediate_javaintermediate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./javaintermediate/javaintermediate.component */ "./src/app/javaintermediate/javaintermediate.component.ts");
/* harmony import */ var _javaexpert_javaexpert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./javaexpert/javaexpert.component */ "./src/app/javaexpert/javaexpert.component.ts");
/* harmony import */ var _cbasic_cbasic_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cbasic/cbasic.component */ "./src/app/cbasic/cbasic.component.ts");
/* harmony import */ var _cintermediate_cintermediate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cintermediate/cintermediate.component */ "./src/app/cintermediate/cintermediate.component.ts");
/* harmony import */ var _cexpert_cexpert_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cexpert/cexpert.component */ "./src/app/cexpert/cexpert.component.ts");
/* harmony import */ var _angularbasic_angularbasic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./angularbasic/angularbasic.component */ "./src/app/angularbasic/angularbasic.component.ts");
/* harmony import */ var _angularintermediate_angularintermediate_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./angularintermediate/angularintermediate.component */ "./src/app/angularintermediate/angularintermediate.component.ts");
/* harmony import */ var _angularexpert_angularexpert_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./angularexpert/angularexpert.component */ "./src/app/angularexpert/angularexpert.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./uploads/uploads.component */ "./src/app/uploads/uploads.component.ts");
/* harmony import */ var _userinformation_userinformation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./userinformation/userinformation.component */ "./src/app/userinformation/userinformation.component.ts");
/* harmony import */ var _userperformance_userperformance_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./userperformance/userperformance.component */ "./src/app/userperformance/userperformance.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _userdashbord_userdashbord_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./userdashbord/userdashbord.component */ "./src/app/userdashbord/userdashbord.component.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_6__["ChildComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_11__["AboutusComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _exams_exams_component__WEBPACK_IMPORTED_MODULE_16__["ExamsComponent"],
                _basic_basic_component__WEBPACK_IMPORTED_MODULE_17__["BasicComponent"],
                _javaintermediate_javaintermediate_component__WEBPACK_IMPORTED_MODULE_18__["JavaintermediateComponent"],
                _javaexpert_javaexpert_component__WEBPACK_IMPORTED_MODULE_19__["JavaexpertComponent"],
                _cbasic_cbasic_component__WEBPACK_IMPORTED_MODULE_20__["CbasicComponent"],
                _cintermediate_cintermediate_component__WEBPACK_IMPORTED_MODULE_21__["CintermediateComponent"],
                _cexpert_cexpert_component__WEBPACK_IMPORTED_MODULE_22__["CexpertComponent"],
                _angularbasic_angularbasic_component__WEBPACK_IMPORTED_MODULE_23__["AngularbasicComponent"],
                _angularintermediate_angularintermediate_component__WEBPACK_IMPORTED_MODULE_24__["AngularintermediateComponent"],
                _angularexpert_angularexpert_component__WEBPACK_IMPORTED_MODULE_25__["AngularexpertComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_26__["ChangepasswordComponent"],
                _uploads_uploads_component__WEBPACK_IMPORTED_MODULE_27__["UploadsComponent"],
                _userinformation_userinformation_component__WEBPACK_IMPORTED_MODULE_28__["UserinformationComponent"],
                _userperformance_userperformance_component__WEBPACK_IMPORTED_MODULE_29__["UserperformanceComponent"],
                _userdashbord_userdashbord_component__WEBPACK_IMPORTED_MODULE_31__["UserdashbordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                    useClass: _auth_service__WEBPACK_IMPORTED_MODULE_30__["AuthService"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.intercept = function (req, next) {
        //read token from localstorage
        var token = localStorage.getItem("token");
        //if token is found,add it to headers of request object
        if (token) {
            var cloned = req.clone({ headers: req.headers.set("Authorization", "Bearer " + token) });
            //sending to next intercepter or t backend
            return next.handle(cloned);
        }
        //if token not found forward request to next intercepter
        else {
            //sending to next interceptor or to backend
            return next.handle(req);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/basic/basic.component.css":
/*!*******************************************!*\
  !*** ./src/app/basic/basic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2Jhc2ljLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/basic/basic.component.html":
/*!********************************************!*\
  !*** ./src/app/basic/basic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form #ref=ngForm (ngSubmit)=\"result(ref.value)\">\n    <div *ngFor=\"let i of examdata\">\n        <legend>{{i.question}}</legend>\n        <div *ngFor=\"let j of opt\">\n            <input type=\"radio\" name=\"options\">{{j.answer}}\n        </div>\n    </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/basic/basic.component.ts":
/*!******************************************!*\
  !*** ./src/app/basic/basic.component.ts ***!
  \******************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicComponent = /** @class */ (function () {
    function BasicComponent() {
    }
    BasicComponent.prototype.ngOnInit = function () {
    };
    BasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.component.html */ "./src/app/basic/basic.component.html"),
            styles: [__webpack_require__(/*! ./basic.component.css */ "./src/app/basic/basic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicComponent);
    return BasicComponent;
}());



/***/ }),

/***/ "./src/app/cbasic.service.ts":
/*!***********************************!*\
  !*** ./src/app/cbasic.service.ts ***!
  \***********************************/
/*! exports provided: CbasicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbasicService", function() { return CbasicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CbasicService = /** @class */ (function () {
    function CbasicService(hc) {
        this.hc = hc;
    }
    CbasicService.prototype.fun = function () {
        return this.hc.get("assets/c.json");
    };
    CbasicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CbasicService);
    return CbasicService;
}());



/***/ }),

/***/ "./src/app/cbasic/cbasic.component.css":
/*!*********************************************!*\
  !*** ./src/app/cbasic/cbasic.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NiYXNpYy9jYmFzaWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cbasic/cbasic.component.html":
/*!**********************************************!*\
  !*** ./src/app/cbasic/cbasic.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n  <div class=\"col-sm-3\"></div>\n  <div class=\"col-sm-6 mb-5\">\n     <form #ref=\"ngForm\" (ngSubmit)=\"submited_data(ref.value)\">\n         <div *ngFor=\"let i of examdata; let in=index\" >\n           <label class=\"text-danger\"><b>{{i.questionno}}.{{i.question}}</b></label> \n         \n           <div *ngFor=\"let options of i.options\">\n             <input type=\"radio\" name={{i.questionno}} [value]=options.option ngModel (change)=\"onoptchange(i.questionno,options)\"> {{options.answer}}\n             </div>\n           </div>  \n           <button type=\"submit\" class=\"btn btn-success\">Submit</button> \n       </form> \n       \n \n      <div *ngIf=\"f\">\n       <h1 class=\"mt-4\">your result is :{{marks}}</h1>\n      </div>\n \n   </div> \n  <div class=\"col-sm-3\">\n    <button class=\"btn btn-success float-right\">{{timeLeft}} Seconds Left...</button> \n  </div>\n </div>  "

/***/ }),

/***/ "./src/app/cbasic/cbasic.component.ts":
/*!********************************************!*\
  !*** ./src/app/cbasic/cbasic.component.ts ***!
  \********************************************/
/*! exports provided: CbasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CbasicComponent", function() { return CbasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cbasic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cbasic.service */ "./src/app/cbasic.service.ts");




var CbasicComponent = /** @class */ (function () {
    function CbasicComponent(us, route) {
        this.us = us;
        this.route = route;
        this.examdata = [];
        this.correctanswer = [];
        this.marks = 0;
        this.result = [];
        this.f = false;
    }
    CbasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.fun().subscribe(function (x) { _this.examdata = x, console.log(_this.examdata); });
        this.startTimer();
    };
    CbasicComponent.prototype.onoptchange = function (que, ans) {
        var ques = this.examdata[que - 1].questionno;
        var ans = ans.option;
        this.result[que - 1] = { ques: ques, ans: ans };
    };
    CbasicComponent.prototype.submited_data = function () {
        confirm("are you sure ! you want to submit the exam");
        console.log(this.result);
        for (var i = 0; i < this.examdata.length; i++) {
            var qno = this.examdata[i].questionno;
            var crtansr = this.examdata[i].correctanswer;
            this.correctanswer[i] = { qno: qno, crtansr: crtansr };
        }
        console.log(this.correctanswer);
        console.log(this.result);
        for (var i = 0; i < this.correctanswer.length; i++) {
            for (var j = i; j <= i; j++) {
                if (this.correctanswer[i].crtansr === this.result[j].ans) {
                    this.marks++;
                }
            }
        }
        this.f = !this.f;
        //alert("your enterd "+this.marks + " correct answers");
    };
    // submited_data(){
    //   console.log(this.result);
    //   for(let i=0;i<this.examdata.length;i++)
    //     {
    //       var qno= this.examdata[i].questionno;
    //       var crtansr = this.examdata[i].correctanswer;
    //       this.correctanswer[i] ={qno,crtansr}             
    //     }
    //   console.log(this.correctanswer);
    //   for(var i=0; i<this.result.length; i++){
    //     for(var j=0; j<this.correctanswer.length; j++ ){
    //       if(this.result[i]==this.correctanswer[j]){
    //         this.marks++;
    //       }
    //     }
    //   }
    //   for(var a=0; a<this.correctanswer.length; a++ ){
    //     for(var b=0; b<this.result.length; b++){
    //       if(this.correctanswer[a].crtansr == this.result[b].ans){
    //         this.marks.push(this.result[b].ans);
    //       }
    //     }
    //   }
    //   console.log(this.marks)
    CbasicComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 120;
            }
        }, 1000);
    };
    CbasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cbasic',
            template: __webpack_require__(/*! ./cbasic.component.html */ "./src/app/cbasic/cbasic.component.html"),
            styles: [__webpack_require__(/*! ./cbasic.component.css */ "./src/app/cbasic/cbasic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cbasic_service__WEBPACK_IMPORTED_MODULE_3__["CbasicService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CbasicComponent);
    return CbasicComponent;
}());



/***/ }),

/***/ "./src/app/cexpert/cexpert.component.css":
/*!***********************************************!*\
  !*** ./src/app/cexpert/cexpert.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NleHBlcnQvY2V4cGVydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cexpert/cexpert.component.html":
/*!************************************************!*\
  !*** ./src/app/cexpert/cexpert.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cexpert works!\n</p>\n"

/***/ }),

/***/ "./src/app/cexpert/cexpert.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cexpert/cexpert.component.ts ***!
  \**********************************************/
/*! exports provided: CexpertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CexpertComponent", function() { return CexpertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CexpertComponent = /** @class */ (function () {
    function CexpertComponent() {
    }
    CexpertComponent.prototype.ngOnInit = function () {
    };
    CexpertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cexpert',
            template: __webpack_require__(/*! ./cexpert.component.html */ "./src/app/cexpert/cexpert.component.html"),
            styles: [__webpack_require__(/*! ./cexpert.component.css */ "./src/app/cexpert/cexpert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CexpertComponent);
    return CexpertComponent;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a {\n    background-image: url(\"/assets/ch.jpeg\");\n    background-size: cover;\n    \n    height:50rem;\n  }\n \n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxzQkFBc0I7O0lBRXRCLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jaC5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgXG4gICAgaGVpZ2h0OjUwcmVtO1xuICB9XG4gXG4gIl19 */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row\" id=\"a\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6\">\n      <div class=\"jumbotron\" id=\"a\">\n        <form #r=ngForm (ngSubmit)=\"read(r.value)\">\n\n          <div class=\"form-group\">\n            <label>Enter Your Old Password</label>\n            <input type=\"text\" class=\"form-control\" name=\"oldpassword\" ngModel>\n          </div>\n\n          <div class=\"form-group\">\n              <label>Enter Your new Password</label>\n              <input type=\"text\" class=\"form-control\" name=\"newpassword\" ngModel>\n            </div>\n\n            <div class=\"form-group\">\n                <label>Confirm Your Password</label>\n                <input type=\"text\" class=\"form-control\" name=\"npassword\" ngModel>\n              </div>\n\n              <div class=\"text-center\">\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n              </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent() {
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/child/child.component.css":
/*!*******************************************!*\
  !*** ./src/app/child/child.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a{\n    color: hotpink\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hpbGQvY2hpbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGlsZC9jaGlsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F7XG4gICAgY29sb3I6IGhvdHBpbmtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluied\">\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n    <a href=\"#\" class=\"navbar-brand\"><img src=\"assets/nav.png\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n<ul class=\"navbar-nav \">\n  \n  \n  <li class=\"nav-item pl-5\">\n    <a routerLink=\"home\" class=\"nav-link\">Home</a>\n  </li>\n\n  <li class=\"nav-item pl-5\">\n    <a routerLink=\"signup\" class=\"nav-link\">Signup</a>\n  </li>\n  <li class=\"nav-item pl-5\">\n    <a routerLink=\"login\" class=\"nav-link\">Login</a>\n  </li>\n  <li class=\"nav-item pl-5\">\n    <a routerLink=\"contactus\" class=\"nav-link\">ContactUs</a>\n  </li>\n   <li class=\"nav-item pl-5\">\n     <a routerLink=\"aboutus\" class=\"nav-link\">AboutUs</a>\n  </li>\n</ul>\n</div>\n\n\n</nav>\n<router-outlet></router-outlet>\n</div>\n<br/>\n\n\n \n  \n\n\n"

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/child/child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/cintermediate/cintermediate.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cintermediate/cintermediate.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpbnRlcm1lZGlhdGUvY2ludGVybWVkaWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cintermediate/cintermediate.component.html":
/*!************************************************************!*\
  !*** ./src/app/cintermediate/cintermediate.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cintermediate works!\n</p>\n"

/***/ }),

/***/ "./src/app/cintermediate/cintermediate.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cintermediate/cintermediate.component.ts ***!
  \**********************************************************/
/*! exports provided: CintermediateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CintermediateComponent", function() { return CintermediateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CintermediateComponent = /** @class */ (function () {
    function CintermediateComponent() {
    }
    CintermediateComponent.prototype.ngOnInit = function () {
    };
    CintermediateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cintermediate',
            template: __webpack_require__(/*! ./cintermediate.component.html */ "./src/app/cintermediate/cintermediate.component.html"),
            styles: [__webpack_require__(/*! ./cintermediate.component.css */ "./src/app/cintermediate/cintermediate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CintermediateComponent);
    return CintermediateComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cu{\n    background-image: url(\"/assets/contactus.jpeg.jpg\");\n    background-size: cover;\n}\n#cuc{\n    color: rgb(179, 255, 0);\n}\n#cal{\n    color: powderblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbURBQW1EO0lBQ25ELHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3V7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jb250YWN0dXMuanBlZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNjdWN7XG4gICAgY29sb3I6IHJnYigxNzksIDI1NSwgMCk7XG59XG4jY2Fse1xuICAgIGNvbG9yOiBwb3dkZXJibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"cu\">\n    <div class=\"row\">\n      <div class=\"col-sm-7\"></div>\n      <div class=\"col-sm-5\">\n          <u><h1 class=\"text-success\"> Contact Us</h1></u> <br>\n          \n  \n      <div class=\"h3\" id=\"cuc\">\n          Call:<a href=\"\" id=\"cal\"> 8978747700</a> <br><br>\n          Call:<a href=\"\" id=\"cal\"> 8978767700</a> <br><br>\n      MessageUs:<a href=\"\"  id=\"cal\">WhatsApp</a> <br><br>\n    MailUs:<a href=\"\"  id=\"cal\"> hr@secondcampus.in</a>\n    </div> \n      </div>\n    </div>\n  </div> <br>\n      <div class=\"h3 text-center\">\n        Please fill below details, our Admin will get back to you soon...\n      </div> <br>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <form>\n        <input type=\"text\" class=\"form-control\">NAME <br> <br>\n        <input type=\"text\" class=\"form-control\">EMAIL <br> <br>\n        <input type=\"number\" class=\"form-control\">PHONE <br> <br>\n        <input type=\"text\" class=\"form-control\">GOOD TIME TO CONTACT <br><br>\n        <button type=\"submit\" class=\"btn btn-success\">SUBMIT</button>\n      \n      </form>\n  \n      </div>\n\n      <div class=\"col-sm-6\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15220.873504558525!2d78.407475!3d17.497086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe35f975779b96d43!2sSecond+Campus+Angular+JS+Training+%26+MEAN+Stack+Training+Institute+In+Hyderabad!5e0!3m2!1sen!2sin!4v1554809188899!5m2!1sen!2sin\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n      </div>\n    </div>\n  \n \n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/exams/exams.component.css":
/*!*******************************************!*\
  !*** ./src/app/exams/exams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img:hover{\n   -webkit-transform:  scale(1.5);\n           transform:  scale(1.5);\n   opacity: 2;\n}\n\nbody {\n   background-image: url(\"/assets/on.jpg\");\n   background-size: cover;\n   \n   height:50rem;\n }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXMvZXhhbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLDhCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsVUFBVTtBQUNiOztBQUVBO0dBQ0csdUNBQXVDO0dBQ3ZDLHNCQUFzQjs7R0FFdEIsWUFBWTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvZXhhbXMvZXhhbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZzpob3ZlcntcbiAgIHRyYW5zZm9ybTogIHNjYWxlKDEuNSk7XG4gICBvcGFjaXR5OiAyO1xufVxuXG5ib2R5IHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvb24uanBnXCIpO1xuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgIFxuICAgaGVpZ2h0OjUwcmVtO1xuIH1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/exams/exams.component.html":
/*!********************************************!*\
  !*** ./src/app/exams/exams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--exam Courses-->\n<br><br>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-11\">\n           <div class=\"card-deck\">\n              <div class=\"card border-0\">\n                  <div class=\"card-body\">                    \n                         <a href=\"#\" data-toggle=\"collapse\" data-target=\"#c\"><img src=\"assets/java.png\" alt=\"\"></a>\n                  </div>\n                </div>\n      \n                <div class=\"card border-0\">\n                  <div class=\"card-body\"> \n                      <a data-toggle=\"collapse\" data-target=\"#java\"><img src=\"assets/c.jpeg\" alt=\"\"> </a>\n                                               \n                  </div>\n                </div>\n      \n                <div class=\"card border-0\">\n                  <div class=\"card-body\">  \n                      <a data-toggle=\"collapse\" data-target=\"#angular\"> <img src=\"assets/angular.png\" alt=\"\"></a>                                          \n                  </div>\n                </div>\n  \n               \n            </div>\n           </div>\n    \n    </div>\n  \n\n\n<!--levels Model-->\n\n<div id=\"parent\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-10 mt-1\">\n    \n               <div class=\"card-deck\">\n                  <div class=\"card border-0\">\n                      <div class=\"card-body\">                    \n                          <div class=\"btn-group-vertical collapse ml-5\" id=\"c\" data-parent=\"#parent\">\n                              <button type=\"button\" class=\"btn btn-primary\"  (click)=\"read()\">Begginer Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read2()\">Intermediate Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read3()\">Expert Level</button>\n                            </div>\n                      </div>\n                    </div>\n          \n                    <div class=\"card border-0\">\n                      <div class=\"card-body\"> \n                          <div class=\"btn-group-vertical collapse ml-5\" id=\"java\" data-parent=\"#parent\">\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read4()\">Begginer Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read5()\">Intermediate Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read6()\">Expert Level</button>\n                            </div>\n                                                   \n                      </div>\n                    </div>\n          \n                    <div class=\"card border-0\">\n                      <div class=\"card-body\">  \n                          <div class=\"btn-group-vertical collapse ml-5\" id=\"angular\" data-parent=\"#parent\">\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read7()\">Begginer Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read8()\">Intermediate Level</button>\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"read()\">Expert Level</button>\n                          </div>\n                         \n                      </div>\n                    </div>\n                </div>\n               </div>\n            <div clas=\"col-sm-1\"></div>  \n        </div>\n      </div>\n      \n    </div>\n              \n    </div>\n    <div class=\"container\">\n      \n      \n    </div>\n     \n    \n    \n  \n  \n    \n  \n"

/***/ }),

/***/ "./src/app/exams/exams.component.ts":
/*!******************************************!*\
  !*** ./src/app/exams/exams.component.ts ***!
  \******************************************/
/*! exports provided: ExamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsComponent", function() { return ExamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ExamsComponent = /** @class */ (function () {
    function ExamsComponent(route) {
        this.route = route;
    }
    ExamsComponent.prototype.read = function () {
        this.route.navigate(['basic']);
    };
    ExamsComponent.prototype.read2 = function () {
        this.route.navigate(['javaintermediate']);
    };
    ExamsComponent.prototype.read3 = function () {
        this.route.navigate(['javaexpert']);
    };
    ExamsComponent.prototype.read4 = function () {
        this.route.navigate(['cbasic']);
    };
    ExamsComponent.prototype.read5 = function () {
        this.route.navigate(['cintermediate']);
    };
    ExamsComponent.prototype.read6 = function () {
        this.route.navigate(['cexpert']);
    };
    ExamsComponent.prototype.read7 = function () {
        this.route.navigate(['angularbasic']);
    };
    ExamsComponent.prototype.read8 = function () {
        this.route.navigate(['angularintermediate']);
    };
    ExamsComponent.prototype.read9 = function () {
        this.route.navigate(['angularexpert']);
    };
    ExamsComponent.prototype.ngOnInit = function () {
    };
    ExamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams',
            template: __webpack_require__(/*! ./exams.component.html */ "./src/app/exams/exams.component.html"),
            styles: [__webpack_require__(/*! ./exams.component.css */ "./src/app/exams/exams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExamsComponent);
    return ExamsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n\n\n<div class=\"carousel slide\" data-ride=\"carousel\" id=\"a\">\n\n  \n\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#a\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#a\" data-slide-to=\"1\"></li>\n    <li data-target=\"#a\" data-slide-to=\"2\"></li>\n  </ul>\n\n  \n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"assets/1.png\" width=\"100%\" height=\"100%\">\n    </div>\n\n    <div class=\"carousel-item\">\n        <img src=\"assets/3.png\" width=\"100%\" height=\"100%\" >\n      </div>\n\n      <div class=\"carousel-item\">\n          <img src=\"assets/ca.jpg\" width=\"120%\" height=\"100%\" >\n        </div>\n\n      <a class=\"carousel-control-prev\" href=\"#a\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\"></span>\n        </a>\n      \n        <a class=\"carousel-control-next\" href=\"#a\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\"></span>\n          </a>\n\n  </div>\n</div>\n\n  \n    \n  \n \n\n\n\n    <div class=\"row\">\n     \n      <div class=\"col-sm-6 jumbotron\">\n        <h3 class=\"text-success\">Advance question types</h3>\n        <h4>with a strong performance</h4><br/>\n        <p>The question can present to candidates in multiple </p>\n        <p>ways such as Scenario-Based, Drag and Match, </p>\n        <p>Video and Audio items. All exams graded with the </p>\n        <p>detailed and accurate performance report with </p>\n        <p>exact details such as time taken for each item.</p>\n      </div>\n\n      <div class=\"col-sm-6 jumbotron\">\n        <img src=\"assets/q.jpg\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n          <img src=\"assets/h1.jpg\">\n      </div>\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-4\">\n        <h1 class=\"text-success\">\n            Exam monitor\n        </h1>\n        <h3>Live coverage of your exams</h3>\n        <p>Live coverage of the examinations showing details </p>\n        <p>such as candidates taking, completed and </p>\n        <p>dropped tests with their number of attempts, </p>\n        <p>device name, browser, operating system, IP </p>\n        <p>address and location details.</p>\n      </div>\n      <div class=\"col-sm-3\">\n          <img src=\"assets/h.png\" width=\"100%\" height=\"100%\">\n      </div>\n    </div>\n\n  \n    \n\n\n\n\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/javaexpert/javaexpert.component.css":
/*!*****************************************************!*\
  !*** ./src/app/javaexpert/javaexpert.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phdmFleHBlcnQvamF2YWV4cGVydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/javaexpert/javaexpert.component.html":
/*!******************************************************!*\
  !*** ./src/app/javaexpert/javaexpert.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  javaexpert works!\n</p>\n"

/***/ }),

/***/ "./src/app/javaexpert/javaexpert.component.ts":
/*!****************************************************!*\
  !*** ./src/app/javaexpert/javaexpert.component.ts ***!
  \****************************************************/
/*! exports provided: JavaexpertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaexpertComponent", function() { return JavaexpertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JavaexpertComponent = /** @class */ (function () {
    function JavaexpertComponent() {
    }
    JavaexpertComponent.prototype.ngOnInit = function () {
    };
    JavaexpertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-javaexpert',
            template: __webpack_require__(/*! ./javaexpert.component.html */ "./src/app/javaexpert/javaexpert.component.html"),
            styles: [__webpack_require__(/*! ./javaexpert.component.css */ "./src/app/javaexpert/javaexpert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JavaexpertComponent);
    return JavaexpertComponent;
}());



/***/ }),

/***/ "./src/app/javaintermediate/javaintermediate.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/javaintermediate/javaintermediate.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2phdmFpbnRlcm1lZGlhdGUvamF2YWludGVybWVkaWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/javaintermediate/javaintermediate.component.html":
/*!******************************************************************!*\
  !*** ./src/app/javaintermediate/javaintermediate.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  javaintermediate works!\n</p>\n"

/***/ }),

/***/ "./src/app/javaintermediate/javaintermediate.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/javaintermediate/javaintermediate.component.ts ***!
  \****************************************************************/
/*! exports provided: JavaintermediateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JavaintermediateComponent", function() { return JavaintermediateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JavaintermediateComponent = /** @class */ (function () {
    function JavaintermediateComponent() {
    }
    JavaintermediateComponent.prototype.ngOnInit = function () {
    };
    JavaintermediateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-javaintermediate',
            template: __webpack_require__(/*! ./javaintermediate.component.html */ "./src/app/javaintermediate/javaintermediate.component.html"),
            styles: [__webpack_require__(/*! ./javaintermediate.component.css */ "./src/app/javaintermediate/javaintermediate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JavaintermediateComponent);
    return JavaintermediateComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.remove = function () {
        return localStorage.removeItem('token');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#b{\n    background-image: url('/assets/login.jpeg');\n    background-size: cover;\n    height: 50rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJDQUEyQztJQUMzQyxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbG9naW4uanBlZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA1MHJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n\n    <div class=\"row\" id=\"b\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n        <div class=\"jumbotron mt-5\">\n\n    <div class=\"form-box\">\n    <div class=\"form-top\">\n        <div class=\"form-top-left\">\n            <h3>Sign In</h3>\n            <p>Sign in to get instant access:</p>\n        </div>\n\n        <div class=\"form-top-right\">\n            <i class=\"fa fa-pencil\"></i>\n        </div>\n    </div>\n\n        <div class=\"form-bottom\">\n            <form #re=\"ngForm\" (ngSubmit)=\"submitData(re.value)\" >\n               \n                <div class=\"form-group\">\n                        <input class=\"form-control\"  name=\"username\" placeholder=\"Enter your User name\" type=\"text\" ngModel #ref=ngModel required>\n                        <label *ngIf=\"ref.touched&&ref.invalid\" class=\"text-danger\">*This field is mandatory</label>\n                </div>\n\n                <div class=\"form-group\">\n                        <input class=\"form-control\"  name=\"password\" placeholder=\"Enter your Password\" type=\"password\" ngModel  #ref1=ngModel required>\n                        <label *ngIf=\"ref1.touched&&ref1.invalid\" class=\"text-danger\">*This field is mandatory </label>\n                </div>\n\n                <div class=\"text-center\">\n                  <button type=\"submit\" class=\"btn btn-primary\">Sign In</button> \n                </div>\n                </form>\n\n                </div>\n                </div>\n                </div>\n                </div>\n                \n\n                \n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    //injecting dataservice object from root injector
    function LoginComponent(ds, route) {
        this.ds = ds;
        this.route = route;
        this.data = [];
    }
    //reading observable by subscribing to it
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitData = function (v) {
        var _this = this;
        this.ds.getData(v).subscribe(function (x) {
            if (x['token']) {
                localStorage.setItem('token', x['token']);
                _this.route.navigate(['user']);
            }
            else if (x['msg'] == 'invalid user name') {
                alert(x['msg']);
            }
            else if (x['msg'] == 'invalid password') {
                alert(x['msg']);
            }
            else if (x['msg'] == 'Admin logged successfully') {
                _this.route.navigate(['admin']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a{\n    background-color: aquamarine;\n}\n\nbody {\n    background-image: url(\"/assets/tv.jpg\");\n    background-size: cover;\n    \n    height:50rem;\n  }\n\n#ac{\n      margin-top: 5000;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsc0JBQXNCOztJQUV0QixZQUFZO0VBQ2Q7O0FBQ0E7TUFDSSxnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdHYuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgXG4gICAgaGVpZ2h0OjUwcmVtO1xuICB9XG4gICNhY3tcbiAgICAgIG1hcmdpbi10b3A6IDUwMDA7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n    <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6 mt-5\" id=\"ac\">\n            <u><h1 class=\"text-center text-success\">Profile</h1></u>\n           \n     <form #ref=\"ngForm\" >\n    <table class=\"table table-borderless\"  *ngFor=\"let user of c; let i= index;\">   \n          <tr>\n              <td>Name</td>\n              <td>\n                  <input type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" [disabled]=\"!user.isEditable\" ngModel>\n              </td>\n          </tr>\n\n          <tr>\n            <td>Email</td>\n            <td>\n                <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" [disabled]=\"!user.isEditable\" ngModel>\n            </td>\n        </tr>\n\n\n          <tr>\n              <td>Mobile Number</td>\n              <td>\n                  <input type=\"number\" pattern=\"[6-9]{1}[0-9]{9}\" [(ngModel)]=\"user.mobile\" name=\"mobile\" [disabled]=\"!user.isEditable\" ngModel>\n              </td>\n          </tr>\n\n          <tr>\n            <td>Date</td>\n            <td>\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"user.dob\" [disabled]=\"!user.isEditable\" ngModel>\n            </td>\n        </tr>     \n\n          \n\n          \n          <tr>    \n              <td>Address</td>\n              <td>\n                  <input type=\"text\" name=\"adress\" [(ngModel)]=\"user.adress\" [disabled]=\"!user.isEditable\" ngModel>\n              </td>\n          </tr>    \n\n          <tr>\n              <td colspan=\"2\">\n                  <div>\n                      <button  class=\"btn btn-primary ml-5 pl-5 pr-5\" (click)=\"user.isEditable=!user.isEditable\" *ngIf=\"!user.isEditable\">Edit</button>\n                      <button class=\"btn btn-success ml-5 pl-5 pr-5\" type=\"submit\" *ngIf=\"user.isEditable\" (click)=\"user.isEditable=!user.isEditable\" (click)=\"edit(ref.value)\">Save</button>                    \n                      \n                  </div>\n              </td>\n          </tr>\n \n    </table>\n</form>\n\n            \n\n        </div>\n\n    </div>\n\n</body>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(ac) {
        this.ac = ac;
        this.c = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ac.read().subscribe(function (x) {
            console.log(x['msg']);
            _this.c = x['msg'];
        });
    };
    ProfileComponent.prototype.edit = function (v) {
        console.log(v);
        this.ac.update(v).subscribe(function (x) { alert(x['msg']); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterService = /** @class */ (function () {
    function RegisterService(ac, route) {
        this.ac = ac;
        this.route = route;
        this.x = [];
    }
    RegisterService.prototype.data = function (v) {
        this.x = v;
        console.log('service');
        console.log(v);
        console.log(this.route.url);
        return this.ac.post(this.route.url, v);
    };
    //give data to profile component
    RegisterService.prototype.reads = function () {
        return this.x;
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a{\n    background-image: url('/assets/sign.jpg');\n    background-size: cover;\n    height:50rem;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NpZ24uanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6NTByZW07XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br> <br>\n\n    \n    <div class=\"row\" id=\"a\"  >\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n            <div class=\"jumbotron mt-5\">\n\n                <div class=\"form-box\">\n                    <div class=\"form-top\">\n                        <div class=\"form-top-left\">\n                            <h3>Sign up now</h3>\n                            <p>Fill in the form below to get instant access:</p>\n                        </div>\n\n                        <div class=\"form-top-right\">\n                            <i class=\"fa fa-pencil\"></i>\n                        </div>\n                    </div>\n\n                    <div class=\"form-bottom\">\n                        <form #x=\"ngForm\" (ngSubmit)=\"submitData(x.value)\">\n\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"username\" placeholder=\"Enter your name\" type=\"text\" [(ngModel)]=\"name\"\n                                    #ref=ngModel required>\n                                <label *ngIf=\"ref.touched && ref.invalid\" class=\"text-danger\">*This field is\n                                    mandatory</label>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"email\" placeholder=\"Enter your Email\" #ref1=ngModel pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\"\n                                [(ngModel)]=\"email\" required>\n                                <label *ngIf=\"ref1.touched && ref1.invalid\" class=\"text-danger\">*Email required\n                                    </label>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" data-val=\"true\" name=\"password\"\n                                    placeholder=\"Enter your Password\" type=\"password\" #ref2=ngModel [(ngModel)]=\"password\" required>\n                                <label *ngIf=\"ref2.touched && ref2.invalid\" class=\"text-danger\">*This field is mandatory\n                                    </label>\n                            </div>\n\n                           \n\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"mobile\" placeholder=\"Enter your Mobile\" type=\"text\" #ref3=ngModel  maxlength=\"10\" pattern=\"[1-9]{1}[0-9]{9}\"\n                                [(ngModel)]=\"mobile\" required>\n                                <label *ngIf=\"ref3.touched && ref3.invalid\" class=\"text-danger\">*please enter mobile number</label>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <input class=\"form-control\" name=\"dob\" placeholder=\"Enter your Date of Birth\" type=\"date\" #date=ngModel  \n                                [(ngModel)]=\"dob\" required>\n                                <label *ngIf=\"ref3.touched && ref3.invalid\" class=\"text-danger\">*please enter mobile number</label>\n                            </div>\n\n\n\n                            <div class=\"form-group\">\n                                <textarea class=\"form-control\" placeholder=\"Enter your Adress\" name=\"adress\"\n                                [(ngModel)]=\"adress\"></textarea>\n                            </div>\n\n                            <div class=\"text-center\">\n                                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"ref.invalid\">Sign me up!</button>\n                            </div>\n\n\n\n\n\n                        </form>\n                    </div>\n\n\n\n                </div>\n\n\n            </div>\n\n        </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(ds) {
        this.ds = ds;
    }
    SignupComponent.prototype.submitData = function (v) {
        console.log(v);
        this.ds.data(v).subscribe(function (x) { return alert(x['msg']); });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/uploads/uploads.component.css":
/*!***********************************************!*\
  !*** ./src/app/uploads/uploads.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvdXBsb2Fkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/uploads/uploads.component.html":
/*!************************************************!*\
  !*** ./src/app/uploads/uploads.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  uploads works!\n</p>\n"

/***/ }),

/***/ "./src/app/uploads/uploads.component.ts":
/*!**********************************************!*\
  !*** ./src/app/uploads/uploads.component.ts ***!
  \**********************************************/
/*! exports provided: UploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsComponent", function() { return UploadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UploadsComponent = /** @class */ (function () {
    function UploadsComponent() {
    }
    UploadsComponent.prototype.ngOnInit = function () {
    };
    UploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploads',
            template: __webpack_require__(/*! ./uploads.component.html */ "./src/app/uploads/uploads.component.html"),
            styles: [__webpack_require__(/*! ./uploads.component.css */ "./src/app/uploads/uploads.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadsComponent);
    return UploadsComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserService = /** @class */ (function () {
    //inject http clent object
    function UserService(hc, route) {
        this.hc = hc;
        this.route = route;
    }
    //make http get request to user.jsonfile
    UserService.prototype.getData = function (s) {
        return this.hc.post(this.route.url, s);
        console.log(this.route.url);
    };
    //read data of logined user
    UserService.prototype.read = function () {
        return this.hc.get(this.route.url);
        console.log(this.route.url);
    };
    UserService.prototype.update = function (s) {
        return this.hc.put(this.route.url, s);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a{\n    background-color:midnightblue;\n    background-size: cover;\n}\n\n#b{\n    background-color:cornflowerblue;\n}\n\n#c{\n    background-image:url(\"/assets/us.jpeg\");\n    background-size: cover;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2F7XG4gICAgYmFja2dyb3VuZC1jb2xvcjptaWRuaWdodGJsdWU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpjb3JuZmxvd2VyYmx1ZTtcbn1cbiNje1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy91cy5qcGVnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluied\">\n  \n\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <h1 class=\"text-success\">Welcome To User</h1>\n      </div>\n    </div>\n      \n\n     <div class=\"row\">\n    <div class=\"col-sm-12\">\n\n<nav class=\"nav navbar-expand-sm fixed-top nav-tabs\" id=\"b\">\n    <a href=# class=\"nav-brand pl-5\"><img src=\"assets/n.png\" style=\"height:10rem\" style=\"width:1.5rem\"></a>\n  <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item pl-5\"><a routerLink =\"userdashbord\" class=\"nav-link text-dark\">User Home</a></li>\n    <li class=\"nav-item pl-5\"><a routerLink =\"profile\" class=\"nav-link text-dark\">Profile</a></li>\n    <li class=\"nav-item pl-5\"><a routerLink=\"exams\" class=\"nav-link text-dark\">Exams</a></li>\n    <li class=\"nav-item pl-5\"><a routerLink=\"changepassword\" class=\"nav-link text-dark\">changepassword</a></li>\n    <li class=\"nav-item pl-5\"><button type=\"button\" class=\"btn btn-danger\"  (click)=\"logout()\">Logout</button></li>\n  </ul>\n  \n</nav>\n\n</div>\n</div>\n\n\n     \n      \n    \n\n \n  </div>\n  <router-outlet></router-outlet>\n\n   \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserComponent = /** @class */ (function () {
    function UserComponent(ac, route) {
        this.ac = ac;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.logout = function () {
        this.ac.remove();
        this.route.navigate(['child/login']);
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userdashbord/userdashbord.component.css":
/*!*********************************************************!*\
  !*** ./src/app/userdashbord/userdashbord.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset{\n    padding:5em;\n    border:2px solid skyblue;\n}\n\nlegend{\n    text-align: center;\n    background-color: skyblue;\n    padding:2px;\n    \n}\n\n#a\n{\n    height: 30rem;\n}\n\nul\n{\n    border: 1px solid black;\n    background-color: lightblue;\n    padding-top: 50px;\n    padding-right: 30px;\n    padding-bottom: 50px;\n    padding-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRhc2hib3JkL3VzZXJkYXNoYm9yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmRhc2hib3JkL3VzZXJkYXNoYm9yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmllbGRzZXR7XG4gICAgcGFkZGluZzo1ZW07XG4gICAgYm9yZGVyOjJweCBzb2xpZCBza3libHVlO1xufVxuXG5sZWdlbmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gICAgcGFkZGluZzoycHg7XG4gICAgXG59XG5cbiNhXG57XG4gICAgaGVpZ2h0OiAzMHJlbTtcbn1cblxudWxcbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/userdashbord/userdashbord.component.html":
/*!**********************************************************!*\
  !*** ./src/app/userdashbord/userdashbord.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <fieldset>\n      <legend>Home</legend>\n      \n        <div class=\"card\">\n          <img class=\"card-img-top\" src=\"assets/c1.jpeg\" alt=\"Card image\" style=\"width:100%\">\n          <div class=\"card-body\">\n            <h4 class=\"card-tittle text-center text-success\">c Language</h4>\n            <p class=\"card-text\">C is a general-purpose, high-level language that was originally developed by Dennis M. Ritchie to develop the UNIX operating system at Bell Labs. C was originally first implemented on the DEC PDP-11 computer in 1972.</p>\n            <h3 style=\"color:Tomato;\">we provide three level of exams:</h3>\n            <ul>\n              <li>Bigginer level</li>\n              <li>Intermediate level</li>\n              <li>Expert level</li>\n            </ul>\n            <h3 style=\"color:DodgerBlue;\">If you want to write the exam,you can go to the exam page and click on the image whatever exam you want to write</h3>\n\n          </div>\n        </div><br>\n\n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"assets/java1.jpeg\" alt=\"Card image\" style=\"width:100%\">\n            <div class=\"card-body\">\n              <h4 class=\"card-tittle text-center text-success\">Java</h4>\n              <p class=\"card-text\">Java is a programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS. Java derives much of its syntax from the C and C++ programming languages.</p>\n              <h3 style=\"color:Tomato;\">we provide three level of exams:</h3>\n              <ul>\n                <li>Bigginer level</li>\n                <li>Intermediate level</li>\n                <li>Expert level</li>\n              </ul>\n              <h3 style=\"color:DodgerBlue;\">If you want to write the exam,you can go to the exam page and click on the image whatever exam you want to write</h3>\n  \n            </div>\n          </div><br>\n\n          <div class=\"card\">\n              <img class=\"card-img-top\" src=\"assets/angular1.jpeg\" alt=\"Card image\" style=\"width:100%\">\n              <div class=\"card-body\">\n                <h4 class=\"card-tittle text-center text-success\">Angular</h4>\n                <p class=\"card-text\">AngularJS - Overview. AngularJS is an open-source web application framework. ... AngularJS is a structural framework for dynamic web applications. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application components clearly and succinctly.</p>\n                <h3 style=\"color:Tomato;\">we provide three level of exams:</h3>\n                <ul>\n                  <li>Bigginer level</li>\n                  <li>Intermediate level</li>\n                  <li>Expert level</li>\n                </ul>\n                <h3 style=\"color:DodgerBlue;\">If you want to write the exam,you can go to the exam page and click on the image whatever exam you want to write</h3>\n    \n              </div>\n            </div>\n  \n\n\n        \n  \n\n\n\n       \n\n\n\n      \n      \n    </fieldset>\n    \n  \n  \n</div>"

/***/ }),

/***/ "./src/app/userdashbord/userdashbord.component.ts":
/*!********************************************************!*\
  !*** ./src/app/userdashbord/userdashbord.component.ts ***!
  \********************************************************/
/*! exports provided: UserdashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashbordComponent", function() { return UserdashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserdashbordComponent = /** @class */ (function () {
    function UserdashbordComponent() {
    }
    UserdashbordComponent.prototype.ngOnInit = function () {
    };
    UserdashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdashbord',
            template: __webpack_require__(/*! ./userdashbord.component.html */ "./src/app/userdashbord/userdashbord.component.html"),
            styles: [__webpack_require__(/*! ./userdashbord.component.css */ "./src/app/userdashbord/userdashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserdashbordComponent);
    return UserdashbordComponent;
}());



/***/ }),

/***/ "./src/app/userinformation/userinformation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userinformation/userinformation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJpbmZvcm1hdGlvbi91c2VyaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/userinformation/userinformation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userinformation/userinformation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n  <table class=\"table table-bordered\">\n    <thead class=\"thead-dark\">\n      \n        \n        <th>Name</th>\n        <th>Mobile</th>\n        <th>Email</th>\n        <th>Adress</th>\n      \n    </thead>\n    <tr *ngFor='let i of a'>\n      <td>{{i.username}}</td>\n      <td>{{i.mobile}}</td>\n      <td>{{i.email}}</td>\n      <td>{{i.adress}}</td>\n    </tr>\n\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/userinformation/userinformation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userinformation/userinformation.component.ts ***!
  \**************************************************************/
/*! exports provided: UserinformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinformationComponent", function() { return UserinformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin.service.ts");



var UserinformationComponent = /** @class */ (function () {
    function UserinformationComponent(dc) {
        this.dc = dc;
        this.a = [];
    }
    UserinformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dc.getData().subscribe(function (x) {
            console.log(x['msg']);
            _this.a = x['msg'];
        });
    };
    UserinformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userinformation',
            template: __webpack_require__(/*! ./userinformation.component.html */ "./src/app/userinformation/userinformation.component.html"),
            styles: [__webpack_require__(/*! ./userinformation.component.css */ "./src/app/userinformation/userinformation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], UserinformationComponent);
    return UserinformationComponent;
}());



/***/ }),

/***/ "./src/app/userperformance/userperformance.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userperformance/userperformance.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a{\n    background-image: url(\"/assets/per.jpeg\");\n    background-size: cover;\n}\n#b{\n    -webkit-text-decoration-color:deepskyblue;\n            text-decoration-color:deepskyblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBlcmZvcm1hbmNlL3VzZXJwZXJmb3JtYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0lBQ3pDLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3VzZXJwZXJmb3JtYW5jZS91c2VycGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhe1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvcGVyLmpwZWdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiNie1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjpkZWVwc2t5Ymx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userperformance/userperformance.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userperformance/userperformance.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\" >\n  <u><h1 id=\"b\">Merit Students List</h1></u>\n  <table class=\"table table-bordered\">\n      <thead class=\"thead-info\">\n        <tr class=\"text-success\">\n          <th>Sno</th>\n          <th>Name</th>\n          <th>Exam</th>\n          <th>Marks</th>\n          <th>Rank</th>\n        </tr>\n      </thead>\n    </table>\n    <br><br>\n\n    <u><h1 class=\"\">Average Students List</h1></u>\n  <table class=\"table table-bordered\">\n      <thead class=\"thead-info\">\n        <tr class=\"text-success\">\n          <th>Sno</th>\n          <th>Name</th>\n          <th>Exam</th>\n          <th>Marks</th>\n          <th>Rank</th>\n        </tr>\n      </thead>\n    </table>\n    <br><br>\n\n    <u><h1 id=\"b\">Failure Students List</h1></u>\n  <table class=\"table table-bordered\">\n      <thead class=\"thead-info\">\n        <tr class=\"text-success\">\n          <th>Sno</th>\n          <th>Name</th>\n          <th>Exam</th>\n          <th>Marks</th>\n          <th>Rank</th>\n        </tr>\n      </thead>\n    </table>\n    <br><br>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/userperformance/userperformance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userperformance/userperformance.component.ts ***!
  \**************************************************************/
/*! exports provided: UserperformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserperformanceComponent", function() { return UserperformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserperformanceComponent = /** @class */ (function () {
    function UserperformanceComponent() {
    }
    UserperformanceComponent.prototype.ngOnInit = function () {
    };
    UserperformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userperformance',
            template: __webpack_require__(/*! ./userperformance.component.html */ "./src/app/userperformance/userperformance.component.html"),
            styles: [__webpack_require__(/*! ./userperformance.component.css */ "./src/app/userperformance/userperformance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserperformanceComponent);
    return UserperformanceComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/scls-host5/Desktop/ANGULAR/project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Операторы\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"home-card\" *ngFor=\"let o of operators$ | async\" (click)=\"selectOperator(o)\">\n      <img src=\"/assets/logo/{{o.logo}}\" [alt]=\"o.name\" />\n      <ion-card-header>\n        <ion-card-title>{{o.name}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/pay-phone-modal/pay-phone-modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/pay-phone-modal/pay-phone-modal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"processForm($event)\" [formGroup]=\"form\">\n<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Внести деньги на телефон. Выбран оператор {{this.operator?.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">Номер телефона <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input\n                required\n                type=\"text\"\n                formControlName=\"phone\"\n                prefix=\"+7 \"\n                mask=\"(000) 000 00 00\"\n                placeholder=\"(000) 000 00 00\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Сумма, руб. <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input\n                required\n                type=\"number\"\n                formControlName=\"sum\"\n                [min]=\"1\"\n                [max]=\"1000\"\n                step=\"1\"\n                placeholder=\"Введите число от 1 до 1000\"\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n\n</ion-content>\n<ion-footer>\n  <div class=\"ion-padding\">\n    <ion-button [disabled]=\"form.invalid\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\">Create account</ion-button>\n  </div>\n</ion-footer>\n</form>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _pay_phone_modal_pay_phone_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pay-phone-modal/pay-phone-modal.component */ "./src/app/home/pay-phone-modal/pay-phone-modal.component.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm5/ngx-mask-ionic.js");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_8__["NgxMaskIonicModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _pay_phone_modal_pay_phone_modal_component__WEBPACK_IMPORTED_MODULE_7__["PayPhoneModalComponent"]],
            entryComponents: [_pay_phone_modal_pay_phone_modal_component__WEBPACK_IMPORTED_MODULE_7__["PayPhoneModalComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  padding: 10px;\n  cursor: pointer;\n}\nion-card:hover {\n  opacity: 0.7;\n}\n.home-card img {\n  max-height: 10vh;\n  max-width: 20vw;\n  margin: auto;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHVzZXJcXFdlYnN0b3JtUHJvamVjdHNcXHRlc3R3b3Jrc2hha3Vyb2NvbS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbn1cblxuLmhvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMHZoO1xuICBtYXgtd2lkdGg6IDIwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsImlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNhcmQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5ob21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMTB2aDtcbiAgbWF4LXdpZHRoOiAyMHZ3O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pay_phone_modal_pay_phone_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay-phone-modal/pay-phone-modal.component */ "./src/app/home/pay-phone-modal/pay-phone-modal.component.ts");
/* harmony import */ var _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/pay-service.service */ "./src/app/services/pay-service.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(modalController, payService) {
        this.modalController = modalController;
        this.payService = payService;
        this.operators$ = this.payService.getOperators();
    }
    HomePage.prototype.selectOperator = function (o) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _pay_phone_modal_pay_phone_modal_component__WEBPACK_IMPORTED_MODULE_3__["PayPhoneModalComponent"],
                            componentProps: {
                                selectedOperator: o
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__["PayService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__["PayService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/pay-phone-modal/pay-phone-modal.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/pay-phone-modal/pay-phone-modal.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGF5LXBob25lLW1vZGFsL3BheS1waG9uZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/pay-phone-modal/pay-phone-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/pay-phone-modal/pay-phone-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: PayPhoneModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPhoneModalComponent", function() { return PayPhoneModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pay-service.service */ "./src/app/services/pay-service.service.ts");





var PayPhoneModalComponent = /** @class */ (function () {
    function PayPhoneModalComponent(navParams, payService, modalController, toastController) {
        this.payService = payService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            "phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(18)]),
            "sum": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000)]),
        });
        this.operator = navParams.get('selectedOperator');
    }
    PayPhoneModalComponent.prototype.ngOnInit = function () {
    };
    PayPhoneModalComponent.prototype.processForm = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('this.form', this.form);
        this.payService.createPay(this.form.value).subscribe(function (res) {
            if (res.status === 201) {
                _this.modalController.dismiss();
            }
            _this.presentToast(res.message);
        });
    };
    PayPhoneModalComponent.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PayPhoneModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__["PayService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    PayPhoneModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-phone-modal',
            template: __webpack_require__(/*! raw-loader!./pay-phone-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/pay-phone-modal/pay-phone-modal.component.html"),
            styles: [__webpack_require__(/*! ./pay-phone-modal.component.scss */ "./src/app/home/pay-phone-modal/pay-phone-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _services_pay_service_service__WEBPACK_IMPORTED_MODULE_4__["PayService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], PayPhoneModalComponent);
    return PayPhoneModalComponent;
}());



/***/ }),

/***/ "./src/app/services/pay-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/pay-service.service.ts ***!
  \*************************************************/
/*! exports provided: PayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayService", function() { return PayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PayService = /** @class */ (function () {
    function PayService(http) {
        this.http = http;
        this.base_url = "http://mybackend.com/api/";
        this.tasks_endpoint = "operators";
    }
    PayService.prototype.getOperators = function () {
        return this.http
            .get(this.base_url + this.tasks_endpoint);
    };
    PayService.prototype.createPay = function (pay) {
        var responses = [
            {
                status: 201,
                message: 'success'
            },
            {
                status: 500,
                message: 'error'
            }
        ];
        var i = Math.floor(0 + Math.random() * (2));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(responses[i]);
    };
    PayService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PayService);
    return PayService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map
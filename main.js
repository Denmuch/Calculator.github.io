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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-lightgray {\n    border: 1px solid #ced4da;\n}\n\n.btn {\n    width: 100%;\n    height: 100%;\n}\n\n.active-btn {\n    border: 1px solid #777;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\" style=\"width: 400px;\">\n\n\n  <div class=\"row justify-content-center\">\n      <input [(ngModel)]=\"row\" class=\"form-control rounded-0 border-lightgray\" type=\"text\" [placeholder]=\"placeholder\" readonly>\n  </div>\n  \n\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col p-0\">\n      <button (click)=\"clear($event)\" type=\"button\" class=\"btn btn-secondary btn-lg rounded-0 border-lightgray\">AC</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addMinus()\" type=\"button\" class=\"btn btn-secondary btn-lg rounded-0 border-lightgray\">+/-</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"percent()\" type=\"button\" class=\"btn btn-secondary btn-lg rounded-0 border-lightgray\">%</button>\n    </div>\n    <div class=\"col p-0\">\n      <button #divide (click)=\"action(divide.name)\" name=\"divide\" [class.active-btn]=\"actionBtn === divide.name\" type=\"button\" class=\"btn btn-warning btn-lg rounded-0 border-lightgray\">/</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(7)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">7</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(8)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">8</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(9)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">9</button>\n    </div>\n    <div class=\"col p-0\">\n      <button #multiply (click)=\"action(multiply.name)\" name=\"multiply\" [class.active-btn]=\"actionBtn === multiply.name\"  type=\"button\" class=\"btn btn-warning btn-lg rounded-0 border-lightgray\">x</button>\n    </div>\n  </div>\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(4)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">4</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(5)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">5</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(6)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">6</button>\n    </div>\n    <div class=\"col p-0\">\n      <button #deduct (click)=\"action(deduct.name)\" name=\"deduct\" [class.active-btn]=\"actionBtn === deduct.name\" type=\"button\" class=\"btn btn-warning btn-lg rounded-0 border-lightgray\">-</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"row justify-content-center\">\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(1)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">1</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(2)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">2</button>\n    </div>\n    <div class=\"col p-0\">\n      <button (click)=\"addNumber(3)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">3</button>\n    </div>\n    <div class=\"col p-0\">\n      <button #sum (click)=\"action(sum.name)\" name=\"sum\" [class.active-btn]=\"actionBtn === sum.name\" type=\"button\" class=\"btn btn-warning btn-lg rounded-0 border-lightgray\">+</button>\n    </div>\n  </div>\n\n\n\n  <div class=\"row justify-content-center\">\n      <div class=\"col-6 p-0\">\n        <button (click)=\"addNumber(0)\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">0</button>\n      </div>\n      <div class=\"col p-0\">\n        <button (click)=\"addNumber('.')\" type=\"button\" class=\"btn btn-light btn-lg rounded-0 border-lightgray\">.</button>\n      </div>\n      <div class=\"col p-0\">\n        <button (click)=\"equal()\" type=\"button\" class=\"btn btn-warning btn-lg rounded-0 border-lightgray\">=</button>\n      </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.row = '';
        this.actionBtn = '';
        this.firstValue = 0;
        this.secondValue = 0;
        this.clicked = false;
        this.placeholder = '0';
    }
    Object.defineProperty(AppComponent.prototype, "clickedStyle", {
        get: function () {
            return this.clicked ? 'gray' : '';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.keyboardInput = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (event.ctrlKey || event.altKey
            || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false)
            || (95 < event.keyCode && event.keyCode < 106)
            || (event.keyCode == 8)
            || (event.keyCode == 190)
            || (event.keyCode == 110)
            || (event.keyCode === 107)
            || (event.keyCode === 111)
            || (event.keyCode === 106)
            || (event.keyCode === 109)
            || (event.keyCode === 13)) {
            if (event.keyCode === 107) {
                this.action('sum');
                return;
            }
            if (event.keyCode === 111) {
                this.action('divide');
                return;
            }
            if (event.keyCode === 106) {
                this.action('multiply');
                return;
            }
            if (event.keyCode === 109) {
                this.action('deduct');
                return;
            }
            if (event.keyCode === 13) {
                this.equal();
                return;
            }
            if (event.keyCode == 8) {
                if (this.actionBtn !== '')
                    return;
                this.row = this.row.slice(0, -1);
                this.placeholder = '0';
                return;
            }
            this.addNumber(event.key);
        }
    };
    /** Действие */
    AppComponent.prototype.action = function (name) {
        this.actionBtn = this.actionBtn === name ? '' : name;
        this.firstValue = +this.row;
        this.placeholder = this.row;
        this.row = '';
    };
    /** Нажатие на цифру или запятую*/
    AppComponent.prototype.addNumber = function (number) {
        if (number === '.') {
            var index = this.row.indexOf('.');
            if (index !== -1)
                return;
        }
        if (this.row === '0' && (number === 0 || number === '0'))
            return;
        this.row = this.row + number;
    };
    /** Равно */
    AppComponent.prototype.equal = function () {
        var second = +this.row;
        switch (this.actionBtn) {
            case 'sum':
                this.actionBtn = '';
                return this.sum(second);
                ;
            case 'multiply':
                this.actionBtn = '';
                return this.multiply(second);
            case 'deduct':
                this.actionBtn = '';
                return this.deduct(second);
            case 'divide':
                this.actionBtn = '';
                return this.divide(second);
            default: return;
        }
    };
    /** Процент */
    AppComponent.prototype.percent = function () {
        this.row = (+this.row / 100).toString();
    };
    AppComponent.prototype.addMinus = function () {
        this.row = '-' + this.row;
    };
    /** Прибавить */
    AppComponent.prototype.sum = function (value) {
        this.row = (this.firstValue + value).toString();
    };
    /** Умножить */
    AppComponent.prototype.multiply = function (value) {
        this.row = (this.firstValue * value).toString();
    };
    /** Минус */
    AppComponent.prototype.deduct = function (value) {
        this.row = (this.firstValue - value).toString();
    };
    /** Делить */
    AppComponent.prototype.divide = function (value) {
        this.row = (this.firstValue / value).toString();
    };
    /** Очистить */
    AppComponent.prototype.clear = function (e) {
        this.row = '';
        this.actionBtn = '';
        this.firstValue = 0;
        this.placeholder = '0';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "keyboardInput", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/denismuckaev/todo/todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
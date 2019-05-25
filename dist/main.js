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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-header></app-header> -->\n<app-areacontent></app-areacontent>\n<app-footer></app-footer>\n<router-outlet></router-outlet>"

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
        this.title = 'sport-api-assignment';
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_areaContent_areaContent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/areaContent/areaContent.component */ "./src/app/components/areaContent/areaContent.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/display-screen/display-screen.component */ "./src/app/components/display-screen/display-screen.component.ts");
/* harmony import */ var _components_display_detail_display_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/display-detail/display-detail.component */ "./src/app/components/display-detail/display-detail.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _components_areaContent_areaContent_component__WEBPACK_IMPORTED_MODULE_8__["AreaContentComponent"],
                _components_display_screen_display_screen_component__WEBPACK_IMPORTED_MODULE_11__["DisplayScreenComponent"],
                _components_display_detail_display_detail_component__WEBPACK_IMPORTED_MODULE_12__["DisplayDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Services/data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Services/data.service.ts ***!
  \*****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getURL = function (url) {
        return this.http.get(url, { headers: { authorization: 'Basic MmVmYjkyMTItMzJlMi00MjNhLTk5M2MtMzYzNTdhOjMzMjNDYWJyYWw=' } });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/components/areaContent/areaContent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/areaContent/areaContent.component.ts ***!
  \*****************************************************************/
/*! exports provided: AreaContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaContentComponent", function() { return AreaContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/Services/data.service */ "./src/app/components/Services/data.service.ts");



var AreaContentComponent = /** @class */ (function () {
    function AreaContentComponent(dataService) {
        this.dataService = dataService;
        this.sportNow = 'https://api.mysportsfeeds.com/v1.0/pull/';
        this.mlbLeague = 'mlb/2019-regular/full_game_schedule'; // MLB Regular Schedule
        this.nflLeague = 'nfl/2019-regular/full_game_schedule'; // NFL Regular Schedule
        this.nhlLeague = 'nhl/2019-playoff/full_game_schedule'; // NHL Payoff Schedule
        this.nbaLeague = 'nba/2019-playoff/full_game_schedule'; // NBA Payoff Schedule
        // nbaLeague = 'nba/2019-regular/full_game_schedule';  // NBA Regular Schedule
        // sportNow = 'https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/full_game_schedule.json';  // NHL
        // https://api.mysportsfeeds.com/v1.0/pull/mlb/2019-regular/full_game_schedule.json;  //MLB
        // https://api.mysportsfeeds.com/v1.0/pull/nfl/2019-regular/full_game_schedule.json;  //NFL
        // https://api.mysportsfeeds.com/v1.0/pull/nba/2019-playoff/full_game_schedule.json;  //NBA
        // https://api.mysportsfeeds.com/v1.0/pull/nhl/2019-playoff/full_game_schedule.json'; //NHL
        this.apiURl = this.sportNow;
        this.title = 'Please select your League';
        // apiURl: string;
        this.displayData = [];
    }
    AreaContentComponent.prototype.ngOnInit = function () {
        // this.apiURl = this.sportNow + this. searchLeague + '.json';
        // console.log('This is the URL to be search: ' + this.apiURl);
        // this.getSportsData(this.apiURl);
    };
    AreaContentComponent.prototype.getSportsData = function (url) {
        var _this = this;
        this.displayData = [];
        this.dataService.getURL(url).subscribe(function (x) {
            _this.fullGameSchedule = x;
            var count = 0;
            // console.log('My ALL Object: ', this.fullGameSchedule);
            // console.log('This is the ID: ', this.fullGameSchedule.fullgameschedule.gameentry[0].id);
            // console.log('This is the date: ' + this.fullGameSchedule.fullgameschedule.gameentry[0].date);
            // console.log('This is the time: ', this.fullGameSchedule.fullgameschedule.gameentry[0].time);
            // console.log('This is the location: ', this.fullGameSchedule.fullgameschedule.gameentry[0].location);
            for (var _i = 0, _a = _this.fullGameSchedule.fullgameschedule.gameentry; _i < _a.length; _i++) {
                var schedule = _a[_i];
                var nfo = {
                    num: count++,
                    id: schedule.id,
                    date: schedule.date,
                    time: schedule.time,
                    awayTeamCity: schedule.awayTeam.City,
                    awayTeamName: schedule.awayTeam.Name,
                    awayTeamAbbreviation: schedule.awayTeam.Abbreviation,
                    homeTeamCity: schedule.homeTeam.City,
                    homeTeamName: schedule.homeTeam.Name,
                    homeTeamAbbreviation: schedule.homeTeam.Abbreviation,
                    location: schedule.location,
                };
                _this.displayData.push(nfo);
                // console.log('My ALL Object: ', schedule);
                // console.log('This is the ID: ', schedule.id);
                // console.log('This is the date: ' + schedule.date);
                // console.log('This is the time: ', schedule.time);
                // console.log('This is the location: ', schedule.location);
                // console.log('Home Team is: ' + schedule.homeTeam.City);
            }
        });
    };
    AreaContentComponent.prototype.SelectLeague = function (leagueType) {
        var url;
        if (leagueType === 'MLB') {
            // Set the api to MLB
            url = this.sportNow + this.mlbLeague + '.json';
            this.league = 'MLB';
            this.title = leagueType + ' 2019 Regular Schedule';
        }
        if (leagueType === 'NBA') {
            // Set the api to NBA
            url = this.sportNow + this.nbaLeague + '.json';
            this.league = 'NBA';
            this.title = leagueType + ' 2019 Payoff Schedule';
        }
        if (leagueType === 'NFL') {
            // Set the api to NFL
            url = this.sportNow + this.nflLeague + '.json';
            this.league = 'NFL';
            this.title = leagueType + ' 2019 Regular Schedule';
        }
        if (leagueType === 'NHL') {
            // Set the api to NHL
            url = this.sportNow + this.nhlLeague + '.json';
            this.league = 'NHL';
            this.title = leagueType + ' 2019 Payoff Schedule';
        }
        // send to service
        this.getSportsData(url);
    };
    AreaContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-areacontent',
            template: __webpack_require__(/*! ./areacontent.component.html */ "./src/app/components/areaContent/areacontent.component.html"),
            styles: [__webpack_require__(/*! ./areacontent.component.css */ "./src/app/components/areaContent/areacontent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_components_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AreaContentComponent);
    return AreaContentComponent;
}());



/***/ }),

/***/ "./src/app/components/areaContent/areacontent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/areaContent/areacontent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color: black;\n}\n\np {\n    color: white;\n}\n\n.card{\n    background-color: white;\n    border-radius: 5px;\n    border-color: orange;\n    border-width: thick;\n    margin: 5px;\n}\n\nh2 {\n    color: white;\n    \n}\n\n.frame{\n    border-radius: 5px;\n    border-color: orange;\n    border-width: thick;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n}\n\n.frame:hover { /* IE 9 */\n    -webkit-transform: scale(1.10); /* Safari 3-8 */\n    transform: scale(1.10); \n  }\n\nh1 {\n    color: white;\n    \n}\n\n.nav-link{\n    \n    transition: -webkit-transform .2s;\n    \n    transition: transform .2s;\n    \n    transition: transform .2s, -webkit-transform .2s;\n}\n\n.nav-link:hover { /* IE 9 */\n    -webkit-transform: scale(1.75); /* Safari 3-8 */\n    transform: scale(1.75); \n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hcmVhQ29udGVudC9hcmVhY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZOztBQUVoQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFBekIsZ0RBQXlCO0FBQzdCOztBQUNBLGVBQ2dDLFNBQVM7SUFDckMsOEJBQThCLEVBQUUsZUFBZTtJQUMvQyxzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTs7SUFFSSxpQ0FBeUI7O0lBQXpCLHlCQUF5Qjs7SUFBekIsZ0RBQXlCO0FBQzdCOztBQUNBLGtCQUNnQyxTQUFTO0lBQ3JDLDhCQUE4QixFQUFFLGVBQWU7SUFDL0Msc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hcmVhQ29udGVudC9hcmVhY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGljaztcbiAgICBtYXJnaW46IDVweDtcbn1cbmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG59XG4uZnJhbWV7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICAgIGJvcmRlci13aWR0aDogdGhpY2s7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cbi5mcmFtZTpob3ZlciB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xMCk7IC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xMCk7IC8qIFNhZmFyaSAzLTggKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTApOyBcbiAgfVxuXG5oMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxufVxuXG4ubmF2LWxpbmt7XG4gICAgXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cbi5uYXYtbGluazpob3ZlciB7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS43NSk7IC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS43NSk7IC8qIFNhZmFyaSAzLTggKi9cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNzUpOyBcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/areaContent/areacontent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/areaContent/areacontent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"> <img src=\"assets/logo_full_nosport_black.png\" wide='300' alt=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('MLB')\">MLB <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NBA')\">NBA</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NFL')\">NFL</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NHL')\">NHL</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-2\">\n      <div class=\"row\">\n        <div class=\"col-12 my-3\"></div>\n        <div class=\"col-12 my-3\">\n          <button class=\"frame\" (click)=\"SelectLeague('MLB')\"><img src=\"assets/MLB.gif\" width=\"150\" alt=\"\"></button>\n        </div>\n        <div class=\"col-12\">\n        </div>\n        <div class=\"col-12 my-2\">\n          <button class=\"frame\" (click)=\"SelectLeague('NBA')\"><img src=\"assets/NBA.gif\" width=\"150\" alt=\"\"></button>\n        </div>\n        <div class=\"col-12\"></div>\n        <div class=\"col-12 my-3\">\n          <button class=\"frame\" (click)=\"SelectLeague('NFL')\"><img src=\"assets/NFL.gif\" width=\"150\" alt=\"\"></button>\n        </div>\n        <div class=\"col-12\"></div>\n        <div class=\"col-12 my-3\">\n          <button class=\"frame\" (click)=\"SelectLeague('NHL')\"><img src=\"assets/NHL.gif\" width=\"150\" alt=\"\"></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10 my-4\" style=\"text-align:center\">\n\n      <h1>FULL SCHEDULE</h1>\n\n      <h2>{{title}}</h2>\n\n      <div class=\"row my-5\">\n\n        <div class=\"col-6\">\n\n          <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n\n            <ngb-panel *ngFor='let score of displayData' id=\"'static-'{{score.num}}\">\n\n              <ng-template ngbPanelTitle>\n                <span><img src=\"assets/{{league}}/{{score.homeTeamAbbreviation}}.gif?\" width=\"55\" alt=\"\">\n                  {{score.homeTeamName}} <b>VS</b> {{score.awayTeamName}}\n                  <img src=\"assets/{{league}}/{{score.awayTeamAbbreviation}}.gif?\" width=\"55\" alt=\"\"></span>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <app-display-screen [score]=\"score\"></app-display-screen>\n              </ng-template>\n\n            </ngb-panel>\n          </ngb-accordion>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n          <!-- <div class=\"accordion\" id=\"accordionExample\">\n            <div class=\"card\">\n              <div class=\"card-header\" [id]=\"'heading'+score.id\">\n                <h2 class=\"mb-0\">\n                  <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\n                    [attr.data-target]=\"'#collapse'+score.id\" aria-expanded=\"false\"\n                    [attr.aria-controls]=\"'collapse'+score.id\">\n\n                    <img src=\"assets/{{league}}/{{score.homeTeamAbbreviation}}.gif?\" width=\"55\" alt=\"\">\n                    {{score.homeTeamName}} <b>VS</b>\n                    {{score.awayTeamName}}\n                    <img src=\"assets/{{league}}/{{score.awayTeamAbbreviation}}.gif?\" width=\"55\" alt=\"\">\n                  </button>\n                </h2>\n              </div>\n\n              <div [id]=\"'collapse'+score.id\" class=\"collapse\" [attr.aria-labelledby]=\"'heading'+score.id\"\n                data-parent=\"#accordionExample\">\n                <div class=\"card-body\">\n                  <app-display-screen [score]=\"score\"></app-display-screen>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-detail/display-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/display-detail/display-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1kZXRhaWwvZGlzcGxheS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/display-detail/display-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-detail/display-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\"><h6>{{label}}</h6></div>\n  <div class=\"col-8\">{{value}}</div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-detail/display-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-detail/display-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: DisplayDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDetailComponent", function() { return DisplayDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayDetailComponent = /** @class */ (function () {
    function DisplayDetailComponent() {
    }
    DisplayDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayDetailComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisplayDetailComponent.prototype, "value", void 0);
    DisplayDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-detail',
            template: __webpack_require__(/*! ./display-detail.component.html */ "./src/app/components/display-detail/display-detail.component.html"),
            styles: [__webpack_require__(/*! ./display-detail.component.css */ "./src/app/components/display-detail/display-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayDetailComponent);
    return DisplayDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/display-screen/display-screen.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/display-screen/display-screen.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".teamType{\n    color:rgb(255, 126, 6)\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LXNjcmVlbi9kaXNwbGF5LXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1zY3JlZW4vZGlzcGxheS1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtVHlwZXtcbiAgICBjb2xvcjpyZ2IoMjU1LCAxMjYsIDYpXG59Il19 */"

/***/ }),

/***/ "./src/app/components/display-screen/display-screen.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-screen/display-screen.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"score\" class=\"row\">\n  <div class=\"col-6\">\n    <h5>Location</h5>{{score.location}}\n  </div>\n  <div class=\"col-3\">\n    <h5>Date</h5>{{score.date}}\n  </div>\n  <div class=\"col-3\">\n    <h5>Time</h5>{{score.time}}\n  </div>\n</div>\n\n<div class=\"col-12\">\n  <div class=\"row\">\n    <div class=\"col-12 teamType\">\n      <h5>AWAY TEAM</h5>\n    </div>\n\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'Name'\" [value]=\"score.awayTeamName\"></app-display-detail>\n    </div>\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'City'\" [value]=\"score.awayTeamCity\"></app-display-detail>\n    </div>\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'Abbrv.'\" [value]=\"score.awayTeamAbbreviation\"></app-display-detail>\n    </div>\n\n\n    <div class=\"col-12 teamType\">\n      <h5>HOME TEAM</h5>\n    </div>\n\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'Name'\" [value]=\"score.homeTeamName\"></app-display-detail>\n    </div>\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'City'\" [value]=\"score.homeTeamCity\"></app-display-detail>\n    </div>\n    <div class=\"col-6\">\n      <app-display-detail [label]=\"'Abbrv.'\" [value]=\"score.homeTeamAbbreviation\"></app-display-detail>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/display-screen/display-screen.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-screen/display-screen.component.ts ***!
  \***********************************************************************/
/*! exports provided: DisplayScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayScreenComponent", function() { return DisplayScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayScreenComponent = /** @class */ (function () {
    function DisplayScreenComponent() {
    }
    DisplayScreenComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DisplayScreenComponent.prototype, "score", void 0);
    DisplayScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-screen',
            template: __webpack_require__(/*! ./display-screen.component.html */ "./src/app/components/display-screen/display-screen.component.html"),
            styles: [__webpack_require__(/*! ./display-screen.component.css */ "./src/app/components/display-screen/display-screen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayScreenComponent);
    return DisplayScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background-color: black;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<div class=\"row my-1\">\n  <div class=\"col-6\"></div>\n  <div class=\"col-6 text-align:right\">\n    <p>© 2019 Be A Contender Software Services Inc. | All Rights Reserved <p>\n\n    <p>MySportsFeeds is an unofficial and independent source of information not affiliated with the National Hockey League (NHL), National Football League (NFL), Major League Baseball (MLB), National Basketball Association (NBA), or any of their sub-affiliates.</p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\"> <img src=\"assets/logo_full_nosport_black.png\" wide='300' alt=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('MLB')\">MLB <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NBA')\">NBA</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NFL')\">NFL</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"SelectLeague('NHL')\">NHL</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import from the shared module
var HeaderComponent = /** @class */ (function () {
    // sharedModule: Sharedmodule;
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = __webpack_require__(/*! /Users/code/Desktop/JoseSportsAPIEditedJT/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
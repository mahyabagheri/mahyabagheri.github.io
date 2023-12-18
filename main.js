(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+PfX":
/*!*****************************************************!*\
  !*** ./src/app/components/forth/forth.component.ts ***!
  \*****************************************************/
/*! exports provided: ForthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForthComponent", function() { return ForthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




function ForthComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1);
} }
class ForthComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = ['Quality', 'Consistency', 'Reusability', 'Efficiency', 'Standard Programming', 'Modular Programming', 'Mobile first'];
    }
    ngOnInit() {
    }
    scrollToNext(event) {
        this.next.emit({
            icon: 'message',
            id: 'fifth',
            selected: false
        });
    }
}
ForthComponent.ɵfac = function ForthComponent_Factory(t) { return new (t || ForthComponent)(); };
ForthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForthComponent, selectors: [["app-forth"]], outputs: { next: "next" }, decls: 12, vars: 1, consts: [[1, "forth", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "row"], [1, "values", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "work-title"], [1, "row", "skills"], [1, "pl-3", "col-xl-6", "col-lg-12", "col-xs-12", "col-md-12"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-5", 3, "click"], [1, "pl-3", "value"]], template: function ForthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Values.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ForthComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForthComponent_Template_button_click_8_listener($event) { return ctx.scrollToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ABOUT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".forth[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n@media all and (min-width: 900px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 100px;\n    color: #f0411a;\n    margin-top: 140px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 20px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .forth[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n    background-color: #ffe5d9;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .skills[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 900px) {\n  .work[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .forth[_ngcontent-%COMP%] {\n    margin-bottom: 80px;\n  }\n\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #f0411a;\n    margin-top: 40px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 15px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3J0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUFFRjs7RUFBQTtJQUNFLFlBQUE7RUFHRjtFQURFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBR0o7O0VBQUE7SUFDRSxrQkFBQTtJQUNBLHlCQUFBO0VBR0Y7O0VBREE7SUFDRSxnQkFBQTtFQUlGOztFQUZBO0lBQ0UsaUJBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0U7SUFDRSxpQkFBQTtFQUlGOztFQUZBO0lBQ0UsbUJBQUE7RUFLRjs7RUFIQTtJQUNFLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFNRjs7RUFKQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUFPRjs7RUFGRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtKOztFQUZBO0lBQ0UsaUJBQUE7RUFLRjtBQUNGIiwiZmlsZSI6ImZvcnRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcnRoIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAud29yay10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9XHJcbiAgLnJlY2VudC1wcm9qZWN0cyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2YwNDExYTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0l0YWxpYztcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcnRoIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyOSwgMjE3KTtcclxuICB9XHJcbiAgLnZhbHVlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuc2tpbGxzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC53b3JrIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAuZm9ydGgge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICB9XHJcbiAgLndvcmstdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICAucmVjZW50LXByb2plY3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljO1xyXG4gIH1cclxuICAuYmlvIHtcclxuICAgIC8vd2lkdGg6IDIwMHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52YWx1ZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\p\MyProj\myWebsite\src\main.ts */"zUnb");


/***/ }),

/***/ "7pp/":
/*!*********************************************!*\
  !*** ./src/app/constants/projects.const.ts ***!
  \*********************************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
const PROJECTS = [
    {
        name: 'Angular',
        company: 'Tosan',
        title: '(Frontend Developer)',
        time: 'Aug. 2020 - Present',
        link: 'https://www.tosan.com/en/news/board-members-appreciation/',
        description: 'Participated in a customer-focused core bank software which utilizes angular libraries for generating\n' +
            '              dynamic forms and\n' +
            '              grids (This application consists of a library as framework module which generates forms and grids\n' +
            '              dynamically and every subsystem is an independent module which utilizes the framework to build components\n' +
            '              and finally all the subsystems are integrated all together in an outer application called loader)\n' +
            'Developed Business Project Management System which consists of processes that are executing in the\n' +
            '              organization, each process has plenty of tasks and flows that execute consequently one after each other in\n' +
            '              an order, every task is a form which is being generated dynamically'
    },
    {
        name: 'Reactjs',
        company: 'Gam Electronics Co',
        title: '(Frontend Developer)',
        time: 'Dec. 2019 – Jul. 2020',
        link: 'http://gamelectronicsinc.com/',
        description: 'Developed Document Management System application for Hamrahe Aval'
    },
    {
        name: 'Wordpress',
        company: 'Mapsahr',
        title: '(Frontend Developer)',
        time: 'Aug. 2019 – Dec. 2019',
        link: 'https://bootcamp.mapsahr.com/#consulting',
        description: 'Participated in Developing Websites in wordpress cms for Mapsahr'
    }
];


/***/ }),

/***/ "9+19":
/*!*******************************************************!*\
  !*** ./src/app/components/second/second.component.ts ***!
  \*******************************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_projects_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/projects.const */ "7pp/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





function SecondComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondComponent_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setSelectedPage(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", p_r1 === ctx_r0.selectedProject ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.name);
} }
class SecondComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedProject = _constants_projects_const__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"][0];
        this.projects = _constants_projects_const__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"];
    }
    ngOnInit() {
    }
    scrollToNext(event) {
        this.next.emit({
            icon: 'bar_chart',
            id: 'third',
            selected: false
        });
    }
    setSelectedPage(page) {
        this.selectedProject = page;
    }
}
SecondComponent.ɵfac = function SecondComponent_Factory(t) { return new (t || SecondComponent)(); };
SecondComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecondComponent, selectors: [["app-second"]], outputs: { next: "next" }, decls: 30, vars: 6, consts: [[1, "second", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "row"], [1, "work", "col-xl-6", "col-lg-6", "col-md-6", "col-xs-12"], [1, "work-title"], [1, "recent-projects"], [1, "bio"], [1, "project-container", "col-xl-6", "col-lg-6", "col-md-6", "col-xs-12"], [1, "projects-menu"], [1, "projects", "px-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "menu", "px-0"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "project-content", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "mt-3", "company"], [3, "href"], [1, "title"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-5", 3, "click"], [3, "ngClass", "click"]], template: function SecondComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Work.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RECENT PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " These are my completed projects completed in 2019-2021 which I feel proud I could take part. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SecondComponent_li_14_Template, 2, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SecondComponent_Template_button_click_26_listener($event) { return ctx.scrollToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " TOOLS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.selectedProject.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProject.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".second[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #007BFF;\n  font-family: Lato;\n}\n\n.company[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #007BFF;\n  font-family: OpenSansItalic;\n}\n\n.company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #007BFF;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #f0411a;\n}\n\n@media all and (min-width: 900px) {\n  .second[_ngcontent-%COMP%] {\n    margin-bottom: 80px !important;\n  }\n\n  .work[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .projects[_ngcontent-%COMP%] {\n    height: 40px;\n    border-top: 1px solid #aaa;\n    border-bottom: 1px solid #aaa;\n  }\n\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 100px;\n    color: #f0411a;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n    margin-bottom: 100px;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 20px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .projects-menu[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    list-style-type: none;\n    text-decoration: none;\n    display: flex;\n    flex-direction: row;\n    height: 40px;\n  }\n  .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 40px;\n    line-height: 40px;\n  }\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 40px;\n    line-height: 40px;\n    cursor: pointer;\n    margin-right: 20px;\n    margin-left: 20px;\n  }\n\n  .second[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n  }\n\n  .project-container[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 900px) {\n  .second[_ngcontent-%COMP%] {\n    margin-bottom: 80px;\n  }\n\n  .work[_ngcontent-%COMP%] {\n    margin-top: 160px;\n  }\n\n  .projects[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #f0411a;\n    margin-bottom: 20px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n    margin-bottom: 0;\n  }\n\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 15px;\n    font-family: Lato;\n    line-height: 20px;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    list-style-type: none;\n    text-decoration: none;\n    display: flex;\n    flex-direction: column;\n    height: 120px;\n  }\n  .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    border-top: 1px solid #aaaaaa;\n    border-bottom: 1px solid #aaaaaa;\n    height: 40px;\n    line-height: 40px;\n  }\n\n  .project-content[_ngcontent-%COMP%] {\n    margin-top: 110px;\n    height: 200px;\n    overflow: auto;\n  }\n}\n\nhr[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #f0411a !important;\n  color: #f0411a;\n}\n\n.selected[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #f0411a !important;\n  color: #f0411a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWNvbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFFRTtFQUNFLGNBQUE7QUFBSjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsOEJBQUE7RUFERjs7RUFJQTtJQUNFLGlCQUFBO0VBREY7O0VBSUE7SUFDRSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSw2QkFBQTtFQURGOztFQUlBO0lBQ0UsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBREY7O0VBSUE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0lBQ0Esb0JBQUE7RUFERjs7RUFJQTtJQUNFLFlBQUE7RUFERjtFQUdFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBREo7O0VBS0E7SUFDRSxpQkFBQTtFQUZGOztFQUtBO0lBQ0UscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFGRjtFQUlFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBRko7RUFLRTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBSEo7O0VBT0E7SUFDRSxrQkFBQTtFQUpGOztFQU9BO0lBQ0UsaUJBQUE7RUFKRjtBQUNGOztBQVFBO0VBQ0U7SUFDRSxtQkFBQTtFQU5GOztFQVFBO0lBQ0UsaUJBQUE7RUFMRjs7RUFPQTtJQUNFLFlBQUE7RUFKRjs7RUFNQTtJQUNFLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBSEY7O0VBS0E7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7RUFGRjs7RUFLRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUZKOztFQUtBO0lBQ0UscUJBQUE7SUFDQSxxQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7RUFGRjtFQUlFO0lBQ0UsZUFBQTtJQUNBLDZCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFGSjs7RUFLQTtJQUNFLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UsU0FBQTtBQUhGOztBQVFJO0VBQ0UsMkNBQUE7RUFDQSxjQUFBO0FBTE47O0FBVUE7RUFDRSwyQ0FBQTtFQUNBLGNBQUE7QUFQRiIsImZpbGUiOiJzZWNvbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlY29uZCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzAwN0JGRjtcclxuICBmb250LWZhbWlseTogTGF0bztcclxufVxyXG5cclxuLmNvbXBhbnkge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzAwN0JGRjtcclxuICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICMwMDdCRkY7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiAjZjA0MTFhO1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5zZWNvbmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLndvcmsge1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICB9XHJcblxyXG4gIC53b3JrLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2YwNDExYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9XHJcblxyXG4gIC5yZWNlbnQtcHJvamVjdHMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5iaW8ge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMtbWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWNvbmQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC5zZWNvbmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICB9XHJcbiAgLndvcmsge1xyXG4gICAgbWFyZ2luLXRvcDogMTYwcHg7XHJcbiAgfVxyXG4gIC5wcm9qZWN0cyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG4gIC53b3JrLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICAucmVjZW50LXByb2plY3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYWFhYTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2plY3QtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICBsaSB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmMDQxMWEgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjA0MTFhICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmMDQxMWE7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 46, vars: 5, consts: [[1, "about", "contact", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "mt-3"], [1, "work-title"], [1, "recent-projects"], ["src", "assets/images/mahya-1.jpg", 1, "my-pic"], [1, "bio", "col-xl-6", "col-l6-6", "col-md-12", "col-xs-12"], [2, "border-bottom", "3px solid #f0411a"], [1, "row"], [1, "col-xl-6", "col-lg-8", "col-md-8", "col-xs-12", "bio"], [1, "px-3"], [1, "col-xl-6", "col-lg-4", "col-md-4", "col-xs-12", "contact-bar"], ["ngbTooltip", "WhatsApp", "tooltipClass", "my-custom-class", 2, "width", "16px"], [3, "href"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "whatsapp", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-whatsapp"], ["fill", "#9bafbf", "d", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"], ["ngbTooltip", "LinkedIn", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "linkedin-in", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-linkedin-in"], ["fill", "#9bafbf", "d", "M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"], ["ngbTooltip", "Email", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "envelope", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-envelope"], ["fill", "#9bafbf", "d", "M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"], ["ngbTooltip", "GitHub", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "github", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", 1, "svg-inline--fa", "fa-github"], ["fill", "#9bafbf", "d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"], ["ngbTooltip", "GitLab", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "gitlab", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-gitlab"], ["fill", "#9bafbf", "d", "M510.5 284.5l-27.26-83.96c.012 .038 .016 .077 .028 .115-.013-.044-.021-.088-.033-.132v-.01L429.1 33.87a21.33 21.33 0 0 0 -20.44-14.6A21.04 21.04 0 0 0 388.5 34L337.1 192.2H175L123.5 33.99A21.03 21.03 0 0 0 103.3 19.27h-.113A21.47 21.47 0 0 0 82.86 34L28.89 200.5l-.008 .021v0c-.013 .042-.019 .084-.033 .127 .012-.038 .017-.077 .029-.115L1.514 284.5a30.6 30.6 0 0 0 11.12 34.28L248.9 490.4c.035 .026 .074 .041 .109 .067 .1 .072 .2 .146 .3 .214-.1-.065-.187-.136-.282-.2l0 0c.015 .012 .033 .02 .05 .031s.027 .015 .041 .024l.006 0a11.99 11.99 0 0 0 1.137 .7c.054 .03 .1 .068 .157 .1l0 0c.033 .016 .064 .038 .1 .054s.053 .02 .077 .032 .038 .015 .056 .023c.044 .021 .092 .034 .136 .057 .205 .1 .421 .178 .633 .264 .2 .082 .389 .177 .592 .248l.025 .011c.034 .012 .064 .028 .1 .04s.083 .032 .125 .046l.05 .012c.053 .016 .11 .024 .163 .039 .019 .006 .042 .009 .063 .015 .284 .086 .579 .148 .872 .213 .115 .026 .225 .062 .341 .083 .017 0 .032 .009 .05 .012 .038 .008 .073 .021 .112 .027 .062 .011 .122 .031 .186 .04 .049 .007 .1 0 .151 .012h.033a11.92 11.92 0 0 0 1.7 .136h.019a11.97 11.97 0 0 0 1.7-.136h.033c.05-.008 .1 0 .153-.012s.124-.029 .187-.04c.038-.006 .073-.019 .11-.027 .017 0 .032-.009 .049-.012 .118-.023 .231-.059 .349-.084 .288-.064 .578-.126 .861-.21 .019-.006 .039-.008 .059-.014 .055-.017 .113-.024 .169-.041 .016-.006 .035-.007 .051-.012 .044-.013 .086-.032 .129-.047s.063-.028 .1-.041l.026-.01c.214-.076 .417-.175 .627-.261s.394-.154 .584-.245c.047-.023 .1-.036 .142-.059 .018-.009 .04-.015 .058-.024s.053-.02 .078-.033 .068-.04 .1-.056l0 0c.056-.028 .106-.069 .161-.1a12.34 12.34 0 0 0 1.132-.695c.029-.02 .062-.035 .092-.056 .008-.006 .017-.009 .024-.015 .035-.026 .076-.043 .11-.068l236.3-171.7A30.6 30.6 0 0 0 510.5 284.5zM408.8 49.48l46.34 142.7H362.5zm-305.6 0 46.43 142.7H56.95zM26.82 299.3a6.526 6.526 0 0 1 -2.361-7.308l20.34-62.42L193.8 420.6zm38.24-82.97h92.41L223.4 419.2zm183.4 273.8c-.047-.038-.092-.079-.138-.118-.009-.008-.018-.018-.028-.026-.091-.075-.18-.152-.268-.231-.172-.15-.341-.3-.5-.462 .014 .012 .029 .022 .043 .035l.055 .046a12.19 12.19 0 0 0 1.091 .929l.012 .011c.018 .013 .033 .03 .051 .045C248.7 490.3 248.6 490.2 248.5 490.1zm7.514-48.48L217.2 322.2 182.8 216.3H329.3zm7.935 48.11c-.091 .079-.178 .157-.27 .233l-.032 .028c-.047 .038-.091 .079-.136 .117-.1 .08-.209 .152-.313 .229 .018-.013 .033-.032 .053-.044l.009-.009a11.69 11.69 0 0 0 1.086-.926c.014-.013 .03-.024 .044-.036s.038-.03 .054-.047C264.3 489.4 264.1 489.6 263.9 489.7zm90.7-273.5h92.4l-18.91 24.23-139.5 178.7zm130.6 82.97L318.2 420.6 467.3 229.5l20.26 62.39A6.528 6.528 0 0 1 485.2 299.2z"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LET'S TALK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "You can reach out to me using the contact details below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phone: +98 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 912 487 59 23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "E-Mail: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " mahyabagheri.dev@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Designed & Developed by Mahya Bagheri over Angular. All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://api.whatsapp.com/send/?phone=989124875923&text&app_absent=0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://linkedin.com/in/mahya-bagheri/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:?subject={{vm.property.address.streetNumber}}, {{vm.property.address.streetName}} {{vm.cityName}} {{vm.stateName}}%20IPL%20#%20{{vm.property.id}}&body={{comment.note}}", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://github.com/mahyabagheri", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://gitlab.com/mahyabagheri", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTooltip"]], styles: [".contact[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n@media all and (min-width: 900px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 100px;\n    color: #efefef;\n    margin-top: 70px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #efefef;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    background-color: #070a17;\n  }\n  .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #9bafbf;\n    font-size: 20px;\n    line-height: 30px;\n    font-family: OpenSansItalic !important;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n    background-color: #070a17;\n    padding-top: 90px;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .skills[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n\n  .contact-bar[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 40px;\n    right: 0;\n    width: 200px;\n    height: 16px;\n    z-index: 2;\n  }\n  .contact-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    list-style-type: none;\n    padding: 10px 20px 10px 10px;\n  }\n  .contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    transition: all 300ms ease-in-out;\n  }\n  .contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    color: #f0411a;\n  }\n\n  .fa-linkedin-in[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  .my-pic[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 900px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #efefef;\n    margin-top: 10px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #efefef;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    padding-top: 60px;\n    background-color: #070a17;\n  }\n  .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #9bafbf;\n    font-family: OpenSansItalic;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .contact-bar[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 40px;\n    right: 0;\n    width: 200px;\n    height: 16px;\n    z-index: 2;\n  }\n  .contact-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    list-style-type: none;\n    padding: 10px 20px 10px 10px;\n  }\n  .contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer;\n    transition: all 300ms ease-in-out;\n  }\n  .contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    color: #f0411a;\n  }\n\n  .my-pic[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .fa-linkedin-in[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQUVGOztFQUFBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSwyQkFBQTtFQUdGOztFQURBO0lBQ0UsYUFBQTtFQUlGOztFQUZBO0lBQ0UseUJBQUE7RUFLRjtFQUpFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNDQUFBO0VBTUo7O0VBSEE7SUFDRSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUFNRjs7RUFKQTtJQUNFLGdCQUFBO0VBT0Y7O0VBTEE7SUFDRSxpQkFBQTtFQVFGOztFQU5BO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVNGO0VBUkU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLHFCQUFBO0lBQ0EsNEJBQUE7RUFVSjtFQVJFO0lBQ0UsZUFBQTtJQUNBLGlDQUFBO0VBVUo7RUFUSTtJQUNFLGNBQUE7RUFXTjs7RUFQQTtJQUNFLGVBQUE7RUFVRjs7RUFSQTtJQUNFLGFBQUE7RUFXRjtBQUNGOztBQU5BO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBUUY7O0VBTkE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0VBU0Y7O0VBUEE7SUFDRSxhQUFBO0VBVUY7O0VBUkE7SUFDRSxpQkFBQTtJQUNBLHlCQUFBO0VBV0Y7RUFWRTtJQUNFLGNBQUE7SUFDQSwyQkFBQTtFQVlKOztFQVRBO0lBQ0UsaUJBQUE7RUFZRjs7RUFWQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFhRjtFQVpFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxxQkFBQTtJQUNBLDRCQUFBO0VBY0o7RUFaRTtJQUNFLGVBQUE7SUFDQSxpQ0FBQTtFQWNKO0VBYkk7SUFDRSxjQUFBO0VBZU47O0VBWEE7SUFDRSxhQUFBO0VBY0Y7O0VBWkE7SUFDRSxlQUFBO0VBZUY7QUFDRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3R7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC53b3JrLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgfVxyXG4gIC5yZWNlbnQtcHJvamVjdHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcbiAgfVxyXG4gIC5iaW97XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gIH1cclxuICAuYWJvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGExNztcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzliYWZiZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250YWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBhMTc7XHJcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcclxuICB9XHJcbiAgLnZhbHVlc3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtYmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0MHB4O1xyXG4gICAgcmlnaHQ6MDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB1bHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICBsaXtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmZhLWxpbmtlZGluLWlue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAubXktcGlje1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC53b3JrLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICB9XHJcbiAgLnJlY2VudC1wcm9qZWN0cyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0l0YWxpYztcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuYWJvdXR7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBhMTc7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM5YmFmYmY7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0l0YWxpYztcclxuICAgIH1cclxuICB9XHJcbiAgLnZhbHVlc3tcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAuY29udGFjdC1iYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICByaWdodDowO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHVse1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICAgIGxpe1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2YwNDExYTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubXktcGlje1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZhLWxpbmtlZGluLWlue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "LQco":
/*!*****************************************************!*\
  !*** ./src/app/components/third/third.component.ts ***!
  \*****************************************************/
/*! exports provided: ThirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdComponent", function() { return ThirdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





function ThirdComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r4);
} }
function ThirdComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const library_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](library_r5);
} }
function ThirdComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](language_r6);
} }
function ThirdComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r7);
} }
class ThirdComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.radarChartOptions = {
            responsive: true,
            legend: {
                display: false,
            }
        };
        this.radarChartLabels = ['Html', 'Css', 'Responsive Web Design',
            'SASS', 'LESS', 'javascript', 'Typescript', 'RXJs',
            'Angular', 'Reactjs', 'Angular Material', 'Ng Bootstrap',
            'Ngx-Fromly', 'Ag-Grid', 'Gojs', 'Chartjs', 'Reduxjs', 'NgRx', 'OOP',
            'SOLID', 'Design Patterns', 'micro-frontend',
            'modular programming'];
        this.radarChartData = [
            { data: [85, 90, 95, 70, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Web Design' },
            { data: [0, 0, 0, 0, 0, 87, 84, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Languages' },
            {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 75, 69, 98, 96, 89, 90, 80, 64, 0, 0, 0, 0, 0, 0, 0],
                label: 'Frameworks & Libraries'
            },
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 59, 0, 0, 0, 0, 0], label: 'State Management' },
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 56, 20, 67, 90], label: 'Programming' }
        ];
        this.radarChartType = 'radar';
        this.languages = ['Javascript', 'Typescript'];
        this.libraries = ['Angular', 'Reactjs', 'Angular Material', 'Ng Bootstrap',
            'Ngx-Fromly', 'Ag-Grid', 'Chartjs', 'RxJs'];
        this.designSkills = ['Html5', 'Css3', 'SASS', 'LESS', 'ResponsiveWebDesign'];
        this.programming = ['OOP', 'SOLID', 'Design Patterns', 'micro-frontend', 'modular programming'];
        this.StateManagement = ['Reduxjs', 'NgRx'];
    }
    scrollToNext(event) {
        this.next.emit({
            icon: 'lightbulb',
            id: 'forth',
            selected: false
        });
    }
}
ThirdComponent.ɵfac = function ThirdComponent_Factory(t) { return new (t || ThirdComponent)(); };
ThirdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThirdComponent, selectors: [["app-third"]], outputs: { next: "next" }, decls: 35, vars: 8, consts: [[1, "third", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "row"], [1, "work", "col-xl-6", "col-lg-12", "col-md-12", "col-xs-12"], [1, "work-title"], [1, "recent-projects"], [1, "chart", "row"], [1, "section-content"], [2, "display", "block"], ["baseChart", "", 3, "datasets", "options", "labels", "chartType"], [1, "values", "col-xl-6", "col-lg-12", "col-md-12", "col-xs-12"], [1, "row", "skills"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "row"], [1, "col-xl-6", "col-lg-12", "col-xs-6", "col-md-12"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-5", 3, "click"]], template: function ThirdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tools.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "After all, it is all about the right tools.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "canvas", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Design Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ThirdComponent_div_17_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Frameworks & Libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ThirdComponent_div_21_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ThirdComponent_div_26_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ThirdComponent_div_30_Template, 3, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThirdComponent_Template_button_click_31_listener($event) { return ctx.scrollToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " VALUES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.radarChartData)("options", ctx.radarChartOptions)("labels", ctx.radarChartLabels)("chartType", ctx.radarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.designSkills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.libraries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.programming);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".third[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.value-btn[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n\n@media all and (min-width: 1200px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 100px;\n    color: #f0411a;\n    margin-top: 140px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 20px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n\n  .third[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 1200px) {\n  .work[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #f0411a;\n    margin-top: 40px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #f0411a;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 15px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .third[_ngcontent-%COMP%] {\n    margin-bottom: 360px;\n    margin-top: 200px;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 300px) {\n  canvas[_ngcontent-%COMP%] {\n    width: 200px !important;\n    height: 100px !important;\n  }\n}\n\n@media all and (min-width: 300px) and (max-width: 580px) {\n  canvas[_ngcontent-%COMP%] {\n    width: 300px !important;\n    height: 150px !important;\n  }\n}\n\n@media all and (min-width: 580px) and (max-width: 620px) {\n  canvas[_ngcontent-%COMP%] {\n    width: 600px !important;\n    height: 300px !important;\n  }\n}\n\n@media all and (min-width: 620px) and (max-width: 1000px) {\n  canvas[_ngcontent-%COMP%] {\n    width: 1000px !important;\n    height: 500px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aGlyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0VBRUY7O0VBQUE7SUFDRSxZQUFBO0VBR0Y7RUFERTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUdKOztFQUFBO0lBQ0UsaUJBQUE7RUFHRjs7RUFEQTtJQUNFLGtCQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFO0lBQ0UsaUJBQUE7RUFHRjs7RUFEQTtJQUNFLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUFJRjs7RUFGQTtJQUNFLGVBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUFLRjs7RUFGTTtJQUNGLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQUtKOztFQUZBO0lBQ0UsYUFBQTtFQUtGOztFQUhBO0lBQ0Usb0JBQUE7SUFDQSxpQkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUFLRjtBQUNGOztBQUhBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLHdCQUFBO0VBS0Y7QUFDRjs7QUFIQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSx3QkFBQTtFQUtGO0FBQ0Y7O0FBSEE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esd0JBQUE7RUFLRjtBQUNGIiwiZmlsZSI6InRoaXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoaXJkIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4udmFsdWUtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAyMDBweDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLndvcmstdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgfVxyXG4gIC5yZWNlbnQtcHJvamVjdHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcbiAgfVxyXG4gIC5iaW8ge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52YWx1ZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgfVxyXG4gIC50aGlyZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC53b3JrIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAud29yay10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogI2YwNDExYTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgfVxyXG4gIC5yZWNlbnQtcHJvamVjdHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmMDQxMWE7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcbiAgfVxyXG4gIC5iaW8ge1xyXG4gICAgICAgIHAge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52YWx1ZXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnRoaXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBjYW52YXMge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICBjYW52YXMge1xyXG4gICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICBjYW52YXMge1xyXG4gICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDYyMHB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgY2FudmFzIHtcclxuICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_scroll_navigation_scroll_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scroll-navigation/scroll-navigation.component */ "otQc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_first_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/first/first.component */ "tlww");
/* harmony import */ var _components_second_second_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/second/second.component */ "9+19");
/* harmony import */ var _components_third_third_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/third/third.component */ "LQco");
/* harmony import */ var _components_forth_forth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forth/forth.component */ "+PfX");
/* harmony import */ var _components_fifth_fifth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/fifth/fifth.component */ "kCQL");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");









class AppComponent {
    constructor() {
        this.title = 'test-project';
        this.name = 'Angular';
    }
    goToNext(event) {
        this.next = event;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 38, vars: 6, consts: [[1, "website-container", "container-fluid", "row", "mx-0", "col-xl-12", "col-lg-12", "col-xs-12", "px-0", "container-fluid"], [1, "navigation"], [3, "next"], [1, "contact-bar"], ["ngbTooltip", "WhatsApp", "tooltipClass", "my-custom-class", 2, "width", "16px"], [3, "href"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "whatsapp", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-whatsapp"], ["fill", "currentColor", "d", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"], ["ngbTooltip", "LinkedIn", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "linkedin-in", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 1, "svg-inline--fa", "fa-linkedin-in"], ["fill", "currentColor", "d", "M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"], ["ngbTooltip", "Email", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "envelope", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-envelope"], ["fill", "currentColor", "d", "M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"], ["ngbTooltip", "GitHub", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "github", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 496 512", 1, "svg-inline--fa", "fa-github"], ["fill", "currentColor", "d", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"], ["ngbTooltip", "GitLab", "tooltipClass", "my-custom-class", 2, "width", "16px"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "gitlab", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-gitlab"], ["fill", "currentColor", "d", "M510.5 284.5l-27.26-83.96c.012 .038 .016 .077 .028 .115-.013-.044-.021-.088-.033-.132v-.01L429.1 33.87a21.33 21.33 0 0 0 -20.44-14.6A21.04 21.04 0 0 0 388.5 34L337.1 192.2H175L123.5 33.99A21.03 21.03 0 0 0 103.3 19.27h-.113A21.47 21.47 0 0 0 82.86 34L28.89 200.5l-.008 .021v0c-.013 .042-.019 .084-.033 .127 .012-.038 .017-.077 .029-.115L1.514 284.5a30.6 30.6 0 0 0 11.12 34.28L248.9 490.4c.035 .026 .074 .041 .109 .067 .1 .072 .2 .146 .3 .214-.1-.065-.187-.136-.282-.2l0 0c.015 .012 .033 .02 .05 .031s.027 .015 .041 .024l.006 0a11.99 11.99 0 0 0 1.137 .7c.054 .03 .1 .068 .157 .1l0 0c.033 .016 .064 .038 .1 .054s.053 .02 .077 .032 .038 .015 .056 .023c.044 .021 .092 .034 .136 .057 .205 .1 .421 .178 .633 .264 .2 .082 .389 .177 .592 .248l.025 .011c.034 .012 .064 .028 .1 .04s.083 .032 .125 .046l.05 .012c.053 .016 .11 .024 .163 .039 .019 .006 .042 .009 .063 .015 .284 .086 .579 .148 .872 .213 .115 .026 .225 .062 .341 .083 .017 0 .032 .009 .05 .012 .038 .008 .073 .021 .112 .027 .062 .011 .122 .031 .186 .04 .049 .007 .1 0 .151 .012h.033a11.92 11.92 0 0 0 1.7 .136h.019a11.97 11.97 0 0 0 1.7-.136h.033c.05-.008 .1 0 .153-.012s.124-.029 .187-.04c.038-.006 .073-.019 .11-.027 .017 0 .032-.009 .049-.012 .118-.023 .231-.059 .349-.084 .288-.064 .578-.126 .861-.21 .019-.006 .039-.008 .059-.014 .055-.017 .113-.024 .169-.041 .016-.006 .035-.007 .051-.012 .044-.013 .086-.032 .129-.047s.063-.028 .1-.041l.026-.01c.214-.076 .417-.175 .627-.261s.394-.154 .584-.245c.047-.023 .1-.036 .142-.059 .018-.009 .04-.015 .058-.024s.053-.02 .078-.033 .068-.04 .1-.056l0 0c.056-.028 .106-.069 .161-.1a12.34 12.34 0 0 0 1.132-.695c.029-.02 .062-.035 .092-.056 .008-.006 .017-.009 .024-.015 .035-.026 .076-.043 .11-.068l236.3-171.7A30.6 30.6 0 0 0 510.5 284.5zM408.8 49.48l46.34 142.7H362.5zm-305.6 0 46.43 142.7H56.95zM26.82 299.3a6.526 6.526 0 0 1 -2.361-7.308l20.34-62.42L193.8 420.6zm38.24-82.97h92.41L223.4 419.2zm183.4 273.8c-.047-.038-.092-.079-.138-.118-.009-.008-.018-.018-.028-.026-.091-.075-.18-.152-.268-.231-.172-.15-.341-.3-.5-.462 .014 .012 .029 .022 .043 .035l.055 .046a12.19 12.19 0 0 0 1.091 .929l.012 .011c.018 .013 .033 .03 .051 .045C248.7 490.3 248.6 490.2 248.5 490.1zm7.514-48.48L217.2 322.2 182.8 216.3H329.3zm7.935 48.11c-.091 .079-.178 .157-.27 .233l-.032 .028c-.047 .038-.091 .079-.136 .117-.1 .08-.209 .152-.313 .229 .018-.013 .033-.032 .053-.044l.009-.009a11.69 11.69 0 0 0 1.086-.926c.014-.013 .03-.024 .044-.036s.038-.03 .054-.047C264.3 489.4 264.1 489.6 263.9 489.7zm90.7-273.5h92.4l-18.91 24.23-139.5 178.7zm130.6 82.97L318.2 420.6 467.3 229.5l20.26 62.39A6.528 6.528 0 0 1 485.2 299.2z"], [1, "section-container", "row", "mx-0"], ["id", "first", 1, "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", 3, "next"], ["id", "second", 1, "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"], ["id", "third", 1, "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"], ["id", "forth", 1, "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"], ["id", "fifth", 1, "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "contact", "row", "mx-0", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12", "px-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-scroll-navigation", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-first", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_Template_app_first_next_27_listener($event) { return ctx.goToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-second", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_Template_app_second_next_29_listener($event) { return ctx.goToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-third", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_Template_app_third_next_31_listener($event) { return ctx.goToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-forth", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_Template_app_forth_next_33_listener($event) { return ctx.goToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-fifth", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-contact", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("next", ctx.next);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://api.whatsapp.com/send/?phone=989124875923&text&app_absent=0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://linkedin.com/in/mahya-bagheri/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:?subject={{vm.property.address.streetNumber}}, {{vm.property.address.streetName}} {{vm.cityName}} {{vm.stateName}}%20IPL%20#%20{{vm.property.id}}&body={{comment.note}}", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://github.com/mahyabagheri", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://gitlab.com/mahyabagheri", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_components_scroll_navigation_scroll_navigation_component__WEBPACK_IMPORTED_MODULE_1__["ScrollNavigationComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltip"], _components_first_first_component__WEBPACK_IMPORTED_MODULE_3__["FirstComponent"], _components_second_second_component__WEBPACK_IMPORTED_MODULE_4__["SecondComponent"], _components_third_third_component__WEBPACK_IMPORTED_MODULE_5__["ThirdComponent"], _components_forth_forth_component__WEBPACK_IMPORTED_MODULE_6__["ForthComponent"], _components_fifth_fifth_component__WEBPACK_IMPORTED_MODULE_7__["FifthComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.website-container[_ngcontent-%COMP%] {\n  height: 100%;\n  justify-content: space-between;\n  padding: 0;\n}\n\n.section-container[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.contact-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 200px;\n  height: 16px;\n  z-index: 2;\n}\n\n.contact-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 10px 20px 10px 10px;\n}\n\n.contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n}\n\n.contact-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #f0411a;\n}\n\n.fa-linkedin-in[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.contact[_ngcontent-%COMP%], #fifth[_ngcontent-%COMP%] {\n  background-color: #070a17;\n}\n\n#second[_ngcontent-%COMP%], #forth[_ngcontent-%COMP%] {\n  background-color: #FFE5D9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUVFLFlBQUE7RUFDQSw4QkFBQTtFQUdBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLHdCQUFBO0FBRkY7O0FBS0E7RUFFRSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEY7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtBQUZKOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi53ZWJzaXRlLWNvbnRhaW5lcntcclxuICAvL3dpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy9tYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnRhaW5lcntcclxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9ue1xyXG4gIC8vd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFjdC1iYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAxMHB4O1xyXG4gIH1cclxuICBsaXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZhLWxpbmtlZGluLWlue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3QgLCAjZmlmdGh7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGExNztcclxufVxyXG5cclxuI3NlY29uZCwgI2ZvcnRoe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU1RDk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_first_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/first/first.component */ "tlww");
/* harmony import */ var _components_scroll_navigation_scroll_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scroll-navigation/scroll-navigation.component */ "otQc");
/* harmony import */ var _components_third_third_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/third/third.component */ "LQco");
/* harmony import */ var _components_forth_forth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forth/forth.component */ "+PfX");
/* harmony import */ var _components_second_second_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/second/second.component */ "9+19");
/* harmony import */ var _components_fifth_fifth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/fifth/fifth.component */ "kCQL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"],
        _components_second_second_component__WEBPACK_IMPORTED_MODULE_10__["SecondComponent"],
        _components_third_third_component__WEBPACK_IMPORTED_MODULE_8__["ThirdComponent"],
        _components_scroll_navigation_scroll_navigation_component__WEBPACK_IMPORTED_MODULE_7__["ScrollNavigationComponent"],
        _components_forth_forth_component__WEBPACK_IMPORTED_MODULE_9__["ForthComponent"],
        _components_fifth_fifth_component__WEBPACK_IMPORTED_MODULE_11__["FifthComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"]] }); })();


/***/ }),

/***/ "kCQL":
/*!*****************************************************!*\
  !*** ./src/app/components/fifth/fifth.component.ts ***!
  \*****************************************************/
/*! exports provided: FifthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FifthComponent", function() { return FifthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FifthComponent {
    constructor() { }
    ngOnInit() {
    }
}
FifthComponent.ɵfac = function FifthComponent_Factory(t) { return new (t || FifthComponent)(); };
FifthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FifthComponent, selectors: [["app-fifth"]], decls: 15, vars: 0, consts: [[1, "fifth", "col-xl-12", "col-lg-12", "col-md-12", "col-xs-12"], [1, "mt-5"], [1, "work-title"], [1, "recent-projects"], [1, "about-pic", "col-xs-12"], ["src", "assets/images/mahya-1.jpg"], [1, "row"], [1, "col-xl-4", "col-lg-4", "col-md-4", "col-xs-12", "my-pic", "my-4"], ["src", "assets/images/mahya-1.jpg"], [1, "col-xl-8", "col-lg-8", "col-md-8", "col-xs-12", "about", "my-4"], [1, "bio"]], template: function FifthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A few more words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " I started learning programming in college, but as many of you might have experienced, college doesn't teach you what you'll need for a job. So I attended web design classes at the 2nd year, that was the first time I learned HTML, CSS and JavaScript. Less than a year later I found a part time job at a company as a web designer. After about six months on the job, I felt interested in learning one of javascript libraries, so I started learning Reactjs by my self. Three month later I found a full time job at a banking company as reactjs developer. After about three month on the job, I had to switch to angular framework due to the company's policies. As angular development is more suitable for enterprise projects, I learned angular in less than 2 weeks and participated in core banking projects specially in developing process management systems. I always loved JavaScript, and back then I had spent most of my career on UI and client side technologies. I think doing what makes you feel good about yourself and enjoy your life is very precious and valuable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fifth[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #070a17;\n}\n\n@media all and (min-width: 1200px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 100px;\n    color: #efefef;\n    margin-top: 70px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #efefef;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    padding: 30px;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    background-color: #070a17;\n  }\n  .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #9bafbf;\n    font-size: 20px;\n    line-height: 30px;\n    font-family: OpenSansItalic !important;\n  }\n\n  .fifth[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n    background-color: #070a17;\n    padding-top: 90px;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .skills[_ngcontent-%COMP%] {\n    margin-top: 100px;\n  }\n\n  .about-pic[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .my-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media all and (min-width: 900px) and (max-width: 1200px) {\n  .about-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25rem;\n  }\n}\n\n@media all and (min-width: 200px) and (max-width: 1200px) {\n  .work-title[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #efefef;\n    margin-top: 100px;\n    margin-bottom: 60px;\n    font-family: Lato;\n  }\n\n  .recent-projects[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #efefef;\n    font-family: OpenSansItalic;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    background-color: #070a17;\n  }\n  .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #9bafbf;\n    font-family: OpenSansItalic;\n  }\n\n  .values[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n\n  .my-pic[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .about-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10rem;\n  }\n}\n\n@media all and (min-width: 350px) and (max-width: 420px) {\n  .about[_ngcontent-%COMP%] {\n    height: 400px;\n    overflow: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaWZ0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQUNGOztFQUNBO0lBQ0UsZUFBQTtJQUNBLGNBQUE7SUFDQSwyQkFBQTtFQUVGOztFQUFBO0lBQ0UsYUFBQTtFQUdGOztFQURBO0lBQ0UseUJBQUE7RUFJRjtFQUhFO0lBQ0UsY0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLHNDQUFBO0VBS0o7O0VBRkE7SUFDRSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUFLRjs7RUFIQTtJQUNFLGdCQUFBO0VBTUY7O0VBSkE7SUFDRSxpQkFBQTtFQU9GOztFQUxBO0lBQ0UsYUFBQTtFQVFGOztFQUxFO0lBQ0UsV0FBQTtFQVFKO0FBQ0Y7O0FBSkE7RUFFSTtJQUNFLFlBQUE7RUFLSjtBQUNGOztBQURBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VBR0Y7O0VBREE7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLDJCQUFBO0VBSUY7O0VBRkE7SUFDRSxhQUFBO0VBS0Y7O0VBSEE7SUFDRSx5QkFBQTtFQU1GO0VBSkU7SUFDRSxjQUFBO0lBQ0EsMkJBQUE7RUFNSjs7RUFIQTtJQUNFLGlCQUFBO0VBTUY7O0VBSkE7SUFDRSxhQUFBO0VBT0Y7O0VBSkU7SUFDRSxZQUFBO0VBT0o7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGNBQUE7RUFIRjtBQUNGIiwiZmlsZSI6ImZpZnRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZnRoIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzBhMTc7XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC53b3JrLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgfVxyXG4gIC5yZWNlbnQtcHJvamVjdHMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNlZmVmZWY7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWM7XHJcbiAgfVxyXG4gIC5iaW8ge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgLmFib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzBhMTc7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM5YmFmYmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0l0YWxpYyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmlmdGgge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGExNztcclxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xyXG4gIH1cclxuICAudmFsdWVzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgfVxyXG4gIC5hYm91dC1waWMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLm15LXBpY3tcclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5hYm91dC1waWMge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAud29yay10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBjb2xvcjogI2VmZWZlZjtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICAucmVjZW50LXByb2plY3RzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljO1xyXG4gIH1cclxuICAuYmlvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5hYm91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYTE3O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzliYWZiZjtcclxuICAgICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuICAudmFsdWVzIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIH1cclxuICAubXktcGljIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5hYm91dC1waWMge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxOTBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KXtcclxuLy8gIC5maWZ0aCB7XHJcbi8vICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4vLyAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbi8vICAgIG1hcmdpbi1ib3R0b206IDUwMHB4O1xyXG4vLyAgfVxyXG4vL31cclxuLy9cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5hYm91dCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "otQc":
/*!*****************************************************************************!*\
  !*** ./src/app/components/scroll-navigation/scroll-navigation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ScrollNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollNavigationComponent", function() { return ScrollNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



const _c0 = function (a0) { return { "selected": a0 }; };
function ScrollNavigationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollNavigationComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const section_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.scrollToSelectedSection(section_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, section_r1.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.icon);
} }
class ScrollNavigationComponent {
    constructor() {
        this.sections = [
            {
                icon: 'insert_emoticon',
                id: 'first',
                selected: true
            },
            {
                icon: 'diamond',
                id: 'second',
                selected: false
            },
            {
                icon: 'bar_chart',
                id: 'third',
                selected: false
            },
            {
                icon: 'lightbulb',
                id: 'forth',
                selected: false
            },
            {
                icon: 'message',
                id: 'fifth',
                selected: false
            },
        ];
    }
    onWindowScroll() {
        const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
        const max = document.documentElement.scrollHeight;
        if (pos > 976) {
            this.sections.map(s => s.selected = s.id === 'second');
        }
        if (pos > 1952) {
            this.sections.map(s => s.selected = s.id === 'third');
        }
        if (pos > 2980) {
            this.sections.map(s => s.selected = s.id === 'forth');
        }
        if (pos > 3920) {
            this.sections.map(s => s.selected = s.id === 'fifth');
        }
        if (pos < 976 || pos === 976) {
            this.sections.map(s => s.selected = s.id === 'first');
        }
    }
    ngOnChanges(changes) {
        if (changes && changes.next) {
            if (this.next) {
                this.scrollToSelectedSection(this.next);
            }
        }
    }
    ngOnInit() {
        this.scrollToSelectedSection({
            icon: 'insert_emoticon',
            id: 'first',
            selected: true
        });
    }
    scrollToSelectedSection(section) {
        this.sections.map(s => s.selected = s.id === section.id);
        const itemToScroll = document.getElementById(section.id);
        if (itemToScroll) {
            itemToScroll.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
    }
}
ScrollNavigationComponent.ɵfac = function ScrollNavigationComponent_Factory(t) { return new (t || ScrollNavigationComponent)(); };
ScrollNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollNavigationComponent, selectors: [["app-scroll-navigation"]], hostBindings: function ScrollNavigationComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollNavigationComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { next: "next" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [[1, "d-flex", "flex-column", "scroll-navigation"], [1, "logo-container"], ["src", "./assets/images/kisspng-mega-computer-icons-download-mega-5ada696a593fc1.3277512815242632743656.png", "alt", "", 1, "logo"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]], template: function ScrollNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScrollNavigationComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".selected[_ngcontent-%COMP%] {\n  border-right: 3px solid #1A58F0;\n}\n.selected[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #1A58F0 !important;\n}\n.scroll-navigation[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  width: 80px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  text-align: center;\n}\n.scroll-navigation[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.scroll-navigation[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n.scroll-navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 54px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.scroll-navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #afafaf;\n}\n.scroll-navigation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  color: #1A58F0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY3JvbGwtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7QUFBRTtFQUNFLHlCQUFBO0FBRUo7QUFFQTtFQVNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQVBGO0FBTkU7RUFDRSxhQUFBO0FBUUo7QUFQSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBU047QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBRE07RUFDRSxjQUFBO0FBR1IiLCJmaWxlIjoic2Nyb2xsLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMxQTU4RjA7XHJcbiAgLm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiAjMUE1OEYwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsLW5hdmlnYXRpb257XHJcblxyXG4gIC5sb2dvLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAubG9nb3tcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXZ7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgY29sb3I6IHJnYigxNzUsMTc1LDE3NSk7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMxQTU4RjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "tlww":
/*!*****************************************************!*\
  !*** ./src/app/components/first/first.component.ts ***!
  \*****************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class FirstComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // field: { key: string, label: string }[] = [
        //   {key: 'front', label: 'Frontend'},
        //   {key: 'back', label: 'Backend'},
        // ];
        this.field = 'Frontend';
    }
    ngOnInit() {
    }
    scrollToNext(event) {
        this.next.emit({
            icon: 'diamond',
            id: 'second',
            selected: false
        });
    }
}
FirstComponent.ɵfac = function FirstComponent_Factory(t) { return new (t || FirstComponent)(); };
FirstComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstComponent, selectors: [["app-first"]], outputs: { next: "next" }, decls: 172, vars: 1, consts: [[1, "first", "col-xl-12", "col-xs-12", "row"], ["src", "./assets/images/shape-1.png", "alt", "", 1, "shape-1"], [1, "mahya"], ["xmlns", "http://www.w3.org/2000/svg", "data-name", "Layer 1", "viewBox", "0 0 700 550", "id", "female-sitting-at-office-reception"], ["fill", "#ffe3cb", "d", "M433.71487,437.48648c14.83683-4.63823,28.1489-9.37688,44.16355-18.37029,16.51682-9.27644,89.88839-53.42173,99.42961-129.82458a145.73456,145.73456,0,0,0-6.08082-62.23253c-2.9491-8.64645-9.06644-26.01239-24.50588-43.1866-18.89985-21.03635-40.46575-29.18976-53.1113-33.80059a153.2473,153.2473,0,0,0-59.54821-8.84732c-11.46773.37434-31.70974,1.21434-54.71824,11.26686-15.01031,6.5556-24.34154,14.03337-38.09186,25.20893-21.785,17.722-24.652,25.09935-62.76209,61.69384-10.4634,10.04339-19.06419,17.95941-32.19365,25.75674-9.103,5.40517-16.462,8.42732-30.03888,13.94206-33.37147,13.55858-42.873,16.30386-53.793,23.93684-21.23722,14.8551-19.86166,31.05531-20.7747,34.54311a68.59354,68.59354,0,0,0-1.61607,27.36369c2.78476,18.32463,12.65468,30.30366,18.78115,37.55317a103.26268,103.26268,0,0,0,30.03888,24.14067,191.96377,191.96377,0,0,0,24.61545,10.856Z"], ["fill", "#ffe3cb", "d", "M480.81912 424.53472l-.44726-.79687c21.82226-12.25782 93.76562-58.21192 103.33593-134.8877a151.845 151.845 0 00-6.3125-64.61719c-2.71777-7.97168-9.082-26.64062-25.42675-44.82519-20.01563-22.27246-42.86328-30.60547-55.1377-35.082a158.90018 158.90018 0 00-61.85644-9.19239c-10.53418.3418-32.45313 1.05274-56.82911 11.69629l-.36523-.83594c24.53613-10.71386 46.57422-11.42871 57.165-11.77246a159.74381 159.74381 0 0162.19824 9.24707c12.34961 4.50391 35.33692 12.88672 55.50488 35.32911 16.46875 18.32324 22.875 37.11621 25.61036 45.14062a152.79 152.79 0 016.35546 65.02539C574.991 366.063 502.73514 412.2232 480.81912 424.53472zM571.81522 438.48687H115.29764a1 1 0 110-2H571.81522a1 1 0 010 2z"], ["width", "143.455", "height", "320.776", "x", "131.195", "y", "116.649", "fill", "#a3716a"], ["fill", "#935b50", "points", "285.069 111.513 285.069 437.049 273.899 437.049 273.899 125.591 131.946 125.591 131.946 437.049 120.777 437.049 120.777 111.513 285.069 111.513"], ["cx", "262.379", "cy", "268.371", "r", "7.679", "fill", "#ffba55"], ["width", "66.841", "height", "31.68", "x", "169.502", "y", "165.608", "fill", "#e5e1e5"], ["fill", "#fff", "d", "M439.01712,172.28415H484.647a0,0,0,0,1,0,0v7.24443a0,0,0,0,1,0,0h-45.6299a3.11719,3.11719,0,0,1-3.11719-3.11719v-1.01005A3.11719,3.11719,0,0,1,439.01712,172.28415Z"], ["fill", "#f65b2b", "d", "M486.074,179.714a.65638.65638,0,0,1-.65637.65638h-47.3588c-1.80822,0-3.279-1.986-3.279-4.42761,0-2.441,1.47082-4.427,3.279-4.427h47.3588a.65638.65638,0,0,1,.65637.65638v.51665a.65638.65638,0,0,1-.65637.65638h-47.3588c-1.06111,0-1.92421,1.16541-1.92421,2.5976,0,1.4328.8631,2.59821,1.92421,2.59821h47.3588a.65637.65637,0,0,1,.65637.65637Z"], ["fill", "#fff", "d", "M431.898,163.42953h45.6299a0,0,0,0,1,0,0V170.674a0,0,0,0,1,0,0H431.898a3.11719,3.11719,0,0,1-3.11719-3.11719v-1.01005a3.11719,3.11719,0,0,1,3.11719-3.11719Z"], ["fill", "#ffba55", "d", "M478.95488,170.8594a.65638.65638,0,0,1-.65638.65637H430.93971c-1.80822,0-3.279-1.986-3.279-4.4276,0-2.441,1.47083-4.427,3.279-4.427H478.2985a.65638.65638,0,0,1,.65638.65637v.51666a.65638.65638,0,0,1-.65638.65637H430.93971c-1.06112,0-1.92421,1.16541-1.92421,2.59761,0,1.43279.86309,2.5982,1.92421,2.5982H478.2985a.65638.65638,0,0,1,.65638.65638Z"], ["fill", "#fff", "d", "M446.47057,154.57492h45.6299a0,0,0,0,1,0,0v7.24443a0,0,0,0,1,0,0h-45.6299a3.11719,3.11719,0,0,1-3.11719-3.11719V157.6921A3.11719,3.11719,0,0,1,446.47057,154.57492Z"], ["fill", "#f65b2b", "d", "M493.52746,162.00478a.65638.65638,0,0,1-.65638.65638h-47.3588c-1.80821,0-3.279-1.986-3.279-4.42761,0-2.441,1.47083-4.427,3.279-4.427h47.3588a.65638.65638,0,0,1,.65638.65638v.51665a.65638.65638,0,0,1-.65638.65638h-47.3588c-1.06111,0-1.9242,1.16541-1.9242,2.5976,0,1.4328.86309,2.59821,1.9242,2.59821h47.3588a.65638.65638,0,0,1,.65638.65637Z"], ["fill", "#935b50", "d", "M356.5584 181.84914h6.77751a0 0 0 010 0V196.05a1.29949 1.29949 0 01-1.29949 1.29949h-4.17854A1.29949 1.29949 0 01356.5584 196.05V181.84914A0 0 0 01356.5584 181.84914zM469.772 181.84914h6.77751a0 0 0 010 0V196.05a1.29949 1.29949 0 01-1.29949 1.29949h-4.17854A1.29949 1.29949 0 01469.772 196.05V181.84914A0 0 0 01469.772 181.84914z"], ["fill", "#d6694b", "d", "M494.451,183.369H344.37081a1.51965,1.51965,0,0,1,0-3.03929H494.451a1.51965,1.51965,0,1,1,0,3.03929Z"], ["width", "6.292", "height", ".76", "x", "390.504", "y", "176.64", "fill", "#fff"], ["width", "6.292", "height", ".76", "x", "390.504", "y", "173.601", "fill", "#fff"], ["width", "6.292", "height", ".76", "x", "390.504", "y", "146.247", "fill", "#fff"], ["width", "6.292", "height", ".76", "x", "390.504", "y", "143.207", "fill", "#fff"], ["fill", "#e19974", "points", "473.919 153.747 464.734 153.747 461.639 137.481 477.014 137.481 473.919 153.747"], ["fill", "#d6694b", "points", "476.661 139.338 477.014 137.481 461.639 137.481 461.993 139.338 476.661 139.338"], ["width", "2.744", "height", "2.744", "x", "464.096", "y", "146.036", "fill", "#d6694b", "transform", "rotate(45 465.468 147.408)"], ["width", "2.744", "height", "2.744", "x", "467.977", "y", "146.036", "fill", "#d6694b", "transform", "rotate(45 469.349 147.408)"], ["width", "2.744", "height", "2.744", "x", "471.813", "y", "146.036", "fill", "#d6694b", "transform", "rotate(45 473.185 147.408)"], ["fill", "#558031", "d", "M472.90471,123.79215s.80657,11.39488-3.92082,13.80976C468.98389,137.60191,467.34729,133.28173,472.90471,123.79215Z"], ["fill", "#849f4c", "d", "M457.65034,128.68689a16.67052,16.67052,0,0,1,11.33355,8.915S460.47938,134.71343,457.65034,128.68689Z"], ["fill", "#a6b862", "d", "M460.39253,143.61266s3.93315-5.88415,8.59136-6.01075C468.98389,137.60191,468.28262,142.33974,460.39253,143.61266Z"], ["fill", "#849f4c", "d", "M465.24414,125.41636s5.45727,4.98267,3.73975,12.18555C468.98389,137.60191,465.96077,134.39744,465.24414,125.41636Z"], ["fill", "#a6b862", "d", "M468.98389,137.60191s1.91734-7.01857,11.60993-8.81832C480.59382,128.78359,478.41256,135.17412,468.98389,137.60191Z"], ["fill", "#849f4c", "d", "M483.1614,135.76721a15.587,15.587,0,0,0-14.17751,1.8347S478.00029,138.68442,483.1614,135.76721Z"], ["fill", "#558031", "d", "M483.09413 142.865s-3.57078-5.71956-14.11024-5.263zM453.66694 136.67611s9.71216-3.60123 15.44405.75361C469.111 137.42972 463.66841 140.42756 453.66694 136.67611z"], ["fill", "#558031", "d", "M461.63115,126.24842s8.6662,6.12935,7.423,11.35848C469.05417,137.6069,463.04183,132.78628,461.63115,126.24842Z"], ["fill", "#849f4c", "d", "M476.83324,143.7027s-7.14429-1.21969-7.84935-6.10079A9.776,9.776,0,0,1,476.83324,143.7027Z"], ["fill", "#8b9d36", "d", "M353.29115,160.57355c-4.83838,0-15.12451-7.47265-16.35254-8.37792a.79475.79475,0,1,1,.94336-1.2793c4.709,3.46972,13.18164,8.708,15.89453,8.0166a.79478.79478,0,1,1,.39746,1.53906A3.52823,3.52823,0,0,1,353.29115,160.57355Z"], ["fill", "#8b9d36", "d", "M353.215 161.16828a.79556.79556 0 01-.792-.7373l-1.919-26.31055a.7956.7956 0 01.73535-.85059.81037.81037 0 01.85059.73536l1.91895 26.31054a.79561.79561 0 01-.73536.85059C353.254 161.1673 353.23451 161.16828 353.215 161.16828zM361.28725 161.8675a.85141.85141 0 01-.13965-.01172.79557.79557 0 01-.644-.92187c.08741-.49317 2.26856-12.13965 13.34961-17.31055a.79516.79516 0 01.67188 1.44141C364.1852 149.89 362.089 161.099 362.069 161.21125A.79494.79494 0 01361.28725 161.8675z"], ["fill", "#5e7c24", "d", "M360.33681 158.36086c-.64634-1.26583-4.11974-1.26759-6.33773.2876a6.07382 6.07382 0 00-2.13627 2.80327c-.37765.97277-.98208 2.52932-.14236 3.59392a3.15122 3.15122 0 003.48923.64676 17.00687 17.00687 0 002.99086-2.947C359.48725 161.11636 360.85779 159.3812 360.33681 158.36086zM363.04294 158.21716c-.242.63564.23818 1.36429 1.13932 2.73132a13.12293 13.12293 0 003.13322 3.30652 3.73818 3.73818 0 004.41511.50305 3.57631 3.57631 0 001.6377-3.01892 4.55952 4.55952 0 00-2.20736-3.45022C368.24772 156.179 363.62825 156.68069 363.04294 158.21716zM371.588 146.28537c.21229-.36189.76244-.178 1.9939-.35955a22.93227 22.93227 0 003.06214-.93436 11.78485 11.78485 0 012.63485-.64695c.3732.00176 2.48262.01131 3.20431 1.43761.75607 1.49415-.64365 3.29268-.712 3.37827-1.35316 1.6907-3.665 1.60822-4.4151 1.58132a6.81632 6.81632 0 01-4.77112-2.3C372.41615 148.25275 371.21926 146.91361 371.588 146.28537zM352.14774 139.313c-.75163-.37846-.31178-2.783-.07128-4.097a24.38667 24.38667 0 011.353-4.09718c1.24614-3.28312 1.53048-3.63682 1.9939-3.80938a2.98012 2.98012 0 013.27579 1.50936c.82387 1.59418-.43908 3.60953-1.78026 5.75024C355.6308 136.62475 353.12537 139.80511 352.14774 139.313z"], ["fill", "#c4ce6e", "d", "M351.86281,145.63842c.55286-.89965-.46438-2.659-1.49533-3.59393a6.63469,6.63469,0,0,0-3.27578-1.36566c-1.71265-.41278-3.5978-.86709-4.13018-.072-.50765.7581.48544,2.24738.71222,2.58762a6.295,6.295,0,0,0,2.91958,2.22827C348.11492,146.05256,351.14943,146.79915,351.86281,145.63842Z"], ["fill", "#5e7c24", "d", "M351.93409 152.61062c.02029-.71579-1.01453-.86417-3.13322-2.58762-1.68194-1.3682-1.72984-1.844-2.70613-2.15632-1.49456-.4781-3.44558-.02281-3.77416.93436-.08036.23437-.069.51417 1.2106 2.58762a9.63142 9.63142 0 001.9939 2.73132 4.67832 4.67832 0 003.56052.35935C349.9794 154.26778 351.90666 153.58066 351.93409 152.61062zM352.71281 144.33777c-.69792-.79026.00434-2.7.8606-3.8a6.66054 6.66054 0 012.99423-1.91406c1.61678-.704 3.39641-1.47884 4.05636-.788.62927.65865-.09522 2.29816-.26064 2.67271a6.32456 6.32456 0 01-2.49634 2.702C356.47542 144.095 353.61336 145.35734 352.71281 144.33777zM353.22923 151.76564c-.142-.70159.85214-1.02743 2.64556-3.09306 1.42371-1.63983 1.38983-2.11681 2.29833-2.594 1.39081-.73047 3.39033-.62072 3.87713.26514.1191.21692.15556.49453-.75159 2.75924a9.67275 9.67275 0 01-1.49874 3.0368 4.68517 4.68517 0 01-3.44621.97219C355.43719 153.05872 353.42156 152.71646 353.22923 151.76564zM341.8222 155.48564c-.09987-.77993-1.38426-1.21045-2.91958-1.725a5.80653 5.80653 0 00-3.77416-.43131c-.22736.07117-2.24986.70467-2.4212 2.22827-.15377 1.36663 1.30429 2.36436 1.42424 2.44391a4.30772 4.30772 0 003.34688.35936C339.48078 157.97557 341.9692 156.63292 341.8222 155.48564z"], ["fill", "#c4ce6e", "d", "M347.59027,159.07956c-1.07229-.76511-3.09614.5327-4.05909,1.15021a8.51251,8.51251,0,0,0-2.49229,2.44372c-.74177,1.11316-1.44762,2.17269-1.06823,3.09087.54551,1.31984,2.90045,1.30014,3.2045,1.29371a5.12153,5.12153,0,0,0,3.48924-1.58131,5.44783,5.44783,0,0,0,1.35316-2.73132C348.14718,162.14743,348.64846,159.83473,347.59027,159.07956Z"], ["fill", "#8b9d36", "d", "M339.045 151.748c-.60327-.87723-.392-1.499-.64094-3.01892-.39581-2.41623-1.23784-2.72566-.92567-3.95328.24571-.96614 1.07827-1.9974 1.9939-2.01261 1.28246-.02145 2.10749 1.96075 2.27864 2.372.62239 1.49513.39291 2.79859 0 5.03153-.25653 1.45769-.45221 2.50124-1.068 2.65957C340.08753 152.97933 339.37879 152.23333 339.045 151.748zM366.31853 151.53236c.19027-.53835 1.19882-.61985 2.4212-.71871 1.5272-.12342 2.67193-.216 3.77416.50306.16961.11056 1.95412 1.30834 1.6377 2.73152-.24726 1.112-1.629 1.69537-2.63465 1.725-1.09122.03217-1.83319-.58475-3.2045-1.725C367.232 153.14994 366.08421 152.1953 366.31853 151.53236z"], ["fill", "#5e7c24", "d", "M368.09879,147.43538c-.27411-.06239-.29111-.44417-.64094-1.50956-.78176-2.38015-1.39373-2.59639-1.28169-3.59392.124-1.10361,1.03482-2.27877,1.85135-2.22827.89013.055,1.42251,1.55109,1.63789,2.15651a4.663,4.663,0,0,1,.28493,2.22827C369.75059,146.03365,368.69317,147.57089,368.09879,147.43538Z"], ["fill", "#8b9d36", "d", "M350.43857,137.08491c-.41551.58924-2.7747-.10861-4.34383-1.50956-.40063-.3576-2.17374-1.94086-1.709-3.45022a1.77814,1.77814,0,0,1,1.42425-1.29371c.66528-.01638,1.09779.65943,2.20755,2.3C350.29948,136.50542,350.62073,136.82656,350.43857,137.08491Z"], ["fill", "#c4ce6e", "d", "M363.399,152.97c-1.195.32523-2.75847-2.19843-3.13322-2.80327a9.2731,9.2731,0,0,1-1.42425-5.17524c.05119-1.143.14449-3.227,1.353-3.73762,1.15786-.48921,2.72409.72572,3.48924,1.65306,1.50982,1.82953,1.2697,4.19642,1.06823,6.18155C364.59506,150.63505,364.38528,152.70148,363.399,152.97Z"], ["fill", "#e19974", "d", "M363.57218,180.43495h-11.7418l-3.77746-20.0406a.79655.79655,0,0,1,.77729-.94792h17.74214a.79653.79653,0,0,1,.77728.94792Z"], ["fill", "#d6694b", "d", "M367.07673,161.84238l.27295-1.448a.79655.79655,0,0,0-.77728-.94793H348.8302a.79654.79654,0,0,0-.77728.94793l.273,1.448Z"], ["fill", "#d6694b", "points", "352.769 174.759 350.289 172.256 352.769 169.752 355.249 172.256 352.769 174.759"], ["fill", "#d6694b", "points", "357.73 174.759 355.249 172.256 357.73 169.752 360.21 172.256 357.73 174.759"], ["fill", "#d6694b", "points", "362.633 174.759 360.153 172.256 362.633 169.752 365.114 172.256 362.633 174.759"], ["fill", "#7ca1b1", "d", "M405.52868,156.99266h39.3528a0,0,0,0,1,0,0v6.18771a0,0,0,0,1,0,0h-39.3528a.64316.64316,0,0,1-.64316-.64316v-4.9014a.64316.64316,0,0,1,.64316-.64316Z", "transform", "scale(-1) rotate(-82.24 -183.382 486.71)"], ["width", ".747", "height", "6.187", "x", "426.798", "y", "140.199", "fill", "#fff", "transform", "rotate(-82.245 427.172 143.293)"], ["width", ".747", "height", "6.188", "x", "426.395", "y", "143.161", "fill", "#fff", "transform", "rotate(-82.245 426.768 146.255)"], ["width", ".747", "height", "6.188", "x", "422.762", "y", "169.818", "fill", "#fff", "transform", "rotate(-82.236 423.136 172.911)"], ["width", ".747", "height", "6.188", "x", "422.359", "y", "172.779", "fill", "#fff", "transform", "rotate(-82.236 422.732 175.873)"], ["fill", "#f65b2b", "d", "M410.78927,140.9663l0,39.3528h-6.18772l0-39.35279a.64316.64316,0,0,1,.64316-.64316h4.9014A.64317.64317,0,0,1,410.78927,140.9663Z"], ["width", "6.188", "height", ".748", "x", "404.602", "y", "176.896", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "404.602", "y", "173.907", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "404.602", "y", "147.003", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "404.602", "y", "144.015", "fill", "#fff"], ["fill", "#ffba55", "d", "M410.78179,180.3191V142.75984a.64315.64315,0,0,1,.64315-.64315h7.05365a.64315.64315,0,0,1,.64316.64315V180.3191Z"], ["width", "8.34", "height", ".748", "x", "410.782", "y", "175.618", "fill", "#fff"], ["width", "17.846", "height", "5.381", "x", "406.029", "y", "150.501", "fill", "#fff", "transform", "rotate(90 414.952 153.192)"], ["fill", "#ffba55", "d", "M390.08525,140.9663l0,39.3528H396.273l0-39.35279a.64315.64315,0,0,0-.64315-.64316h-4.9014A.64317.64317,0,0,0,390.08525,140.9663Z"], ["width", "6.188", "height", ".748", "x", "390.085", "y", "176.896", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "390.085", "y", "173.907", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "390.085", "y", "147.003", "fill", "#fff"], ["width", "6.188", "height", ".748", "x", "390.085", "y", "144.015", "fill", "#fff"], ["fill", "#f65b2b", "d", "M390.09274,180.3191V142.75984a.64315.64315,0,0,0-.64316-.64315h-7.05365a.64316.64316,0,0,0-.64316.64315V180.3191Z"], ["width", "8.34", "height", ".748", "x", "381.753", "y", "175.618", "fill", "#fff"], ["width", "17.846", "height", "5.381", "x", "377", "y", "150.501", "fill", "#fff", "transform", "rotate(90 385.923 153.192)"], ["fill", "#7ca1b1", "d", "M381.97921,157.04791h37.55926a0,0,0,0,1,0,0v8.34a0,0,0,0,1,0,0H381.97921a.64316.64316,0,0,1-.64316-.64316v-7.05365a.64316.64316,0,0,1,.64316-.64316Z", "transform", "rotate(90 400.437 161.218)"], ["width", "8.34", "height", ".748", "x", "396.267", "y", "175.618", "fill", "#fff"], ["width", "17.846", "height", "5.381", "x", "391.514", "y", "150.501", "fill", "#fff", "transform", "rotate(90 400.437 153.192)"], ["fill", "#935b50", "points", "445.478 363.553 385.215 363.553 385.215 329.908 445.369 329.908 445.478 363.553"], ["fill", "#d6694b", "d", "M451.0217,326.33119H379.09091c-4.00466,0-5.25108-3.24643-5.25108-7.25109V261.79c0-4.00467,1.24642-7.25109,5.25108-7.25109H451.0217c4.00467,0,5.25109,3.24642,5.25109,7.25109V319.0801C456.27279,323.08476,455.02637,326.33119,451.0217,326.33119Z"], ["width", "96.875", "height", "9.958", "x", "366.619", "y", "353.595", "fill", "#d6694b", "rx", "1.611"], ["width", "83.823", "height", "6.284", "x", "373", "y", "363.553", "fill", "#935b50", "rx", "1.611"], ["width", "9.281", "height", "32.649", "x", "410.126", "y", "369.838", "fill", "#d6694b"], ["fill", "#935b50", "points", "419.407 407.463 478.919 428.43 478.919 420.889 419.407 402.487 410.126 402.487 350.565 420.889 350.565 428.43 410.126 407.463 419.407 407.463"], ["width", "13.632", "height", "9.861", "x", "407.95", "y", "400.167", "fill", "#e19974", "rx", "1.611"], ["width", "8.846", "height", "15.662", "x", "342.417", "y", "420.729", "fill", "#d6694b", "rx", "2.014"], ["width", "8.846", "height", "15.662", "x", "478.221", "y", "420.729", "fill", "#d6694b", "rx", "2.014", "transform", "rotate(-180 482.644 428.56)"], ["fill", "#f9977a", "d", "M337.46637,407.83907l-3.5076,10.08292a56.78058,56.78058,0,0,1-27.13756,12.87728s-4.99927,2.2956-4.99927,5.91961h49.28629V417.922l1.5209-9.645Z"], ["fill", "#d6694b", "d", "M302.62791,434.26506h47.94886a1.22481,1.22481,0,0,1,1.2248,1.22481v.00421a1.22481,1.22481,0,0,1-1.22479,1.22481l-49.4317.00013S299.73363,435.23137,302.62791,434.26506Z"], ["fill", "#d6694b", "d", "M316.85767 434.87891s.46581-2.52876-2.05162-6.02863a5.13884 5.13884 0 014.34287-1.55433 15.50759 15.50759 0 011.39979 3.06715c.60837 1.70539 1.03376 3.75442.30171 5.129zM328.16385 422.12789s4.798 6.92822 2.30252 12.81757h4.69152s1.90338-9.75537-3.14725-15.18466C332.01064 419.7608 328.86861 419.8425 328.16385 422.12789z"], ["fill", "#f9977a", "d", "M404.986,399.25344l-.24915,10.67269S395.68558,423.503,380.947,431.11256c0,0-4.05533,3.7171-2.94483,7.16677l46.91529-15.10281-5.75994-17.89264-1.50778-9.647Z"], ["fill", "#d6694b", "d", "M378.01742,435.69658l45.64219-14.693a1.22481,1.22481,0,0,1,1.5412.79056l.00129.004a1.22479,1.22479,0,0,1-.79056,1.54119l-47.05364,15.1475S375.55848,437.50329,378.01742,435.69658Z"], ["fill", "#d6694b", "d", "M391.75073 431.92047s-.33149-2.54985-3.80027-5.10994a5.1388 5.1388 0 013.65765-2.81034 15.50824 15.50824 0 012.27232 2.49066c1.10168 1.43693 2.13449 3.257 1.85886 4.78976zM399.42093 416.529s5.875 4.91393 5.30423 11.28466l4.46582-1.43762s-.36231-9.65859-6.83367-13.279C402.35731 413.09705 399.39147 414.13763 399.42093 416.529z"], ["fill", "#f9977a", "d", "M479.40065,268.13754s10.136-6.5679,9.67446-8.33783-5.72483.35865-5.72483.35865l-.9692-3.71684,5.95248-10.63664a1.19677,1.19677,0,0,0-.534-1.66692h0a1.195,1.195,0,0,0-1.19471.1005c-2.476,1.72569-14.3201,11.7712-14.69986,20.83246Z"], ["fill", "#160b07", "d", "M408.9585,266.67015a59.40957,59.40957,0,0,1-.98975,6.54c-.23975,1.17993-.52,2.40991-.85986,3.65991-1.18018,4.41015-4.73,17.71-15.5503,28.68017V294.90013a54.73311,54.73311,0,0,1-8.2998,10.99c1.31006-.02979,2.60986-.04981,3.91016-.06983l4.17968-.06c-.08984.08984-.17968.17993-.27.26a49.48906,49.48906,0,0,1-6.09961,5.15991c-4.96,3.56006-14.97021,9.3999-22.15039,9.21a8.21461,8.21461,0,0,1-5.1997-1.75c-3.41016-2.85987-3.69-8.92993-2.49024-12.92993,1.52-5.07007,5.7002-7.78,10.2002-10.68994a30.86559,30.86559,0,0,1,3.4497-1.97c3.89014-1.8601,5.38038-1.29,7.74024-3.75,1.33008-1.39013,2.37988-3.18994,3.83008-14.68994.21-1.62011.41992-3.42016.63965-5.45019,1.0205-9.33008.81-10.12989,1.74023-13.67993,1.03027-3.94,2.48-9.22,6.71973-14.16993,1.31054-1.53,4.60009-5.38012,8.08007-6.95a6.00687,6.00687,0,0,1,4.1001-.51025,5.30862,5.30862,0,0,1,2.75,1.97021,9.87773,9.87773,0,0,1,1,1.57984c.06983.14013.14014.28.21.42993.04.09009.08008.17017.12012.26025a18.55328,18.55328,0,0,1,.68018,1.73975,43.07171,43.07171,0,0,1,1.56982,7.05029c.25,1.68994.4502,3.34986.62988,4.86988.2002,1.66992.43018,3.72.5503,6.11987a.49462.49462,0,0,1,0,.12012A59.07921,59.07921,0,0,1,408.9585,266.67015Z"], ["fill", "#160b07", "d", "M404.31244,256.32531c3.47476,3.64992,18.037.654,12.66309-2.15787,1.49508-.23355,2.7077-.35944,3.839-.654,7.51551-1.95637,15.35916-12.39371,12.96266-20.5277-2.08865-7.08918-11.19918-9.86069-13.41569-10.53511a17.26361,17.26361,0,0,0-16.59261,2.91117,19.67841,19.67841,0,0,0-6.0872,8.59571C396.38312,237.26576,396.39048,248.004,404.31244,256.32531Z"], ["fill", "#f9977a", "d", "M424.40189,259.58031l2.91675,2.20029-3.429,12.15147-17.87249-.815-5.02509-12.72942s10.26989-.94951,12.133-7.08172Z"], ["fill", "#dd765e", "d", "M423.6228,254.73372s-4.85984,3.55052-10.43928-.92033c0,0,1.84948,7.82077,11.21837,5.76692A5.57071,5.57071,0,0,1,423.6228,254.73372Z"], ["fill", "#f9977a", "d", "M428.5782,237.42745c-1.825-8.96726-8.2722-15.22559-14.40026-13.97845-4.7298.9626-7.88419,6.11632-8.23965,12.54057a1.748,1.748,0,0,0-1.46917-.21324c-1.331.49463-1.6113,3.045-.626,5.69622.83187,2.2385,2.29905,3.82726,3.53712,3.97189,2.58513,7.03059,8.11356,11.555,13.40651,10.47778C426.91484,254.675,430.40319,246.39466,428.5782,237.42745Z"], ["fill", "#dd765e", "d", "M421.19805,236.703a5.09423,5.09423,0,0,0-.0176,3.24235,11.77569,11.77569,0,0,0,1.33122,3.00052c.2977.46961.75871.84127.68828,1.27172a1.85191,1.85191,0,0,1-.79371,1.17388,3.99628,3.99628,0,0,1-3.03665.40637,3.72294,3.72294,0,0,0,3.22506-.13185,2.06328,2.06328,0,0,0,.9973-1.41065,1.26043,1.26043,0,0,0-.258-.89167l-.46465-.66075a12.9342,12.9342,0,0,1-1.37534-2.86493A5.80584,5.80584,0,0,1,421.19805,236.703Z"], ["fill", "#160b07", "d", "M411.62528 238.92893a.43265.43265 0 01-.22973-.70145c.10836-.12772 2.6951-3.11507 6.20416-2.49837a.43274.43274 0 11-.14971.85243c-3.02638-.53176-5.37167 2.17906-5.3951 2.20653A.43285.43285 0 01411.62528 238.92893zM422.98979 235.72958a.43287.43287 0 01-.05408-.8263 8.35157 8.35157 0 015.232-.08247.43279.43279 0 01-.288.81627 7.55417 7.55417 0 00-4.63765.07611A.433.433 0 01422.98979 235.72958zM412.53943 240.82166a7.84875 7.84875 0 012.86887-1.45518 3.80272 3.80272 0 011.55647-.02874 5.20423 5.20423 0 011.51174.58254 3.36459 3.36459 0 00-1.42978-.90533 3.28431 3.28431 0 00-1.73132-.071 4.53415 4.53415 0 00-1.56578.70507A4.82445 4.82445 0 00412.53943 240.82166z"], ["cx", "416.44", "cy", "240.029", "r", ".971", "fill", "#160b07"], ["cx", "425.677", "cy", "238.875", "r", ".971", "fill", "#160b07"], ["fill", "#160b07", "d", "M422.44408,239.87059a7.84891,7.84891,0,0,1,2.86887-1.45518,3.80289,3.80289,0,0,1,1.55647-.02873,5.2042,5.2042,0,0,1,1.51174.58253,3.36472,3.36472,0,0,0-1.42978-.90532,3.28329,3.28329,0,0,0-1.73132-.071,4.53418,4.53418,0,0,0-1.56578.70508A4.82459,4.82459,0,0,0,422.44408,239.87059Z"], ["fill", "#dd765e", "d", "M404.31247,238.87784a4.23331,4.23331,0,0,1,.68666-.86161.61805.61805,0,0,1,.79534-.10483,2.90437,2.90437,0,0,1,.72632.73229c.23273.28768.42236.6131.6729.91494a4.33827,4.33827,0,0,0-.39241-1.09424,2.23572,2.23572,0,0,0-.7925-.9288.90741.90741,0,0,0-.68989-.12072,1.00881,1.00881,0,0,0-.55735.37035A2.18265,2.18265,0,0,0,404.31247,238.87784Z"], ["fill", "#dd765e", "d", "M405.90011,241.81481a2.14078,2.14078,0,0,0,.44866-1.01734,3.71636,3.71636,0,0,0,.03947-1.11691,4.72775,4.72775,0,0,0-.2469-1.07987l-.20946-.50958c-.0939-.16049-.17323-.32471-.27827-.47751.09431.7326.2384,1.41815.30438,2.11189a9.16744,9.16744,0,0,1,.06111,1.03778A4.56622,4.56622,0,0,1,405.90011,241.81481Z"], ["cx", "405.406", "cy", "244.213", "r", "1.927", "fill", "#ffcb33"], ["fill", "#dd2f22", "d", "M416.56019,249.217s5.40571,3.38583,8.47319-.36619Z"], ["fill", "#160b07", "d", "M418.97915,224.91724c-1.34756.32313-2.09306,1.35642-3.58408,3.42293-2.88013,3.99183-4.5863,9.4811-6.57965,10.45409a1.22969,1.22969,0,0,1-.72881.148c-.77969-.114-1.09385-1.12382-1.9606-2.54476-.655-1.07383-.94-1.25849-1.32179-1.86008a8.68081,8.68081,0,0,1-.39129-7.83134,9.19731,9.19731,0,0,1,5.05728-4.46257c4.54132-1.94482,8.93048-.246,10.04363.18482,6.6876,2.58842,9.54279,9.20922,9.30644,9.404C428.54243,232.06139,423.47051,223.84027,418.97915,224.91724Z"], ["fill", "#8b9d36", "d", "M437.25494,315.78021c4.69363,6.6794,6.08259,16.16629,6.27041,24.15418A14.83535,14.83535,0,0,1,428.71029,355.154H413.85356l7.0163,54.99808H402.24234L387.987,355.19538h-12.65l-21.65844,53.44745H335.10606c4.61229-32.286,14.5274-60.153,20.2344-74.33385a15.93,15.93,0,0,1,14.78838-9.98541h19.209l3.7145-7.05755Z"], ["fill", "#f73c4f", "d", "M480.769,268.20018l-.84033-.40992L472.019,263.9702l-.21045-.1001a1.9921,1.9921,0,0,0-2.62988.8501l-12.47021,23.25c-20.75-30.37012-29.38965-26.18995-29.38965-26.18995-5.48,9.2-12.82031,7.93995-18.36035,4.8899a33.73567,33.73567,0,0,1-7.96973-6.28c-6.00977-.92993-13.6499,5.3-20.62988,14.22021a112.9393,112.9393,0,0,0-11.57032,18.43994,89.48969,89.48969,0,0,0-5.81982,14.27979c-1.73975,5.8501-1.43018,10.05029-.14014,13.06006a11.27814,11.27814,0,0,0,1.23,2.16015,8.963,8.963,0,0,0,2.3003,2.22,9.73064,9.73064,0,0,0,11.37011-.45,9.41681,9.41681,0,0,0,1.04981-.95019l14.27-6.09985,8.60986-.29.24024-.01,35.35986-1.18995.91016-15.45019.00976-.23975.14014.09986,14.27,10.59008a9.19465,9.19465,0,0,0,13.96-3.82006l15.19971-36.18994A1.99542,1.99542,0,0,0,480.769,268.20018Zm-89.21045,26.7v10.65014q-.10473.10474-.21.21l-4.17968.06c-1.3003.02-2.6001.04-3.91016.06983A54.73311,54.73311,0,0,0,391.55859,294.90013Z"], ["fill", "#5e7c24", "d", "M387.987 355.19535a54.52207 54.52207 0 01-1.51957-18.057 24.44064 24.44064 0 012.43427-8.75232 13.47515 13.47515 0 016.51047-6.2373 19.26366 19.26366 0 018.98617-1.2732c3.03085.091 6.05876.27161 9.08179.50818 3.02112.25989 6.03776.59 9.03229 1.07471a42.9834 42.9834 0 018.79928 2.23657 43.23859 43.23859 0 00-8.82672-2.06445c-2.99165-.46363-6.00555-.773-9.02353-1.01209-3.02014-.21582-6.04458-.376-9.0721-.44629a26.155 26.155 0 00-4.51338.122 16.484 16.484 0 00-4.32823 1.16321 13.16345 13.16345 0 00-6.3977 6.0603 24.19513 24.19513 0 00-2.45879 8.64514 47.76626 47.76626 0 00-.05544 9.05713A61.73543 61.73543 0 00387.987 355.19535zM375.337 355.19535a20.44693 20.44693 0 011.04065-3.236 13.24131 13.24131 0 011.63814-2.98072c-.46083 1.038-.90265 2.06482-1.31943 3.1128C376.24658 353.1243 375.842 354.17533 375.337 355.19535zM413.85356 355.154a34.89724 34.89724 0 01-.74459-3.495 34.45778 34.45778 0 01-.4041-3.55066 34.46616 34.46616 0 01.74459 3.49512A34.886 34.886 0 01413.85356 355.154zM355.80157 341.10428a8.92323 8.92323 0 003.09529-.04907 6.17006 6.17006 0 002.75517-1.26636 7.15119 7.15119 0 001.88872-2.38452 14.926 14.926 0 00.60918-1.42688l.43788-1.50427c-.08086.51623-.1763 1.03418-.27565 1.55273a14.5751 14.5751 0 01-.53212 1.49378 7.03681 7.03681 0 01-1.91344 2.5393A6.76164 6.76164 0 01355.80157 341.10428z"], ["fill", "#5e7c24", "d", "M393.39521,343.04142a8.92294,8.92294,0,0,0,3.09528-.04908,6.16994,6.16994,0,0,0,2.75517-1.26635,7.15139,7.15139,0,0,0,1.88872-2.38452,14.92714,14.92714,0,0,0,.60919-1.42688l.43787-1.5044c-.08086.51636-.1763,1.03418-.27565,1.55286a14.57816,14.57816,0,0,1-.53212,1.49377,7.03685,7.03685,0,0,1-1.91344,2.53931A6.76163,6.76163,0,0,1,393.39521,343.04142Z"], ["fill", "#b02336", "d", "M439.5765,286.85355a17.06106,17.06106,0,0,1,.5176,3.33728,22.52979,22.52979,0,0,1-.1326,3.38477,28.24991,28.24991,0,0,1-1.619,6.57617l-.01126.02978-.02068.02063a9.77346,9.77346,0,0,1-2.71652,1.89746,8.41478,8.41478,0,0,1-6.44683.34668,10.61377,10.61377,0,0,1-1.50257-.65881c-.47834-.26233-.92552-.57959-1.38743-.86536.47748.26282.9376.5553,1.425.79126a10.48676,10.48676,0,0,0,1.51591.57471,8.19233,8.19233,0,0,0,3.18115.36609,9.086,9.086,0,0,0,5.67708-2.68335l-.03173.05a29.61,29.61,0,0,0,1.67147-6.47913A19.60736,19.60736,0,0,0,439.5765,286.85355Z"], ["fill", "#5e7c24", "d", "M356.43373 409.143H332.01087a.5.5 0 010-1h24.42286a.5.5 0 010 1zM423.7433 410.65226H399.32044a.5.5 0 010-1H423.7433a.5.5 0 010 1z"], ["fill", "#b02336", "d", "M406.3999,302.07249a11.42421,11.42421,0,0,1-2.94922.40381c-.1582.00293-.31591-.00586-.47363-.01172-.002.11035.00049.22437-.002.33447.15869.00879.31738.02076.47607.02222a10.62446,10.62446,0,0,0,3.02246-.49341,13.94762,13.94762,0,0,0,1.42432-.55151c.45361-.22949.895-.48316,1.33154-.73584A18.44308,18.44308,0,0,1,406.3999,302.07249Z"], ["fill", "#f9977a", "d", "M401.66938,318.41755s12.03991,5.91325,13.31467,4.60152-3.27272-4.7108-3.27272-4.7108l2.677-2.75462,12.18172-.41938a1.19678,1.19678,0,0,0,1.14913-1.32032h0a1.195,1.195,0,0,0-.70493-.9698c-2.75879-1.2237-16.13024-7.29429-24.07734-2.92458Z"], ["fill", "#b02336", "d", "M403.32861,307.76024c-.12988,1.18994-.33984,2.27-.50976,3.40991l-.91992,5.8-.15039.97c-.16993.97-.27979,1.94018-.48975,2.92016l-.06006.29981c-.00977.06006-.02978.12011-.04.18017a2.08675,2.08675,0,0,1-1.23,1.22,4.8474,4.8474,0,0,1-1.73.10987l-2.93994-.07984-.72022-.02-3.18994-.09008,3.34033.01h.79l2.71973.01a5.03449,5.03449,0,0,0,1.66016-.11011,1.88989,1.88989,0,0,0,1.10986-1.11987c.01025-.03.01025-.06006.02-.09009.02-.1001.04-.2.06006-.31006.19971-.96.2998-1.98975.47021-2.96l.13965-.92993.87988-5.84986c.15039-1.12011.36036-2.28027.48047-3.3601a1.8901,1.8901,0,0,0-.65039-1.3899,1.99,1.99,0,0,0-1.48974-.43017l-9.32032.07007h-.48l-4.5498.04-3.46.01978.01172-.012c-3.20411.01782-6.41016.03686-9.61182.02221q4.905-.1201,9.79-.20019c1.31006-.02979,2.60986-.04981,3.91016-.06983l4.17968-.06.21-.01,9.32032-.1399a2.26311,2.26311,0,0,1,1.6997.52A2.16021,2.16021,0,0,1,403.32861,307.76024Z"], ["fill", "#fec165", "d", "M557.06068,314.805a.56578.56578,0,0,1-.06982-.00488.43738.43738,0,0,1-.36182-.501c.106-.66113,10.26319-66.50293-18.86035-96.74805-11.668-12.11718-28.16064-17.01562-49.01465-14.56054v18.55078a.43677.43677,0,0,1-.87353,0V202.60285a.43685.43685,0,0,1,.38428-.43359c21.32763-2.59571,38.19482,2.376,50.13427,14.77734,29.42481,30.55957,19.19922,96.8252,19.09229,97.49121A.436.436,0,0,1,557.06068,314.805Z"], ["fill", "#fec165", "d", "M466.71522,241.29959h44.75037a22.53075,22.53075,0,0,0-44.75037,0Z"], ["fill", "#fec165", "d", "M532.89905,313.04314h27.66863a0,0,0,0,1,0,0v.997a.87353.87353,0,0,1-.87353.87353H533.77258a.87353.87353,0,0,1-.87353-.87353v-.997A0,0,0,0,1,532.89905,313.04314Z", "transform", "rotate(-180 546.733 313.978)"], ["fill", "#e19974", "points", "528.685 314.929 512.72 314.929 507.341 286.658 534.063 286.658 528.685 314.929"], ["fill", "#d6694b", "points", "533.449 289.885 534.064 286.658 507.341 286.658 507.955 289.885 533.449 289.885"], ["width", "4.769", "height", "4.769", "x", "511.612", "y", "301.527", "fill", "#d6694b", "transform", "rotate(45 513.996 303.912)"], ["width", "4.769", "height", "4.769", "x", "518.356", "y", "301.527", "fill", "#d6694b", "transform", "rotate(45 520.741 303.912)"], ["width", "4.769", "height", "4.769", "x", "525.024", "y", "301.527", "fill", "#d6694b", "transform", "rotate(45 527.408 303.912)"], ["fill", "#558031", "d", "M526.921,262.86494s1.40188,19.80513-6.81465,24.00238C520.10635,286.86732,517.2618,279.35851,526.921,262.86494Z"], ["fill", "#849f4c", "d", "M500.40781,271.37236s13.44186,2.31927,19.69854,15.495C520.10635,286.86732,505.32489,281.84693,500.40781,271.37236Z"], ["fill", "#a6b862", "d", "M505.17394,297.31443s6.8361-10.22707,14.93241-10.44711C520.10635,286.86732,518.88749,295.102,505.17394,297.31443Z"], ["fill", "#849f4c", "d", "M513.60638,265.68793s9.48513,8.66025,6.5,21.17939C520.10635,286.86732,514.85194,281.29771,513.60638,265.68793Z"], ["fill", "#a6b862", "d", "M520.10635,286.86732s3.33247-12.19879,20.17889-15.32689C540.28524,271.54043,536.49405,282.64763,520.10635,286.86732Z"], ["fill", "#849f4c", "d", "M544.74789,283.67846s-12.85334-5.29889-24.64154,3.18886C520.10635,286.86732,535.7775,288.74878,544.74789,283.67846Z"], ["fill", "#558031", "d", "M544.631 296.01486s-6.20627-9.941-24.52461-9.14754zM493.48437 285.25821s16.88044-6.25921 26.84288 1.30982C520.32725 286.568 510.86765 291.77849 493.48437 285.25821z"], ["fill", "#558031", "d", "M507.32675,267.13412s15.06248,10.65325,12.90175,19.74185C520.2285,286.876,509.77862,278.49739,507.32675,267.13412Z"], ["fill", "#849f4c", "d", "M533.74909,297.47092s-12.41731-2.11991-13.64274-10.6036C520.10635,286.86732,529.17932,287.31669,533.74909,297.47092Z"], ["fill", "#f65b2b", "d", "M491.88332,310.93852v.374a3.59762,3.59762,0,0,1-3.59631,3.59632H477.48369a3.59763,3.59763,0,0,1-3.59631-3.59632V296.75466a3.59763,3.59763,0,0,1,3.59631-3.59631H488.287a3.59762,3.59762,0,0,1,3.59631,3.59631v14.18386Z"], ["fill", "#4f66d0", "d", "M497.83869,296.86963h-5.95534v2.15779h4.87645v9.75324h-4.87645v2.15779h5.95534a1.07738,1.07738,0,0,0,1.07889-1.0789v-11.911A1.07749,1.07749,0,0,0,497.83869,296.86963Z"], ["width", "4.47", "height", "4.47", "x", "482.885", "y", "300.604", "fill", "#ffba55", "rx", ".719"], ["width", "1.013", "height", "7.446", "x", "484.614", "y", "293.159", "fill", "#e5caf3"], ["width", "9.137", "height", "114.936", "x", "543.051", "y", "321.921", "fill", "#935b50"], ["width", "274.582", "height", "7.008", "x", "295.1", "y", "314.914", "fill", "#935b50", "rx", "1.575"], ["width", "9.137", "height", "114.936", "x", "313.322", "y", "321.921", "fill", "#935b50"], ["fill", "#c38f86", "d", "M306.03326,321.92141H559.37319a0,0,0,0,1,0,0v18.15947a3.15046,3.15046,0,0,1-3.15046,3.15046h-247.039a3.15046,3.15046,0,0,1-3.15046-3.15046V321.92141A0,0,0,0,1,306.03326,321.92141Z"], ["fill", "#e5e1e5", "d", "M358.35609 338.01984a4.96815 4.96815 0 01-.62109.1084 6.575 6.575 0 01-.83691.05371 3.74365 3.74365 0 01-.72852-.0625 1.2888 1.2888 0 01-.53125-.22558.9734.9734 0 01-.32422-.4502 2.18486 2.18486 0 01-.10742-.75586V333.8802h-3.45606v4.13964a5.03775 5.03775 0 01-.62109.1084 6.58635 6.58635 0 01-.83691.05371 3.7543 3.7543 0 01-.7295-.0625 1.29454 1.29454 0 01-.53125-.22558.965.965 0 01-.32324-.4502 2.18233 2.18233 0 01-.1084-.75586v-9.5039q.19776-.03516.62989-.09864a5.75212 5.75212 0 01.82812-.06347 3.75639 3.75639 0 01.72949.06347 1.30258 1.30258 0 01.53028.22461.97659.97659 0 01.32422.4502 2.19 2.19 0 01.10839.75586v2.87988h3.45606v-4.21191q.19776-.03516.62988-.09864a5.74189 5.74189 0 01.82813-.06347 3.74587 3.74587 0 01.72851.06347 1.30691 1.30691 0 01.53125.22461.9834.9834 0 01.32422.4502 2.2161 2.2161 0 01.10742.75586zM360.1559 332.62043a6.51155 6.51155 0 01.4414-2.48438 5.01129 5.01129 0 013.00586-2.916 6.83153 6.83153 0 014.48145 0 5.21594 5.21594 0 011.80957 1.10742 5.08393 5.08393 0 011.21484 1.80859 6.53016 6.53016 0 01.44141 2.48438 6.72437 6.72437 0 01-.43262 2.49316 5.02764 5.02764 0 01-1.19726 1.81739 5.09781 5.09781 0 01-1.8086 1.10742 6.6167 6.6167 0 01-2.26758.37793 6.46045 6.46045 0 01-2.26855-.3877 5.04889 5.04889 0 01-1.7998-1.125 5.1956 5.1956 0 01-1.18848-1.81738A6.615 6.615 0 01360.1559 332.62043zm3.24023 0a3.79225 3.79225 0 00.666 2.44727 2.384 2.384 0 003.582 0 4.82628 4.82628 0 00.00879-4.87793 2.18312 2.18312 0 00-1.791-.80957 2.22757 2.22757 0 00-1.791.80078A3.722 3.722 0 00363.39613 332.62043zM378.3893 329.848a4.63619 4.63619 0 01.62109-.207 3.19077 3.19077 0 01.85449-.11719 3.08847 3.08847 0 011.26074.22559.98417.98417 0 01.61133.65722q.19776.73829.36914 1.377t.333 1.22363q.1626.58447.31543 1.16113.15234.57569.29688 1.20606h.08984q.1626-1.09865.28809-2.09766.126-.999.23437-1.96191.10694-.96242.21582-1.90723.10841-.94629.21582-1.917a2.83472 2.83472 0 011.42188-.37891 2.22533 2.22533 0 011.15234.28809 1.039 1.039 0 01.48535.97265 10.76264 10.76264 0 01-.08105 1.125q-.08057.728-.21582 1.62891-.13478.89942-.31446 1.88965-.18016.99023-.37793 1.89062-.19921.89941-.40527 1.62891a8.554 8.554 0 01-.38672 1.125 2.09376 2.09376 0 01-.88281.41406 4.91828 4.91828 0 01-1.25977.16113 3.99225 3.99225 0 01-1.43066-.22461 1.06159 1.06159 0 01-.71094-.63867q-.23437-.72071-.5039-1.71-.271-.99023-.57618-2.17871-.25194 1.17041-.52246 2.28613-.26952 1.11621-.48535 1.89063a2.04989 2.04989 0 01-.81055.41406 4.13754 4.13754 0 01-1.1875.16113 4.4942 4.4942 0 01-1.46679-.22461 1.36815 1.36815 0 01-.85547-.63867 6.19863 6.19863 0 01-.35059-.96289q-.189-.63867-.38769-1.458-.19776-.81883-.4043-1.77343-.208-.95362-.37793-1.90821-.17139-.95361-.31543-1.8623-.145-.90967-.21582-1.665a2.52583 2.52583 0 01.70215-.43262 2.385 2.385 0 01.97168-.19824 1.97158 1.97158 0 011.125.29785 1.38448 1.38448 0 01.54883.999q.28857 1.83544.47754 3.05957.189 1.2246.30566 2.00683.1172.78369.1709 1.21485.0542.43212.1084.68457h.08984q.16113-.72071.30567-1.332.14355-.6123.29687-1.23339.15381-.62111.31543-1.332Q378.20863 330.76642 378.3893 329.848zM398.04555 329.3802a2.66635 2.66635 0 00-2.124.8457 3.52919 3.52919 0 00-.73828 2.39453 3.3249 3.3249 0 00.81934 2.41211 2.92664 2.92664 0 002.2041.8457 3.48718 3.48718 0 001.251-.19824 8.39265 8.39265 0 00.98144-.4502 1.78372 1.78372 0 01.47656.60352 1.84269 1.84269 0 01.17188.81836 1.47486 1.47486 0 01-.81934 1.251 4.77966 4.77966 0 01-2.49316.51367 7.36834 7.36834 0 01-2.26758-.3418 5.05732 5.05732 0 01-1.85449-1.05371 4.95227 4.95227 0 01-1.251-1.7998 6.67963 6.67963 0 01-.459-2.60059 6.448 6.448 0 01.4414-2.47559 5.24707 5.24707 0 011.20606-1.80859 5.0648 5.0648 0 011.791-1.11621 6.29662 6.29662 0 012.19532-.37793 5.05028 5.05028 0 012.56543.54 1.59138 1.59138 0 01.90918 1.38574 1.39942 1.39942 0 01-.23438.81055 1.93242 1.93242 0 01-.54.54 5.91458 5.91458 0 00-.999-.52246A3.26016 3.26016 0 00398.04555 329.3802zM405.35316 327.50813a3.78035 3.78035 0 01.92676-.3418 4.91986 4.91986 0 011.251-.16211 4.50585 4.50585 0 011.59277.26074 1.38954 1.38954 0 01.8916.81934q.32373.936.70215 2.17773.37793 1.2422.75586 2.56543.37793 1.32276.73731 2.60938.36034 1.28758.63086 2.27734a1.49572 1.49572 0 01-.64844.40527 3.0919 3.0919 0 01-1.02637.15235 3.15521 3.15521 0 01-.72852-.07129 1.30054 1.30054 0 01-.48632-.2168 1.05955 1.05955 0 01-.30567-.37793 3.20246 3.20246 0 01-.207-.54l-.32422-1.24121h-3.25781q-.145.53907-.28809 1.11524c-.09668.38476-.19238.75586-.28808 1.11621a4.62984 4.62984 0 01-.53125.15332 3.11168 3.11168 0 01-.67481.0625 2.34988 2.34988 0 01-1.35839-.31446 1.01147 1.01147 0 01-.44141-.873 1.79638 1.79638 0 01.07226-.50391q.07179-.252.16211-.59473.12451-.48486.35059-1.20507.22411-.72071.49512-1.55762.26952-.83643.57617-1.71875.30468-.88183.57617-1.665.26953-.78369.49414-1.39551Q405.22719 327.83284 405.35316 327.50813zm2.16016 2.32226q-.25342.75586-.56738 1.68262-.31494.92724-.56739 1.88086H408.611q-.252-.97119-.5127-1.89844-.2622-.92724-.47754-1.665zM424.19887 337.71418a1.645 1.645 0 01-.72852.38672 4.247 4.247 0 01-1.14355.13476 3.96671 3.96671 0 01-1.25977-.19726 1.7455 1.7455 0 01-.97168-.9541l-1.78223-3.63575q-.26952-.55811-.48632-1.05371-.21534-.4951-.46778-1.14257l-.1084.01757q.07179.97266.08106 1.98047.00879 1.00782.00977 1.97949v2.79a5.01013 5.01013 0 01-.60352.1084 6.02624 6.02624 0 01-.80078.05371 4.06645 4.06645 0 01-.70215-.05371 1.08061 1.08061 0 01-.50391-.21582 1.03551 1.03551 0 01-.30566-.4414 2.04263 2.04263 0 01-.1084-.72852v-9a1.50417 1.50417 0 01.77442-.54 3.39309 3.39309 0 011.11523-.18066 3.89213 3.89213 0 011.26953.207 1.72223 1.72223 0 01.96289.94531l1.79981 3.63574c.18066.37207.34179.72364.48632 1.05371q.21534.49512.46778 1.14258l.08984-.01758q-.07177-.97264-.08984-1.94433-.01758-.97266-.01758-1.94434v-2.916a4.8364 4.8364 0 01.60254-.10743 6.04179 6.04179 0 01.80078-.05468 2.16324 2.16324 0 011.20605.27929 1.32186 1.32186 0 01.41407 1.16114zM433.28871 338.01984a5.03775 5.03775 0 01-.62109.1084 6.5865 6.5865 0 01-.83692.05371 3.7542 3.7542 0 01-.72949-.0625 1.29448 1.29448 0 01-.53125-.22558.965.965 0 01-.32324-.4502 2.18209 2.18209 0 01-.1084-.75586v-9.5039q.19776-.03516.62988-.09864a5.75236 5.75236 0 01.82813-.06347 3.75646 3.75646 0 01.72949.06347 1.30254 1.30254 0 01.53027.22461.97652.97652 0 01.32422.4502 2.18969 2.18969 0 01.1084.75586zM448.984 338.01984a4.96815 4.96815 0 01-.62109.1084 6.575 6.575 0 01-.83691.05371 3.74365 3.74365 0 01-.72852-.0625 1.2888 1.2888 0 01-.53125-.22558.9734.9734 0 01-.32422-.4502 2.18486 2.18486 0 01-.10742-.75586V333.8802h-3.45606v4.13964a5.03775 5.03775 0 01-.62109.1084 6.58635 6.58635 0 01-.83691.05371 3.7543 3.7543 0 01-.7295-.0625 1.29454 1.29454 0 01-.53125-.22558.965.965 0 01-.32324-.4502 2.18233 2.18233 0 01-.1084-.75586v-9.5039q.19776-.03516.62989-.09864a5.75212 5.75212 0 01.82812-.06347 3.75639 3.75639 0 01.72949.06347 1.30258 1.30258 0 01.53028.22461.97659.97659 0 01.32422.4502 2.19 2.19 0 01.10839.75586v2.87988h3.45606v-4.21191q.19776-.03516.62988-.09864a5.74189 5.74189 0 01.82813-.06347 3.74587 3.74587 0 01.72851.06347 1.30691 1.30691 0 01.53125.22461.9834.9834 0 01.32422.4502 2.2161 2.2161 0 01.10742.75586zM451.32387 328.85773a1.55415 1.55415 0 011.67383-1.67382h5.94042a2.15479 2.15479 0 01.22461.52246 2.31 2.31 0 01.09961.68359 1.31446 1.31446 0 01-.29785.97168 1.07367 1.07367 0 01-.78222.28809h-3.79786v1.6748h4.04981a2.194 2.194 0 01.22461.5127 2.22421 2.22421 0 01.09863.6748 1.34517 1.34517 0 01-.28711.97168 1.04571 1.04571 0 01-.77441.28809h-3.31153v1.89062h4.626a2.20733 2.20733 0 01.22461.52149 2.34875 2.34875 0 01.09863.68457 1.3489 1.3489 0 01-.29687.98047 1.05808 1.05808 0 01-.78321.29687H452.9977a1.55415 1.55415 0 01-1.67383-1.67383zM462.862 338.14582a1.55416 1.55416 0 01-1.67383-1.67383v-9.30566c.13184-.02442.3418-.05664.62989-.09961a5.74652 5.74652 0 01.82812-.0625 3.7619 3.7619 0 01.72949.0625 1.3035 1.3035 0 01.53028.22558.96665.96665 0 01.32422.4502 2.18237 2.18237 0 01.1084.75586v7.10937h4.12207a2.44694 2.44694 0 01.23339.53125 2.22877 2.22877 0 01.1084.69336 1.38281 1.38281 0 01-.30664 1.01661 1.11166 1.11166 0 01-.80957.29687zM473.57191 338.01984a5.03775 5.03775 0 01-.62109.1084 6.58635 6.58635 0 01-.83691.05371 3.75423 3.75423 0 01-.7295-.0625 1.29454 1.29454 0 01-.53125-.22558.965.965 0 01-.32324-.4502 2.18233 2.18233 0 01-.1084-.75586v-8.47754a.7919.7919 0 01.207-.585 1.4804 1.4804 0 01.56739-.333 6.72169 6.72169 0 011.39453-.31542 12.65642 12.65642 0 011.57519-.09864 5.91652 5.91652 0 013.79786 1.06153 3.50861 3.50861 0 011.31445 2.87988 4.34187 4.34187 0 01-.2793 1.59375 3.30923 3.30923 0 01-.82812 1.22363 3.7188 3.7188 0 01-1.38575.792 6.107 6.107 0 01-1.93554.2793h-1.27735zm.93555-5.77734a1.71892 1.71892 0 001.16113-.35156 1.34248 1.34248 0 00.40528-1.07129 1.32558 1.32558 0 00-.42285-1.05274 1.82458 1.82458 0 00-1.2334-.36914c-.19239 0-.35059.00391-.47657.00977a2.863 2.863 0 00-.38769.04492v2.79zM490.20277 338.01984a4.97969 4.97969 0 01-.61132.1084 6.25046 6.25046 0 01-.81055.05371 2.23033 2.23033 0 01-1.24121-.27929 1.34325 1.34325 0 01-.41407-1.17871v-2.42969q-.45117-.66651-.97265-1.47656t-1.02539-1.65528q-.50538-.84668-.93653-1.665a15.42942 15.42942 0 01-.70214-1.50293 2.45235 2.45235 0 01.63964-.59472 1.76163 1.76163 0 01.999-.26953 2.05211 2.05211 0 011.14258.28808 2.70427 2.70427 0 01.83691 1.08008l1.49414 3.00586h.1084q.252-.5581.44043-1.01758.189-.45849.36914-.918.18018-.45849.37793-.95312.19776-.49512.45019-1.14356a3.23647 3.23647 0 01.71973-.252 3.43265 3.43265 0 01.75586-.08984 1.72885 1.72885 0 011.07129.333 1.172 1.172 0 01.44141.999 1.88114 1.88114 0 01-.09082.52148 5.79466 5.79466 0 01-.41309.92774q-.3252.62109-.94531 1.68261-.6211 1.062-1.6836 2.77246zM494.0016 332.62043a6.51155 6.51155 0 01.44141-2.48438 5.01122 5.01122 0 013.00586-2.916 6.8315 6.8315 0 014.48144 0 5.21594 5.21594 0 011.80957 1.10742 5.084 5.084 0 011.21485 1.80859 6.53035 6.53035 0 01.4414 2.48438 6.72457 6.72457 0 01-.43261 2.49316 5.02779 5.02779 0 01-1.19727 1.81739 5.09777 5.09777 0 01-1.80859 1.10742 6.6167 6.6167 0 01-2.26758.37793 6.46047 6.46047 0 01-2.26856-.3877 5.04889 5.04889 0 01-1.7998-1.125 5.19574 5.19574 0 01-1.18848-1.81738A6.615 6.615 0 01494.0016 332.62043zm3.24024 0a3.79231 3.79231 0 00.666 2.44727 2.384 2.384 0 003.582 0 4.82628 4.82628 0 00.00879-4.87793 2.18308 2.18308 0 00-1.791-.80957 2.2276 2.2276 0 00-1.791.80078A3.722 3.722 0 00497.24184 332.62043zM516.861 334.05988a4.58279 4.58279 0 01-.333 1.77344 3.74889 3.74889 0 01-.96289 1.36816 4.34311 4.34311 0 01-1.53028.873 6.91813 6.91813 0 01-4.06738 0 4.34315 4.34315 0 01-1.53027-.873 3.74889 3.74889 0 01-.96289-1.36816 4.56477 4.56477 0 01-.333-1.77344v-6.876q.19776-.03516.62988-.09864a5.74189 5.74189 0 01.82813-.06347 3.74587 3.74587 0 01.72851.06347 1.30113 1.30113 0 01.53125.22461.9834.9834 0 01.32422.4502 2.19218 2.19218 0 01.10742.75586v5.49023a1.841 1.841 0 00.47754 1.34961 1.8171 1.8171 0 002.47461 0 1.861 1.861 0 00.46778-1.34961v-6.82226q.19921-.03516.63086-.09864a5.72849 5.72849 0 01.82714-.06347 3.74949 3.74949 0 01.7295.06347 1.307 1.307 0 01.53125.22461.97491.97491 0 01.32324.4502 2.18993 2.18993 0 01.1084.75586z"], ["fill", "#b02336", "d", "M383.06877,306.08015l.17267-.20459.00143-.00171c.74894-.87793,1.48569-1.75781,2.17212-2.677q1.06435-1.3484,2.02991-2.76807c1.29181-1.887,2.52847-3.80933,3.68448-5.78272l-.06955.25415-.00006-.01-.00089-.13428.07041-.11988c.60016-1.02026,1.19485-2.04467,1.7594-3.08667.589-1.0288,1.12347-2.08715,1.69394-3.12866.56225-1.0459,1.09823-2.10644,1.62054-3.17456.5535-1.05517,1.05783-2.13257,1.5856-3.206a51.34367,51.34367,0,0,1-2.51047,6.718,62.88131,62.88131,0,0,1-3.28994,6.386l.06942-.2539-.00006.01-.00091.13965-.06876.11475a51.2987,51.2987,0,0,1-3.92355,5.73413q-1.0893,1.35608-2.26511,2.63647a32.27257,32.27257,0,0,1-2.5246,2.38111l.00116-.00122Z"], ["fill", "#b02336", "d", "M391.55876,294.89021a29.45734,29.45734,0,0,1,.49585,5.56494,31.87076,31.87076,0,0,1-.3996,5.56494l-.01913.11181-.07721-.01538-.47989-.09619.47989-.09619-.09613.09595a31.87468,31.87468,0,0,1-.39963-5.56494A29.45982,29.45982,0,0,1,391.55876,294.89021Z"], ["fill", "#e5e1e5", "d", "M338.14868 335.86275c3.86071 0 3.86711-6 0-6-3.86072 0-3.86711 6 0 6zM527.34868 335.86275c3.86071 0 3.86711-6 0-6-3.86072 0-3.86711 6 0 6z"], ["fill", "#fff", "d", "M309.7704,307.88874h39.64115a0,0,0,0,1,0,0v6.29363a0,0,0,0,1,0,0H309.7704a2.70807,2.70807,0,0,1-2.70807-2.70807v-.87749a2.70807,2.70807,0,0,1,2.70807-2.70807Z"], ["fill", "#f65b2b", "d", "M350.65125,314.34347a.57023.57023,0,0,1-.57023.57023H308.93789c-1.5709,0-2.84869-1.72537-2.84869-3.8465,0-2.12062,1.27779-3.846,2.84869-3.846H350.081a.57023.57023,0,0,1,.57023.57023v.44885a.57023.57023,0,0,1-.57023.57022H308.93789c-.92185,0-1.67166,1.01246-1.67166,2.25669,0,1.24474.74981,2.2572,1.67166,2.2572H350.081a.57023.57023,0,0,1,.57023.57022Z"], ["fill", "#fff", "d", "M303.58563,300.19626h39.64115a0,0,0,0,1,0,0v6.29363a0,0,0,0,1,0,0H303.58563a2.70807,2.70807,0,0,1-2.70807-2.70807v-.87749A2.70807,2.70807,0,0,1,303.58563,300.19626Z"], ["fill", "#ffba55", "d", "M344.46648,306.651a.57023.57023,0,0,1-.57023.57022H302.75311c-1.57089,0-2.84868-1.72536-2.84868-3.84649,0-2.12062,1.27779-3.846,2.84868-3.846h41.14314a.57023.57023,0,0,1,.57023.57023v.44885a.57023.57023,0,0,1-.57023.57022H302.75311c-.92185,0-1.67166,1.01246-1.67166,2.25669,0,1.24474.74981,2.25719,1.67166,2.25719h41.14314a.57023.57023,0,0,1,.57023.57023Z"], ["fill", "#fff", "d", "M316.24561,292.50378h39.64115a0,0,0,0,1,0,0v6.29363a0,0,0,0,1,0,0H316.24561a2.70807,2.70807,0,0,1-2.70807-2.70807v-.87749a2.70807,2.70807,0,0,1,2.70807-2.70807Z"], ["fill", "#f65b2b", "d", "M357.12646,298.95851a.57023.57023,0,0,1-.57023.57022H315.41309c-1.57089,0-2.84868-1.72536-2.84868-3.8465,0-2.12061,1.27779-3.846,2.84868-3.846h41.14314a.57023.57023,0,0,1,.57023.57023v.44884a.57023.57023,0,0,1-.57023.57023H315.41309c-.92184,0-1.67166,1.01246-1.67166,2.25668,0,1.24475.74982,2.2572,1.67166,2.2572h41.14314a.57023.57023,0,0,1,.57023.57023Z"], [1, "introduce", "py-5", "col-xl-5", "col-xs-10"], [1, "hello"], [1, "first-name"], [1, "last-name"], [1, "d-flex", "flex-row", "align-items-center"], [1, "field"], [1, "developer"], [1, "bio"], ["type", "button", 1, "btn", "btn-outline-primary", "mt-5", 3, "click"]], template: function FirstComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polygon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "circle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "rect", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polygon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "polygon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "rect", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "polygon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "polygon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "polygon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "rect", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "rect", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "rect", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "rect", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "rect", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "rect", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "rect", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "rect", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "rect", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "rect", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "rect", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "rect", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "rect", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "rect", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "rect", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "rect", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "polygon", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "rect", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "rect", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "rect", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "polygon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "rect", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "rect", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "rect", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "circle", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "circle", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "polygon", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "polygon", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "rect", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "rect", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "rect", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "rect", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "rect", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "rect", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "rect", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "rect", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Hello, I'm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h1", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "MAHYA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h1", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "BAGHERI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " I am working as a Frontend Web Developer For Tosan ( Banking & Payment Solutions Provider ). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstComponent_Template_button_click_168_listener($event) { return ctx.scrollToNext($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " WORK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.field);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".first[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.introduce[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #f0411a;\n}\n\n.introduce[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\n  font-family: OpenSansItalic;\n  margin-bottom: 70px;\n  margin-top: 70px;\n}\n\n@media all and (min-width: 200px) and (max-width: 900px) {\n  .mahya[_ngcontent-%COMP%], .shape-1[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .first-name[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .first-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 45px;\n    color: #f0411a;\n  }\n\n  .last-name[_ngcontent-%COMP%] {\n    font-weight: 100 !important;\n    font-size: 45px;\n    color: #f0411a;\n    margin-bottom: 10px;\n  }\n\n  .developer[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: OpenSansItalicBold !important;\n    color: #1A58F0 !important;\n    border-left: 2px solid #1A58F0;\n    margin-left: 10px;\n    padding-left: 10px;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    font-size: 20px;\n    font-family: OpenSansItalicBold;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    color: #1A58F0;\n  }\n\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 15px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .mahya[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .first[_ngcontent-%COMP%] {\n    margin-bottom: 120px;\n  }\n}\n\n@media all and (min-width: 900px) and (max-width: 1460px) {\n  .mahya[_ngcontent-%COMP%], .shape-1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .first-name[_ngcontent-%COMP%] {\n    margin-bottom: 70px;\n  }\n  .first-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 115px;\n    color: #f0411a;\n  }\n\n  .last-name[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 115px;\n    color: #f0411a;\n    margin-bottom: 60px;\n  }\n\n  .developer[_ngcontent-%COMP%] {\n    font-family: OpenSansItalicBold !important;\n    color: #1A58F0 !important;\n    border-left: 2px solid #1A58F0;\n    height: 60px;\n    line-height: 60px;\n    margin-left: 10px;\n    padding-left: 10px;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    font-family: OpenSansItalicBold;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    color: #1A58F0;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    width: 360px;\n    padding-top: 30px;\n  }\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 20px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .first[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n    padding-left: 5rem;\n  }\n}\n\n@media all and (min-width: 1460px) {\n  .shape-1[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 100px;\n    width: 1300px;\n    height: 700px;\n  }\n\n  .mahya[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    left: 550px;\n    width: 700px;\n    height: 700px;\n    z-index: 1;\n  }\n  .mahya[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 850px;\n  }\n\n  .first-name[_ngcontent-%COMP%] {\n    margin-bottom: 70px;\n  }\n  .first-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 115px;\n    color: #f0411a;\n  }\n\n  .last-name[_ngcontent-%COMP%] {\n    font-weight: 200 !important;\n    font-size: 115px;\n    color: #f0411a;\n    margin-bottom: 60px;\n  }\n\n  .developer[_ngcontent-%COMP%] {\n    font-family: OpenSansItalicBold !important;\n    color: #1A58F0 !important;\n    border-left: 2px solid #1A58F0;\n    height: 60px;\n    line-height: 60px;\n    margin-left: 10px;\n    padding-left: 10px;\n  }\n\n  .field[_ngcontent-%COMP%] {\n    font-family: OpenSansItalicBold;\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n    color: #1A58F0;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n  .bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    font-size: 20px;\n    font-family: Lato;\n    line-height: 38px;\n  }\n\n  .first[_ngcontent-%COMP%] {\n    padding-left: 5rem;\n    margin-bottom: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaXJzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFJQTtFQUNFO0lBQ0Usd0JBQUE7RUFERjs7RUFHQTtJQUNFLG1CQUFBO0VBQUY7RUFFRTtJQUNFLGVBQUE7SUFDQSxjQUFBO0VBQUo7O0VBR0E7SUFDRSwyQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFFQTtJQUNFLGVBQUE7SUFDQSwwQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0lBQ0EsK0JBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsY0FBQTtFQUVGOztFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBRUo7O0VBQ0E7SUFDRSx3QkFBQTtFQUVGOztFQUFBO0lBQ0Usb0JBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0U7SUFDRSxhQUFBO0VBRUY7O0VBQUE7SUFDRSxtQkFBQTtFQUdGO0VBREU7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUFHSjs7RUFBQTtJQUNFLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFHRjs7RUFEQTtJQUNFLDBDQUFBO0lBQ0EseUJBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFJRjs7RUFGQTtJQUNFLCtCQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLGNBQUE7RUFLRjs7RUFIQTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtFQU1GO0VBTEU7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFPSjs7RUFKQTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUFPRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7RUFNRjs7RUFKQTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFPRjtFQU5FO0lBQ0UsWUFBQTtFQVFKOztFQUxBO0lBQ0UsbUJBQUE7RUFRRjtFQU5FO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VBUUo7O0VBTEE7SUFDRSwyQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBUUY7O0VBTkE7SUFDRSwwQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBU0Y7O0VBUEE7SUFDRSwrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxjQUFBO0VBVUY7O0VBUkE7SUFDRSxZQUFBO0VBV0Y7RUFURTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtFQVdKOztFQVJBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQVdGO0FBQ0YiLCJmaWxlIjoiZmlyc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5pbnRyb2R1Y2Uge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogI2YwNDExYTtcclxuXHJcbiAgLmhlbGxvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuU2Fuc0l0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAubWFoeWEsIC5zaGFwZS0xIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmZpcnN0LW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGFzdC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmRldmVsb3BlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWNCb2xkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzFBNThGMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMUE1OEYwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWNCb2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzFBNThGMDtcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWFoeWEge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZmlyc3R7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ2MHB4KXtcclxuICAubWFoeWEsIC5zaGFwZS0xe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAuZmlyc3QtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTE1cHg7XHJcbiAgICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGFzdC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTE1cHg7XHJcbiAgICBjb2xvcjogI2YwNDExYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIC5kZXZlbG9wZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljQm9sZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxQTU4RjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzFBNThGMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5maWVsZCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWNCb2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzFBNThGMDtcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maXJzdHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxNDYwcHgpIHtcclxuICAuc2hhcGUtMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gIH1cclxuICAubWFoeWEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTUwcHg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHN2Z3tcclxuICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmlyc3QtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTE1cHg7XHJcbiAgICAgIGNvbG9yOiAjZjA0MTFhO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGFzdC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTE1cHg7XHJcbiAgICBjb2xvcjogI2YwNDExYTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgfVxyXG4gIC5kZXZlbG9wZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW5TYW5zSXRhbGljQm9sZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxQTU4RjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzFBNThGMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5maWVsZCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlblNhbnNJdGFsaWNCb2xkO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzFBNThGMDtcclxuICB9XHJcbiAgLmJpbyB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZpcnN0e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"], data: { animation: [] } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-pages-contact-me"],{

/***/ "Ovb2":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home-page/pages/contact-me/contact-me.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContactMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeModule", function() { return ContactMeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-me.component */ "bwGK");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page_pages_contact_me_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~home-page/pages/contact-me/shared/resolvers */ "lg0T");
/* harmony import */ var _app_modules_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~app/modules/text */ "1U8Q");








class ContactMeModule {
}
ContactMeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactMeModule });
ContactMeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactMeModule_Factory(t) { return new (t || ContactMeModule)(); }, providers: [
        _home_page_pages_contact_me_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["ContactMeResolver"]
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _contact_me_component__WEBPACK_IMPORTED_MODULE_1__["ContactMeComponent"],
                    resolve: {
                        contactMe: _home_page_pages_contact_me_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["ContactMeResolver"]
                    }
                }
            ]),
            _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactMeModule, { declarations: [_contact_me_component__WEBPACK_IMPORTED_MODULE_1__["ContactMeComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _contact_me_component__WEBPACK_IMPORTED_MODULE_1__["ContactMeComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _contact_me_component__WEBPACK_IMPORTED_MODULE_1__["ContactMeComponent"],
                            resolve: {
                                contactMe: _home_page_pages_contact_me_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["ContactMeResolver"]
                            }
                        }
                    ]),
                    _app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _app_modules_text__WEBPACK_IMPORTED_MODULE_5__["TextModule"]
                ],
                providers: [
                    _home_page_pages_contact_me_shared_resolvers__WEBPACK_IMPORTED_MODULE_4__["ContactMeResolver"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "bwGK":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/contact-me/contact-me.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared/animations */ "aDQ/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/modules/text/text.component */ "PYwK");






function ContactMeComponent_ng_container_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 7);
} if (rf & 2) {
    const text_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", text_r1.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ContactMeComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactMeComponent_ng_container_3_p_1_Template, 1, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const text_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", text_r1.type === "p");
} }
class ContactMeComponent {
    constructor(route) {
        this.route = route;
        this.contactMe = this.route.snapshot.data.contactMe;
    }
    ngOnInit() {
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], decls: 6, vars: 4, consts: [[1, "app-row", "with-margin"], [1, "slide-in", "jumbo", "center", 3, "innerHTML"], [1, "text"], [4, "ngFor", "ngForOf"], [1, "text", "flex-column"], [3, "links"], ["class", "slide-in", 3, "innerHTML", 4, "ngIf"], [1, "slide-in", 3, "innerHTML"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactMeComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideIn", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.contactMe.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactMe.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", ctx.contactMe.link);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _app_modules_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9wYWdlcy9jb250YWN0LW1lL2NvbnRhY3QtbWUuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-me',
                templateUrl: './contact-me.component.html',
                styleUrls: ['./contact-me.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: [Object(_app_shared_animations__WEBPACK_IMPORTED_MODULE_1__["slideIn"])()]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "cOmj":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/contact-me/shared/resolvers/contact-me.resolver.ts ***!
  \******************************************************************************************/
/*! exports provided: ContactMeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeResolver", function() { return ContactMeResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ContactMeResolver {
    constructor(http) {
        this.http = http;
    }
    resolve() {
        if (ContactMeResolver.contactMePage) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(ContactMeResolver.contactMePage);
        }
        return this.http
            .get(`${_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}/section/${"contact" /* Contact */}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((contactMePage) => (ContactMeResolver.contactMePage = contactMePage)));
    }
}
ContactMeResolver.ɵfac = function ContactMeResolver_Factory(t) { return new (t || ContactMeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ContactMeResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactMeResolver, factory: ContactMeResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lg0T":
/*!****************************************************************************!*\
  !*** ./src/app/pages/home-page/pages/contact-me/shared/resolvers/index.ts ***!
  \****************************************************************************/
/*! exports provided: ContactMeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_me_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-me.resolver */ "cOmj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactMeResolver", function() { return _contact_me_resolver__WEBPACK_IMPORTED_MODULE_0__["ContactMeResolver"]; });




/***/ }),

/***/ "mABs":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-page/pages/contact-me/index.ts ***!
  \***********************************************************/
/*! exports provided: ContactMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_me_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-me.module */ "Ovb2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactMeModule", function() { return _contact_me_module__WEBPACK_IMPORTED_MODULE_0__["ContactMeModule"]; });




/***/ })

}]);
//# sourceMappingURL=home-page-pages-contact-me.e272ea57215106b70aad.js.map
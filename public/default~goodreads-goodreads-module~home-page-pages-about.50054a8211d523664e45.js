(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~goodreads-goodreads-module~home-page-pages-about"],{

/***/ "4Fwo":
/*!*******************************************!*\
  !*** ./src/app/modules/carousel/index.ts ***!
  \*******************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.module */ "6KVL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _carousel_module__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"]; });




/***/ }),

/***/ "6KVL":
/*!*****************************************************!*\
  !*** ./src/app/modules/carousel/carousel.module.ts ***!
  \*****************************************************/
/*! exports provided: CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/modules/carousel/carousel.component */ "TfxY");
/* harmony import */ var _app_modules_book_book_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~app/modules/book/book.module */ "WHAV");





class CarouselModule {
}
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[
            _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _app_modules_book_book_module__WEBPACK_IMPORTED_MODULE_3__["BookModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: [_app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _app_modules_book_book_module__WEBPACK_IMPORTED_MODULE_3__["BookModule"]], exports: [_app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _app_modules_book_book_module__WEBPACK_IMPORTED_MODULE_3__["BookModule"]
                ],
                declarations: [
                    _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
                ],
                exports: [
                    _app_modules_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Cu4v":
/*!****************************************************************!*\
  !*** ./node_modules/latte-carousel/dist/latte-carousel.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Latte-Carousel v1.6.1
 * https://github.com/latte-carousel/latte-carousel
 */
!function(t,e){ true?module.exports=e():undefined}("undefined"!=typeof window?window:this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=function(){function t(t){if(this.count=3,this.move=1,this.touch=!1,this.mode="align",this.buttons=!0,this.dots=!1,this.rewind=!0,this.autoplay=0,this.animation=500,null!=t){for(var e in t)t.hasOwnProperty(e)&&"responsive"!==e&&(this[e]=t[e]);null!=t.responsive&&(this.responsive=new i.ResponsiveMap(t.responsive,this))}}return t.prototype.getBreakpointOptions=function(){if(null==this.responsive)return this;var t=window.innerWidth||document.body.clientWidth,e=null,n=0;for(var i in this.responsive)if(this.responsive.hasOwnProperty(i)){var o=this.responsive[i],s=parseInt(i,10);s>=n&&s<=t&&(e=o,n=s)}return e},t}();e.Options=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.listeners={}}return t.prototype.on=function(t,e){var n=this.listeners[t];null==n&&(this.listeners[t]=n=[]),n.push(e)},t.prototype.trigger=function(t,e){var n=this.listeners[t];if(null!=n)for(var i=0,o=n;i<o.length;i++){(0,o[i])(e)}},t.prototype.off=function(){this.listeners={}},t}();e.EventEmitter=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=function(t,e){if(null!=t)for(var n in t)if(t.hasOwnProperty(n)){var o=new i.Options(t[n]);if(null!=e)for(var s in e)e.hasOwnProperty(s)&&"responsive"!==s&&null==t[n][s]&&(o[s]=e[s]);this[n]=o}};e.ResponsiveMap=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4);e.Carousel=i.Carousel;var o=n(0);e.Options=o.Options;var s=n(2);e.ResponsiveMap=s.ResponsiveMap},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(0),a=n(5),u=n(7),h=n(8),c=n(9),l=n(10);n(11);var p=function(t){function e(e,n){var i=t.call(this)||this;if(i.carouselElement="string"==typeof e?document.querySelector(e):e,null==i.carouselElement)throw new Error("Missing root latte-carousel element.");if(null!=i.carouselElement.querySelector(".latte-content"))throw new Error("Cannot create multiple instances using the same latte-carousel element.");return i.originalHtml=i.carouselElement.innerHTML,i.createContainers(),i.contentElement=i.carouselElement.children[0],i.stageElement=i.contentElement.children[0],i.itemElements=i.stageElement.children,i.options=new r.Options(n),i.stage=new a.Stage(i.contentElement,i.stageElement,i.itemElements,i.options),i.touch=new l.Touch(i.contentElement,i.stage,i.options),i.buttons=new h.Buttons(i.carouselElement,i.contentElement,i.stage,i.options),i.dots=new c.Dots(i.carouselElement,i.stage,i.options),i.autoplay=new u.Autoplay(i.carouselElement,i.stage,i.options),i.onWindowResizeListener=i.onWindowResize.bind(i),window.addEventListener("resize",i.onWindowResizeListener),i.stage.on("move",i.onStageMove.bind(i)),i.stage.on("moved",i.onStageMoved.bind(i)),i.update(),i.on("previous",i.onCarouselPrevious.bind(i)),i.on("next",i.onCarouselNext.bind(i)),i.on("goto",i.onCarouselGoto.bind(i)),i.on("update",i.onCarouselUpdate.bind(i)),i.on("remove",i.onCarouselRemove.bind(i)),i}return o(e,t),e.prototype.remove=function(){this.autoplay.remove(),window.removeEventListener("resize",this.onWindowResizeListener),this.off(),this.carouselElement.innerHTML=this.originalHtml},e.prototype.createContainers=function(){this.carouselElement.innerHTML='\n            <div class="latte-content">\n                <div class="latte-stage">\n                    '+this.carouselElement.innerHTML+"\n                </div>\n            </div>\n        "},e.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.stage.update(),this.touch.update(),this.buttons.update(),this.dots.update(),this.autoplay.update()},e.prototype.onWindowResize=function(t){this.update()},e.prototype.onStageMove=function(t){this.dots.update(),this.trigger("move",t)},e.prototype.onStageMoved=function(t){this.dots.update(),this.trigger("moved",t)},e.prototype.onCarouselPrevious=function(t){this.stage.move(-this.currentOptions.move)},e.prototype.onCarouselNext=function(t){this.stage.move(this.currentOptions.move)},e.prototype.onCarouselGoto=function(t){this.stage.moveTo(t)},e.prototype.onCarouselUpdate=function(t){this.update()},e.prototype.onCarouselRemove=function(t){this.remove()},e}(s.EventEmitter);e.Carousel=p},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(6),a=function(t){function e(e,n,i,o){var s=t.call(this)||this;return s.contentElement=e,s.stageElement=n,s.itemElements=i,s.options=o,s.currentIndex=0,s.currentPosition=0,s.update(),s}return o(e,t),e.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.contentSize=this.contentElement.getBoundingClientRect().width,this.itemSize=this.contentSize/this.currentOptions.count,this.stageSize=this.itemSize*this.itemElements.length;for(var t=0;t<this.itemElements.length;t++){this.itemElements[t].style.width=this.itemSize+"px"}this.stageElement.style.width=this.stageSize+"px",this.move(0,!1)},e.prototype.move=function(t,e){void 0===e&&(e=!0),this.moveTo(this.currentIndex+t,e)},e.prototype.moveTo=function(t,e){var n=this;void 0===e&&(e=!0);var i=this.last();this.currentOptions.rewind&&(t===i+this.currentOptions.move?t=0:t>=i||t===-this.currentOptions.move?t=i:t<=0&&(t=0)),this.currentIndex=t,this.currentIndex=Math.min(Math.max(0,this.currentIndex),i),this.currentPosition=this.currentIndex*this.itemSize*-1;var o=e?this.currentOptions.animation:0;r.Tween.translate(this.stageElement,this.currentPosition,0,o,(function(){n.trigger("moved")})),this.trigger("move")},e.prototype.drag=function(t){var e=this.last()*this.itemSize*-1;this.currentPosition+=t,this.currentPosition=Math.min(Math.max(e,this.currentPosition),0),r.Tween.translate(this.stageElement,this.currentPosition,0,0),this.trigger("move")},e.prototype.dragEndAlign=function(t){this.currentIndex=this.indexByPosition(t),this.move(0)},e.prototype.dragEndFree=function(t,e){var n=this,i=this.last()*this.itemSize*-1;this.currentPosition+=t,this.currentPosition=Math.min(Math.max(i,this.currentPosition),0),this.currentIndex=this.indexByPosition(e),r.Tween.translate(this.stageElement,this.currentPosition,0,this.currentOptions.animation,(function(){n.currentIndex=n.indexByPosition(e),n.trigger("moved")}))},e.prototype.indexByPosition=function(t){return t?Math.ceil(Math.abs(this.currentPosition)/this.itemSize):Math.floor(Math.abs(this.currentPosition)/this.itemSize)},e.prototype.count=function(){return this.itemElements.length},e.prototype.current=function(){return this.currentIndex},e.prototype.last=function(){return Math.max(0,this.itemElements.length-this.currentOptions.count)},e}(s.EventEmitter);e.Stage=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.translate=function(t,e,n,i,o){var s=this,r=this.getTranslate(t),a=this.animationId++;t.tweenId=a;this.animate(i,(function(i){if(t.tweenId!==a)return!1;var o={x:s.interpolate(r.x,e,i),y:s.interpolate(r.y,n,i)};return s.setTranslate(t,o),!0}),o)},t.animate=function(t,e,n){var i=this;if(0===t)return e(1),void(null!=n&&n());var o=(new Date).getTime(),s=function(){var r=((new Date).getTime()-o)/t,a=Math.min(r,1);e(a)&&(a<1?i.requestFrame(s):null!=n&&n())};this.requestFrame(s)},t.getTranslate=function(t){var e={x:0,y:0},n=t.style["-ms-transform"]||t.style["-webkit-transform"]||t.style["-moz-transform"]||t.style["-o-transform"]||t.style.transform;if(null!=n){var i=/translate\(([0-9.-]+)px,\s?([0-9.-]+)px\)/.exec(n);null!=i&&(e.x=parseFloat(i[1]),e.y=parseFloat(i[2]))}return e},t.setTranslate=function(t,e){var n="translate("+Math.ceil(e.x)+"px, "+Math.ceil(e.y)+"px)";t.style["-ms-transform"]=n,t.style["-webkit-transform"]=n,t.style["-moz-transform"]=n,t.style["-o-transform"]=n,t.style.transform=n},t.requestFrame=function(t){null!=requestAnimationFrame?requestAnimationFrame(t):window.setTimeout(t,1e3/60)},t.interpolate=function(t,e,n){return this.easeOutCubic(n,t,e-t,1)},t.easeOutCubic=function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e},t.animationId=1,t}();e.Tween=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.carouselElement=t,this.stage=e,this.options=n,this.intervalId=0,this.mouseOver=!1,this.carouselElement.addEventListener("mouseenter",this.onMouseEnter.bind(this)),this.carouselElement.addEventListener("mouseleave",this.onMouseLeave.bind(this)),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.disableInterval(),this.enableInterval()},t.prototype.remove=function(){this.disableInterval()},t.prototype.enableInterval=function(){this.currentOptions.autoplay>0&&0===this.intervalId&&(this.intervalId=window.setInterval(this.onInterval.bind(this),this.currentOptions.autoplay))},t.prototype.disableInterval=function(){this.intervalId>0&&(window.clearInterval(this.intervalId),this.intervalId=0)},t.prototype.onInterval=function(){this.mouseOver||this.stage.move(this.currentOptions.move)},t.prototype.onMouseEnter=function(){this.mouseOver=!0,this.disableInterval()},t.prototype.onMouseLeave=function(){this.mouseOver=!1,this.enableInterval()},t}();e.Autoplay=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n,i){this.carouselElement=t,this.contentElement=e,this.stage=n,this.options=i,this.previousButton=this.createButton("latte-previous"),this.nextButton=this.createButton("latte-next"),this.carouselElement.insertBefore(this.previousButton,this.contentElement),this.carouselElement.appendChild(this.nextButton),this.previousButton.addEventListener("click",this.onPreviousClick.bind(this)),this.nextButton.addEventListener("click",this.onNextClick.bind(this)),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),!0===this.currentOptions.buttons?(this.previousButton.className="latte-previous",this.nextButton.className="latte-next"):(this.previousButton.className="latte-previous invisible",this.nextButton.className="latte-next invisible")},t.prototype.createButton=function(t){var e=document.createElement("div");return e.className=t,e},t.prototype.onPreviousClick=function(t){this.stage.move(-this.currentOptions.move)},t.prototype.onNextClick=function(t){this.stage.move(this.currentOptions.move)},t}();e.Buttons=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.carouselElement=t,this.stage=e,this.options=n,this.createContainer(),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),!0===this.currentOptions.dots?(this.dotsContainer.className="latte-dots",this.createDots(),this.updateActive()):this.dotsContainer.className="latte-dots invisible"},t.prototype.createContainer=function(){this.dotsContainer=document.createElement("div"),this.dotsContainer.className="latte-dots",this.carouselElement.appendChild(this.dotsContainer)},t.prototype.createDots=function(){var t=this.dotCount();if(null==this.dots||this.dots.length!==t){for(var e="",n=0;n<t;n++){var i=n*Math.ceil(this.currentOptions.count);e+='<div class="latte-dot" data-index='+(i=Math.min(i,this.stage.last()))+"></div>"}this.dotsContainer.innerHTML=e,this.dots=this.dotsContainer.querySelectorAll(".latte-dot");for(n=0;n<this.dots.length;n++){this.dots[n].addEventListener("click",this.onDotClick.bind(this))}}},t.prototype.updateActive=function(){for(var t=0;t<this.dots.length;t++){var e=this.dots[t],n=parseFloat(e.getAttribute("data-index")),i=void 0;if(t+1<this.dots.length){var o=this.dots[t+1];i=parseFloat(o.getAttribute("data-index"))}var s="latte-dot"+(this.stage.current()>=n&&(null==i||this.stage.current()<i)?" active":"");e.setAttribute("class",s)}},t.prototype.dotCount=function(){return Math.ceil(this.stage.count()/Math.ceil(this.currentOptions.count))},t.prototype.onDotClick=function(t){var e=t.target,n=parseFloat(e.getAttribute("data-index"));this.stage.moveTo(n),this.updateActive()},t}();e.Dots=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.contentElement=t,this.stage=e,this.options=n,this.firstX=0,this.firstY=0,this.previousX=0,this.previousY=0,this.deltaX=0,this.deltaY=0,this.distanceX=0,this.distanceY=0,this.dragMinDistance=20,this.dragFreeMinDelta=3,this.dragFreeMaxDelta=40,this.dragFreeBaseDelta=600,this.state="free",this.contentElement.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!0}),this.contentElement.addEventListener("touchmove",this.onTouchMove.bind(this)),this.contentElement.addEventListener("touchend",this.onTouchEnd.bind(this),{passive:!0}),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions()},t.prototype.onTouchStart=function(t){var e=t.touches[0];this.firstX=this.previousX=e.clientX,this.firstY=this.previousY=e.clientY,this.distanceX=this.distanceY=0},t.prototype.onTouchMove=function(t){var e=t.touches[0];if(this.deltaX=e.clientX-this.previousX,this.deltaY=e.clientY-this.previousY,this.distanceX+=Math.abs(this.deltaX),this.distanceY+=Math.abs(this.deltaY),this.currentOptions.touch){var n=this.distanceX>=this.dragMinDistance||this.distanceY>=this.dragMinDistance,i=this.distanceX>=this.distanceY;"free"===this.state&&n&&(this.state=i?"drag":"lock"),"drag"===this.state&&(t.cancelable&&t.preventDefault(),this.stage.drag(this.deltaX))}this.previousX=e.clientX,this.previousY=e.clientY},t.prototype.onTouchEnd=function(t){if(this.currentOptions.touch||"drag"===this.state){this.state="free";var e=this.firstX>this.previousX;if("align"===this.currentOptions.mode)this.stage.dragEndAlign(e);else if("free"===this.currentOptions.mode){var n=(Math.min(Math.max(Math.abs(this.deltaX),this.dragFreeMinDelta),this.dragFreeMaxDelta)-this.dragFreeMinDelta)/(this.dragFreeMaxDelta-this.dragFreeMinDelta);if(n>0){var i=n*this.dragFreeBaseDelta*Math.sign(this.deltaX);this.stage.dragEndFree(i,e)}else this.stage.dragEndFree(0,e)}}},t}();e.Touch=i},function(t,e,n){}])}));
//# sourceMappingURL=latte-carousel.min.js.map

/***/ }),

/***/ "TfxY":
/*!********************************************************!*\
  !*** ./src/app/modules/carousel/carousel.component.ts ***!
  \********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var latte_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! latte-carousel */ "Cu4v");
/* harmony import */ var latte_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(latte_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/functions */ "Nvhu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~app/modules/book/book.component */ "aEx7");






const _c0 = ["carouselElement"];
function CarouselComponent_app_book_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-book", 8);
} if (rf & 2) {
    const book_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", book_r2);
} }
class CarouselComponent {
    constructor() {
        /**
         * List of Goodreads books
         */
        this.books = null;
        /**
         * If you know the total amount of books, we show this instead of the length of the carousel
         */
        this.totalBooks = null;
        /**
         * If true, the last brings you to the first.
         */
        this.wrap = true;
        /**
         * A fake book that could link to Goodreads, for example.
         */
        this.lastBook = null;
    }
    /**
     * The current index
     */
    get index() {
        // @ts-ignore
        return this.carousel ? (this.carousel.stage.currentIndex + 1) : 1;
    }
    ngOnInit() {
        if (this.lastBook) {
            this.books = [...Object(_app_functions__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.books), this.lastBook];
        }
    }
    ngAfterViewInit() {
        this.options = {
            touch: false,
            mode: 'align',
            // buttons: true,
            // dots: true,
            rewind: this.wrap,
            autoplay: 0,
            animation: 500,
            responsive: {
                0: { count: 1.1, mode: 'free', buttons: false },
                480: { count: 1.1, mode: 'free', buttons: false },
                768: { count: 1.1, move: 1, buttons: false },
                1440: { count: 2, move: 2, buttons: false }
            }
        };
        this.buildCarousel();
    }
    nextItem() {
        this.carousel.trigger('next');
    }
    prevItem() {
        this.carousel.trigger('previous');
    }
    buildCarousel() {
        this.carousel = new latte_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"](this.carouselElement.nativeElement, this.options);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carouselElement = _t.first);
    } }, inputs: { title: "title", books: "books", totalBooks: "totalBooks", wrap: "wrap", lastBook: "lastBook" }, decls: 15, vars: 6, consts: [[1, "latte-carousel"], ["carouselElement", ""], ["class", "book-card latte-item", 3, "book", 4, "ngFor", "ngForOf"], [1, "flex-row", "just-center", "pagination-title", "align-center"], [1, "pagination", "flex-row", "align-center"], [1, "paginate", "left", 3, "disabled", "click"], [1, "pagination-counter"], [1, "paginate", "right", 3, "disabled", "click"], [1, "book-card", "latte-item", 3, "book"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_app_book_2_Template, 1, 1, "app-book", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_7_listener() { return ctx.prevItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_Template_button_click_12_listener() { return ctx.nextItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.wrap && ctx.index === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.index, " / ", ctx.totalBooks || ctx.books.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.wrap && ctx.index === ctx.books.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_4__["BookComponent"]], styles: [".pagination-title[_ngcontent-%COMP%] {\n  font-size: 60px;\n}\n\n@media (max-width: 650px) {\n  .pagination-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n.pagination-title[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvZ2xvYmFscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUNTK0I7QURYakM7O0FBR0U7RUFGRjtJQUdJLGVDSWdCO0VESGxCO0FBQ0Y7O0FBTEE7RUFNSSxpQkFBaUI7QUFHckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnYnJlYWtwb2ludHMnO1xuQGltcG9ydCAnZ2xvYmFscyc7XG5cbi5wYWdpbmF0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAkaDItZm9udC1zaXplO1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSB7XG4gICAgZm9udC1zaXplOiAkYXBwLWZvbnQtc2l6ZTtcbiAgfVxuICAucGFnaW5hdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbn1cbiIsIi8vIHNldCB0byB0cnVlL2ZhbHNlIHRvIGNlbnRlciAob3Iga2VlcCB0byB0aGUgbGVmdCkgdGhlIG1lbnUgaW4gdGhlIGhvbWUgY29tcG9uZW50XG4kaG9tZS1wYWdlLWNlbnRlcmVkOiBmYWxzZTtcbi8vIFRoZSBwb3NpdGlvbiBvZiB0aGUgYE5pY28gS3VwZmVyYCBtZW51XG4kbmFtZS1sb2dvLXBvc2l0aW9uOiAncmlnaHQnO1xuLy8gVXNlIG9wYWNpdHkgZm9yIHRoZSBIb21lIFBhZ2UgbWVudSB0cmFuc2l0aW9uc1xuJGhvbWUtcGFnZS11c2Utb3BhY2l0eTogdHJ1ZTtcbi8vIFdlIHdhbnQgZXh0cmEgbWFyZ2luIGF0IHRoZSB0b3AgZm9yIGFsbCB0aGUgcGFnZXMuXG4kY29udGVudC13aXRoLW1hcmdpbjogdHJ1ZTtcblxuXG4kYXBwLWZvbnQtc2l6ZTogMjBweDsgLy8gTVVTVCBCRSBQWFxuJGp1bWJvLWZvbnQtc2l6ZTogNyAqICRhcHAtZm9udC1zaXplO1xuJGh1Z2UtZm9udC1zaXplOiA1ICogJGFwcC1mb250LXNpemU7XG4kaDItZm9udC1zaXplOiAzICogJGFwcC1mb250LXNpemU7XG4kYmlnLWZvbnQtc2l6ZTogMiAqICRhcHAtZm9udC1zaXplO1xuXG4kbmFtZS1sb2dvLXRvcDogNXJlbTtcbiRuYW1lLWxvZ28tcmlnaHQ6IDEzcmVtO1xuJG5hbWUtbG9nby1sZWZ0OiA1cmVtO1xuJG5hbWUtbG9nby1yaWdodC1ob3ZlcjogJG5hbWUtbG9nby1yaWdodCArIDJyZW07XG4kbmFtZS1sb2dvLWxlZnQtaG92ZXI6IDZyZW07XG5cbiRhcHAtcm93LXRvcDogNXJlbTtcblxuLy8gSG93IG11Y2ggdG8gaW5kZW50IHN0dWZmIGluIHRoZSBob21lIHBhZ2Ugd2hlbiB3ZSBob3ZlciBvbiB0aGVtXG4kaW5kZW50LWhvdmVyOiA0cmVtO1xuXG4kYXBwLXJvdy13aWR0aDogNzUlO1xuJGFwcC1yb3ctd2lkdGgtc206IDk1JTtcblxuJGFwcC1yb3ctdGV4dC1wYWRkaW5nOiAyLjVyZW07XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], carouselElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['carouselElement', { static: true }]
        }], books: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalBooks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], wrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastBook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WHAV":
/*!*********************************************!*\
  !*** ./src/app/modules/book/book.module.ts ***!
  \*********************************************/
/*! exports provided: BookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookModule", function() { return BookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~app/shared */ "M0ag");
/* harmony import */ var _app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~app/modules/book/book.component */ "aEx7");




class BookModule {
}
BookModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BookModule });
BookModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BookModule_Factory(t) { return new (t || BookModule)(); }, imports: [[
            _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BookModule, { declarations: [_app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]], imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]], exports: [_app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                declarations: [
                    _app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]
                ],
                exports: [
                    _app_modules_book_book_component__WEBPACK_IMPORTED_MODULE_2__["BookComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "aEx7":
/*!************************************************!*\
  !*** ./src/app/modules/book/book.component.ts ***!
  \************************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BookComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "small", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.book.pages + " pages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class BookComponent {
    constructor() {
        this.book = {};
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(); };
BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], inputs: { book: "book" }, decls: 7, vars: 6, consts: [[1, "book-title"], ["target", "_blank", 1, "book-link", 3, "href", "innerHTML"], [1, "flex-row"], [1, "flex-column", "book-img-box"], [1, "book-img", 3, "src", "alt"], ["class", "secondary", 3, "innerHTML", 4, "ngIf"], [1, "book-descr", 3, "innerHTML"], [1, "secondary", 3, "innerHTML"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookComponent_small_5_Template, 1, 1, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.book.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("innerHTML", ctx.book.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.book.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.book.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.book.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.book.descr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n[_nghost-%COMP%]   .book-title[_ngcontent-%COMP%] {\n  padding: 0 0 25px 0;\n  margin: 0;\n}\n\n[_nghost-%COMP%]   .book-title[_ngcontent-%COMP%]   .book-link[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n[_nghost-%COMP%]   .book-img-box[_ngcontent-%COMP%] {\n  flex: 0 0 35%;\n}\n\n[_nghost-%COMP%]   .book-img-box[_ngcontent-%COMP%]   .book-img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n[_nghost-%COMP%]   .book-descr[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  padding: 0 25px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGVzL2dsb2JhbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUdFLGFBQWE7RUFDYixzQkFBc0I7QUFMeEI7O0FBQ0E7RUFPSSxtQkFBNEI7RUFDNUIsU0FBUztBQUpiOztBQUpBO0VBVU0sZUNBNEI7QURGbEM7O0FBUkE7RUFjSSxhQUFhO0FBRmpCOztBQVpBO0VBaUJNLFlBQVk7QUFEbEI7O0FBaEJBO0VBc0JJLGFBQWE7RUFDYixlQXpCZTtFQTBCZixTQUFTO0FBRmIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2dsb2JhbHMnO1xuXG4kYm9vay1wYWRkaW5nOiAyNXB4O1xuXG46aG9zdCB7XG4gIC8vZmxleDogMCAxIDI1JTtcbiAgLy9wYWRkaW5nOiAkYm9vay1wYWRkaW5nO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5ib29rLXRpdGxlIHtcbiAgICBwYWRkaW5nOiAwIDAgJGJvb2stcGFkZGluZyAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAuYm9vay1saW5rIHtcbiAgICAgIGZvbnQtc2l6ZTogJGJpZy1mb250LXNpemU7XG4gICAgfVxuICB9XG4gIC5ib29rLWltZy1ib3gge1xuICAgIGZsZXg6IDAgMCAzNSU7XG4gICAgLmJvb2staW1nIHtcbiAgICAgIC8vZmxleDogMCAwIDEwMCU7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAvL21heC1oZWlnaHQ6IDMwMHB4O1xuICAgIH1cbiAgfVxuICAuYm9vay1kZXNjciB7XG4gICAgZmxleDogMCAwIDUwJTtcbiAgICBwYWRkaW5nOiAwICRib29rLXBhZGRpbmc7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4iLCIvLyBzZXQgdG8gdHJ1ZS9mYWxzZSB0byBjZW50ZXIgKG9yIGtlZXAgdG8gdGhlIGxlZnQpIHRoZSBtZW51IGluIHRoZSBob21lIGNvbXBvbmVudFxuJGhvbWUtcGFnZS1jZW50ZXJlZDogZmFsc2U7XG4vLyBUaGUgcG9zaXRpb24gb2YgdGhlIGBOaWNvIEt1cGZlcmAgbWVudVxuJG5hbWUtbG9nby1wb3NpdGlvbjogJ3JpZ2h0Jztcbi8vIFVzZSBvcGFjaXR5IGZvciB0aGUgSG9tZSBQYWdlIG1lbnUgdHJhbnNpdGlvbnNcbiRob21lLXBhZ2UtdXNlLW9wYWNpdHk6IHRydWU7XG4vLyBXZSB3YW50IGV4dHJhIG1hcmdpbiBhdCB0aGUgdG9wIGZvciBhbGwgdGhlIHBhZ2VzLlxuJGNvbnRlbnQtd2l0aC1tYXJnaW46IHRydWU7XG5cblxuJGFwcC1mb250LXNpemU6IDIwcHg7IC8vIE1VU1QgQkUgUFhcbiRqdW1iby1mb250LXNpemU6IDcgKiAkYXBwLWZvbnQtc2l6ZTtcbiRodWdlLWZvbnQtc2l6ZTogNSAqICRhcHAtZm9udC1zaXplO1xuJGgyLWZvbnQtc2l6ZTogMyAqICRhcHAtZm9udC1zaXplO1xuJGJpZy1mb250LXNpemU6IDIgKiAkYXBwLWZvbnQtc2l6ZTtcblxuJG5hbWUtbG9nby10b3A6IDVyZW07XG4kbmFtZS1sb2dvLXJpZ2h0OiAxM3JlbTtcbiRuYW1lLWxvZ28tbGVmdDogNXJlbTtcbiRuYW1lLWxvZ28tcmlnaHQtaG92ZXI6ICRuYW1lLWxvZ28tcmlnaHQgKyAycmVtO1xuJG5hbWUtbG9nby1sZWZ0LWhvdmVyOiA2cmVtO1xuXG4kYXBwLXJvdy10b3A6IDVyZW07XG5cbi8vIEhvdyBtdWNoIHRvIGluZGVudCBzdHVmZiBpbiB0aGUgaG9tZSBwYWdlIHdoZW4gd2UgaG92ZXIgb24gdGhlbVxuJGluZGVudC1ob3ZlcjogNHJlbTtcblxuJGFwcC1yb3ctd2lkdGg6IDc1JTtcbiRhcHAtcm93LXdpZHRoLXNtOiA5NSU7XG5cbiRhcHAtcm93LXRleHQtcGFkZGluZzogMi41cmVtO1xuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-book',
                templateUrl: './book.component.html',
                styleUrls: ['./book.component.scss']
            }]
    }], null, { book: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~goodreads-goodreads-module~home-page-pages-about.50054a8211d523664e45.js.map
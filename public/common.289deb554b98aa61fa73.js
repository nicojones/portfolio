(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1U8Q":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("M0ag"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.a]]}),t})()},"4Fwo":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("M0ag"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.a]]}),t})(),r=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},imports:[[i.a,s]]}),t})()},Cu4v:function(t,e,n){"undefined"!=typeof window&&window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,(function(e){return t[e]}).bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=function(){function t(t){if(this.count=3,this.move=1,this.touch=!1,this.mode="align",this.buttons=!0,this.dots=!1,this.rewind=!0,this.autoplay=0,this.animation=500,null!=t){for(var e in t)t.hasOwnProperty(e)&&"responsive"!==e&&(this[e]=t[e]);null!=t.responsive&&(this.responsive=new i.ResponsiveMap(t.responsive,this))}}return t.prototype.getBreakpointOptions=function(){if(null==this.responsive)return this;var t=window.innerWidth||document.body.clientWidth,e=null,n=0;for(var i in this.responsive)if(this.responsive.hasOwnProperty(i)){var o=this.responsive[i],s=parseInt(i,10);s>=n&&s<=t&&(e=o,n=s)}return e},t}();e.Options=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.listeners={}}return t.prototype.on=function(t,e){var n=this.listeners[t];null==n&&(this.listeners[t]=n=[]),n.push(e)},t.prototype.trigger=function(t,e){var n=this.listeners[t];if(null!=n)for(var i=0,o=n;i<o.length;i++)(0,o[i])(e)},t.prototype.off=function(){this.listeners={}},t}();e.EventEmitter=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.ResponsiveMap=function(t,e){if(null!=t)for(var n in t)if(t.hasOwnProperty(n)){var o=new i.Options(t[n]);if(null!=e)for(var s in e)e.hasOwnProperty(s)&&"responsive"!==s&&null==t[n][s]&&(o[s]=e[s]);this[n]=o}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4);e.Carousel=i.Carousel;var o=n(0);e.Options=o.Options;var s=n(2);e.ResponsiveMap=s.ResponsiveMap},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(0),a=n(5),c=n(7),u=n(8),l=n(9),h=n(10);n(11);var p=function(t){function e(e,n){var i=t.call(this)||this;if(i.carouselElement="string"==typeof e?document.querySelector(e):e,null==i.carouselElement)throw new Error("Missing root latte-carousel element.");if(null!=i.carouselElement.querySelector(".latte-content"))throw new Error("Cannot create multiple instances using the same latte-carousel element.");return i.originalHtml=i.carouselElement.innerHTML,i.createContainers(),i.contentElement=i.carouselElement.children[0],i.stageElement=i.contentElement.children[0],i.itemElements=i.stageElement.children,i.options=new r.Options(n),i.stage=new a.Stage(i.contentElement,i.stageElement,i.itemElements,i.options),i.touch=new h.Touch(i.contentElement,i.stage,i.options),i.buttons=new u.Buttons(i.carouselElement,i.contentElement,i.stage,i.options),i.dots=new l.Dots(i.carouselElement,i.stage,i.options),i.autoplay=new c.Autoplay(i.carouselElement,i.stage,i.options),i.onWindowResizeListener=i.onWindowResize.bind(i),window.addEventListener("resize",i.onWindowResizeListener),i.stage.on("move",i.onStageMove.bind(i)),i.stage.on("moved",i.onStageMoved.bind(i)),i.update(),i.on("previous",i.onCarouselPrevious.bind(i)),i.on("next",i.onCarouselNext.bind(i)),i.on("goto",i.onCarouselGoto.bind(i)),i.on("update",i.onCarouselUpdate.bind(i)),i.on("remove",i.onCarouselRemove.bind(i)),i}return o(e,t),e.prototype.remove=function(){this.autoplay.remove(),window.removeEventListener("resize",this.onWindowResizeListener),this.off(),this.carouselElement.innerHTML=this.originalHtml},e.prototype.createContainers=function(){this.carouselElement.innerHTML='\n            <div class="latte-content">\n                <div class="latte-stage">\n                    '+this.carouselElement.innerHTML+"\n                </div>\n            </div>\n        "},e.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.stage.update(),this.touch.update(),this.buttons.update(),this.dots.update(),this.autoplay.update()},e.prototype.onWindowResize=function(t){this.update()},e.prototype.onStageMove=function(t){this.dots.update(),this.trigger("move",t)},e.prototype.onStageMoved=function(t){this.dots.update(),this.trigger("moved",t)},e.prototype.onCarouselPrevious=function(t){this.stage.move(-this.currentOptions.move)},e.prototype.onCarouselNext=function(t){this.stage.move(this.currentOptions.move)},e.prototype.onCarouselGoto=function(t){this.stage.moveTo(t)},e.prototype.onCarouselUpdate=function(t){this.update()},e.prototype.onCarouselRemove=function(t){this.remove()},e}(s.EventEmitter);e.Carousel=p},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(6),a=function(t){function e(e,n,i,o){var s=t.call(this)||this;return s.contentElement=e,s.stageElement=n,s.itemElements=i,s.options=o,s.currentIndex=0,s.currentPosition=0,s.update(),s}return o(e,t),e.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.contentSize=this.contentElement.getBoundingClientRect().width,this.itemSize=this.contentSize/this.currentOptions.count,this.stageSize=this.itemSize*this.itemElements.length;for(var t=0;t<this.itemElements.length;t++)this.itemElements[t].style.width=this.itemSize+"px";this.stageElement.style.width=this.stageSize+"px",this.move(0,!1)},e.prototype.move=function(t,e){void 0===e&&(e=!0),this.moveTo(this.currentIndex+t,e)},e.prototype.moveTo=function(t,e){var n=this;void 0===e&&(e=!0);var i=this.last();this.currentOptions.rewind&&(t===i+this.currentOptions.move?t=0:t>=i||t===-this.currentOptions.move?t=i:t<=0&&(t=0)),this.currentIndex=t,this.currentIndex=Math.min(Math.max(0,this.currentIndex),i),this.currentPosition=this.currentIndex*this.itemSize*-1,r.Tween.translate(this.stageElement,this.currentPosition,0,e?this.currentOptions.animation:0,(function(){n.trigger("moved")})),this.trigger("move")},e.prototype.drag=function(t){var e=this.last()*this.itemSize*-1;this.currentPosition+=t,this.currentPosition=Math.min(Math.max(e,this.currentPosition),0),r.Tween.translate(this.stageElement,this.currentPosition,0,0),this.trigger("move")},e.prototype.dragEndAlign=function(t){this.currentIndex=this.indexByPosition(t),this.move(0)},e.prototype.dragEndFree=function(t,e){var n=this,i=this.last()*this.itemSize*-1;this.currentPosition+=t,this.currentPosition=Math.min(Math.max(i,this.currentPosition),0),this.currentIndex=this.indexByPosition(e),r.Tween.translate(this.stageElement,this.currentPosition,0,this.currentOptions.animation,(function(){n.currentIndex=n.indexByPosition(e),n.trigger("moved")}))},e.prototype.indexByPosition=function(t){return t?Math.ceil(Math.abs(this.currentPosition)/this.itemSize):Math.floor(Math.abs(this.currentPosition)/this.itemSize)},e.prototype.count=function(){return this.itemElements.length},e.prototype.current=function(){return this.currentIndex},e.prototype.last=function(){return Math.max(0,this.itemElements.length-this.currentOptions.count)},e}(s.EventEmitter);e.Stage=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.translate=function(t,e,n,i,o){var s=this,r=this.getTranslate(t),a=this.animationId++;t.tweenId=a,this.animate(i,(function(i){if(t.tweenId!==a)return!1;var o={x:s.interpolate(r.x,e,i),y:s.interpolate(r.y,n,i)};return s.setTranslate(t,o),!0}),o)},t.animate=function(t,e,n){var i=this;if(0===t)return e(1),void(null!=n&&n());var o=(new Date).getTime(),s=function(){var r=((new Date).getTime()-o)/t,a=Math.min(r,1);e(a)&&(a<1?i.requestFrame(s):null!=n&&n())};this.requestFrame(s)},t.getTranslate=function(t){var e={x:0,y:0},n=t.style["-ms-transform"]||t.style["-webkit-transform"]||t.style["-moz-transform"]||t.style["-o-transform"]||t.style.transform;if(null!=n){var i=/translate\(([0-9.-]+)px,\s?([0-9.-]+)px\)/.exec(n);null!=i&&(e.x=parseFloat(i[1]),e.y=parseFloat(i[2]))}return e},t.setTranslate=function(t,e){var n="translate("+Math.ceil(e.x)+"px, "+Math.ceil(e.y)+"px)";t.style["-ms-transform"]=n,t.style["-webkit-transform"]=n,t.style["-moz-transform"]=n,t.style["-o-transform"]=n,t.style.transform=n},t.requestFrame=function(t){null!=requestAnimationFrame?requestAnimationFrame(t):window.setTimeout(t,1e3/60)},t.interpolate=function(t,e,n){return this.easeOutCubic(n,t,e-t,1)},t.easeOutCubic=function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e},t.animationId=1,t}();e.Tween=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.carouselElement=t,this.stage=e,this.options=n,this.intervalId=0,this.mouseOver=!1,this.carouselElement.addEventListener("mouseenter",this.onMouseEnter.bind(this)),this.carouselElement.addEventListener("mouseleave",this.onMouseLeave.bind(this)),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),this.disableInterval(),this.enableInterval()},t.prototype.remove=function(){this.disableInterval()},t.prototype.enableInterval=function(){this.currentOptions.autoplay>0&&0===this.intervalId&&(this.intervalId=window.setInterval(this.onInterval.bind(this),this.currentOptions.autoplay))},t.prototype.disableInterval=function(){this.intervalId>0&&(window.clearInterval(this.intervalId),this.intervalId=0)},t.prototype.onInterval=function(){this.mouseOver||this.stage.move(this.currentOptions.move)},t.prototype.onMouseEnter=function(){this.mouseOver=!0,this.disableInterval()},t.prototype.onMouseLeave=function(){this.mouseOver=!1,this.enableInterval()},t}();e.Autoplay=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n,i){this.carouselElement=t,this.contentElement=e,this.stage=n,this.options=i,this.previousButton=this.createButton("latte-previous"),this.nextButton=this.createButton("latte-next"),this.carouselElement.insertBefore(this.previousButton,this.contentElement),this.carouselElement.appendChild(this.nextButton),this.previousButton.addEventListener("click",this.onPreviousClick.bind(this)),this.nextButton.addEventListener("click",this.onNextClick.bind(this)),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),!0===this.currentOptions.buttons?(this.previousButton.className="latte-previous",this.nextButton.className="latte-next"):(this.previousButton.className="latte-previous invisible",this.nextButton.className="latte-next invisible")},t.prototype.createButton=function(t){var e=document.createElement("div");return e.className=t,e},t.prototype.onPreviousClick=function(t){this.stage.move(-this.currentOptions.move)},t.prototype.onNextClick=function(t){this.stage.move(this.currentOptions.move)},t}();e.Buttons=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.carouselElement=t,this.stage=e,this.options=n,this.createContainer(),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions(),!0===this.currentOptions.dots?(this.dotsContainer.className="latte-dots",this.createDots(),this.updateActive()):this.dotsContainer.className="latte-dots invisible"},t.prototype.createContainer=function(){this.dotsContainer=document.createElement("div"),this.dotsContainer.className="latte-dots",this.carouselElement.appendChild(this.dotsContainer)},t.prototype.createDots=function(){var t=this.dotCount();if(null==this.dots||this.dots.length!==t){for(var e="",n=0;n<t;n++){var i=n*Math.ceil(this.currentOptions.count);e+='<div class="latte-dot" data-index='+(i=Math.min(i,this.stage.last()))+"></div>"}for(this.dotsContainer.innerHTML=e,this.dots=this.dotsContainer.querySelectorAll(".latte-dot"),n=0;n<this.dots.length;n++)this.dots[n].addEventListener("click",this.onDotClick.bind(this))}},t.prototype.updateActive=function(){for(var t=0;t<this.dots.length;t++){var e=this.dots[t],n=parseFloat(e.getAttribute("data-index")),i=void 0;t+1<this.dots.length&&(i=parseFloat(this.dots[t+1].getAttribute("data-index")));var o="latte-dot"+(this.stage.current()>=n&&(null==i||this.stage.current()<i)?" active":"");e.setAttribute("class",o)}},t.prototype.dotCount=function(){return Math.ceil(this.stage.count()/Math.ceil(this.currentOptions.count))},t.prototype.onDotClick=function(t){var e=parseFloat(t.target.getAttribute("data-index"));this.stage.moveTo(e),this.updateActive()},t}();e.Dots=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n){this.contentElement=t,this.stage=e,this.options=n,this.firstX=0,this.firstY=0,this.previousX=0,this.previousY=0,this.deltaX=0,this.deltaY=0,this.distanceX=0,this.distanceY=0,this.dragMinDistance=20,this.dragFreeMinDelta=3,this.dragFreeMaxDelta=40,this.dragFreeBaseDelta=600,this.state="free",this.contentElement.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!0}),this.contentElement.addEventListener("touchmove",this.onTouchMove.bind(this)),this.contentElement.addEventListener("touchend",this.onTouchEnd.bind(this),{passive:!0}),this.update()}return t.prototype.update=function(){this.currentOptions=this.options.getBreakpointOptions()},t.prototype.onTouchStart=function(t){var e=t.touches[0];this.firstX=this.previousX=e.clientX,this.firstY=this.previousY=e.clientY,this.distanceX=this.distanceY=0},t.prototype.onTouchMove=function(t){var e=t.touches[0];this.deltaX=e.clientX-this.previousX,this.deltaY=e.clientY-this.previousY,this.distanceX+=Math.abs(this.deltaX),this.distanceY+=Math.abs(this.deltaY),this.currentOptions.touch&&("free"===this.state&&(this.distanceX>=this.dragMinDistance||this.distanceY>=this.dragMinDistance)&&(this.state=this.distanceX>=this.distanceY?"drag":"lock"),"drag"===this.state&&(t.cancelable&&t.preventDefault(),this.stage.drag(this.deltaX))),this.previousX=e.clientX,this.previousY=e.clientY},t.prototype.onTouchEnd=function(t){if(this.currentOptions.touch||"drag"===this.state){this.state="free";var e=this.firstX>this.previousX;if("align"===this.currentOptions.mode)this.stage.dragEndAlign(e);else if("free"===this.currentOptions.mode){var n=(Math.min(Math.max(Math.abs(this.deltaX),this.dragFreeMinDelta),this.dragFreeMaxDelta)-this.dragFreeMinDelta)/(this.dragFreeMaxDelta-this.dragFreeMinDelta);if(n>0){var i=n*this.dragFreeBaseDelta*Math.sign(this.deltaX);this.stage.dragEndFree(i,e)}else this.stage.dragEndFree(0,e)}}},t}();e.Touch=i},function(t,e,n){}])},PYwK:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("fXoL"),o=n("ofXK");function s(t,e){1&t&&i.Lb(0,"hr",4)}function r(t,e){if(1&t&&i.Lb(0,"p",5),2&t){const t=i.bc().$implicit;i.gc("innerHTML",t.content,i.nc)}}function a(t,e){if(1&t&&i.Lb(0,"img",6),2&t){const t=i.bc().$implicit;i.Bb("slide-in ",null==t.extra?null:t.extra.className,""),i.gc("src",t.content,i.oc)("alt",null==t.extra?null:t.extra.alt)}}function c(t,e){if(1&t&&(i.Ob(0),i.vc(1,s,1,0,"hr",1),i.vc(2,r,1,1,"p",2),i.vc(3,a,1,5,"img",3),i.Nb()),2&t){const t=e.$implicit;i.zb(1),i.gc("ngIf","hr"===t.type),i.zb(1),i.gc("ngIf","p"===t.type),i.zb(1),i.gc("ngIf","img"===t.type)}}function u(t,e){if(1&t&&(i.Ob(0),i.Lb(1,"a",7),i.Nb()),2&t){const t=e.$implicit;i.zb(1),i.gc("href",t.url,i.oc)("innerHTML",t.text,i.nc)("title",t.title)}}let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Eb({type:t,selectors:[["app-text"]],inputs:{text:"text",links:"links"},decls:2,vars:2,consts:[[4,"ngFor","ngForOf"],["class","slide-in mat-divider",4,"ngIf"],["class","slide-in",3,"innerHTML",4,"ngIf"],[3,"src","class","alt",4,"ngIf"],[1,"slide-in","mat-divider"],[1,"slide-in",3,"innerHTML"],[3,"src","alt"],["target","_blank",1,"slide-in","mt-20",3,"href","innerHTML","title"]],template:function(t,e){1&t&&(i.vc(0,c,4,3,"ng-container",0),i.vc(1,u,2,3,"ng-container",0)),2&t&&(i.gc("ngForOf",e.text),i.zb(1),i.gc("ngForOf",e.links))},directives:[o.j,o.k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),t})()},TfxY:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("Cu4v"),o=n("Nvhu"),s=n("fXoL"),r=n("ofXK");function a(t,e){if(1&t&&s.Lb(0,"small",7),2&t){const t=s.bc();s.gc("innerHTML",t.book.pages+" pages",s.nc)}}let c=(()=>{class t{constructor(){this.book={}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-book"]],inputs:{book:"book"},decls:7,vars:6,consts:[[1,"book-title"],["target","_blank",1,"book-link",3,"href","innerHTML"],[1,"book-item"],[1,"book-img-box"],[1,"book-img",3,"src","alt"],["class","secondary",3,"innerHTML",4,"ngIf"],[1,"book-descr",3,"innerHTML"],[1,"secondary",3,"innerHTML"]],template:function(t,e){1&t&&(s.Qb(0,"h2",0),s.Lb(1,"a",1),s.Pb(),s.Qb(2,"div",2),s.Qb(3,"div",3),s.Lb(4,"img",4),s.vc(5,a,1,1,"small",5),s.Pb(),s.Lb(6,"p",6),s.Pb()),2&t&&(s.zb(1),s.gc("href",e.book.link,s.oc)("innerHTML",e.book.title,s.nc),s.zb(3),s.gc("src",e.book.image,s.oc)("alt",e.book.title),s.zb(1),s.gc("ngIf",e.book.pages),s.zb(1),s.gc("innerHTML",e.book.descr,s.nc))},directives:[r.k],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .book-title[_ngcontent-%COMP%]{padding:0 0 25px;margin:0}[_nghost-%COMP%]   .book-title[_ngcontent-%COMP%]   .book-link[_ngcontent-%COMP%]{font-size:40px}[_nghost-%COMP%]   .book-img-box[_ngcontent-%COMP%]{flex:0 0 35%;display:flex;flex-direction:column}[_nghost-%COMP%]   .book-img-box[_ngcontent-%COMP%]   .book-img[_ngcontent-%COMP%]{width:200px}[_nghost-%COMP%]   .book-descr[_ngcontent-%COMP%]{flex:0 0 50%;padding:0 25px;margin:0}@media (max-width:650px){[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   .book-item[_ngcontent-%COMP%]{flex-direction:column}[_nghost-%COMP%]   .book-item[_ngcontent-%COMP%] > .book-img-box[_ngcontent-%COMP%]{align-items:center}[_nghost-%COMP%]   .book-item[_ngcontent-%COMP%]   .book-descr[_ngcontent-%COMP%]{text-align:justify}}"]}),t})();const u=["carouselElement"];function l(t,e){1&t&&s.Lb(0,"app-book",8),2&t&&s.gc("book",e.$implicit)}let h=(()=>{class t{constructor(){this.books=null,this.totalBooks=null,this.wrap=!0,this.lastBook=null}get index(){return this.carousel?this.carousel.stage.currentIndex+1:1}ngOnInit(){this.lastBook&&(this.books=[...Object(o.a)(this.books),this.lastBook])}ngAfterViewInit(){this.options={touch:!1,mode:"align",rewind:this.wrap,autoplay:0,animation:500,responsive:{0:{count:1.1,mode:"free",buttons:!1},480:{count:1.1,mode:"free",buttons:!1},768:{count:1.1,move:1,buttons:!1},1440:{count:2,move:2,buttons:!1}}},this.buildCarousel()}nextItem(){this.carousel.trigger("next")}prevItem(){this.carousel.trigger("previous")}buildCarousel(){this.carousel=new i.Carousel(this.carouselElement.nativeElement,this.options)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Eb({type:t,selectors:[["app-carousel"]],viewQuery:function(t,e){var n;1&t&&s.rc(u,!0),2&t&&s.kc(n=s.Yb())&&(e.carouselElement=n.first)},inputs:{title:"title",books:"books",totalBooks:"totalBooks",wrap:"wrap",lastBook:"lastBook"},decls:15,vars:6,consts:[[1,"latte-carousel"],["carouselElement",""],["class","book-card latte-item",3,"book",4,"ngFor","ngForOf"],[1,"flex-row","just-center","pagination-title","align-center"],[1,"pagination","flex-row","align-center"],[1,"paginate","left",3,"disabled","click"],[1,"pagination-counter"],[1,"paginate","right",3,"disabled","click"],[1,"book-card","latte-item",3,"book"]],template:function(t,e){1&t&&(s.Qb(0,"div",0,1),s.vc(2,l,1,1,"app-book",2),s.Pb(),s.Qb(3,"h2",3),s.Qb(4,"span"),s.xc(5),s.Pb(),s.Qb(6,"span",4),s.Qb(7,"button",5),s.Xb("click",(function(){return e.prevItem()})),s.Lb(8,"i"),s.Lb(9,"i"),s.Pb(),s.Qb(10,"span",6),s.xc(11),s.Pb(),s.Qb(12,"button",7),s.Xb("click",(function(){return e.nextItem()})),s.Lb(13,"i"),s.Lb(14,"i"),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.zb(2),s.gc("ngForOf",e.books),s.zb(3),s.yc(e.title),s.zb(2),s.gc("disabled",!e.wrap&&1===e.index),s.zb(4),s.Ac("",e.index," / ",e.totalBooks||e.books.length,""),s.zb(1),s.gc("disabled",!e.wrap&&e.index===e.books.length))},directives:[r.j,c],styles:[".pagination-title[_ngcontent-%COMP%]{font-size:60px}@media (max-width:650px){.pagination-title[_ngcontent-%COMP%]{font-size:20px}}.pagination-title[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]{margin-left:30px}"]}),t})()}}]);
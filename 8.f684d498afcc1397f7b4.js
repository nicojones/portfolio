(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/1Ee":function(t,e,n){"use strict";n.r(e),n.d(e,"AboutModule",(function(){return U}));var s=n("tyNb"),o=n("M0ag"),i=n("io67"),r=n("aDQ/"),a=n("o0su"),c=n("yCtX"),l=n("DH7j"),h=n("7o/Q"),u=n("Lhse"),b=n("zx2A");class p{constructor(t){this.resultSelector=t}call(t,e){return e.subscribe(new g(t,this.resultSelector))}}class g extends h.a{constructor(t,e,n=Object.create(null)){super(t),this.resultSelector=e,this.iterators=[],this.active=0,this.resultSelector="function"==typeof e?e:void 0}_next(t){const e=this.iterators;Object(l.a)(t)?e.push(new d(t)):e.push("function"==typeof t[u.a]?new f(t[u.a]()):new x(this.destination,this,t))}_complete(){const t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(let n=0;n<e;n++){let e=t[n];e.stillUnsubscribed?this.destination.add(e.subscribe()):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const t=this.iterators,e=t.length,n=this.destination;for(let i=0;i<e;i++){let e=t[i];if("function"==typeof e.hasValue&&!e.hasValue())return}let s=!1;const o=[];for(let i=0;i<e;i++){let e=t[i],r=e.next();if(e.hasCompleted()&&(s=!0),r.done)return void n.complete();o.push(r.value)}this.resultSelector?this._tryresultSelector(o):n.next(o),s&&n.complete()}_tryresultSelector(t){let e;try{e=this.resultSelector.apply(this,t)}catch(n){return void this.destination.error(n)}this.destination.next(e)}}class f{constructor(t){this.iterator=t,this.nextResult=t.next()}hasValue(){return!0}next(){const t=this.nextResult;return this.nextResult=this.iterator.next(),t}hasCompleted(){const t=this.nextResult;return Boolean(t&&t.done)}}class d{constructor(t){this.array=t,this.index=0,this.length=0,this.length=t.length}[u.a](){return this}next(t){const e=this.index++;return e<this.length?{value:this.array[e],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class x extends b.b{constructor(t,e,n){super(t),this.parent=e,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[u.a](){return this}next(){const t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(t){this.buffer.push(t),this.parent.checkIterators()}subscribe(){return Object(b.c)(this.observable,new b.a(this))}}const m={title:"More on Goodreads.com",link:"https://www.goodreads.com/review/list/48022935-nico-jones?ref=nav_mybooks&shelf=read",image:"/assets/images/nico.png",descr:"This were the books I read since January last year. If you would like to see the complete list of books, please visit my profile on Goodreads.",pages:null};var k=n("fXoL"),v=n("ofXK"),w=n("PYwK"),y=n("TfxY");function C(t,e){if(1&t&&k.Lb(0,"span",10),2&t){const t=e.$implicit,n=e.index,s=k.bc();k.Cb("shown",s.plusIndex%s.aboutPage.title.first.length===n),k.gc("innerHTML",t,k.oc)}}function P(t,e){if(1&t&&k.Lb(0,"span",10),2&t){const t=e.$implicit,n=e.index,s=k.bc();k.Cb("shown",s.plusIndex%s.aboutPage.title.multi.length===n),k.gc("innerHTML",t,k.oc)}}function z(t,e){if(1&t&&k.Lb(0,"span",10),2&t){const t=e.$implicit,n=e.index,s=k.bc();k.Cb("shown",s.plusIndex%s.aboutPage.title.last.length===n),k.gc("innerHTML",t,k.oc)}}function I(t,e){1&t&&(k.Ob(0),k.zc(1,"some books..."),k.Nb())}function O(t,e){1&t&&(k.Ob(0),k.zc(1,"no books."),k.Nb())}function S(t,e){1&t&&(k.Ob(0),k.zc(1,"one book."),k.Nb())}function L(t,e){if(1&t&&(k.Ob(0),k.zc(1),k.Nb()),2&t){const t=k.bc(2);k.zb(1),k.Cc(" ",null==t.shelf.reading?null:t.shelf.reading.reading," books, among them ",t.shelf.reading.books[0].title,". ")}}function j(t,e){if(1&t&&(k.Ob(0,11),k.xc(1,O,2,0,"ng-container",12),k.xc(2,S,2,0,"ng-container",12),k.xc(3,L,2,2,"ng-container",13),k.Nb()),2&t){const t=k.bc();k.gc("ngSwitch",t.shelf.reading.reading),k.zb(1),k.gc("ngSwitchCase",0),k.zb(1),k.gc("ngSwitchCase",1)}}function M(t,e){if(1&t&&k.Lb(0,"app-carousel",14),2&t){const t=k.bc();k.gc("books",t.shelf.read.books)("title",t.title)("wrap",!0)("totalBooks",t.shelf.read.totalRead)("lastBook",t.lastBook)}}let R=(()=>{class t{constructor(t,e,n){this.route=t,this.booksService=e,this.ref=n,this.RouteUrls=i.a,this.shelf=a.b.shelf,this.lastBook=m,this.title="books I've read",this.plusIndex=0,this.aboutPage=this.route.snapshot.data.aboutPage,function(...t){const e=t[t.length-1];return"function"==typeof e&&t.pop(),Object(c.a)(t,void 0).lift(new p(e))}(this.booksService.getCurrentlyReading(),this.booksService.getReadBooks()).subscribe(()=>this.ref.markForCheck()),setInterval(()=>{++this.plusIndex,this.ref.markForCheck()},5e3)}}return t.\u0275fac=function(e){return new(e||t)(k.Kb(s.a),k.Kb(a.b),k.Kb(k.h))},t.\u0275cmp=k.Eb({type:t,selectors:[["app-about"]],decls:20,vars:10,consts:[[1,"jumbo","center","landing"],[1,"plus-box","slide-in"],[3,"innerHTML","shown",4,"ngFor","ngForOf"],[1,"app-row","bottom-padding"],[1,"text","flex-column",3,"text"],[1,"text","slide-in"],[4,"ngIf"],[3,"ngSwitch",4,"ngIf"],[3,"routerLink"],[3,"books","title","wrap","totalBooks","lastBook",4,"ngIf"],[3,"innerHTML"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"books","title","wrap","totalBooks","lastBook"]],template:function(t,e){1&t&&(k.Qb(0,"h1",0),k.Qb(1,"span",1),k.xc(2,C,1,3,"span",2),k.Pb(),k.Lb(3,"br"),k.Qb(4,"span",1),k.xc(5,P,1,3,"span",2),k.Pb(),k.Lb(6,"br"),k.Qb(7,"span",1),k.xc(8,z,1,3,"span",2),k.Pb(),k.Pb(),k.Qb(9,"div",3),k.Lb(10,"app-text",4),k.Qb(11,"p",5),k.zc(12,"Currently reading "),k.xc(13,I,2,0,"ng-container",6),k.xc(14,j,4,3,"ng-container",7),k.zc(15," You can see them "),k.Qb(16,"a",8),k.zc(17,"here"),k.Pb(),k.zc(18,".\n"),k.Pb(),k.xc(19,M,1,5,"app-carousel",9),k.Pb()),2&t&&(k.gc("@slideIn",void 0),k.zb(2),k.gc("ngForOf",e.aboutPage.title.first),k.zb(3),k.gc("ngForOf",e.aboutPage.title.multi),k.zb(3),k.gc("ngForOf",e.aboutPage.title.last),k.zb(1),k.gc("@slideIn",void 0),k.zb(1),k.gc("text",e.aboutPage.text),k.zb(3),k.gc("ngIf",!e.shelf.reading),k.zb(1),k.gc("ngIf",e.shelf.reading),k.zb(2),k.gc("routerLink","/"+e.RouteUrls.Reading),k.zb(3),k.gc("ngIf",null==e.shelf.read?null:e.shelf.read.books))},directives:[v.j,w.a,v.k,s.d,v.l,v.m,v.n,y.a],styles:[".plus-box[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center}.plus-box[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{transition:all .4s;position:absolute;opacity:0}.plus-box[_ngcontent-%COMP%] > span.shown[_ngcontent-%COMP%]{opacity:1}app-carousel[_ngcontent-%COMP%]{margin-top:50px}"],data:{animation:[Object(r.b)()]},changeDetection:0}),t})();var _=n("4Fwo"),B=n("LRne"),Q=n("AytR"),F=n("vkgz"),H=n("tk/3");let N=(()=>{class t{constructor(t){this.http=t}resolve(){return t.aboutPage?Object(B.a)(t.aboutPage):this.http.get(Q.a.getUrl+"/about-section.json").pipe(Object(F.a)(e=>t.aboutPage=e))}}return t.\u0275fac=function(e){return new(e||t)(k.Ub(H.a))},t.\u0275prov=k.Gb({token:t,factory:t.\u0275fac}),t})();var T=n("1U8Q");let U=(()=>{class t{}return t.\u0275mod=k.Ib({type:t}),t.\u0275inj=k.Hb({factory:function(e){return new(e||t)},providers:[a.b,N],imports:[[s.e.forChild([{path:"",component:R,resolve:{aboutPage:N}}]),o.a,_.a,T.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ry1Y:function(n,e,t){"use strict";t.r(e),t.d(e,"HomePageModule",(function(){return p}));var o=t("M0ag"),i=t("tyNb"),c=t("o0su"),r=t("aDQ/"),l=t("2Vo4"),a=t("fXoL"),s=t("ofXK");function b(n,e){if(1&n&&a.Lb(0,"small",11),2&n){const n=a.bc().$implicit;a.gc("innerHTML",n.mini,a.oc)}}function u(n,e){if(1&n){const n=a.Rb();a.Qb(0,"div",6),a.Qb(1,"h1",7),a.Qb(2,"a",8),a.Xb("click",(function(e){return a.nc(n),e.stopPropagation()})),a.Pb(),a.Pb(),a.Qb(3,"h1",9),a.zc(4),a.xc(5,b,1,1,"small",10),a.Pb(),a.Pb()}if(2&n){const n=e.$implicit;a.Cb("accent",n.accent),a.zb(2),a.gc("routerLink","/"+n.url)("innerHTML",n.textHover,a.oc),a.zb(2),a.Bc(" ",n.text," "),a.zb(1),a.gc("ngIf",n.mini)}}function g(n,e){if(1&n){const n=a.Rb();a.Qb(0,"div",2),a.Xb("click",(function(){a.nc(n);const e=a.bc();return e.clientOs.isMobile&&e.toggleMenu()})),a.Qb(1,"div",3),a.Xb("@slideUnder.done",(function(){return e.ngIf.loading=!1})),a.xc(2,u,6,6,"div",4),a.Pb(),a.Lb(3,"div",5),a.Pb()}if(2&n){const n=e.ngIf,t=a.bc();a.zb(1),a.Cb("show-menu",t.showMenu%2)("hover-effects",!(n.loading||t.clientOs.isMobile)),a.gc("@slideUnder",void 0),a.zb(1),a.gc("ngForOf",t.homePage.title)}}function m(n,e){if(1&n){const n=a.Rb();a.Qb(0,"span",12),a.Xb("click",(function(){return a.nc(n),a.bc().toggleMenu()})),a.zc(1),a.Pb()}if(2&n){const n=a.bc();a.zb(1),a.Ac(n.homePage.mobileTap)}}const h=function(){return{loading:!0}};let d=(()=>{class n{constructor(n){this.route=n,this.clientOs=Object(c.c)().getItem("co"),this.homePage=this.route.snapshot.data.homePage}get showMenu(){return n.showMenu$.value}toggleMenu(){n.showMenu$.next(this.showMenu+1)}}return n.showMenu$=new l.a(0),n.\u0275fac=function(e){return new(e||n)(a.Kb(i.a))},n.\u0275cmp=a.Eb({type:n,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","app-row home",3,"click",4,"ngIf"],["class","tap-anywhere",3,"click",4,"ngIf"],[1,"app-row","home",3,"click"],[1,"jumbo-box"],["class","jumbo-line fade-in slide-under",3,"accent",4,"ngFor","ngForOf"],[1,"myself"],[1,"jumbo-line","fade-in","slide-under"],[1,"jumbo-huge","hover-item","link"],[1,"no-style",3,"routerLink","innerHTML","click"],[1,"jumbo-huge","hover-item","hello","slide-under-text"],["class","mini",3,"innerHTML",4,"ngIf"],[1,"mini",3,"innerHTML"],[1,"tap-anywhere",3,"click"]],template:function(n,e){1&n&&(a.xc(0,g,4,6,"div",0),a.xc(1,m,2,1,"span",1)),2&n&&(a.gc("ngIf",a.hc(2,h)),a.zb(1),a.gc("ngIf",e.clientOs.isMobile&&e.showMenu<2))},directives:[s.k,s.j,i.d],styles:[".jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover > h1.hello[_ngcontent-%COMP%], .jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%] > h1.hello[_ngcontent-%COMP%]{color:transparent}.jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover > h1.link[_ngcontent-%COMP%], .jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%] > h1.link[_ngcontent-%COMP%]{color:inherit;width:auto}.home[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center}.home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%]{transition:2s;position:absolute;right:0;width:calc(25% + 15rem);height:90%;top:10%;overflow:hidden;background-image:url(/assets/images/nico-bg.png);background-position:2.5rem 0;background-size:cover;background-repeat:no-repeat;opacity:1;filter:brightness(100%)}@media (max-width:500px){.home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%]{opacity:.3;filter:brightness(100%)}}.jumbo-box[_ngcontent-%COMP%]{z-index:1}.jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]{margin-left:0}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]{transition:all .4s;width:-webkit-max-content;width:max-content}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%]{white-space:nowrap;margin:0 auto;cursor:pointer;display:flex;transition:color .4s,margin .4s;z-index:1}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item.hello[_ngcontent-%COMP%]{z-index:0}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item.link[_ngcontent-%COMP%]{position:absolute;width:0;overflow:hidden;color:transparent}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%] > .mini[_ngcontent-%COMP%]{font-size:1.5rem;float:right;align-self:center;justify-content:center;margin-left:1rem}@media (max-width:500px){.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%] > .mini[_ngcontent-%COMP%]{font-size:1rem}}.jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover{padding-left:4rem}.img-home[_ngcontent-%COMP%]{height:80%;float:right}.tap-anywhere[_ngcontent-%COMP%]{position:fixed;bottom:3rem;width:15rem;left:50%;text-align:center;margin-left:-7.5rem;animation:pulse 3s ease-in-out infinite}@media (orientation:landscape){.tap-anywhere[_ngcontent-%COMP%]{left:1rem;margin-left:0;bottom:10px}}"],data:{animation:[Object(r.c)(),Object(r.a)()]},changeDetection:0}),n})();var f=t("io67"),M=t("Squv");let P=(()=>{class n{}return n.\u0275mod=a.Ib({type:n}),n.\u0275inj=a.Hb({factory:function(e){return new(e||n)},imports:[[i.e.forChild([{path:"",component:d,resolve:{homePage:M.a}},{path:f.b.Contact,loadChildren:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"mABs")).then(n=>n.ContactMeModule)},{path:f.b.About,loadChildren:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"/1Ee")).then(n=>n.AboutModule)},{path:f.b.Projects,loadChildren:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"0kd+")).then(n=>n.MyWorkModule)}])],i.e]}),n})(),p=(()=>{class n{}return n.\u0275mod=a.Ib({type:n}),n.\u0275inj=a.Hb({factory:function(e){return new(e||n)},providers:[M.a],imports:[[o.a,P]]}),n})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ry1Y:function(n,e,t){"use strict";t.r(e),t.d(e,"HomePageModule",(function(){return P}));var o=t("M0ag"),i=t("tyNb"),c=t("o0su"),r=t("aDQ/"),l=t("fXoL"),a=t("ofXK");function s(n,e){if(1&n&&l.Lb(0,"small",11),2&n){const n=l.bc().$implicit;l.gc("innerHTML",n.mini,l.oc)}}function b(n,e){if(1&n){const n=l.Rb();l.Qb(0,"div",6),l.Qb(1,"h1",7),l.Qb(2,"a",8),l.Xb("click",(function(e){return l.nc(n),e.stopPropagation()})),l.Pb(),l.Pb(),l.Qb(3,"h1",9),l.zc(4),l.xc(5,s,1,1,"small",10),l.Pb(),l.Pb()}if(2&n){const n=e.$implicit;l.Cb("accent",n.accent),l.zb(2),l.gc("routerLink","/"+n.url)("innerHTML",n.textHover,l.oc),l.zb(2),l.Bc(" ",n.text," "),l.zb(1),l.gc("ngIf",n.mini)}}function m(n,e){if(1&n){const n=l.Rb();l.Qb(0,"div",2),l.Xb("click",(function(){l.nc(n);const e=l.bc();return e.clientOs.isMobile&&e.toggleMenu()})),l.Qb(1,"div",3),l.Xb("@slideUnder.done",(function(){return e.ngIf.loading=!1})),l.xc(2,b,6,6,"div",4),l.Pb(),l.Lb(3,"div",5),l.Pb()}if(2&n){const n=e.ngIf,t=l.bc();l.zb(1),l.Cb("show-menu",t.showMenu%2)("hover-effects",!(n.loading||t.clientOs.isMobile)),l.gc("@slideUnder",void 0),l.zb(1),l.gc("ngForOf",t.homePage.title)}}function g(n,e){if(1&n){const n=l.Rb();l.Qb(0,"span",12),l.Xb("click",(function(){return l.nc(n),l.bc().toggleMenu()})),l.zc(1),l.Pb()}if(2&n){const n=l.bc();l.zb(1),l.Ac(n.homePage.mobileTap)}}const u=function(){return{loading:!0}};let h=(()=>{class n{constructor(n){this.route=n,this.showMenu=0,this.clientOs=Object(c.c)().getItem("co"),this.homePage=this.route.snapshot.data.homePage}toggleMenu(){++this.showMenu}}return n.\u0275fac=function(e){return new(e||n)(l.Kb(i.a))},n.\u0275cmp=l.Eb({type:n,selectors:[["app-home"]],decls:2,vars:3,consts:[["class","app-row home",3,"click",4,"ngIf"],["class","tap-anywhere",3,"click",4,"ngIf"],[1,"app-row","home",3,"click"],[1,"jumbo-box"],["class","jumbo-line fade-in slide-under",3,"accent",4,"ngFor","ngForOf"],[1,"myself"],[1,"jumbo-line","fade-in","slide-under"],[1,"jumbo-huge","hover-item","link"],[1,"no-style",3,"routerLink","innerHTML","click"],[1,"jumbo-huge","hover-item","hello","slide-under-text"],["class","mini",3,"innerHTML",4,"ngIf"],[1,"mini",3,"innerHTML"],[1,"tap-anywhere",3,"click"]],template:function(n,e){1&n&&(l.xc(0,m,4,6,"div",0),l.xc(1,g,2,1,"span",1)),2&n&&(l.gc("ngIf",l.hc(2,u)),l.zb(1),l.gc("ngIf",e.clientOs.isMobile&&e.showMenu<2))},directives:[a.k,a.j,i.d],styles:[".jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover > h1.hello[_ngcontent-%COMP%], .jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%] > h1.hello[_ngcontent-%COMP%]{color:transparent}.jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover > h1.link[_ngcontent-%COMP%], .jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%] > h1.link[_ngcontent-%COMP%]{color:inherit;width:auto}.home[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center}.home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%]{transition:2s;position:absolute;right:0;width:calc(25% + 15rem);height:90%;top:10%;overflow:hidden;background-image:url(/assets/images/nico.png);background-position:2.5rem 0;background-size:cover;background-repeat:no-repeat;opacity:1;filter:brightness(50%)}@media (max-width:500px){.home[_ngcontent-%COMP%]   .myself[_ngcontent-%COMP%]{opacity:.3;filter:brightness(100%)}}.jumbo-box[_ngcontent-%COMP%]{z-index:1}.jumbo-box.show-menu[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]{margin-left:0}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%]{transition:all .4s;width:-webkit-max-content;width:max-content}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%]{white-space:nowrap;margin:0 auto;cursor:pointer;display:flex;transition:color .4s,margin .4s;z-index:1}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item.hello[_ngcontent-%COMP%]{z-index:0}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item.link[_ngcontent-%COMP%]{position:absolute;width:0;overflow:hidden;color:transparent}.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%] > .mini[_ngcontent-%COMP%]{font-size:1.5rem;float:right;align-self:center;justify-content:center;margin-left:1rem}@media (max-width:500px){.jumbo-box[_ngcontent-%COMP%]   .jumbo-line[_ngcontent-%COMP%] > .hover-item[_ngcontent-%COMP%] > .mini[_ngcontent-%COMP%]{font-size:1rem}}.jumbo-box.hover-effects[_ngcontent-%COMP%] > .jumbo-line[_ngcontent-%COMP%]:hover{padding-left:4rem}.img-home[_ngcontent-%COMP%]{height:80%;float:right}.tap-anywhere[_ngcontent-%COMP%]{position:fixed;bottom:3rem;width:15rem;left:50%;text-align:center;z-index:-1;margin-left:-7.5rem;animation:pulse 3s ease-in-out infinite}@media (orientation:landscape){.tap-anywhere[_ngcontent-%COMP%]{left:1rem;margin-left:0;bottom:10px}}"],data:{animation:[Object(r.c)(),Object(r.a)()]},changeDetection:0}),n})();var d=t("io67"),f=t("Squv");let M=(()=>{class n{}return n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({factory:function(e){return new(e||n)},imports:[[i.e.forChild([{path:"",component:h,resolve:{homePage:f.a}},{path:d.b.Contact,loadChildren:()=>Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"mABs")).then(n=>n.ContactMeModule)},{path:d.b.About,loadChildren:()=>Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"/1Ee")).then(n=>n.AboutModule)},{path:d.b.Projects,loadChildren:()=>Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"0kd+")).then(n=>n.MyWorkModule)}])],i.e]}),n})(),P=(()=>{class n{}return n.\u0275mod=l.Ib({type:n}),n.\u0275inj=l.Hb({factory:function(e){return new(e||n)},providers:[f.a],imports:[[o.a,M]]}),n})()}}]);
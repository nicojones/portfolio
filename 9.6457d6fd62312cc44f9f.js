(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{mABs:function(t,e,n){"use strict";n.r(e),n.d(e,"ContactMeModule",(function(){return h}));var c=n("io67"),o=n("aDQ/"),a=n("fXoL"),i=n("tyNb"),r=n("PYwK");let s=(()=>{class t{constructor(t){this.route=t,this.Routes=c.b,this.contactMe=this.route.snapshot.data.contactMe}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Kb(i.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-contact-me"]],decls:4,vars:4,consts:[[1,"app-row","bottom-padding"],[1,"slide-in","jumbo","center","landing",3,"innerHTML"],[1,"text","flex-column","slide-in",3,"text"],[1,"text","flex-column","slide-in",3,"links"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Lb(1,"h1",1),a.Lb(2,"app-text",2),a.Lb(3,"app-text",3),a.Pb()),2&t&&(a.gc("@slideIn",void 0),a.zb(1),a.gc("innerHTML",e.contactMe.title,a.oc),a.zb(1),a.gc("text",e.contactMe.text),a.zb(1),a.gc("links",e.contactMe.link))},directives:[r.a],styles:[""],data:{animation:[Object(o.b)()]},changeDetection:0}),t})();var l=n("M0ag"),p=n("LRne"),u=n("AytR"),b=n("vkgz"),d=n("tk/3");let f=(()=>{class t{constructor(t){this.http=t}resolve(){return t.contactMePage?Object(p.a)(t.contactMePage):this.http.get(u.a.getUrl+"/contact-section.json").pipe(Object(b.a)(e=>t.contactMePage=e))}}return t.\u0275fac=function(e){return new(e||t)(a.Ub(d.a))},t.\u0275prov=a.Gb({token:t,factory:t.\u0275fac}),t})();var g=n("1U8Q");let h=(()=>{class t{}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},providers:[f],imports:[[i.e.forChild([{path:"",component:s,resolve:{contactMe:f}}]),l.a,g.a]]}),t})()}}]);
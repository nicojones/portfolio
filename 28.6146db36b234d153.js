"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[28],{5028:(h,c,e)=>{e.r(c),e.d(c,{ContactMeModule:()=>C});var o=e(6382),i=e(5774),t=e(4537),l=e(6533),d=e(7466),M=e(1065);let f=(()=>{class n{constructor(s){this.route=s,this.Routes=o.M,this.contactMe=this.route.snapshot.data.contactMe}ngOnInit(){}}return n.\u0275fac=function(s){return new(s||n)(t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-me"]],decls:5,vars:5,consts:[[1,"app-row","bottom-padding"],[3,"url"],[3,"innerHTML"],[1,"text","flex-column","slide-in",3,"text"],[1,"text","flex-column","slide-in",3,"links"]],template:function(s,m){1&s&&(t.TgZ(0,"div",0)(1,"app-back-title",1),t._UZ(2,"span",2),t.qZA(),t._UZ(3,"app-text",3)(4,"app-text",4),t.qZA()),2&s&&(t.Q6J("@slideIn",void 0),t.xp6(1),t.Q6J("url",m.Routes.HOMEPAGE_LINK),t.xp6(1),t.Q6J("innerHTML",m.contactMe.title,t.oJD),t.xp6(1),t.Q6J("text",m.contactMe.text),t.xp6(1),t.Q6J("links",m.contactMe.link))},dependencies:[d.w,M.T],data:{animation:[(0,i.Y)()]},changeDetection:0}),n})();var r=e(5759),v=e(3738);let a=(()=>{class n{constructor(s){this.firebaseApi=s}resolve(){return this.firebaseApi.fetchPageDocument("CONTACT")}}return n.\u0275fac=function(s){return new(s||n)(t.LFG(v.R))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var u=e(1540);let C=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[a],imports:[l.Bz.forChild([{path:"",component:f,resolve:{contactMe:a}}]),r.m,u.Y]}),n})()},3738:(h,c,e)=>{e.d(c,{R:()=>f});var o=e(5598),i=e(7969),t=e(985),l=e(5743),d=e(4537),M=e(4317);let f=(()=>{class r{constructor(a){this.db=a}fetchPageDocument(a){return this.db.object(`/pages/${a}`).valueChanges().pipe((0,o.q)(1))}getProjects(a,u=null){return this.fetchPageDocument(a)}fetchProject(a,u){return this.getProjects(a).pipe((0,i.U)(C=>C.projects.filter(n=>n.url===u)),(0,i.U)(l.eq))}updatePage(a,u){return(0,t.D)(this.db.object(`/pages/${a}`).update(u))}}return r.\u0275fac=function(a){return new(a||r)(d.LFG(M.KQ))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},5774:(h,c,e)=>{e.d(c,{Y:()=>i});var o=e(4091);function i(l=".slide-in"){return(0,o.X$)("slideIn",[(0,o.eR)(":enter",[(0,o.IO)(l,[(0,o.oB)({transform:"translateX(-80px)",opacity:"0"}),(0,o.EY)(400,[(0,o.ru)([(0,o.jt)("400ms ease-out",(0,o.oB)({transform:"translateX(0)"})),(0,o.jt)("400ms 100ms ease-out",(0,o.oB)({opacity:"1"}))])])],{optional:!0})])])}}}]);
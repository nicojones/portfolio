(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0kd+":function(t,e,n){"use strict";n.r(e),n.d(e,"MyWorkModule",(function(){return _}));var o=n("io67"),r=n("aDQ/"),i=n("fXoL"),c=n("tyNb"),a=n("ofXK");function s(t,e){if(1&t&&(i.Qb(0,"a",3),i.Qb(1,"div",4),i.Lb(2,"h2",5),i.Lb(3,"small",6),i.Pb(),i.Qb(4,"div",7),i.Lb(5,"div",8),i.Pb(),i.Pb()),2&t){const t=e.$implicit,n=i.bc();i.gc("routerLink","/"+n.RouteUrls.Projects+"/"+t.url),i.zb(2),i.gc("innerHTML",t.title,i.oc),i.zb(1),i.gc("innerHTML",t.summary,i.oc),i.zb(2),i.tc("background-image: url("+t.image+")")}}let g=(()=>{class t{constructor(t){this.route=t,this.RouteUrls=o.a,this.myWork=this.route.snapshot.data.myWork}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(c.a))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-my-work"]],decls:4,vars:3,consts:[[1,"jumbo","center","landing","slide-in",3,"innerHTML"],[1,"app-row","bottom-padding"],["class","project-item slide-in text no-deco",3,"routerLink",4,"ngFor","ngForOf"],[1,"project-item","slide-in","text","no-deco",3,"routerLink"],[1,"project-item-text"],[1,"my-0","project-name",3,"innerHTML"],[1,"accent","project-summary",3,"innerHTML"],[1,"project-list-image"],[1,"project-list-bg"]],template:function(t,e){1&t&&(i.Qb(0,"div"),i.Lb(1,"h1",0),i.Qb(2,"div",1),i.xc(3,s,6,5,"a",2),i.Pb(),i.Pb()),2&t&&(i.gc("@slideIn",void 0),i.zb(1),i.gc("innerHTML",e.myWork.title,i.oc),i.zb(2),i.gc("ngForOf",e.myWork.projects))},directives:[a.j,c.d],styles:["[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;margin-bottom:4rem}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-item-text[_ngcontent-%COMP%]{flex:1 1 300px;padding:0 20px;display:flex;justify-content:center;text-align:left;flex-direction:column;transition:all .4s}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:40px}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-summary[_ngcontent-%COMP%]{margin-bottom:1rem}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-list-image[_ngcontent-%COMP%]{height:250px;flex:1 1 300px;overflow:hidden}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-list-image[_ngcontent-%COMP%]   .project-list-bg[_ngcontent-%COMP%]{transition:all 10s linear;background-size:cover;height:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .project-item-text[_ngcontent-%COMP%]{background:rgba(241,196,15,.1)}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .project-list-bg[_ngcontent-%COMP%]{transform:scale(1.5)}"],data:{animation:[Object(r.b)()]},changeDetection:0}),t})();var p=n("M0ag"),l=n("LRne"),b=n("AytR"),d=n("vkgz"),m=n("tk/3");let h=(()=>{class t{constructor(t){this.http=t}resolve(){return t.myWork?Object(l.a)(t.myWork):this.http.get(b.a.getUrl+"/work-section.json").pipe(Object(d.a)(e=>t.myWork=e))}}return t.\u0275fac=function(e){return new(e||t)(i.Ub(m.a))},t.\u0275prov=i.Gb({token:t,factory:t.\u0275fac}),t})();var u=n("1U8Q"),j=n("o0su"),M=n("Nvhu"),O=n("jhN1");let P=(()=>{class t{constructor(t){this.el=t,Object(M.a)("loading",this.el.nativeElement)}ngOnInit(){const t=new Image;t.onload=()=>{this.el.nativeElement.style.backgroundImage=`url(${this.backgroundImage})`,setTimeout(()=>{Object(M.d)("loading",this.el.nativeElement)},100)},t.onerror=()=>{this.el.nativeElement.attributes["data-loading"].value="Could not load"},t.src=this.backgroundImage}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(i.l))},t.\u0275dir=i.Fb({type:t,selectors:[["","bgImage",""]],inputs:{backgroundImage:["bgImage","backgroundImage"]}}),t})();const C=["appRow"];let x=(()=>{class t{constructor(t,e,n){this.route=t,this.router=e,this.sanitizer=n,this.RouteUrls=o.a,this.client=Object(j.c)().getItem("co"),this.percentage=0;const r=this.route.snapshot.params.projectUrl;this.project=h.myWork.projects.find(t=>t.url===r),this.project||this.router.navigateByUrl("404",{skipLocationChange:!0}),document.body.style.backgroundColor=this.project.bgColor,Object(M.a)(this.project.textColor,document.body),Object(M.a)("project-view",document.body)}ngOnDestroy(){document.body.style.backgroundColor=null,Object(M.d)(this.project.textColor,document.body),Object(M.d)("project-view",document.body)}safeHTML(t){return t._sanitized=this.sanitizer.bypassSecurityTrustHtml(t.content)}onWindowScroll(){this.percentage=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100}}return t.\u0275fac=function(e){return new(e||t)(i.Kb(c.a),i.Kb(c.c),i.Kb(O.b))},t.\u0275cmp=i.Eb({type:t,selectors:[["app-project"]],viewQuery:function(t,e){var n;1&t&&i.sc(C,!0),2&t&&i.kc(n=i.Yb())&&(e.appRow=n.first)},hostBindings:function(t,e){1&t&&i.Xb("scroll",(function(){return e.onWindowScroll()}),!1,i.mc)},decls:16,vars:13,consts:[["id","progress-bar"],["id","progress-percent",3,"className"],[1,"app-row"],["appRow",""],[1,"jumbo","center","slide-in","landing"],[3,"innerHTML"],[1,"subtitle",3,"innerHTML"],["target","_blank",1,"project-link","subtitle",3,"href"],["src","/assets/icons/external.svg","alt","Open in new tab",1,"external"],[1,"text"],["data-loading","Loading...",1,"project-main-image","right","slide-in",3,"bgImage"],[1,"project-content",3,"innerHTML"],[1,"slide-in"],[1,"back-title","no-deco","back-button","slide-in",3,"routerLink"]],template:function(t,e){1&t&&(i.Qb(0,"div",0),i.Lb(1,"div",1),i.Pb(),i.Qb(2,"div",2,3),i.Qb(4,"h2",4),i.Lb(5,"span",5),i.Lb(6,"span",6),i.Qb(7,"a",7),i.zc(8),i.Lb(9,"img",8),i.Pb(),i.Pb(),i.Qb(10,"div",9),i.Lb(11,"div",10),i.Lb(12,"div",11),i.Lb(13,"hr",12),i.Qb(14,"a",13),i.zc(15,"back to Projects"),i.Pb(),i.Pb(),i.Pb()),2&t&&(i.zb(1),i.uc("width",e.percentage,"%"),i.gc("className",e.project.textColor),i.zb(1),i.Cb("desktop",!e.client.isMobile),i.gc("@slideIn",void 0),i.zb(3),i.gc("innerHTML",e.project.title,i.oc),i.zb(1),i.gc("innerHTML",e.project.summary,i.oc),i.zb(1),i.gc("href",e.project.link,i.pc),i.zb(1),i.Bc(" ",e.project.link,""),i.zb(3),i.gc("bgImage",e.project.image),i.zb(1),i.gc("innerHTML",e.project._sanitized||e.safeHTML(e.project),i.oc),i.zb(2),i.gc("routerLink","/"+e.RouteUrls.Projects))},directives:[P,c.d],styles:["[_nghost-%COMP%]     .center.project-iframe, [_nghost-%COMP%]     .center.project-image{max-height:none}@media (min-width:1200px){[_nghost-%COMP%]     .center.project-iframe, [_nghost-%COMP%]     .center.project-image{width:1100px;max-width:100vw;margin-left:-225px}}[_nghost-%COMP%]     .project-main-image{background-position:50%;background-size:cover;display:flex;justify-content:center;overflow:hidden;margin:0 auto;max-width:100vw;height:50vh;position:relative;width:1000px}[_nghost-%COMP%]     .project-main-image.loading:before{opacity:.8}[_nghost-%COMP%]     .project-main-image:before{transition:all .4s;opacity:0;content:attr(data-loading);position:absolute;width:100%;height:100%;color:#ddd;background:#ccc;font-size:100px;text-align:center;line-height:50vh}[_nghost-%COMP%]     .project-link{transition:all .4s}[_nghost-%COMP%]     .project-link:hover{margin-left:20px}[_nghost-%COMP%]     .external{top:5px;position:relative;opacity:.3;height:20px;margin-left:20px}[_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]{font-size:30px;text-align:center;display:block;margin-top:30px;margin-bottom:3rem;position:relative}[_nghost-%COMP%]   .back-button[_ngcontent-%COMP%]:before{height:30px;background-size:30px}[_nghost-%COMP%]     .project-image{background-position:50%;background-size:contain;background-repeat:no-repeat;display:flex;width:auto;justify-content:center;overflow:hidden;margin:0 auto;max-width:100%;transition:all .4s;max-height:350px}@media screen and (min-width:500px){[_nghost-%COMP%]     .project-image{max-height:calc(350px + 250 * ((100vw - 500px) / 700))}}@media screen and (min-width:1200px){[_nghost-%COMP%]     .project-image{max-height:600px}}[_nghost-%COMP%]     .project-iframe{width:100%;height:350px;border:none}#progress-bar[_ngcontent-%COMP%]{width:100%;top:0;z-index:10;position:fixed;background:transparent;height:3px;transition:all .4s}#progress-bar[_ngcontent-%COMP%]   #progress-percent[_ngcontent-%COMP%]{box-shadow:0 0 8px 0 #333;height:3px;display:inline-block;position:absolute}#progress-bar[_ngcontent-%COMP%]   #progress-percent.white[_ngcontent-%COMP%]{background:#fff}#progress-bar[_ngcontent-%COMP%]   #progress-percent.black[_ngcontent-%COMP%]{background:#050505}","[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]{display:inline-flex;flex-wrap:wrap;margin-bottom:4rem}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-item-text[_ngcontent-%COMP%]{flex:1 1 300px;padding:0 20px;display:flex;justify-content:center;text-align:left;flex-direction:column;transition:all .4s}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{font-size:40px}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-summary[_ngcontent-%COMP%]{margin-bottom:1rem}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-list-image[_ngcontent-%COMP%]{height:250px;flex:1 1 300px;overflow:hidden}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]   .project-list-image[_ngcontent-%COMP%]   .project-list-bg[_ngcontent-%COMP%]{transition:all 10s linear;background-size:cover;height:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .project-item-text[_ngcontent-%COMP%]{background:rgba(241,196,15,.1)}[_nghost-%COMP%]   .project-item[_ngcontent-%COMP%]:hover   .project-list-bg[_ngcontent-%COMP%]{transform:scale(1.5)}"],data:{animation:[Object(r.b)()]}}),t})(),_=(()=>{class t{}return t.\u0275mod=i.Ib({type:t}),t.\u0275inj=i.Hb({factory:function(e){return new(e||t)},providers:[h],imports:[[c.e.forChild([{path:"",resolve:{myWork:h},children:[{path:"",component:g},{path:":projectUrl",component:x}]}]),p.a,u.a]]}),t})()}}]);
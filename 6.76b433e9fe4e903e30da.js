(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jxwG:function(e,t,o){"use strict";o.r(t),o.d(t,"GoodreadsModule",(function(){return f}));var r=o("tyNb"),s=o("M0ag"),n=o("o0su"),a=o("aDQ/"),i=o("io67"),c=o("fXoL"),b=o("TfxY");let d=(()=>{class e{constructor(e){this.booksService=e,this.shelf=n.b.shelf,this.title={reading:"currently reading",read:"read since last january"},this.Routes=i.b}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(n.b))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-goodreads"]],decls:9,vars:6,consts:[[1,"flex-row","app-row","space-around"],[1,"jumbo","slide-in","center","landing","back-title","no-deco",3,"routerLink"],[1,"accent"],[3,"books","title"],[1,"slide-in","w-100"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"a",1),c.zc(2,"I read "),c.Qb(3,"span",2),c.zc(4,"a lot"),c.Pb(),c.zc(5,"."),c.Pb(),c.Lb(6,"app-carousel",3),c.Lb(7,"hr",4),c.Lb(8,"app-carousel",3),c.Pb()),2&e&&(c.gc("@slideIn",void 0),c.zb(1),c.gc("routerLink","/"+t.Routes.About),c.zb(5),c.gc("books",t.shelf.reading.books)("title",t.title.reading),c.zb(2),c.gc("books",t.shelf.read.books)("title",t.title.read))},directives:[r.d,b.a],styles:[""],data:{animation:[Object(a.b)()]},changeDetection:0}),e})();var l=o("4Fwo"),u=o("Squv");let p=(()=>{class e{constructor(e){this.booksService=e}resolve(){return this.booksService.getReadBooks()}}return e.\u0275fac=function(t){return new(t||e)(c.Ub(n.b))},e.\u0275prov=c.Gb({token:e,factory:e.\u0275fac}),e})(),f=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},providers:[n.b,u.b,p],imports:[[s.a,l.a,r.e.forChild([{path:"",component:d,resolve:{reading:u.b,read:p}}])]]}),e})()}}]);
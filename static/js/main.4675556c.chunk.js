(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(55)},38:function(e,t,a){var n={"./CV.svg":39,"./curlyBracket.svg":40,"./github.svg":41,"./gmail.svg":42,"./linkedin.svg":43,"./loading.svg":44};function i(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=38},39:function(e,t,a){e.exports=a.p+"static/media/CV.3736dee4.svg"},40:function(e,t,a){e.exports=a.p+"static/media/curlyBracket.3fd57172.svg"},41:function(e,t,a){e.exports=a.p+"static/media/github.35366c7d.svg"},42:function(e,t,a){e.exports=a.p+"static/media/gmail.dbe4bd2d.svg"},43:function(e,t,a){e.exports=a.p+"static/media/linkedin.b28bcdea.svg"},44:function(e,t,a){e.exports=a.p+"static/media/loading.4e5494f7.svg"},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),l=a.n(c),r=a(2),s=a(3),o=a(5),m=a(4),d=a(6),u=a(16),f=a(17),p=a.n(f),h=function(e){var t=e.className,n=e.name;return i.a.createElement("img",{className:t||"",src:a(38)("./".concat(n,".svg")),alt:n})},v=function(e){var t=e.side;return i.a.createElement("div",{className:"curtain ".concat(t)},i.a.createElement(h,{className:t,name:"curlyBracket"}))},g=(a(45),function(){return i.a.createElement("div",{className:"curtains"},i.a.createElement(v,{side:"left"}),i.a.createElement(v,{side:"right"}))}),x=function(e){var t=e.defaultTitle,a=e.secondaryTitle,n=e.animside,c=e.parallaxdistance;return i.a.createElement("div",{className:"title",animside:n,parallaxdistance:c},i.a.createElement("h1",{className:"primary"},i.a.createElement("span",null,t),i.a.createElement("div",{className:"over"})),i.a.createElement("h1",{className:"secondary"},a))},E=(a(47),function(e){var t=e.data,a=e.secondaryTitles;return i.a.createElement("div",{className:"titles"},t.map(function(e,t){return i.a.createElement("div",null,i.a.createElement(x,{key:t,defaultTitle:e.defaultTitle,secondaryTitle:a[t],animside:e.animside,parallaxdistance:e.parallaxdistance}),i.a.createElement("br",null))}))}),b=function(e){var t=e.icon,a=e.link,n=e.parallaxdistance,c=e.handleHover,l=e.handleClick;return i.a.createElement("div",{className:"icon",icon:t,onMouseEnter:c,onMouseLeave:c},i.a.createElement("div",{className:"parallax-parent",parallaxdistance:n},i.a.createElement("div",{className:"bg"}),i.a.createElement("div",{className:"image"},i.a.createElement(h,{name:t})),"gmail"!==t?i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"}):i.a.createElement("button",{onClick:l})))},k=(a(49),function(e){var t=e.handleHover,a=e.handleClick,n=e.data;return i.a.createElement("div",{className:"icons"},n.map(function(e,n){return i.a.createElement(b,{key:n,icon:e.icon,link:e.link,handleHover:t,handleClick:a,parallaxdistance:e.parallaxdistance})}))}),y=(a(51),{data:[{parallaxdistance:35,animside:"left",defaultTitle:"Stefan Milenkovic"},{parallaxdistance:5,animside:"right",defaultTitle:"Front-End"},{parallaxdistance:35,animside:"left",defaultTitle:"Web Developer"}],secondary:{github:["Check out","My Github","Account"],linkedin:["Check out","My LinkedIn","Account"],gmail:["Send me","an email","(Click to copy)"],CV:["Read my","Personal","Resume (CV)"]}}),w=[{icon:"github",link:"https://github.com/stefaneran",parallaxdistance:45},{icon:"linkedin",link:"https://www.linkedin.com/in/stefan-eran-milenkovic-54a04b93",parallaxdistance:45},{icon:"gmail",link:"",parallaxdistance:45},{icon:"CV",link:"https://docsend.com/view/9vwpmhu",parallaxdistance:45}],O={offsets:{maxOffset:45,maxRotate:15,maxBgOffset:8},delays:{before:200,curtains_length:550,text_length:550,squaresEach:100}},T={general:{siteTitle:"Stefan M. - Web Developer",email:"stefan.eran.milenkovic@gmail.com"}},N=a(1),C=a.n(N),M=O,j=M.delays,S=M.offsets,U=S.maxOffset,B=S.maxRotate,H=S.maxBgOffset,_=function(e,t,a,n,i){return Math.floor((e-t)/t*n*(e>a?i:-1*i))},D=function(){return window.innerWidth<800};function I(){setTimeout(function(){C()(".curtain.left").css({right:"50%"}),C()(".curtain.right").css({left:"50%"}),setTimeout(function(){C()(".title").each(function(){var e=C()(this),t=e.find("span"),a=e.find(".over"),n=e.attr("animside");a.css(n,"0px"),a.css("width","100%"),setTimeout(function(){t.css("visibility","visible"),a.css(n,""),n="left"===n?"right":"left",a.css(n,"0px"),setTimeout(function(){a.css("width","0%")},50)},500)}),setTimeout(function(){C()("body").mousemove(function(e){if(!D()){var t=e.pageX,a=e.pageY,n=window,i=n.innerWidth,c=n.innerHeight,l=i/2,r=c/2,s=_(a,r,c,U,-1),o=_(t,l,i,U,-1),m=_(a,r,c,B,-1),d=_(t,l,i,B,1),u=_(t,l,i,H,-1);C()(".homeSection").css("background-position-x","".concat(50+u,"%")),C()("[parallaxdistance]").each(function(){var e=C()(this),t=1-e.attr("parallaxdistance")/100,a="rotateX(".concat(Math.round(m*t),"deg) rotateY(").concat(Math.round(d*t),"deg)");e.css({top:"".concat(Math.round(s*t),"px"),left:"".concat(Math.round(o*t),"px"),transform:a})})}}),C()("body").mouseenter(function(e){D()||C()("[parallaxdistance]").each(function(){var e=this;C()(this).css({transition:"top 200ms, left 200ms",top:"0px",left:"0px"}),setTimeout(function(){C()(e).css("transition","")},220)})}),C()("body").mouseleave(function(e){D()||C()("[parallaxdistance]").each(function(){var e=this;C()(this).css({transition:"top 200ms, left 200ms",top:"0px",left:"0px"}),setTimeout(function(){C()(e).css("transition","")},220)})})},j.text_length)},j.curtains_length)},j.before)}var W=y,V=w,A=T.general,R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.changeText=function(e){var t=e.currentTarget.getAttribute("icon");a.state.textUp?a.setState({textUp:!1}):a.setState({textUp:!0,secondaryTitles:W.secondary[t]})},a.state={textUp:!1,secondaryTitles:["","",""],modalIsOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){I()}},{key:"componentDidUpdate",value:function(){this.state.textUp?function(){var e=[75,50,25],t=0;C()(".titles .title").each(function(){var a=this;setTimeout(function(){C()(a).find("h1.primary").css("margin-top","-1em")},e[t]),t++})}():function(){var e=[50,25,75],t=0;C()(".titles .title").each(function(){var a=this;setTimeout(function(){C()(a).find("h1.primary").css("margin-top","0em")},e[t]),t++})}()}},{key:"render",value:function(){return i.a.createElement("div",{className:"section homeSection"},i.a.createElement(g,null),i.a.createElement("div",{className:"frontend"},i.a.createElement("div",{className:"titles-background"},i.a.createElement("div",{className:"color-fill",parallaxdistance:"40"})),i.a.createElement(k,{data:V,handleHover:this.changeText,handleClick:this.openModal}),i.a.createElement(E,{data:W.data,secondaryTitles:this.state.secondaryTitles})),i.a.createElement(p.a,{className:"email-modal",isOpen:this.state.modalIsOpen},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"parallax-parent"},i.a.createElement("h1",null,"Copy My Email:"),i.a.createElement("h1",null,A.email))),i.a.createElement("button",{onClick:this.closeModal})))}}]),t}(n.Component),L=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"HomePage",className:"container"},i.a.createElement(R,null))}}]),t}(n.Component),F=(a(53),T.general.siteTitle),J=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),i.a.createElement("link",{rel:"icon",type:"image/png",href:"./static/images/favicon.png"}),i.a.createElement("title",null,F)),i.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4675556c.chunk.js.map
(this.webpackJsonpfifteen=this.webpackJsonpfifteen||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=n(3),s=n(4),l=n(6),d=n(5),m=n(7),u=(n(13),n(14),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={titulo:"Game Fifteen",subTitulo:"Ordene os campos",win:"jogando",box:[],contagem:0},n.loadBox=function(){var e,t,a,o,r=n.state,i=(r.contagem,r.win,[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"\xa0"]),c=1;for(e=Math.floor(1001*Math.random())+500,i.map((function(e,t){return i[t]=e<10&&"\xa0"!==e?"0"+parseInt(e):e}));c<=e;){for(a=0,o=0,t=i.findIndex((function(e){return"\xa0"===e}));0===a;)a=0,o=Math.floor(4*Math.random())+1,0===t&&1!==o&&3!==o?a++:!1,3===t&&2!==o&&3!==o?a++:!1,12===t&&1!==o&&4!==o?a++:!1,15===t&&2!==o&&4!==o?a++:!1,4!==t&&8!==t||1===o?!1:a++,7!==t&&11!==t||2===o?!1:a++,1!==t&&2!==t||3===o?!1:a++,13!==t&&14!==t||4===o?!1:a++,5===t||6===t||9===t||10===t?a++:!1;1===o&&(i[t]=i[t-1],i[t-1]=String("\xa0")),2===o&&(i[t]=i[t+1],i[t+1]=String("\xa0")),3===o&&(i[t]=i[t-4],i[t-4]=String("\xa0")),4===o&&(i[t]=i[t+4],i[t+4]=String("\xa0")),c++}n.setState({box:i,contagem:0,win:"jogando"})},n.playBox=function(e){var t,a=e.currentTarget,o=n.state.box,r=n.state.contagem,i=a.id,c=a.innerHTML;c=(c=c.replace("<strong>","")).replace("</strong>","");var s=o.findIndex((function(e){return"\xa0"===e}));String(s-1)!==i&&String(s+1)!==i&&String(s-4)!==i&&String(s+4)!==i||(o[i]="\xa0",o[s]=c,r++,String(s-4)===i?document.getElementById(s).classList.add("fadeOutUp"):t=!1,String(s+1)===i?document.getElementById(s).classList.add("fadeInLeft"):t=!1,String(s-1)===i?document.getElementById(s).classList.add("fadeInRight"):t=!1,String(s+4)===i?document.getElementById(s).classList.add("fadeOutDown"):t=!1,String(s-4)===i?document.getElementById(i).classList.add("fadeOutDown"):t=!1,String(s+1)===i?document.getElementById(i).classList.add("fadeInRight"):t=!1,String(s-1)===i?document.getElementById(i).classList.add("fadeInLeft"):t=!1,String(s+4)===i?document.getElementById(i).classList.add("fadeOutUp"):t=!1,setTimeout((function(){for(t=0;t<=15;t++)document.getElementById(t).classList.remove("fadeOutUp"),document.getElementById(t).classList.remove("fadeInLeft"),document.getElementById(t).classList.remove("fadeInRight"),document.getElementById(t).classList.remove("fadeOutDown"),n.setState({box:o,contagem:r}),n.winBox()}),200))},n.winBox=function(){var e=n.state.box,t=n.state.win,a=0,o=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","\xa0"];e.map((function(e,t){return e===o[t]&&a++})),t=16===a?t="congrats":"jogando",n.setState({win:t})},n.autoBox=function(){var e,t,a,o,r,i,c=n.state.box,s=n.state.contagem,l=0,d=1,m="Num";d=String(d<10?"0"+d:d),t=c.findIndex((function(e){return e===d})),e=c.findIndex((function(e){return"\xa0"===e})),d=parseInt(d);var u=setInterval((function(){d!==l?(d=String(d<10?"0"+d:d),t=c.findIndex((function(e){return e===d})),d=parseInt(d),e=c.findIndex((function(e){return"\xa0"===e})),"Num"===m?(a=e-t,t<=3?r=1:t>=4&&t<=7?r=2:t>=8&&t<=11?r=3:t>=12&&(r=4),e<=3?o=1:e>=4&&e<=7?o=2:e>=8&&e<=11?o=3:e>=12&&(o=4),r!==o?a<0?(c[e]=c[e+4],c[e+4]="\xa0",s++,-4===a&&(m="Pos")):a>0&&(c[e]=c[e-4],c[e-4]="\xa0",s++):a<-1?(c[e]=c[e+1],c[e+1]="\xa0",s++):a>1?(c[e]=c[e-1],c[e-1]="\xa0",s++):-1===a?(c[e]=c[e+1],c[e+1]="\xa0",s++,m="Pos"):(1!==a||1===e&&2===e&&3===e)&&(1!==a||13===e&&14===e&&15===e)||(c[e]=c[e-4],c[e-4]="\xa0",s++),console.log("1- LNUM: "+r+" LVAZIO: "+o+" go: "+m+" VAZIO: "+e+" NUM: "+t+" DIF: "+a+" C: "+s+" BOX: "+c)):"Pos"===m&&(a=e-l,l<=3?i=1:l>=4&&l<=7?i=2:l>=8&&l<=11?i=3:l>=12&&(i=4),e<=3?o=1:e>=4&&e<=7?o=2:e>=8&&e<=11?o=3:e>=12&&(o=4),i!==o?a<0?(c[e]=c[e+4],c[e+4]="\xa0",s++):a>0&&(e-t!==4||3===e&&7===e&&11===e?e-t!==4||3!==e&&7!==e&&11!==e?(c[e]=c[e-4],c[e-4]="\xa0",s++):(c[e]=c[e-1],c[e-1]="\xa0",s++):(c[e]=c[e+1],c[e+1]="\xa0",s++)):a<0?(c[e]=c[e+1],c[e+1]="\xa0",s++):a>0&&t!==l?(c[e]=c[e-1],c[e-1]="\xa0",s++):t===l?(d++,d=String(d<10?"0"+d:d),t=c.findIndex((function(e){return e===d})),d=parseInt(d),l++,m="Num"):m="Num",console.log("2- LPOS: "+i+" LVAZIO: "+o+" go: "+m+" VAZIO: "+e+" POS: "+l+" DIF: "+a+" C: "+s+" BOX: "+c)),n.setState({box:c,contagem:s})):clearInterval(u)}),500)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadBox()}},{key:"render",value:function(){var e=this,t=this.state,n=t.titulo,a=t.subTitulo,r=t.box,i=t.win,c=t.contagem;return o.a.createElement("div",null,o.a.createElement("div",{className:"border border-0"},o.a.createElement("h1",null," ",n," "),o.a.createElement("h3",null," ",a," "),o.a.createElement("div",{className:i}),r.map((function(t,n){return o.a.createElement("div",{key:n,id:n,className:"box animated",onClick:e.playBox},o.a.createElement("strong",null,t))})),o.a.createElement("button",{className:"ml-5 my-3 float-left",onClick:this.loadBox},o.a.createElement("strong",null,"Reiniciar")),o.a.createElement("button",{className:"mr-5 my-3 float-right",onClick:this.autoBox,disabled:"congrats"===i||"1=1"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("i",{className:"fas fa-cogs fa-lg align-self-center"}),o.a.createElement("strong",null," Auto"))),o.a.createElement("span",null,"Jogadas: ",c)),o.a.createElement("div",{className:"d-flex justify-content-center mt-3"},o.a.createElement("span",{className:"align-middle"},"Visualiza\xe7\xf5es:\xa0"),o.a.createElement("img",{src:"https://megacontador.com.br/img-SNxpCZLlkyz4tJe5-7.gif",alt:""})))}}]),t}(a.Component)),f=function(){return o.a.createElement("div",{className:"App d-flex justify-content-center"},o.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2db183e9.chunk.js.map
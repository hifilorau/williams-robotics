var app={};!function(t){function e(t){return this.burning=null,this.settings=t,this}var i={a:.3,k:.05,w:10,wind:1,strength:1,diffusion:1,flames:[{x:0,hsla:[58,96,89,1],y:0,blur:.1},{x:0,hsla:[51,98,76,1],y:.02,blur:.15},{x:0,hsla:[36,100,60,1],y:.04,blur:.2},{x:0,hsla:[28,91,49,1],y:.08,blur:.25},{x:0,hsla:[19,94,41,1],y:.15,blur:.3},{x:0,hsla:[15,75,34,1],y:.2,blur:.4},{x:0,hsla:[14,66,16,1],y:.5,blur:.5}]};t.fn.burn=function(n,o){var a;if(!1===n)return(a=this.data("_burn"))&&a.off(),this;if("object"==typeof n)o=n;else if("string"==typeof n)return(a=this.data("_burn"))&&void 0!==i[n]?void 0!==o?("title"==n&&a.content.html(o),a.settings[n]=o,!0):a.settings[n]:!1;return o=t.extend({},i,o||{}),this.each(function(){var i=t.extend(!0,{},o),i=new e(i);i.elem=t(this),i.ignite(),i.elem.data("_burn",i)})},e.prototype={ignite:function(){var t=this;return t.burning?t.burning:(t.oldShadow=t.elem.css("text-shadow"),void function e(){t.timer=window.requestAnimationFrame(e),t.burn()}())},wave:function(t,e,i){var n=this.settings;return i*n.a*Math.sin(n.k*t-n.w*e)},burn:function(){var e,i=this,n=this.settings;e=t.map(n.flames,function(t){var e=-t.y,o=Math.sqrt(Math.random());return t.x=i.wave(t.y,Date.now()/1e3,o),(t.x+n.wind)*t.y*n.strength*n.diffusion+"em "+e*n.strength*n.diffusion+"em "+t.blur*n.strength*n.diffusion+"em hsla("+t.hsla[0]+", "+t.hsla[1]+"%, "+t.hsla[2]+"%, "+t.hsla[3]+")"}),i.elem.css("text-shadow",e.join(", "))},off:function(){window.cancelAnimationFrame(this.timer),this.timer=null,this.elem.css("text-shadow",this.oldShadow)}}}(jQuery),function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-t)),o=window.setTimeout(function(){e(i+n)},n);return t=i+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),app.charts=function(){var t="#474657",e={labels:["2009","2010","2011","2012","2013","2014","2015"],datasets:[{label:"VC investment in Robotics in millions",fillColor:t,strokeColor:"#7D2B39",pointColor:"#B9727A",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[13,30,60,69,172,323,500]}]},i={bezierCurve:!0,pointDot:!0,scaleFontColor:"white",showTooltips:!1},n=document.getElementById("line-chart"),o=n.getContext("2d");new Chart(o).Line(e,i);var a=[{value:56,color:t,highlight:"#7D2B39",label:"Automotive"},{value:11,color:"#C19577",highlight:"#7D2B39",label:"Metals"},{value:7,color:"#4B7A72",highlight:"#7D2B39",label:"Food"},{value:6,color:"#71A264",highlight:"#7D2B39",label:"Life sciences/biomedical"},{value:2,color:"##9AC190",highlight:"#7D2B39",label:"Plastics/rubber"},{value:4,color:"#E6C3AB",highlight:"#7D2B39",label:"Semiconductor/electronics"},{value:14,color:"#7D7b60",highlight:"#7D2B39",label:"Other"}],l=document.getElementById("donut-chart"),r=l.getContext("2d");new Chart(r).Doughnut(a,{animateScale:!0,segmentShowStroke:!1})},app.fadeIn=function(){$(".p-2").hide(),$(".flash").hide(),$(".flash-3").hide(),$(".robot-fobot").hide(),setTimeout(function(){$(".flash-3").hide()},4650),setTimeout(function(){$(".p-1").toggle("pulsate"),setTimeout(function(){$(".flash-3").toggle("pulsate",{times:5},100)},200),setTimeout(function(){$(".flash-3").hide(),$(".flash-2").hide(),$(".flash").show(),$(".p-1").hide()},400)},2700),setTimeout(function(){setTimeout(function(){$(".p-2").fadeIn(5e3),$(".robot-fobot").hide(),$(".flash").fadeOut(5e3),$(".flash-3").hide(),$(".p-1").hide()},300)},4300)},app.fadeIn(),app.charts();
//# sourceMappingURL=app.js.map
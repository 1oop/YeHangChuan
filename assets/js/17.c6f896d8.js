(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{527:function(t,l,e){"use strict";e.r(l);var a={name:"SvgBadge",props:{label:String,value:String,color:String},computed:{ll:function(){return this.label.length-1},lv:function(){return this.value.length-1}},methods:{imageWidth:function(t){return 8*t+18},d1:function(){return"M0 0h"+(8*this.ll+9)+"v20H0z"},d2:function(){return"M"+(8*this.ll+9)+" 0h"+(8*this.lv+9)+"v20H"+(8*this.ll+9)+"z"},d3:function(){return"M0 0h"+(8*(this.ll+this.lv)+18)+"v20H0z"}}},i=e(34),n=Object(i.a)(a,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:t.imageWidth(t.ll+t.lv),height:"20"}},[e("linearGradient",{attrs:{id:"b",x2:"0",y2:"100%"}},[e("stop",{attrs:{offset:"0","stop-color":"#bbb","stop-opacity":".1"}}),t._v(" "),e("stop",{attrs:{offset:"1","stop-opacity":".1"}})],1),t._v(" "),e("clipPath",{attrs:{id:"a"+t.imageWidth(t.ll+t.lv)}},[e("rect",{attrs:{width:t.imageWidth(t.ll+t.lv),height:"20",rx:"3",fill:"#fff"}})]),t._v(" "),e("g",{attrs:{"clip-path":"url(#a"+t.imageWidth(t.ll+t.lv)+")"}},[e("path",{attrs:{fill:"#555",d:t.d1()}}),t._v(" "),e("path",{attrs:{fill:t.color,d:t.d2()}}),t._v(" "),e("path",{attrs:{fill:"url(#b)",d:t.d3()}})]),t._v(" "),e("g",{attrs:{fill:"#fff","text-anchor":"middle","font-family":"DejaVu Sans,Verdana,Geneva,sans-serif","font-size":"110"}},[e("text",{attrs:{x:40*t.ll+55,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v(t._s(t.label)+"\n        ")]),t._v(" "),e("text",{attrs:{x:40*t.ll+55,y:"140",transform:"scale(.1)",textLength:80*t.ll-10}},[t._v("\n            "+t._s(t.label)+"\n        ")]),t._v(" "),e("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"150",fill:"#010101","fill-opacity":".3",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")]),t._v(" "),e("text",{attrs:{x:80*t.ll+40*t.lv+125,y:"140",transform:"scale(.1)",textLength:80*t.lv-10}},[t._v(t._s(t.value)+"\n        ")])])],1)}),[],!1,null,"5f034a63",null);l.default=n.exports}}]);
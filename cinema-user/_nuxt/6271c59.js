(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{443:function(e,t,n){"use strict";n.r(t);n(46),n(15),n(56),n(57),n(31),n(74),n(104);var r=n(267),o={props:{PageLink:String},data:function(){return{movieData:r,movieBanner:[]}},mounted:function(){this.movieBanner=this.movieData.filter((function(e){return e.category.includes("comedy")}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},l=n(28),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.movieBanner.slice(0,1),(function(t,r){return n("div",{key:r,staticClass:"group relative overflow-hidden bg-[#313131]"},[n("n-link",{staticClass:"group-hover:scale-[1.1] transition-all duration-700",attrs:{to:e.PageLink+"/"+e.slugify(t.title)}},[n("img",{attrs:{src:t.posterImage,alt:"Banner"}})])],1)})),0)}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{336:function(t,e,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("bc8b34e6",content,!0,{sourceMap:!1})},383:function(t,e,r){"use strict";r(336)},384:function(t,e,r){var n=r(40)((function(i){return i[1]}));n.push([t.i,".newstyle-arrow .swipper-arrow{display:flex;height:30px;width:30px;align-items:center;justify-content:center;border-radius:3px;--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.newstyle-arrow .swipper-arrow:hover{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.pagination-list{margin-top:2rem;display:flex;align-items:center;justify-content:center}.pagination-list li.disabled{display:none}.pagination-list li.active a{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}.pagination-list li a{margin-left:0.25rem;margin-right:0.25rem;display:flex;height:35px;width:35px;align-items:center;justify-content:center;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity));text-align:center;font-size:16px;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.pagination-list li a:hover{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}",""]),n.locals={},t.exports=n},450:function(t,e,r){"use strict";r.r(e);r(15),r(29),r(30),r(46),r(56),r(57),r(59),r(190);var n=r(267),o={components:{SingleProduct:function(){return r.e(3).then(r.bind(null,457))}},data:function(){return{movieData:n,movieSeries:[],currentPage:1,perPage:12}},mounted:function(){this.movieSeries=this.movieData.filter((function(t){return t.category.includes("horror")}))},computed:{getItems:function(){var t=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return this.movieSeries.slice(t,e)},getPaginateCount:function(){return Math.ceil(this.movieSeries.length/this.perPage)}},methods:{paginateClickCallback:function(t){this.currentPage=Number(t)}}},c=(r(383),r(28)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"horror-movie relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8"},t._l(t.getItems,(function(t,e){return r("div",{key:e},[r("SingleProduct",{attrs:{product:t,PageLink:"/movie",btnLink:"/movie"}})],1)})),0),t._v(" "),r("paginate",{staticClass:"pagination-list",attrs:{"page-count":t.getPaginateCount,"prev-text":"<","next-text":">","click-handler":t.paginateClickCallback}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{338:function(e,t,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(41).default)("71405625",content,!0,{sourceMap:!1})},387:function(e,t,n){"use strict";n(338)},388:function(e,t,n){var r=n(40)((function(i){return i[1]}));r.push([e.i,".newstyle-arrow .swipper-arrow{display:flex;height:30px;width:30px;align-items:center;justify-content:center;border-radius:3px;--tw-bg-opacity:1;background-color:rgb(51 51 51 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.newstyle-arrow .swipper-arrow:hover{--tw-bg-opacity:1;background-color:rgb(244 24 28 / var(--tw-bg-opacity))}",""]),r.locals={},e.exports=r},452:function(e,t,n){"use strict";n.r(t);n(15),n(29),n(30),n(46),n(56),n(57);var r=n(138),o=n(267),c={components:{SectionTitle:function(){return n.e(5).then(n.bind(null,462))},SingleProduct:function(){return n.e(3).then(n.bind(null,457))},Swiper:r.Swiper,SwiperSlide:r.SwiperSlide},data:function(){return{movieData:o,comedyMovie:[],comedyMovieOption:{loop:!1,slidesPerView:6,spaceBetween:40,navigation:{nextEl:".comedy-movie .nextbtn",prevEl:".comedy-movie .prevbtn"},breakpoints:{1680:{slidesPerView:6,spaceBetween:40},1300:{slidesPerView:5,spaceBetween:40},1025:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},480:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}}},mounted:function(){this.comedyMovie=this.movieData.filter((function(e){return e.category.includes("comedy")}))}},l=(n(387),n(28)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("SectionTitle",{attrs:{secTionMargin:"border-b-1 border-[#444444]",titleClass:"text-white",title:"Comedy Movie"}}),e._v(" "),n("div",{staticClass:"comedy-movie relative"},[n("Swiper",{attrs:{options:e.comedyMovieOption}},e._l(e.comedyMovie,(function(e,t){return n("Swiper-Slide",{key:t},[n("SingleProduct",{attrs:{product:e,PageLink:"/movie",btnLink:"/movie"}})],1)})),1),e._v(" "),e._m(0)],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex right-0 -top-[74px] absolute newstyle-arrow"},[n("button",{staticClass:"prevbtn swipper-arrow text-[20px] mr-1 text-[#cccccc]"},[n("i",{staticClass:"zmdi zmdi-chevron-left"})]),e._v(" "),n("button",{staticClass:"nextbtn swipper-arrow text-[20px] ml-1 text-[#cccccc]"},[n("i",{staticClass:"zmdi zmdi-chevron-right"})])])}],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{440:function(e,t,r){"use strict";r.r(t);r(46),r(15),r(56),r(57),r(31),r(74),r(104);var o=r(267),l=r(138),n={props:{titleColor:String},components:{Swiper:l.Swiper,SwiperSlide:l.SwiperSlide},data:function(){return{movieData:o,webseriesSlider:[],swiperOption:{slidesPerView:1,loop:!0,spaceBetween:30,pagination:!1,navigation:{nextEl:".hero-slider .hero-slider_arrows__nextbtn",prevEl:".hero-slider .hero-slider_arrows__prevbtn"}}}},mounted:function(){this.webseriesSlider=this.movieData.filter((function(e){return e.category.includes("film")}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},c=r(28),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero-slider group relative"},[r("div",{staticClass:"overflow-hidden"},[r("swiper",{staticClass:"swiper",attrs:{options:e.swiperOption}},e._l(e.webseriesSlider,(function(t,o){return r("swiper-slide",{key:o},[r("div",{staticClass:"slider-banner bg-[#313131]"},[r("n-link",{attrs:{to:"/movie/"+e.slugify(t.title)}},[r("img",{attrs:{src:t.posterImage,alt:"Image"}})])],1)])})),1)],1),e._v(" "),e._m(0)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99"},[r("div",{staticClass:"hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0"},[r("i",{staticClass:"zmdi zmdi-chevron-left bold-important"})]),e._v(" "),r("div",{staticClass:"hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0"},[r("i",{staticClass:"zmdi zmdi-chevron-right bold-important"})])])}],!1,null,"49a4f76a",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[70,47,48,50,51,53],{257:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("4c788c2d",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";r.r(e);var o={props:{logLink:String}},n=r(28),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("n-link",{attrs:{to:t.logLink}},[r("img",{attrs:{src:"/images/logo/logo.png",alt:"Logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},259:function(t){t.exports=JSON.parse('[{"url":"https://www.facebook.com/","iconName":"zmdi zmdi-facebook","mediaName":"facebook"},{"url":"https://www.twitter.com/","iconName":"zmdi zmdi-twitter","mediaName":"twitter"},{"url":"https://www.linkedin.com/","iconName":"zmdi zmdi-linkedin","mediaName":"linkedin"},{"url":"https://www.instagram.com/","iconName":"zmdi zmdi-instagram","mediaName":"instagram"}]')},260:function(t){t.exports=JSON.parse('[{"name":"Home","mainlink":"/home"},{"name":"About US","mainlink":"/about"},{"name":"Series","mainlink":"/series"},{"name":"Contact Us","mainlink":"/contact"},{"name":"Tv Series","mainlink":"/series"},{"name":"Tech","mainlink":"/home"},{"name":"Movie","mainlink":"/movie"},{"name":"Video","mainlink":"/movie"},{"name":"Live","mainlink":"/home"},{"name":"Tv Series","mainlink":"/series"}]')},261:function(t){t.exports=JSON.parse('[{"name":"Report a Bug","mainlink":"/home"},{"name":"Request a Feature","mainlink":"/about"},{"name":"Content Grievance","mainlink":"/home"},{"name":"Movie Request","mainlink":"/home"},{"name":"Submit Your Story","mainlink":"/contact"},{"name":"Privacy Policy","mainlink":"/home"},{"name":"Terms of Services","mainlink":"/contact"},{"name":"Support","mainlink":"/contact"}]')},262:function(t,e,r){"use strict";r(257)},263:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},264:function(t,e,r){"use strict";r.r(e);r(15),r(29),r(30);var o=r(259),n=r(260),l=r(261),c={components:{Logo:function(){return Promise.resolve().then(r.bind(null,258))},BrandLogo:function(){return r.e(22).then(r.bind(null,433))}},data:function(){return{socialData:o,footerMenuData:n,footerSubmenuData:l}}},d=(r(262),r(28)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap md:flex-row flex-col"},[r("div",{staticClass:"flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0"},[r("Logo",{attrs:{logLink:"/home"}}),t._v(" "),r("p",{staticClass:"text-sm text-white w-full sm:w-[75%] my-5"},[t._v("Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.")]),t._v(" "),r("ul",{staticClass:"fotter-socail"},t._l(t.socialData,(function(link,t){return r("li",{key:t,staticClass:"inline-block"},[r("a",{staticClass:"sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2",class:link.mediaName,attrs:{href:link.url}},[r("i",{class:link.iconName})])])})),0)],1),t._v(" "),r("div",{staticClass:"lg:w-3/4 md:w-2/3 w-full"},[r("div",{staticClass:"footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0"},[r("div",{staticClass:"footer-quicklink"},[r("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerMenuData,(function(link,e){return r("li",{key:e,staticClass:"md:mr-10 mr-5 last:mr-0"},[r("n-link",{staticClass:"text-white text-[16px] md:text-[18px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)]),t._v(" "),r("BrandLogo"),t._v(" "),r("div",{staticClass:"footer-quicklink-2"},[r("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerSubmenuData,(function(link,e){return r("li",{key:e,staticClass:"mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2"},[r("n-link",{staticClass:"text-white text-[14px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)])],1)])])}),[],!1,null,"e48bc206",null);e.default=component.exports;installComponents(component,{Logo:r(258).default})},265:function(t,e,r){"use strict";r.r(e);var o=r(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center lg:justify-between lg:flex-row flex-col justify-center"},[t._m(0),t._v(" "),r("div",{staticClass:"login-alert flex items-center md:flex-row flex-col lg:order-2 order-1"},[r("p",{staticClass:"text-white mb-3 md:mb-0 text-[14px] mr-[15px]"},[t._v("Already have an Account? "),r("n-link",{staticClass:"text-white uppercase font-semibold hover:text-[#f4181c]",attrs:{to:"/login"}},[t._v("LOGIN")])],1),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("n-link",{staticClass:"text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",attrs:{to:"/pricing"}},[t._v("Become a Member")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"copyright lg:mt-0 mt-5 lg:order-1 order-2"},[r("p",{staticClass:"copyright-text text-white text-[14px] text-center"},[t._v("\n            Copyright ©2022 All rights reserved\n        ")])])}],!1,null,null,null);e.default=component.exports},279:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("5c482ffc",content,!0,{sourceMap:!1})},280:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("2fd2ad47",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r(279)},304:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,"@-webkit-keyframes fadeUp-data-v-37b41bc8{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeUp-data-v-37b41bc8{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-one[data-v-37b41bc8]{-webkit-animation:fadeUp-data-v-37b41bc8 .5s ease-in-out;animation:fadeUp-data-v-37b41bc8 .5s ease-in-out}@keyframes fadeUp-data-v-37b41bc8{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-two[data-v-37b41bc8]{-webkit-animation:fadeUp-data-v-37b41bc8 .8s ease-in-out;animation:fadeUp-data-v-37b41bc8 .8s ease-in-out}@keyframes fadeUp-data-v-37b41bc8{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-three[data-v-37b41bc8]{-webkit-animation:fadeUp-data-v-37b41bc8 1.1s ease-in-out;animation:fadeUp-data-v-37b41bc8 1.1s ease-in-out}@-webkit-keyframes rollIn-data-v-37b41bc8{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}@keyframes rollIn-data-v-37b41bc8{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}.swiper-slide-active .animation-four[data-v-37b41bc8]{-webkit-animation:rollIn-data-v-37b41bc8 .7s ease-in-out;animation:rollIn-data-v-37b41bc8 .7s ease-in-out}.hero-slider .tvseries[data-v-37b41bc8]{background-position:50%}@media screen and (max-width:1600px)and (min-width:1200px){.hero-slider .tvseries[data-v-37b41bc8]{background-position:68%}}@media screen and (max-width:1199px)and (min-width:768px){.hero-slider .tvseries[data-v-37b41bc8]{background-position:74%}}@media screen and (max-width:767px)and (min-width:340px){.hero-slider .tvseries[data-v-37b41bc8]{background-position:83%}}.hero-slider .tvseries[data-v-37b41bc8]:before{background:linear-gradient(90deg,#0c171f -100%,transparent 70%)}",""]),o.locals={},t.exports=o},305:function(t,e,r){"use strict";r(280)},306:function(t,e,r){var o=r(40)((function(i){return i[1]}));o.push([t.i,"@-webkit-keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-one[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 .5s ease-in-out;animation:fadeUp-data-v-dbc16184 .5s ease-in-out}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-two[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 .8s ease-in-out;animation:fadeUp-data-v-dbc16184 .8s ease-in-out}@keyframes fadeUp-data-v-dbc16184{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}.swiper-slide-active .animation-three[data-v-dbc16184]{-webkit-animation:fadeUp-data-v-dbc16184 1.1s ease-in-out;animation:fadeUp-data-v-dbc16184 1.1s ease-in-out}@-webkit-keyframes rollIn-data-v-dbc16184{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}@keyframes rollIn-data-v-dbc16184{0%{opacity:0;transform:translateX(-100%) rotate(-120deg)}100%{opacity:1;transform:translateX(0px) rotate(0deg)}}.swiper-slide-active .animation-four[data-v-dbc16184]{-webkit-animation:rollIn-data-v-dbc16184 .7s ease-in-out;animation:rollIn-data-v-dbc16184 .7s ease-in-out}.hero-slider .tvseries[data-v-dbc16184]{background-position:50%}@media screen and (max-width:1600px)and (min-width:1200px){.hero-slider .tvseries[data-v-dbc16184]{background-position:68%}}@media screen and (max-width:1199px)and (min-width:1025px){.hero-slider .tvseries[data-v-dbc16184]{background-position:74%}}@media screen and (max-width:1024px)and (min-width:768px){.hero-slider .tvseries[data-v-dbc16184]{background-position:85%}}.hero-slider .tvseries[data-v-dbc16184]:before{background:linear-gradient(90deg,#0c171f 10%,transparent 70%)}",""]),o.locals={},t.exports=o},353:function(t,e,r){"use strict";r.r(e);r(15),r(29),r(30),r(46),r(31),r(74),r(104);var o=r(267),n=r(138),l={props:{titleColor:String,subTitleColor:String,textColor:String,bgColor:String,PageLink:String},components:{BtnDefault:function(){return r.e(6).then(r.bind(null,431))},VideoButton:function(){return Promise.all([r.e(7),r.e(8)]).then(r.bind(null,432))},Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{movieData:o,romanticSlider:[],swiperOption:{slidesPerView:1,loop:!0,spaceBetween:30,pagination:!1,navigation:{nextEl:".hero-slider .hero-slider_arrows__nextbtn",prevEl:".hero-slider .hero-slider_arrows__prevbtn"}}}},mounted:function(){this.romanticSlider=this.movieData.filter((function(t){return 1==t.romanticSlider}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},c=(r(303),r(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider group relative"},[r("div",{staticClass:"overflow-hidden"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.romanticSlider,(function(e,o){return r("swiper-slide",{key:o,staticClass:"flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[605px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 tvseries bg-[#000]",class:e.bgColor,style:{"background-image":"url("+e.posterImage+")"}},[r("div",{staticClass:"slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative"},[r("h1",{staticClass:"title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white",class:e.titleColor},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"flex flex-col sm:flex-row sm:items-center animation-two"},[r("span",{staticClass:"subtitle text-white sm:text-[25px] text-[20px] font-bold sm:mb-0 mb-2"},[t._v(t._s(e.sliderSubtitle))]),t._v(" "),r("span",{staticClass:"text-white sm:text-[25px] text-[20px] font-bold sm:ml-[15px] sm:pl-[15px] ml-0 relative before:hidden sm:before:block sm:before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px]"},[t._v(t._s(e.duration))])]),t._v(" "),r("div",{staticClass:"flex items-center mt-7 sm:mt-10 md:mt-14 animation-three"},[r("n-link",{staticClass:"inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]",attrs:{to:"/"+t.PageLink+"/"+t.slugify(e.title)}},[t._v("Watch Now")])],1)])])})),1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99"},[r("div",{staticClass:"hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0"},[r("i",{staticClass:"zmdi zmdi-chevron-left bold-important"})]),t._v(" "),r("div",{staticClass:"hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0"},[r("i",{staticClass:"zmdi zmdi-chevron-right bold-important"})])])}],!1,null,"37b41bc8",null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);r(15),r(29),r(30),r(46),r(31),r(74),r(104);var o=r(267),n=r(138),l={props:{titleColor:String,subTitleColor:String,textColor:String,bgColor:String,PageLink:String},components:{BtnDefault:function(){return r.e(6).then(r.bind(null,431))},VideoButton:function(){return Promise.all([r.e(7),r.e(8)]).then(r.bind(null,432))},Swiper:n.Swiper,SwiperSlide:n.SwiperSlide},data:function(){return{movieData:o,comboPackSlider:[],swiperOption:{slidesPerView:1,loop:!0,spaceBetween:30,pagination:!1,navigation:{nextEl:".hero-slider .hero-slider_arrows__nextbtn",prevEl:".hero-slider .hero-slider_arrows__prevbtn"}}}},mounted:function(){this.comboPackSlider=this.movieData.filter((function(t){return 1==t.comboPackSlider}))},methods:{slugify:function(text){return text.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},c=(r(305),r(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider group relative"},[r("div",{staticClass:"overflow-hidden"},[r("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.comboPackSlider,(function(e,o){return r("swiper-slide",{key:o,staticClass:"flex items-center tvseries bg-no-repeat bg-cover 2xl:bg-center !h-[380px] md:!h-[450px] lg:!h-[500px] xl:!h-[605px] before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 tvseries bg-[#000]",class:e.bgColor,style:{"background-image":"url("+e.posterImage+")"}},[r("div",{staticClass:"slider-content ml-4 pr-4 xl:ml-10 2xl:ml-[100px] z-9 relative"},[r("h1",{staticClass:"title sm:mb-5 mb-3 lg:mb-[30px] lg:text-[80px] sm:text-[50px] text-[36px] font-bold block leading-[1] animation-one text-white",class:e.titleColor},[t._v(t._s(e.title))]),t._v(" "),r("div",{staticClass:"flex items-center animation-two"},[r("span",{staticClass:"subtitle text-red text-[25px] lg:text-[35px] font-bold"},[t._v(t._s(e.newprice))]),t._v(" "),r("span",{staticClass:"ml-5 subtitle text-white text-[25px] lg:text-[35px] font-bold relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full\n                         before:h-[2px] before:bg-white"},[t._v(t._s(e.oldprice))])]),t._v(" "),r("div",{staticClass:"flex items-center mt-7 sm:mt-10 md:mt-14 animation-three"},[r("n-link",{staticClass:"inline-block rounded-[3px] transition-all duration-300 sm:py-[15px] sm:px-[25px] px-[20px] py-[10px] bg-[#f4181c] text-white font-semibold hover:bg-white hover:text-[#333333] !text-[16px]",attrs:{to:"/"+t.PageLink+"/"+t.slugify(e.title)}},[t._v("Watch Now")])],1)])])})),1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero-slider_arrows flex justify-between w-full absolute top-1/2 -translate-y-1/2 z-99"},[r("div",{staticClass:"hero-slider_arrows__prevbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:ml-5 ml-0"},[r("i",{staticClass:"zmdi zmdi-chevron-left bold-important"})]),t._v(" "),r("div",{staticClass:"hero-slider_arrows__nextbtn swipper-arrow text-red hover:text-white transition-all duration-300 text-[60px] opacity-0 group-hover:opacity-100 group-hover:mr-5 mr-0"},[r("i",{staticClass:"zmdi zmdi-chevron-right bold-important"})])])}],!1,null,"dbc16184",null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);r(15),r(29),r(30);var o={components:{MainHeader:function(){return r.e(4).then(r.bind(null,407))},OffcanvasSidebar:function(){return r.e(2).then(r.bind(null,437))},HeroOne:function(){return Promise.resolve().then(r.bind(null,353))},HeroTwo:function(){return Promise.resolve().then(r.bind(null,354))},SeriesBannerOne:function(){return Promise.all([r.e(1),r.e(18)]).then(r.bind(null,446))},RecentMovie:function(){return r.e(87).then(r.bind(null,410))},OldMovie:function(){return r.e(89).then(r.bind(null,409))},WatchWithFamilyMovie:function(){return r.e(90).then(r.bind(null,411))},AwardedMovie:function(){return r.e(88).then(r.bind(null,408))},HorrorSeries:function(){return Promise.all([r.e(1),r.e(9)]).then(r.bind(null,459))},FooterTop:function(){return Promise.resolve().then(r.bind(null,264))},FooterBottom:function(){return Promise.resolve().then(r.bind(null,265))}},data:function(){return{navOpen:!1}}},n=r(28),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MainHeader"),t._v(" "),r("OffcanvasSidebar",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),r("HeroOne",{attrs:{PageLink:"movie"}}),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]"},[r("RecentMovie")],1),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]"},[r("HorrorSeries")],1),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[r("OldMovie")],1),t._v(" "),r("HeroTwo",{attrs:{PageLink:"movie"}}),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[r("WatchWithFamilyMovie")],1),t._v(" "),r("SeriesBannerOne",{attrs:{PageLink:"series"}}),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[r("AwardedMovie")],1),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]"},[r("FooterTop")],1),t._v(" "),r("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"},[r("FooterBottom")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeroOne:r(353).default,HeroTwo:r(354).default,FooterTop:r(264).default,FooterBottom:r(265).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[75,47,48,53],{257:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("4c788c2d",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n.r(e);var o={props:{logLink:String}},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("n-link",{attrs:{to:t.logLink}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"Logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},259:function(t){t.exports=JSON.parse('[{"url":"https://www.facebook.com/","iconName":"zmdi zmdi-facebook","mediaName":"facebook"},{"url":"https://www.twitter.com/","iconName":"zmdi zmdi-twitter","mediaName":"twitter"},{"url":"https://www.linkedin.com/","iconName":"zmdi zmdi-linkedin","mediaName":"linkedin"},{"url":"https://www.instagram.com/","iconName":"zmdi zmdi-instagram","mediaName":"instagram"}]')},260:function(t){t.exports=JSON.parse('[{"name":"Home","mainlink":"/home"},{"name":"About US","mainlink":"/about"},{"name":"Series","mainlink":"/series"},{"name":"Contact Us","mainlink":"/contact"},{"name":"Tv Series","mainlink":"/series"},{"name":"Tech","mainlink":"/home"},{"name":"Movie","mainlink":"/movie"},{"name":"Video","mainlink":"/movie"},{"name":"Live","mainlink":"/home"},{"name":"Tv Series","mainlink":"/series"}]')},261:function(t){t.exports=JSON.parse('[{"name":"Report a Bug","mainlink":"/home"},{"name":"Request a Feature","mainlink":"/about"},{"name":"Content Grievance","mainlink":"/home"},{"name":"Movie Request","mainlink":"/home"},{"name":"Submit Your Story","mainlink":"/contact"},{"name":"Privacy Policy","mainlink":"/home"},{"name":"Terms of Services","mainlink":"/contact"},{"name":"Support","mainlink":"/contact"}]')},262:function(t,e,n){"use strict";n(257)},263:function(t,e,n){var o=n(40)((function(i){return i[1]}));o.push([t.i,".facebook[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(59 89 152 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(59 89 152 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.facebook[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(0 179 236 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(0 179 236 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.twitter[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(10 102 194 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(10 102 194 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.linkedin[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]{border-width:1px;--tw-border-opacity:1;border-color:rgb(228 64 95 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(228 64 95 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.instagram[data-v-e48bc206]:hover{background-color:transparent;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",""]),o.locals={},t.exports=o},264:function(t,e,n){"use strict";n.r(e);n(15),n(29),n(30);var o=n(259),r=n(260),l=n(261),c={components:{Logo:function(){return Promise.resolve().then(n.bind(null,258))},BrandLogo:function(){return n.e(22).then(n.bind(null,433))}},data:function(){return{socialData:o,footerMenuData:r,footerSubmenuData:l}}},m=(n(262),n(28)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap md:flex-row flex-col"},[n("div",{staticClass:"flex flex-col w-full sm:w-3/4 md:w-1/3 lg:w-1/4 mb-8 md:mb-0"},[n("Logo",{attrs:{logLink:"/home"}}),t._v(" "),n("p",{staticClass:"text-sm text-white w-full sm:w-[75%] my-5"},[t._v("Eiusmod tempor incididunt ut la abore et minim ven exerc itation ulla mco lboris naliquip ex ea comm.")]),t._v(" "),n("ul",{staticClass:"fotter-socail"},t._l(t.socialData,(function(link,t){return n("li",{key:t,staticClass:"inline-block"},[n("a",{staticClass:"sm:h-[35px] sm:w-[35px] h-[30px] w-[30px] text-[14px] flex items-center justify-center rounded-full sm:mr-3 mr-2",class:link.mediaName,attrs:{href:link.url}},[n("i",{class:link.iconName})])])})),0)],1),t._v(" "),n("div",{staticClass:"lg:w-3/4 md:w-2/3 w-full"},[n("div",{staticClass:"footer-top-right 2xl:ml-[50px] lg:ml-[20px] ml-0"},[n("div",{staticClass:"footer-quicklink"},[n("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerMenuData,(function(link,e){return n("li",{key:e,staticClass:"md:mr-10 mr-5 last:mr-0"},[n("n-link",{staticClass:"text-white text-[16px] md:text-[18px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)]),t._v(" "),n("BrandLogo"),t._v(" "),n("div",{staticClass:"footer-quicklink-2"},[n("ul",{staticClass:"flex items-center flex-wrap"},t._l(t.footerSubmenuData,(function(link,e){return n("li",{key:e,staticClass:"mr-10 last:mr-0 relative last:before:hidden before:absolute before:-right-5 before:top-1/2 before:w-[1px] before:h-[15px] before:content-[''] before:bg-[#444444] before:-translate-y-1/2"},[n("n-link",{staticClass:"text-white text-[14px] hover:text-[#f4181c]",attrs:{to:link.mainlink}},[t._v("\n                            "+t._s(link.name)+"\n                        ")])],1)})),0)])],1)])])}),[],!1,null,"e48bc206",null);e.default=component.exports;installComponents(component,{Logo:n(258).default})},265:function(t,e,n){"use strict";n.r(e);var o=n(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center lg:justify-between lg:flex-row flex-col justify-center"},[t._m(0),t._v(" "),n("div",{staticClass:"login-alert flex items-center md:flex-row flex-col lg:order-2 order-1"},[n("p",{staticClass:"text-white mb-3 md:mb-0 text-[14px] mr-[15px]"},[t._v("Already have an Account? "),n("n-link",{staticClass:"text-white uppercase font-semibold hover:text-[#f4181c]",attrs:{to:"/login"}},[t._v("LOGIN")])],1),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("n-link",{staticClass:"text-[16px] inline-block rounded-[3px] transition-all duration-300 py-[12px] px-[25px] bg-[#f4181c] text-white font-medium hover:bg-white hover:text-[#333333] leading-[1]",attrs:{to:"/pricing"}},[t._v("Become a Member")])],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright lg:mt-0 mt-5 lg:order-1 order-2"},[n("p",{staticClass:"copyright-text text-white text-[14px] text-center"},[t._v("\n            Copyright ©2022 All rights reserved\n        ")])])}],!1,null,null,null);e.default=component.exports},418:function(t,e,n){"use strict";n.r(e);n(15),n(29),n(30);var o={components:{MainHeader:function(){return n.e(4).then(n.bind(null,407))},OffcanvasSidebar:function(){return n.e(2).then(n.bind(null,437))},RecentMovie:function(){return Promise.all([n.e(0),n.e(33)]).then(n.bind(null,410))},MovieBannerSlider:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,440))},HorrorMovie:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,453))},PopularMovie:function(){return Promise.all([n.e(0),n.e(32)]).then(n.bind(null,454))},MovieBannerTwo:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,444))},TrendingMovie:function(){return Promise.all([n.e(0),n.e(34)]).then(n.bind(null,455))},MovieBannerThree:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,443))},ComedyMovie:function(){return Promise.all([n.e(0),n.e(30)]).then(n.bind(null,452))},FooterTop:function(){return Promise.resolve().then(n.bind(null,264))},FooterBottom:function(){return Promise.resolve().then(n.bind(null,265))}},data:function(){return{navOpen:!1}}},r=n(28),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MainHeader"),t._v(" "),n("OffcanvasSidebar",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),n("MovieBannerSlider"),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]"},[n("RecentMovie")],1),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] pt-[50px] bg-[#000000]"},[n("HorrorMovie")],1),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[n("PopularMovie")],1),t._v(" "),n("MovieBannerTwo",{attrs:{PageLink:"movie"}}),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[n("TrendingMovie")],1),t._v(" "),n("MovieBannerThree",{attrs:{PageLink:"movie"}}),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[50px] bg-[#000000]"},[n("ComedyMovie")],1),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[45px] bg-[#12222d]"},[n("FooterTop")],1),t._v(" "),n("div",{staticClass:"container-fluid px-4 xl:px-10 2xl:px-[100px] py-[20px] bg-[#12222d] border-t-1 border-[#203544] shadow-[0_0_10px_rgba(0,0,0,0.3)]"},[n("FooterBottom")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FooterTop:n(264).default,FooterBottom:n(265).default})}}]);
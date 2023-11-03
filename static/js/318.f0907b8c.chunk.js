"use strict";(self.webpackChunkclient_shop=self.webpackChunkclient_shop||[]).push([[318],{8824:function(e,s,c){var a=c(9566),i={getAPI:function(){return a.Z.get("/products")},getCategory:function(e){var s="/products/category/fetch?".concat(e);return a.Z.get(s)},getDetail:function(e){var s="/products/detail?id=".concat(e);return a.Z.get(s)},getPagination:function(e){var s="/products/pagination/fetch?".concat(e);return a.Z.get(s)}};s.Z=i},3005:function(e,s,c){c.r(s);var a=c(8214),i=c(5861),l=c(885),n=c(2791),t=c(8824),d=c(6528),r=c(7186),m=c(1523),o=c(184);s.default=function(e){var s=(0,n.useState)([]),c=(0,l.Z)(s,2),h=c[0],x=c[1];return(0,n.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var s,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.Z.getAPI();case 2:s=e.sent,c=s.splice(0,8),x(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.jsx)("div",{className:"page-holder",children:(0,o.jsxs)("header",{className:"header bg-white",children:[h&&h.map((function(e){return(0,o.jsx)("div",{className:"modal fade show",id:"product_".concat(e._id),children:(0,o.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",children:(0,o.jsx)("div",{className:"modal-content",children:(0,o.jsx)("div",{className:"modal-body p-0",children:(0,o.jsxs)("div",{className:"row align-items-stretch",children:[(0,o.jsxs)("div",{className:"col-lg-6 p-lg-0",children:[(0,o.jsx)("img",{style:{width:"100%"},className:"product-view d-block h-100 bg-cover bg-center",src:e.img1,"data-lightbox":"product_".concat(e._id)}),(0,o.jsx)("img",{className:"d-none",href:e.img2}),(0,o.jsx)("img",{className:"d-none",href:e.img3})]}),(0,o.jsxs)("div",{className:"col-lg-6",children:[(0,o.jsx)("a",{className:"close p-4",type:"button",href:"#section_product","data-dismiss":"modal","aria-label":"Close",children:"\xd7"}),(0,o.jsxs)("div",{className:"p-5 my-md-4",children:[(0,o.jsx)("h2",{className:"h4",children:e.name}),(0,o.jsxs)("b",{className:"text-muted",children:[(0,r.Z)(e.price)," VND"]}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{className:"text-small mb-4",children:e.short_desc}),(0,o.jsx)("div",{className:"row align-items-stretch mb-4",children:(0,o.jsx)("div",{className:"col-sm-5 pl-sm-0 fix_addwish",children:(0,o.jsxs)("a",{className:"btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0",href:"/detail/".concat(e._id),target:"_blank",children:[(0,o.jsx)("i",{className:"fa fa-shopping-cart"}),(0,o.jsx)("span",{className:"ml-2",children:"Xem Chi Ti\u1ebft"})]})})})]})]})]})})})})},e._id)})),(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("section",{className:"hero pb-3 bg-cover bg-center d-flex align-items-center",style:{backgroundImage:"url(".concat(d.Z.banner,")")},children:(0,o.jsx)("div",{className:"container py-5",children:(0,o.jsx)("div",{className:"row px-4 px-lg-5",children:(0,o.jsxs)("div",{className:"col-lg-6",children:[(0,o.jsx)("p",{className:"text-muted small text-uppercase mb-2",children:"Ngu\u1ed3n C\u1ea3m H\u1ee9ng M\u1edbi 2023"}),(0,o.jsx)("h1",{className:"h2 text-uppercase mb-3",children:"Gi\u1ea3m 20% V\u1edbi C\xe1c S\u1ea3n Ph\u1ea9m M\u1edbi"}),(0,o.jsx)("a",{className:"btn btn-dark",href:"./shop",children:"T\xecm Hi\u1ec3u Ngay"})]})})})}),(0,o.jsxs)("section",{className:"pt-5",children:[(0,o.jsxs)("header",{className:"text-center",children:[(0,o.jsx)("p",{className:"small text-muted small text-uppercase mb-1",children:"H\xe3y L\u1ef1a Ch\u1ecdn S\u1ea3n Ph\u1ea9m B\u1ea1n Mong Mu\u1ed1n"}),(0,o.jsx)("h2",{className:"h5 text-uppercase mb-4",children:"C\xe1c S\u1ea3n Ph\u1ea9m C\u1ee7a Ch\xfang T\xf4i"})]}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-12 mb-4",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-6 mb-4 mb-md-0",children:(0,o.jsx)(m.rU,{className:"category-item",to:"/shop?category=iphone",children:(0,o.jsx)("img",{className:"img-fluid",src:d.Z.img1,alt:""})})}),(0,o.jsx)("div",{className:"col-md-6 mb-4 mb-md-0",children:(0,o.jsx)(m.rU,{className:"category-item",to:"/shop?category=mac",children:(0,o.jsx)("img",{className:"img-fluid",src:d.Z.img2,alt:""})})})]})}),(0,o.jsx)("div",{className:"col-md-12",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-md-4 mb-4 mb-md-0",children:(0,o.jsx)(m.rU,{className:"category-item",to:"/shop?category=ipad",children:(0,o.jsx)("img",{className:"img-fluid",src:d.Z.img3,alt:""})})}),(0,o.jsx)("div",{className:"col-md-4 mb-4 mb-md-0",children:(0,o.jsx)(m.rU,{className:"category-item",to:"/shop?category=watch",children:(0,o.jsx)("img",{className:"img-fluid",src:d.Z.img4,alt:""})})}),(0,o.jsx)("div",{className:"col-md-4 mb-4 mb-md-0",children:(0,o.jsx)(m.rU,{className:"category-item",to:"/shop?category=airpod",children:(0,o.jsx)("img",{className:"img-fluid",src:d.Z.img5,alt:""})})})]})})]})]}),(0,o.jsxs)("section",{className:"py-5",id:"section_product",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("p",{className:"small text-muted small text-uppercase mb-1",children:"L\u1ef1a Ch\u1ecdn Theo Xu H\u01b0\u1edbng"}),(0,o.jsx)("h2",{className:"h5 text-uppercase mb-4",children:"C\xe1c S\u1ea3n Ph\u1ea9m Xu H\u01b0\u1edbng M\u1edbi"})]}),(0,o.jsx)("div",{className:"row",children:h&&h.map((function(e){return(0,o.jsx)("div",{className:"col-xl-3 col-lg-4 col-sm-6",children:(0,o.jsxs)("div",{className:"product text-center",children:[(0,o.jsxs)("div",{className:"position-relative mb-3",children:[(0,o.jsx)("div",{className:"badge text-white badge-"}),(0,o.jsx)("a",{className:"d-block",href:"#product_".concat(e._id),"data-toggle":"modal",children:(0,o.jsx)("img",{className:"img-fluid",src:e.img1,alt:""})}),(0,o.jsx)("div",{className:"product-overlay",children:(0,o.jsx)("ul",{className:"mb-0 list-inline"})})]}),(0,o.jsx)("h6",{children:(0,o.jsx)(m.rU,{className:"reset-anchor",to:"/detail/".concat(e._id),children:e.name})}),(0,o.jsxs)("p",{className:"small text-muted",children:[(0,r.Z)(e.price)," VND"]})]})},e._id)}))})]}),(0,o.jsx)("section",{className:"py-5 bg-light",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row text-center",children:[(0,o.jsx)("div",{className:"col-lg-4 mb-3 mb-lg-0",children:(0,o.jsx)("div",{className:"d-inline-block",children:(0,o.jsxs)("div",{className:"media align-items-end",children:[(0,o.jsx)("svg",{className:"svg-icon svg-icon-big svg-icon-light",children:(0,o.jsx)("use",{xlinkHref:"#delivery-time-1"})}),(0,o.jsxs)("div",{className:"media-body text-left ml-3",children:[(0,o.jsx)("h6",{className:"text-uppercase mb-1",children:"Mi\u1ec5n Ph\xed V\u1eadn Chuy\u1ec3n"}),(0,o.jsx)("p",{className:"text-small mb-0 text-muted",children:"Mi\u1ec5n ph\xed v\u1eadn chuy\u1ec3n to\xe0n qu\u1ed1c"})]})]})})}),(0,o.jsx)("div",{className:"col-lg-4 mb-3 mb-lg-0",children:(0,o.jsx)("div",{className:"d-inline-block",children:(0,o.jsxs)("div",{className:"media align-items-end",children:[(0,o.jsx)("svg",{className:"svg-icon svg-icon-big svg-icon-light",children:(0,o.jsx)("use",{xlinkHref:"#helpline-24h-1",children:" "})}),(0,o.jsxs)("div",{className:"media-body text-left ml-3",children:[(0,o.jsx)("h6",{className:"text-uppercase mb-1",children:"Ph\u1ee5c V\u1ee5 24 x 7"}),(0,o.jsx)("p",{className:"text-small mb-0 text-muted",children:"Ph\u1ee5c v\u1ee5 b\u1ea1n 24 gi\u1edd trong c\u1ea3 tu\u1ea7n"})]})]})})}),(0,o.jsx)("div",{className:"col-lg-4",children:(0,o.jsx)("div",{className:"d-inline-block",children:(0,o.jsxs)("div",{className:"media align-items-end",children:[(0,o.jsx)("svg",{className:"svg-icon svg-icon-big svg-icon-light",children:(0,o.jsx)("use",{xlinkHref:"#label-tag-1",children:" "})}),(0,o.jsxs)("div",{className:"media-body text-left ml-3",children:[(0,o.jsx)("h6",{className:"text-uppercase mb-1",children:"\u01afu \u0110\xe3i L\u1edbn"}),(0,o.jsx)("p",{className:"text-small mb-0 text-muted",children:"C\xf3 r\u1ea5t nhi\u1ec1u \u01b0u \u0111\xe3i d\xe0nh ri\xeang cho b\u1ea1n"})]})]})})})]})})}),(0,o.jsx)("section",{className:"py-5",children:(0,o.jsx)("div",{className:"container p-0",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-6 mb-3 mb-lg-0",children:(0,o.jsx)("h5",{className:"text-uppercase",children:"Nh\u1eadn Th\xf4ng B\xe1o?"})}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsx)("form",{action:"#",children:(0,o.jsxs)("div",{className:"input-group flex-column flex-sm-row mb-3",children:[(0,o.jsx)("input",{className:"form-control form-control-lg py-3",type:"email",placeholder:"Nh\u1eadp E-mail \u0110\u1ec3 Nh\u1eadp Nhi\u1ec1u \u01afu \u0110\xe3i","aria-describedby":"button-addon2"}),(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("button",{className:"btn btn-dark btn-block",id:"button-addon2",type:"submit",children:"\u0110\u0103ng K\xfd"})})]})})})]})})})]})]})})}},6528:function(e,s,c){c.d(s,{Z:function(){return a}});var a={banner:c.p+"static/media/banner1.4a22881c941f7b645fa8.jpg",img1:c.p+"static/media/product_1.b24c110a233df54143c8.png",img2:c.p+"static/media/product_2.1bc52f8922d488cead68.png",img3:c.p+"static/media/product_3.48eda5293a6f605e73f7.png",img4:c.p+"static/media/product_4.6d83c6007d5109b357a8.png",img5:c.p+"static/media/product_5.b963def7555b7544d220.png"}},7186:function(e,s,c){function a(e){for(var s=e+"",c="",a=0,i=s.length-1;i>=0;i--)a++,c=s[i]+c,a%3===0&&0!==i&&(c="."+c,a=0);return c}c.d(s,{Z:function(){return a}})}}]);
//# sourceMappingURL=318.f0907b8c.chunk.js.map
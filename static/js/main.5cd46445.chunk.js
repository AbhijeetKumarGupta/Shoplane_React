(this["webpackJsonpsl-react"]=this["webpackJsonpsl-react"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(19),s=c.n(i),a=(c(34),c(5)),A=c(6),o=c(8),d=c(7),l=c(10),j=c(4),h=(c(35),c(3)),u=c(14),b=c(0),O=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){var e=this.props,t=e.name,c=void 0===t?"Name":t,n=e.price,r=void 0===n?0:n,i=e.preview,s=e.quantity,a=void 0===s?0:s;return Object(b.jsxs)("div",{className:"addedProdCard",children:[Object(b.jsx)("div",{className:"prodAddedImg",children:Object(b.jsx)("img",{src:i,alt:"Product"})}),Object(b.jsxs)("div",{className:"prodAddedDetails",children:[Object(b.jsx)("h4",{children:c}),Object(b.jsxs)("p",{children:["x",a]}),Object(b.jsxs)("p",{children:["Amount: Rs ",r]})]})]})}}]),c}(n.Component),p=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getTotal=function(){for(var t=0,c=0,n=0;n<e.props.count.length;n++)t+=e.props.count[n],c+=e.props.cart[n].price*e.props.count[n];return[t,c]},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.scrollToTop()}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"placeOrder",value:function(e){var t={amount:this.getTotal()[1],productCount:this.props.count,products:this.props.cart},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/order",c).then((function(e){return e.json()})).then((function(t){console.log(t.id,t),e([])}))}},{key:"render",value:function(){var e=this;this.scrollToTop();var t=this.getTotal();return Object(b.jsxs)("main",{children:[Object(b.jsx)("h1",{id:"main-heading",children:"Checkout"}),Object(b.jsxs)("div",{id:"mainDivCheckout",children:[Object(b.jsxs)("div",{id:"leftDiv",children:[Object(b.jsxs)("h3",{className:"otherHead",children:["Total Items: ",Object(b.jsx)("span",{id:"item-count",children:t[0]})]}),this.props.cart.map((function(t,c){return Object(n.createElement)(O,Object(h.a)(Object(h.a)({quantity:e.props.count[c]},t),{},{key:c}))}))]}),Object(b.jsx)("div",{id:"rightDiv",children:Object(b.jsxs)("div",{id:"totalDetails",children:[Object(b.jsx)("h2",{children:"Total Amount"}),Object(b.jsxs)("p",{children:["Total Amount: Rs",Object(b.jsx)("span",{id:"total-amount",children:t[1]})]}),Object(b.jsx)(l.b,{id:"button",onClick:function(){e.placeOrder(e.props.clearCart)},to:"/Shoplane_React/orderPlaced",children:"Place Order"})]})})]})]})}}]),c}(n.Component),g=Object(u.b)((function(e){return{cart:e.cart,count:e.prodCount}}),(function(e){return{clearCart:function(t){return e(function(e){return{type:"ORDER_PLACED",payload:e}}(t))}}}))(p),m=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("footer",{children:[Object(b.jsxs)("ul",{className:"online-store",children:[Object(b.jsx)("li",{children:Object(b.jsx)("h3",{children:"Online Store"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Men Clothing"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Women Clothing"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Men Accessories"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Women Accessories"})})]}),Object(b.jsxs)("ul",{className:"helpful-links",children:[Object(b.jsx)("li",{children:Object(b.jsx)("h3",{children:"Helpful Links"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Contact"})})]}),Object(b.jsxs)("ul",{className:"patners",children:[Object(b.jsx)("li",{children:Object(b.jsx)("h3",{children:"Patners"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Zara"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Pantaloons"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Levis"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"Ucb"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"+ Many More"})})]}),Object(b.jsxs)("ul",{className:"address",children:[Object(b.jsx)("li",{children:Object(b.jsx)("h3",{children:"Address"})}),Object(b.jsx)("li",{children:"Building 101"}),Object(b.jsx)("li",{children:"Central Avenue"}),Object(b.jsx)("li",{children:"LA - 902722"}),Object(b.jsx)("li",{children:"United States"})]})]})}}]),c}(n.Component),x=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).state={name:e.name,brand:e.brand,preview:e.preview,price:e.price},n}return Object(A.a)(c,[{key:"render",value:function(){var e=this.state,t=e.name,c=e.brand,n=e.price,r=e.preview;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"img",children:Object(b.jsx)("img",{src:r,alt:t})}),Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("h3",{className:"prodName",children:t}),Object(b.jsx)("h4",{className:"prodBrand",children:c}),Object(b.jsxs)("p",{className:"prodPrice",children:["Rs ",n]})]})]})}}]),c}(n.Component),v=c(28),f=c.n(v),S=c.p+"static/media/1.9007d84c.png",C=c.p+"static/media/2.88dc38c8.png",w=c.p+"static/media/3.d28aba27.png",k=c.p+"static/media/4.c2ca730c.png";c(56),c(57);function P(){return Object(b.jsx)("section",{id:"banner",className:"slick-initialized slick-slider slick-dotted",children:Object(b.jsxs)(f.a,Object(h.a)(Object(h.a)({},{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1}),{},{children:[Object(b.jsx)("img",{src:S,alt:"Im 1"}),Object(b.jsx)("img",{src:C,alt:"Im 2"}),Object(b.jsx)("img",{src:w,alt:"Im 3"}),Object(b.jsx)("img",{src:k,alt:"Im 4"})]}))})}var N=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).scrollTo=function(e){window.scrollTo({top:e,behavior:"smooth"})},e}return Object(A.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(e){return e.json()})).then((function(t){e.props.fetchProducts(t)}))}},{key:"handleScroll",value:function(e){"#clothing-section"===e?this.scrollTo(600):"#accessory-section"===e?this.scrollTo(1250):this.scrollTo(0)}},{key:"render",value:function(){var e=this,t=window.location.href.split("/")[4];this.handleScroll(t);var c=this.props.products;return Object(b.jsx)(b.Fragment,{children:c.length?Object(b.jsxs)("main",{children:[Object(b.jsx)(P,{},"slide"),Object(b.jsxs)("section",{id:"features",children:[Object(b.jsxs)("div",{className:"icon-container",children:[Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(b.jsx)("h4",{children:"Free Delivery"})]}),Object(b.jsxs)("div",{className:"icon-container",children:[Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(b.jsx)("h4",{children:"Money Back Gurantee"})]}),Object(b.jsxs)("div",{className:"icon-container",children:[Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCQ0FGg7yIGwXAAAEgUlEQVRo3u2ZX0wcVRTGf3fDH4G2QG1qI0VLhaBRQYK1TdPEJhhN+2DKizH4N9Y0MYYHrQkPbWLSWu1To2msVq1R459aHyyCoiFGbCQqbRRJKqIBDQSREqFQEGmBz4e57C7srMzODlsfPPsws3fO+b7vnrn3njszhgRNWWxmK2WUspplpAOXGGeILjpoodVMJoqYCPkGHdOo/s3G9Lo2Lg15uZrk1T5ThVdc44k8g33sJs3+naWdVjrpY4IxYAU5FHIDWygnZH2meZ69ZiqYvq/V1+G+detJrYnruUa71R32bdM1QdCXqNcCntMjSlvUP007NWQj+nV9svRF6rdg9brSc9QqfWSj/lBJMvS5OmuB9svTaAlHGh2wkT8p37+AExZkj6/ovTb6Q7/091qAl3134BWL8ICf4Cw7+L5Xhm8BmWqXJA1qReLBeyRJ0yr3Sw+gCs1Ikp5OXPuAJOnVZOgBdMxO4azEwmps/69LWkCxzcFDiYXVS5IakqUHUKMk6ZNEQrI1KUmqCUTA/ZKkKS33HnK7JGlGeYEIyLc34Q63qyHXGKeinzXngxBgRvgRgE3eBZQC0B4EPQA/AOBaFdwFFAHQE5iAbgDWexfglI9zgQkYAiDPu4BsAP4KTMA4AK6zwF2As+2YDkzAdBSqJwEptAWqlM8OyrgKgFrdjWg2r/mH1y6qMFwLwEq9QAcnzZ/xnPN0WH+7bLJv9k1f5oI2pSNa6eZcrF/i7PK3+RawLQ5if6TI21ugtXxlEz/B5/Tg7Ohr7XxIzi5xCIBMiqhiGXA1zao0fdFaW6y2o9Hp0WAgGRiPasnTYcv0pVuqnlkAELgAiNqsbo80vS9J6tCCSblEAoxOS5KOw9w6UAXAUTPrlyoRM+KlCGsIlIPzzHMmFfRRTKuU7WRgbss8mjIB5+0x9z+wFP8vIASM2fPEH5/8Wq49jkEIzIQdFLekTIDDNGIm5m5BCwCPJvYOIAnbFWF1BLwDwAaeSgW7atkCwNuRJqMzkqRZHVRU/VuCYpSlffYx5bST7zQAI93HN+RhqGOnGunhIkAgxRjSVeccWc92W/RHqTGar3az7W8qNiSDus3NvVDHNeviXulbQKUL2qzeU0HEZ8G4VwnVVFAQTv409eY5/9lXHTtIZzWFwAUaaOcD85t/PL8yDkqSmt2upWYpvgmAXy+fAGdj35kSrljTRjv8PL/CD1rAi5KkAV2eyqt1GpckHXC/nlT5UQHl5Ng/w3Sa32M8QjRxJzBJ6bwHkQB6VqJPY5atRt04z8foiL3ybKDkoDINuy6yI7o17JOrd23rd7oiWPo0dVroixq2vynb0qMMUJYeU59t6dW6oPtfbaH3KzPclq4nbOubOqGxcE66VBwwPeiQJOnbmPaPY27JW4u97PQ3N53t688x7V1R5zM0sMk8uNjLzkW/grlaLwBbtdxciOp/BncB0EczrTSZAV/YXkxldgK26R5V2l+1vrBpX5pPtwskvKF4djIF9KDsOF+STykneXRvEkJ6WKeiptuE2vS40hPF+Qdyw1N+9jDgBwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0xM1QwNToyNjoxNCswMDowMNSHoXsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMTNUMDU6MjY6MTQrMDA6MDCl2hnHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:""})}),Object(b.jsx)("h4",{children:"Always Support"})]}),Object(b.jsxs)("div",{className:"icon-container",children:[Object(b.jsx)("div",{className:"img-wrapper",children:Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(b.jsx)("h4",{children:"Secure Payment"})]})]}),Object(b.jsxs)("div",{id:"products",children:[Object(b.jsxs)("section",{id:"clothing-section",children:[Object(b.jsx)("h2",{id:"clothingHeading",children:"Clothing for Men and Women"}),Object(b.jsx)("div",{id:"clothingDiv",children:c.map((function(t){return!t.isAccessory&&Object(b.jsx)(l.b,{className:"card",id:t.id,to:"/Shoplane_React/product",onClick:function(){return e.props.setSelected(t)},children:Object(b.jsx)(x,Object(h.a)({},t))},t.id)}))})]}),Object(b.jsxs)("section",{id:"accessory-section",children:[Object(b.jsx)("h2",{id:"accessoriesHeading",children:"Accessories for Men and Women"}),Object(b.jsx)("div",{id:"accessoriesDiv",children:c.map((function(t){return t.isAccessory&&Object(b.jsxs)(l.b,{className:"card",id:t.id,to:"/Shoplane_React/product",onClick:function(){return e.props.setSelected(t)},children:[" ",Object(b.jsx)(x,Object(h.a)({},t))]},t.id)}))})]})]})]}):Object(b.jsx)("div",{id:"loading",children:Object(b.jsx)("h2",{children:"Loading..."})})})}}]),c}(n.Component),D=Object(u.b)((function(e){return{products:e.products}}),(function(e){return{fetchProducts:function(t){return e(function(e){return{type:"GET_PROD",payload:e}}(t))},setSelected:function(t){return e(function(e){return{type:"SET_PROD",payload:e}}(t))}}}))(N),R=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).state={curPro:n.props.curProduct,curImg:n.props.curProduct.preview,curActive:0},n}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.scrollToTop()}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){var e=this;this.scrollToTop();var t=this.state.curPro,c=t.name,n=void 0===c?"Name":c,r=t.brand,i=void 0===r?"Brand":r,s=t.price,a=void 0===s?0:s,A=t.photos,o=void 0===A?[]:A,d=t.description,l=void 0===d?"Description":d;return Object(b.jsxs)("div",{id:"mainDiv",children:[Object(b.jsx)("div",{id:"imageLargeDiv",children:Object(b.jsx)("img",{className:"largeImage",src:this.state.curImg,alt:"Preview"})}),Object(b.jsxs)("div",{id:"detailsDiv",children:[Object(b.jsx)("h1",{id:"name",children:n}),Object(b.jsx)("h4",{id:"brand",children:i}),Object(b.jsxs)("h3",{id:"priceHead",children:["Price: Rs ",Object(b.jsx)("span",{id:"price",children:a})]}),Object(b.jsx)("p",{className:"otherHead",children:"Description"}),Object(b.jsx)("p",{id:"description",children:l}),Object(b.jsx)("h3",{id:"pp",className:"otherHead",children:"Product Preview"}),Object(b.jsx)("div",{id:"smallImages",children:o.length>0?o.map((function(t,c){return Object(b.jsx)("img",{className:c===e.state.curActive?"smallImg active":"smallImg",id:c,src:t,onClick:function(){e.setState({curImg:t}),e.setState({curActive:c})},alt:""},c)})):"IMAGE"}),Object(b.jsx)("div",{id:"button",onClick:function(){return e.props.addProd(e.props.curProduct)},children:"Add to Cart"})]})]},"productDet")}}]),c}(n.Component),B=Object(u.b)((function(e){return{curProduct:e.currentProd}}),(function(e){return{addProd:function(t){return e(function(e){return{type:"ADD_PROD",payload:e}}(t))}}}))(R),Q=c.p+"static/media/user.e399cfc1.jpg",T=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(b.jsx)("header",{children:Object(b.jsxs)("div",{id:"navMenu",children:[Object(b.jsxs)(l.b,{id:"logo",to:"/Shoplane_React/",children:[Object(b.jsx)("span",{children:"SHOP"}),"LANE"]}),Object(b.jsxs)("div",{id:"productBrowsingMenu",children:[Object(b.jsx)(l.b,{className:"pbMenuOption",to:"/Shoplane_React/",children:"Home"}),Object(b.jsx)(l.b,{className:"pbMenuOption",to:"/Shoplane_React/#clothing-section",children:"Clothings"}),Object(b.jsx)(l.b,{className:"pbMenuOption",to:"/Shoplane_React/#accessory-section",children:"Accessories"})]}),Object(b.jsxs)("div",{id:"userDataMenu",children:[Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"}),Object(b.jsxs)("div",{id:"cart-wrapper",children:[Object(b.jsx)("p",{id:"cart-count",children:this.props.cart.length}),Object(b.jsx)(l.b,{to:"/Shoplane_React/checkout",children:Object(b.jsx)("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})})]}),Object(b.jsx)("img",{src:Q,alt:"img"})]})]})})}}]),c}(n.Component),y=Object(u.b)((function(e){return{cart:e.cart}}),null)(T),E=c.p+"static/media/confirmImg.2027e955.png",M=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"componentDidMount",value:function(){this.scrollToTop()}},{key:"scrollToTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return Object(b.jsx)("main",{children:Object(b.jsxs)("div",{id:"main-wrapper",children:[Object(b.jsx)("div",{id:"img-wrapper",children:Object(b.jsx)("img",{src:E,alt:""})}),Object(b.jsx)("h3",{children:"Order Placed Successfully!!"}),Object(b.jsx)("p",{children:"We have sent you an email with the order details"})]})})}}]),c}(n.Component),J=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(y,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/Shoplane_React/",exact:!0,component:D}),Object(b.jsx)(j.a,{path:"/Shoplane_React/product",component:B}),Object(b.jsx)(j.a,{path:"/Shoplane_React/checkout",component:g}),Object(b.jsx)(j.a,{path:"/Shoplane_React/orderPlaced",component:M})]}),Object(b.jsx)(m,{})]})}}]),c}(n.Component),Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))},I=c(29),V=c(21),H={products:[],currentProd:[],cart:[],prodCount:[]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case"GET_PROD":return Object(h.a)(Object(h.a)({},e),{},{products:n});case"SET_PROD":return Object(h.a)(Object(h.a)({},e),{},{currentProd:n});case"ADD_PROD":var r=e.cart.length?e.cart:[],i=e.prodCount;if(0===r.length)return i.push(1),Object(h.a)(Object(h.a)({},e),{},{cart:[].concat(Object(V.a)(e.cart),[n])});for(var s=0;s<r.length;s++){if(r[s].id===n.id){i[s]++;break}if(s===r.length-1)return i.push(1),Object(h.a)(Object(h.a)({},e),{},{cart:[].concat(Object(V.a)(e.cart),[n])})}return Object(h.a)(Object(h.a)({},e),{},{cart:Object(V.a)(e.cart)});case"ORDER_PLACED":return e.prodCount=[],Object(h.a)(Object(h.a)({},e),{},{cart:n});default:return e}},X=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),z=Object(I.a)(G,X);z.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(c){}}(z.getState())}));var W=z;s.a.render(Object(b.jsx)(u.a,{store:W,children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(J,{})})}),document.getElementById("root")),Z()}},[[58,1,2]]]);
//# sourceMappingURL=main.5cd46445.chunk.js.map
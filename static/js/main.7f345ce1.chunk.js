(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n(0),s=n.n(i),c=n(14),r=n.n(c),a=(n(30),n(21)),l=n(22),u=n(10),d=n(24),h=n(23),p=(n(31),n(5)),b=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={books:[],terms:[]},o.getBooks=o.getBooks.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"getBooks",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),fetch("https://collection.bccampus.ca/wp-json/wp/v2/oer?per_page=15",{method:"GET",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({books:t}),console.log(e.state.books)})).catch((function(e){return console.log("error",e)}))}},{key:"getTerms",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json"),fetch("https://collection.bccampus.ca/wp-json/ptam/v2/get_terms",{method:"POST",headers:t}).then((function(e){return e.json()})).then((function(t){e.setState({terms:t}),console.log(e.state.terms)})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(p.Navbar,{alignLinks:"left",brand:Object(o.jsx)("a",{className:"brand-logo",href:"#",children:"Archives: OER"}),centerLogo:!0,className:"cyan darken-2",id:"mobile-nav",menuIcon:Object(o.jsx)(p.Icon,{children:"menu"}),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},children:Object(o.jsxs)(p.NavItem,{children:[Object(o.jsx)("style",{children:"\n\t\t\t\t#root > div {\n\t\t\t\t\tz-index: 99999 !important;\n\t\t\t\t}\n\t\t\t"}),Object(o.jsx)(p.SideNav,{id:"SideNav-10",options:{draggable:!0},trigger:Object(o.jsx)(p.Button,{node:"button",children:"Filter"}),children:Object(o.jsx)(p.SideNavItem,{href:"#!second",children:"Filter Items"})})]})}),Object(o.jsx)(p.Row,{children:Object(o.jsxs)(p.Col,{children:[Object(o.jsx)("h3",{children:"Open Education Resources"}),Object(o.jsxs)("p",{children:["Showing ",this.state.books.length," books"]})]})}),Object(o.jsxs)(p.Row,{children:[Object(o.jsx)("style",{children:".card .card-image .card-title {\n\t\t\t\tcolor: #0082b1;\n\t\t\t\tfont-weight: normal;\n\t\t}"}),this.state.books.map((function(e,t){return Object(o.jsx)(p.Col,{s:4,children:Object(o.jsx)(p.Card,{actions:[Object(o.jsx)("a",{href:e.link,children:"Read Now"})],header:Object(o.jsx)(p.CardTitle,{image:"https://collection.bccampus.ca/wp-content/uploads/2020/08/OER-default.jpg",children:e.title.rendered}),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus rutrum eros, vitae varius dui tempor nec. Mauris mattis fermentum rutrum. Ut venenatis facilisis hendrerit. Mauris consequat, odio eu tempor laoreet, ipsum nibh finibus dolor, vitae tempus risus enim ac eros. Aliquam bibendum ante quis purus pulvinar consequat. Fusce fringilla enim turpis, non porta sapien consequat id. Suspendisse finibus justo non aliquam efficitur."})})}))]})]})}}]),n}(i.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),s(e),c(e)}))};n(75),n(76);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),j()}},[[78,1,2]]]);
//# sourceMappingURL=main.7f345ce1.chunk.js.map
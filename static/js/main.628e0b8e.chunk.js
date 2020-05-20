(this["webpackJsonpnov-covid-19"]=this["webpackJsonpnov-covid-19"]||[]).push([[0],{150:function(e,a,t){},206:function(e,a,t){e.exports=t(410)},211:function(e,a,t){},306:function(e,a,t){},307:function(e,a,t){},402:function(e,a,t){},405:function(e,a,t){},407:function(e,a,t){},408:function(e,a,t){},410:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(67),r=t.n(c),o=(t(211),t(98)),s=t(99),i=t(106),m=t(105),u=t(65),d=t(60),E=t(26),h=t(9),p=t(101),f=(t(141),t(44)),v=t.n(f),b=t(205),g=(t(150),function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),o=Object(E.a)(r,2),s=o[0],i=o[1],m=Object(n.useState)([""]),u=Object(E.a)(m,2),d=u[0],f=u[1];Object(n.useEffect)((function(){v.a.all([v.a.get("https://disease.sh/v2/all"),v.a.get("https://disease.sh/v2/countries")]).then((function(e){c(e[0].data),i(e[1].data)})).catch((function(e){console.log(e)}))}),[]);var g=new Date(parseInt(t.updated)).toString(),C=s.filter((function(e){return""!==d?e.country.toLowerCase().includes(d):e})).map((function(e,a){return l.a.createElement(h.a,{key:a,bg:"dark",text:"light",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Img,{variant:"top",src:e.countryInfo.flag}),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,e.country),l.a.createElement(h.a.Text,null,"_____________________________________"),l.a.createElement(h.a.Text,null,"Today's cases: ",e.todayCases),l.a.createElement(h.a.Text,null,"Today's deaths: ",e.todayDeaths),l.a.createElement(h.a.Text,null,"Total Confirm cases: ",e.cases),l.a.createElement(h.a.Text,null,"Active: ",e.active),l.a.createElement(h.a.Text,null,"Deaths: ",e.deaths),l.a.createElement(h.a.Text,null,"Critical: ",e.critical),l.a.createElement(h.a.Text,null,"Recovered: ",e.recovered)))}));return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(h.a,{bg:"warning",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Confirmed cases"),l.a.createElement(h.a.Text,null,t.cases)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",g))),l.a.createElement(h.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Active Cases"),l.a.createElement(h.a.Text,null,t.active)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",g))),l.a.createElement(h.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Deaths"),l.a.createElement(h.a.Text,null,t.deaths)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",g))),l.a.createElement(h.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Recovered"),l.a.createElement(h.a.Text,null,t.recovered)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",g)))),l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search A Country",onChange:function(e){return f(e.target.value)}})),l.a.createElement(b.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},C))}),C=t(197),y=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),o=Object(E.a)(r,2),s=o[0],i=o[1],m=Object(n.useState)([""]),u=Object(E.a)(m,2),d=u[0],f=u[1];Object(n.useEffect)((function(){v.a.all([v.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"),v.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")]).then((function(e){c({active:e[0].data.data.total.active,confirmed:e[0].data.data.total.confirmed,deaths:e[0].data.data.total.deaths,recovered:e[0].data.data.total.recovered,updated:e[0].data.data.lastRefreshed}),i(e[1].data.data.statewise)})).catch((function(e){console.log(e)}))}),[]);var b=s.filter((function(e){return""!==d?e.state.toLowerCase().includes(d):e})).map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("th",{scope:"row"},a),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.confirmed),l.a.createElement("td",null,e.active),l.a.createElement("td",null,e.deaths),l.a.createElement("td",null,e.recovered))}));return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(h.a,{bg:"warning",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Confirm cases"),l.a.createElement(h.a.Text,null,t.confirmed)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",t.updated))),l.a.createElement(h.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Active Cases"),l.a.createElement(h.a.Text,null,t.active)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",t.updated))),l.a.createElement(h.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Deaths"),l.a.createElement(h.a.Text,null,t.deaths)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",t.updated))),l.a.createElement(h.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,"Recovered"),l.a.createElement(h.a.Text,null,t.recovered)),l.a.createElement(h.a.Footer,null,l.a.createElement("small",null,"Last updated ",t.updated)))),l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search your State",onChange:function(e){return f(e.target.value)}})),l.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"States"),l.a.createElement("th",null,"Confirmed"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"Recovered")),l.a.createElement("tbody",null,b)))},x=t(134),_=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),o=Object(E.a)(r,2),s=o[0],i=o[1];Object(n.useEffect)((function(){v.a.all([v.a.get("https://disease.sh/v2/all"),v.a.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")]).then((function(e){c(e[0].data),i({active:e[1].data.data.total.active,confirmed:e[1].data.data.total.confirmed,deaths:e[1].data.data.total.deaths,recovered:e[1].data.data.total.recovered})})).catch((function(e){console.log(e)}))}),[]);var m={labels:["Confirmed","Active","Deaths","Recovered"],datasets:[{data:[t.cases,t.active,t.deaths,t.recovered],label:"Cases",backgroundColor:["#E0DD08 ","#6D24AF  ","#EC1E0D","#7CCC07 "],hoverBackgroundColor:["#E0DD08 ","#6D24AF  ","#EC1E0D","#7CCC07 "]}]},u={labels:["Confirmed","Active","Deaths","Recovered"],datasets:[{data:[s.confirmed,s.active,s.deaths,s.recovered],labels:["Confirmed","Active","Deaths","Recovered"],backgroundColor:["#E0DD08 ","#2D2435 ","#EC1E0D","#7CCC07 "],hoverBackgroundColor:["#E0DD08 ","#2D2435 ","#EC1E0D","#7CCC07 "]}]};return l.a.createElement("div",null,l.a.createElement("h2",{style:{color:"#fff"}},"Corona Statistics"),l.a.createElement("div",{style:{position:"relative",width:800,height:800,left:400,top:70}},l.a.createElement(x.a,{data:m,options:{title:{display:!0,text:"Global Statistics - Corona Cases",fontSize:25},legend:{display:!0,position:"right"}}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x.a,{data:u,options:{title:{display:!0,text:"India Statistics - Corona Cases",fontSize:25},legend:{display:!0,position:"right"}}})))},w=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Error: Page does not exist!"))},O=t(45),N=t(37),k=t(83),j=(t(306),t(307),function(e){return l.a.createElement("button",{className:"toggle-button",onClick:e.click},l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}),l.a.createElement("div",{className:"toggle-button__line"}))}),D=(t(308),function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container-Nav"},l.a.createElement("div",{className:"humburger__toggleBtn"},l.a.createElement(j,{click:e.HamburgerClickHandler})),l.a.createElement("div",{className:"brand-name"},l.a.createElement("a",{href:"/"},l.a.createElement(N.a,{icon:O.i,className:"fa-logo"}))),l.a.createElement("div",{class:"row"}),l.a.createElement("div",{class:"navbar"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:"/"},l.a.createElement(N.a,{icon:O.d,className:"fa-link"})," World Track")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/map"},l.a.createElement(k.a,{src:"https://www.flaticon.com/premium-icon/icons/svg/1944/1944174.svg",className:"india-map"}),"India Track")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/stat"},l.a.createElement(N.a,{icon:O.b,className:"fa-link"})," Statistics")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"/about"},l.a.createElement(N.a,{icon:O.a,className:"fa-link"})," About"))))))}),S=t(85),T=t(86),B=t(139),H=(t(402),t(202)),A=t(203),F=t(47),I=t(84),L=t(204),M=(t(405),function(){var e=Object(n.useState)(null),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),o=Object(E.a)(r,2),s=o[0],i=o[1];return l.a.createElement("div",null,Object(L.a)(Array(5)).map((function(e,a){var n=a+1;return l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"rating",value:n,onClick:function(){return c(n)}}),l.a.createElement(N.a,{icon:O.h,className:"star",color:n<=(s||t)?"#ffc108":"#e4e5e9",onMouseEnter:function(){return i(n)},onMouseLeave:function(){return i(null)}}))})))}),R=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={name:"",email:"",message:""},e.handleChange=function(a,t){e.setState(Object(H.a)({},a,t.target.value))},e}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=this.state,t=(a.name,{from_name:a.email,to_name:"dibyendu230@gmail.com",message_html:a.message});A.send("gmail","template_jHJLieQS",t,"user_h0HaQKQ1mWKIwska36EIJ"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",message:""})}},{key:"render",value:function(){return l.a.createElement(F.a,{onSubmit:this.handleSubmit.bind(this)},l.a.createElement(F.a.Row,null,l.a.createElement(F.a.Group,{as:I.a,controlId:"exampleForm.ControlInput1"},l.a.createElement(F.a.Label,null,"Name"),l.a.createElement(F.a.Control,{type:"text",name:"name",value:this.state.name,placeholder:"Your Name",onChange:this.handleChange.bind(this,"name")})),l.a.createElement(F.a.Group,{as:I.a,controlId:"formGridEmail"},l.a.createElement(F.a.Label,null,"Email"),l.a.createElement(F.a.Control,{type:"email",name:"email",value:this.state.email,placeholder:"Enter email",onChange:this.handleChange.bind(this,"email")}))),l.a.createElement("p",null,"Rate ME!"),l.a.createElement(M,null),l.a.createElement(F.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(F.a.Label,null,"Howdy !"),l.a.createElement(F.a.Control,{type:"textarea",as:"textarea",name:"message",value:this.state.message,rows:"3",onChange:this.handleChange.bind(this,"message")})),l.a.createElement(S.a,{variant:"secondary"},"Close"),l.a.createElement(S.a,{variant:"primary",type:"submit"},"Send"))}}]),t}(n.Component);var G=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(0),o=Object(E.a)(r,2),s=o[0],i=o[1],m=Object(n.useState)(0),u=Object(E.a)(m,2),d=u[0],h=u[1],p=Object(n.useState)(!1),f=Object(E.a)(p,2),v=f[0],b=f[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"contain"},l.a.createElement("div",{className:"img-container"},l.a.createElement(k.a,{src:"https://images.squarespace-cdn.com/content/v1/5524872fe4b04f1005fbd76f/1542425262027-XO37TGIAJNW5FU2BUFJQ/ke17ZwdGBToddI8pDm48kEqYU77Wq5eLQHZ7xu-cvO57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URvObM95-QsRRG85naCflloyCLsKGoVvlga3ypffMTbPtNpR-oeFwj2Ae_lbqFbpxA/IMG-0890.JPG",className:"banner-img"}),l.a.createElement(k.a,{src:"https://scontent.fccu1-1.fna.fbcdn.net/v/t1.0-9/56603123_814507415592214_3444229206324543488_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=rFS9ZCzIMf4AX8pBOKz&_nc_ht=scontent.fccu1-1.fna&oh=56550360470ceccab3ff35f7a0b5bacc&oe=5EE6E028",className:"profile-img"}),l.a.createElement("div",{className:"share"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://dibyenducoder.netlify.app/"},l.a.createElement(N.a,{icon:O.c,className:"fa"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/dibyenducoder"},l.a.createElement(N.a,{icon:B.b,className:"fa"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100010988894855"},l.a.createElement(N.a,{icon:B.a,className:"fa"})))))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"Dibyendu"),l.a.createElement("p",{className:"text"},"Computer Science Major"),l.a.createElement("span",{class:"location"},l.a.createElement(N.a,{icon:O.g,className:"fa"}),"India")),l.a.createElement(S.a,{className:"follow",onClick:function(){return c(!0)}},"Message"),l.a.createElement(T.a,{show:t,onHide:function(){return c(!1)}},l.a.createElement(T.a.Header,{closeButton:!0},l.a.createElement(T.a.Title,null,"Give me cookies")),l.a.createElement(T.a.Body,null,l.a.createElement(R,null))),l.a.createElement("div",{class:"data"},l.a.createElement("div",{class:"inner-data"},l.a.createElement("span",null,l.a.createElement(N.a,{icon:O.e,className:"fa"})),l.a.createElement("p",null,s)),l.a.createElement("div",{class:"inner-data"},l.a.createElement("span",null,l.a.createElement(N.a,{icon:O.f,className:"fa"})),l.a.createElement("p",null,d))),l.a.createElement("label",null,l.a.createElement("div",{className:"heart"},l.a.createElement("input",{type:"checkbox",onClick:function(){i(v?s-1:s+1)},checked:v,onChange:function(){return b((function(e){return!e}))},style:{position:"relative",top:"-50px",left:"-7px"}}))),l.a.createElement("label",null,l.a.createElement("div",{className:"like"},l.a.createElement("input",{type:"checkbox",onClick:function(){return h(d+1)},style:{position:"relative",top:"-50px",left:"230px"}})))))))},q=(t(407),function(e){var a="side-drawer";return e.show&&(a="side-drawer open"),l.a.createElement("nav",{className:a},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"World Track")),l.a.createElement("li",null,l.a.createElement("a",{href:"/map"},"India Track")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Statistics")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about"},"About"))))}),J=(t(408),function(e){return l.a.createElement("div",{className:"backdrop",onClick:e.click})}),Q=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={sideDrawerOpen:!1},e.HamburgerToggleClickHandler=function(){e.setState((function(e){return{sideDrawerOpen:!e.sideDrawerOpen}}))},e.BackDropClickHandler=function(){e.setState({sideDrawerOpen:!1})},e}return Object(s.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=l.a.createElement(J,{click:this.BackDropClickHandler})),l.a.createElement(u.a,null,l.a.createElement("div",{className:"App",style:{height:"100vh"}},l.a.createElement(D,{HamburgerClickHandler:this.HamburgerToggleClickHandler}),l.a.createElement(q,{show:this.state.sideDrawerOpen})," ;",e,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:g}),l.a.createElement(d.a,{path:"/map",component:y}),l.a.createElement(d.a,{path:"/stat",component:_}),l.a.createElement(d.a,{path:"/about",component:G}),l.a.createElement(d.a,{component:w}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.628e0b8e.chunk.js.map
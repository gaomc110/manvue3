/* empty css                  */import{d as e,y as n,_ as s,z as a,o as t,A as l,w as o,l as u,B as i,C as c,i as r,j as d,f as p,u as m,x as f,D as v,m as g,F as _,e as b,G as h,H as x,I as L,J as M,a as C,K as k,L as y,k as S,M as w,N as I,O as j,P as z,c as O,Q as F,R as H,S as U,T as q,U as A,p as E,b as G}from"./index.d391d433.js";var R=s(e({setup:()=>({appStore:n()})}),[["render",function(e,n,s,r,d,p){const m=a("Fold"),f=a("Expand"),v=i,g=c;return t(),l(g,{effect:"dark",content:e.appStore.doubleMenuCollapse?"展开":"收起",placement:"bottom"},{default:o((()=>[u(v,{class:"cursor-pointer",size:20,onClick:n[0]||(n[0]=n=>e.appStore.increMenuCollapse())},{default:o((()=>[e.appStore.doubleMenuCollapse?(t(),l(f,{key:1})):(t(),l(m,{key:0}))])),_:1})])),_:1},8,["content"])}]]);const B={class:"el-dropdown-link flex items-center"},D=b("img",{src:"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png",alt:"avatar"},null,-1),J=b("span",{class:"ml-2"},"GMC",-1),K=e({__name:"UserMenu",setup(e){const s=r();d(),n(),p();const a=m(),i=()=>{a.resetUserInfo(),s.push({name:"login"})};return(e,n)=>{const s=h,a=x,c=L,r=M;return t(),l(r,null,{dropdown:o((()=>[u(c,null,{default:o((()=>[u(a,{icon:f(v)},{default:o((()=>[g("个人中心")])),_:1},8,["icon"]),u(a,{divided:"",icon:f(_),onClick:i},{default:o((()=>[g("退出登录")])),_:1},8,["icon"])])),_:1})])),default:o((()=>[b("span",B,[u(s,{size:36},{default:o((()=>[D])),_:1}),J])])),_:1})}}}),N={class:"flex-1"},P={__name:"Header",setup(e){const n=r(),s=()=>{n.push("/largescreen")};return(e,n)=>{const l=a("Histogram"),c=i;return t(),C(k,null,[u(R),b("div",N,[u(c,{color:"#409EFC",class:"no-inherit",onClick:s},{default:o((()=>[u(l)])),_:1})]),u(K)],64)}}};var Q=s(e({name:"MenubarItem",props:{menuList:{type:Object,default:()=>({})}},setup:()=>({})}),[["render",function(e,n,s,i,c,r){const d=a("menubar-item",!0),p=I,m=j,f=z;return e.menuList.children&&e.menuList.children.length>0?(t(),l(m,{key:e.menuList.name,index:e.menuList.name},{title:o((()=>[b("i",{class:y(["iconfont",e.menuList.meta.icon||"el-icon-location"])},null,2),b("span",null,S(e.menuList.meta.name),1)])),default:o((()=>[u(p,null,{default:o((()=>[(t(!0),C(k,null,w(e.menuList.children,(e=>(t(),l(d,{key:e.name,index:e.name,"menu-list":e},null,8,["index","menu-list"])))),128))])),_:1})])),_:1},8,["index"])):(t(),l(f,{key:e.menuList.name,index:e.menuList.name},{title:o((()=>[g(S(e.menuList.meta.title),1)])),default:o((()=>[b("i",{class:y(["iconfont",e.menuList.meta.icon||"icon-qita-shezhi"])},null,2)])),_:1},8,["index"]))}]]);var T=s(e({components:{MenubarItem:Q},setup(){const e=r(),s=d(),a=n(),t=p();O((()=>a.theme));const l=O((()=>t.doubleAccessRoutes));console.log(l);const o=O((()=>(console.log(s),s.name)));console.log(o);return{appStore:a,MenuList:l,activeMenu:o,onOpenChange:n=>{console.log(e),console.log(n),e.push({name:n})}}}}),[["render",function(e,n,s,a,u,i){const c=Q,r=F;return t(),l(r,{class:"vsn-sidemenu vsn-layout-bg","default-active":e.activeMenu,"collapse-transition":!1,"unique-opened":!0,collapse:e.appStore.doubleMenuCollapse,onSelect:e.onOpenChange},{default:o((()=>[(t(!0),C(k,null,w(e.MenuList,(e=>(t(),l(c,{key:e.name,index:e.name,"menu-list":e},null,8,["index","menu-list"])))),128))])),_:1},8,["default-active","collapse","onSelect"])}]]);const V=e({setup:()=>({appStore:n()})}),W={to:"/",class:"vsn-layout-bg cursor-pointer flex items-center shadow-lg vsn-logo-wrap"},X=(e=>(E("data-v-86e0162a"),e=e(),G(),e))((()=>b("img",{src:"/manvue3/assets/logo.209b8df5.svg",alt:"logo"},null,-1))),Y={class:"text-white ml-2"};var Z=s(V,[["render",function(e,n,s,i,c,r){const d=T,p=H,m=P,f=U,v=a("router-view"),g=q,_=A;return t(),l(_,null,{default:o((()=>[u(p,{class:y(["vsn-aside vsn-layout-bg",[e.appStore.doubleMenuCollapse?"vsn-aside-collapse":""]])},{default:o((()=>[b("a",W,[X,b("span",Y,S(e.appStore.title),1)]),u(d,{class:"vsn-layout-bg"})])),_:1},8,["class"]),u(_,null,{default:o((()=>[u(f,{class:"vsn-header flex items-center shadow-md"},{default:o((()=>[u(m)])),_:1}),u(g,null,{default:o((()=>[u(v)])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-86e0162a"]]);export{Z as default};

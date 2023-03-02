import{d as e,g as t,V as o,W as a,X as s,Y as i,Z as l,o as r,a as n,L as c,$ as d,x as p,a0 as h,_ as y,h as b,l as g,a1 as m}from"./index.d0787bc8.js";const u=["option"],x=e({__name:"ECharts",props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},options:{type:Object,default:{}},isClick:{type:Boolean,default:!1}},emits:["callbackFun"],setup(e,{emit:y}){const b=e,g=t(null);let m=null;o((()=>b.options),(e=>{i((()=>{m&&m.setOption(e,!0)}))}),{deep:!0});a((()=>{m&&i((()=>{m.resize()}))}));const x=()=>{m&&m.resize()};return s((()=>{i((()=>{(()=>{const e=p(g);e&&(m=h(e),b.isClick&&m.on("click",(e=>{y("callbackFun",e)})),m.setOption(b.options,!0),window.addEventListener("resize",x))})()}))})),l((()=>{window.removeEventListener("resize",x),m=null})),(e,t)=>(r(),n("div",{ref_key:"myChartsRef",ref:g,class:c(b.className),style:d({height:b.height,width:b.width}),option:b.options},null,14,u))}});const f={class:"myEcharts"};var w=y(e({__name:"Dashboard",setup(e){const{proxy:t}=m(),o=b({myEchartsOption:{backgroundColor:"#061740",grid:{x:0,y:0,x2:0,y2:0,top:"15%",left:"3%",right:"3%",bottom:"20%",containLabel:!0},legend:{data:["季度销售额","销售增长率"],bottom:"bottom",type:"scroll",padding:[10,0,0,0],textStyle:{color:"rgba(36, 173, 254, 1)",fontSize:"1rem"},itemHeight:5,itemWidth:10},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",axisTick:{show:!1},interval:1,axisLabel:{color:"rgba(36, 173, 254, 1)",fontSize:"24"},axisLine:{show:!1},data:["第一季度","第二季度","第三季度"]}],yAxis:[{type:"value",splitNumber:5,splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(36, 173, 254, 0.2)"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"rgba(36, 173, 254, 1)"},fontSize:"24"},axisLine:{show:!0,lineStyle:{color:"rgba(36, 173, 254, 1)"}}},{type:"value",splitNumber:5,splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(36, 173, 254, 0.2)"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"rgba(36, 173, 254, 1)"},fontSize:"24"},axisLine:{show:!0,lineStyle:{color:"rgba(36, 173, 254, 1)"}}}],series:[{name:"季度销售额",type:"bar",barWidth:"20%",data:["13","25","38"],showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},itemStyle:{normal:{barBorderRadius:[30,30,0,0],color:new t.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#77DDFF"},{offset:.5,color:"#00BBFF"},{offset:1,color:"#009FCC"}])}}},{type:"line",stack:"Total",name:"销售增长率",emphasis:{focus:"series"},yAxisIndex:1,data:["40","28","26"],itemStyle:{normal:{color:"#FFBB00",lineStyle:{color:"#FFBB00",type:"dashed"}}},symbol:"circle",symbolSize:15}]}}),a=e=>{console.log(e,"拿到对象做点你需要的功能")};return(e,t)=>(r(),n("div",f,[g(x,{width:"100%",height:"100%",options:o.myEchartsOption,isClick:"",onCallbackFun:a},null,8,["options"])]))}}),[["__scopeId","data-v-03d0e637"]]);export{w as default};

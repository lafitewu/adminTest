webpackJsonp([13],{1064:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{loading:!0,Id:"",filterCpl:[],msg:"广告设置",msg1:"虚拟货币设置",msg2:"虚拟货币名称：",msg3:"虚拟货币汇率：",msg4:"CPL广告过滤",msg5:"CPA广告过滤",msg6:"与用户分成比例：",msg7:"回调地址（不同广告可单独配置）：",msg8:"服务器秘钥：",value:"",value2:"金币",moneyVal:"100",options:[],tableData3:[],multipleSelection:[],KindsBtn:[{name:"CPA广告",value:"cpa"},{name:"CPL广告",value:"cpl"},{name:"加粉广告(小程序+公众号)",value:"mini"}],kindsIndex:0,userRatio1:!0,userRatio2:!1,httpKey:"",httpAdressVal1:"",httpAdressVal2:"",httpAdressVal3:"",userVal:"",httpAdress1:!0,httpAdress2:!1,httpAdress3:!1,dictShow:!1}},mounted:function(){this.Init()},updated:function(){this.checked()},methods:{Init:function(){var t=this;t.$http.post(t.hostname+"/api/dev/getAppsConfigs"+this.url_token()).then(function(a){0==a.body.code?(t.$router.replace("/login"),t.$notify.error({title:"温馨提示",message:"您的账号在别处登录，请重新登录"})):(t.loading=!1,t.options=a.data.data,t.Id=t.options[0].id,t.value=t.options[0].name,t.value2=t.options[0].exdw,t.moneyVal=t.options[0].exchange,t.tableData3=t.options[0].cpls,t.userVal=t.options[0].downratio_cpa,t.userVal2=t.options[0].downratio_mini,t.httpAdressVal1=t.options[0].cpa_callback_url,t.httpAdressVal2=t.options[0].cpl_callback_url,t.httpAdressVal3=t.options[0].mini_callback_url,t.httpKey=t.options[0].dkey)})},saveFn:function(){var t=this;if(t.moneyVal=String(t.moneyVal),t.moneyVal<0||1!=t.moneyVal.split(".").length||t.userVal<0||t.userVal>1||t.userVal2<0||t.userVal2>1)this.$notify.error({title:"失败",message:"输入有误,请重新输入"});else{t.loading=!0;var a={id:t.Id,exdw:t.value2,exchange:t.moneyVal,cpa_callback_url:t.httpAdressVal1,cpl_callback_url:t.httpAdressVal2,mini_callback_url:t.httpAdressVal3,downratio_cpa:t.userVal,downratio_mini:t.userVal2,filterCpl:t.filterCpl};t.$http.post(t.hostname+"/api/dev/saveAppConfig"+this.url_token(),a).then(function(a){1==a.body.code?(t.$notify.success({title:"成功",message:"保存成功！"}),t.Init()):(t.loading=!1,t.$notify.error({title:"失败",message:a.body.msg}))})}},checked:function(){for(var t=this.tableData3.length,a=0;a<t;a++)1==this.tableData3[a].ignore&&this.$refs.multipleTable.toggleRowSelection(this.tableData3[a],!0)},handleSelectionChange:function(t){0==t.length?this.filterCpl="":this.filterCpl=t},selectFn:function(t){for(var a,e=this,s=0,i=e.options.length;s<i;s++)t==e.options[s].id&&(a=s);e.Id=e.options[a].id,e.value2=e.options[a].exdw,e.moneyVal=e.options[a].exchange,e.tableData3=e.options[a].cpls,e.userVal=e.options[a].downratio_cpa,e.userVal2=e.options[a].downratio_mini,e.httpAdressVal1=e.options[a].cpa_callback_url,e.httpAdressVal2=e.options[a].cpl_callback_url,e.httpAdressVal3=e.options[a].mini_callback_url,e.httpKey=e.options[a].dkey},kindsTap:function(t){var a;this.kindsIndex=t,this.val_date=this.KindsBtn[t].value;for(var e=0,s=this.options.length;e<s;e++)this.Id==this.options[e].id&&(a=e);console.log(a),console.log(this.Id),0==t?(this.userRatio1=!0,this.userRatio2=!1,this.httpAdress1=!0,this.httpAdress2=!1,this.httpAdress3=!1,this.dictShow=!1,this.userVal=this.options[a].downratio_cpa,this.httpAdressVal1=this.options[a].cpa_callback_url):1==t?(this.userRatio1=!1,this.userRatio2=!1,this.httpAdress1=!1,this.httpAdress2=!0,this.httpAdress3=!1,this.dictShow=!0,this.httpAdressVal2=this.options[a].cpl_callback_url):(this.userRatio1=!1,this.userRatio2=!0,this.httpAdress1=!1,this.httpAdress2=!1,this.httpAdress3=!0,this.dictShow=!1,this.userVal2=this.options[a].downratio_mini,this.httpAdressVal3=this.options[a].mini_callback_url)}}}},1174:function(t,a,e){a=t.exports=e(91)(!1),a.push([t.i,"h3[data-v-26177afc]{width:100%;padding-bottom:1vw;border-bottom:1px solid #bfcbd9}.moneySet[data-v-26177afc],.selects[data-v-26177afc]{width:80%;padding:1vw 0;border-bottom:1px dashed gray}.money1[data-v-26177afc],.money2[data-v-26177afc]{margin-top:1.5vw;font-size:16px}.money2[data-v-26177afc]{margin-top:.8vw;padding-bottom:1.2vw;border-bottom:1px dashed gray}.money_unit[data-v-26177afc]{margin-top:.5vw}.ads[data-v-26177afc]{padding-bottom:1.2vw;border-bottom:1px dashed gray}.ads h4[data-v-26177afc]{margin-top:1vw}.adsName[data-v-26177afc]{float:left;margin-top:.6vw;font-size:16px}.adSave[data-v-26177afc],.adsBtn[data-v-26177afc]{display:inline-block;width:120px;height:35px;line-height:35px;text-align:center;color:#fff;background:#20a0ff;margin-top:2vw;border-radius:5px;cursor:pointer}.adsTable[data-v-26177afc]{margin-top:1vw}.kinds[data-v-26177afc]{width:100%;height:40px;margin-top:20px;font-size:.9rem}.kindsBtns[data-v-26177afc]{float:left;margin-right:5px;width:15%;height:100%;line-height:40px;text-align:center;background:#fff;border:1px solid gray;cursor:pointer;border-radius:5px}.kinds_active[data-v-26177afc]{color:#fff;font-weight:700;background:#20a0ff}",""])},1505:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"setAd",attrs:{"element-loading-text":"加载中..."}},[e("h3",[t._v(t._s(t.msg))]),t._v(" "),e("el-select",{staticStyle:{"margin-top":"20px"},attrs:{placeholder:"请选择应用"},on:{change:t.selectFn},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),e("div",{staticClass:"moneySet"},[e("h4",[t._v(t._s(t.msg1))]),t._v(" "),e("div",{staticClass:"money1"},[t._v(t._s(t.msg2))]),t._v(" "),e("el-input",{staticStyle:{width:"19%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}}),t._v(" "),e("span",{staticStyle:{"margin-left":"2vw"}},[t._v("例如：汇率=1000,单位=金币 表示app内 1元=1000金币，请以app内实际单位为准。一般配置一次，请勿随意修改。")])],1),t._v(" "),e("div",{staticClass:"money2"},[t._v("\n\t\t\t"+t._s(t.msg3)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"15%","margin-top":"0.5vw"},attrs:{type:"number",placeholder:""},model:{value:t.moneyVal,callback:function(a){t.moneyVal=a},expression:"moneyVal"}})],1),t._v(" "),e("div",{staticClass:"kinds"},t._l(t.KindsBtn,function(a,s){return e("div",{key:s,staticClass:"kindsBtns",class:{kinds_active:t.kindsIndex==s},on:{click:function(a){t.kindsTap(s)}}},[t._v(t._s(a.name))])}),0),t._v(" "),t.userRatio1?e("div",{staticClass:"money2"},[t._v("\n\t\t"+t._s(t.msg6)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"15%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.userVal,callback:function(a){t.userVal=a},expression:"userVal"}}),t._v(" "),e("span",{staticStyle:{"margin-left":"20px"}},[t._v("ps:分成比例应在0-1之间(如：设置0.4，给用户40%)")])],1):t._e(),t._v(" "),t.userRatio2?e("div",{staticClass:"money2"},[t._v("\n\t\t"+t._s(t.msg6)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"15%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.userVal2,callback:function(a){t.userVal2=a},expression:"userVal2"}}),t._v(" "),e("span",{staticStyle:{"margin-left":"20px"}},[t._v("ps:分成比例应在0-1之间(如：设置0.4，给用户40%)")])],1):t._e(),t._v(" "),t.httpAdress1?e("div",{staticClass:"money2"},[t._v("\n\t\t"+t._s(t.msg7)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"50%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.httpAdressVal1,callback:function(a){t.httpAdressVal1=a},expression:"httpAdressVal1"}})],1):t._e(),t._v(" "),t.httpAdress2?e("div",{staticClass:"money2"},[t._v("\n\t\t"+t._s(t.msg7)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"50%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.httpAdressVal2,callback:function(a){t.httpAdressVal2=a},expression:"httpAdressVal2"}})],1):t._e(),t._v(" "),t.httpAdress3?e("div",{staticClass:"money2"},[t._v("\n\t\t"+t._s(t.msg7)),e("br"),t._v(" "),e("el-input",{staticStyle:{width:"50%","margin-top":"0.5vw"},attrs:{placeholder:""},model:{value:t.httpAdressVal3,callback:function(a){t.httpAdressVal3=a},expression:"httpAdressVal3"}})],1):t._e(),t._v(" "),t.dictShow?e("el-collapse",{staticStyle:{"margin-top":"30px"},attrs:{accordion:""}},[e("el-collapse-item",{attrs:{title:t.msg4,name:"1"}},[e("div",{staticClass:"adsTable"},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"element-loading-text":"加载中....",data:t.tableData3,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"70"}}),t._v(" "),e("el-table-column",{attrs:{label:"ID",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s(a.row.id))]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"img",label:"图标",width:"120"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{staticStyle:{width:"70%","margin-top":"10%"},attrs:{src:t.row.img,alt:"图标"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"广告名称"}}),t._v(" "),e("el-table-column",{attrs:{prop:"package_name",label:"包名","show-overflow-tooltip":""}})],1)],1)])],1):t._e(),t._v(" "),e("div",{staticClass:"adSave",on:{click:t.saveFn}},[t._v("确认保存")])],1)},staticRenderFns:[]}},1537:function(t,a,e){var s=e(1174);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(204)("34488e6b",s,!0)},531:function(t,a,e){e(1537);var s=e(205)(e(1064),e(1505),"data-v-26177afc",null);t.exports=s.exports}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-141b584e"],{"7d29":function(t,e,a){"use strict";var s=a("951b"),l=a.n(s);l.a},"951b":function(t,e,a){},e636:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-form",{attrs:{inline:!0,size:"small"}},[t.auth.add?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-plus",disabled:t.loading},on:{click:t.handleCreate}},[t._v("新增消息")])],1):t._e(),t.auth.del?a("el-form-item",[a("el-button",{attrs:{icon:"el-icon-delete",disabled:t.loading},on:{click:function(e){return t.handleDelete(null)}}},[t._v("删除")])],1):t._e(),a("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:t.$route.path}})],1),a("el-table",{attrs:{data:t.currentTableData,"highlight-current-row":!0},on:{"selection-change":t.handleSelectionChange,"sort-change":t.sortChange}},[a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"标题",prop:"title","min-width":"350","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:{link:t.auth.view},on:{click:function(a){return t.handleView(e.$index)}}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{label:"类型",prop:"type",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.typeData[e.row.type])+" ")]}}])}),a("el-table-column",{attrs:{label:"成员组",prop:"member"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.groupData[e.row.member])+" ")]}}])}),a("el-table-column",{attrs:{label:"日期",prop:"create_time",align:"center",sortable:"custom",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 创建日期："+t._s(e.row.create_time)),a("br"),t._v(" 最后更新："+t._s(e.row.update_time)+" ")]),a("span",[t._v(t._s(e.row.create_time))])])]}}])}),a("el-table-column",{attrs:{label:"置顶",prop:"is_top",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"mini",effect:"plain",type:t.topMap[e.row.is_top].type}},[t._v(" "+t._s(t.topMap[e.row.is_top].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",sortable:"custom",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"mini",effect:"plain",type:t.statusMap[e.row.status].type}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.view?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleView(e.$index)}}},[e.row.url?a("el-tooltip",{attrs:{content:e.row.url,placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 打开方式："+t._s(t.targetMap[e.row.target])),a("br"),t._v(" 链接地址："+t._s(e.row.url)+" ")]),a("i",{staticClass:"el-icon-link"})]):t._e(),t._v(" "+t._s(e.row.url?"外链":"预览"))],1):t._e(),t.auth.set&&0===e.row.status?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.status&&0===e.row.status?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleSubmit(e.$index)}}},[t._v("发布")]):t._e(),t.auth.del?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleDelete(e.$index)}}},[t._v("删除")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入消息标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[t.dialogFormVisible?a("cs-tinymce",{attrs:{code:"inside_content",height:180},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}):t._e()],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.typeData,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"成员组",prop:"member"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"update"===t.dialogStatus,placeholder:"请选择"},model:{value:t.form.member,callback:function(e){t.$set(t.form,"member",e)},expression:"form.member"}},t._l(t.groupData,(function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1)],1)],1),a("el-form-item",{attrs:{label:"外部链接",prop:"url"}},[a("el-input",{attrs:{placeholder:"可输入外部链接"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),a("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[a("el-radio-group",{model:{value:t.form.target,callback:function(e){t.$set(t.form,"target",e)},expression:"form.target"}},[a("el-radio",{attrs:{label:"_self"}},[t._v("当前窗口")]),a("el-radio",{attrs:{label:"_blank"}},[t._v("新窗口")])],1)],1),a("el-form-item",{attrs:{label:"发布状态",prop:"status"}},[a("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-radio",{attrs:{label:"0"}},[t._v("草稿件")]),a("el-radio",{attrs:{label:"1"}},[t._v("正式发布")])],1)],1),a("el-form-item",{attrs:{label:"是否置顶",prop:"is_top"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.is_top,callback:function(e){t.$set(t.form,"is_top",e)},expression:"form.is_top"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"create"===t.dialogStatus?a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.submit}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.dialogLoading,size:"small"},on:{click:t.updata}},[t._v("修改")])],1)],1)],1)},l=[],i=(a("4160"),a("c975"),a("d3b7"),a("25f0"),a("159b"),a("5530")),o=a("5646"),r=a("ca00"),n={components:{csTinymce:function(){return Promise.all([a.e("chunk-5fb06de8"),a.e("chunk-56353b7a")]).then(a.bind(null,"4b93"))}},props:{loading:{default:!1},tableData:{default:function(){return[]}},typeData:{default:function(){}},groupData:{default:function(){}}},data:function(){return{currentTableData:[],multipleSelection:[],dialogLoading:!1,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑消息",create:"新增消息"},form:{type:void 0,member:void 0,title:void 0,content:void 0,url:void 0,target:void 0,is_top:void 0,status:void 0},auth:{add:!1,set:!1,del:!1,status:!1,view:!1},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],type:[{required:!0,message:"至少选择一项",trigger:"change"}],member:[{required:!0,message:"至少选择一项",trigger:"change"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]},topMap:{0:{text:"普通",type:"info"},1:{text:"置顶",type:"warning"}},statusMap:{0:{text:"草稿件",type:"danger"},1:{text:"已发布",type:"success"}},targetMap:{_self:"当前窗口",_blank:"新窗口"}}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.add=this.$permission("/system/message/send/add"),this.auth.set=this.$permission("/system/message/send/set"),this.auth.del=this.$permission("/system/message/send/del"),this.auth.status=this.$permission("/system/message/send/status"),this.auth.view=this.$permission("/system/message/send/view")},_getIdList:function(t){null===t&&(t=this.multipleSelection);var e=[];return Array.isArray(t)?t.forEach((function(t){e.push(t.message_id)})):e.push(this.currentTableData[t].message_id),e},handleSelectionChange:function(t){this.multipleSelection=t},sortChange:function(t){var e=t.column,a=t.prop,s=t.order,l={order_type:void 0,order_field:void 0};e&&s&&(l.order_type="ascending"===s?"asc":"desc",l.order_field=a),this.$emit("sort",l)},handleCreate:function(){var t=this;this.form={type:void 0,member:void 0,title:void 0,content:void 0,url:void 0,target:"_blank",is_top:"0",status:"0"},this.$nextTick((function(){t.$refs.form&&t.$refs.form.clearValidate(),t.dialogStatus="create",t.dialogLoading=!1,t.dialogFormVisible=!0}))},submit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(o["a"])(Object(i["a"])({},t.form)).then((function(e){t.currentTableData.unshift(Object(i["a"])(Object(i["a"])({},e.data),{},{page_views:0})),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleSubmit:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["k"])(a).then((function(){e.currentTableData.forEach((function(t,s){-1!==a.indexOf(t.message_id)&&e.$set(e.currentTableData,s,Object(i["a"])(Object(i["a"])({},t),{},{status:1}))})),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleDelete:function(t){var e=this,a=this._getIdList(t);0!==a.length?this.$confirm("确定要执行该操作吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",closeOnClickModal:!1}).then((function(){Object(o["b"])(a).then((function(){r["a"].deleteDataList(e.currentTableData,a,"message_id"),e.currentTableData.length<=0&&e.$emit("refresh",!0),e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleUpdate:function(t){var e=this;this.form=Object(i["a"])(Object(i["a"])({},this.currentTableData[t]),{},{type:this.currentTableData[t].type.toString(),member:this.currentTableData[t].member.toString(),is_top:this.currentTableData[t].is_top.toString(),status:this.currentTableData[t].status.toString()}),this.$nextTick((function(){e.$refs.form&&e.$refs.form.clearValidate(),e.currentIndex=t,e.dialogStatus="update",e.dialogLoading=!1,e.dialogFormVisible=!0}))},updata:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,Object(o["j"])(Object(i["a"])({},t.form)).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(i["a"])(Object(i["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.dialogFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.dialogLoading=!1})))}))},handleView:function(t){this.auth.view&&(this.currentTableData[t].url?this.$open(this.currentTableData[t].url):this.$router.push({name:"system-message-send-view",params:{message_id:this.currentTableData[t].message_id}}))}}},c=n,u=(a("7d29"),a("2877")),d=Object(u["a"])(c,s,l,!1,null,"b8b4a82e",null);e["default"]=d.exports}}]);
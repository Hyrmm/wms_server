"use strict";(self["webpackChunkwms_client"]=self["webpackChunkwms_client"]||[]).push([[881],{7457:function(t,e,a){a.d(e,{Z:function(){return d}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"warpper"},[e("el-pagination",t._g(t._b({attrs:{background:"",layout:"prev, pager, next"}},"el-pagination",t.$attrs,!1),t.$listeners))],1)},s=[],r={},i=r,l=a(1001),n=(0,l.Z)(i,o,s,!1,null,"74a772a0",null),d=n.exports},4598:function(t,e,a){a.d(e,{Z:function(){return c}});var o=function(){var t=this,e=t._self._c;return e("el-form",t._b({attrs:{inline:!0,model:t.form}},"el-form",t.$attrs,!1),[t.nameFilter?e("el-form-item",{attrs:{label:"名称"}},[e("el-select",{attrs:{placeholder:"名称不限",clearable:""},on:{change:t.nameOptionsChange},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},t._l(t.storeOptions,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),t.typeFilter?e("el-form-item",{attrs:{label:"类型"}},[e("el-select",{attrs:{placeholder:"类型不限",clearable:"",disabled:t.disabled},model:{value:t.form.typeIndex,callback:function(e){t.$set(t.form,"typeIndex",e)},expression:"form.typeIndex"}},t._l(t.typeOptions,(function(t,a){return e("el-option",{key:t.value,attrs:{label:t.label,value:a}})})),1)],1):t._e(),t.dateFilter?e("el-form-item",{attrs:{label:"日期"}},[e("el-date-picker",{attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.date,callback:function(e){t.$set(t.form,"date",e)},expression:"form.date"}})],1):t._e(),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchClick}},[t._v("查询")])],1)],1)},s=[],r=a(3822),i={props:["dateFilter","nameFilter","typeFilter"],data:function(){return{disabled:!0,form:{date:[],name:"",nameIndex:"",type:"",typeIndex:""}}},computed:{typeOptions(){return this.storeOptions[this.form.nameIndex]?this.storeOptions[this.form.nameIndex].children:[]},type(){return this.typeOptions[this.form.typeIndex]?this.typeOptions[this.form.typeIndex].label:""},...(0,r.rn)("store",["storeOptions"])},methods:{nameOptionsChange(t){this.form.typeIndex="",this.disabled=!t,this.storeOptions.forEach(((e,a)=>{e.value==t&&(this.form.nameIndex=a)}))},searchClick(){this.$emit("search",{filter_date_start:this.form.date[0],filter_date_end:this.form.date[1],name:this.form.name,type:this.type})}},mounted(){}},l=i,n=a(1001),d=(0,n.Z)(l,o,s,!1,null,null,null),c=d.exports},9881:function(t,e,a){a.r(e),a.d(e,{default:function(){return q}});var o=function(){var t=this,e=t._self._c;return e("div",[e("TableFilter",{attrs:{size:"mini",nameFilter:!0},on:{search:t.search}}),e("Table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],attrs:{data:t.stock}}),e("el-divider"),e("div",{staticClass:"control"},[e("PagiNation",{attrs:{total:t.total,"page-size":20,"current-page":t.current_page},on:{"current-change":t.currentPageChange}}),e("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.addFormDailogOpen}},[e("i",{staticClass:"el-icon-plus",staticStyle:{"font-size":"16px"}}),t._v("新增库存")])],1),e("AddDialogForm",{attrs:{addData:t.addData,visible:t.addFormDailogVisible},on:{close:t.addFormDailogClose,addStore:t.addStore}})],1)},s=[],r=a(7457),i=a(4598),l=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"添加库存",visible:t.visible},on:{close:t.close}},[e("el-form",{ref:"addForm",attrs:{model:t.addData,"label-position":"top",rules:t.rules}},[e("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.addData.name,callback:function(e){t.$set(t.addData,"name",e)},expression:"addData.name"}})],1),e("el-form-item",{attrs:{label:"商品类型",prop:"type"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.addData.type,callback:function(e){t.$set(t.addData,"type",e)},expression:"addData.type"}})],1),e("el-form-item",{attrs:{label:"库存数量"}},[e("el-input-number",{attrs:{"controls-position":"right",min:1,max:9999999},model:{value:t.addData.stock,callback:function(e){t.$set(t.addData,"stock",e)},expression:"addData.stock"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.complete}},[t._v("立即添加")]),e("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)},n=[],d={props:["visible","addData"],data:function(){return{rules:{name:[{required:!0,message:"请输入要添加库存的商品名称",trigger:"blur"}],type:[{required:!0,message:"请输入要添加库存的商品类型",trigger:"blur"}]}}},methods:{close:function(){this.addData.name="",this.addData.stock="",this.addData.type="",this.$refs["addForm"].resetFields(),this.$emit("close")},complete:function(){this.$refs["addForm"].validate((t=>{t?this.$emit("addStore"):this.$message.warning("请正确填写表单!")}))}},computed:{inner_visible:function(){return this.visible}}},c=d,m=a(1001),u=(0,m.Z)(c,l,n,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("el-table",t._b({staticStyle:{width:"100%"},attrs:{stripe:!0,height:"600"}},"el-table",t.$attrs,!1),[e("el-table-column",{attrs:{prop:"index",label:"#",width:"100"}}),e("el-table-column",{attrs:{prop:"name",label:"名称"}}),e("el-table-column",{attrs:{prop:"type",label:"类型"}}),e("el-table-column",{attrs:{prop:"stock",label:"库存",width:"100",sortable:!0}}),e("el-table-column",{attrs:{prop:"last_updata",label:"最近变动",width:"250",sortable:!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"el-icon-time"}),e("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.dataFormat(a.row.last_updata)))])]}}])}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"big"},on:{click:function(e){return t.rowEditClick(a.row)}}},[t._v("编辑")]),e("el-button",{staticStyle:{color:"red"},attrs:{type:"text",size:"big"},on:{click:function(e){return t.rowRemoveClick(a.row)}}},[t._v("删除")])]}}])})],1),e("EditDialogForm",{attrs:{visible:t.dialogFromVisible,editData:t.editData},on:{close:t.closeDialogFrom}})],1)},h=[],b=function(){var t=this,e=t._self._c;return e("div",[e("el-dialog",{attrs:{title:"编辑库存",visible:t.visible},on:{close:t.close}},[e("el-form",{ref:"addForm",attrs:{model:t.form,"label-position":"top",rules:t.rules}},[e("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("el-form-item",{attrs:{label:"商品类型",prop:"type"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),e("el-form-item",{attrs:{label:"库存数量"}},[e("el-input-number",{attrs:{"controls-position":"right",min:1,max:9999999},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}})],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.complete("addForm")}}},[t._v("保存修改")]),e("el-button",{on:{click:t.close}},[t._v("取消")])],1)],1)],1)},g=[],y={props:["visible","editData"],data:function(){return{form:{},rules:{name:[{required:!0,message:"请输入要添加库存的商品名称",trigger:"blur"}],type:[{required:!0,message:"请输入要添加库存的商品类型",trigger:"blur"}]}}},methods:{close:function(){this.$refs["addForm"].resetFields(),this.$emit("close")},complete:function(t){this.$refs[t].validate((t=>{if(!t)return this.$message.warning("请正确填写表单!"),!1;this.$emit("close")}))}},computed:{},watch:{editData:{handler(t){this.form=t}}}},v=y,k=(0,m.Z)(v,b,g,!1,null,null,null),D=k.exports,_=a(2325),F={components:{EditDialogForm:D},data:function(){return{dialogFromVisible:!1,editData:{}}},methods:{rowEditClick:function(t){this.editData=t,this.showDialogFrom()},showDialogFrom:function(){this.dialogFromVisible=!0},closeDialogFrom:function(){this.dialogFromVisible=!1},dataFormat:function(t){return(0,_.p6)(new Date(t))}}},x=F,$=(0,m.Z)(x,f,h,!1,null,null,null),w=$.exports,S=a(3822),C=a(2932),L=a(5738),O={components:{AddDialogForm:p,Table:w,TableFilter:i.Z,PagiNation:r.Z},data(){return{addData:{},query:{name:""},tableLoading:!1}},mixins:[C.K],computed:{...(0,S.rn)("store",{stock:t=>t.stock.data,current_page:t=>t.stock.current_page,total:t=>t.stock.total})},methods:{search:function(t){this.tableLoading=!0,this.query.name=t.name?t.name:"",this.$store.dispatch("store/getStock",{page:1,name:this.query.name}).then((t=>{this.tableLoading=!1}),(t=>{this.tableLoading=!1}))},currentPageChange:function(t){this.tableLoading=!0,this.$store.dispatch("store/getStock",{page:t,name:this.query.name}).then((t=>{this.tableLoading=!1}),(t=>{this.tableLoading=!1}))},reflash:function(){this.tableLoading=!0,this.$store.dispatch("store/getStock",{page:1,name:this.query.name}).then((t=>{this.tableLoading=!1}),(t=>{this.tableLoading=!1}))},async addStore(){let t=await(0,L.QL)(this.addData);200==t.data.status&&(this.$message.success(t.data.msg),this.addFormDailogVisible=!1,this.reflash())}},mounted(){this.tableLoading=!0,this.$store.dispatch("store/getStock",{page:1}).then((t=>{this.tableLoading=!1}),(t=>{this.tableLoading=!1}))}},I=O,Z=(0,m.Z)(I,o,s,!1,null,"4a72dfc8",null),q=Z.exports},2932:function(t,e,a){a.d(e,{K:function(){return r},Y:function(){return i}});a(7658);var o=a(3822),s=a(5738);const r={data(){return{addData:[],addFormDailogVisible:!1}},methods:{addFormDailogClose(){this.addFormDailogVisible=!1},addFormDailogOpen(){this.addFormDailogVisible=!0},addRow(t){console.log(t),this.addData.push(t)},removeRow(t,e){this.$confirm("是否确认执行删除操作?","提示",{type:"warning",confirmButtonText:"确认",cancelButtonText:"取消"}).then((()=>{this.addData.splice(t,1),this.$message.success("删除成功")}))},async post(t,e){let a=s.el;"outStore"==t&&(a=s.Sb);for(let o of this.filterAddData){let t={};e.forEach((e=>{t[e]=o[e]}));let s=await a(t).catch((t=>{o.postStatus="fail"}));200==s.data.status?o.postStatus="success":o.postStatus="fail"}}},computed:{filterAddData(){return this.addData.filter((t=>t.checked&&"success"!=t.postStatus))}}},i={data:function(){return{addForm:{}}},computed:{...(0,o.rn)("store",["storeOptions","transportStatusOptions"]),stockId:function(){for(let t of this.storeOptions)if(t.label==this.addForm.name_type[0])for(let e of t.children)if(e.label==this.addForm.name_type[1])return e.stock_id;return""}},methods:{closed(){this.addForm={},this.$refs["form"].resetFields()}}}}}]);
//# sourceMappingURL=881.076823f4.js.map
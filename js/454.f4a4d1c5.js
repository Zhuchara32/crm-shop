"use strict";(self["webpackChunkcrm_shop"]=self["webpackChunkcrm_shop"]||[]).push([[454],{9454:function(r,i,e){e.r(i),e.d(i,{default:function(){return I}});var t=e(3396),n=e(7139),l=e(9242);const d=(0,t._)("h2",{class:"add-heading"}," Заполните необходимые поля, для добавления товара ",-1),a=(0,t._)("label",{for:"typeProduct",class:"add-label"}," Тип продукта: ",-1),o={class:"invalid-list"},s=(0,t._)("option",{value:"",disabled:"",selected:""},null,-1),u=["value"],c=(0,t._)("label",{for:"nameProd",class:"add-label"}," Название товара: ",-1),p={class:"invalid-list"},m=(0,t._)("label",{for:"description",class:"add-label"}," Описание товара: ",-1),g={class:"invalid-list"},v=(0,t._)("label",{for:"count",class:"add-label"}," Количество товара: ",-1),$={class:"invalid-list"},_=(0,t._)("label",{for:"price",class:"add-label"}," Укажите цену на товар: ",-1),y={class:"invalid-list"},P=(0,t._)("label",{for:"img",class:"add-label"}," Загрузите изображение товара ",-1),h={class:"invalid-list"},w=(0,t._)("button",{class:"add-btn",type:"submit"}," Сохранить товар ",-1);function f(r,i,e,f,b,C){return(0,t.wg)(),(0,t.iD)("form",{class:(0,n.C_)(["add",{full:!r.isOpen}]),onSubmit:i[6]||(i[6]=(0,l.iM)(((...r)=>C.submitAddProd&&C.submitAddProd(...r)),["prevent"]))},[d,a,(0,t._)("ul",o,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.typeProduct.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorTypeProd(r.$validator,r.$params)),1)))),128))]),(0,t.wy)((0,t._)("select",{name:"typeProduct",id:"typeProduct",class:(0,n.C_)(["add-input",{invalid:f.v$.typeProduct.$error}]),"onUpdate:modelValue":i[0]||(i[0]=r=>b.typeProduct=r)},[s,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.typeProd,((r,i)=>((0,t.wg)(),(0,t.iD)("option",{key:i,value:r},(0,n.zw)(r),9,u)))),128))],2),[[l.bM,b.typeProduct]]),c,(0,t._)("ul",p,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.nameProd.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorNameProd(r.$validator,r.$params)),1)))),128))]),(0,t.wy)((0,t._)("input",{class:(0,n.C_)(["add-input",{invalid:f.v$.nameProd.$error}]),type:"text","onUpdate:modelValue":i[1]||(i[1]=r=>b.nameProd=r),id:"nameProd"},null,2),[[l.nr,b.nameProd]]),m,(0,t._)("ul",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.description.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorDescription(r.$validator,r.$params)),1)))),128))]),(0,t.wy)((0,t._)("textarea",{class:(0,n.C_)(["add-input",{invalid:f.v$.description.$error}]),"onUpdate:modelValue":i[2]||(i[2]=r=>b.description=r),name:"description",id:"description",cols:"30",rows:"10"},"\r\n    ",2),[[l.nr,b.description]]),v,(0,t._)("ul",$,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.count.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorCount(r.$validator,r.$params)),1)))),128))]),(0,t.wy)((0,t._)("input",{class:(0,n.C_)(["add-input",{invalid:f.v$.count.$error}]),type:"number","onUpdate:modelValue":i[3]||(i[3]=r=>b.count=r),id:"count"},null,2),[[l.nr,b.count]]),_,(0,t._)("ul",y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.price.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorPrice(r.$validator,r.$params)),1)))),128))]),(0,t.wy)((0,t._)("input",{type:"number",class:(0,n.C_)(["add-input",{invalid:f.v$.price.$error}]),"onUpdate:modelValue":i[4]||(i[4]=r=>b.price=r),id:"price"},null,2),[[l.nr,b.price]]),P,(0,t._)("ul",h,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(f.v$.img.$errors,((r,i)=>((0,t.wg)(),(0,t.iD)("li",{class:"invalid-list__errors",key:i},(0,n.zw)(C.printErrorImg(r.$validator,r.$params)),1)))),128))]),(0,t._)("input",{class:(0,n.C_)(["add-input",{invalid:f.v$.img.$error}]),type:"file",ref:"fileImg",id:"img",onChange:i[5]||(i[5]=(...r)=>C.addImg&&C.addImg(...r))},null,34),w],34)}e(6699);var b=e(65),C=e(3053),D=e(9117),E={name:"AddProduct",setup(){return{v$:(0,C.ZP)()}},data(){return{typeProduct:"",nameProd:"",count:null,price:null,img:"",description:"",fileType:["image/jpeg","image/pjpeg","image/png","image/jpg"]}},validations(){return{typeProduct:{required:D.C1},nameProd:{required:D.C1,minLength:(0,D.Ei)(5)},count:{required:D.C1,integer:r=>Number.isInteger(r)},price:{required:D.C1},img:{required:D.C1,isTrue:r=>this.fileType.includes(r.type)},description:{required:D.C1,minLength:(0,D.Ei)(20)}}},computed:{...(0,b.Se)(["isOpen","typeProd"])},methods:{...(0,b.nv)(["addImage"]),async submitAddProd(){if(this.v$.$touch(),this.v$.$error)return;const r={typeProduct:this.typeProduct,nameProd:this.nameProd,count:this.count,price:this.price,img:this.img,description:this.description,confirmEddit:!1,confirmDelete:!1,confirmCart:!1};console.log(r);try{await this.addImage(r),this.clearProd(),this.v$.$reset(),this.$message("Товар успешно добавлен")}catch(i){}},clearProd(){this.typeProduct="",this.nameProd="",this.count=null,this.price=null,this.img="",this.description=""},addImg(){const r=this.$refs.fileImg.files[0];this.img=r},printErrorTypeProd(r,i){if("required"===r)return"Из выпадающего списка, выбирете тип товара"},printErrorNameProd(r,i){return"required"===r?"Укажите название товара":"minLength"===r?"Минимальная длинна названия товара "+i.min+" символов":void 0},printErrorCount(r,i){return"required"===r?"Укажите количество товара, которое есть в наличие":"integer"===r?"Количество товара должно быть целым числом":void 0},printErrorPrice(r,i){if("required"===r)return"Укажите цену, за одну еденицу товара"},printErrorImg(r,i){return"required"===r?"Добавьте изображение товара":"isTrue"===r?"Пожалуйста, выберите изображение, соответствующее требованиям к формату":void 0},printErrorDescription(r,i){return"required"===r?"Добавьте описание товара":"minLength"===r?"Минимальная длинна описания товара "+i.min+" символов":void 0}}},q=e(89);const k=(0,q.Z)(E,[["render",f]]);var I=k}}]);
//# sourceMappingURL=454.f4a4d1c5.js.map
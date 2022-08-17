"use strict";(self["webpackChunkcrm_shop"]=self["webpackChunkcrm_shop"]||[]).push([[352],{2352:function(i,r,t){t.r(r),t.d(r,{default:function(){return N}});var e=t(3396),n=t(7139);const o=(0,e._)("h2",{class:"product-heading"},"Ваши товары",-1),s={class:"product-list"};function d(i,r,t,d,l,c){const a=(0,e.up)("ListProduct");return(0,e.wg)(),(0,e.iD)("div",{class:(0,n.C_)(["product",{full:!i.isOpen}])},[o,(0,e._)("ul",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(i.prodArr,(i=>((0,e.wg)(),(0,e.j4)(a,{key:i.id,prod:i,id:i.id},null,8,["prod","id"])))),128))])],2)}var l=t(9242);const c={class:"list-product"},a={class:"list-product__app"},p=["src"],u={class:"list-product__name"},m={class:"list-product__price"},g={class:"list-product__count"},h={class:"list-product__discription"};function _(i,r,t,o,s,d){const _=(0,e.up)("EdditProduct");return(0,e.wg)(),(0,e.iD)("li",c,[(0,e.wy)((0,e._)("div",a,[(0,e._)("img",{class:"list-product__img",src:t.prod.downloadURL,alt:"image"},null,8,p),(0,e._)("h6",u,(0,n.zw)(t.prod.nameProd),1),(0,e._)("p",m," Цена: "+(0,n.zw)(t.prod.price+" $"),1),(0,e._)("p",g," Количество: "+(0,n.zw)(t.prod.count+" шт"),1),(0,e._)("p",h,(0,n.zw)(d.cutDescription()),1),(0,e._)("button",{class:"list-product__btn eddit-btn",onClick:r[0]||(r[0]=r=>i.changeConfirmEddit(t.id))}," Изменить "),(0,e._)("button",{class:"list-product__btn delete",onClick:r[1]||(r[1]=r=>i.deleteProd(t.id))}," Удалить ")],512),[[l.F8,!t.prod.confirmEddit]]),(0,e.wy)((0,e.Wm)(_,{prod:t.prod,id:t.id},null,8,["prod","id"]),[[l.F8,t.prod.confirmEddit]])])}var v=t(65);const $=(0,e._)("label",{for:"img",class:"eddit-label"}," Изменить изображение товара ",-1),f={class:"invalid-list"},w=(0,e._)("label",{for:"nameProd",class:"eddit-label"}," Название товара: ",-1),P={class:"invalid-list"},b=(0,e._)("label",{for:"price",class:"eddit-label"}," Укажите цену на товар: ",-1),y={class:"invalid-list"},C=(0,e._)("label",{for:"count",class:"eddit-label"}," Количество товара: ",-1),E={class:"invalid-list"},D=(0,e._)("label",{for:"description",class:"eddit-label"}," Описание товара: ",-1),k={class:"invalid-list"},z=(0,e._)("button",{class:"eddit-button save",type:"submit"}," Сохранить ",-1);function q(i,r,t,o,s,d){return(0,e.wg)(),(0,e.iD)("form",{class:"eddit",onSubmit:r[6]||(r[6]=(0,l.iM)(((...i)=>d.submitChange&&d.submitChange(...i)),["prevent"]))},[$,(0,e._)("ul",f,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.v$.img.$errors,((i,r)=>((0,e.wg)(),(0,e.iD)("li",{class:"invalid-list__errors",key:r},(0,n.zw)(d.printErrorImg(i.$validator,i.$params)),1)))),128))]),(0,e._)("input",{class:(0,n.C_)(["eddit-input",{invalid:o.v$.img.$error}]),type:"file",ref:"fileImg",id:"img",onChange:r[0]||(r[0]=(...i)=>d.changeImg&&d.changeImg(...i))},null,34),w,(0,e._)("ul",P,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.v$.nameProd.$errors,((i,r)=>((0,e.wg)(),(0,e.iD)("li",{class:"invalid-list__errors",key:r},(0,n.zw)(d.printErrorNameProd(i.$validator,i.$params)),1)))),128))]),(0,e.wy)((0,e._)("input",{class:(0,n.C_)(["eddit-input",{invalid:o.v$.nameProd.$error}]),type:"text","onUpdate:modelValue":r[1]||(r[1]=i=>s.nameProd=i),id:"nameProd"},null,2),[[l.nr,s.nameProd]]),b,(0,e._)("ul",y,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.v$.price.$errors,((i,r)=>((0,e.wg)(),(0,e.iD)("li",{class:"invalid-list__errors",key:r},(0,n.zw)(d.printErrorPrice(i.$validator,i.$params)),1)))),128))]),(0,e.wy)((0,e._)("input",{type:"number",class:(0,n.C_)(["eddit-input",{invalid:o.v$.price.$error}]),"onUpdate:modelValue":r[2]||(r[2]=i=>s.price=i),id:"price"},null,2),[[l.nr,s.price]]),C,(0,e._)("ul",E,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.v$.count.$errors,((i,r)=>((0,e.wg)(),(0,e.iD)("li",{class:"invalid-list__errors",key:r},(0,n.zw)(d.printErrorCount(i.$validator,i.$params)),1)))),128))]),(0,e.wy)((0,e._)("input",{class:(0,n.C_)(["eddit-input",{invalid:o.v$.count.$error}]),type:"number","onUpdate:modelValue":r[3]||(r[3]=i=>s.count=i),id:"count"},null,2),[[l.nr,s.count]]),D,(0,e._)("ul",k,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.v$.description.$errors,((i,r)=>((0,e.wg)(),(0,e.iD)("li",{class:"invalid-list__errors",key:r},(0,n.zw)(d.printErrorDescription(i.$validator,i.$params)),1)))),128))]),(0,e.wy)((0,e._)("textarea",{class:(0,n.C_)(["eddit-input",{invalid:o.v$.description.$error}]),"onUpdate:modelValue":r[4]||(r[4]=i=>s.description=i),name:"description",id:"description",cols:"30",rows:"10"},"\r\n    ",2),[[l.nr,s.description]]),z,(0,e._)("button",{type:"button",class:"eddit-button cancel",onClick:r[5]||(r[5]=r=>i.cancelEddit(t.id))}," Отмена ")],32)}t(6699);var I=t(3053),L=t(9117),H={name:"EdditProduct",props:["prod","id"],setup(){return{v$:(0,I.ZP)()}},data(){return{description:this.prod.description,count:this.prod.count,price:this.prod.price,nameProd:this.prod.nameProd,img:this.prod.downloadURL,fileType:["image/jpeg","image/pjpeg","image/png","image/jpg"]}},validations(){return{nameProd:{required:L.C1,minLength:(0,L.Ei)(5)},count:{required:L.C1,integer:i=>Number.isInteger(i)},price:{required:L.C1},img:{isTrue:i=>this.fileType.includes(i.type)||"string"===typeof i},description:{required:L.C1,minLength:(0,L.Ei)(20)}}},methods:{...(0,v.nv)(["saveChange","cancelEddit"]),async submitChange(){if(this.v$.$touch(),this.v$.$error)return;const i={id:this.id,typeProduct:this.prod.typeProduct,nameProd:this.nameProd,count:this.count,price:this.price,img:this.img,description:this.description,confirmEddit:this.prod.confirmEddit,confirmDelete:!1,confirmCart:!1};console.log(i);try{console.log("try"),await this.saveChange(i),this.clearProd(),this.v$.$reset(),this.$message("Товар успешно изменен")}catch(r){}},clearProd(){this.nameProd="",this.count=null,this.price=null,this.img="",this.description=""},changeImg(){const i=this.$refs.fileImg.files[0];this.img=i},printErrorNameProd(i,r){return"required"===i?"Укажите название товара":"minLength"===i?"Минимальная длинна названия товара "+r.min+" символов":void 0},printErrorCount(i,r){return"required"===i?"Укажите количество товара, которое есть в наличие":"integer"===i?"Количество товара должно быть целым числом":void 0},printErrorPrice(i,r){if("required"===i)return"Укажите цену, за одну еденицу товара"},printErrorImg(i,r){if("isTrue"===i)return"Пожалуйста, выберите изображение, соответствующее требованиям к формату"},printErrorDescription(i,r){return"required"===i?"Добавьте описание товара":"minLength"===i?"Минимальная длинна описания товара "+r.min+" символов":void 0}}},K=t(89);const U=(0,K.Z)(H,[["render",q]]);var Y=U,j={components:{EdditProduct:Y},props:["prod","id"],methods:{...(0,v.nv)(["changeConfirmEddit","deleteProd"]),cutDescription(){const i=this.prod.description.split("");return i.length<150?this.prod.description:(i.splice(150,i.length-150,".",".","."),i.join(""))}}};const A=(0,K.Z)(j,[["render",_]]);var T=A,V={name:"MyProduct",components:{ListProduct:T},async mounted(){await this.fetchProd()},unmounted(){this.clearArr()},computed:{...(0,v.Se)(["isOpen","prodArr"])},methods:{...(0,v.nv)(["fetchProd","clearArr"])}};const Z=(0,K.Z)(V,[["render",d]]);var N=Z}}]);
//# sourceMappingURL=352.4ac8e7e3.js.map
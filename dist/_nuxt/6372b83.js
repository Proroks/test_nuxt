(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(t,e,r){"use strict";r.r(e);var o={name:"Card",props:{title:{type:String,default:""},type:{type:String,default:""}}},n=(r(311),r(3)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:"card card_type_"+this.type},[this.$slots.favorite?e("div",{staticClass:"card__favorites"},[this._t("favorite")],2):this._e(),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";r.r(e);var o={name:"UiChips",props:{type:{type:String,default:"primary"}},render:function(t){var e=this.type,r=this.$listeners;return t("span",{class:"ui-chips ui-chips_".concat(e),on:r},this.$slots.default)}},n=(r(305),r(3)),component=Object(n.a)(o,void 0,void 0,!1,null,null,null);e.default=component.exports},284:function(t,e,r){var content=r(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("1d1084b7",content,!0,{sourceMap:!1})},285:function(t,e,r){var content=r(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("3592a604",content,!0,{sourceMap:!1})},286:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("08cdcb81",content,!0,{sourceMap:!1})},287:function(t,e,r){var content=r(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("2bbaaefc",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r.r(e);r(32),r(16),r(13),r(8),r(24);var o=r(12),n=r(307);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c=r(147).createPopper,d={name:"Tooltip",components:{Fragment:n.a},props:{options:{type:Object,default:function(){return{}}}},data:function(){return{tooltip:null}},computed:{listeners:function(){var t=this,e={mouseenter:function(e){t.show(e.target)},mouseleave:function(e){t.hide()}};return e}},methods:{create:function(element){this.tooltip=c(element,this.$refs.tooltip,function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({modifiers:[{name:"offset",options:{offset:[0,8]}}]},this.options))},destroy:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)},show:function(element){this.$refs.tooltip.setAttribute("data-show",""),this.create(element)},hide:function(){this.$refs.tooltip.removeAttribute("data-show"),this.destroy()}}},h=(r(308),r(3)),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",{attrs:{name:"tooltip"}},[this._t("activator",null,null,{listeners:this.listeners}),this._v(" "),e("div",{ref:"tooltip",staticClass:"tooltip"},[this._t("default")],2)],2)}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,r){var content=r(522);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("09b43d5b",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";var o=r(284);r.n(o).a},304:function(t,e,r){(e=r(6)(!1)).push([t.i,".chips-group{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;height:48px;overflow:hidden}.chips-group>:not(.tooltip){margin:0 4px 4px 0}.chips-group__indicator{margin-right:0!important}",""]),t.exports=e},305:function(t,e,r){"use strict";var o=r(285);r.n(o).a},306:function(t,e,r){(e=r(6)(!1)).push([t.i,".ui-chips{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;height:auto;padding:3px 8px;font-size:12px;line-height:normal;border:1px solid transparent;border-radius:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ui-chips_primary{color:#657198;font-weight:500;border-color:var(--control-color);background-color:var(--control-color)}.ui-chips_danger{color:var(--white-color);border-color:var(--danger-color);background-color:var(--danger-color)}.ui-chips_outline-primary{color:var(--primary-color);font-weight:600;border-color:var(--primary-color);background-color:transparent}",""]),t.exports=e},308:function(t,e,r){"use strict";var o=r(286);r.n(o).a},309:function(t,e,r){(e=r(6)(!1)).push([t.i,".tooltip{z-index:99;display:none;max-width:300px;padding:20px;color:var(--primary-color);font-size:12px;line-height:1.4;background-color:var(--white-color);border:1px solid #f2f3f6;border-radius:10px;box-shadow:0 9px 30px rgba(35,52,107,.1)}.tooltip[data-show]{display:block}.tooltip ul{margin:0;list-style:inside}.tooltip ul li{font-size:15px}",""]),t.exports=e},310:function(t,e,r){var content=r(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("572f119b",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";var o=r(287);r.n(o).a},312:function(t,e,r){(e=r(6)(!1)).push([t.i,".card{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;min-height:256px;padding:3rem 2.5rem;background:#f4f5f7;border:1px solid rgba(221,224,233,.5);border-radius:10px;-webkit-transition:.25s;-o-transition:.25s;-moz-transition:.25s;transition:.25s}.card_type_author{min-height:0;padding-top:2rem;padding-bottom:2rem;background-color:var(--white-color)}.card__favorites{position:absolute;top:-2px;right:27px}.card>.ui-title{margin-bottom:.7rem}.card>.card-header{margin-bottom:25px}.card>.card-footer{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-top:auto}.card .ui-label{margin-bottom:6px}",""]),t.exports=e},373:function(t,e,r){"use strict";r.r(e);var o=r(289),n={name:"ChipsGroup",props:{chipsList:{type:Array,required:!0}},data:function(){return{chipsGroup:Object(o.a)(this.chipsList),countOutsideElement:null,outsideElement:[]}},mounted:function(){this.calculateOutsideElement(),this.listInsideElement(),this.listOutsideElement(),this.reverseElement()},methods:{calculateOutsideElement:function(){var t=this.$refs.group;this.countOutsideElement=Object(o.a)(this.$refs.elements).reduce((function(e,element){return e+(t.getBoundingClientRect().bottom<element.$el.getBoundingClientRect().top?1:0)}),0)},reverseElement:function(){var element=this.$refs.tooltip.$el;this.$refs.tooltip.$el.remove(),this.$refs.group.appendChild(element)},listInsideElement:function(){this.chipsGroup=this.chipsGroup.slice(0,this.chipsGroup.length-this.countOutsideElement)},listOutsideElement:function(){this.outsideElement=this.chipsList.slice(this.chipsList.length-this.countOutsideElement,this.chipsList.length)}}},l=(r(303),r(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"group",staticClass:"chips-group"},[r("tooltip",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.listeners;return[r("ui-chips",t._g({ref:"tooltip",staticClass:"chips-group__indicator"},o),[t._v("\n        +"+t._s(t.countOutsideElement||1)+"\n      ")])]}}])},[t._v(" "),r("ul",t._l(t.outsideElement,(function(element){return r("li",{key:element},[t._v("\n        "+t._s(element)+"\n      ")])})),0)]),t._v(" "),t._l(t.chipsGroup,(function(e,o){return r("ui-chips",{key:o,ref:"elements",refInFor:!0},[t._v("\n    "+t._s(e)+"\n  ")])}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiChips:r(283).default,Tooltip:r(291).default})},521:function(t,e,r){"use strict";var o=r(302);r.n(o).a},522:function(t,e,r){(e=r(6)(!1)).push([t.i,".card{max-width:320px}",""]),t.exports=e},525:function(t,e,r){var map={"./af":377,"./af.js":377,"./ar":378,"./ar-dz":379,"./ar-dz.js":379,"./ar-kw":380,"./ar-kw.js":380,"./ar-ly":381,"./ar-ly.js":381,"./ar-ma":382,"./ar-ma.js":382,"./ar-sa":383,"./ar-sa.js":383,"./ar-tn":384,"./ar-tn.js":384,"./ar.js":378,"./az":385,"./az.js":385,"./be":386,"./be.js":386,"./bg":387,"./bg.js":387,"./bm":388,"./bm.js":388,"./bn":389,"./bn-bd":390,"./bn-bd.js":390,"./bn.js":389,"./bo":391,"./bo.js":391,"./br":392,"./br.js":392,"./bs":393,"./bs.js":393,"./ca":394,"./ca.js":394,"./cs":395,"./cs.js":395,"./cv":396,"./cv.js":396,"./cy":397,"./cy.js":397,"./da":398,"./da.js":398,"./de":399,"./de-at":400,"./de-at.js":400,"./de-ch":401,"./de-ch.js":401,"./de.js":399,"./dv":402,"./dv.js":402,"./el":403,"./el.js":403,"./en-au":404,"./en-au.js":404,"./en-ca":405,"./en-ca.js":405,"./en-gb":406,"./en-gb.js":406,"./en-ie":407,"./en-ie.js":407,"./en-il":408,"./en-il.js":408,"./en-in":409,"./en-in.js":409,"./en-nz":410,"./en-nz.js":410,"./en-sg":411,"./en-sg.js":411,"./eo":412,"./eo.js":412,"./es":413,"./es-do":414,"./es-do.js":414,"./es-mx":415,"./es-mx.js":415,"./es-us":416,"./es-us.js":416,"./es.js":413,"./et":417,"./et.js":417,"./eu":418,"./eu.js":418,"./fa":419,"./fa.js":419,"./fi":420,"./fi.js":420,"./fil":421,"./fil.js":421,"./fo":422,"./fo.js":422,"./fr":423,"./fr-ca":424,"./fr-ca.js":424,"./fr-ch":425,"./fr-ch.js":425,"./fr.js":423,"./fy":426,"./fy.js":426,"./ga":427,"./ga.js":427,"./gd":428,"./gd.js":428,"./gl":429,"./gl.js":429,"./gom-deva":430,"./gom-deva.js":430,"./gom-latn":431,"./gom-latn.js":431,"./gu":432,"./gu.js":432,"./he":433,"./he.js":433,"./hi":434,"./hi.js":434,"./hr":435,"./hr.js":435,"./hu":436,"./hu.js":436,"./hy-am":437,"./hy-am.js":437,"./id":438,"./id.js":438,"./is":439,"./is.js":439,"./it":440,"./it-ch":441,"./it-ch.js":441,"./it.js":440,"./ja":442,"./ja.js":442,"./jv":443,"./jv.js":443,"./ka":444,"./ka.js":444,"./kk":445,"./kk.js":445,"./km":446,"./km.js":446,"./kn":447,"./kn.js":447,"./ko":448,"./ko.js":448,"./ku":449,"./ku.js":449,"./ky":450,"./ky.js":450,"./lb":451,"./lb.js":451,"./lo":452,"./lo.js":452,"./lt":453,"./lt.js":453,"./lv":454,"./lv.js":454,"./me":455,"./me.js":455,"./mi":456,"./mi.js":456,"./mk":457,"./mk.js":457,"./ml":458,"./ml.js":458,"./mn":459,"./mn.js":459,"./mr":460,"./mr.js":460,"./ms":461,"./ms-my":462,"./ms-my.js":462,"./ms.js":461,"./mt":463,"./mt.js":463,"./my":464,"./my.js":464,"./nb":465,"./nb.js":465,"./ne":466,"./ne.js":466,"./nl":467,"./nl-be":468,"./nl-be.js":468,"./nl.js":467,"./nn":469,"./nn.js":469,"./oc-lnc":470,"./oc-lnc.js":470,"./pa-in":471,"./pa-in.js":471,"./pl":472,"./pl.js":472,"./pt":473,"./pt-br":474,"./pt-br.js":474,"./pt.js":473,"./ro":475,"./ro.js":475,"./ru":476,"./ru.js":476,"./sd":477,"./sd.js":477,"./se":478,"./se.js":478,"./si":479,"./si.js":479,"./sk":480,"./sk.js":480,"./sl":481,"./sl.js":481,"./sq":482,"./sq.js":482,"./sr":483,"./sr-cyrl":484,"./sr-cyrl.js":484,"./sr.js":483,"./ss":485,"./ss.js":485,"./sv":486,"./sv.js":486,"./sw":487,"./sw.js":487,"./ta":488,"./ta.js":488,"./te":489,"./te.js":489,"./tet":490,"./tet.js":490,"./tg":491,"./tg.js":491,"./th":492,"./th.js":492,"./tk":493,"./tk.js":493,"./tl-ph":494,"./tl-ph.js":494,"./tlh":495,"./tlh.js":495,"./tr":496,"./tr.js":496,"./tzl":497,"./tzl.js":497,"./tzm":498,"./tzm-latn":499,"./tzm-latn.js":499,"./tzm.js":498,"./ug-cn":500,"./ug-cn.js":500,"./uk":501,"./uk.js":501,"./ur":502,"./ur.js":502,"./uz":503,"./uz-latn":504,"./uz-latn.js":504,"./uz.js":503,"./vi":505,"./vi.js":505,"./x-pseudo":506,"./x-pseudo.js":506,"./yo":507,"./yo.js":507,"./zh-cn":508,"./zh-cn.js":508,"./zh-hk":509,"./zh-hk.js":509,"./zh-mo":510,"./zh-mo.js":510,"./zh-tw":511,"./zh-tw.js":511};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=525},526:function(t,e,r){"use strict";var o=r(310);r.n(o).a},527:function(t,e,r){(e=r(6)(!1)).push([t.i,'.chart{position:relative;font-size:15px}.chart__doughnut:hover{-webkit-filter:drop-shadow(2px 0 11px rgba(35,52,107,.2));filter:drop-shadow(2px 0 11px rgba(35,52,107,.2))}.chart-total{position:absolute;top:90px;left:50%;text-align:center;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.chart-total__count{color:var(--primary-color);font-weight:500;font-size:32px}.chart-total__text{color:#9199b5;line-height:15px}.chart-label{padding-top:20px}.chart-label__item{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding-left:36px;color:#9199b5;cursor:pointer}.chart-label__item>span{color:var(--primary-color);font-weight:500}.chart-label__item:after{position:absolute;top:0;left:0;width:20px;height:20px;content:""}.chart-label__item:hover{color:var(--primary-color)}.chart-label__item:hover:after{box-shadow:2px 0 11px rgba(35,52,107,.2)}.chart-label__item:first-of-type:after{background-color:#87c8a7}.chart-label__item:nth-of-type(2):after{background-color:#bf76ab}.chart-label__item:nth-of-type(3):after{background-color:#f69370}',""]),t.exports=e},696:function(t,e,r){"use strict";r.r(e);var o=r(289),n=(r(102),r(523)),l={name:"Chart",props:{statement:{type:[String,Number],required:!0},contest:{type:[String,Number],required:!0},completed:{type:[String,Number],required:!0},options:{type:Object,default:function(){}}},data:function(){return{isMounted:!1}},computed:{totalCount:function(){return this.isMounted&&this.chart.data.datasets[0].data.reduce((function(t,e){return t+Number(e)}),0)},labels:function(){var data=(this.isMounted&&this.chart.data.datasets[0]).data;return this.isMounted&&this.chart.data.labels.reduce((function(t,element,e){var r={name:element,count:data[e]};return[].concat(Object(o.a)(t),[r])}),[])}},mounted:function(){this.chart=new n.Doughnut(this.$refs.chart,{type:"Boughnut",data:{labels:["Подача заявления","Проходит конкурс","Завершен"],datasets:[{data:[this.statement,this.contest,this.completed],backgroundColor:["#87C8A7","#BF76AB","#F69370"],borderWidth:0}]},options:{cutoutPercentage:70,hover:{onHover:function(t,e){var r=this.getElementAtEvent(t);t.target.style.cursor=r.length?"pointer":"default"}},legend:{display:!1},tooltips:{enabled:!1},plotOptions:{series:{point:{events:{mouseOver:function(){console.log("test")}}}}}}}),this.isMounted=!0},beforeDestroy:function(){this.chart.destroy()},methods:{hoverInChart:function(t){var meta=this.chart.getDatasetMeta(0),rect=this.chart.canvas.getBoundingClientRect(),e=meta.data[t].getCenterPoint(),r=new MouseEvent("mousemove",{clientX:rect.left+e.x,clientY:rect.top+e.y});this.chart.canvas.dispatchEvent(r)},removeHover:function(){var t=new MouseEvent("mousemove",{clientX:0,clientY:0});this.chart.canvas.dispatchEvent(t)}}},c=(r(526),r(3)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chart"},[r("canvas",{ref:"chart",staticClass:"chart__doughnut",attrs:{width:"100%",height:"100px"}}),t._v(" "),r("div",{staticClass:"chart-label"},t._l(t.labels,(function(label,e){return r("div",{key:e,ref:"label",refInFor:!0,staticClass:"chart-label__item",on:{mouseover:function(r){return t.hoverInChart(e)},mouseleave:function(e){return t.removeHover()}}},[t._v("\n      "+t._s(label.name)+" "),r("span",[t._v(t._s(label.count))])])})),0),t._v(" "),t.totalCount?r("div",{staticClass:"chart-total"},[r("div",{staticClass:"chart-total__count"},[t._v("\n      "+t._s(t.totalCount)+"\n    ")]),t._v(" "),r("div",{staticClass:"chart-total__text"},[t._v("\n      Проекты на конкурсе\n    ")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},718:function(t,e,r){"use strict";r.r(e);var o={name:"Test",data:function(){return{chips:["label 1","labelafaf","asfsfsf","sfsdfsfsf","sdgdgdgd","sfsafsfsf","dsgdgdgserwer"]}},methods:{redirected:function(){this.$router.push({name:"UserDashboard"})}}},n=(r(521),r(3)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("chips-group",{attrs:{"chips-list":this.chips}}),this._v(" "),e("card",[e("chart-status",{attrs:{statement:"1203",contest:"1600",completed:"2394"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChipsGroup:r(373).default,ChartStatus:r(696).default,Card:r(278).default})}}]);
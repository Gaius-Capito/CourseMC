(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/yhy":function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var l=e("ofez"),i=e("Rs+Y"),a=e("BSTZ"),u=e("NRRq"),o=e("O2EY"),r=e("YtkY");class s extends i.a{constructor(t,n,e,i,u){super(t,n,e,i,u),this.store=t,this.router=n,this.route=e,this.changeDetectorRef=i,this.translate=u,this.waitIcon=a.I,this.showHeader$=this.store.pipe(Object(l.B)(o.A),Object(r.a)(t=>!t||!!t&&t.showHeader)),this.showPayDetail$=this.store.pipe(Object(l.B)(o.J),Object(r.a)(t=>!t||!!t&&t.showPayDetail))}ngAfterViewInit(){this.store.dispatch(new u.U)}}},"02tf":function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var l=e("Ohay"),i=e("YtkY"),a=e("V7Gs");class u{constructor(t){this.store=t}updateFee(t){return t.valueChanges.pipe(Object(l.a)(),Object(i.a)(n=>"VALID"===t.status?n:"")).subscribe(t=>{this.store.dispatch(t?new a.c(t):new a.a)})}}},"0bCq":function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=[".header[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:30px;font-family:var(--tui-heading-font);line-height:36px;letter-spacing:-.3px}.header_container[_ngcontent-%COMP%]{margin-bottom:32px}@media screen and (max-width:599px){.header_container[_ngcontent-%COMP%]{margin-bottom:24px}.header[_ngcontent-%COMP%]{font-weight:700;font-size:24px;font-family:var(--tui-heading-font);line-height:28px;letter-spacing:-.3px}}.description[_ngcontent-%COMP%]{text-align:center;font-weight:400;font-size:17px;font-family:var(--tui-text-font);line-height:24px}.description_container[_ngcontent-%COMP%]{margin-bottom:32px}.clear_border[_ngcontent-%COMP%]{border-top:0}.icon_64[_ngcontent-%COMP%]{width:64px;height:64px}@media screen and (max-width:599px){.description_container[_ngcontent-%COMP%]{margin-bottom:24px}.full[_ngcontent-%COMP%]{width:100%}}"]},"7Ahb":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var l=e("V7Gs");const i={loading:!1,amount:0,amountIncluding:0};function a(t=i,n){switch(n.type){case l.b.LoadFee:return Object.assign({},t,{loading:!0});case l.b.SetFeeLoading:return Object.assign({},t,{loading:n.loading});case l.b.SetFeeData:return Object.assign({},t,{amount:n.data.amount,amountIncluding:n.data.amountIncluding});case l.b.ClearFee:return Object.assign({},t,{amount:0,amountIncluding:0});default:return t}}},"9nQt":function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e("f6Qn");class l{}},IUKh:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return d}));var l=e("ofez"),i=e("KHll"),a=e("KgUr");const u=Object(l.v)("fee"),o=Object(l.y)(u,t=>t.amount),r=Object(l.y)(u,t=>t.amountIncluding),s=Object(l.y)(u,t=>t.loading),c=Object(l.y)(o,t=>i.b.normalizeMoney(t,a.g)),d=Object(l.y)(r,t=>i.b.normalizeMoney(t,a.g))},JUsf:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=[".header[_ngcontent-%COMP%]{font-weight:700;font-size:30px;font-family:var(--tui-heading-font);line-height:36px;letter-spacing:-.3px;text-align:center}.icon_64[_ngcontent-%COMP%]{width:64px;height:64px}@media screen and (max-width:599px){.header[_ngcontent-%COMP%]{font-weight:700;font-size:24px;font-family:var(--tui-heading-font);line-height:28px;letter-spacing:-.3px;margin-bottom:24px}.full[_ngcontent-%COMP%]{width:100%}}"]},"KqR+":function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=[".t_timer_active_container[_ngcontent-%COMP%]{text-align:center}.t_timer_active_container[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{font-weight:700;font-size:40px;font-family:var(--tui-heading-font);line-height:44px;letter-spacing:-.3px}.t_timer_active_container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-weight:700;font-size:30px;font-family:var(--tui-heading-font);line-height:36px;letter-spacing:-.3px}@media screen and (max-width:599px){.t_timer_active_container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{font-weight:700;font-size:24px;font-family:var(--tui-heading-font);line-height:28px;letter-spacing:-.3px}}.t_timer_active_container[_ngcontent-%COMP%]   .sub_header[_ngcontent-%COMP%]{font-weight:400;font-size:17px;font-family:var(--tui-text-font);line-height:24px;max-width:500px;color:#666}.t_timer[_ngcontent-%COMP%]   .icon_64[_ngcontent-%COMP%]{width:64px;height:64px}@media screen and (max-width:599px){.t_timer_active_container[_ngcontent-%COMP%]   .sub_header[_ngcontent-%COMP%]{font-weight:400;font-size:15px;font-family:var(--tui-text-font);line-height:24px}.t_timer_active_container[_ngcontent-%COMP%]{margin-bottom:24px}.full[_ngcontent-%COMP%]{width:100%}}"]},MY6Y:function(t,n,e){"use strict";var l=e("D57K"),i=e("DyCy"),a=e("V7Gs"),u=e("ofez"),o=e("ZTXN"),r=e("47ST"),s=e("ROBh"),c=e("8j5Y"),d=e("TLy2"),h=e("w0kG"),p=e("YtkY"),f=e("4e/d"),g=e("kuMc"),m=e("ObOS"),b=e("eyvB");class _ extends b.a{constructor(t){super(),this.amount=t,this.type=m.k.SET_CUSTOM_AMOUNT}}var v=e("O2EY"),O=function(t){return t.CardNumber="CardNumber",t.CardId="CardId",t.EncryptedPaymentData="EncryptedPaymentData",t}({});e.d(n,"a",(function(){return x}));let x=(()=>{class t{constructor(t,n,e){this.actions$=t,this.store$=n,this.api=e,this.abort$=new o.a,this.clearFee$=this.actions$.pipe(Object(i.g)(a.b.ClearFee),Object(c.a)(()=>this.abort$.next(!0)),Object(d.a)(()=>[new a.e(!1),new _(null)])),this.getFee$=this.actions$.pipe(Object(i.g)(a.b.LoadFee),Object(h.a)(this.store$.pipe(Object(u.B)(v.U))),Object(c.a)(()=>this.store$.dispatch(new a.e(!0))),Object(p.a)(([t,n])=>({PaymentId:n.PaymentId,SourceCard:O.CardNumber,FeeCardData:{PAN:t.pan}})),Object(d.a)(t=>this.api.getFee(t).pipe(Object(d.a)(t=>{const{Success:n=!0,FeeAmount:e=null,AmountIncludingFee:l=null}=t;return n&&(null!==e&&e||null!==l&&l)?0==+e?[new a.e(!1),new a.d({amount:0,amountIncluding:0})]:[new a.e(!1),new a.d({amount:e,amountIncluding:l}),new _(l)]:Object(r.a)(null)}),Object(f.a)(t=>Object(s.a)(new a.e(!0))),Object(g.a)(this.abort$))))}}return Object(l.__decorate)([Object(i.b)(),Object(l.__metadata)("design:type",Object)],t.prototype,"clearFee$",void 0),Object(l.__decorate)([Object(i.b)(),Object(l.__metadata)("design:type",Object)],t.prototype,"getFee$",void 0),t})()},N3zK:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var l=[".header[_ngcontent-%COMP%]{font-weight:700;font-size:30px;font-family:var(--tui-heading-font);line-height:36px;letter-spacing:-.3px;text-align:center}@media screen and (max-width:599px){.header[_ngcontent-%COMP%]{font-weight:700;font-size:24px;font-family:var(--tui-heading-font);line-height:28px;letter-spacing:-.3px}}.sub-text[_ngcontent-%COMP%]{font-weight:400;font-size:15px;font-family:var(--tui-text-font);line-height:24px;text-align:center;color:#666;letter-spacing:normal;margin-top:13px}.sub-text_container[_ngcontent-%COMP%]{margin-bottom:31px}@media screen and (max-width:599px){.sub-text_container[_ngcontent-%COMP%]{margin-bottom:23px}.sub-text[_ngcontent-%COMP%]{letter-spacing:initial}.full[_ngcontent-%COMP%]{width:100%}}.icon_64[_ngcontent-%COMP%]{width:64px;height:64px}"]},Oa9q:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var l=e("uASG");class i extends l.a{constructor(t,n){super(t,n),this.store=t,this.changeDetectorRef=n}}},"Rs+Y":function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var l=e("ofez"),i=e("q8bv"),a=e("NRRq"),u=e("O2EY"),o=e("KHll"),r=e("xVbo"),s=e("w0kG"),c=e("YtkY"),d=e("jIqt"),h=e("0hNq"),p=e("KgUr");class f extends i.a{constructor(t,n,e,i,a){super(),this.store=t,this.router=n,this.route=e,this.changeDetectorRef=i,this.translate=a,this.currentLanguage=this.translate.currentLang,this.backToShop="",this.isFrame=Object(o.d)(),this.hasInfo=!1,this.isPayType=!0,this.isWidget=!1,this.buttonBackShopMessage$=this.store.pipe(Object(l.B)(u.U),Object(r.a)(t=>this.isFrame||null!==t&&t.hasOwnProperty("BackUrl")),Object(s.a)(this.store.pipe(Object(l.B)(u.S))),Object(c.a)(([t,n])=>"defaulPages.buttonBackShop."+(this.isFrame?"exit":n&&h.a.indexOf(n)>-1?n+".back":"back"))),this.primaryButtonMode=this.getPrimaryButtonMode$(),this._isInsurance=this.store.pipe(Object(l.B)(u.Y)),this.logo$=this.translate.onLangChange.pipe(Object(d.a)({lang:this.currentLanguage}),Object(c.a)(t=>"ru"===t.lang?p.s:p.t))}ngOnInit(){this._autoUnsubscribeList.push(this.store.pipe(Object(l.B)(u.U)).subscribe(t=>{this.isPayType=t&&t.Type&&"pay"===t.Type,this.hasInfo=!!t,this.changeDetectorRef.markForCheck()})),this.isFrame||this._autoUnsubscribeList.push(this.store.pipe(Object(l.B)(u.Q)).subscribe(t=>{this.backToShop=t,this.changeDetectorRef.markForCheck()})),this._autoUnsubscribeList.push(this.store.pipe(Object(l.B)(u.g)).subscribe(t=>{(("Widget2.0"===t||"Widget1.0"===t)&&this.isFrame||!t&&!this.isFrame)&&(this.isWidget=!0)}))}onExit(){this.store.dispatch(new a.L(this.backToShop))}isBackShopUrl(){return!!this.backToShop}}},V7Gs:function(t,n,e){"use strict";e.d(n,"b",(function(){return l})),e.d(n,"c",(function(){return i})),e.d(n,"e",(function(){return a})),e.d(n,"d",(function(){return u})),e.d(n,"a",(function(){return o}));var l=function(t){return t.LoadFee="[Fee] Load",t.SetFeeLoading="[Fee] Set loading",t.SetFeeData="[Fee] Set data",t.ClearFee="[Fee] clear",t}({});class i{constructor(t){this.pan=t,this.type=l.LoadFee}}class a{constructor(t){this.loading=t,this.type=l.SetFeeLoading}}class u{constructor(t){this.data=t,this.type=l.SetFeeData}}class o{constructor(){this.type=l.ClearFee}}},Y5v5:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var l=e("q8bv"),i=e("UhJX"),a=e("BSTZ"),u=e("ofez"),o=e("HRq2"),r=e("NRRq"),s=e("O2EY"),c=e("YtkY"),d=e("jIqt"),h=e("KgUr");class p extends l.a{constructor(t,n,e){super(),this.store=t,this.changeDetectorRef=n,this.translate=e,this.eventDate=Date.now()+i.c*i.b+1e3,this.currentLanguage=this.translate.currentLang,this.timerIcon=a.n,this.diff=Math.floor((this.eventDate-1e3)/1e3-Date.now()/1e3),this.isTimerEnd=!1,this._isInsurance=this.store.pipe(Object(u.B)(s.Y)),this.isPayType$=this.store.pipe(Object(u.B)(s.U),Object(c.a)(t=>!!t&&t.hasOwnProperty("Type")&&"pay"===t.Type)),this.primaryButtonMode=this.getPrimaryButtonMode$(),this.logo$=this.translate.onLangChange.pipe(Object(d.a)({lang:this.currentLanguage}),Object(c.a)(t=>"ru"===t.lang?h.s:h.t)),this.showHeader$=this.store.pipe(Object(u.B)(s.A),Object(c.a)(t=>!t||!!t&&t.showHeader)),this.showPayDetail$=this.store.pipe(Object(u.B)(s.J),Object(c.a)(t=>!t||!!t&&t.showPayDetail))}ngOnInit(){this.__intervalObs=Object(o.interval)(1e3).pipe().subscribe(t=>{this.diff-=1,this.diff<=0&&(this.__intervalObs.unsubscribe(),this.store.dispatch(new r.H),this.isTimerEnd=!this.isTimerEnd),this.changeDetectorRef.markForCheck()}),this._autoUnsubscribeList.push(this.__intervalObs)}outOfTimer(){this.store.dispatch(new r.T),this.changeDetectorRef.markForCheck()}}},dlmX:function(t,n,e){"use strict";e.d(n,"a",(function(){return R})),e.d(n,"b",(function(){return N}));var l=e("wB2Z"),i=e("kZht"),a=e("An66"),u=e("7wfB"),o=e("F1LL"),r=e("FTac"),s=e("Mu4b"),c=e("XN4o"),d=e("aT/e"),h=e("NDZU"),p=e("ENSU"),f=e("tkgp"),g=e("gHj3"),m=e("CETi"),b=e("r1V6"),_=e("Ako6"),v=e("4mOM"),O=e("chuc"),x=e("1VvW"),w=e("2hA+"),y=e("aDqW"),C=e("J0Ow"),j=e("dILj"),R=(e("Oa9q"),e("ofez"),i["\u0275crt"]({encapsulation:0,styles:[l.a],data:{}}));function D(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function I(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,12,null,null,null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,11,"div",[["class","header_pointer-focus"],["tabindex","0"]],null,[[null,"keypress"]],(function(t,n,e){var l=!0;return"keypress"===n&&(l=!1!==t.component.toggle()&&l),l}),null,null)),(t()(),i["\u0275eld"](2,0,null,null,10,"div",[["class","header_pointer"],["tabindex","-1"]],null,[[null,"click"]],(function(t,n,e){var l=!0;return"click"===n&&(l=!1!==t.component.toggle()&&l),l}),null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,D)),i["\u0275did"](4,540672,null,0,a.t,[i.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(t()(),i["\u0275eld"](5,0,null,null,7,"div",[["class","header_icon-container tui-space_horizontal-1"]],null,null,null,null,null)),i["\u0275prd"](512,null,a.y,a.z,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](7,278528,null,0,a.j,[a.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pod"](8,{_active:0}),(t()(),i["\u0275eld"](9,0,null,null,3,"tui-svg",[["class","icon"]],null,null,null,u.b,u.a)),i["\u0275prd"](512,null,a.A,a.B,[i.ElementRef,i.KeyValueDiffers,i.Renderer2]),i["\u0275did"](11,278528,null,0,a.p,[a.A],{ngStyle:[0,"ngStyle"]},null),i["\u0275did"](12,49152,null,0,o.a,[a.d,r.c,s.f,[2,c.j],d.e,h.j,p.DomSanitizer,i.ElementRef],{src:[0,"src"]},null)],(function(t,n){var e=n.component;t(n,4,0,i["\u0275nov"](n.parent,9));var l=t(n,8,0,e.isShowMoreInfo);t(n,7,0,"header_icon-container tui-space_horizontal-1",l),t(n,11,0,e.visualParams.icon),t(n,12,0,e.icon_arrow_down)}),null)}function k(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"tui-money",[["class","header_money"]],[[2,"_red",null],[2,"_green",null],[2,"_inherit-color",null]],null,null,f.b,f.a)),i["\u0275did"](1,49152,null,0,g.a,[],{value:[0,"value"],decimal:[1,"decimal"]},null)],(function(t,n){t(n,1,0,n.parent.parent.context.tuiLet.payData.Amount,"always")}),(function(t,n){t(n,0,0,i["\u0275nov"](n,1).red,i["\u0275nov"](n,1).green,i["\u0275nov"](n,1).inheritColor)}))}function M(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,9,"div",[["class","tui-row tui-row_adaptive"]],null,null,null,null,null)),i["\u0275prd"](512,null,a.y,a.z,[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](2,278528,null,0,a.j,[a.y],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef]),i["\u0275pod"](4,{disabled:0}),(t()(),i["\u0275eld"](5,0,null,null,4,"div",[["class","tui-col_md-12 tui-col_sm-12 tui-col_s-12 tui-col_xs-12 header_content"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,2,null,I)),i["\u0275did"](7,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef]),(t()(),i["\u0275and"](0,[["amountBlock",2]],null,0,null,k))],(function(t,n){var e=n.component,l=t(n,4,0,i["\u0275unv"](n,2,1,i["\u0275nov"](n,3).transform(e.idDisable$)));t(n,2,0,"tui-row tui-row_adaptive",l),t(n,7,0,i["\u0275unv"](n,7,0,i["\u0275nov"](n,8).transform(e.showDetalization$)),i["\u0275nov"](n,9))}),null)}function P(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function L(t){return i["\u0275vid"](0,[(t()(),i["\u0275and"](16777216,null,null,1,null,P)),i["\u0275did"](1,540672,null,0,a.t,[i.ViewContainerRef],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(t()(),i["\u0275and"](0,null,null,0))],(function(t,n){t(n,1,0,i["\u0275nov"](n.parent.parent.parent,7))}),null)}function T(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,4,"tui-expand",[],[[2,"_keep-in-dom",null],[2,"_expanded",null],[2,"_overflow",null],[2,"_loading",null],[4,"height","px"]],[[null,"transitionend"],[null,"tui-expand-loaded"]],(function(t,n,e){var l=!0;return"transitionend"===n&&(l=!1!==i["\u0275nov"](t,2).onTransitionEnd(e)&&l),"tui-expand-loaded"===n&&(l=!1!==i["\u0275nov"](t,2).onExpandLoaded(e)&&l),l}),m.b,m.a)),i["\u0275did"](2,49152,null,1,b.a,[i.ChangeDetectorRef],{expandedSetter:[0,"expandedSetter"]},null),i["\u0275qud"](335544320,1,{content:0}),(t()(),i["\u0275and"](0,null,0,1,null,L)),i["\u0275did"](5,16384,[[1,4]],0,b.b,[[4,i.TemplateRef],i.ChangeDetectorRef],null,null)],(function(t,n){t(n,2,0,n.component.isShowMoreInfo)}),(function(t,n){t(n,1,0,i["\u0275nov"](n,2).keepInDom,i["\u0275nov"](n,2).expanded,i["\u0275nov"](n,2).overflow,i["\u0275nov"](n,2).loading,i["\u0275nov"](n,2).height)}))}function S(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,3,null,null,null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,2,null,T)),i["\u0275did"](2,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef]),(t()(),i["\u0275and"](0,null,null,0))],(function(t,n){var e=n.component;t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform(e.showAmount$)),i["\u0275nov"](n.parent,7))}),null)}function F(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,6,"a",[["target","_blank"],["tuiLink",""]],[[8,"href",4],[2,"_pseudo",null],[2,"_icon-rotated",null],[2,"_focus-visible",null],[1,"data-tui-host-mode",0],[2,"_active",null]],null,null,_.b,_.a)),i["\u0275prd"](6144,null,c.d,null,[v.a]),i["\u0275prd"](131584,null,h.a,h.a,[]),i["\u0275prd"](512,null,h.c,h.c,[i.ElementRef,i.ChangeDetectorRef,h.a]),i["\u0275did"](4,49152,null,0,v.a,[i.ElementRef,[2,O.a],[2,x.p],h.c],null,null),i["\u0275did"](5,16384,null,0,w.a,[i.ElementRef],null,null),(t()(),i["\u0275ted"](6,0,["",""]))],null,(function(t,n){t(n,0,0,n.parent.parent.parent.context.tuiLet.payData.BackUrl,i["\u0275nov"](n,4).pseudo,i["\u0275nov"](n,4).iconRotated,i["\u0275nov"](n,4).focusVisible,i["\u0275nov"](n,4).hostMode,i["\u0275nov"](n,4).active),t(n,6,0,n.parent.parent.parent.context.tuiLet.payData.MerchantName)}))}function B(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(t()(),i["\u0275ted"](1,null,["",""]))],null,(function(t,n){t(n,1,0,n.parent.parent.parent.context.tuiLet.payData.MerchantName)}))}function U(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,8,"div",[["class","tui-row tui-row_adaptive t-detail-info_wrap"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,2,"div",[["class","tui-col_md-3 tui-col_sm-4 tui-col_s-4 tui-col_xs-6 t-detail-info_label"]],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,[" "," "])),i["\u0275pid"](131072,y.i,[y.j,i.ChangeDetectorRef]),(t()(),i["\u0275eld"](4,0,null,null,4,"div",[["class","tui-col_md-6 tui-col_sm-8 tui-col_s-8 tui-col_xs-6 t-detail-info_content"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,1,null,F)),i["\u0275did"](6,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,B)),i["\u0275did"](8,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(t,n){t(n,6,0,n.parent.parent.context.tuiLet.payData.MerchantName&&n.parent.parent.context.tuiLet.payData.BackUrl),t(n,8,0,n.parent.parent.context.tuiLet.payData.MerchantName&&!n.parent.parent.context.tuiLet.payData.BackUrl)}),(function(t,n){t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform("detail.shop")))}))}function E(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,5,"div",[["class","tui-row tui-row_adaptive t-detail-info_wrap"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,2,"div",[["class","tui-col_md-3 tui-col_sm-4 tui-col_s-4 tui-col_xs-6 t-detail-info_label"]],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,[" "," "])),i["\u0275pid"](131072,y.i,[y.j,i.ChangeDetectorRef]),(t()(),i["\u0275eld"](4,0,null,null,1,"div",[["class","tui-col_md-6 tui-col_sm-8 tui-col_s-8 tui-col_xs-6 t-detail-info_content"]],null,null,null,null,null)),(t()(),i["\u0275ted"](5,null,[" "," "]))],null,(function(t,n){t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform("detail.caption.pay"))),t(n,5,0,n.parent.parent.context.tuiLet.payData.OrderId)}))}function $(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,11,"div",[["class","tui-row tui-row_adaptive t-detail-info_wrap"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,2,"div",[["class","tui-col_md-3 tui-col_sm-4 tui-col_s-4 tui-col_xs-6 t-detail-info_label"]],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,[" "," "])),i["\u0275pid"](131072,y.i,[y.j,i.ChangeDetectorRef]),(t()(),i["\u0275eld"](4,0,null,null,7,"div",[["class","tui-col_md-6 tui-col_sm-8 tui-col_s-8 tui-col_xs-6 t-detail-info_content"]],null,null,null,null,null)),(t()(),i["\u0275eld"](5,0,null,null,6,"a",[["tuiLink",""]],[[8,"href",4],[2,"_pseudo",null],[2,"_icon-rotated",null],[2,"_focus-visible",null],[1,"data-tui-host-mode",0],[2,"_active",null]],null,null,_.b,_.a)),i["\u0275prd"](6144,null,c.d,null,[v.a]),i["\u0275prd"](131584,null,h.a,h.a,[]),i["\u0275prd"](512,null,h.c,h.c,[i.ElementRef,i.ChangeDetectorRef,h.a]),i["\u0275did"](9,49152,null,0,v.a,[i.ElementRef,[2,O.a],[2,x.p],h.c],null,null),(t()(),i["\u0275ted"](10,0,["",""])),i["\u0275ppd"](11,1)],null,(function(t,n){t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform("detail.phone"))),t(n,5,0,"tel:+7"+n.parent.parent.context.tuiLet.payData.PhonesReg,i["\u0275nov"](n,9).pseudo,i["\u0275nov"](n,9).iconRotated,i["\u0275nov"](n,9).focusVisible,i["\u0275nov"](n,9).hostMode,i["\u0275nov"](n,9).active);var e=i["\u0275unv"](n,10,0,t(n,11,0,i["\u0275nov"](n.parent.parent.parent,0),"+7"+n.parent.parent.context.tuiLet.payData.PhonesReg));t(n,10,0,e)}))}function z(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,10,"div",[["class","tui-row tui-row_adaptive t-detail-info_wrap"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,2,"div",[["class","tui-col_md-3 tui-col_sm-4 tui-col_s-4 tui-col_xs-6 t-detail-info_label"]],null,null,null,null,null)),(t()(),i["\u0275ted"](2,null,[" "," "])),i["\u0275pid"](131072,y.i,[y.j,i.ChangeDetectorRef]),(t()(),i["\u0275eld"](4,0,null,null,6,"div",[["class","tui-col_md-6 tui-col_sm-8 tui-col_s-8 tui-col_xs-6 t-detail-info_content"]],null,null,null,null,null)),(t()(),i["\u0275eld"](5,0,null,null,5,"a",[["tuiLink",""]],[[8,"href",4],[2,"_pseudo",null],[2,"_icon-rotated",null],[2,"_focus-visible",null],[1,"data-tui-host-mode",0],[2,"_active",null]],null,null,_.b,_.a)),i["\u0275prd"](6144,null,c.d,null,[v.a]),i["\u0275prd"](131584,null,h.a,h.a,[]),i["\u0275prd"](512,null,h.c,h.c,[i.ElementRef,i.ChangeDetectorRef,h.a]),i["\u0275did"](9,49152,null,0,v.a,[i.ElementRef,[2,O.a],[2,x.p],h.c],null,null),(t()(),i["\u0275ted"](10,0,["",""]))],null,(function(t,n){t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform("detail.email"))),t(n,5,0,"mailto:"+n.parent.parent.context.tuiLet.payData.EmailReg,i["\u0275nov"](n,9).pseudo,i["\u0275nov"](n,9).iconRotated,i["\u0275nov"](n,9).focusVisible,i["\u0275nov"](n,9).hostMode,i["\u0275nov"](n,9).active),t(n,10,0,n.parent.parent.context.tuiLet.payData.EmailReg)}))}function Y(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,4,"div",[["class","tui-row tui-row_adaptive t-detail-info_wrap"]],null,null,null,null,null)),(t()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","tui-col_md-3 tui-col_sm-4 tui-col_s-4 tui-col_xs-6 t-detail-info_label"]],[[8,"innerHTML",1]],null,null,null,null)),i["\u0275pid"](131072,y.i,[y.j,i.ChangeDetectorRef]),(t()(),i["\u0275eld"](3,0,null,null,1,"div",[["class","tui-col_md-6 tui-col_sm-8 tui-col_s-8 tui-col_xs-6 t-detail-info_content"]],null,null,null,null,null)),(t()(),i["\u0275ted"](4,null,[" "," "]))],null,(function(t,n){t(n,1,0,i["\u0275unv"](n,1,0,i["\u0275nov"](n,2).transform("detail.description"))),t(n,4,0,n.parent.parent.context.tuiLet.payData.Description)}))}function V(t){return i["\u0275vid"](0,[(t()(),i["\u0275and"](16777216,null,null,1,null,U)),i["\u0275did"](1,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,E)),i["\u0275did"](3,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,$)),i["\u0275did"](5,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,z)),i["\u0275did"](7,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](16777216,null,null,1,null,Y)),i["\u0275did"](9,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),i["\u0275and"](0,null,null,0))],(function(t,n){t(n,1,0,n.parent.context.tuiLet.payData.MerchantName),t(n,3,0,n.parent.context.tuiLet.payData.OrderId),t(n,5,0,n.parent.context.tuiLet.payData.PhonesReg),t(n,7,0,n.parent.context.tuiLet.payData.EmailReg),t(n,9,0,n.parent.context.tuiLet.payData.Description)}),null)}function A(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,0,null,null,7,"div",[["class","tui-container tui-container_adaptive"]],null,null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,2,null,M)),i["\u0275did"](2,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef]),(t()(),i["\u0275and"](16777216,null,null,2,null,S)),i["\u0275did"](5,16384,null,0,a.m,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef]),(t()(),i["\u0275and"](0,[["detalizationTemplate",2]],null,0,null,V))],(function(t,n){var e=n.component;t(n,2,0,i["\u0275unv"](n,2,0,i["\u0275nov"](n,3).transform(e.showAmount$))),t(n,5,0,i["\u0275unv"](n,5,0,i["\u0275nov"](n,6).transform(e.showDetalization$)))}),null)}function N(t){return i["\u0275vid"](2,[i["\u0275pid"](0,C.a,[]),(t()(),i["\u0275eld"](1,0,null,null,3,"div",[["class","t-detail-info"]],[[2,"opened",null]],null,null,null,null)),(t()(),i["\u0275and"](16777216,null,null,2,null,A)),i["\u0275did"](3,16384,null,0,j.a,[i.ViewContainerRef,i.TemplateRef],{tuiLet:[0,"tuiLet"]},null),i["\u0275pid"](131072,a.b,[i.ChangeDetectorRef])],(function(t,n){var e=n.component;t(n,3,0,i["\u0275unv"](n,3,0,i["\u0275nov"](n,4).transform(e.transactionInfo$)))}),(function(t,n){t(n,1,0,n.component.isShowMoreInfo)}))}},mttd:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var l=e("HLAC"),i=(e("v+f+"),e("TLy2")),a=e("YtkY"),u=e("ofez"),o=e("O2EY");class r extends l.a{constructor(t,n){super(),this.http=t,this.store=n,this.baseUrl="/v2/GetFee"}getFee(t){return this.store.pipe(Object(u.B)(o.S),Object(i.a)(()=>this.http.post(this.baseUrl,t,null,{}).pipe(Object(a.a)(t=>t.data))))}}},pztL:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));class l{}},wY8a:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var l=e("ofez"),i=e("KgUr"),a=e("Rs+Y"),u=e("O2EY"),o=e("YtkY"),r=e("HM3f"),s=e("NRRq");class c extends a.a{constructor(t,n,e,a,s){super(t,n,e,a,s),this.store=t,this.router=n,this.route=e,this.changeDetectorRef=a,this.translate=s,this.failIcon=i.o,this.backShopUrl=!1,this.errorText$=this.store.pipe(Object(l.B)(u.w),Object(o.a)(t=>t||"defaulPages.fail.header.notFound")),this.errorDescription$=this.store.pipe(Object(l.B)(u.v),Object(o.a)(t=>t||null)),this.showDetail$=Object(r.b)(this.errorText$.pipe(Object(o.a)(t=>"defaulPages.fail.header.notFound"!==t)),this.store.pipe(Object(l.B)(u.J),Object(o.a)(t=>!t||!!t&&t.showPayDetail))).pipe(Object(o.a)(([t,n])=>t&&n)),this.showHeader$=this.store.pipe(Object(l.B)(u.A),Object(o.a)(t=>!t||!!t&&t.showHeader))}ngOnInit(){super.ngOnInit(),this.hasInfo?this.backShopUrl=this.isBackShopUrl():this._autoUnsubscribeList.push(this.store.pipe(Object(l.B)(u.Q)).subscribe(t=>{this.backShopUrl=!!t,this.changeDetectorRef.markForCheck()}))}ngAfterViewInit(){this.store.dispatch(new s.U)}}},"zd/l":function(t,n,e){"use strict";e.d(n,"a",(function(){return h}));var l=e("ofez"),i=e("BSTZ"),a=e("Rs+Y"),u=e("O2EY"),o=e("ObOS"),r=e("KHll"),s=e("NRRq"),c=e("YtkY"),d=e("xVbo");class h extends a.a{constructor(t,n,e,a,o){super(t,n,e,a,o),this.store=t,this.router=n,this.route=e,this.changeDetectorRef=a,this.translate=o,this.successIcon=i.G,this.backShopUrl=!1,this.showHeader$=this.store.pipe(Object(l.B)(u.A),Object(c.a)(t=>!t||!!t&&t.showHeader)),this.showPayDetail$=this.store.pipe(Object(l.B)(u.J),Object(c.a)(t=>!t||!!t&&t.showPayDetail))}ngOnInit(){super.ngOnInit(),this._autoUnsubscribeList.push(this.store.pipe(Object(d.a)(t=>t.appState.transactionInfo.EmailEnabled),Object(l.B)(u.y),Object(d.a)(t=>!!t&&!this.email)).subscribe(t=>{this.email=t,this.changeDetectorRef.markForCheck()})),this.hasInfo?(this.backShopUrl=this.isBackShopUrl(),this.changeDetectorRef.markForCheck()):this._autoUnsubscribeList.push(this.store.pipe(Object(l.B)(u.Q)).subscribe(t=>{this.backShopUrl=!!t,this.changeDetectorRef.markForCheck()}))}ngAfterViewInit(){this.store.dispatch(new s.U),Object(r.d)()&&window.parent.postMessage(o.k.SET_SUCCESS,"*")}}}}]);
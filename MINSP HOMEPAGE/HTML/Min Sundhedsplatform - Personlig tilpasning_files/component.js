/*! Copyright (c) Epic Systems Corporation 2014-2018 */
if(typeof $$WP.Components==="undefined"){var $$WPComp;$$WP.Components={TITLEBARIDENTIFIER:"titlebar",TOOLBARIDENTIFIER:"toolbar",__Instances:[],getInstance:function WPComp$getInstance(a){return $$WPComp.__Instances[a]},isComponent:function WPComp$isComponent(a){return!a||isNaN(a.ComponentNumber)?false:a instanceof $$WPComp.Component?true:typeof a.Components$Component==="function"?true:false},applySettings:function WPComp$applySettings(d,a){a=$$WPUtil.mergeObjects(d,a,false,true);var c,b;c=function(b,a){if(a.Class&&(" "+b.Class+" ").indexOf(a.Class)===-1)b.Class+=" "+a.Class};if(!a.__prototypeProcessed){c(a,a._constructor.prototype);for(b=a._constructors.length-1;b>-1;b--)c(a,a._constructors[b].prototype);a.__prototypeProcessed=true}},ComplexObjects:{},_Events:{_onoff:function(i,f){var a,b,c,g,d,h,e;e=i.__Events;for(a in e){b=e[a];if($.isArray(b))for(c=b.length-1;c>-1;c--){g=b[c].$listeningElement||i.$container;d="";for(h in b[c])if(h!=="$listeningElement")d+=h+" ";if(f==="on")g[f](d,a==="empty"?"":a,{},$$WPComp._Events._eventProcessor);else g[f](d,a==="empty"?"":a,$$WPComp._Events._eventProcessor)}}},on:function(a){$$WPComp._Events._onoff(a,"on")},off:function(a){$$WPComp._Events._onoff(a,"off")},_eventProcessor:function Behaviors$EventHandlers$_eventProcessor(a,l){var j="data-component-id",i="[data-component-id]",h="disabled";a.type!=="resize"&&$$WPUtil.setActivity();var c,b,e,d,k,g,f;a.$target=$afe.jq(a.target);if(a.$target.hasClass(h)){a.preventDefault();return}a.$dataId=a.$target.closest("[data-id]");if(a.$dataId.hasClass(h)){a.preventDefault();return}a.dataId=a.$dataId.safeAttr("data-id");c=$$WPComp.getInstance($afe.jq(a.delegateTarget).closest(i).safeAttr(j));while(c){if(c.__Events){e=c.__Events[a.handleObj.selector===""?"empty":a.handleObj.selector];for(b=e.length-1;b>-1;b--){g=false;for(f=0;f<e[b].$listeningElement.length;f++)if(e[b].$listeningElement.get(f)===a.delegateTarget){g=true;break}if(g)break}if(b!==-1){d=e[b][a.type];if(!d)return;for(b=d.length-1;b>-1;b--)if(d[b].fun){k=d[b].fun.apply(d[b].context||c,[a,l]);if(k===false){$$WPUtil.preventEvent(a);return false}}}}c=$$WPComp.getInstance(c.$container.parent().closest(i).safeAttr(j))}}},__Server:{waitingFor:0}};$$WPComp=$$WP.Components;$$WPComp.ComplexObjects.Image=function WPComp$CO$Image(e,d,c,b){var a=this;a.Src=e;a.Class=d;a.Alt=c;if(typeof b==="undefined")a.Title=c;else a.Title=b};$$WPComp.ComplexObjects.Image.prototype={Src:"",Class:"",Alt:"",Title:""};$$WPComp.ComplexObjects.Button=function WPComp$CO$Button(d,f,e,c,b){var a=this;a.Text=d;a.Image=f;a.Class=e;a.Identifier=c;if(b!==null)a.Title=b};$$WPComp.ComplexObjects.Button.prototype={Text:"",Image:$$WPComp.ComplexObjects.Image.prototype,Class:"",Identifier:"",Title:""};$$WPComp.ComplexObjects.ButtonBar=function WPComp$CO$ButtonBar(c,f,d,e,b){var a=this;a.Text=c;a.Image=f;a.Class=d;a.Buttons=e;a.Identifier=b};$$WPComp.ComplexObjects.ButtonBar.prototype={Buttons:[],Identifier:"",Text:"",Image:$$WPComp.ComplexObjects.Image.prototype,Class:"",HasText:function WP$BB$HT(){return this.Text&&this.Text.toString()}};$$WPComp.Component=function WPComp$Component(c){var a=this;a.BaseObject();var b;$$WPComp.applySettings(c,a);a.ComponentNumber=$$WPComp.__Instances.length;$$WPComp.__Instances.push(a);a.Tag=a.Tag||"div";if(!a.$container)a.$container=$afe.jq(document.createElement(a.Tag));a.$container.addClass(a.Class);a.$container.safeAttr("data-component-id",String(a.ComponentNumber));a.$content=$afe.jq(document.createElement("div")).addClass("content");a.$container.safeAppend(a.$content);a._visible=true;(a.Components$Component$hide||a.hide).apply(a);if(a.CommunicationsIndicator!==false&&!$$WPComp.isComponent(a.CommunicationsIndicator)){if(typeof a.CommunicationsIndicator!=="string")a.CommunicationsIndicator=$$WP.Strings.getForTemplate("GenericLoadingMessage","Global");if(a.DataFromMultipleSources){a.CommunicationsIndicator=new $$WPComp.InlineLoadingComponentWithSources({Data:{PrimaryMessage:a.CommunicationsIndicator},AreaName:a.AreaName,DataFromMultipleSources:true});a.CommunicationsIndicator.parentComponent=a}else a.CommunicationsIndicator=new $$WPComp.InlineLoadingComponent({Data:{PrimaryMessage:a.CommunicationsIndicator}})}a.SupportAnimations&&$$WPBehav.AnimateHeights.add(a);if(a.LoadParameters){a.load(a.LoadParameters);delete a.LoadParameters}if(a.Html!==null&&typeof a.Html!=="undefined"){a.html(a.Html);delete a.Html}if(a.TitleText===""){b=$$WP.Strings.getNamespace(a.StringsNamespace);a.TitleText=b.getStringForTemplate("Title")}a.addEventListener("click",a._componentClick)};$$WPComp.Component.prototype={MaintainFocus:false,StringsNamespace:"Global",__Server:{waitingFor:0},CommunicationsIndicator:$$WP.Strings.getForTemplate("GenericLoadingMessage","Global"),_visible:false,$parent:null,$toolbar:null,$title:null,ContainerComponent:null,ComponentNumber:Number,FocusOnClose:null,Tag:"div",Class:"component",ToolbarButtons:null,TitleText:"",TitleButtons:[],TitleImage:null,IsClosable:false,SupressTitle:false,AlwaysShowExpandIcon:false,AlwaysShowViewMore:false,ShowPocExpandIcon:false,SupportAnimations:false,$container:null,$content:null,_shownOnce:false,_isDisposed:false,_Title:null,AreaName:"",DataFromMultipleSources:false,addEventListener:function WPComp$addListener(g,h,i,f,d){var a=this,c,b,e;a.isVisible()&&$$WPComp._Events.off(a);f=f||a.$container;d=d||"empty";a.__Events=a.__Events||{};a.__Events[d]=a.__Events[d]||[];c=a.__Events[d];for(e=c.length-1;e>-1&&!b;e--)if(f===c[e].$listeningElement){b=c[e];break}if(!b){b={$listeningElement:f};c.push(b)}b[g]=b[g]||[];b[g].push({fun:h,context:i});if(a.isVisible())$$WPComp._Events.on(a)},removeEventListener:function WPComp$removeListener(e,i,h,f){var b=this,g,a,d,c,j;b.isVisible()&&$$WPComp._Events.off(b);h=h||b.$container;f=f||"empty";g=b.__Events[f];for(d=g.length-1;d>-1&&!a;d--)if(h===g[d].$listeningElement){a=g[d];break}if(a[e]){for(c=a[e].length-1;c>-1;c--)if(a[e][c].fun===i){a[e]=a[e].slice(c,c);break}if(a[e].length===0){delete a[e];c=-1;for(j in a)c++;if(c===0){b.__Events[f]=g.slice(d,d);if(b.__Events[f].length===0)delete b.__Events[f]}}}if(b.isVisible())$$WPComp._Events.on(b)},_componentClick:function WPComp$_click(a){var b="viewmore";if(a.dataId===b||a.dataId===$$WPComp.TITLEBARIDENTIFIER+b){this.showAllContentInPopup();return false}if(a.dataId===$$WPComp.TITLEBARIDENTIFIER+"close"||a.dataId===$$WPComp.TOOLBARIDENTIFIER+"close"){this.dispose(true);return false}},showAllContentInPopup:function WPComp$showAllContentInPopup(){var c="max-height",b="100%",d,a,e;e=$$WP.Strings.getNamespace("Global");a=this.copy({SupportAnimations:false});d=new $$WPContain.Popup({Components:[a],TitleText:this._Title.HasText()||e.getStringForTemplate("ShowingAllContent"),positioningFunction:$$WPContain.Positions.InsideCentered,Size:$$WPContain.Popup.SizeEnum.LARGE});a.$container.css("height",b);a.$container.css(c,b);a.$content.css("height",b);a.$content.css(c,b);a.show();d.show()},hasTitle:function WPComp$hasTitle(){var a=this;return!a._Title?false:a.IsClosable||a._Title.HasText()||a._Title.Buttons&&a._Title.Buttons.length>0},setTitle:function(e,g,h,d,b){var c="textlessTitle",a=this,f;a.IsClosable=typeof d==="boolean"?d:a.IsClosable&&e!==null;a.$container.removeClass(c);a._Title=new $$WPComp.ComplexObjects.ButtonBar(e,h,"titlebar",$$WPUtil.copyObject(g),$$WPComp.TITLEBARIDENTIFIER);a.$title&&a.$title.remove();if(a.hasTitle()){if(a.IsClosable&&!a._Title._addedCloseButton){a._Title.Buttons=a._Title.Buttons||[];f=$$WP.Strings.getNamespace("Global");a._Title.Buttons.push(new $$WPComp.ComplexObjects.Button("",new $$WPComp.ComplexObjects.Image(makeStaticLink("images/close_popup.svg")),"cancelworkflow","close",f.getStringForTemplate("ClosePopupAlt")));a._Title._addedCloseButton=true}if(b)a._Title.ExpandBtn=b;!a._Title.HasText()&&a.$container.addClass(c);a.$title=$afe.renderTemplate($$WP.Templates.Core.ButtonBar,a._Title);a.$title.find(".button").removeClass("button");a.$container.safePrepend(a.$title)}else a.$title=dangerou$.parseHtml("<div></div>");a._titleSetOnce=true},focus:function WPComp$focus(a){try{this.FocusOnClose=WP.DOM.Search.getFocused(document.body)}catch(d){}try{var b=(a?this.$content:this.$container).get(0);WP.DOM.Search.getNextFocusable(b).focus()}catch(c){}},html:function WPComp$html(b,f){var d="column_2",c="function",a=this;if(b===null||typeof b==="undefined"){$$WP.Debug.logError("Trying to set non-existant html in a component...");return}if(b instanceof Handlebars.SafeString){$$WP.Debug.logError("A Component's HTML should be a String. It's currently a Handlebars.SafeString. Setting the content anyway...");b=b.toString()}else if(typeof b!=="string"){$$WP.Debug.logError("A Component's HTML must be a String. It's currently a(n) "+typeof b+".");return}if(b.search("<body")!==-1)b="<div class='errormessage'>"+$$WP.Strings.get("WidgetErrorMessage")+"</div>";a.maintainFocus(f);$$WPUtil&&typeof $$WPUtil.removePopupListener===c&&$$WPUtil.removePopupListener(a.$content);dangerou$.setHtml(a.$content,$$WP.Strings.getNamespace().replaceMnemonics(b||""));if(a.isVisible()){var e=$$WPUtil.getScrollTop();a.$container.trigger("resize");$$WPUtil.setScrollTop(e);if($$WP&&$$WP.Utilities&&$$WP.Utilities.UI){if(isDataTile()){a.$content.find(".cardlist.column_3").removeClass("column_3").addClass(d);a.$content.find(".cardlist.column_4").removeClass("column_4").addClass(d)}a.$content.find(".cardlist").trigger("cardLoad");a.$content.find(".navparent").length>0&&typeof $$WP.Utilities.UI.NavTabs===c&&$$WP.Utilities.UI.NavTabs({})}}$$WPUtil&&typeof $$WPUtil.addPopupListener===c&&$$WPUtil.addPopupListener(a.$content)},maintainFocus:function setFocusLater(b){var a=this;if(!a.MaintainFocus||!$.contains(a.$content.get(0),document.activeElement))return;var c;a._previouslyFocused=document.activeElement;a._nextFocusSelect=null;if(document.activeElement.id)a._nextFocusSelect="#"+document.activeElement.id;else if(b)a._nextFocusSelect=b;else{WP.DOM.Search.getPreviousFocusable(a.$container.get(0)).focus();return}window.setTimeout(function(c){var a=$$WP.Components.getInstance(c),b;if(a._nextFocusSelect)b=a.$content.find(a._nextFocusSelect).get(0);if(!b)b=a;b.focus()},50,[a.ComponentNumber])},dispose:function WPComp$dispose(){var a=this;if(a._isDisposed)return;a.$container.hasClass("capped")&&$afe.select("#footer").removeClass("moving");a.hide();a.SupportAnimations&&$$WPBehav.AnimateHeights.remove(a);a.$container.empty();a.$container.remove();if($$WPComp.__Instances[a.ComponentNumber])$$WPComp.__Instances[a.ComponentNumber]=null;var b=$$WPComp.__Instances;while(b[b.length-1]===null)b.pop();a._isDisposed=true;a.ContainerComponent&&a.ContainerComponent._Components.length===1&&a.ContainerComponent.dispose();matchWrapHeight()},show:function WPComp$show(){var a=this,b,c;if(a._visible===true)return;if(a._isDisposed){console.error("Cannot shown disposed component number "+a.ComponentNumber);return}a._visible=true;a.$container.removeClass("hidden");if(!a._shownOnce){!a._titleSetOnce&&a.setTitle(a.TitleText,a.TitleButtons,a.TitleImage,a.IsClosable);a.setToolbar(a.ToolbarButtons);c=a.$container.parent();if(c.length===0)if(a.$parent)a.$parent.safeAppend(a.$container);else console.error("Cannot show component that has no $parent");else a.$parent=c;if(a.SupportAnimations)if(a.$container.closest(".SupportsAnimations").length===0){b=a;while(b.ContainerComponent)b=b.ContainerComponent;b.$container.addClass("SupportsAnimations")}a._shownOnce=true}$$WPComp._Events.on(a);if(a.isVisible()){a.$container.trigger("resize");a.$content.find(".cardlist").trigger("cardLoad")}},hide:function WPComp$hide(){var a=this;if(a._visible===false)return;a._visible=false;var b=a.__containerTargetHeight||a.$container.outerHeight(true);a.$container.addClass("hidden");$$WPComp._Events.off(a);a.$container.parent().closest(".component").trigger("resize",{delta:-b})},isVisible:function WPComp$isVisible(){return this._visible&&this.$container.parent().length>0},copy:function WPComp$copy(a){return new this._constructor(a)},capHeight:function WPComp$capHeight(m){var l="images/widget_open.svg",e="ViewMoreLabel",d="",g=true,c="viewmore",n="height",a=this;if(isNaN(m))return;if(!a._visible)return;a.$content.css(n,"auto");m=Math.floor(m);var o,f,k,b,i,j,h,p=0;o=a.$title.contentHeight()+a.$title.heightPadding();f=m-a.$container.heightPadding()-o;k=a.$content.contentHeight();b=a.$container.children("a.viewmore");i=$$WP.Strings.getNamespace(a.StringsNamespace);if(a._Title&&a._Title.Buttons)if(!a.ShowPocExpandIcon){for(j=0;j<a._Title.Buttons.length;j++)if(a._Title.Buttons[j].Identifier===c){h=g;p=j}}else if(a._Title.ExpandBtn)h=g;if(k<=f){if(!a.AlwaysShowViewMore)b.length&&b.remove();else{if(!b.length){b=$$WP.SimpleTemplates.Anchor({"class":"viewmore noFadeContent","data-id":c,href:makeLink(d)});$$WP.Strings.setDisplayText(b,e,a.StringsNamespace);a.$container.safeAppend(b)}if(k+b.outerHeight(g)>f){a.$content.css(n,k-b.outerHeight(g)+"px");b.removeClass("noFadeContent")}}if(h&&!a.AlwaysShowExpandIcon){if(a.ShowPocExpandIcon)a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable);else if(a._Title&&a._Title.Buttons){a._Title.Buttons=a._Title.Buttons.slice(0,p);a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable)}}else if(!h&&a.AlwaysShowExpandIcon)if(a._Title){a._Title.Buttons=a._Title.Buttons||[];if(a.ShowPocExpandIcon){a._Title.ExpandBtn=new $$WPComp.ComplexObjects.Button(d,new $$WPComp.ComplexObjects.Image(makeStaticLink(l),d,i.getStringForTemplate(e)),c,c);a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable,a._Title.ExpandBtn)}else{a._Title.Buttons.push(new $$WPComp.ComplexObjects.Button(d,new $$WPComp.ComplexObjects.Image(makeStaticLink(l),d,i.getStringForTemplate(e)),c,c));a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable)}}}else{if(b.length===0){b=$$WP.SimpleTemplates.Anchor({"class":c,"data-id":c,href:makeLink(d)});$$WP.Strings.setDisplayText(b,e,a.StringsNamespace);a.$container.safeAppend(b);if(!h)if(a._Title){a._Title.Buttons=a._Title.Buttons||[];if(a.ShowPocExpandIcon){a._Title.ExpandBtn=new $$WPComp.ComplexObjects.Button(d,new $$WPComp.ComplexObjects.Image(makeStaticLink(l),d,i.getStringForTemplate(e)),c,c);a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable,a._Title.ExpandBtn)}else{a._Title.Buttons.push(new $$WPComp.ComplexObjects.Button(d,new $$WPComp.ComplexObjects.Image(makeStaticLink(l),d,i.getStringForTemplate(e)),c,c));a.setTitle(a._Title.Text,a._Title.Buttons,a._Title.Image,a.IsClosable)}f-=a.$title.contentHeight()+a.$title.heightPadding()-o}}a.$content.css(n,f-b.outerHeight(g)+"px")}},setToolbar:function WPComp$setToolbar(b){var c="notoolbar",a=this;a.$container.removeClass(c);a.ToolbarButtons=$$WPUtil.copyObject(b);if(!b||!b.length)a.$container.addClass(c);else{a.$toolbar&&a.$toolbar.remove();a.$toolbar=$afe.renderTemplate($$WP.Templates.Core.ButtonBar,new $$WPComp.ComplexObjects.ButtonBar("",null,"toolbar",a.ToolbarButtons,$$WPComp.TOOLBARIDENTIFIER));a.$container.safeAppend(a.$toolbar)}},waitingForRequest:function WPComp$waitingForRequest(a){return typeof a==="string"?!this.__Server[a]?0:this.__Server[a].waitingFor>0:this.__Server.waitingFor>0},makeRequest:function WPComp$makeRequest(b,d,a,j){var h="@MYCHART@UNLOADEDCOMPONENTS@",f=false,c=this,i,e,g;if(!b.url)return;d=d||"other";if(a!==f&&!$$WPComp.isComponent(a)){if(typeof a==="undefined"||a===null||a===true)a=c.CommunicationsIndicator;if(a!==f&&!$$WPComp.isComponent(a)){if(typeof a!=="string")a=$$WP.Strings.getForTemplate("GenericLoadingMessage","Global");a=new $$WPComp.InlineLoadingComponent({Data:{PrimaryMessage:a}})}}$$WPComp.isComponent(a)&&a.refresh();b=$$WPUtil.mergeObjects({type:"POST",data:{},dataType:"html",cache:f},b,f);i={CommunicationsIndicator:a,Options:b,success:b.success,failure:b.failure,callbackParam:j};b.success=c.__serverSuccess;b.error=c.__serverFailed;b.url=$$WPUtil.addUrlParameter(b.url,"ComponentNumber",c.ComponentNumber);c.__Server[d]=c.__Server[d]||{length:0,waitingFor:0};e=c.__Server[d];e[e.length]=i;b.context={ComponentNumber:c.ComponentNumber,Identifier:d,RequestNumber:e.length};++e.length;++e.waitingFor;c.__Server.waitingFor++;$$WPComp.isComponent(a)&&a.show(c.$container);$.ajax(b);$$WPComp.__Server.waitingFor++;g=$$WP.Strings.getNamespace("Global");g.addMnemonic(h,$$WPComp.__Server.waitingFor.toString());$afe.select("#skiplink").text(g.getString("GlobalLoadingIndicator"));g.removeMnemonic(h);return b.context.RequestNumber},cancelRequest:function(b,c){if(!this.__Server[b])return;var a=this.__Server[b][c];a.canceled=true;if($$WPComp.isComponent(a.CommunicationsIndicator)){try{a.CommunicationsIndicator.hide(this.$container)}catch(d){}$$WPComp.__Server.waitingFor--}},__serverSuccess:function WPBehave$Server$success(b){var a;a=$$WPComp.getInstance(this.ComponentNumber);a.__serverCallback(this.Identifier,this.RequestNumber,b,"success")},__serverFailed:function WPBehave$Server$failure(b){var a;a=$$WPComp.getInstance(this.ComponentNumber);a.__serverCallback(this.Identifier,this.RequestNumber,b,"failure")},__serverCallback:function WPBehave$Server$sharedCallback(c,e,i,h){var g="#skiplink",f="@MYCHART@UNLOADEDCOMPONENTS@",a=this,b,d;b=a.__Server[c][e];a.__Server[c].waitingFor--;a.__Server.waitingFor--;if(a.__Server[c].waitingFor===0)delete a.__Server[c];else delete a.__Server[c][e];if(!b.canceled){if($$WPComp.isComponent(b.CommunicationsIndicator))try{b.CommunicationsIndicator.hide(a.$container)}catch(j){}if(typeof b[h]==="function")b[h].apply(a,[i,b.callbackParam]);else console.error("Could not find appropriate callback for value returned by server.\nThe value returned was: "+i+".\t\nThe component number was: "+a.ComponentNumber+".\t\nIts container's class was: "+a.$container.get(0).className);$$WPComp.__Server.waitingFor--}d=$$WP.Strings.getNamespace("Global");if($$WPComp.__Server.waitingFor>0){d.addMnemonic(f,$$WPComp.__Server.waitingFor.toString());$afe.select(g).text(d.getString("GlobalLoadingIndicator"));d.removeMnemonic(f)}else $afe.select(g).text(d.getString("SkipNavigationText"))},load:function WPComp$load(){console.error("Components must declare a load function")}};$$WPComp.Component.extend("BaseObject")}$afe.onDocumentReady(function SaveSkipNavText(){$$WP.Strings.add("SkipNavigationText",$afe.select("#skiplink").text(),"Global")})
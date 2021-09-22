/*! Copyright (c) Epic Systems Corporation 2015-2016 */
$$WP.Utilities.guaranteeExistence($$WP,"Clinical.ToDo.Containers");$$WP.Clinical.ToDo.Containers.ToDoEventsContainer=function $$WPClinical$ToDoEvents$Container(c){var a=this;c=c||{};a.Containers$ContainerComponent(c);a.ToDoListComponent=new $$WP.Clinical.ToDo.Components.ToDoListComponent({Data:{Class:"ToDoList "},RegistryID:a.RegistryID,IsPOC:a.IsPOC,RegistryName:a.RegistryName});a.addComponent(a.ToDoListComponent);a.ToDoCalendarComponent=new $$WP.Containers.MultiMonthCalendar({SizeEnum:"Medium",IsClosable:false,Class:"multiMonthCalendar",NumOfMonths:1,IsAriaHidden:true});a.addComponent(a.ToDoCalendarComponent);for(var b=0;b<a.ToDoCalendarComponent.NumOfMonths;b++){a.ToDoCalendarComponent.CalendarComponents[b]._htmlOld=a.ToDoCalendarComponent.CalendarComponents[b].html;a.ToDoCalendarComponent.CalendarComponents[b].html=a._calendarComponentHTML}a.ToDoCalendarComponent.hide();a.setTitle(a.TitleText);a.addEventListener("mouseover",a._mouseOverEvent);a.addEventListener("mouseout",a._mouseOutEvent);a.addEventListener("click",a._clickEvent);a.addEventListener("focusout",a._tabFocusOut);a.addEventListener("keydown",a._keydownPopup);$afe.select("body").on("click","#addtocalendar",function(a){a.preventDefault();$$WP.Strings.setDefaultNamespace("visits");$$WPUtil.quickMessageBox($$WP.Strings.get("CalendarPopupPrompt"),$$WP.Strings.get("CalendarPopupTitle"),[new $$WPComp.ComplexObjects.Button($$WP.Strings.get("CalendarPopupIncludeDetails"),null,"","details"),new $$WPComp.ComplexObjects.Button($$WP.Strings.get("CalendarPopupIncludeTimeOnly"),null,"","timeonly")],function(c){var b="toolbardetails";(c===b||c==="toolbartimeonly")&&$$WP.Utilities.TryRedirect(makeLink("Visits/VisitDetails/GetCalendarFile?csn="+a.currentTarget.getAttribute("data-csn")+"&details="+(c===b)))});$$WP.Strings.clearDefaultNamespace()})};$$WP.Clinical.ToDo.Containers.ToDoEventsContainer.prototype={IsClosable:false,TitleText:"",Class:"ToDoEvents pocdefault",Identifier:"ToDoEvents",MonthsMap:[],EventDaysMap:[],EventsTemplate:$$WP.Templates.Clinical.EventsMouseOver,AlwaysShowExpandIcon:false,RegistryName:"",PopupTitle:null,IsPOC:false,RegistryID:"",StringsNamespace:"clinical.todo",ShowPocExpandIcon:true,_clickEvent:function $$WP$Clinical$ToDo$_clickEvent(b,h){var m=".ToDoEvents > a.viewmore",l=".ListToolbarLink",k=".CalendarToolbarLink",j=".ToDolist.component",f="selected",e="hidden",c=false,g=true,a=this;if(b){var d=g,i=b.$target.closest("[id]");if(i!==null&&i.hasClass("hasevents")){h=i.safeAttr("id");h!==null&&a.showAllContentInPopup(b,h,"",c);return c}switch(b.dataId){case"titlebarCalendar":a.$container.find(".multiMonthCalendar.container").removeClass(e).addClass(f);a.$container.find(j).addClass(e);a.$container.find(k).addClass(f);a.$container.find(l).removeClass(f);$afe.select(m).addClass(e);d=c;break;case"titlebarList":a.$container.find(".multiMonthCalendar.component").addClass(e);a.$container.find(j).removeClass(e);a.$container.find(k).removeClass(f);a.$container.find(l).addClass(f);a.ToDoListComponent.refresh();$afe.select(m).removeClass(e);d=c;a.$container.trigger("resize");break;case"todolistelement":var n=b.$target.closest(".todolistelement"),o=n.safeAttr("data-index");a.showAllContentInPopup(b,null,o,g);d=c;break;case"viewmore":a.showAllContentInPopup(b,h,"",g);d=c;break;case"viewinstrnbutton":a.showOrderContentInPopup(b);d=c;break;default:d=g}return d}},_calendarComponentHTML:function $$WP$Clinical$ToDoEvents$Container$_calendarComponentHTML(d){var c="hasclearlabel";this._htmlOld(d);this.ContainerComponent.ContainerComponent._afterHTML();var b=$afe.select(".multiMonthCalendar .hasevents a"),a;if(!b.hasClass(c)){b.addClass(c);a=$$WP.SimpleTemplates.Span({"class":"clearlabel"});$$WP.Strings.setDisplayText(a,"multimonthcalendardayinstructions","clinical.todo");b.safeAppend(a)}},_afterHTML:function $$WP$Clinical$ToDoEvents$Container$_afterHTML(){var a=this;a.addEventListener("focus",a._tabFocus,a,a.$container.find("a.haseventfocus"))},_tabFocus:function $$WP$Clinical$ToDoEvents$Container$_tabFocus(a){var c="prevfocus",b,d;b=a.$target.closest(".hasevents");if(b.length>0){d=b.get(0).id;this.createTooltip(d);if(a.target.className!==null&&a.target.className.indexOf(c)===-1){this.$container.find("a.prevfocus").removeClass(c);a.target.className=a.target.className+" prevfocus"}}},_tabFocusOut:function $$WP$Clinical$ToDoEvents$Container$_tabFocusOut(a){a!==null&&a.target.className.indexOf("haseventfocus")!==-1&&this.hideTooltip()},_mouseOverEvent:function $$WP$Clinical$ToDoEvents$Container$_mouseOverEvent(c){var e="hasevents",d="undefined",a=c.$target.closest(".hasevents"),b,f;if(typeof a!==d&&a.length>0&&a[0].className.indexOf(e)!==-1){f=true;b=a[0].id}if(c.dataId===e||f){typeof timeout!==d&&clearTimeout(timeout);b=b||c.target.id;this.createTooltip(b)}},_mouseOutEvent:function $$WP$Clinical$ToDoEvents$Container$_mouseOverEvent(a){a.dataId==="hasevents"&&this.hideTooltip()},_keydownPopup:function $$WP$Clinical$ToDoEvents$Container$_keydownPopup(a){if(a!==null&&a.target.className.indexOf("haseventfocus")!==-1&&a.keyCode===32){$afe.select("#todotooltip a:first").focus();$afe.select("#todotooltip").addClass("active");return false}},load:function $$WP$Clinical$ToDoEvents$Container$load(){var f="clinical.todo",c="pretext",a=this,b,e,d;a.hide();a.ToDoListComponent.load();a.show(true);e=$$WP.SimpleTemplates.Div({"class":"tooltip todotooltip hidden","data-id":"calendarTooltip",id:"todotooltip"},null);e.safeAppendTo("body");b=$afe.select("#todotooltip");b.mouseover(function(){$afe.jq(this).addClass("active")});b.mouseleave(function(){$afe.jq(this).addClass("hidden").removeClass("active")});if(!$$WPUtil.IsNullOrEmpty($$WP.Strings.get(c,f))){d=$$WP.SimpleTemplates.Div({"class":c});$$WP.Strings.setDisplayText(d,c,f);a.$container.find("> .content").safePrepend(d)}},setData:function $$WP$Clinical$ToDoEvents$Container$set(b){var a=this;a.Data=b;if(b.ToDoEventsList&&b.ToDoEventsList.length>0)a.AlwaysShowExpandIcon=true;a.ToDoCalendarComponent.setData(b);a.ToDoCalendarComponent.show();a.EventDaysMap=b.EventDaysMap;a.MonthsMap=b.MonthsMap},showAllContentInPopup:function $$WP$Clinical$ToDoEvents$Container$showAllContentInPopup(s,i,q,r){var n="undefined",m="@MYCHART@TITLE@",l="@MYCHART@CONDITIONTITLE@",a=this,p,e,h,b,g,c,k,d,j;if(a.RegistryID!==""){$$WP.Strings.setDefaultNamespace("clinical.todo");$$WP.Strings.addMnemonic(l,a.RegistryName);$$WP.Strings.addMnemonic(m,$$WP.Strings.get("Title"),false,null,$$WP.Strings.EncodingTypes.None);a.PopupTitle=$$WP.Strings.getForTemplate("widgettitle");$$WP.Strings.removeMnemonic(l);$$WP.Strings.removeMnemonic(m);$$WP.Strings.clearDefaultNamespace()}else a.PopupTitle=a.TitleText;p=a.$container.find(".buttons .ListToolbarLink a").safeAttr("class");if(r){h="listview";c=new Date;g=q}else{h="calendarview";g=-1;if(i){var f=i.split("_");if(f.length>3){b=parseInt(f[2]);if(!isNaN(b))c=makeDate(f[1],b+1,f[3])}}else{b=a.ToDoCalendarComponent.Month,j=a.ToDoCalendarComponent.Year;var o=0;while(o<a.ToDoCalendarComponent.NumOfMonths){d=a.getFormattedMonthID(b,j);if(typeof a.Data.MonthsMap[d]!==n)if(a.Data.MonthsMap[d].StartEvent!==null&&a.Data.MonthsMap[d].StartEvent.EventDate!==null){c=new Date(a.Data.MonthsMap[d].StartEvent.EventDate);break}o++;b=(b+1)%12;if(b===0)j++}if(typeof c===n)c=makeDate(a.ToDoCalendarComponent.Year,a.ToDoCalendarComponent.Month+1,1)}}e=new $$WP.Clinical.ToDo.Containers.ToDoEventsPopup({IsCondensed:false,IsClosable:true,CurrentView:h,CalendarDate:c,ClickedIndex:g});k=new $$WPContain.Popup({Components:[e],TitleText:a.PopupTitle,positioningFunction:$$WPContain.Positions.InsideNearTop,Size:$$WPContain.Popup.SizeEnum.LARGE,SupportAnimations:false,Class:"todoeventspopup pocdefaultpopup",ToDoListComponent:a.ToDoListComponent});k.show();e.show();e.setData(a.Data);e.load(i)},showOrderContentInPopup:function $$WP$Clinical$ToDoEvents$Container$showOrderContentInPopup(e){var d=e.$target.safeAttr("data-order-id"),a,b,c;if(d)a=this.getOrderEvent(d);if(a&&a.Instructions){b=new $$WP.Clinical.ToDo.Components.ToDoOrdersPopupComponent;b.setData(a);c=new $$WPContain.Popup({Components:[b],TitleText:$$WP.Strings.getForTemplate("viewinstructionsbutton","scheduling.orders"),positioningFunction:$$WPContain.Positions.InsideNearTop,Size:$$WPContain.Popup.SizeEnum.SMALL,SupportAnimations:false,Class:"todoorderspopup pocdefaultpopup"});c.show(true)}},createTooltip:function $$WP$Clinical$ToDoEvents$Container$createTooltip(e){var b="#todotooltip",c="clinical.todo",d="undefined",a=this.EventDaysMap[e];if(typeof a!==d){a.MoreText=$$WP.Strings.getForTemplate("moretext",c);a.TabKnowMoreText=$$WP.Strings.getForTemplate("knowmoreanchortitle",c);a.GoBackText=$$WP.Strings.getForTemplate("gobackanchortitle",c)}var f=$afe.renderTemplate(this.EventsTemplate,a);$afe.select(b).empty().safeAppend(f);$afe.select("#todotooltip a:last").keydown(function(){$afe.select(".multiMonthCalendar .prevfocus:first").focus();$afe.select(b).removeClass("active");return false});typeof timeout!==d&&clearTimeout(timeout);$afe.select(b).removeClass("hidden");this.positionNewTooltip(e)},positionNewTooltip:function $$WP$Clinical$ToDoEvents$Container$(q){var h="bottom",c="top",b="px",o=document.getElementById("main")||document.body,p=q,l=document.getElementById(p),m=WP.DOM.Read.getAbsolutePosition(o),a=WP.DOM.Read.getAbsolutePosition(l),d=document.getElementById("todotooltip"),n,e,k,j,i,g,f;n=a.y-d.offsetHeight-m.y;e=m.x+o.offsetWidth-(a.x+l.offsetWidth)-d.offsetWidth;e=e-50;if(n<50){k=a.y+30+b;i=c}else{k=a.y-d.offsetHeight+b;i=h}if(e<0){j=a.x-d.offsetWidth+50+b;g="right"}else{j=a.x+b;g="left"}f=$afe.select("#todotooltip .arrow");if(i===c)f.removeClass(h).addClass(c);else f.addClass(h).removeClass(c);f.addClass(g);$afe.select("#todotooltip").css({position:"absolute",top:k,left:j,"z-index":2222})},hideTooltip:function $$WP$Clinical$ToDoEvents$Container$(){timeout=setTimeout(function(){var a=$afe.select("#todotooltip");!a.hasClass("active")&&a.addClass("hidden")},300)},getFormattedDateID:function $$WP$Clinical$ToDoEvents$Container$getFormattedDateID(c,a,b){return"cal_"+b+"_"+a+"_"+c},getFormattedMonthID:function $$WP$Clinical$ToDoEvents$Container$getFormattedMonthID(a,b){return b+"_"+a},getOrderEvent:function $$WP$Clinical$ToDoEvents$Container$getOrderEvent(c){for(var b=this.Data.ToDoEventsList||[],a=0;a<b.length;a++)if(b[a].EventType==="order"&&b[a].OrderEvent.ID===c)return b[a].OrderEvent;return null}};$$WP.Clinical.ToDo.Containers.ToDoEventsContainer.extend("Containers.ContainerComponent")
/*! Copyright Epic Systems Corporation 2016-2019 */
$$WPUtil.guaranteeExistence($$WP,"Visits");$$WP.Visits.VisitCategory={UPCOMING_APPOINTMENT:1,UPCOMING_SURGERY:2,PAST_APPOINTMENT:3,PAST_ADMISSION:4,PAST_ED:5,PAST_SURGERY:6,UPCOMING_ADMISSION:7,UPCOMING_LD:8,UPCOMING_ED:9};$$WP.Visits.UpcomingVisitsListComponent=function UpcomingVisitsListComponent(b){var a=this;a.Components$TemplateComponent(b);a._hightlightCalendar=$.proxy(a._hightlightCalendar,a);a.addEventListener("click",a._click);a.addEventListener("keydown",a._keydown)};$$WP.Visits.UpcomingVisitsListComponent.prototype={template:$$WP.Templates.Visits.UpcomingVisitsList,SupportAnimations:false,Url:makeLink("Visits/VisitsList/LoadUpcoming"),IsClosable:false,TitleText:null,ContainerComponent:$$WP.Visits.VisitsListContainer.prototype,DataFromMultipleSources:true,AreaName:"VisitsUpcoming",Class:"visitcomponent upcomingvisits",Filter:"None",NoUpcomingVisits:false,HasFinishedLoading:false,load:function(){var a=$$WPUtil.queryString("xorgcsn"),b=$$WPUtil.queryString("xorgid");if(a&&a.length>0&&b&&b.length>0){b=decodeURIComponent(b);a=decodeURIComponent(a);window.history.replaceState({},document.title,window.location.href.split("?")[0]);$.post({url:makeLink("TelemedicineHome/GetOrganizationAndVerifyVisit"),data:{orgId:b,csn:a},cache:false,async:true,success:$.proxy(this.__afterGetOrganizationAndVerifyVisit,this)})}this.Components$TemplateComponent$load()},__afterGetOrganizationAndVerifyVisit:function(a){var c="Visits",b=this;if(a)if(a.MissingLink||a.Failure)b.__showError($$WP.Strings.getForTemplate("ErrorWebRequestFailed",c));else if(a.DeadLink)if(a.SuccessfullyRemovedDeadLink)b.__showError($$WP.Strings.getForTemplate("ErrorLinkIsDeadSuccess",c));else b.__showError($$WP.Strings.getForTemplate("ErrorLinkIsDeadFailure",c));else a.Organization&&b._h2gPopupHelper(null,a.Organization,"visitdetails",{csn:a.CSN})},__showError:function(c,a){$$WP.Strings.setDefaultNamespace("Visits");var e=$$WP.Strings.getForTemplate("ErrorTitle"),d=$$WP.Strings.getForTemplate("ErrorClose");$$WP.Strings.clearDefaultNamespace();var b=new $$WPComp.MessageComponent({TitleText:e,Message:c,ToolbarButtons:[new $$WPComp.ComplexObjects.Button(d,null,"cancelworkflow","")],callback:a});$$WPUtil.quickPopup(b)},_h2gPopupHelper:function(d,a,c,b){$$WP.CommunityUtilities.openDeepLink(c,a,b,null,function(){location.reload()},this)},setData:function(b){var k=null,l="@MYCHART@TIMEZONE@",r="@MYCHART@TIME@",q="@MYCHART@DATE@",j="</span>",p="@MYCHART@BOLDMARKUPEND@",f=false,i='<span class="bold">',o="@MYCHART@BOLDMARKUPSTART@",n="@MYCHART@VISITTYPE@",m="@MYCHART@PROVIDER@",h=true,e="Visits",g=this,d,a,c;$$WP.Strings.setDefaultNamespace(e);c=$$WP.Visits.VisitCategory;if(!b.LaterVisitsList&&!b.NextNDaysVisits)g.NoUpcomingVisits=b.EmptyList=h;else{if(b.LaterVisitsList.length>0)b.HasFuture=h;if(b.NextNDaysVisits.length>0)b.HasSoon=h;g.NoUpcomingVisits=b.HasNoData=!b.HasSoon&&!b.HasFuture}if(b.HasSoon)for(d=0;d<b.NextNDaysVisits.length;d++){a=b.NextNDaysVisits[d];a.DurationString=$$WPSchedulingUtil.GetMinutesAndHoursFromMinutes(a.DurationInMinutes);$$WP.Strings.addMnemonic(m,a.PrimaryProviderName);$$WP.Strings.addMnemonic(n,a.VisitTypeName);$$WP.Strings.addMnemonic(o,i,f,e,$$WP.Strings.EncodingTypes.None);$$WP.Strings.addMnemonic(p,j,f,e,$$WP.Strings.EncodingTypes.None);if(a.EncounterType===c.UPCOMING_APPOINTMENT||a.EncounterType===c.UPCOMING_SURGERY)if(a.IsSingleProvider||a.EncounterType===c.UPCOMING_SURGERY)a.VisitDescription=$$WP.Strings.get("SingleProviderDescriptionListPage");else a.VisitDescription=$$WP.Strings.get("MutipleProvidersDescriptionListPage");else if(a.EncounterType===c.UPCOMING_ADMISSION||a.EncounterType===c.UPCOMING_LD||a.EncounterType===c.UPCOMING_ED){if(!a.PrimaryProviderName)a.VisitDescription="";else a.VisitDescription=$$WP.Strings.get("PreAdmissionDescription");$$WP.Strings.addMnemonic(q,i+HTMLEncode(a.Date)+j,f,e,$$WP.Strings.EncodingTypes.None);if(!a.Time)a.ExpectedArrivalDateTime=$$WP.Strings.get("ExpectedArrivalDate");else{$$WP.Strings.addMnemonic(r,i+HTMLEncode(a.Time)+j,f,e,$$WP.Strings.EncodingTypes.None);if(a.TimeZone)$$WP.Strings.addMnemonic(l,i+HTMLEncode(a.TimeZone)+j,f,e,$$WP.Strings.EncodingTypes.None);else $$WP.Strings.addMnemonic(l,"");a.ExpectedArrivalDateTime=$$WP.Strings.get("ExpectedArrivalDateTime");$$WP.Strings.removeMnemonic(r);$$WP.Strings.removeMnemonic(l)}$$WP.Strings.removeMnemonic(q)}$$WP.Strings.removeMnemonic(m);$$WP.Strings.removeMnemonic(n);$$WP.Strings.removeMnemonic(o);$$WP.Strings.removeMnemonic(p);if(a.Copay!==k&&typeof a.Copay!=="undefined"){a.Copay.UseAmountDueRawData=h;a.Copay.UseAmountPaidRawData=h;if(a.Copay.AmountDiscountedRawData===k)a.Copay.AmountDiscountedRawData=0;if(a.Copay.AmountDueRawData===k){a.Copay.AmountDueRawData=0;a.Copay.UseAmountDueRawData=f}if(a.Copay.AmountPaidRawData===k){a.Copay.AmountPaidRawData=0;a.Copay.UseAmountPaidRawData=f}if(a.Copay.CanPay&&a.Copay.AmountDiscountedRawData>0)a.Copay.OriginalAmount=a.Copay.AmountDueRawData+a.Copay.AmountDiscountedRawData+a.Copay.AmountPaidRawData}}if(b.HasFuture)for(d=0;d<b.LaterVisitsList.length;d++){a=b.LaterVisitsList[d];if(a.EncounterType===c.UPCOMING_ADMISSION||a.EncounterType===c.UPCOMING_LD)if(a.EncounterType===c.UPCOMING_ADMISSION)a.VisitTypeName=$$WP.Strings.get("AdmissionWithoutService");else a.VisitTypeName=$$WP.Strings.get("LD")}if(!b.EmptyList){setTimeout(g._hightlightCalendar,1e3);g.HasFinishedLoading=h;g.ContainerComponent.resetSplitter();g.ContainerComponent.drawPastVisitListHeart()}$$WP.Strings.clearDefaultNamespace(e);g.Components$TemplateComponent$setData(b)},refresh:function(){this.Components$TemplateComponent$refresh();this.ContainerComponent.HeaderComponent.determineFilterButtonStatus()},_hightlightCalendar:function(){if(typeof window.sidebarContainer!=="undefined"){this.Data.MonthsMap="";window.sidebarContainer&&window.sidebarContainer._Components&&window.sidebarContainer._Components[0]&&window.sidebarContainer._Components[0]._Components&&window.sidebarContainer._Components[0]._Components[0]&&window.sidebarContainer._Components[0]._Components[0].setData(this.Data)}},_keydown:function(a){if(a.keyCode===13)return this._click(a)},_click:function(b){var j="reschedule",e="&fromlistpage=1",i="echeckin",h="visitdetails",g="inside.asp?mode=visitdetails&csn=",c=this,a,f;typeof b.dataId==="undefined"&&b.preventDefault();b.dataId==="ignore"&&b.preventDefault();var k=b.dataId;if(b.$dataId.is("li"))f=b.$dataId;else f=b.$dataId.closest("li.card");var d=f.index();switch(k){case"nextdetail":a=c.Data.NextNDaysVisits[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink(g+a.Csn));else c._h2gPopupHelper(a,a.Organization,h,{csn:a.Csn});b.preventDefault();break;case"laterdetail":a=c.Data.LaterVisitsList[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink(g+a.Csn));else c._h2gPopupHelper(a,a.Organization,h,{csn:a.Csn});b.preventDefault();break;case i:a=c.Data.NextNDaysVisits[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink("echeckin?csn="+a.CsnForECheckIn+e));else c._h2gPopupHelper(a,a.Organization,i,{csn:a.CsnForECheckIn});b.preventDefault();break;case"cancel":a=c.Data.NextNDaysVisits[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink("inside.asp?mode=apptdircancel&csn="+a.Csn+e));else $$WP.CommunityUtilities.openDeepLink("apptdircancel",a.Organization,{csn:a.Csn},null,function(){location.reload()},c);b.preventDefault();break;case"requestcancel":a=c.Data.NextNDaysVisits[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink("inside.asp?mode=apptcancel&csn="+a.Csn+e));else $$WP.CommunityUtilities.openDeepLink("apptcancel",a.Organization,{csn:a.Csn},null,function(){location.reload()},c);b.preventDefault();break;case j:a=c.Data.NextNDaysVisits[d];if(a.IsLocal)$$WP.Utilities.TryRedirect(makeLink("inside.asp?mode=apptmake&action=schednewstart&flow=reschedule&eCSN="+a.Csn));else $$WP.CommunityUtilities.openDeepLink("apptmake",a.Organization,{action:"schednewstart",flow:j,eCSN:a.Csn},null,function(){location.reload()},c);b.preventDefault()}},setFilter:function(b){var a=this;if(b===a.Filter)return;a.Filter=b;switch(b.split("~")[0]){case"None":case"organization":a.applyFilters();return;default:a.reload();return}},applyFilters:function(e){var a="hidden",b=this,i=b,j,k,h,m,g,l,f,c,d=0;h=b.$content.find("div.listsection");h.removeClass(a);m=b.$content.find(".latervisits");g=m.parent().parent();g.removeClass(a);l=b.$content.find(".sevendaysvisits");f=l.parent().parent();f.removeClass(a);c=b.$content.find("div.nodatalistelement");c.removeClass(a);l.children("li").each(function(f,c){var b=$afe.jq(c);if(i.shouldBeFiltered(i.Data.NextNDaysVisits[f],e)){if(!b.hasClass(a)){b.addClass(a);d++}}else if(b.hasClass(a)){b.removeClass(a);d--}});m.children("li").each(function(f,c){var b=$afe.jq(c);if(i.shouldBeFiltered(i.Data.LaterVisitsList[f],e)){if(!b.hasClass(a)){b.addClass(a);d++}}else if(b.hasClass(a)){b.removeClass(a);d--}});j=b.$content.find(".sevendaysvisits li.card:not(.hidden)");k=b.$content.find(".latervisits li.card:not(.hidden)");if(k.length===0)!g.hasClass(a)&&g.addClass(a);if(j.length===0)!f.hasClass(a)&&f.addClass(a);if(k.length===0&&j.length===0){!h.hasClass(a)&&h.addClass(a);c.hasClass(a)&&c.removeClass(a);var n=c.find("span");if(typeof e!=="undefined"&&e!==null&&e.length>0&&!b.NoUpcomingVisits)n.text($$WP.Strings.getForTemplate("NoUpcomingVisitsWithFilters","Visits"));else n.text($$WP.Strings.getForTemplate("NoUpcomingVisitsLabel","Visits"))}else!c.hasClass(a)&&c.addClass(a);b.$content.trigger("resize",{forceShrink:d>0})},shouldBeFiltered:function(c,a){var b=this;if(typeof a!=="undefined"&&a!==null&&a.length>0)return!b.__isVisitOrComponentInList(c,a);else{b.Filter=b.Filter||"";var d=b.Filter.split("~");return d[0]==="organization"&&c.Organization.OrganizationId!==d[1]}},__isVisitOrComponentInList:function(b,e){var c=0,d=null,a=false;if(e.indexOf(b.Dat)!==-1)a=true;else if(b.HasComponentVisits)for(c=0;c<b.ComponentVisits.length;c++){d=b.ComponentVisits[c];a=a||this.__isVisitOrComponentInList(d,e)}return a},html:function(b){var a;this.ContainerComponent.resetSplitter();this.Components$TemplateComponent$html(b);a=$afe.select(".PVGbanner");a.length>0&&a.unbind().bind("click",function(b){b.preventDefault();var a=new $$WP.Visits.PatientVisitGuide;a.generateFile()})}};$$WP.Visits.UpcomingVisitsListComponent.extend("Components.TemplateComponent")
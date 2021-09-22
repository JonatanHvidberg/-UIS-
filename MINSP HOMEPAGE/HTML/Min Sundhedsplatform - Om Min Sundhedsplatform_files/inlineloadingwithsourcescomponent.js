﻿/*! Copyright (c) Epic Systems Corporation 2016-2018 */
$$WPComp.InlineLoadingComponentWithSources=function WPComp$InlineLoadingComponentWithSources(b){var a=this;a.Components$TemplateComponent(b);if(a.AreaName!==null)a.Url=makeLink("Loading/GetStatus?AreaName="+a.AreaName);a.addEventListener("resize",a._resize);if(!$$WP.CommunityUtilities.hasCommunityLinks())a.Url=""};$$WPComp.InlineLoadingComponentWithSources.prototype={CommunicationsIndicator:false,$PermanentParent:null,Url:makeLink("Loading/GetStatus"),template:$$WP.Templates.Core.loading,IsClosable:false,TitleText:null,ToolbarButtons:null,Class:"inlineloading withsources",stopGetStatus:false,AreaName:null,statusIsCount:false,setData:function(a){a.DataFromMultipleSources=true;this.Components$TemplateComponent$setData(a);this.success(a)},success:function WPComp$InlineLoadingComponentWithSources$success(b){var l="@MYCHART@TOTALORGS@",k="@MYCHART@LOADEDORGS@",j="CommunityLoadingStatus",a=this;$$WP.Strings.setDefaultNamespace("community.externaljump");var h=0,g,i,e="",f,d;if(!$$WP.CommunityUtilities.hasCommunityLinks())return;if(b&&b.Organizations&&b.Organizations.length>0&&!a.stopGetStatus){for(f=0;f<b.Organizations.length;f++){var c=b.Organizations[f];if(c.Status!==1&&c.Status!==7){if(c.Organization&&c.Organization.OrganizationName!==null){d=c.Organization;break}}else h++}if(h===b.Organizations.length)g=$$WP.Strings.get(j);if(!d)d=b.Organizations[0].Organization;$$WP.Strings.setOrganization(d);$$WP.Strings.addMnemonic(k,h);$$WP.Strings.addMnemonic(l,b.Organizations.length);i=$$WP.Strings.get("CommunityLoadingStatusWithCounter");g=$$WP.Strings.get(j);$$WP.Strings.removeMnemonic(k);$$WP.Strings.removeMnemonic(l);$$WP.Strings.clearOrganization();if(a.statusIsCount)e=g;else e=i;a.statusIsCount=!a.statusIsCount;a._status=e;a.$content.find(".loadingStatus.loading").animate({opacity:0},350,function(){$afe.jq(this).empty().safeAppend(e)}).animate({opacity:1},350)}!a.stopGetStatus&&setTimeout($.proxy(function(){getCSRFTokenAsQS($.proxy(function(){this.makeRequest({success:this.success,dataType:"json",type:"POST",url:this.Url},"getStatus")},this))},a),300);$$WP.Strings.clearDefaultNamespace()},show:function WPComp$InlineLoadingComponentWithSources$show(b){var a=this;b=a.$PermanentParent||b;a.$container.parent().length===0&&a.$container.safeInsertBefore(b.children(".content"));a.$container.removeClass("resized");a.Components$TemplateComponent$show()},hide:function WPComp$InlineLoadingComponentWithSources$hide(){var b="loaded",a=this,c;if(a.DataFromMultipleSources){a.stopGetStatus=true;a.$container.find(".loadingStatus").remove();a.$container.find(".loadingExt").removeClass("loading").addClass(b);c=$$WP.SimpleTemplates.Div({"class":"subtlecolor loadingStatus","aria-hidden":"true"});$$WP.Strings.setDisplayText(c,"CommunityLoadedMessage","community.externaljump");a.$content.safeAppend(c);a.$container.addClass(b).on("transitionend",function(d){var a=this;if(d&&d.target&&!$afe.jq(a).hasClass("resized")&&$afe.jq(a).hasClass(b)){var c=$afe.jq(a).parent(".component:not(.inlineloading)").first();if(c){$afe.jq(c).css("height","").trigger("resize",{forceShrink:true});$afe.jq(a).addClass("resized")}}})}else a.Components$TemplateComponent$hide()},refresh:function WPComp$InlineLoadingComponentWithSources$refresh(){this.$container.removeClass("loaded resized");this.Components$TemplateComponent$refresh()},_resize:function(){return false}};$$WPComp.InlineLoadingComponentWithSources.extend("Components.TemplateComponent")
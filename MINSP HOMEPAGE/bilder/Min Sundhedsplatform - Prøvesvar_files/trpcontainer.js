/*! Copyright (c) Epic Systems Corporation 2017 */
$$WPUtil.guaranteeExistence($$WP,"Clinical.TestResultsPOC.Components");$$WP.Clinical.TestResultsPOC.Components.TRPContainer=function WPTestResults$TRPContainer(b){var a=this;a.IsRegistryFilterActive=b.IsRegistryFilterActive;a.HeaderComponent=new $$WP.Clinical.TestResultsPOC.Components.TRPHeaderFooterComponent({Url:null,template:$$WP.Templates.Clinical.TRPHeader,Class:"TestResultsHeader",header:true,IsRegistryFilterActive:a.IsRegistryFilterActive,resultsPopupComponentFocusIn:$.proxy(a._resultsPopupComponentFocusIn,a)});a.ListComponent=new $$WP.Clinical.TestResultsPOC.Components.TRPPopupComponent(b);a.FooterComponent=new $$WP.Clinical.TestResultsPOC.Components.TRPHeaderFooterComponent({Url:null,template:$$WP.Templates.Clinical.TRPFooter,Class:"resultsfooter",resultsPopupComponentFocusIn:$.proxy(a._resultsPopupComponentFocusIn,a)});b.Class="TRPContainer TRPTop";a.Containers$CommunityListManagerContainer(b);a.ListComponent.postProcessing(a.$content)};$$WP.Clinical.TestResultsPOC.Components.TRPContainer.prototype={SupportAnimations:false,IsClosable:false,TitleButtons:[],IsRegistryFilterActive:false,DisclaimerComponent:null,dispose:function $$WP$Clinical$Components$TRPContainer$dispose(){this.ListComponent.unbindHandlers();this.Containers$ContainerComponent$dispose()},_resultsPopupComponentFocusIn:function $$WP$Clinical$TestResultsPOC$Components$TRPContainer$_resultsPopupComponentFocusIn(h){var b=false,g=".TestResultsList .TRPComponentAbbrev:first-child",f="input.SearchList",a=this;switch(h.dataId){case"gotofocused":if(a.ContainerComponent.OpenedWith==="ViewMore"){var e=$afe.select(f);if(e.length==0)e=a.ListComponent.$content.find(g);e.focus();a.ContainerComponent.OpenedWith=""}else if(a.ContainerComponent.OpenedWith==="Card"){$afe.select(".TRPContent > .content").focus();a.ContainerComponent.OpenedWith=""}else a.ListComponent.$content.find(".selected").focus();return b;case"gotobottom":var c=null;c=a.$content.find("[data-id=loadmore]");if(c.length===0)c=a.ListComponent.$content.find(".TestResultsList .TRPComponentAbbrev:last-child");c.focus();return b;case"gototop":var d=$afe.select(f);if(d.length===0)if(a.IsRegistryFilterActive)d=a.ListComponent.$content.find(g);else d=a.ListComponent.$content.find(".TestResultsList .StickyHeaderBlock:first-child .TRPComponentAbbrev:first-child");d.focus();return b;case"loadmore":a.$content.scrollTop(a.$content[0].scrollHeight);return b}return true}};$$WP.Clinical.TestResultsPOC.Components.TRPContainer.extend("Containers.CommunityListManagerContainer")
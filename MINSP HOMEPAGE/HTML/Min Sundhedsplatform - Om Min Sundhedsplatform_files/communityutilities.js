$$WPUtil.guaranteeExistence($$WP,"CommunityUtilities");$$WP.CommunityUtilities.openDeepLink=function(A,e,n,g,t,u,m,y){var j="externalJumpWindow",h=true,i="cancel",c=null,a="community.externaljump",r="@MYCHART@OrganizationName@",k="object",p=[],b,l,q,s;if(!e||typeof e!==k){$$WP.Debug.log("Organization passed in to the function is null or not an object.");return}if(e.IncompleteH2GSetup){$$WP.Strings.addMnemonic(r,e.OrganizationName,"",a);q=new $$WPComp.MessageComponent({TitleText:$$WP.Strings.get("IncompleteH2GPopupTitle",a),Message:$$WP.Strings.get("IncompleteH2GPopupText",a),ToolbarButtons:[new $$WPComp.ComplexObjects.Button($$WP.Strings.get("OkayButtonText",a),c,i,"")]});$$WPUtil.quickPopup(q);$$WP.Strings.removeMnemonic(r,a);return}if($$WPUtil.IsNullOrEmpty(m)||isNaN(m))m="-1";if(!g)g=$$WP.CommunityUtilities.openDeepLinkType.InPopup;if(e.IsSSO){if(!g)s=h;g=$$WP.CommunityUtilities.openDeepLinkType.InNewTab}if(!$$WPUtil.IsNullOrEmpty(n)&&typeof n===k)for(var w in n)p.push({Name:w,Value:n[w]});l=document.location.protocol+"//"+document.location.hostname;if(!$$WPUtil.IsNullOrEmpty(document.location.port))l=l+":"+document.location.port;p.push({Name:"parentJumpGUID",Value:$$WP.CommunityUtilities.getExternalJumpGUID()},{Name:"parentDomain",Value:l},{Name:"lang",Value:MyChartLocale});var d={};d.mode=A;d.orgID=e.OrganizationId;d.parameters=p;d.patientIndex=m;closeAllWindows(j);var z=function(d){if(d&&typeof d==="string")d=$.parseJSON(d);if(d&&d.RedirectToSignup&&d.CommunityResponse===c){b.hide();$$WP.CommunityUtilities.ShowSignUpNotAllowedMessage(e);return}if(d&&d.CommunityResponse&&!$$WPUtil.IsNullOrEmpty(d.CommunityResponse.RedirectURL)){d.RedirectToSignup&&$$WP.CommunityUtilities.markCommunityLinkDirty(e.OrganizationId);if(!g){f.loadIframe(d);$$WP.CommunityUtilities.logDeepLinkAudit("3",e.OrganizationId)}else if(b&&b._Components&&b._Components.length>0){$$WP.Strings.setOrganization(d.CommunityResponse.Organization,a);var h=[new $$WPComp.ComplexObjects.Button($$WP.Strings.getForTemplate("Continue",a),c,"completeworkflow","continue"),new $$WPComp.ComplexObjects.Button($$WP.Strings.getForTemplate(i,a),c,"previousstep",i)];b._Components[0].setMessage($$WP.Strings.get("redirectMessage",a));b._Components[0].CallbackArgs=[d];b._Components[0].setToolbar(h);b.setFocus();b.$container.trigger("resize");$$WP.Strings.clearOrganization(a)}}else v()},x=function(a,d){if(d==="toolbarcontinue"){if(typeof a==="string")a=$.parseJSON(a);if(typeof a===k){var c,b;if(g===$$WP.CommunityUtilities.openDeepLinkType.InNewTab)c="";else if(g===$$WP.CommunityUtilities.openDeepLinkType.InNewWindow)c="scrollbars=1,resizable=1";if(a.CommunityResponse.IsSSOPost)b="";else b=a.CommunityResponse.RedirectURL;if(a.CommunityResponse.IsSSOPost){var f=openWindow(b,"",c,j,h);$$WPUtil.postForm(a.CommunityResponse.RedirectURL,a.CommunityResponse.SSOParams,f.name)}else openWindow(b,"",c,j,h);$$WP.CommunityUtilities.logDeepLinkAudit("4",e.OrganizationId);a.RedirectToSignup&&$$WP.CommunityUtilities.markCommunityLinkDirty(e.OrganizationId)}}},v=function(){var d;if(f){d=f.callback;f.callback=c;!g&&f.dispose()}b.hide();var e=new $$WPComp.MessageComponent({Message:$$WP.Strings.get("externalLinkErrorMessage",a),callback:function(){d&&f.runCallback(d)}}),h=new $$WPUtil.quickPopup(e);e.show();h.show()};if(g!==0){if(s)d.access="3";else d.access="4";b=$$WPUtil.quickMessageBox("<img src='"+makeStaticLink("images/spinner64.gif")+"' class='loadingSpinner' alt='"+$$WP.Strings.get("GenericLoadingMessage","Global")+"'/>",c,[],x,c,"externalJumpRequestPopup Popup")}else{d.access="3";var f,o;o={};if(t&&u){o.callback=t;o.context=u}f=new $$WPComp.ExternalJumpPopupComponent(o);f.initialize();b=new $$WPContain.Popup({Components:[f],positioningFunction:$$WPContain.Positions.InsideNearTop,Size:$$WPContain.Popup.SizeEnum.LARGE,Class:"externaljumppopup",CommunicationsIndicator:false,BackButtonText:$$WP.Strings.get("ExitPopup",a)});b.show(h)}if(y)d.access="5";d=$$WPUtil.postify(d);getCSRFTokenAsQS(function(){$.ajax({url:makeLink("ExternalJump/GetExternalJumpUrl"),type:"POST",data:d,dataType:"json",error:v,cache:false,success:z})})};$$WP.CommunityUtilities.openDeepLinkType={InPopup:0,InNewTab:1,InNewWindow:2};$$WP.CommunityUtilities.logDeepLinkAudit=function logDeepLinkAudit(b,c){var a={};a.access=b;a.orgID=c;getCSRFTokenAsQS(function(){$.ajax({url:makeLink("ExternalJump/LogExternalJumpAudit"),type:"POST",data:a,cache:false})})};$$WP.CommunityUtilities.markCommunityLinkDirty=function markCommunityLinkDirty(b){var a={};a.organizationId=b;getCSRFTokenAsQS(function(){$.ajax({url:makeLink("Community/External/MarkCommunityLinkDirty"),type:"POST",data:a,cache:false})})};$$WP.CommunityUtilities.refreshCommunityLink=function refreshCommunityLink(c){var b={},a=function refresh(){location.reload()};b.organizationId=c;getCSRFTokenAsQS(function(){$.ajax({url:makeLink("Community/External/RefreshCommunityLink"),type:"POST",data:b,cache:false,error:a,success:a})})};$$WP.CommunityUtilities.getExternalJumpGUID=function getExternalJumpGUID(){if($$WPUtil.IsNullOrEmpty($$WP.CommunityUtilities._externalJumpGUID))$$WP.CommunityUtilities._externalJumpGUID=$$WPUtil.generateRandomGUID();return $$WP.CommunityUtilities._externalJumpGUID};$$WP.CommunityUtilities.getParentJumpGUID=function getParentJumpGUID(){return!$$WPUtil.IsNullOrEmpty($$WP.CommunityUtilities._parentJumpGUID)?$$WP.CommunityUtilities._parentJumpGUID:""};$$WP.CommunityUtilities.clearJumpGUIDs=function clearJumpGUIDs(){$$WP.CommunityUtilities._externalJumpGUID=null;$$WP.CommunityUtilities._parentJumpGUID=null};$$WP.CommunityUtilities.setJumpParameters=function setJumpGUIDs(a,b){if(!$$WPUtil.IsNullOrEmpty(a))$$WP.CommunityUtilities._parentJumpGUID=a;if(!$$WPUtil.IsNullOrEmpty(b))$$WP.CommunityUtilities._parentDomain=b};$$WP.CommunityUtilities.getParentDomain=function getParentDomain(){return!$$WPUtil.IsNullOrEmpty($$WP.CommunityUtilities._parentDomain)?$$WP.CommunityUtilities._parentDomain:""};$$WP.CommunityUtilities.closeExternalParentPopup=function closeExternalParentPopup(){var a={},b;a.externalGUID=$$WP.CommunityUtilities.getParentJumpGUID();a.message="closePopup";b=$$WP.CommunityUtilities.getParentDomain();if(parent)try{parent.postMessage(JSON.stringify(a),b)}catch(c){console.error("Invalid Parent Domain")}WP.Comm.logOut();$$WP.CommunityUtilities.clearJumpGUIDs();$$WP.CommunityUtilities._parentDomain=null;if(self===top)self.location=makeLink("home/logout")};$$WP.CommunityUtilities.externalJumpMessageListener=function externalJumpMessageListener(a){var c=$$WP.CommunityUtilities.getParentDomain();if(a&&a.originalEvent&&a.originalEvent.origin===c&&a.originalEvent.data){var b=JSON.parse(a.originalEvent.data);if(b.message==="logout"){WP.Comm.logOut();$$WP.CommunityUtilities.clearJumpGUIDs()}else if(b.message==="valid")$$WP._isExternalJumpParentValid=true}};$$WP.CommunityUtilities.checkIfCommunityJumpIsValid=function checkIfCommunityJumpIsValid(){var a=$afe.select("body");if(a.hasClass("md_default")&&!a.hasClass("isPrelogin")&&!a.hasClass("PUpage"))self.location=makeLink("closeExternalJumpPopup.asp");else if(self!==top){if(self.window.location.href.toLowerCase().indexOf("/err.asp?")>0)return;var b={},c;b.message="isValidContext";b.externalGUID=$$WP.CommunityUtilities.getParentJumpGUID();c=$$WP.CommunityUtilities.getParentDomain();try{parent.postMessage(JSON.stringify(b),c)}catch(d){console.error("Parent Domain Validation failed")}setTimeout(function(){!$$WP._isExternalJumpParentValid&&top.location.replace(makeLink("home/logout"))},1e3)}};$$WP.CommunityUtilities.openDeepLinkUrl=function(g,f,b,c,d){var a=$$WPUtil.parseQueryString(g),e=a.mode;delete a.mode;$$WP.CommunityUtilities.openDeepLink(e,f,a,b,c,d)};$$WP.CommunityUtilities.ShowSignUpNotAllowedMessage=function(b){var a;$$WP.Strings.setDefaultNamespace("community.externallinking");$$WP.Strings.setOrganization(b);a=$$WP.Strings.get("SignupNotAllowedMessage");$$WP.Strings.clearOrganization();var c=[new $$WPComp.ComplexObjects.Button($$WP.Strings.get("ok","cancelpopup"),null,"previousstep","cancel")];$$WPUtil.quickMessageBox(a,"",c,null,null,"SignupNotAllowed");$afe.select(".SignupNotAllowed.component.Popup").removeClass("textlessTitle");$$WP.Strings.clearDefaultNamespace()};$$WP.CommunityUtilities.hasCommunityLinks=function hasCommunityLinks(){return $afe.select("body").hasClass("hasNoCommunityLinks")?false:true};$$WP.CommunityUtilities.communityChecksuccesscallback=function communityChecksuccesscallback(b){var c,a;if(b!==null&&typeof b!=="undefined"){a=b.isCommunityActive;if(a)c="hasCommunityLinks";else c="hasNoCommunityLinks";$.ajax({url:makeLink("session.asp?mode=updateCommunityActiveCheckFlags&IsCommunityActive="+a)});getCSRFTokenAsQS(function(){$.ajax({url:makeLink("Community/External/UpdateCommunityActiveCheckFlags"),type:"POST"})});$afe.select("body").removeClass("hasNoCommunityLinks hasCommunityLinks").addClass(c)}};$$WP.CommunityUtilities.clearCommunityLinksSessionStatus=function clearCommunityLinksSessionStatus(){$.ajax({url:makeLink("session.asp?mode=clearCommunityActiveCheckFlags")});getCSRFTokenAsQS(function(){$.ajax({url:makeLink("Community/External/ClearCommunityActiveCheckFlags"),type:"POST"})})};$$WP.CommunityUtilities.checkIfCommunityLinksAvailable=function checkIfCommunityLinksAvailable(){var a=$afe.select("body");if(a.hasClass("isPrelogin")||a.hasClass("termsPage"))return;getCSRFTokenAsQS(function(){$.ajax({url:makeLink("Community/External/IsCommunityActive"),dataType:"JSON",type:"POST",cache:false,success:$$WP.CommunityUtilities.communityChecksuccesscallback,failure:function(){$$WP.Debug.log("Community Links available ajax called failed.")}})})};$$WP.CommunityUtilities.getCommunityLinks=function(d,a,c,e){a=a||"*";d=d||function(){};e=e||window;c=c||[];var b=$$WP.CommunityUtilities.getCommunityLinks;if(b._links[a]){c.push(b._links[a]);return d.apply(e,c)}b._callback=d;b._args=c;b._context=e;b._waitingFor=a;getCSRFTokenAsQS(function(){$.ajax({url:makeLink("ExternalJump/GetCommunityLinks?requireSecurityForMode="+a),dataType:"JSON",type:"POST",cache:false,success:$$WP.CommunityUtilities.getCommunityLinks.callStack,failure:function(){$$WP.CommunityUtilities.getCommunityLinks.callStack({ForMode:a,Organizations:[]})}})})};$$WP.CommunityUtilities.getCommunityLinks.callStack=function(b){var a=$$WP.CommunityUtilities.getCommunityLinks;a._links[b.ForMode]=b.Organizations;if(b.ForMode===a._waitingFor&&typeof a._callback==="function"){a._args.push(b.Organizations);a._callback.apply(a._context,a._args)}a._waitingFor=null;a._callback=null};$$WP.CommunityUtilities.getCommunityLinks._links={};$$WP.CommunityUtilities.pickOrganization=function pickOrganization(b,d,a,c){$$WP.CommunityUtilities.getCommunityLinks(function getCommunityLinks(c){if(!c||c.length===0){a.push("1");b.apply(this,a);return}if(c.length===1){a.push(c[0]);b.apply(this,a);return}var h,i,g=[],e,f;f=c.length;if(f>3)f=3;for(e=0;e<c.length;e++)g.push(new $$WPComp.ComplexObjects.Button(new Handlebars.SafeString("<span class='orglogo roundedimage' style='background-image:url("+c[e].LogoUrl+");'></span> <span class='orgname'>"+c[e].OrganizationName+"</span>"),null,"CommunityLink community_"+f,e));h=new $$WPComp.MessageComponent({Message:d,callback:function(){if(arguments[arguments.length-1]==="close")return;arguments[arguments.length-1]=arguments[arguments.length-1].substr($$WPComp.TOOLBARIDENTIFIER.length);arguments[arguments.length-1]=this.links[arguments[arguments.length-1]];this.fun.apply(this,arguments)},CallbackArgs:a,CallbackContext:{links:c,fun:b},ToolbarButtons:g});i=$$WPUtil.quickPopup(h,{Size:g.length<3?$$WPContain.Popup.SizeEnum.SMALL:$$WPContain.Popup.SizeEnum.MEDIUM,Class:"PickOrganization"});i.show()},c)};$$WP.CommunityUtilities.getOrganization=function(d,c,b,a){if(typeof c!="function")return;a=a||window;b=b||[];$$WP.CommunityUtilities.getCommunityLinks(function(){for(var e=arguments[0],d=arguments[1],c=arguments[2],b=arguments[3],a=0;a<b.length;a++)if(b[a].OrganizationId===e){c.push(b[a]);break}d.apply(this,c)},null,[d,c,b],a)};$$WP.CommunityUtilities.createUpdateOrganizationURL=function createUpdateOrganizationURL(){var a,c=window.location.href;if($$WPUtil.IsAllergiesListUrl(c))a="allergies";else if($$WPUtil.IsHealthIssuesUrl(c))a="hlthissues";else if($$WPUtil.IsMedsListUrl(c))a="medslist";else if($$WPUtil.IsTestResultsUrl(c))a="labs";else if($$WPUtil.IsVisitsListUrl(c))a="visits";else if($$WPUtil.IsHealthSummaryUrl(c))a="snapshot";var b=makeLink("Community/Manage");b=addQueryStringToUrl(b,"tab","linked");if(!$$WPUtil.IsNullOrEmpty(a))b=addQueryStringToUrl(b,"from",a);if($$WP.Utilities.UI.IsMobile)b=addQueryStringToUrl(b,"backToPrevPage","true");return b}
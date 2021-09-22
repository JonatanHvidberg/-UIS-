﻿/*! Copyright (c) Epic Systems Corporation 2012-2019 */
WP=WP||{};WP.Controls=WP.Controls||{};if(typeof WP.Controls.ProgressSpinner==="undefined")WP.Controls.ProgressSpinner=function WP$Controls$ProgressSpinner(c,g,e,h){var i="progbar",b=this;g=g||"Vent et øjeblik ...";e=e||"block";h=h||64;var a=createElement("div",i,i),f=createImage("","","spinner64.gif",g),d=createElement("div",i,"progbartext"),j;b.isHidden=false;f.style.display=e;f.height=h;f.width=h;d.style.display=e;$T(d,g);a.appendChild(f);a.appendChild(d);c.appendChild(a);if(c.className==="hidden")c.className="";b.remove=function(){c.removeChild(a)};b.updateLabel=function(a){$T(d,a)};b.hide=function(){if(this.isHidden===true)return true;j=a.style.display;a.style.display="none";this.isHidden=true};b.show=function(){this.isHidden=false;a.style.display=j};SetActivity();j=a.style.display;return b};if(typeof WP.Controls.InfoButton==="undefined")WP.Controls.InfoButton=function WP$Controls$InfoButton(s,r,n,e,o,t,u,q,l,p,k,h,d,b){var f=true;$$WP.Debug.log("This function is deprecated. Do not use it in new development. If you are calling this function from a .NET activity, you *MUST* use $$WP.UI.InfoBubble instead.");var c=$afe.jq(s),a,g,i,m,j;d=d||"";b=b||"";n=n||"popupdiv";if(!(e||e===""))e="Anvisninger:";if(WP.DOM.Browser.isFirefox)m=" ";else m="";if(!o)o=m;a=$afe.jq(document.createElement("a")).safeAttr("href","#").safeAttr("role","tooltip").addClass("popupinstructionsicon").safeAttr("title",o);if(h===f)a=c.safeWrapAll(a).parent();a.on("click",function(){return false});p&&a.prop("tabindex",p);if(q)a.on("click",q);if(h!==f)if(l&&l.length>0)a.safeAppend(dangerou$.parseHtml("<span>"+l+"</span>"));else{if(!k)k="images/info.png";j="Se anvisninger.";if(d&&b)j=$$WP.Strings.get(d,b);a.safeAppend($afe.jq(document.createElement("img")).safeAttr("src",makeStaticLink(k)).safeAttr("alt",j).safeAttr("data-altnode",d))}g=$$WP.SimpleTemplates.Div({"class":"popupInstructions card extraWide hidden",id:"popup_"+n,title:""});dangerou$.setHtml(g,r);if(e!==""){i=$afe.jq(document.createElement("span")).addClass("header");dangerou$.setHtml(i,e);g.safePrepend(i)}if(h===f)c=a.safeWrapAll($afe.jq(document.createElement("div")).addClass("popupiconcontainer")).parent();c.safeAppend(a);c.safeAppend(g);$endanchor=$$WP.SimpleTemplates.Anchor({href:"#","class":"clearlabel clickable","data-id":"endanchor"});c.safeAppend($endanchor);c.hover(function(a){$$WPUtil.handlePopupInstructions(a,b)});a.focus(function(a){$$WPUtil.handlePopupInstructions(a,b)});a.focusout(function(a){$$WPUtil.handlePopupInstructions(a,b)});$endanchor.keyup(function(a){$$WPUtil.handlePopupEndAnchor(a,b)});return f};if(typeof WP.Controls.Recaptcha==="undefined"){WP.Controls.Recaptcha={};WP.Controls.Recaptcha.showReCAPTCHA=function(b,d,c){var a={};a.lang=d;a.callback=WP.Controls.Recaptcha.callback;a.tabindex=a.x;Recaptcha.create(c,b,a)};WP.Controls.Recaptcha.callback=function(){try{var a=document.getElementById("recaptcha_response_field").placeholder;$afe.select("#recaptcha_response_placeholder").text(a)}catch(b){}};WP.Controls.Recaptcha.doCheck=function(){var k="retypepassalert",j="Sikkerhedsspørgsmålet er påkrævet.",i="questionansweralert",g=document.getElementById("g-recaptcha-response"),d=document.getElementById("newquestion"),c=document.getElementById("questionanswer"),h=document.getElementById("twofactorcode"),e=true,f,a,b=document.getElementById("newpasswd"),l=document.getElementById("verifypasswd");a=function(d,c,b){var a=false;if(b!==""){e&&d.focus();e=false;a=true}$T(document.getElementById(c),b);return a};h&&a(h,"twofactorcodealert",!h.value?"Koden er påkrævet.":"");g&&a(g,"captchaalert",!g.value?"Du skal indtaste CAPTCHA-koden ovenfor, før du kan logge på.":"");c&&a(c,i,!c.value?"Svaret på dit sikkerhedsspørgsmål er påkrævet.":"");if(d){f="";if(d.tagName==="SELECT"){if(d.value==="0")f=j}else if(!d.value)f=j;a(d,"questionalert",f);e&&c.value&&d.value.indexOf(c.value)!==-1&&a(c,i,"Svaret på dit sikkerhedsspørgsmål må ikke være indeholdt i spørgsmålet.")}if(b)!a(b,"newpassalert",!b.value?"Du skal indtaste en ny adgangskode.":"")&&!a(b,k,!l.value?"Du skal indtaste adgangskoden igen.":"")&&a(b,k,l.value!==b.value?"Din nye adgangskode og den genindtastede adgangskode stemmer ikke overens.":"");e&&WP.Events.cancelBeforeUnload();return e};WP.Controls.Recaptcha.formatCode=function WPControls$formatTwoAuth(){var b=document.getElementById("twofactorcode"),a=b.value;a=a.toUpperCase();b.value=a.replace(/^\s+|s+$/g,"")}}WP.Controls.Browse=WP.Controls.Browse||{};WP.Controls.Browse.getTimeOutFun=function(a,b){return function(){if(b!==a.timeOutChecks)return;if(a.uploading!==true)return;a.src=$$WPUtil.addUrlParameter(a.src,"Error","waytoobig");a.timedOut=true;WP.Events.addListener(a.nextElement,"keydown",a.nextElemTab);WP.Events.addListener(a.previousElement,"keydown",a.prevElemTab)}};if(typeof WP.Controls.ScrollIndicator==="undefined"){WP.Controls.ScrollIndicator={};WP.Controls.ScrollIndicator._didBindRedrawHandler=false;WP.Controls.ScrollIndicator.addTo=function(b,g){var d=".scrollIndicator",a=$afe.jq(b),c=a.parent(),f,e;if(c.find(d).length>0)return;a.safeBefore($afe.jq(document.createElement("span")).addClass("scrollIndicator right"));a.safeBefore($afe.jq(document.createElement("span")).addClass("scrollIndicator left"));a.addClass("hasScrollIndicator");f=c.children(".scrollIndicator.left");e=c.children(".scrollIndicator.right");c.on("click touchstart",d,function(e){var c,d=$afe.jq(this).hasClass("left")?-1:1;c=g||.25*b.clientWidth;a.animate({scrollLeft:"+="+d*c},200);e.preventDefault()});b.draw=WP.Controls.ScrollIndicator.Draw;b.draw();a.on("scroll touchmove",WP.Controls.ScrollIndicator.UpdateScrollIndicatorOpacity);if(!this._didBindRedrawHandler){this._didBindRedrawHandler=true;$afe.jq(window).on("resize orientationchange",WP.Controls.ScrollIndicator.RedrawIndicators)}};WP.Controls.ScrollIndicator.UpdateScrollIndicatorOpacity=function(){var c=this,g=c.scrollWidth-c.clientWidth,d=15,e=1,f=$afe.jq(c).parent(),a=1,b="visible";a=e*Math.min(1,$afe.jq(c).scrollLeft()/d);if(a<=0)b="hidden";f.children(".scrollIndicator.left").css({opacity:a,visibility:b});b="visible";a=e*Math.min(1,(g-d-$afe.jq(c).scrollLeft())/d);if(a<=0)b="hidden";f.children(".scrollIndicator.right").css({opacity:a,visibility:b})};WP.Controls.ScrollIndicator.Draw=function(){var f=".scrollIndicator",a=this,d=$afe.jq(a),c=$afe.jq(a).parent(),e=c.children(".scrollIndicator.left"),b=c.children(".scrollIndicator.right");if(a.scrollWidth<=a.clientWidth){c.find(f).css("opacity",0);return}else $.proxy(WP.Controls.ScrollIndicator.UpdateScrollIndicatorOpacity,a)();c.find(f).css({top:a.offsetTop,height:a.clientHeight});Math.round(d.position().left)!==Math.round(e.position().left)&&e.css("left",d.position().left);Math.round(d.position().left+a.clientWidth)!==Math.round(b.position().left+b.width())&&b.css("left",d.position().left+a.clientWidth-b.width())};WP.Controls.ScrollIndicator.RedrawIndicators=function(b){var a=0;if(b.type==="resize")a=10;setTimeout(function(){$afe.select(".hasScrollIndicator").each(function(){this.draw&&this.draw()})},a)}}if(typeof WP.Controls.UploadButtonFocus==="undefined"){WP.Controls.UploadButtonFocus={};WP.Controls.UploadButtonFocus._divButtonID;WP.Controls.UploadButtonFocus.startListener=function(a){window.addEventListener("message",WP.Controls.UploadButtonFocus.messageResponse);WP.Controls.UploadButtonFocus._divButtonID=a};WP.Controls.UploadButtonFocus.messageResponse=function(c){var a="uploadButtonFocus",b=$afe.select("#"+WP.Controls.UploadButtonFocus._divButtonID);if(c.data==="uploadFocus")b.addClass(a);else c.data==="uploadBlur"&&b.removeClass(a)};WP.Controls.UploadButtonFocus.uploadFocus=function(){origin=window.location.href;parent.postMessage("uploadFocus",origin)};WP.Controls.UploadButtonFocus.uploadBlur=function(){origin=window.location.href;parent.postMessage("uploadBlur",origin)}}function schedPrefTimeButtonClick(i){var h=".timeTable #daytimetable",c="hidden",g="#schedpref",b="selected",a="unselected",d,e,f;d=$afe.select("#allavaillabel");e=$afe.select("#schedpreflabel");f=$afe.select("#schedotherlabel");if(i==="1"){d.removeClass(a).addClass(b);e.removeClass(b).addClass(a);f.removeClass(b).addClass(a);$afe.select(g).addClass(c);$afe.select(h).addClass(c)}if(i==="2"){e.removeClass(a).addClass(b);d.removeClass(b).addClass(a);f.removeClass(b).addClass(a);$afe.select(g).removeClass(c);$afe.select(h).addClass(c)}if(i==="3"){f.removeClass(a).addClass(b);d.removeClass(b).addClass(a);e.removeClass(b).addClass(a);$afe.select(g).addClass(c);$afe.select(h).removeClass(c)}$afe.jq(window).trigger("matchColumnHeights")}
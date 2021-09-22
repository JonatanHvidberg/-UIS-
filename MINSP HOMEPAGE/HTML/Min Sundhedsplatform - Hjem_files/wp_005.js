﻿/*! Copyright (c) Epic Systems Corporation 2012-2017 */
if(!("ELEMENT_NODE"in document)){document.ELEMENT_NODE=1;document.ATTRIBUTE_NODE=2;document.TEXT_NODE=3;document.CDATA_SECTION_NODE=4;document.ENTITY_REFERENCE_NODE=5;document.ENTITY_NODE=6;document.PROCESSING_INSTRUCTION_NODE=7;document.COMMENT_NODE=8;document.DOCUMENT_NODE=9;document.DOCUMENT_TYPE_NODE=10;document.DOCUMENT_FRAGMENT_NODE=11;document.NOTATION_NODE=12}if(typeof WP==="undefined")WP={};if(typeof WP.DOM==="undefined")WP.DOM={};if(typeof WP.DOM.Add==="undefined")WP.DOM.Add={};if(typeof WP.DOM.Search==="undefined")WP.DOM.Search={};if(typeof WP.DOM.Browser==="undefined")WP.DOM.Browser={};WP.DOM.Browser._getAndroidVersion=function(){var b,c=-1,a;if(WP.DOM.Browser.isAndroid){b=new RegExp(/Android [\d+\.]{3,5}/);a=b.exec(navigator.userAgent);if(a!=null)c=a[0].replace("Android ","")}return c};WP.DOM.Browser._getIEVersion=function(){var a,b=-1;if(navigator.appName=="Microsoft Internet Explorer"){a=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(a.exec(navigator.userAgent)!=null)b=parseFloat(RegExp.$1)}return b};WP.DOM.Browser._getIEDocumentMode=function(){return WP.DOM.Browser.IEVersion===-1?-1:typeof arguments.caller!=="object"?9:8};WP.DOM.Browser.isSafari=navigator.userAgent.toLowerCase().match(/safari/)!==null&&navigator.userAgent.toLowerCase().match(/chrome/)===null;WP.DOM.Browser.isOmniweb=navigator.userAgent.toLowerCase().match(/omniweb/)!=null;WP.DOM.Browser.isOpera=navigator.userAgent.toLowerCase().match(/opera/)!=null;WP.DOM.Browser.userAgent=navigator.userAgent;WP.DOM.Browser.isIE=navigator.appVersion.match(/MSIE/)!=null||!!navigator.userAgent.match(/Trident.*rv\:11\./);WP.DOM.Browser.isEdge=!!navigator.userAgent.match(/Edge\//);WP.DOM.Browser.IEVersion=WP.DOM.Browser._getIEVersion();WP.DOM.Browser.IEDocMode=WP.DOM.Browser._getIEDocumentMode();WP.DOM.Browser.isNewIE=WP.DOM.Browser.isIE&&WP.DOM.Browser.IEVersion>=8;WP.DOM.Browser.isOldIE=WP.DOM.Browser.isIE&&!WP.DOM.Browser.isNewIE;WP.DOM.Browser.isFirefox=WP.DOM.Browser.userAgent.match(/firefox/i)!=null;WP.DOM.Browser.isOldFirefox=WP.DOM.Browser.isFirefox&&(WP.DOM.Browser.userAgent.match(/firefox\/2./i)!=null||WP.DOM.Browser.userAgent.match(/firefox\/1./i)!=null);WP.DOM.Browser.isNewFirefox=WP.DOM.Browser.isFirefox&&!WP.DOM.Browser.isOldFirefox;WP.DOM.Browser.isWebKit=navigator.appVersion.match(/WebKit/)!=null;WP.DOM.Browser.isChrome=navigator.appVersion.match(/Chrome/)!=null;WP.DOM.Browser.orientation=window.orientation;WP.DOM.Browser.isAndroid=navigator.userAgent.match(/Android/i);WP.DOM.Browser.isWebOS=navigator.userAgent.match(/webOS/i);WP.DOM.Browser.isIPhone=navigator.userAgent.match(/iPhone/i);WP.DOM.Browser.isIPad=navigator.userAgent.match(/iPad/i);WP.DOM.Browser.isIPod=navigator.userAgent.match(/iPod/i);WP.DOM.Browser.isBlackBerry=navigator.userAgent.match(/BlackBerry/i);WP.DOM.Browser.isWindowsPhone=navigator.userAgent.match(/Windows Phone/i);WP.DOM.Browser.isMobile=WP.DOM.Browser.isAndroid||WP.DOM.Browser.isWebOS||WP.DOM.Browser.isIPhone||WP.DOM.Browser.isIPad||WP.DOM.Browser.isIPod||WP.DOM.Browser.isBlackBerry||WP.DOM.Browser.isWindowsPhone||navigator.userAgent.toLowerCase().match(/mobile/i);if(typeof WP.DOM.Create==="undefined")WP.DOM.Create={};WP.DOM.Create.tag=function(f,b,e,d,c){var a=document.createElement(f||"div");if(!a)return null;if(b)a.className=b;if(e)a.id=e;if(d)a.title=d;c&&dangerou$.setHtml(a,c);return a};WP.DOM.Create.anchoredNode=function(c,b,d){var a=document.createElement("a");a.href="#";b=b||false;if(b)dangerou$.setHtml(a,c);else a.appendChild(document.createTextNode(HTMLUnencode(c)));if(d)a.title=d;WP.Events.addListener(a,"click",function(){return false});return a};if(typeof WP.DOM.Read==="undefined")WP.DOM.Read={};WP.DOM.Read.getStyle=function(a,e){var c=e.split("-"),f=c[0],b,d;if(typeof a==="string")a=document.getElementById(a);if(!a||a.nodeName==="#text"||a.nodeName==="#comment")return;for(b=1;b<c.length;b++)f+=c[b].charAt(0).toUpperCase()+c[b].slice(1);if(a.currentStyle)d=a.currentStyle[f];else if(window.getComputedStyle)try{d=document.defaultView.getComputedStyle(a,null).getPropertyValue(e)}catch(g){d=""}return d};WP.DOM.Read.getBorderWidth=function(b){var a={};a.left=parseInt(WP.DOM.Read.getStyle(b,"border-left-width"),10);a.top=parseInt(WP.DOM.Read.getStyle(b,"border-top-width"),10);a.right=parseInt(WP.DOM.Read.getStyle(b,"border-right-width"),10);a.bottom=parseInt(WP.DOM.Read.getStyle(b,"border-bottom-width"),10);return a};WP.DOM.Read.getAbsolutePosition=function(c){var f=null;if(typeof c==="string")c=document.getElementById(c);if(!c)return;var a={x:0,y:0},i,k,g,h,d,b,e,j;if(c!==f)if(c.getBoundingClientRect){i=document.documentElement;k=c.getBoundingClientRect();g=window.pageXOffset;h=window.pageYOffset;if(!g)g=i.scrollLeft;if(!h)h=i.scrollTop;a.x=k.left+g;a.y=k.top+h}else{a.x=c.offsetLeft;a.y=c.offsetTop;d=c.parentNode;b=c.offsetParent;e=f;while(b!=f){a.x+=b.offsetLeft;a.y+=b.offsetTop;j=b.tagName.toLowerCase();if(WP.DOM.Browser.isOldIE&&j!="table"||(WP.DOM.Browser.isNewFirefox||WP.DOM.Browser.isChrome)&&j=="td"){e=WP.DOM.Browser.getBorderWidth(b);a.x+=e.left;a.y+=e.top}if(b!=document.body&&b!=document.documentElement){a.x-=b.scrollLeft;a.y-=b.scrollTop}if(!WP.DOM.Browser.isIE||WP.DOM.Browser.isNewIE)while(b!=d&&d!==f){a.x-=d.scrollLeft;a.y-=d.scrollTop;if(WP.DOM.Browser.isOldFirefox||WP.DOM.Browser.isWebKit){e=WP.DOM.Browser.getBorderWidth(d);a.x+=e.left;a.y+=e.top}d=d.parentNode}d=b.parentNode;b=b.offsetParent}}a.x=parseInt(a.x,10);a.y=parseInt(a.y,10);return a};if(typeof WP.DOM.Search==="undefined")WP.DOM.Search={};WP.DOM.Search.getPrevious=function(c){var a,b;b=function(b){if(!b)return null;if(b.previousSibling){a=b.previousSibling;while(a.lastChild)a=a.lastChild;return a}return b.parentNode};a=b(c);while(a.nodeName==="#text"||a.nodeName==="#comment")a=b(a);return a};WP.DOM.Search.getNext=function(c){var a,b;b=function(b){if(b&&b.firstChild)return b.firstChild;var a=b;while(a!==null){if(a.nextSibling)return a.nextSibling;a=a.parentNode}return a};a=b(c);while(a.nodeName==="#text"||a.nodeName==="#comment")a=b(a);return a};WP.DOM.Search.getPreviousFiltered=function(a,b){if(typeof a==="undefined"){a={};a[document.ELEMENT_NODE]=1;a[document.ATTRIBUTE_NODE]=1}return WP.Utils.iterateFindNext(WP.DOM.Search.getPrevious,function(b){return b&&a[b.nodeType]},b)};WP.DOM.Search.getNextFiltered=function(a,b){if(typeof a==="undefined"){a={};a[document.ELEMENT_NODE]=1;a[document.ATTRIBUTE_NODE]=1}return WP.Utils.iterateFindNext(WP.DOM.Search.getNext,function(b){return b&&a[b.nodeType]},b)};WP.DOM.Search.getFocused=function(b,d){var c,a=d===true?parent.document:document;try{c=a.querySelector&&a.querySelector(":focus")||a.activeElement||b;return c}catch(e){return b}};if(typeof WP.DOM.Test==="undefined")WP.DOM.Test={};WP.DOM.Test.beingRendered=function(a){return a.nodeType===document.DOCUMENT_NODE?true:WP.DOM.Read.getStyle(a,"display")!="none"&&(/colgroup|col|thead|tbody|tfoot|tr|td|th/.test(a.tagName)?WP.DOM.Read.getStyle(a,"visibility")=="collapse":true)&&WP.DOM.Test.beingRendered(a.parentNode)};WP.DOM.Test.canFocus=function(a){if(!WP.DOM.Test.beingRendered(a)||a.nodeName==="#text"||a.nodeName==="#comment")return false;var b=parseInt(a.getAttribute("tabindex"));return!isNaN(b)?b>=0:/^button|input|object|select|textarea$/i.test(a.nodeName)||a.href&&/^a|area$/i.test(a.nodeName)?!a.disabled&&!a.readOnly&&a.type!=="hidden":false};WP.DOM.Test.canFocusViaNavigation=function(a){return WP.DOM.Test.canFocus(a)&&(a.tabIndex||0)>=0};WP.DOM.Search.getPreviousFocusable=function(a){return WP.Utils.iterateFindNext(WP.DOM.Search.getPrevious,WP.DOM.Test.canFocus,a)};WP.DOM.Search.getNextFocusable=function(a){return WP.Utils.iterateFindNext(WP.DOM.Search.getNext,WP.DOM.Test.canFocus,a)};WP.DOM.Add.addCSSRules=function(a,c){var b;if("insertRule"in a){var d=/([\s\S]*?)\{([\s\S]*?)\}/g;while(b=d.exec(c))a.insertRule(b[0],a.cssRules.length)}else if("cssText"in a)a.cssText+=c};WP.DOM.Search.findStyleSheet=function(c){for(var b=document.styleSheets,a=0;a<b.length;a++)if(b[a].href.lastIndexOf(c)==b[a].href.length-c.length)return b[a];return null};WP.DOM.Add.addStyleSheet=function(){var d=document.getElementsByTagName("head")[0],b=document.createElement("style"),c,a;d.appendChild(b);for(a=0;a<document.styleSheets.length;a++){c=document.styleSheets[a].ownerNode||document.styleSheets[a].owningElement;if(c===b)return document.styleSheets[a]}};WP.DOM.Add.addCSSRule=function(a,b){if("insertRule"in a)a.insertRule(b,a.cssRules.length);else if("cssText"in a)a.cssText+=b};WP.DOM.Search.getLastFocusable=function(a){while(a.lastChild)a=a.lastChild;return!WP.DOM.Test.canFocus(a)?WP.DOM.Search.getPreviousFocusable(a):a}
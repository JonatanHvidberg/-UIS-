﻿/*! Copyright (c) Epic Systems Corporation 2011 - 2016 */
if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};if(typeof WP==="undefined")WP={};if(typeof WP.Strings==="undefined")WP.Strings={};WP.Strings.isEmpty=function(a){return WP.Strings.lTrim(a).length===0};WP.Strings.lTrim=function(a){return a.replace(/^\W+/g,"")};WP.Strings.getTextWidth=function(d,e){var b,c,a;if(!d||!e)return 0;a=$afe.jq(e);b=dangerou$.parseHtml("<div>"+d+"</div>");b.css({position:"absolute","float":"left","white-space":"nowrap",visibility:"hidden",width:"auto"});b.css({"font-style":a.css("font-style"),"font-variant":a.css("font-variant"),"font-weight":a.css("font-weight")});b.css({"font-size":a.css("font-size"),"font-family":a.css("font-family"),"line-height":a.css("line-height")});b.safeAppendTo(document.body);c=b.width();b.remove();return c}
﻿/*! Copyright (c) Epic Systems Corporation 2012-2018 */
function findBackground(a,f,c){var b,d,e;a=a.trim();if(a===""||c.backgroundColor)return;b=a.split(":");if(b.length<2)return;d=b[0].trim(),e=b[1].trim();if(d!=="background-color")return;c.backgroundColor=e}function fixBorders(a,g,d){var c,b,e,f;a=a.trim();if(a==="")return;b=a.split(":");e=b[0].trim(),f=b[1].trim();c=d.backgroundColor;if(new RegExp("border").test(e))if(new RegExp(c+"|transparent").test(f))d[g]=""}function fixFontColor(){var a="";if(a.length===0)return;a=a.replace(" ","");a=a.replace(",",'"], .report [color="');a='.report [color="'+a+'"]';$afe.select(a).each(function(){$afe.jq(this).safeAttr("color","")})}function printColor(){$afe.select("html").addClass("printcolor")}var initReportStyles=function(b){var f=WP.DOM.Add.addStyleSheet(),i,e,c,d,a,g,h;$afe.jq(f.ownerNode).addClass("initReportStyles");h=$afe.select(".section .report .rpt").length>0;if(!h){b=b.replace(/pt;/g,"px;");b=b.replace(/pt /g,"px ")}i=/([\s\S]*?)\{([\s\S]*?)(\}+)/g;while(e=i.exec(b)){c=e[1],d=e[2],closingBrackets=e[3];a=d.split(";");a.forEach(findBackground);if(a.backgroundColor){a.forEach(fixBorders);a.backgroundColor=""}d=a.join(";");if(/\.rz_\w+/.test(c.trim())){g=".section .report "+c;WP.DOM.Add.addCSSRule(f,g+" { "+d+closingBrackets)}else c.indexOf("@page")<0&&WP.DOM.Add.addCSSRule(f,c+" { "+d+closingBrackets)}fixFontColor();printColor()}
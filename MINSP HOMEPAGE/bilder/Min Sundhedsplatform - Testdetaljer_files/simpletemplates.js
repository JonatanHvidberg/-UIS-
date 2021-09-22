/*! Copyright (c) Epic Systems Corporation 2016-2018 */
(function WP$ST$Setup(){var b="string",d,f,a,e;$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.Div");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.Span");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.Img");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.Label");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.ErrorLabel");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.WarningIcon");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.MessageDisplay");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.Anchor");$$WPUtil.guaranteeExistence($$WP,"SimpleTemplates.ValidationMessage");e=/(\w*="[^"]+")|(\w*='[^']+')/g;d=function WP$ST$CA(i){var g=" is not a valid attribute.",f,c,j,d,h,k,a;if(i&&typeof i!==b){$$WP.Debug.logError("attributesStr is not a string.");return{}}f=i.match(e);if(!f||f.length<1){$$WP.Debug.logError("attributesStr does not contain any attributes.");return{}}h={};for(c=0;c<f.length;c++){j=f[c];if(j){d=j.split("=");if(d&&d.length===2){k=d[0].trim();a=d[1].trim();a=a.substring(1,a.length-1);a=a.trim();h[k]=a}else $$WP.Debug.logError("piece "+c+g)}else $$WP.Debug.logError("piece"+c+g)}return h};f=function WP$ST$SA(f,a){var e="data-generated-by",c,g;if(!f||f.length===0){$$WP.Debug.logError("$newElement does not contain any elements!");return}if(!a)a={};else if(typeof a===b)a=d(a);if($$WP.Debug.IsEnabled&&"name"in Function&&typeof a[e]==="undefined")try{c=arguments.callee.caller;while(c&&c.name.indexOf("WP$ST")===0)c=c.caller;if(c)a[e]=c.name}catch(h){}for(g in a)f.safeAttr(g,a[g])};a=function WP$ST$SUE(c,d,a){f(c,d);if(a)if(typeof a===b)c.text(a);else c.safeAppend(a);return c};$$WP.SimpleTemplates.Div=function WP$ST$Div(d,c){var b;b=$afe.jq(document.createElement("div"));a(b,d,c);return b};$$WP.SimpleTemplates.Span=function WP$ST$Span(d,c){var b;b=$afe.jq(document.createElement("span"));a(b,d,c);return b};$$WP.SimpleTemplates.Img=function WP$ST$Img(c){var b;b=$afe.jq(document.createElement("img"));a(b,c);return b};$$WP.SimpleTemplates.Label=function WP$ST$Label(d,c){var b;b=$afe.jq(document.createElement("label"));a(b,d,c);return b};$$WP.SimpleTemplates.ErrorLabel=function WP$ST$ErrorLabel(){return $$WP.SimpleTemplates.Span({"class":"clearlabel"},$$WP.Strings.get("ErrorLabelText"))};$$WP.SimpleTemplates.WarningIcon=function WP$ST$WarningIcon(d){var a,b,e=makeStaticImageLink("error_circle.png");a={src:e,"class":"yield",alt:""};if($.type(d)==="object"){$$WPUtil.mergeObjects(d,a,false,true);b=$$WP.SimpleTemplates.Img(a)}else{if(c===null)c=$$WP.SimpleTemplates.Img(a);b=c.clone()}return b};var c=null;$$WP.SimpleTemplates.MessageDisplay=function WP$ST$MessageDisplay(c,a){var b={"class":"messagedisplay invisible","data-message-for":c,"data-script-generated":null};a&&typeof a==="object"&&$$WPUtil.mergeObjects(a,b,false,true);return $$WP.SimpleTemplates.Div(b,"|")};$$WP.SimpleTemplates.Anchor=function WP$SimpleTemplates$Anchor(d,c){var b;b=$afe.jq(document.createElement("a"));a(b,d,c);return b};$$WP.SimpleTemplates.Option=function WP$SimpleTemplates$Option(d,c){var b;b=$afe.jq(document.createElement("option"));a(b,d,c);return b};$$WP.SimpleTemplates.ValidationMessage=function WP$SimpleTemplates$ValidationMessage(d,b){var c;b=b||{};b.class=b.class||"";b.class+=" alert validationmessage";c=$afe.jq(document.createElement("div"));a(c,b,d);c.safePrepend($$WP.SimpleTemplates.ErrorLabel());c.safePrepend($$WP.SimpleTemplates.WarningIcon());return c}})()
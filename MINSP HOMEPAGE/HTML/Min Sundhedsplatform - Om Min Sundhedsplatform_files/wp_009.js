﻿/*! Copyright (c) Epic Systems Corporation 2012 - 2017 */
var WP=WP||{};if(typeof WP.TelehealthUtils==="undefined")WP.TelehealthUtils={};WP.TelehealthUtils.flashPopup=function(b){var a;a=window.open("","history","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=800,height=600");if(a.closed||!a.document.URL||a.document.URL.indexOf("about")===0)a.location=b;else window.setTimeout(a.focus,1)};WP.TelehealthUtils.telemedPopup=function(b){var a;a=window.open(b,"history","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=1,width=1280,height=720");a.opener=window;if(a.closed||!a.document.URL||a.document.URL.indexOf("about")===0)a.location=b;else window.setTimeout(a.focus,1)};WP.TelehealthUtils.telemedExecuteFDI=function(c,b){var a,d;a=WP.FdiUtils.buildFDILinkParamString(c,b,"","");$.ajax({url:makeLink("Extensibility/Redirection/FdiData"+a),type:"POST",success:function(b){WP.FdiUtils.fdiJSONSuccess(b,a)}})};WP.TelehealthUtils.keepAliveMessageIfInActiveVisit=function(a){$.ajax({url:makeLink("TelemedicineHome/IsPatientInActiveVideoVisit"),type:"POST",success:a,async:false})}
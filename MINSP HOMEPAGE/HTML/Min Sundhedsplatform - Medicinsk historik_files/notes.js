﻿/*! Copyright (c) Epic Systems Corporation 2009-2016 */
function setUpNotesBox(c,b){var d=document.getElementById(c+"NotesForm"),a=d.getElementsByTagName("pre")[0];if(document.location.toString().indexOf("printmode")===-1){a.style.cursor="pointer";a.style.cursor="hand";a.title=b}}function editNotes(g){var e="data-checksforunsaveddata";if(document.location.toString().indexOf("printmode")!==-1)return false;var a=document.getElementById(g+"NotesForm"),f=a.getElementsByTagName("pre")[0],c=a.ta,b=f.firstChild.firstChild.nodeValue,h=a.leader.value,d;b=b.replace(h,"");b=b.trim();f.className="hidden";c.className="";a.cancelBtn[0].className="button cancelworkflow";a.saveBtn.className="button inlinesave";c.focus();if(b.length>0)c.value=b;else c.value="";$afe.jq(c).trigger("input");d=$afe.jq(a);if(d.safeAttr(e)!=="1"){$$WPBehav.unsavedDataLightbox(a);d.safeAttr(e,"1")}}function saveSelections(g){for(var a,c,f,e="",b,d=0;d<document.forms.length;d++){f=document.forms[d];c=f.getElementsByTagName("input");for(b=0;b<c.length;b++){a=c[b];if(a.type!="checkbox")continue;if(a.className.indexOf("hidden")!==-1)continue;e+=a.checked+"|"}}g.savedCheckboxes.value=e}function restoreSelections(h){var b=document.getElementById(h);if(!b)return;if(!b.savedCheckboxes)return;if(!b.savedCheckboxes.value)return;for(var i=b.savedCheckboxes.value.split("|"),a,d,f,g=0,c,e=0;e<document.forms.length;e++){f=document.forms[e];d=f.getElementsByTagName("input");for(c=0;c<d.length;c++){a=d[c];if(a.type!="checkbox")continue;if(a.className.indexOf("hidden")!==-1)continue;a.checked=i[g]=="true";g++}}}function saveNotes(c){var a=document.getElementById(c+"NotesForm"),d=a.ta,e=a.getElementsByTagName("pre")[0],b=$afe.jq(d);b.val(b.val().replace(/\n+/g," "));a.style.cursor="wait";saveSelections(a);return true}function cancelNotesEdit(d){var b="hidden",a=document.getElementById(d+"NotesForm"),e=a.getElementsByTagName("pre")[0],c;e.className="";a.ta.className=b;a.cancelBtn[0].className=b;a.saveBtn.className=b;a.ta.value="";c=$afe.jq(a.ta);c.trigger("input");c.trigger("focusout")}
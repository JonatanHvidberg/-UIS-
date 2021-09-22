/*! Copyright (c) Epic Systems Corporation 2015-2016 */
$$WPUtil.guaranteeExistence($$WP,"Containers");$$WP.Containers.MultiMonthCalendar=function $$WP$Containers$MultiMonthCalendar(f){var e=false,a=this;a.Containers$ContainerComponent(f);a.NumOfMonths=f.NumOfMonths||2;a.Class="multiMonthCalendar";a.Today=new Date;a.Month=a.Today.getMonth();a.Year=a.Today.getFullYear();a.IsAriaHidden=f.IsAriaHidden||e;var b="SingleCalendar ";if(a.NumOfMonths<2)b=b+"full";else if(a.NumOfMonths>2)b=b+"onethird";else b=b+"half";var d,i,j;d=a.Month;i=a.Year;j=a.IsAriaHidden;for(var c=0;c<a.NumOfMonths;c++){var g,h;g=e;h=e;if(c===0)h=true;if(c===a.NumOfMonths-1)g=true;var k=new $$WP.Components.Calendar({Class:b,Month:d,Year:i,IsClickEventEnabled:e,IsNextEnabled:g,IsPrevEnabled:h,IsAriaHidden:j});d=(d+1)%12;if(d===0)i++;a.CalendarComponents[c]=k;a.addComponent(a.CalendarComponents[c]);a.CalendarComponents[c].show()}a.Containers$ContainerComponent(f);a.addEventListener("click",a._calendarClick)};$$WP.Containers.MultiMonthCalendar.prototype={Today:{},NumOfMonths:0,Month:"",Year:"",CalendarComponents:[],Class:"multiMonthCalendar",MonthsMap:{},HighlightDays:[],data:{},IsAriaHidden:false,setData:function $$WP$Containers$MultiMonthCalendar$set(c){var a=this;for(var b=0;b<a.NumOfMonths;b++){a.CalendarComponents[b].Data=c;var d=a.CalendarComponents[b].settings||{};d.HighlightDays=c.HighlightDays;a.CalendarComponents[b].reInit(d)}a.MonthsMap=c.MonthsMap||{};a.MonthsMap&&a.setToolbarButtons()},setToolbarButtons:function $$WP$Containers$MultiMonthCalendar$setToolbarButtons(){var m="calendarnextandpreveventtitle",i="@MYCHART@APPTYEAR@",h="@MYCHART@APPTDATE@",g="@MYCHART@APPTMONTH@",f="@MYCHART@APPTTITLE@",a=this,j=[],e,k,l,n,o,c,d,p,b;p=false;e=a.Month;k=a.Year;e=(e+1)%12;if(e===0)k++;o=a.getFormattedMonthID(e,k);c=a.getPreviousEvent();d=a.getNextEvent();$$WP.Strings.setDefaultNamespace("clinical.todo");if(c){b=new Date(a.MonthsMap[c].EndEvent.EventDate);$$WP.Strings.addMnemonic(f,a.MonthsMap[c].EndEvent.EventName);$$WP.Strings.addMnemonic(g,getMonthAbbr(b.getMonth()+1));$$WP.Strings.addMnemonic(h,b.getDate());$$WP.Strings.addMnemonic(i,b.getFullYear());l=$$WP.Strings.getForTemplate(m);$$WP.Strings.removeMnemonic(f);$$WP.Strings.removeMnemonic(g);$$WP.Strings.removeMnemonic(h);$$WP.Strings.removeMnemonic(i);j.push(new $$WPComp.ComplexObjects.Button(l,"","calendarBackEventBtn calendarBtns",c))}if(d){b=new Date(a.MonthsMap[d].StartEvent.EventDate);$$WP.Strings.addMnemonic(f,a.MonthsMap[d].StartEvent.EventName);$$WP.Strings.addMnemonic(g,getMonthAbbr(b.getMonth()+1));$$WP.Strings.addMnemonic(h,b.getDate());$$WP.Strings.addMnemonic(i,b.getFullYear());n=$$WP.Strings.getForTemplate(m);$$WP.Strings.removeMnemonic(f);$$WP.Strings.removeMnemonic(g);$$WP.Strings.removeMnemonic(h);$$WP.Strings.removeMnemonic(i);j.push(new $$WPComp.ComplexObjects.Button(n,"","calendarNextEventBtn calendarBtns",d))}$$WP.Strings.clearDefaultNamespace();a.setToolbar(j)},getPreviousEvent:function $$WP$Containers$MultiMonthCalendar$getPreviousEvent(){var b=this,a,i,g,c,e,h;g=b.Month;c=b.Year;a="";i=b.getFormattedMonthID(g,c);for(var d in b.MonthsMap)if(b.MonthsMap.hasOwnProperty(d)){var f=d.split("_");if(f.length>=0){e=parseInt(f[0],10);h=parseInt(f[1],10);if(c>e)a=d;else if(c===e)if(g>h)a=d;else break;else break}}return a!==""?a:null},getNextEvent:function $$WP$Containers$MultiMonthCalendar$getNextEvent(){var a=this,k,j,d,c,b,e,h;b=a.Month;d=a.Year;c=false;for(var i=0;i<a.NumOfMonths;i++){b=(b+1)%12;if(b===0)d++}k="";j=a.getFormattedMonthID(b,d);for(var g in a.MonthsMap)if(a.MonthsMap.hasOwnProperty(g)){var f=g.split("_");if(f.length>=0){e=parseInt(f[0],10);h=parseInt(f[1],10);if(d<=e){c=true;if(d===e)if(b<=h)c=true;else c=false}if(c)return g}}return null},moveCalendarMonths:function $$WP$Containers$MultiMonthCalendar$moveCalendarMonths(c,d){var a=this;for(var b=0;b<a.NumOfMonths;b++){a.CalendarComponents[b].Month=c;a.CalendarComponents[b].Year=d;c=(c+1)%12;if(c===0)d++;a.CalendarComponents[b].setTitles();a.CalendarComponents[b].refresh()}a.setToolbarButtons()},_calendarClick:function $$WP$Containers$MultiMonthCalendar$_calendarClick(d){var g=true,a=this,b,c,e,f=false;if(d.dataId==="calnext"){a.Month=(a.Month+1)%12;if(a.Month===0)a.Year++;b=a.Month;c=a.Year;a.moveCalendarMonths(b,c);d.preventDefault();f=g}else if(d.dataId==="calprev"){a.Month=a.Month-1;if(a.Month<0)a.Month+=12;if(a.Month===11)a.Year--;b=a.Month;c=a.Year;a.moveCalendarMonths(b,c);d.preventDefault();f=g}else if(d.target.className.indexOf("calendarNextEventBtn")!==-1){e="";if(d.dataId)e=d.dataId.substring(7);if(e.length>5){c=e.substring(0,4);b=e.substring(5,e.length)}if(c&&b){c=parseInt(c,10);b=parseInt(b,10);b=b-(a.NumOfMonths-1);if(b<0){b+=12;c--}a.Month=b;a.Year=c;a.moveCalendarMonths(b,c)}d.preventDefault();f=g}else if(d.target.className.indexOf("calendarBackEventBtn")!==-1){e="";if(d.dataId)e=d.dataId.substring(7);if(e.length>5){c=e.substring(0,4);b=e.substring(5,e.length)}if(c&&b){c=parseInt(c,10);b=parseInt(b,10);a.Month=b;a.Year=c;a.moveCalendarMonths(b,c)}d.preventDefault();f=g}if(f){a.$container.find("a:first").focus();return false}},getFormattedMonthID:function $$WP$Containers$MultiMonthCalendar$getFormattedMonthID(a,b){return b+"_"+a}};$$WP.Containers.MultiMonthCalendar.extend("Containers.ContainerComponent")
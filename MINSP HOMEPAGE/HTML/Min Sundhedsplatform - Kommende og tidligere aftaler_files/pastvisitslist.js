(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['PastVisitsList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"visitcomponent-header\"><h2>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PastVisitsSectionHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</h2>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowDxrBannerAction : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"pastlist\"><div class=\"nodatalistelement "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllBucketsHidden : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"nodata\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoDataToDisplay",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"listsection timeLine\"><ul class=\"hidden placeholder\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.List : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div class=\"infosession timeLineSection 3monthlist hidden\"><div class=\"timeLineHeader\"><span id=\"LastThreeMonths\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LastThreeMonthsLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"timeLineDetails grid\"><ul class=\"list cardlist row smallcard\" aria-describedby=\"LastThreeMonths\"></ul></div></div><div class=\"infosession timeLineSection 6monthlist hidden\"><div class=\"timeLineHeader\"><span id=\"ThreeMonthsAgo\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ThreeMonthsAgoLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"timeLineDetails grid\"><ul class=\"list cardlist row smallcard\" aria-describedby=\"ThreeMonthsAgo\"></ul></div></div><div class=\"infosession timeLineSection past1yearlist hidden\"><div class=\"timeLineHeader\"><span id=\"SixMonthsAgo\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SixMonthsAgoLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"timeLineDetails grid\"><ul class=\"list cardlist row smallcard\" aria-describedby=\"SixMonthsAgo\"></ul></div></div><div class=\"infosession timeLineSection after1yearlist hidden\"><div class=\"timeLineHeader\"><span id=\"OneYearAgo\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OneYearAgoLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div><div class=\"timeLineDetails grid\"><ul class=\"list cardlist row smallcard\" aria-describedby=\"OneYearAgo\"></ul></div></div></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Community.NonEpicPretextBanner",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " pastvisit card "
    + container.escapeExpression(((helper = (helper = helpers.PastVisitBucket || (depth0 != null ? depth0.PastVisitBucket : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PastVisitBucket","hash":{},"data":data}) : helper)))
    + " col-6 "
    + ((stack1 = (helpers.ifAll || (depth0 && depth0.ifAll) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNotViewed : depth0),(depth0 != null ? depth0.IsViewStatusVisible : depth0),{"name":"ifAll","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><div class=\"visit-details mainDetails\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><div class=\"date alignCenter\" id=\"date"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterType : depth0),4,{"name":"ifEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterType : depth0),4,{"name":"ifEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"card_icons\">"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsLocal : depth0),{"name":"unless","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"visit-summary-links\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsClinicalNoteAvailable : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAmbPastVisitDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></li>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNoShow : depth0),(depth0 != null ? depth0.IsCanceled : depth0),(depth0 != null ? depth0.LeftWithoutSeen : depth0),{"name":"ifAny","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return " noShowCanceledShiftedCard ";
},"9":function(container,depth0,helpers,partials,data) {
    return " unviewed ";
},"11":function(container,depth0,helpers,partials,data) {
    return "<img class=\"organizationLogo admissionicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/bed.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HospitalVisitImgAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HospitalVisitImgAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><div class=\"visitIcon admissionicon\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HospitalVisitImgAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\"></div>";
},"13":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.verticalDateWithYear || (depth0 && depth0.verticalDateWithYear) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DateOfMonth : depth0),(depth0 != null ? depth0.Month : depth0),(depth0 != null ? depth0.Year : depth0),{"name":"verticalDateWithYear","hash":{},"data":data}));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"info\" id=\"info"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><div class=\"visit-type\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AdmissionWithoutService",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div><div class=\"subtle\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</div><div class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.AdmissionDateRange || (depth0 != null ? depth0.AdmissionDateRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AdmissionDateRange","hash":{},"data":data}) : helper)))
    + "</div></div></div>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"info\" id=\"info"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><div class=\"visit-type\">"
    + container.escapeExpression(((helper = (helper = helpers.VisitTypeName || (depth0 != null ? depth0.VisitTypeName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"VisitTypeName","hash":{},"data":data}) : helper)))
    + "</div><div class=\"appointment-status\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsCanceled : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNoShow : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LeftWithoutSeen : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div>"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProvider : depth0),{"name":"with","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"subtle\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RescheduledDat : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RescheduledDat : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    return " &#32;"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"IsCanceled",{"name":"getStringResource","hash":{},"data":data}));
},"21":function(container,depth0,helpers,partials,data) {
    return " &#32;"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"IsNoShow",{"name":"getStringResource","hash":{},"data":data}));
},"23":function(container,depth0,helpers,partials,data) {
    return " &#32;"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LeftWithoutSeen",{"name":"getStringResource","hash":{},"data":data}));
},"25":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</div>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"subtle\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RescheduledDatString : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RescheduledTo",{"name":"getStringResource","hash":{},"data":data}))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.RescheduledDatString || (depth0 != null ? depth0.RescheduledDatString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RescheduledDatString","hash":{},"data":data}) : helper)));
},"30":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AnotherTime",{"name":"getStringResource","hash":{},"data":data}));
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"icon\">"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalorganizationicon",(depth0 != null ? depth0.OrganizationLinks : depth0),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"notes visit-summary-link\" data-id=\"pastvisitnote\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\" tabindex=\"0\" role=\"link\" aria-describedby=\"date"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + " info"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><span class=\"visit-summary-icon-container\"><span class=\"unviewed-indicator\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnviewedVisitDetailsTooltipText",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnviewedVisitDetailsTooltipText",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><img class=\"visit-summary-icon\" src=\""
    + ((stack1 = (helpers.ifAll || (depth0 && depth0.ifAll) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNotViewed : depth0),(depth0 != null ? depth0.IsViewStatusVisible : depth0),{"name":"ifAll","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(37, data, 0),"data":data})) != null ? stack1 : "")
    + "\" /></span><span class=\"visit-summary-text\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NotesButtonTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div>";
},"35":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/Notes_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"37":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/Notes_read.png",{"name":"makeStaticLink","hash":{},"data":data}));
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"avs visit-summary-link\" data-id=\"pastvisitdetail\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\" tabindex=\"0\" role=\"link\" aria-describedby=\"date"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + " info"
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\"><span class=\"visit-summary-icon-container\"><span class=\"unviewed-indicator\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnviewedVisitDetailsTooltipText",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnviewedVisitDetailsTooltipText",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><img class=\"visit-summary-icon\" src=\""
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Locale),"en-US",{"name":"ifEquals","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(41, data, 0),"data":data})) != null ? stack1 : "")
    + "\"/></span><span class=\"visit-summary-text\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PrimaryOrganizationLink : depth0)) != null ? stack1.LinkType : stack1),3,{"name":"ifEquals","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></div>";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PrimaryOrganizationLink : depth0)) != null ? stack1.LinkType : stack1),3,{"name":"ifEquals","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifAll || (depth0 && depth0.ifAll) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNotViewed : depth0),(depth0 != null ? depth0.IsViewStatusVisible : depth0),{"name":"ifAll","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/visitDetails_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"44":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/visitDetails_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifAll || (depth0 && depth0.ifAll) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNotViewed : depth0),(depth0 != null ? depth0.IsViewStatusVisible : depth0),{"name":"ifAll","hash":{},"fn":container.program(47, data, 0),"inverse":container.program(49, data, 0),"data":data})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/AVS_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"49":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/AVS_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"51":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"VisitDetailsButtonTitle",{"name":"getStringResource","hash":{},"data":data}));
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Locale),"en-US",{"name":"ifEquals","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AVSButtonTitleEnUS",{"name":"getStringResource","hash":{},"data":data}));
},"56":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AVSButtonTitle",{"name":"getStringResource","hash":{},"data":data}));
},"useData":true});})();
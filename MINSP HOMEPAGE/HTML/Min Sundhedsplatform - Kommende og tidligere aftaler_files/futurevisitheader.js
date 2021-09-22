(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['FutureVisitHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"row fixed\"><div class=\"visitwith  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProviderName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " \"><div class=\"subtle\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProviderName : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NumberOfOthers : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterType : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterType : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.SurgicalCases : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPreadmission : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterType : depth0),9,{"name":"ifEquals","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProviderName : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "col-9";
},"3":function(container,depth0,helpers,partials,data) {
    return "col-12";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.VisitDescription || (depth0 != null ? depth0.VisitDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"VisitDescription","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"bold\">"
    + container.escapeExpression(((helper = (helper = helpers.VisitTypeName || (depth0 != null ? depth0.VisitTypeName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"VisitTypeName","hash":{},"data":data}) : helper)))
    + "</span>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popupiconcontainer\"><a href=\"#\" class=\"popupinstructionsicon\" data-id=\"ignore\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,(depth0 != null ? depth0.NumberOfOthers : depth0),{"name":"ifEquals","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "</a><div class=\"popupInstructions card extraWide autowidth hidden\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OtherProviders : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"otherprovider\">"
    + container.escapeExpression(((helper = (helper = helpers.NumberOfOthers || (depth0 != null ? depth0.NumberOfOthers : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NumberOfOthers","hash":{},"data":data}) : helper)))
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Other",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"otherprovider\">"
    + container.escapeExpression(((helper = (helper = helpers.NumberOfOthers || (depth0 != null ? depth0.NumberOfOthers : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NumberOfOthers","hash":{},"data":data}) : helper)))
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Others",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"otherproviderinfo\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PhotoLink : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Name : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasPhotoOnBlob : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"providerphoto small noprint colorpreview "
    + container.escapeExpression(((helper = (helper = helpers.PhotoClass || (depth0 != null ? depth0.PhotoClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PhotoClass","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url('"
    + container.escapeExpression((helpers.makeLink || (depth0 && depth0.makeLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PhotoLink : depth0),{"name":"makeLink","hash":{},"data":data}))
    + "'), url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\ProviderSilhouette.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "')\"></div>";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"providerphoto small noprint colorpreview "
    + container.escapeExpression(((helper = (helper = helpers.PhotoClass || (depth0 != null ? depth0.PhotoClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PhotoClass","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = helpers.PhotoLink || (depth0 != null ? depth0.PhotoLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PhotoLink","hash":{},"data":data}) : helper)))
    + "'), url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\ProviderSilhouette.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "')\"></div>";
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"providerphoto small noprint colorpreview "
    + container.escapeExpression(((helper = (helper = helpers.PhotoClass || (depth0 != null ? depth0.PhotoClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PhotoClass","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images\\ProviderSilhouette.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "')\"></div>";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</div>";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"bold time\">"
    + container.escapeExpression(((helper = (helper = helpers.Time || (depth0 != null ? depth0.Time : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Time","hash":{},"data":data}) : helper)))
    + "</div>";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsTimeToBeDetermined : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    return "<div><span class=\"bold time\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TimeToBeDetermined",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div>";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ArrivalTime : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ArrivalTime : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "")
    + " timeContainer\">"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIME@",(depth0 != null ? depth0.Time : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",(depth0 != null ? depth0.TimeZone : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AppointmentTimeLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DurationInMinutes : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"30":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ARRIVALTIME@",(depth0 != null ? depth0.ArrivalTime : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",(depth0 != null ? depth0.TimeZone : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"bold time\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ArrivalTimeLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ARRIVALTIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"32":function(container,depth0,helpers,partials,data) {
    return " subtle ";
},"34":function(container,depth0,helpers,partials,data) {
    return " time ";
},"36":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.DurationString || (depth0 != null ? depth0.DurationString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DurationString","hash":{},"data":data}) : helper)))
    + "</span>";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifGt || (depth0 && depth0.ifGt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.SurgicalCases : depth0)) != null ? stack1.length : stack1),1,{"name":"ifGt","hash":{},"fn":container.program(39, data, 0),"inverse":container.program(41, data, 0),"data":data})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CASESCOUNT@",((stack1 = (depth0 != null ? depth0.SurgicalCases : depth0)) != null ? stack1.length : stack1),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"bold surgeries\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ScheduledSurgeries",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CASESCOUNT@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"41":function(container,depth0,helpers,partials,data) {
    return "<div class=\"bold surgeries\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ScheduledOneSurgery",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"subtle\">"
    + ((stack1 = ((helper = (helper = helpers.ExpectedArrivalDateTime || (depth0 != null ? depth0.ExpectedArrivalDateTime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExpectedArrivalDateTime","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Duration : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@DURATION@",(depth0 != null ? depth0.Duration : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span class=\"subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DurationStringAdmission",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@DURATION@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"subtle\">"
    + ((stack1 = ((helper = (helper = helpers.ExpectedArrivalDateTime || (depth0 != null ? depth0.ExpectedArrivalDateTime : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExpectedArrivalDateTime","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"col-3 alignStart sm-alignEnd\">"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProvider : depth0),{"name":"with","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PhotoLink : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});})();
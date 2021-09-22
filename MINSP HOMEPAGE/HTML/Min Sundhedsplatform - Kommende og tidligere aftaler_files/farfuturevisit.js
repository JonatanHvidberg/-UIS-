(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['FarFutureVisit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<li class=\"col-4 card "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" tabindex=\"0\" data-id=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><div class=\"mainDetails\"><div class=\"date\">"
    + container.escapeExpression((helpers.verticalDateWithYear || (depth0 && depth0.verticalDateWithYear) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DateOfMonth : depth0),(depth0 != null ? depth0.Month : depth0),(depth0 != null ? depth0.Year : depth0),{"name":"verticalDateWithYear","hash":{},"data":data}))
    + "</div><div class=\"info\"><div>"
    + container.escapeExpression(((helper = (helper = helpers.VisitTypeName || (depth0 != null ? depth0.VisitTypeName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"VisitTypeName","hash":{},"data":data}) : helper)))
    + "</div><div>"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PrimaryProvider : depth0),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsTimeToBeDetermined : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"card_icons\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsEcheckInCompleted : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsLocal : depth0),{"name":"unless","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"clickableVisitCardClearLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div></li>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "clickablecard ";
},"3":function(container,depth0,helpers,partials,data) {
    return "nohover";
},"5":function(container,depth0,helpers,partials,data) {
    return "laterdetail";
},"7":function(container,depth0,helpers,partials,data) {
    return "ignore";
},"9":function(container,depth0,helpers,partials,data) {
    return "link";
},"11":function(container,depth0,helpers,partials,data) {
    return "none";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</div>";
},"15":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TimeToBeDetermined",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ArrivalTime : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Time : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ARRIVALTIME@",(depth0 != null ? depth0.ArrivalTime : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",(depth0 != null ? depth0.TimeZone : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ArrivalTimeLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ARRIVALTIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIME@",(depth0 != null ? depth0.Time : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TimeZone : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AppointmentTimeLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"21":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@",(depth0 != null ? depth0.TimeZone : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}));
},"23":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TIMEZONE@","",{"name":"addStringResourceMnemonic","hash":{},"data":data}));
},"25":function(container,depth0,helpers,partials,data) {
    return "<div class=\"icon\"><img class=\"echeckin\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/echeck_large.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ECheckInCompleteAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ECheckInCompleteAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /></div>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"icon\">"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalorganizationicon",(depth0 != null ? depth0.OrganizationLinks : depth0),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});})();
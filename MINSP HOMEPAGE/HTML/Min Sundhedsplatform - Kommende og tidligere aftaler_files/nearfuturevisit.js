(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['NearFutureVisit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<!-- begin inlined partials --><!-- end inlined partials --><li class=\"soonvisits card insulated col-12\" data-id=\"nextndays\"><div class=\"grid insulated\"><div class=\"row\"><div class=\"col-1 sm-alignCenter\"><div class=\"date\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Telemedicine : depth0)) != null ? stack1.IsOnDemand : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"visitinfo col-7 grid\"><!-- visit title, providers, time, etc. -->"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits.FutureVisitHeader",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + "<!-- location --><div class=\"row\"><div class=\"col-12 location\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPreadmission : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDrivingDirectionsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><!-- panel child visits --><ul class=\"verticalSubway hideresponsive\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ComponentVisits : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><!-- visit payment blurb --><div class=\"col-12\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits.Payment",depth0,{"name":"addTemplate","hash":{},"data":data}))
    + "</div></div><div class=\"card_icons\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsEcheckInCompleted : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsLocal : depth0),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"actions col-4\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanECheckIn : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDetailsEnabled : depth0),{"name":"if","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"center visitactions\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReschedule : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanDirectlyCancel : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.program(45, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div></div></div></div></li>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"main_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators;

  fn = decorators.inline(fn,props,container,{"name":"inline","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"args":["labelText"],"data":data}) || fn;
  return fn;
  }

,"useDecorators":true,"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@VISITTYPE@",(depth0 != null ? depth0.VisitTypeName : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@DATE@",(depth0 != null ? depth0.Date : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ButtonClearLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@VISITTYPE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@DATE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsTimeToBeDetermined : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.verticalDateWithDayName || (depth0 && depth0.verticalDateWithDayName) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DateOfMonth : depth0),(depth0 != null ? depth0.Month : depth0),(depth0 != null ? depth0.Year : depth0),{"name":"verticalDateWithDayName","hash":{},"data":data}));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"bold\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PreadmissionLocation : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreadmissionLocation : depth0)) != null ? stack1.Address : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"address subtle\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"bold\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</div><div class=\"arrivallocation\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.ArrivalLocation : stack1), depth0))
    + "</div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Address : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPreadmission : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreadmissionLocation : depth0)) != null ? stack1.Address : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"link\" href=\"#\" data-driving-directions=\""
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreadmissionLocation : depth0)) != null ? stack1.Address : stack1),", ",{"name":"join","hash":{},"data":data}))
    + "\"><div class=\"drivingdirectionsicon\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DrivingDirectionsButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Address : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a class=\"link\" href=\"#\" data-driving-directions=\""
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PrimaryDepartment : depth0)) != null ? stack1.Address : stack1),", ",{"name":"join","hash":{},"data":data}))
    + "\"><div class=\"drivingdirectionsicon\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DrivingDirectionsButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"verticalSubwayStop\"><span class=\"verticalSubwayStopContents\">"
    + container.escapeExpression(((helper = (helper = helpers.VisitTypeName || (depth0 != null ? depth0.VisitTypeName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"VisitTypeName","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"20":function(container,depth0,helpers,partials,data) {
    return "<div class=\"icon\"><img class=\"echeckin\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/echeck_large.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ECheckInCompleteAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ECheckInCompleteAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /></div>";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"icon\">"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalorganizationicon",(depth0 != null ? depth0.OrganizationLinks : depth0),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div data-id=\"echeckin\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\" class=\"button nextstep\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ECheckIn : depth0)) != null ? stack1.IsAdmission : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a></div>";
},"25":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdateInfoButtonText",{"name":"getStringResource","hash":{},"data":data}));
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ECheckIn : depth0)) != null ? stack1.IsSurgery : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ECheckIn : depth0)) != null ? stack1.HasBarcodeStep : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ECheckInButtonLabel",{"name":"getStringResource","hash":{},"data":data}));
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Telemedicine : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div data-id=\"nextdetail\"><a href=\"#\" class=\"button\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DetailsButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a></div>";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span data-id=\"reschedule\"><a href=\"#\" class=\"link\"><span class=\"rescheduleicon\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RescheduleButtonLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a></span>";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span data-id=\"cancel\"><a href=\"#\" class=\"link cancel\"><span class=\"cancelicon\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterIsEDVisit : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a></span>";
},"38":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelVisitLabel",{"name":"getStringResource","hash":{},"data":data}));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasComponentVisits : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data})) != null ? stack1 : "");
},"41":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelPanelLabel",{"name":"getStringResource","hash":{},"data":data}));
},"43":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButtonLabel",{"name":"getStringResource","hash":{},"data":data}));
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanRequestCancel : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span data-id=\"requestcancel\"><a href=\"#\" class=\"link cancel\"><span class=\"cancelicon\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.EncounterIsEDVisit : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = container.invokePartial(partials.labelText,depth0,{"name":"labelText","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a></span>";
},"usePartial":true,"useData":true,"useDepths":true});})(); 
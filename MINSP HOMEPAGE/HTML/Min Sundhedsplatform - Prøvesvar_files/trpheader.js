(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<fakewrapper>"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gotofocused\" /><a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gotobottom\" /><div class=\"nodatalistelement nohover testresultheader BeforeTestResultsList\">"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</fakewrapper>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPSearchBar",depth0,((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ViewBagProperties : depth0)) != null ? stack1.HasIPEncounter : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"ToggleWrapper tr_poc_header_component\" tabindex=\"0\" data-id=\"toggleWrapper\"><input data-id=\"toggleinpatient\" class=\"ToggleInpatient\" tabindex=\"-1\" type=\"checkbox\" id=\"showHospitalResults-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowHospitalResults",{"name":"getStringResource","hash":{},"data":data}))
    + "\""
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FilterInpatient : depth0),"0",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><label class=\"ToggleInpatientString Colored\" data-id=\"toggleLabel\" for=\"showHospitalResults-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowHospitalResults",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "checked";
},"useData":true});})();
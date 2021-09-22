(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPListAbbrevPartial'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<li tabindex=\"0\" role=\"button\" class=\"TRPCareteam TRPComponentAbbrev\" data-id=\"selectda\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.OrderID || (depth0 != null ? depth0.OrderID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrderID","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(((helper = (helper = helpers.ComponentID || (depth0 != null ? depth0.ComponentID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentID","hash":{},"data":data}) : helper)))
    + "\" orderid=\""
    + container.escapeExpression(((helper = (helper = helpers.OrderID || (depth0 != null ? depth0.OrderID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrderID","hash":{},"data":data}) : helper)))
    + "\" compid=\""
    + container.escapeExpression(((helper = (helper = helpers.ComponentID || (depth0 != null ? depth0.ComponentID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentID","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ComponentDetailsLink",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><div class=\"tr_poc_header TRPRow\"><div class=\"TRPCol\"><div class=\"TRPName truncateText\"><span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAbnormal : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AdditionalData : depth0)) != null ? stack1.IsRegistryFilterActive : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"TRPCol TRPRight\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "\"><div class=\"TRPDark truncateText "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAbnormal : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Units : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></li>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "<img class=\"abnormalicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/abnormal_result.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>"
    + container.escapeExpression(((helper = (helper = helpers.FormattedDate || (depth0 != null ? depth0.FormattedDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedDate","hash":{},"data":data}) : helper)))
    + "</div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "abnormal";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnitsLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div class=\"truncateText\">"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});})();
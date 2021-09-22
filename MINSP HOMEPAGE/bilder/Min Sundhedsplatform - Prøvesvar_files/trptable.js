(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPTable'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"TestResultsPocComponentHeader\" tabindex=\"0\">"
    + container.escapeExpression(((helper = (helper = helpers.ComponentCommonName || (depth0 != null ? depth0.ComponentCommonName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentCommonName","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HistoricalValues : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"TestResultsPocComponentPretext\"><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPComponentTablePretext",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><a href=\"#\" class=\"TestResultsPocProcedureLink\" data-id=\"testresult\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.parentOrderID || (depth0 != null ? depth0.parentOrderID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"parentOrderID","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPComponentTablePretextLink",{"name":"getStringResource","hash":{},"data":data}))
    + "</a></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isComponentOutOfRange : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"section\"><div id=\"TRPGraph_container\" class=\"graph "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isGraphable : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" tabindex=\"-1\"></div></div><div class=\"TRPGraphParent\"><table class=\"goalslist TRPTableList\" tabindex=\"0\"><tr class=\"listelement TRPTableElement\" tabindex=\"0\"><th class=\"TRPTableHeader colHead\" scope=\"col\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DateHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</th><th class=\"TRPTableHeader colHead\" scope=\"col\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPTableHeaderValue",{"name":"getStringResource","hash":{},"data":data}))
    + "</th>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasReferenceRange : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.ShowAbnormalFlag),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasComment : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.CanAccessDetails),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>"
    + ((stack1 = (helpers["each-reverse"] || (depth0 && depth0["each-reverse"]) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HistoricalValues : depth0),{"name":"each-reverse","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table></div><form autocomplete=\"off\" method=\"post\" action=\"\" id=\"TRPGraph_form\" name=\"TRPGraph_form\" class=\"graphXmlForm\"><div class=\"formcontents\"><div class=\"hidden\"><input autocomplete=\"off\" name=\"graphXml\" value=\"\" type=\"hidden\"  id=\"TRPGraphForm\" /><input autocomplete=\"off\" name=\"graphPrefix\" value=\"TRPGraph\" type=\"hidden\" /><input autocomplete=\"off\" name=\"width\" value=\"700\" type=\"hidden\" /><input autocomplete=\"off\" name=\"height\" value=\"350\" type=\"hidden\" /></div></div></form>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert card\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/warning.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\"></img>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ComponentOutOfDisplayedRange",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    return " graphable";
},"8":function(container,depth0,helpers,partials,data) {
    return "<th class=\"TRPTableHeader colHead\" scope=\"col\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPTableHeaderRefRange",{"name":"getStringResource","hash":{},"data":data}))
    + "</th>";
},"10":function(container,depth0,helpers,partials,data) {
    return "<th class=\"TRPTableHeader colHead\" scope=\"col\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPTableHeaderFlag",{"name":"getStringResource","hash":{},"data":data}))
    + "</th>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<th class=\"TRPTableHeader colHead\" scope=\"col\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TRPTableHeaderComment",{"name":"getStringResource","hash":{},"data":data}))
    + "</th>";
},"14":function(container,depth0,helpers,partials,data) {
    return "<th class=\"TRPTableHeader colHead\" scope=\"col\"></th>";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<tr class=\"listelement TRPTableElement TRPComponentTableRow\" orderid=\""
    + container.escapeExpression(((helper = (helper = helpers.OrderID || (depth0 != null ? depth0.OrderID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrderID","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" ><td class=\"TRPTableComponentName truncateText\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentCommonName), depth0))
    + "\"><div class=\"tr_poc_graph_date\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedDate || (depth0 != null ? depth0.FormattedDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedDate","hash":{},"data":data}) : helper)))
    + "</div></td><td style=\"font-size: 1.2rem\" class=\"truncateText\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Value : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.hasReferenceRange),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.ShowAbnormalFlag),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.hasComment),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.CanAccessDetails),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>";
},"17":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"TRPDark\">"
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "</span>&nbsp;<span style=\"font-size: 1rem\">"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "</span>";
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<td title=\""
    + container.escapeExpression(((helper = (helper = helpers.ReferenceRange || (depth0 != null ? depth0.ReferenceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ReferenceRange","hash":{},"data":data}) : helper)))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.AriaReferenceRange || (depth0 != null ? depth0.AriaReferenceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AriaReferenceRange","hash":{},"data":data}) : helper)))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "\" class=\"truncateText\">"
    + container.escapeExpression(((helper = (helper = helpers.ReferenceRange || (depth0 != null ? depth0.ReferenceRange : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ReferenceRange","hash":{},"data":data}) : helper)))
    + "&nbsp;"
    + container.escapeExpression(((helper = (helper = helpers.Units || (depth0 != null ? depth0.Units : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Units","hash":{},"data":data}) : helper)))
    + "</td>";
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<td title=\""
    + container.escapeExpression(((helper = (helper = helpers.Flag || (depth0 != null ? depth0.Flag : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Flag","hash":{},"data":data}) : helper)))
    + "\" class=\"truncateText\">"
    + container.escapeExpression(((helper = (helper = helpers.Flag || (depth0 != null ? depth0.Flag : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Flag","hash":{},"data":data}) : helper)))
    + "</td>";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<td title=\""
    + container.escapeExpression(((helper = (helper = helpers.Comment || (depth0 != null ? depth0.Comment : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Comment","hash":{},"data":data}) : helper)))
    + "\" class=\"TRPGraphComment truncateText\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Comment : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.Comment || (depth0 != null ? depth0.Comment : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Comment","hash":{},"data":data}) : helper)));
},"26":function(container,depth0,helpers,partials,data) {
    return "<div class=\"TRPGraphComment truncateText\" />";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<td class=\"TestResultsDetailsLink\"><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.Url || (depth0 != null ? depth0.Url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"showOnHover\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ComponentValueDetailsLinkTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"details\" ><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ComponentValueDetailsLinkTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ComponentValueDetailsLink",{"name":"getStringResource","hash":{},"data":data}))
    + "</a></td>";
},"30":function(container,depth0,helpers,partials,data) {
    return "<span class=\"nodata\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoHistoricValuesFound",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoHistoricValuesFound",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>";
},"useData":true});})();
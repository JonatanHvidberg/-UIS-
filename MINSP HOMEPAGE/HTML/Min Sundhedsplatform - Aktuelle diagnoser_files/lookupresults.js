(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Lookup = templates.Lookup || {};templates['LookupResults'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "  <div id=\"searchresultstemp\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultsDisclaimerText : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultRecords : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"customtext\">"
    + container.escapeExpression(((helper = (helper = helpers.ResultsPostText || (depth0 != null ? depth0.ResultsPostText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsPostText","hash":{},"data":data}) : helper)))
    + "</div><div id=\"results\" class=\"results list hoverable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultRecords : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"disclaimerdiv "
    + container.escapeExpression(((helper = (helper = helpers.ResultsStatus || (depth0 != null ? depth0.ResultsStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsStatus","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.ResultsDisclaimerText || (depth0 != null ? depth0.ResultsDisclaimerText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsDisclaimerText","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasMore : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"resultspretext heading "
    + container.escapeExpression(((helper = (helper = helpers.ResultsStatus || (depth0 != null ? depth0.ResultsStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsStatus","hash":{},"data":data}) : helper)))
    + "\" id=\"searchresultstext\">"
    + container.escapeExpression(((helper = (helper = helpers.MoreResultsPreText || (depth0 != null ? depth0.MoreResultsPreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MoreResultsPreText","hash":{},"data":data}) : helper)))
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"resultspretext "
    + container.escapeExpression(((helper = (helper = helpers.ResultsStatus || (depth0 != null ? depth0.ResultsStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsStatus","hash":{},"data":data}) : helper)))
    + "\" id=\"searchresultstext\">"
    + container.escapeExpression(((helper = (helper = helpers.FewResultsPreText || (depth0 != null ? depth0.FewResultsPreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FewResultsPreText","hash":{},"data":data}) : helper)))
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"resultspretext "
    + container.escapeExpression(((helper = (helper = helpers.ResultsStatus || (depth0 != null ? depth0.ResultsStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsStatus","hash":{},"data":data}) : helper)))
    + "\" id=\"searchresultstext\">"
    + container.escapeExpression(((helper = (helper = helpers.NoResultsPreText || (depth0 != null ? depth0.NoResultsPreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NoResultsPreText","hash":{},"data":data}) : helper)))
    + "</div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"#\" class =\"anchorListElement resultelement\" data-id=\"selectlianchor\" title=\"\" alt=\"\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><span class=\"row name\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</span></a>";
},"useData":true});})();
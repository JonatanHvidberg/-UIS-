(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPDisclaimer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<fakewrapper>"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"testResultsLinkFooter abbrev_header stickyFooter\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultsPageLinkQuestion",{"name":"getStringResource","hash":{},"data":data}))
    + "<br/><a href=\""
    + container.escapeExpression((helpers.makeLink || (depth0 && depth0.makeLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"inside.asp?mode=labs",{"name":"makeLink","hash":{},"data":data}))
    + "\" data-id=\"testResultsLink\" class=\"testResultsLink\" tabindex=\"0\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultsPageLinkText",{"name":"getStringResource","hash":{},"data":data}))
    + "</a></div><a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gototop\" /><a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gotofocused\" />"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</fakewrapper>";
},"useData":true});})();
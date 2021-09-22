(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPFooter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<fakewrapper>"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OldestRenderedDate@",(depth0 != null ? depth0.OldestRenderedDate : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ListCount : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllDataDisplayed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"testResultsLinkFooter abbrev_header stickyFooter placeholder\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultsPageLinkQuestion",{"name":"getStringResource","hash":{},"data":data}))
    + "<br/>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultsPageLinkText",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ContainerComponent : depth0)) != null ? stack1.DisclaimerComponent : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OldestRenderedDate@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</fakewrapper>";
},"1":function(container,depth0,helpers,partials,data) {
    return "afterList subtle tr_poc_footer_component";
},"3":function(container,depth0,helpers,partials,data) {
    return "nodata tr_poc_footer_component";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasLoadedMore : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AllDataLoaded",{"name":"getStringResource","hash":{},"data":data}));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OldestRenderedDate : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "<a data-id=\"loadmore\" class=\"Clickable loadmore\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LoadMoreTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" tabindex=\"-1\"><span data-id=\"loadmore\" tabindex=\"0\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LoadMoreLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OldestDateLoadedLabel",{"name":"getStringResource","hash":{},"data":data}));
},"11":function(container,depth0,helpers,partials,data) {
    return "<a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gototop\" /><a class=\"focusanchor\" aria-hidden=\"true\" href=\"#\" data-id=\"gotofocused\" />";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ListCount : depth0),0,{"name":"ifEquals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nodatalistelement nohover\"><span class=\"nodata\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoDataText",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div>";
},"useData":true});})();
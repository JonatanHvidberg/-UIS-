(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPSearchBar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<fakewrapper><label class=\"SearchLabel hidden\" for=\"searchList-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input type=\"text\" id=\"searchList-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\"  value=\""
    + container.escapeExpression(((helper = (helper = helpers.SearchString || (depth0 != null ? depth0.SearchString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SearchString","hash":{},"data":data}) : helper)))
    + "\" name=\"SearchList\" class=\"SearchList\" aria-labeledby=\"testresults-search\" maxlength=\"256\" placeholder=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchButtonTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"searchlist\"/><input type=\"image\" tabindex=\"0\" data-id=\"search\"  class=\"SearchImage noprint imgbutn __web-inspector-hide-shortcut__\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasSearch : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "name=\"msglist_inbox_lmSrchBtn\" value=\"1\" autocomplete=\"off\" /></fakewrapper>";
},"1":function(container,depth0,helpers,partials,data) {
    return "title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelSearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelSearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"../images/close.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    return "title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchButtonTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchButtonTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"../images/search_small.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" ";
},"useData":true});})();
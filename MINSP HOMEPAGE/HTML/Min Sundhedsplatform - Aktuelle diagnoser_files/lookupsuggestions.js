(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['LookupSuggestions'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<ul id=\"searchsuggestionstemp\"><li tabindex=\"-1\" data-index=\"-1\" data-id=\"suggestionsearch\" data-key=\""
    + container.escapeExpression(((helper = (helper = helpers.SearchString || (depth0 != null ? depth0.SearchString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SearchString","hash":{},"data":data}) : helper)))
    + "\" class=\"suggestion selected suggestionsearch\"><span class=\"searchkey\">"
    + container.escapeExpression(((helper = (helper = helpers.SearchString || (depth0 != null ? depth0.SearchString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SearchString","hash":{},"data":data}) : helper)))
    + "</span><span class=\"searchlabel\">"
    + container.escapeExpression(((helper = (helper = helpers.SearchTagLabel || (depth0 != null ? depth0.SearchTagLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SearchTagLabel","hash":{},"data":data}) : helper)))
    + "</span></li>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultRecords : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideSuggestionInfo : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultRecords : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li tabindex=\"-1\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-id=\"suggestionselect\" result-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ID || (depth0 != null ? depth0.ID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ID","hash":{},"data":data}) : helper)))
    + "\" result-name=\""
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "\" class=\"suggestion\">"
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</li>";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li tabindex=\"-1\" data-index=\"99\" data-id=\"suggestioninfo\" class=\"suggestion infotext "
    + container.escapeExpression(((helper = (helper = helpers.ResultsStatus || (depth0 != null ? depth0.ResultsStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ResultsStatus","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SuggestionDisclaimerText : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"infospan\">"
    + container.escapeExpression(((helper = (helper = helpers.SuggestionInfoText || (depth0 != null ? depth0.SuggestionInfoText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SuggestionInfoText","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SuggestionDisclaimerText : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li>";
},"5":function(container,depth0,helpers,partials,data) {
    return " hasdisclaimer";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"disclaimerspan\">"
    + container.escapeExpression(((helper = (helper = helpers.SuggestionDisclaimerText || (depth0 != null ? depth0.SuggestionDisclaimerText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SuggestionDisclaimerText","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});})();
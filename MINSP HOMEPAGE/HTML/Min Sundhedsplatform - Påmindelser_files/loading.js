(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['loading'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"ajaxspinner\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DataFromMultipleSources : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ExtraMessage : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Global",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalloadingindicator",{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "<span class=\"loadingStatus subtlecolor loading\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"GenericLoadingMessage",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"spinner\"></div><span class=\"primary clearlabel\">"
    + container.escapeExpression(((helper = (helper = helpers.PrimaryMessage || (depth0 != null ? depth0.PrimaryMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PrimaryMessage","hash":{},"data":data}) : helper)))
    + "</span><span class=\"loadingStatus\">"
    + container.escapeExpression(((helper = (helper = helpers.LoadingStatus || (depth0 != null ? depth0.LoadingStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LoadingStatus","hash":{},"data":data}) : helper)))
    + "</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"secondary clearlabel\" style=\"display:block\">"
    + container.escapeExpression(((helper = (helper = helpers.ExtraMessage || (depth0 != null ? depth0.ExtraMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExtraMessage","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});})();
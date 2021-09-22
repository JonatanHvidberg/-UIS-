(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Community = templates.Community || {};templates['ExternalLinking'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreText : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"list hoverable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.InactiveCommunityList : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>  ";
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pretext\">"
    + container.escapeExpression(((helper = (helper = helpers.PreText || (depth0 != null ? depth0.PreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PreText","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Community.ExternalLinkingOrganization",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"useData":true});})();
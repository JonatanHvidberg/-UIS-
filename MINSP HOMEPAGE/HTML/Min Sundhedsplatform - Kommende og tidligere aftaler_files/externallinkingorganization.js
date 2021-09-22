(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Community = templates.Community || {};templates['ExternalLinkingOrganization'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"externalorg "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UserMyChartStatus : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><a href=\"#\" class=\"externallink "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UserMyChartStatus : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.externalLinkTitle : stack1), depth0))
    + "\" data-id=\"externallink\" data-index=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.IndexValue : stack1), depth0))
    + "\" data-org-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.OrganizationId : stack1), depth0))
    + "\"><span class=\"orgsinfo\"><span class=\"orglogosection\"><span class=\"orglogo roundedimage\" style=\"background-image: url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.LogoUrl : stack1), depth0))
    + "')\"></span></span><span class=\"orgname\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.OrganizationName : stack1), depth0))
    + "</span><span class=\"orglink badge\">?</span></span></a></div>";
},"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "inactive";
},"5":function(container,depth0,helpers,partials,data) {
    return "activationlink";
},"useData":true});})();
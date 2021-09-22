(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['externalorganizationdetails'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"organization extraWide\" data-id=\"ignore\"><img class=\"organizationLogo extraWide\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.LogoUrl || (depth0 != null ? depth0.LogoUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LogoUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.OrganizationName || (depth0 != null ? depth0.OrganizationName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationName","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.OrganizationName || (depth0 != null ? depth0.OrganizationName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationName","hash":{},"data":data}) : helper)))
    + "\"/><div class=\"organizationName extraWide\">"
    + container.escapeExpression(((helper = (helper = helpers.OrganizationName || (depth0 != null ? depth0.OrganizationName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationName","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LinkType : depth0),3,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ORGTIMESTAMP@",(depth0 != null ? depth0.FormattedLocalTimeStamp : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"organizationTimeStamp\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OrgUpdatedLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ORGTIMESTAMP@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"organizationTimeStamp\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OrgUpToDate",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"useData":true});})();
(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['externaljump'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"community.externaljump",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ErrorMessage : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"nodata\">"
    + container.escapeExpression(((helper = (helper = helpers.ErrorMessage || (depth0 != null ? depth0.ErrorMessage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ErrorMessage","hash":{},"data":data}) : helper)))
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"loadingContainer\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OrganizationName : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalloadingindicator",{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div><div class=\"loadedcontent\"><a href=\"#\" data-id=\"titlebarclose\" class=\"clearlabel\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CloseExternalJumpPopupTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CloseExternalJumpPopupTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</a>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsSignupWorkFlow : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Message : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"externalframewrapper\"><iframe class=\"externalframe\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ExternalJumpIframeId || (depth0 != null ? depth0.ExternalJumpIframeId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExternalJumpIframeId","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.ExternalJumpIframeId || (depth0 != null ? depth0.ExternalJumpIframeId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ExternalJumpIframeId","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.Url || (depth0 != null ? depth0.Url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Url","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.IframeTitle || (depth0 != null ? depth0.IframeTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IframeTitle","hash":{},"data":data}) : helper)))
    + "\"></iframe></div><div class=\"browsersupport\"></div></div><a href=\"#\" onclick=\"return false;\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LastTabAnchorTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LastTabAnchorTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</a>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"logo\"><span class=\"roundedimage\" style=\"background-image:url('"
    + container.escapeExpression(((helper = (helper = helpers.OrganizationLogo || (depth0 != null ? depth0.OrganizationLogo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationLogo","hash":{},"data":data}) : helper)))
    + "')\"></span></div><div class=\"loadingStatus subtlecolor\">"
    + container.escapeExpression(((helper = (helper = helpers.LoadingStatus || (depth0 != null ? depth0.LoadingStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LoadingStatus","hash":{},"data":data}) : helper)))
    + "</div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"externalheader grid\"><div class=\"row\"><div class=\"col-8\"><span class=\"externallogo roundedimage\" style=\"background-image:url('"
    + container.escapeExpression(((helper = (helper = helpers.OrganizationLogo || (depth0 != null ? depth0.OrganizationLogo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationLogo","hash":{},"data":data}) : helper)))
    + "')\"></span><h2 class=\"orgName header\">"
    + container.escapeExpression(((helper = (helper = helpers.OrganizationName || (depth0 != null ? depth0.OrganizationName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"OrganizationName","hash":{},"data":data}) : helper)))
    + "</h2></div><div class=\"col-4 grid\"><div class=\"contactinfo subtle row fixed "
    + container.escapeExpression(((helper = (helper = helpers.contactInfoClass || (depth0 != null ? depth0.contactInfoClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"contactInfoClass","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Address : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Contact : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></div></div>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"address section col-6\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Address : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</span>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"contact section col-6\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Contact : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"contact"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</span>";
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>"
    + container.escapeExpression(((helper = (helper = helpers.Message || (depth0 != null ? depth0.Message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Message","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});})();
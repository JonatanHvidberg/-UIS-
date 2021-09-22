(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Community = templates.Community || {};templates['NonEpicPretextBanner'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Community.Shared",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"dxr-banner externalInfoBanner grid\"><div class=\"row\"><div class=\"pretext col-10\"><div class=\"dxr-pretext-div\"><span class=\"dxr-pretext-span\"><div>"
    + container.escapeExpression(((helper = (helper = helpers.NonEpicWarningText || (depth0 != null ? depth0.NonEpicWarningText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NonEpicWarningText","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowDxrBannerAction : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></div></div><div id=\"banner-button-section\" class=\"col-2\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowDxrBannerAction : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"noprint\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NonEpicActionText",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a id=\"refresh-banner-button\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.UpdateDxrAccountLink || (depth0 != null ? depth0.UpdateDxrAccountLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"UpdateDxrAccountLink","hash":{},"data":data}) : helper)))
    + "\" class=\"button\"><img class=\"dxr-refresh-icon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/refresh.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdateAccountTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"/><span class=\"dxr-action-text\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdateAccount",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>";
},"useData":true});})();
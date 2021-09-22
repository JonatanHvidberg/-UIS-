(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['PVGLightboxContent'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div><div class=\"center section loading\"><h1>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PVGTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</h1><div class=\"content pvgmsg\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PVGContent",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div class=\"content hidden pvgwaitingmsg\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PVGWaitingContent",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><span class=\"progbarsquares\"><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ProgressBarIconAlt",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></span></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"useData":true});})();
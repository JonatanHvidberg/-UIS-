(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['loggingout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "  <div>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Message","Global.LoggingOutPopup",{"name":"getStringResource","hash":{},"data":data}))
    + "</div><div><img alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Message","Global.LoggingOutPopup",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/spinner_barbershop.gif",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" /></div>";
},"useData":true});})();
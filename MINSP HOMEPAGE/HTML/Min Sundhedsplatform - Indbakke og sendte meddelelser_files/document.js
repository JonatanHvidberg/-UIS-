(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Documents = templates.Documents || {};templates = templates.ViewDocument = templates.ViewDocument || {};templates['Document'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"viewdocument",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllowPreview : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"options\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllowPrint : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AllowDownload : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"loadingHeart\"></div><img id=\"section-to-print\" class=\"printdoc\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.Url || (depth0 != null ? depth0.Url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"documentToPrintAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/><div style=\"text-align: center;\"><p class=\"viewdocument-popup--error hidden\"></p></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<a class=\"printIcon\" href=\"#\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"print",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"printIcon\" ><img alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"printIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/print_inline.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\"/></a>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"downloadIcon\" href=\""
    + container.escapeExpression(((helper = (helper = helpers.DownloadUrl || (depth0 != null ? depth0.DownloadUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DownloadUrl","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"download",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"downloadIcon\" ><img alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"downloadIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/visits/download.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\"/></a>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<div style=\"text-align: center;\"><p class=\"viewdocument-popup--error\">"
    + container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FallbackText : depth0),{"name":"raw","hash":{},"data":data}))
    + "</p></div>";
},"useData":true});})();
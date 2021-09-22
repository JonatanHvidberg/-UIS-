(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Documents = templates.Documents || {};templates = templates.ViewDocument = templates.ViewDocument || {};templates['DocumentTableHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"viewdocument",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div id=\"documentTableHeader\" class=\"sm-hide grid compact\"><div class=\"row\"><span tabindex=\"0\" class=\"Header DocTypeHeader heading ClickableHeader\" id=\"docType\" role=\"button\"><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"docTypeHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></span><span id=\"docDate\" class=\"Header DateHeader heading ClickableHeader descending col-3\" tabindex=\"0\" role=\"button\"><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"dateHeader",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></span></div></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"useData":true});})();
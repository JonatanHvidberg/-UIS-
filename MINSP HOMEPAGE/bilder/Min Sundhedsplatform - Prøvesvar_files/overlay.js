(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['overlay'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"lightbox_overlay lb_overlay template "
    + container.escapeExpression(((helper = (helper = helpers.Class || (depth0 != null ? depth0.Class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Class","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});})();
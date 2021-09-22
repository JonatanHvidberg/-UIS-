(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['externalloadingindicator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.canShowExternalLoadingIndicator || (depth0 != null ? depth0.canShowExternalLoadingIndicator : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"canShowExternalLoadingIndicator","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!helpers.canShowExternalLoadingIndicator) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loadingExt loading externalLoadingIndicator\"><span class=\"lE-backorbit\"></span><span class=\"lE-moon\"></span><span class=\"lE-fullLogo\"></span><span class=\"lE-panhandleAndCheck\"></span></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loadingIndicator\"><div class=\"indicator\"></div></div>";
},"useData":true});})();
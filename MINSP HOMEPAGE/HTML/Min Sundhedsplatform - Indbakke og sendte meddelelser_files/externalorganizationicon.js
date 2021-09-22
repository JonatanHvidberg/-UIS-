(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['externalorganizationicon'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"popupiconcontainer\" data-id=\"ignore\"><a href=\"#\" class=\"popupinstructionsicon\" data-id=\"ignore\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IncompleteH2GSetup : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</a><div class=\"popupInstructions extraWide autowidth hidden\" data-id=\"ignore\"><span class=\"subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OrgNameLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = (helpers.ifArray || (depth0 && depth0.ifArray) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"ifArray","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"1":function(container,depth0,helpers,partials,data) {
    return "<img class=\"externalicon\" data-altnode=\"ExternalIconAlt\" data-id=\"externalicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/CareEverywhere-With-Arrow.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ExternalIconAlt",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<img class=\"externalicon\" data-altnode=\"ExternalIconAlt\" data-id=\"externalicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/my1chartlogo.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ExternalIconAlt",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalorganizationdetails",depth0,{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true});})();
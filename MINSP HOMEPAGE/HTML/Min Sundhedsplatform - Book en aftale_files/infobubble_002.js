(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.UI = templates.UI || {};templates['InfoBubble'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"infoBubbleWrapper\" data-model-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\" data-view-binder-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ViewBinderId || (depth0 != null ? depth0.ViewBinderId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ViewBinderId","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"infoBubblePopup extraWide\" id=\"infoBubble_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\" role=\"tooltip\" aria-hidden=\"true\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BubbleTitle : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"infoBubbleBody\" id=\"infoBubble_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_body\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DisableHtmlEncoding : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div></div>";
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"infoBubbleTarget asIcon\" tabindex=\"0\" type=\"button\" aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MoreInformation","UI.InfoBubble",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" aria-describedby=\"infoBubble_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Image : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "');\" />";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<button class=\"infoBubbleTarget\" tabindex=\"0\" type=\"button\" aria-describedby=\"infoBubble_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.AnchorText || (depth0 != null ? depth0.AnchorText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AnchorText","hash":{},"data":data}) : helper)))
    + "</button>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"header small\" id=\"infoBubble_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_header\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.BubbleTitle || (depth0 != null ? depth0.BubbleTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BubbleTitle","hash":{},"data":data}) : helper)))
    + "</span><span class=\"clearlabel srPause\">.</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BubbleText : depth0),{"name":"raw","hash":{},"data":data}));
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.BubbleText || (depth0 != null ? depth0.BubbleText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BubbleText","hash":{},"data":data}) : helper)));
},"useData":true});})();
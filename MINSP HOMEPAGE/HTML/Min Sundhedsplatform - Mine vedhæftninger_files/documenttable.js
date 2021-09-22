(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Documents = templates.Documents || {};templates = templates.ViewDocument = templates.ViewDocument || {};templates['DocumentTable'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"viewdocument",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card alert\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/warning.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"errorAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\"></img><p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"errorText",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoDocumentsData : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-content\"><p class=\"ptext nodata\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"nodatatext",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"docWidgetContents\"><ul class=\"grid  DocumentTable list hoverable \">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Documents : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li tabindex=\"0\" class=\"row fixed card Header SingleDocument Clickable document "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.New : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsExpired : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Filtered : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" ><span class=\"alignCenter DocIcon col-1 \"><img class=\"DocIcon\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\" /></span><div class=\"grid compact col-10 InfoRow\"><div class=\"row \"><div class=\"grid compact col-9\"><div class=\"row \"><span class=\"DocTypeWrapper col-9\"  ><span class=\"DocType\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></span>"
    + ((stack1 = (helpers.showBadge || (depth0 && depth0.showBadge) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),(depth0 != null ? depth0.Rejected : depth0),(depth0 != null ? depth0.IsExpired : depth0),{"name":"showBadge","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><span class=\"DateWrapper col-3\"><span class=\"Date\">"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</span></span></div></div></li>";
},"8":function(container,depth0,helpers,partials,data) {
    return "New";
},"10":function(container,depth0,helpers,partials,data) {
    return "pending ";
},"12":function(container,depth0,helpers,partials,data) {
    return "rejected ";
},"14":function(container,depth0,helpers,partials,data) {
    return "Expired ";
},"16":function(container,depth0,helpers,partials,data) {
    return "filtered";
},"18":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)));
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"StatusWrapper col-3 \" ><span class=\"Status\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></span>";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge pendingDocBadge\"  title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge deniedDocBadge\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"rejectedDocumentBadgeHoverText",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression((helpers.customInfoBubble || (depth0 && depth0.customInfoBubble) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/comments_read.svg",null,(depth0 != null ? depth0.RejectionReason : depth0),{"name":"customInfoBubble","hash":{},"data":data}));
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsExpired : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge expiredDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"useData":true});})();
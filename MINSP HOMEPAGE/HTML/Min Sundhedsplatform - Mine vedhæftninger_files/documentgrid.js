(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Documents = templates.Documents || {};templates = templates.ViewDocument = templates.ViewDocument || {};templates['DocumentGrid'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"viewdocument",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreText : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Error : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SeparateByStatus : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(39, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PostText : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"ptext\">"
    + container.escapeExpression(((helper = (helper = helpers.PreText || (depth0 != null ? depth0.PreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PreText","hash":{},"data":data}) : helper)))
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card alert\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/warning.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"errorAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\"></img><p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"errorText",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h2 class=\"header\" id=\"documentWidgetTitle\">"
    + container.escapeExpression(((helper = (helper = helpers.AcceptedDocumentsTitle || (depth0 != null ? depth0.AcceptedDocumentsTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AcceptedDocumentsTitle","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AcceptedDocumentsHelpText : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoAcceptedDocumentsData : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoPendingDocumentsData : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoRejectedDocumentsData : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.simpleInfoBubble || (depth0 && depth0.simpleInfoBubble) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AcceptedDocumentsHelpText : depth0),{"name":"simpleInfoBubble","hash":{},"data":data}));
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"no-content\"><p class=\"ptext nodata\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"nodatatext",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"documenttable column_2\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AcceptedDocuments : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEven || (depth0 && depth0.ifEven) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"ifEven","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(17, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"documents\"><div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card accepted\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BadgeText : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p></div></img></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Final : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge approvedDocBadge\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"15":function(container,depth0,helpers,partials,data) {
    return "</div>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card accepted\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BadgeText : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p></div></img></div></div>";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h2 class=\"header\" id=\"pendingTitle\">"
    + container.escapeExpression(((helper = (helper = helpers.PendingDocumentsTitle || (depth0 != null ? depth0.PendingDocumentsTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PendingDocumentsTitle","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingDocumentsHelpText : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2><div class=\"documenttable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingDocuments : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"22":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.simpleInfoBubble || (depth0 && depth0.simpleInfoBubble) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingDocumentsHelpText : depth0),{"name":"simpleInfoBubble","hash":{},"data":data}));
},"24":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEven || (depth0 && depth0.ifEven) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"ifEven","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"documents\"><div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card pending\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\"><span class=\"statusBadge pendingDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p></div></img></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Final : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card pending\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\"><span class=\"statusBadge pendingDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p></div></img></div></div>";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h2 class=\"header\" id=\"rejectedTitle\">"
    + container.escapeExpression(((helper = (helper = helpers.RejectedDocumentsTitle || (depth0 != null ? depth0.RejectedDocumentsTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RejectedDocumentsTitle","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectedDocumentsHelpText : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2><div class=\"documenttable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectedDocuments : depth0),{"name":"each","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"30":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.simpleInfoBubble || (depth0 && depth0.simpleInfoBubble) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectedDocumentsHelpText : depth0),{"name":"simpleInfoBubble","hash":{},"data":data}));
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEven || (depth0 && depth0.ifEven) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"ifEven","hash":{},"fn":container.program(33, data, 0),"inverse":container.program(36, data, 0),"data":data})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"documents\"><div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card rejected\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\"><span class=\"statusBadge deniedDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectionReason : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></img></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Final : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"rejectionReason\" >"
    + container.escapeExpression(((helper = (helper = helpers.RejectionReason || (depth0 != null ? depth0.RejectionReason : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RejectionReason","hash":{},"data":data}) : helper)))
    + "</p>";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card rejected\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\"><p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)))
    + "</p><p class=\"docinfo\"><span class=\"statusBadge deniedDocBadge\"  title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectionReason : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></img></div></div>";
},"37":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"rejectionReason\">"
    + container.escapeExpression(((helper = (helper = helpers.RejectionReason || (depth0 != null ? depth0.RejectionReason : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RejectionReason","hash":{},"data":data}) : helper)))
    + "</p>";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<h2 class=\"header\" id=\"documentWidgetTitle\">"
    + container.escapeExpression(((helper = (helper = helpers.AllDocumentsTitle || (depth0 != null ? depth0.AllDocumentsTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AllDocumentsTitle","hash":{},"data":data}) : helper)))
    + "</h2>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoDocumentsData : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"documenttable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Documents : depth0),{"name":"each","hash":{},"fn":container.program(41, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEven || (depth0 && depth0.ifEven) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"ifEven","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(56, data, 0),"data":data})) != null ? stack1 : "");
},"42":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"documents\"><div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "")
    + "<p class=\"docinfo\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.program(50, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectionReason : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></img></div>";
},"43":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"doctitle\">"
    + container.escapeExpression(((helper = (helper = helpers.DocDesc || (depth0 != null ? depth0.DocDesc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocDesc","hash":{},"data":data}) : helper)))
    + "</p>";
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"doctitle nobadge\">"
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "</p>";
},"48":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge pendingDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(51, data, 0),"inverse":container.program(53, data, 0),"data":data})) != null ? stack1 : "");
},"51":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge deniedDocBadge\">"
    + container.escapeExpression(((helper = (helper = helpers.RejectedBadgeText || (depth0 != null ? depth0.RejectedBadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RejectedBadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BadgeText : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"54":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"statusBadge acceptedDocBadge\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span>";
},"56":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div id=\"Doc"
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.ToolTipString || (depth0 != null ? depth0.ToolTipString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ToolTipString","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + container.escapeExpression(((helper = (helper = helpers.DocType || (depth0 != null ? depth0.DocType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DocType","hash":{},"data":data}) : helper)))
    + "\" date=\""
    + container.escapeExpression(((helper = (helper = helpers.Date || (depth0 != null ? depth0.Date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Date","hash":{},"data":data}) : helper)))
    + "\" class=\"document card\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\"><img src=\""
    + container.escapeExpression(((helper = (helper = helpers.IconUrl || (depth0 != null ? depth0.IconUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconUrl","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + container.escapeExpression(((helper = (helper = helpers.IconAltText || (depth0 != null ? depth0.IconAltText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"IconAltText","hash":{},"data":data}) : helper)))
    + "\"><div class=\"docsummary\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(45, data, 0),"data":data})) != null ? stack1 : "")
    + "<p class=\"docinfo\">"
    + container.escapeExpression(((helper = (helper = helpers.TimeStampString || (depth0 != null ? depth0.TimeStampString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TimeStampString","hash":{},"data":data}) : helper)))
    + "</p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.RejectionReason : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PendingApproval : depth0),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Rejected : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</img></div></div>";
},"57":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"topRightElem\"><span class=\"statusBadge pendingDocBadge\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.BadgeHoverText || (depth0 != null ? depth0.BadgeHoverText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeHoverText","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.BadgeText || (depth0 != null ? depth0.BadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BadgeText","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"59":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"topRightElem\"><span class=\"statusBadge deniedDocBadge\">"
    + container.escapeExpression(((helper = (helper = helpers.RejectedBadgeText || (depth0 != null ? depth0.RejectedBadgeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"RejectedBadgeText","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"61":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class=\"ptext\">"
    + container.escapeExpression(((helper = (helper = helpers.PostText || (depth0 != null ? depth0.PostText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PostText","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});})();
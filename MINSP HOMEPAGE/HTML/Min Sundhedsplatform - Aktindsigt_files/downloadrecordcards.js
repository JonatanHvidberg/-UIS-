(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Documents = templates.Documents || {};templates['DownloadRecordCards'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"documents.released",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoData : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card alert\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/warning.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\"></img><p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"errorTextLoadingDocument",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"nodata\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CurrentDocs : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PastDocs : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"noRecentDocumentsToDisplay",{"name":"getStringResource","hash":{},"data":data}))
    + "</p>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"noPastDocumentsToDisplay",{"name":"getStringResource","hash":{},"data":data}))
    + "</p>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CurrentDocs : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PastDocs : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Docs : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "<div id=\"ROIList\" class=\"cardlist column_2 matchHeights\">";
},"11":function(container,depth0,helpers,partials,data) {
    return "<div id=\"oldROIList\" class=\"cardlist column_2 matchHeights\">";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"card\"><div class=\"cardline heading name\">"
    + container.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Title","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDownloadable : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"cardline\">"
    + container.escapeExpression(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Description","hash":{},"data":data}) : helper)))
    + "</div><div class=\"cardline subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.requestDateString || (depth0 != null ? depth0.requestDateString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"requestDateString","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsWarningStatus : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPending : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDownloadable : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"cardline subtle\">"
    + container.escapeExpression(((helper = (helper = helpers.PackageName || (depth0 != null ? depth0.PackageName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PackageName","hash":{},"data":data}) : helper)))
    + "</div>";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"cardline warning\">"
    + container.escapeExpression(((helper = (helper = helpers.statusStringDoc || (depth0 != null ? depth0.statusStringDoc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"statusStringDoc","hash":{},"data":data}) : helper)))
    + "</div>";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPending : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"cardline cardDescription\">"
    + container.escapeExpression(((helper = (helper = helpers.statusStringDoc || (depth0 != null ? depth0.statusStringDoc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"statusStringDoc","hash":{},"data":data}) : helper)))
    + "</div>";
},"21":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"cardline\">"
    + container.escapeExpression(((helper = (helper = helpers.statusStringDoc || (depth0 != null ? depth0.statusStringDoc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"statusStringDoc","hash":{},"data":data}) : helper)))
    + "</div>";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"cardline takeAWhile\"><span class=\"refreshIcon\"></span>"
    + container.escapeExpression(((helper = (helper = helpers.refreshTemplateText || (depth0 != null ? depth0.refreshTemplateText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"refreshTemplateText","hash":{},"data":data}) : helper)))
    + "</div><br /><br />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.IsNotify),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cardline bottom subtle\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"takeAwhileText",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<br /><div class=\"cardline bottom subtle\">"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.PrefLinkString), depth0))
    + "</div>";
},"28":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"formbuttons right\"><a href=\""
    + container.escapeExpression(((helper = (helper = helpers.downloadLink || (depth0 != null ? depth0.downloadLink : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"downloadLink","hash":{},"data":data}) : helper)))
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" class=\"button downloadROI completeworkflow\" autocomplete=\"off\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"downloadButtonText",{"name":"getStringResource","hash":{},"data":data}))
    + "</a></div>";
},"useData":true});})();
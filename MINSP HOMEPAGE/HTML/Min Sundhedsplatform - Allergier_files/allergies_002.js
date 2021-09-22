(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['Allergies'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.Allergies",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"allergycontainer\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Pretext : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ContainDxrOrg : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoDataText : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"cardlist hoverable column_3\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.currentList : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.addbuttonlabel : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingAddList : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingEditList : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingDeleteList : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pretext\">"
    + container.escapeExpression(((helper = (helper = helpers.Pretext || (depth0 != null ? depth0.Pretext : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Pretext","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Community.NonEpicPretextBanner",depth0,{"name":"addTemplate","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"nodata\">"
    + container.escapeExpression(((helper = (helper = helpers.NoDataText || (depth0 != null ? depth0.NoDataText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NoDataText","hash":{},"data":data}) : helper)))
    + "</span>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.currentList : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"card clinicalcard allergycard withButton\" data-index=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.DisplayObject : depth0)) != null ? stack1.DataIndex : stack1), depth0))
    + "\">"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.ClinicalDataCard",(depth0 != null ? depth0.DisplayObject : depth0),((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data}))
    + "</div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card addItem noprint\"><a data-id=\"additem\" href=\"#\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.addbuttonlabel || (depth0 != null ? depth0.addbuttonlabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"addbuttonlabel","hash":{},"data":data}) : helper)))
    + "\"><span class=\"vcenter\"><span class=\"addlabel\" aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.addbuttonlabel || (depth0 != null ? depth0.addbuttonlabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"addbuttonlabel","hash":{},"data":data}) : helper)))
    + "</span></span></a></div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"cardlist hoverable column_3\"><h2 class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.addsectionheader || (depth0 != null ? depth0.addsectionheader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"addsectionheader","hash":{},"data":data}) : helper)))
    + "</h2>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingAddList : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"cardlist hoverable column_3\"><h2 class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.editsectionheader || (depth0 != null ? depth0.editsectionheader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"editsectionheader","hash":{},"data":data}) : helper)))
    + "</h2>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingEditList : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"cardlist hoverable column_3\"><h2 class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.deletesectionheader || (depth0 != null ? depth0.deletesectionheader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"deletesectionheader","hash":{},"data":data}) : helper)))
    + "</h2>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pendingDeleteList : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});})();
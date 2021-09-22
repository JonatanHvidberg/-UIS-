(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPListAbbrev'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreText : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<ul class=\"testresultspoc list TestResultsList\">"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasNoData : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"pretext\">"
    + container.escapeExpression(((helper = (helper = helpers.PreText || (depth0 != null ? depth0.PreText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PreText","hash":{},"data":data}) : helper)))
    + "</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"TRPCareteamParent list cardlist hoverable TRPRegistryList\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Components : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPListAbbrevPartial",depth0,((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.List : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"StickyHeaderBlock\" ><div class=\"abbrev_header\">"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TestResultFormattedDate@",(depth0 != null ? depth0.FormattedDate : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span aria-hidden=\"true\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DateHeaderTemplate",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TestResultFormattedDate@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TestResultFormattedDate@",(depth0 != null ? depth0.FormattedDateFullMonth : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DateHeaderTemplate",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@TestResultFormattedDate@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + "</div><div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.testResults : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></li>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<ul class=\"TRPCareteamParent list cardlist hoverable TRPTestResultList\"><li tabindex=\"0\" role=\"button\" class=\"SingleResult TRPComponentHeader TRPComponentAbbrev TRPCareteam anchorListElement "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultDetailsLink",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.Key || (depth0 != null ? depth0.Key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Key","hash":{},"data":data}) : helper)))
    + "\" data-id=\"testresult\"><table class=\"TRPComponentAbbrevTable\"><tr>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<td class=\"nameColumn\"><span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.wasOriginallyUpdated : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAbnormal : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasComment : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></td><td class=\"iconColumn\"><span class=\"ListIcon\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),3,{"name":"ifEquals","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),4,{"name":"ifEquals","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></td></tr></table></li>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Components : depth0),{"name":"each","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"10":function(container,depth0,helpers,partials,data) {
    return "";
},"12":function(container,depth0,helpers,partials,data) {
    return "Read";
},"14":function(container,depth0,helpers,partials,data) {
    return "<td class=\"newResultIndicatorColumn\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NotYetViewedTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><div class=\"newResultIndicator\"></div></td>";
},"16":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdatedResultText",{"name":"getStringResource","hash":{},"data":data}))
    + "&nbsp;";
},"18":function(container,depth0,helpers,partials,data) {
    return "<img class=\"abnormalicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/abnormal_result.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"CommentIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CommentTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CommentTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"21":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/comments_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"23":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/comments_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LabIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"26":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/lab_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"28":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/lab_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ImagingIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"31":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/imaging_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"33":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/imaging_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.program(38, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ProcedureIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"36":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/procedure_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"38":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/procedure_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0),"inverse":container.program(43, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"41":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/default_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"43":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/default_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"45":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPListAbbrevPartial",depth0,{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true});})();
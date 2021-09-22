(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['TRPList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    "
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TestResults",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"pretext\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreText",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<ul class=\"testresultspoc list TestResultsList "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" >"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasNoData : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasSearch : depth0),(depth0 != null ? depth0.TestResultTimeline : depth0),{"name":"ifAny","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"nodatalistelement nohover testresultheader\"><div class=\"BeforeTestResultsList grid\"><div class=\"row\"><div class=\"col-3\">"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPSearchBar",depth0,((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ViewBagProperties : depth0)) != null ? stack1.HasIPEncounter : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"col-4\"><div class=\"ToggleWrapper tr_poc_header_component\" data-id=\"toggleWrapper\" tabIndex=\"-1\"><input data-id=\"toggleinpatient\" class=\"ToggleInpatient\" role=\"checkbox\" type=\"checkbox\" tabindex=\"0\" id=\"showHospitalResults-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowHospitalResults",{"name":"getStringResource","hash":{},"data":data}))
    + "\""
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ViewBagProperties : depth0)) != null ? stack1.IPFiltered : stack1),"0",{"name":"ifEquals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><label aria-hidden=\"true\" class=\"ToggleInpatientString Colored\" data-id=\"toggleLabel\" tabindex=\"-1\" for=\"showHospitalResults-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowHospitalResults",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></div></div>";
},"4":function(container,depth0,helpers,partials,data) {
    return "checked";
},"6":function(container,depth0,helpers,partials,data) {
    return "cardlist hoverable matchHeights column_2";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"nodatalistelement nohover\"><span class=\"nodata\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></li>";
},"9":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@RegistryName@",(depth0 != null ? depth0.RegistryName : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoRegistryDataToDisplay",{"name":"getStringResource","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@RegistryName@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoDataToDisplay",{"name":"getStringResource","hash":{},"data":data}))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FilterInpatient : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasIPEncounter : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "<a href =\"#\" class=\"Clickable\" data-id=\"toggleinpatient\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowIPLink",{"name":"getStringResource","hash":{},"data":data}))
    + "</a>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRegistryFilterActive : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(19, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Components : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"registryFilteredComponentCard\">"
    + ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPListPartial",depth0,((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"timeLine\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TestResultTimeline : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.shouldRenderOnClient : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li><div class=\"timeLineSection\"><ul class=\"list cardlist hoverable matchHeights column_2 TRPTimelineList\"><div class=\"timeLineHeader\"><table class=\"TRPDate\"><tr><td><span aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedShortDate || (depth0 != null ? depth0.FormattedShortDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedShortDate","hash":{},"data":data}) : helper)))
    + "</span><span class=\"clearlabel\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedShortDateFullMonth || (depth0 != null ? depth0.FormattedShortDateFullMonth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedShortDateFullMonth","hash":{},"data":data}) : helper)))
    + "</span></td></tr><tr><td class=\"TRPYear\" colspan=\"2\" >"
    + container.escapeExpression(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"year","hash":{},"data":data}) : helper)))
    + "</td></tr></table></div><div class=\"timeLineDetails\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.testResults : depth0),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></ul></div></li>";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"testResultAndComponents "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hasOnlyOneComponent : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isLeftSideRender : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><li class=\"SingleResult TRPComponentHeader TRPCareteam "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "\"title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultDetailsLink",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.Key || (depth0 != null ? depth0.Key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Key","hash":{},"data":data}) : helper)))
    + "\" data-id=\"selectda\"><a href=\"#\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.Key || (depth0 != null ? depth0.Key : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Key","hash":{},"data":data}) : helper)))
    + "\" data-id=\"selectda\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TestResultDetailsLink",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><table class=\"TRPComponentHeaderTable\"><tr><td class=\"newResultIndicatorColumn\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NotYetViewedTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><div class=\"newResultIndicator\"></div></td><td class=\"nameColumn\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAbnormal : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasComment : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</td><td class=\"iconColumn\"><span class=\"ListIcon\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),3,{"name":"ifEquals","hash":{},"fn":container.program(54, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ResultType : depth0),4,{"name":"ifEquals","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></td></tr></table></a></li><div class=\"dashboardComponentCard \">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Components : depth0),{"name":"each","hash":{},"fn":container.program(64, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.needsBlankCard : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"23":function(container,depth0,helpers,partials,data) {
    return " singleComponentTestResult";
},"25":function(container,depth0,helpers,partials,data) {
    return " leftSideCard";
},"27":function(container,depth0,helpers,partials,data) {
    return "";
},"29":function(container,depth0,helpers,partials,data) {
    return " Read";
},"31":function(container,depth0,helpers,partials,data) {
    return "newResultCard";
},"33":function(container,depth0,helpers,partials,data) {
    return "Read";
},"35":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdatedResultText",{"name":"getStringResource","hash":{},"data":data}))
    + "&nbsp;";
},"37":function(container,depth0,helpers,partials,data) {
    return "<img class=\"abnormalicon\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/abnormal_result.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AbnormalIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"CommentIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CommentTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CommentTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"40":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/comments_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"42":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/comments_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.program(47, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LabIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"45":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/lab_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"47":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/lab_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ImagingIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"50":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/imaging_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"52":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/imaging_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"54":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0),"inverse":container.program(57, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ProcedureIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"55":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/procedure_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"57":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/procedure_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"59":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"ListIcon\" src=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ReadStatus : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(62, data, 0),"data":data})) != null ? stack1 : "")
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherIconAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"60":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/default_unread.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"62":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/test_results/default_read.svg",{"name":"makeStaticLink","hash":{},"data":data}));
},"64":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Clinical.TRPListPartial",depth0,((stack1 = (data && data.root)) && stack1.RootInfo),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "");
},"66":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card noprint\"></div>";
},"useData":true});})();
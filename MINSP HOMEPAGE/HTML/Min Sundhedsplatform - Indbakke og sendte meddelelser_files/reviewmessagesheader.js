(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Messaging = templates.Messaging || {};templates['ReviewMessagesHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"BeforeList noprint\">"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Messaging.Review",{"name":"setStringNamespace","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OldestRenderedDate@",(depth0 != null ? depth0.OldestRenderedDate : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@UndeleteCount@",(depth0 != null ? depth0.UndeleteCount : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"tabs noprint\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Folders : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"filters extraWide noprint\"><div class=\"search noprint\"><label class=\"clearlabel\" for=\"messaging-search-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FreeTextSearchLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><input id=\"messaging-search-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" name=\"SearchList\" class=\"SearchList "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SearchString : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.SearchString || (depth0 != null ? depth0.SearchString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SearchString","hash":{},"data":data}) : helper)))
    + "\" maxlength=\"256\" placeholder=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"search\"/>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SearchString : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><label class=\"subtlecolor\" aria-hidden=\"true\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SortByLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><select id=\"sortby_reviewmessages_"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"sortby\" data-id=\"sort\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SortByLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Sorts : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>"
    + ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnfinishedTask : depth0),(depth0 != null ? depth0.HasUnreadMessages : depth0),(depth0 != null ? depth0.HasMultipleOrganizations : depth0),{"name":"ifAny","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasMultipleOrganizations : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnfinishedTask : depth0),(depth0 != null ? depth0.HasUnreadMessages : depth0),{"name":"ifAny","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"actionlinks\"><input type=\"button\" class=\"undelete sm-alignStart button editButton "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UndeleteCount : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "\" data-id=\"undelete\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UndeleteTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UndeleteTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UndeleteCount : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + " value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UndeleteLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnreadMessages : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OldestRenderedDate@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "<iframe src=\"\" class=\"hidden\" id=\"downloader"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\"></iframe></div>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<a href=\"#\" class=\"bodyTextColor\" role=\"button\" id=\"mailbox_"
    + container.escapeExpression(((helper = (helper = helpers.ProgrammaticValue || (depth0 != null ? depth0.ProgrammaticValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProgrammaticValue","hash":{},"data":data}) : helper)))
    + "_"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.ComponentNumber), depth0))
    + "\" data-id=\"mailbox\" data-value=\""
    + container.escapeExpression(((helper = (helper = helpers.ProgrammaticValue || (depth0 != null ? depth0.ProgrammaticValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProgrammaticValue","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "\"       "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ProgrammaticValue : depth0),((stack1 = (data && data.root)) && stack1.Mailbox),{"name":"ifEquals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "</a>";
},"2":function(container,depth0,helpers,partials,data) {
    return "data-checked=\"checked\" aria-pressed=\"true\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "notsearched";
},"6":function(container,depth0,helpers,partials,data) {
    return "<input type=\"image\" class=\"noprint imgbutn __web-inspector-hide-shortcut__\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelSearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelSearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" name=\"msglist_inbox_lmSrchBtn\" value=\"1\" data-id=\"searchimg\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"../images/close.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" autocomplete=\"off\" />";
},"8":function(container,depth0,helpers,partials,data) {
    return "<input type=\"image\" class=\"noprint imgbutn __web-inspector-hide-shortcut__\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SearchTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" name=\"msglist_inbox_lmSrchBtn\" value=\"1\" data-id=\"searchimg\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"../images/search_small.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" autocomplete=\"off\" />";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.ProgrammaticValue || (depth0 != null ? depth0.ProgrammaticValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProgrammaticValue","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.SortBy),(depth0 != null ? depth0.ProgrammaticValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "</option>";
},"11":function(container,depth0,helpers,partials,data) {
    return "selected=\"selected\"";
},"13":function(container,depth0,helpers,partials,data) {
    return "<label class=\"customfilters\" id=\"filters_label\" aria-hidden=\"true\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FiltersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<select id=\"messaging-organizationfilter-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"filter\" data-id=\"filter\" autocomplete=\"off\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FiltersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Filters : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.ProgrammaticValue || (depth0 != null ? depth0.ProgrammaticValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProgrammaticValue","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Filter),(depth0 != null ? depth0.ProgrammaticValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "</option>";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<select id=\"messaging-customfilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" name=\"customerfilters\" data-id=\"applyfilters\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FiltersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><option value=\"None\" "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnfinishedTask : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnfilteredMessageListLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnfinishedTask : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnreadMessages : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasUnfinishedTask : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option value=\"Unfinished\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UnfinishedTasksFilter : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnfinishedTasksFiltersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option value=\"Unread\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.UnreadMessagesFilter : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnreadMessagesFilterLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>";
},"25":function(container,depth0,helpers,partials,data) {
    return "";
},"27":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanMarkSome : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<input type=\"button\" class=\"markall sm-alignStart button editButton\" data-id=\"markallasread\" data-showwarning=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CantMarkSome : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(33, data, 0),"data":data})) != null ? stack1 : "")
    + "\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MarkAllAsRead",{"name":"getStringResource","hash":{},"data":data}))
    + "\">";
},"31":function(container,depth0,helpers,partials,data) {
    return "1";
},"33":function(container,depth0,helpers,partials,data) {
    return "0";
},"useData":true});})();
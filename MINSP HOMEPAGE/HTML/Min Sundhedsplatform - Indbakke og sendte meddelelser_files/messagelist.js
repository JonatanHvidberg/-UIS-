(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Messaging = templates.Messaging || {};templates['MessageList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Messaging.Review",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<ul class=\"MessageList list hoverable collapsible\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.List : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return container.escapeExpression((helpers.setOrganization || (depth0 && depth0.setOrganization) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Organization : depth0),{"name":"setOrganization","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CommunityMessageId@",(depth0 != null ? depth0.CommunityId : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CommunityMessageIdUrlEncoded@",(depth0 != null ? depth0.CommunityIdUrlEncoded : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addLinkMnemonic || (depth0 && depth0.addLinkMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@RemoteAppLink@","RemoteAppLinkTitle","/Messaging/Review?eMid=@MYCHART@CommunityMessageIdUrlEncoded@",((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.OrganizationId : stack1),true,{"name":"addLinkMnemonic","hash":{},"data":data}))
    + "<li class=\"hidden SingleMessage "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasIncompleteTask : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsOpened : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WasRead : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.IsLocal : stack1),{"name":"unless","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.InTransit : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\"toggle\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),(depths[1] != null ? depths[1].ListOffset : depths[1]),{"name":"addition","hash":{},"data":data}))
    + "\"><div class=\"head grid compact\"><div class=\"row message_header\" role=\"button\" tabindex=\"0\" aria-expanded=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsOpened : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\" ><div class=\"clearlabel\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WasRead : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.program(26, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"col-4\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Direction : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(33, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<div class=\"SenderDetails\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Direction : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.program(40, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelSendInstant",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><span class=\"Date\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedInstant || (depth0 != null ? depth0.FormattedInstant : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedInstant","hash":{},"data":data}) : helper)))
    + "</span></div></div><div class=\"col-7 MessageSummary\"><div class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelSubject",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WasRead : depth0),{"name":"unless","hash":{},"fn":container.program(42, data, 0, blockParams, depths),"inverse":container.program(46, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<span class=\"Preview\" aria-hidden=\"true\">"
    + container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.BodyPreview : depth0),{"name":"raw","hash":{},"data":data}))
    + "</span></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsLocal : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0, blockParams, depths),"inverse":container.program(59, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"row\"><span class=\"col-9 actionButtons alignEnd\">"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGESUBJECT@",(depth0 != null ? depth0.Subject : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGEDATETIME@",(depth0 != null ? depth0.FormattedInstant : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<a href=\"#\" role=\"button\" class=\"print otherbutton\" data-id=\"printmessage\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrintAriaLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/print_inline.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" aria-hidden=\"true\" /><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Print",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].Mailbox : depths[1]),"1",{"name":"ifEquals","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.program(62, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGESUBJECT@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGEDATETIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + "</span></div></div><div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasIndeterminateLinks : depth0),{"name":"if","hash":{},"fn":container.program(64, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"MessageDetails\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Subject : depth0),{"name":"if","hash":{},"fn":container.program(66, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WasRead : depth0),{"name":"unless","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Attachments : depth0),{"name":"if","hash":{},"fn":container.program(71, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Tasks : depth0),{"name":"if","hash":{},"fn":container.program(80, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HtmlBody : depth0),{"name":"if","hash":{},"fn":container.program(87, data, 0, blockParams, depths),"inverse":container.program(89, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SmartTextAttachments : depth0),{"name":"if","hash":{},"fn":container.program(92, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGESUBJECT@",(depth0 != null ? depth0.Subject : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGEDATETIME@",(depth0 != null ? depth0.FormattedInstant : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<div class=\"ReplySection\"><span class=\"ReplyButton "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReply : depth0),{"name":"unless","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Mailbox),"1",{"name":"ifEquals","hash":{},"fn":container.program(97, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Mailbox),"1",{"name":"ifEquals","hash":{},"fn":container.program(100, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreviewBodiesInMessageChain : depth0),{"name":"if","hash":{},"fn":container.program(103, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></li>"
    + container.escapeExpression(((helper = (helper = helpers.clearOrganization || (depth0 != null ? depth0.clearOrganization : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearOrganization","hash":{},"data":data}) : helper)))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@RemoteAppLink@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CommunityMessageIdUrlEncoded@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@CommunityMessageId@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"2":function(container,depth0,helpers,partials,data) {
    return " IncompleTasks";
},"4":function(container,depth0,helpers,partials,data) {
    return " expanded";
},"6":function(container,depth0,helpers,partials,data) {
    return " collapsed noprint";
},"8":function(container,depth0,helpers,partials,data) {
    return " Read";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Direction : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " Unread"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.CanMarkAsRead : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " CanMark";
},"14":function(container,depth0,helpers,partials,data) {
    return " CantMark";
},"16":function(container,depth0,helpers,partials,data) {
    return " IsExternal";
},"18":function(container,depth0,helpers,partials,data) {
    return " InTransit";
},"20":function(container,depth0,helpers,partials,data) {
    return "true";
},"22":function(container,depth0,helpers,partials,data) {
    return "false";
},"24":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AccessibileIsNotNewMessageIndicator",{"name":"getStringResource","hash":{},"data":data}));
},"26":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AccessibileIsNewMessageIndicator",{"name":"getStringResource","hash":{},"data":data}));
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.PhotoUrl : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.program(31, data, 0),"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"photo "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.PhotoClass : stack1), depth0))
    + "\" style=\"background-image: url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.PhotoUrl : stack1), depth0))
    + "');\" aria-hidden=\"true\"></span>";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"photo "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.PhotoClass : stack1), depth0))
    + " colorpreview\" style=\"background-image: url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/ProviderSilhouette.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "');\" aria-hidden=\"true\"></span>";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.PhotoUrl : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.program(36, data, 0),"data":data})) != null ? stack1 : "");
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"photo "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.PhotoClass : stack1), depth0))
    + "\" style=\"background-image: url('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.PhotoUrl : stack1), depth0))
    + "');\" aria-hidden=\"true\"></span>";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"photo "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.PhotoClass : stack1), depth0))
    + " colorpreview\" style=\"background-image: url('"
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/ProviderSilhouette.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "');\" aria-hidden=\"true\"></span>";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelSenderName",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><span class=\"SenderName\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.Name : stack1), depth0))
    + "\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.From : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</span>";
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelRecipientName",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><span class=\"RecipientName\" title=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.Name : stack1), depth0))
    + "\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.To : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</span>";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Direction : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(46, data, 0),"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"grid\"><div class=\"row\"><div class=\"col-8\"><span class=\"Subject\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasAttachments : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Subject","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span></div><div class=\"col-4\"><span class=\"UnreadMessage\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnreadByStaffMessage",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></div></div></div>";
},"44":function(container,depth0,helpers,partials,data) {
    return "<img class=\"\" alt=\"\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/attach_Black.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" />";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"Subject\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasAttachments : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Subject","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>";
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Viewers : depth0),{"name":"if","hash":{},"fn":container.program(49, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"49":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"col-6 ExpandedSummary\"><span class=\"Viewers\"><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ViewersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Viewers : depth0),{"name":"each","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></span></span>";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ViewDate@",(depth0 != null ? depth0.ViewDate : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<li class=\""
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ViewDate : depth0),{"name":"unless","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"title=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ViewDate : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),{"name":"if","hash":{},"fn":container.program(57, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Name","hash":{},"data":data}) : helper)))
    + "</li>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ViewDate",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"51":function(container,depth0,helpers,partials,data) {
    return "unviewed";
},"53":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HasViewedWithDateLabel",{"name":"getStringResource","hash":{},"data":data}));
},"55":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HasNotViewedLabel",{"name":"getStringResource","hash":{},"data":data}));
},"57":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListSeparator","Global",{"name":"getStringResource","hash":{},"data":data}));
},"59":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"col-6 ExpandedSummary\"><span class=\"Viewers\"><span class=\"label\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ViewersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><ul><li>"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OrganizationName@",((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.OrganizationName : stack1),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoteOrganizationMessageViewersLabel",{"name":"getStringResource","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@OrganizationName@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + "</li></ul></span></span>";
},"61":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WasRead : depth0),{"name":"if","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "<a href=\"#\" role=\"button\" class=\"inlinedelete\" data-id=\"delete\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),(depths[1] != null ? depths[1].ListOffset : depths[1]),{"name":"addition","hash":{},"data":data}))
    + "\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DeleteAriaLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/delete_inline.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" aria-hidden=\"true\" /><span>"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DeleteSingleMessageLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></a>";
},"64":function(container,depth0,helpers,partials,data) {
    return "<div class=\"indeterminateLinkWarning\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"IndeterminateLinkWarning",{"name":"getStringResource","hash":{},"data":data}))
    + "</div>";
},"66":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelSubject",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><h2 class=\"Subject\">"
    + ((stack1 = ((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Subject","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</h2>";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Direction : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(69, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"69":function(container,depth0,helpers,partials,data) {
    return "<span class=\"UnreadMessage col-4\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UnreadByStaffMessage",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>";
},"71":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"Attachments\"><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AttachmentsLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div class=\"grid\"><ul class=\"row cardlist list hoverable\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Attachments : depth0),{"name":"each","hash":{},"fn":container.program(72, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div></span>";
},"72":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"attachment col-3\">"
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ATTACHMENTNAME@",(depth0 != null ? depth0.BlobLabel : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DcsID : depth0),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.program(78, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ATTACHMENTNAME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + "</li>";
},"73":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<a class=\"card\" href=\"#\" aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AttachmentClearLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" role=\"button\" data-id=\"viewattachment\" data-attachmentIndex=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" data-dcsId=\""
    + container.escapeExpression(((helper = (helper = helpers.DcsID || (depth0 != null ? depth0.DcsID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"DcsID","hash":{},"data":data}) : helper)))
    + "\" data-filename=\""
    + container.escapeExpression(((helper = (helper = helpers.BlobLabel || (depth0 != null ? depth0.BlobLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BlobLabel","hash":{},"data":data}) : helper)))
    + "\" data-file=\""
    + container.escapeExpression(((helper = (helper = helpers.BlobName || (depth0 != null ? depth0.BlobName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BlobName","hash":{},"data":data}) : helper)))
    + "\" data-extension=\""
    + container.escapeExpression(((helper = (helper = helpers.BlobExtension || (depth0 != null ? depth0.BlobExtension : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BlobExtension","hash":{},"data":data}) : helper)))
    + "\" data-notiffpreview=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.NoTiffPreview : depth0),{"name":"if","hash":{},"fn":container.program(74, data, 0),"inverse":container.program(76, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><span><img class=\"\" alt=\"\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/attach_Black.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" /><span class=\"label\" aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.BlobLabel || (depth0 != null ? depth0.BlobLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BlobLabel","hash":{},"data":data}) : helper)))
    + "</span></span></a>";
},"74":function(container,depth0,helpers,partials,data) {
    return "1";
},"76":function(container,depth0,helpers,partials,data) {
    return "0";
},"78":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a class=\"card\" href=\"#\" aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AttachmentClearLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" role=\"button\" data-id=\"remoteAttachment\" data-attachmentIndex=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><span><img class=\"\" alt=\"\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/attach_Black.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" /><span class=\"label\" aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.BlobLabel || (depth0 != null ? depth0.BlobLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"BlobLabel","hash":{},"data":data}) : helper)))
    + "</span></span></a>";
},"80":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"Tasks\"><span class=\"label clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TasksLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Tasks : depth0),{"name":"each","hash":{},"fn":container.program(81, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></span>";
},"81":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsComplete : depth0),{"name":"if","hash":{},"fn":container.program(82, data, 0),"inverse":container.program(85, data, 0),"data":data})) != null ? stack1 : "");
},"82":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<li class=\"complete\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WebImage : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TaskComplete",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><span>"
    + container.escapeExpression(((helper = (helper = helpers.TaskDescription || (depth0 != null ? depth0.TaskDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TaskDescription","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanPrint : depth0),{"name":"if","hash":{},"fn":container.program(83, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></li>";
},"83":function(container,depth0,helpers,partials,data) {
    var helper;

  return " (<a data-id=\"printtask\" data-ischildindex=\"1\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Print",{"name":"getStringResource","hash":{},"data":data}))
    + "</a>)";
},"85":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"incomplete\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WebImage : depth0),{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TaskIncomplete",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><a href=\"#\" class=\"link\" data-id=\"dotask\" data-ischildindex=\"1\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.TaskDescription || (depth0 != null ? depth0.TaskDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TaskDescription","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"87":function(container,depth0,helpers,partials,data) {
    return "<span class=\"Body\"><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelBody",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HtmlBody : depth0),{"name":"raw","hash":{},"data":data}))
    + "</span>";
},"89":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Body : depth0),{"name":"if","hash":{},"fn":container.program(90, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"90":function(container,depth0,helpers,partials,data) {
    return "<span class=\"Body\"><span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelBody",{"name":"getStringResource","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Body : depth0),{"name":"raw","hash":{},"data":data}))
    + "</span>";
},"92":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SmartTextLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><span class=\"SmartTextAttachments\"><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SmartTextAttachments : depth0),{"name":"each","hash":{},"fn":container.program(93, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></span>";
},"93":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"SmartTextAttachment\"><a href=\"#\" data-id=\"viewsmarttext\" data-ischildindex=\"1\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"95":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"97":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<span class=\"photo "
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.PhotoColor), depth0))
    + " colorpreview\" style=\"background-image: url('"
    + container.escapeExpression(container.lambda(((stack1 = (data && data.root)) && stack1.UserPhoto), depth0))
    + "');\"><span class=\"clearlabel\"></span></span><a href=\"#\" class=\"button newworkflow "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReply : depth0),{"name":"unless","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\"replyto\" data-index=\""
    + container.escapeExpression((helpers.addition || (depth0 && depth0.addition) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),((stack1 = (data && data.root)) && stack1.ListOffset),{"name":"addition","hash":{},"data":data}))
    + "\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ReplyAriaLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReply : depth0),{"name":"unless","hash":{},"fn":container.program(98, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Reply",{"name":"getStringResource","hash":{},"data":data}))
    + "</a>";
},"98":function(container,depth0,helpers,partials,data) {
    return "tabindex=\"-1\" aria-disabled=\"true\" ";
},"100":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReply : depth0),{"name":"unless","hash":{},"fn":container.program(101, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"101":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"CannotReplyLabel\">"
    + container.escapeExpression(((helper = (helper = helpers.CannotReplyLabel || (depth0 != null ? depth0.CannotReplyLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CannotReplyLabel","hash":{},"data":data}) : helper)))
    + "</span>";
},"103":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<span class=\"clearlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AriaLabelBody",{"name":"getStringResource","hash":{},"data":data}))
    + "</span><div class=\"PastReplies\">"
    + container.escapeExpression((helpers.raw || (depth0 && depth0.raw) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreviewBodiesInMessageChain : depth0),{"name":"raw","hash":{},"data":data}))
    + "</div><div class=\"ReplySection\"><span class=\"ReplyButton "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CanReply : depth0),{"name":"unless","hash":{},"fn":container.program(95, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Mailbox),"1",{"name":"ifEquals","hash":{},"fn":container.program(97, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Mailbox),"1",{"name":"ifEquals","hash":{},"fn":container.program(100, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGESUBJECT@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@MESSAGEDATETIME@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.InTransit : depth0),{"name":"if","hash":{},"fn":container.program(104, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Organization : depth0)) != null ? stack1.IsLocal : stack1),{"name":"unless","hash":{},"fn":container.program(106, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"104":function(container,depth0,helpers,partials,data) {
    return "<img class=\"InTransit\" title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"InTransitAlt",{"name":"getStringResource","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"InTransitAlt",{"name":"getStringResource","hash":{},"data":data}))
    + "\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/messaging/intransit.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\"/>";
},"106":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Core.externalorganizationicon",(depth0 != null ? depth0.Organization : depth0),{"name":"addTemplate","hash":{},"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});})();
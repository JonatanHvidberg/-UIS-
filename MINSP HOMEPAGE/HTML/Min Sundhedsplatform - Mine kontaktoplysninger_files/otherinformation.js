(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.PersonalInformation = templates.PersonalInformation || {};templates['OtherInformation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PersonalInformation.OtherInformation",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"header name icon\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.ProxyContextName : depth0)) != null ? stack1.length : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DisplayEditable : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationCardTitle",{"name":"getDisplayString","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@PATIENT@",(depth0 != null ? depth0.ProxyContextName : depth0),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationCardTitleForProxyContext",{"name":"getDisplayString","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@PATIENT@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Editable--><div class=\"otherInformationPretext subtlecolor\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationCardSOGIPretext",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><form class=\"formsection grid compact\"><div class=\"row\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Fields : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"formbuttons buttonList right\"><input type=\"submit\" class=\"button saveButton nextstep\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " /><input type=\"button\" class=\"button cancelButton cancelworkflow\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div></form><div class=\"loadingIndicator jqHidden\"><div class=\"indicator\"></div></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"field"
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + " ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Values : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Type : depth0),3,{"name":"ifEquals","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "\"><label for=\"OtherInformation_"
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRequired : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationItemLabels",null,(depth0 != null ? depth0.FieldId : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</label>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Type : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FieldId : depth0),"class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div>";
},"7":function(container,depth0,helpers,partials,data) {
    return " ghosted";
},"9":function(container,depth0,helpers,partials,data) {
    return " multiselect col-12";
},"11":function(container,depth0,helpers,partials,data) {
    return " col-6";
},"13":function(container,depth0,helpers,partials,data) {
    return "required";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Single Text--><input type=\"text\" name=\""
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Values : depth0),"",{"name":"join","hash":{},"data":data}))
    + "\" id=\"OtherInformation_"
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRequired : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.ValidationSettings),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Type : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Single Category--><select name=\""
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" id=\"OtherInformation_"
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRequired : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><option></option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Categories : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.Number || (depth0 != null ? depth0.Number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Number","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsSelected : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "</option>";
},"21":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Multiple Category--><select name=\""
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" multiple=\"multiple\" size=\"4\" id=\"OtherInformation_"
    + container.escapeExpression(((helper = (helper = helpers.FieldId || (depth0 != null ? depth0.FieldId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FieldId","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsRequired : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><option></option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Categories : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><p class=\"helptext\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationMultipleSelectHelpText",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.Number || (depth0 != null ? depth0.Number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Number","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsSelected : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "</option>";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--Collapsed--><div class=\"grid compact\"><div class=\"row fixed\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Fields : depth0),{"name":"each","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div><div class=\"formbuttons buttonList right\"><input type=\"button\" class=\"button editButton\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EditButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"readOnlyLine col-6\"><div><span class=\"subtle\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationItemLabels",null,(depth0 != null ? depth0.FieldId : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FieldId : depth0),"2",{"name":"ifEquals","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Values : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"28":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.simpleInfoBubble || (depth0 && depth0.simpleInfoBubble) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationSOGIHelpText",{"name":"getDisplayString","hash":{},"data":data}),{"name":"simpleInfoBubble","hash":{},"data":data}));
},"30":function(container,depth0,helpers,partials,data) {
    return "<span class=\"fieldValues hideLongContentWithEllipses\">"
    + container.escapeExpression((helpers.join || (depth0 && depth0.join) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Values : depth0),", ",{"name":"join","hash":{},"data":data}))
    + "</span>";
},"32":function(container,depth0,helpers,partials,data) {
    return "<span class=\"noValue\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherInformationNoValueMessage",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>";
},"useData":true});})();
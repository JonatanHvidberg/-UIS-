(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.PersonalInformation = templates.PersonalInformation || {};templates['ContactInformation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PersonalInformation.ContactInformation",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"name header icon\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ContactInformationCardTitle",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DisplayEditable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Editable--><form class=\"formsection\">"
    + ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),(depth0 != null ? depth0.IsTemporaryAddressDisabled : depth0),{"name":"ifAny","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"permanentInformation\"><div class=\"alert validationmessage noMatchesMessage hidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoMatches",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"permanentAddress addressContainer\"></div><div class=\"grid compact\"><div class=\"row\"><div class=\"homePhone ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HomePhone : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-6\"><label for=\"ContactInformation_HomePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"HomePhone\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.HomePhone || (depth0 != null ? depth0.HomePhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"HomePhone","hash":{},"data":data}) : helper)))
    + "\" id=\"ContactInformation_HomePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"mobilePhone ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.MobilePhone : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-6\"><label for=\"ContactInformation_MobilePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"MobilePhone\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.MobilePhone || (depth0 != null ? depth0.MobilePhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MobilePhone","hash":{},"data":data}) : helper)))
    + "\" id=\"ContactInformation_MobilePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"workPhone ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WorkPhone : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-6\"><label for=\"ContactInformation_WorkPhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"WorkPhone\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.WorkPhone || (depth0 != null ? depth0.WorkPhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"WorkPhone","hash":{},"data":data}) : helper)))
    + "\" id=\"ContactInformation_WorkPhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(22, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(24, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"email ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Email : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-6\"><label for=\"ContactInformation_Email\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EmailLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"email\" name=\"Email\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Email","hash":{},"data":data}) : helper)))
    + "\" id=\"ContactInformation_Email\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Email : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " />"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div></div></div><p class=\"button buttoncheck hidden\" aria-checked=\"false\"><input class=\"buttoncheck\" type=\"checkbox\" id=\"ContactInformation_PermanentDefaultOverrideCheck\"/><label for=\"ContactInformation_PermanentDefaultOverrideCheck\" class=\"buttoncheck\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DefaultOverride",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label></p></div><div class=\"formbuttons buttonList right\"><input type=\"submit\" class=\"button saveButton nextstep\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " /><input type=\"button\" class=\"button cancelButton cancelworkflow\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div></form><div class=\"loadingIndicator jqHidden\"><div class=\"indicator\"></div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"temporaryAddressContent jqHidden\"><div class=\"temporaryHeader header\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"removeTemporaryAddressLinkContainer subtle\"><a href=\"#\" class=\"removeTemporaryAddressLink\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveTemporaryAddressLink",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a></div><div class=\"temporaryInformation\"><div class=\"alert validationmessage noMatchesMessage hidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoMatches",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"temporaryAddress addressContainer\"></div><div class=\"grid compact\"><div class=\"row\"><div class=\"temporaryPhoneNumber ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.PhoneNumber : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-4\"><label for=\"ContactInformation_TemporaryPhoneNumber\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.IsPhoneRequired : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressPhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"PhoneNumber\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.PhoneNumber : stack1), depth0))
    + "\"  id=\"ContactInformation_TemporaryPhoneNumber\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.IsPhoneRequired : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PhoneNumber","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AddressConfiguration : depth0)) != null ? stack1.AddressHxEnabled : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div><p class=\"button buttoncheck hidden\" aria-checked=\"false\"><input class=\"buttoncheck\" type=\"checkbox\" id=\"ContactInformation_TemporaryDefaultOverrideCheck\"/><label for=\"ContactInformation_TemporaryDefaultOverrideCheck\" class=\"buttoncheck\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DefaultOverride",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label></p></div></div><div class=\"permanentHeader header jqHidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PermanentAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"subtle addTemporaryAddressLinkContainer jqHidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddTemporaryAddressPrompt",{"name":"getDisplayString","hash":{},"data":data}))
    + "<span class=\"space\"></span><a href=\"#\" class=\"addTemporaryAddressLink\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddTemporaryAddressLink",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " ghosted";
},"7":function(container,depth0,helpers,partials,data) {
    return " class=\"required\"";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"startDate ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.StartDateDisplay : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-4\"><label for=\"ContactInformation_TemporaryStartDate\" class=\"required\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressStartDateLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input name=\"StartDate\" class=\"date withCalendar\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.StartDateDisplay : stack1), depth0))
    + "\"  id=\"ContactInformation_TemporaryStartDate\" aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.Validation : stack1)) != null ? stack1.StartDate : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " /><a href=\"#\" id=\"ContactInformation_TemporaryStartDate_Calendar\" class=\"calendar\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/calendar.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DatePickerAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /></a>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"StartDate","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"endDate ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.EndDateDisplay : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " col-4\"><label for=\"ContactInformation_TemporaryEndDate\" class=\"required\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressEndDateLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input name=\"EndDate\" class=\"date withCalendar\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.EndDateDisplay : stack1), depth0))
    + "\"  id=\"ContactInformation_TemporaryEndDate\" aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.Validation : stack1)) != null ? stack1.EndDate : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " /><a href=\"#\" id=\"ContactInformation_TemporaryEndDate_Calendar\" class=\"calendar\"><img src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/calendar.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DatePickerAltText",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /></a>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EndDate","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div>";
},"13":function(container,depth0,helpers,partials,data) {
    return "required";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"7",{"name":"ifEquals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"7\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"7",{"name":"ifEquals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>";
},"16":function(container,depth0,helpers,partials,data) {
    return " selected";
},"18":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"1\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"8",{"name":"ifEquals","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"8\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"8",{"name":"ifEquals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>";
},"24":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input id=\"ContactInformation_PreferredDevice\" type=\"hidden\" name=\"PreferredDevice\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.PreferredDevice || (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PreferredDevice","hash":{},"data":data}) : helper)))
    + "\" />";
},"26":function(container,depth0,helpers,partials,data) {
    return "aria-required=\"true\"";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<!--Collapsed--><div class=\"grid\"><div class=\"row\"><div class=\"col-6\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.PermanentAddress : depth0)) != null ? stack1.FormattedValues : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifAny || (depth0 && depth0.ifAny) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),(depth0 != null ? depth0.IsTemporaryAddressDisabled : depth0),{"name":"ifAny","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(42, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"col-6\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_home.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.length : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_mobile.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.length : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_work.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.length : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(57, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><span class=\"fieldValues hideLongContentWithEllipses\"><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/email.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EmailLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.length : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(59, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></div></div></div><div class=\"formbuttons buttonList right\"><input type=\"button\" class=\"button editButton\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EditButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div>";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideTemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(30, data, 0),"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.StartDateDisplay : stack1),{"name":"if","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.FormattedValues : stack1),{"name":"each","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><br />";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.EndDateDisplay : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@STARTDATE@",((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.StartDateDisplay : stack1),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.addStringResourceMnemonic || (depth0 && depth0.addStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ENDDATE@",((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.EndDateDisplay : stack1),{"name":"addStringResourceMnemonic","hash":{},"data":data}))
    + "<span class=\"subtle\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressWithDateRangeLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><br />"
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@STARTDATE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}))
    + container.escapeExpression((helpers.removeStringResourceMnemonic || (depth0 && depth0.removeStringResourceMnemonic) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"@MYCHART@ENDDATE@",{"name":"removeStringResourceMnemonic","hash":{},"data":data}));
},"34":function(container,depth0,helpers,partials,data) {
    return "<span class=\"subtle\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><br />";
},"36":function(container,depth0,helpers,partials,data) {
    return "<span class=\"hideLongContentWithEllipses\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span><br />";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PermanentAddress : depth0)) != null ? stack1.FormattedValues : stack1),{"name":"each","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideTemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return "<span class=\"subtle\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PermanentAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><br />";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.TemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(43, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideTemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"44":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subtle addTemporaryAddressLinkContainer jqHidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddTemporaryAddressPrompt",{"name":"getDisplayString","hash":{},"data":data}))
    + "<span class=\"space\"></span><a href=\"#\" class=\"addTemporaryAddressLink\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddTemporaryAddressLink",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a></div>";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideTemporaryAddress : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(47, data, 0),"data":data})) != null ? stack1 : "");
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.PhoneNumber : stack1),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_mobile.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryAddressPhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.TemporaryAddress : depth0)) != null ? stack1.PhoneNumber : stack1), depth0))
    + "<span class=\"subtle\">&nbsp;"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"TemporaryPhoneNumberIdentifier",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><br />";
},"50":function(container,depth0,helpers,partials,data) {
    return "<span class=\"noValue\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ContactInformationNoValueMessage",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>";
},"52":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression(((helper = (helper = helpers.HomePhone || (depth0 != null ? depth0.HomePhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"HomePhone","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"7",{"name":"ifEquals","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"53":function(container,depth0,helpers,partials,data) {
    return "<span class=\"subtle\">&nbsp;"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceIdentifier",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression(((helper = (helper = helpers.MobilePhone || (depth0 != null ? depth0.MobilePhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"MobilePhone","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"57":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression(((helper = (helper = helpers.WorkPhone || (depth0 != null ? depth0.WorkPhone : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"WorkPhone","hash":{},"data":data}) : helper)))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"8",{"name":"ifEquals","hash":{},"fn":container.program(53, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"59":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Email","hash":{},"data":data}) : helper)));
},"useData":true});})();
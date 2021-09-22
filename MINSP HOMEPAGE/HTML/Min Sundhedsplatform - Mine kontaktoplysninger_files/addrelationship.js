(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Relationships = templates.Relationships || {};templates['AddRelationship'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Demographics.Relationships",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DisplayEditable : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(25, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div model-id=\"NewModel\" class=\"jqhidden relationship-content card withButton\"><div class=\"jqHidden saveFailSpacer addFail\"><p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveFailedWarning",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p></div><div class=\"jqHidden helptip closeBG addFail\"><p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveFailedWarning",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p></div><form class=\"formsection\"><div class=\"name header\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddRelationshipHeader",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"cardline halfwidth ghostInput relationshipname"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FirstName : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"NewRelationshipFirstName\" class=\"required\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipFirstNameLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" id=\"NewRelationshipFirstName\" name=\"RelationshipFirstName\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.FirstName || (depth0 != null ? depth0.FirstName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FirstName","hash":{},"data":data}) : helper)))
    + "\" aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipFirstNameLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" />"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipFirstName","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"cardline halfwidth ghostInput relationshipname"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LastName : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"NewRelationshipLastName\" class=\"required\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipLastNameLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" id=\"NewRelationshipLastName\" name=\"RelationshipLastName\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.LastName || (depth0 != null ? depth0.LastName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"LastName","hash":{},"data":data}) : helper)))
    + "\" aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " />"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipLastName","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"cardline halfwidth ghostInput "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " relationshiptype\"><label for=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_RelationshipType\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.RelationshipToPatient : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipTypeLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><select name=\"RelationshipType\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_RelationshipType\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.RelationshipToPatient : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><option></option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.CategoryItems : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipType","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"cardline halfwidth primary-contact-checkbox\"><p class=\"button buttoncheck\" name=\"PrimaryContactButtonCheckbox\"><input type=\"checkbox\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_PrimaryCheckbox\" class=\"buttoncheck\"/><label for=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_PrimaryCheckbox\" class=\"buttoncheck\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrimaryContactCheckboxLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label></p></div><div class=\"permanentHeader header jqHidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PermanentAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"permanentInformation\"><div class=\"relationshipAddress addressContainer\"></div><div class=\"homePhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_HomePhone\" data-name=\"HomePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"HomePhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_HomePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"1\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"mobilePhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_MobilePhone\" data-name=\"MobilePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"MobilePhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_MobilePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"3\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"3",{"name":"ifEquals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"workPhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_WorkPhone\" data-name=\"WorkPhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"WorkPhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_WorkPhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PreferredDevice : depth0),"2",{"name":"ifEquals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"2\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"2",{"name":"ifEquals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNonPatientProxyRecord : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(21, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"email cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_Email\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EmailLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"email\" name=\"Email\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_Email\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Email : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + "/>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div></div><div class=\"formbuttons buttonList right\"><input type=\"submit\" class=\"button saveButton nextstep saveNewModel\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " /><input type=\"button\" class=\"button cancelButton cancelworkflow cancelNewModel\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div></form><div class=\"loadingIndicator jqHidden\"><div class=\"indicator\"></div></div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return " ghosted";
},"4":function(container,depth0,helpers,partials,data) {
    return "ghosted";
},"6":function(container,depth0,helpers,partials,data) {
    return "required";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Value : depth0),((stack1 = ((stack1 = (data && data.root)) && stack1.RelationToPatient)) && stack1.Value),{"name":"ifEquals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "</option>";
},"11":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    return " selected";
},"17":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<input id=\"ContactInformation_PreferredDevice\" type=\"hidden\" name=\"PreferredDevice\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" />";
},"23":function(container,depth0,helpers,partials,data) {
    return " aria-required=\"true\" ";
},"25":function(container,depth0,helpers,partials,data) {
    return "<div model-id=\"NewModel\" class=\"relationship-content card addItem noprint row1\"><a href=\"#\"><span class=\"vcenter\"><span class=\"addlabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddButton",{"name":"getStringResource","hash":{},"data":data}))
    + "</span></span></a></div>";
},"useData":true});})();
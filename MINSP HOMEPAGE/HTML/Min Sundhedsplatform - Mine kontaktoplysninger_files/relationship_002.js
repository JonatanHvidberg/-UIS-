(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Relationships = templates.Relationships || {};templates['Relationship'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Demographics.Relationships",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div model-id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "\" class=\"jqhidden relationship-content card"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrivate : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrivate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return " withButton";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Private--><div class=\"privatecontact\"><div class=\"name header\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.FormattedName || (depth0 != null ? depth0.FormattedName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedName","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.Title : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrimary : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"privatecontactmessage\"><div>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrivateContactMessageHeader",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"subtle\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrivateContactMessageBody",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div></div></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"subtle relationshipToPatient\"> ("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.Title : stack1), depth0))
    + ")</span>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<span class=\"primaryContactLabel\" name=\"PrimaryContact\" title=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrimaryContactLabelTooltip",{"name":"getDisplayString","hash":{},"data":data}))
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrimaryContactLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DisplayEditable : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(41, data, 0),"data":data})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsVRK : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!--Editable--><form class=\"formsection\"><div class=\"name header editable\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedName || (depth0 != null ? depth0.FormattedName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedName","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrimary : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"cardline halfwidth ghostInput "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " relationshiptype\"><label for=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_RelationshipType\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.RelationshipToPatient : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipTypeLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><select name=\"RelationshipType\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_RelationshipType\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.RelationshipToPatient : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.RelationshipToPatient : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " aria-label=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipTypeLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "\"><option></option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.CategoryItems : stack1),{"name":"each","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RelationshipType","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"cardline halfwidth primary-contact-checkbox "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrimary : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><p class=\"button buttoncheck\" name=\"PrimaryContactButtonCheckbox\"><input type=\"checkbox\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_PrimaryCheckbox\" class=\"buttoncheck\"/><label for=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_PrimaryCheckbox\" class=\"buttoncheck\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PrimaryContactCheckboxLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label></p></div><div class=\"permanentHeader header jqHidden\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PermanentAddressLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</div><div class=\"permanentInformation\"><div class=\"relationshipAddress addressContainer\"></div><div class=\"homePhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_HomePhone\" data-name=\"HomePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"HomePhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_HomePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.HomePhone : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"1\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"mobilePhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_MobilePhone\" data-name=\"MobilePhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"MobilePhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_MobilePhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"3",{"name":"ifEquals","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.MobilePhone : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"3\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"3",{"name":"ifEquals","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " /><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><div class=\"workPhone cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_WorkPhone\" data-name=\"WorkPhone\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhoneNumberLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"phone\" name=\"WorkPhone\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_WorkPhone\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><label title=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" class=\"preferredDeviceSelector"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"2",{"name":"ifEquals","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.WorkPhone : stack1),{"name":"if","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input type=\"checkbox\" class=\"clearradio\" value=\"2\" aria-label=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceTooltip",{"name":"getStringResource","hash":{},"data":data}))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"2",{"name":"ifEquals","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/><img class=\"preferredDeviceSelected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-selected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /><img class=\"preferredDeviceUnselected\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/fave-unselected.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\"\" /></label>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhone","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div><input id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_PreferredDevice\" type=\"hidden\" name=\"PreferredDevice\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" /><div class=\"email cardline halfwidth ghostInput"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label for=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_Email\" class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EmailLabel",{"name":"getDisplayString","hash":{},"data":data}))
    + "</label><input type=\"text\" data-inputtype=\"email\" name=\"Email\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1), depth0))
    + "\" id=\"Relationship_"
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_Email\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RequiredFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Email : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.VRKFieldNames : depth0)) != null ? stack1.Email : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "/>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Email","class=''",{"name":"messageDisplay","hash":{},"data":data}))
    + "</div></div><div class=\"formbuttons buttonList right\"><input type=\"submit\" class=\"button saveButton nextstep\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SaveButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + "/><input type=\"button\" class=\"button cancelButton cancelworkflow\" value=\""
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CancelButton",{"name":"getDisplayString","hash":{},"data":data}))
    + "\" /></div></form><div class=\"loadingIndicator jqHidden\"><div class=\"indicator\"></div></div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<div class=\"helptip vrkBanner infoBG\" tabindex=\"0\"><p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"VRKContact",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p></div>";
},"14":function(container,depth0,helpers,partials,data) {
    return "ghosted";
},"16":function(container,depth0,helpers,partials,data) {
    return "required";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.Value || (depth0 != null ? depth0.Value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Value","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Value : depth0),((stack1 = ((stack1 = (data && data.root)) && stack1.RelationToPatient)) && stack1.Value),{"name":"ifEquals","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.TitleUtf8 || (depth0 != null ? depth0.TitleUtf8 : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TitleUtf8","hash":{},"data":data}) : helper)))
    + "</option>";
},"23":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"25":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"27":function(container,depth0,helpers,partials,data) {
    return " ghosted";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-required=\"true\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Validation : depth0)) != null ? stack1.Required : stack1),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    return " selected";
},"33":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"35":function(container,depth0,helpers,partials,data) {
    return "checked=\"checked\" ";
},"37":function(container,depth0,helpers,partials,data) {
    return " checked=\"checked\" ";
},"39":function(container,depth0,helpers,partials,data) {
    return " aria-required=\"true\" ";
},"41":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!--Collapsed--><div class=\"jqHidden saveFailSpacer saveFail\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsUpdatePending : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"jqHidden helptip saveFail checkBG\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsUpdatePending : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.program(44, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"name header\"><span tabindex=\"-1\" id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "_Name\">"
    + container.escapeExpression(((helper = (helper = helpers.FormattedName || (depth0 != null ? depth0.FormattedName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"FormattedName","hash":{},"data":data}) : helper)))
    + "</span>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.RelationToPatient : depth0)) != null ? stack1.Title : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrimary : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"cardline halfwidth\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.AddressViewModel : depth0)) != null ? stack1.FormattedValues : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"cardline halfwidth rightHalf\"><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_home.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HomePhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1),{"name":"unless","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(55, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_mobile.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"MobilePhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1),{"name":"unless","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(58, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/phone_work.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"WorkPhoneNumberLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1),{"name":"unless","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(60, data, 0),"data":data})) != null ? stack1 : "")
    + "<br /><span class=\"fieldValues hideLongContentWithEllipses\"><img class=\"iconLabel\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/PersonalInformation/email.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" alt=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EmailLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "\"/>"
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1),{"name":"unless","hash":{},"fn":container.program(53, data, 0),"inverse":container.program(62, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></div><div class=\"formbuttons buttonList right\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsViewOnly : depth0),{"name":"if","hash":{},"fn":container.program(64, data, 0),"inverse":container.program(66, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsViewOnly : depth0),{"name":"if","hash":{},"fn":container.program(68, data, 0),"inverse":container.program(70, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><div class=\"loadingIndicator jqHidden\"><div class=\"indicator\"></div></div>";
},"42":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpdateQueuedWarning",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsDeletePending : depth0),{"name":"if","hash":{},"fn":container.program(45, data, 0),"inverse":container.program(47, data, 0),"data":data})) != null ? stack1 : "");
},"45":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveQueuedWarning",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsAddPending : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"48":function(container,depth0,helpers,partials,data) {
    return "<p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AddQueuedWarning",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"50":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AddressViewModel : depth0)) != null ? stack1.FormattedValues : stack1),{"name":"each","hash":{},"fn":container.program(51, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"51":function(container,depth0,helpers,partials,data) {
    return "<span class=\"hideLongContentWithEllipses\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span><br />";
},"53":function(container,depth0,helpers,partials,data) {
    return "<span class=\"noValue\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoValueMessage",{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>";
},"55":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.HomePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"1",{"name":"ifEquals","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"56":function(container,depth0,helpers,partials,data) {
    return "<span class=\"subtle\"> ("
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PreferredDeviceIdentifier",{"name":"getDisplayString","hash":{},"data":data}))
    + ")</span>";
},"58":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MobilePhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"3",{"name":"ifEquals","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.WorkPhone : depth0)) != null ? stack1.Value : stack1), depth0))
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.PreferredDevice : depth0)) != null ? stack1.Value : stack1),"2",{"name":"ifEquals","hash":{},"fn":container.program(56, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"62":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Email : depth0)) != null ? stack1.Value : stack1), depth0));
},"64":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"button\" class=\"button editButton multi disabled explanable\" aria-disabled=\"true\" aria-describedby=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-editbutton-helptext\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EditButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><p id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-editbutton-helptext\" class=\"subtext\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ViewOnlyContactDisabledEditTooltip",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"66":function(container,depth0,helpers,partials,data) {
    return "<input type=\"button\" class=\"button editButton multi\"  value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"EditButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"68":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"button\" class=\"button inlinedelete multi disabled explanable\" aria-disabled=\"true\" aria-describedby=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><p id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" class=\"subtext\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ViewOnlyContactDisabledRemoveTooltip",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsHCA : depth0),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.program(73, data, 0),"data":data})) != null ? stack1 : "");
},"71":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"button\" class=\"button inlinedelete multi disabled explanable\" aria-disabled=\"true\" aria-describedby=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><p id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" class=\"subtext\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HCADisabledRemoveTooltip",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"73":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsVRK : depth0),{"name":"if","hash":{},"fn":container.program(74, data, 0),"inverse":container.program(76, data, 0),"data":data})) != null ? stack1 : "");
},"74":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<input type=\"button\" class=\"button inlinedelete multi disabled explanable\" aria-disabled=\"true\" aria-describedby=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" /><p id=\""
    + container.escapeExpression(((helper = (helper = helpers.ModelId || (depth0 != null ? depth0.ModelId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ModelId","hash":{},"data":data}) : helper)))
    + "-removebutton-helptext\" class=\"subtext\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"VRKDisabledRemoveTooltip",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"76":function(container,depth0,helpers,partials,data) {
    return "<input type=\"button\" class=\"button inlinedelete multi\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"RemoveButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" />";
},"useData":true});})();
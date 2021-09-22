(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Clinical = templates.Clinical || {};templates['PersonalNotesEditor'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"personalnotescontainer\"><h2 class=\"header\">"
    + container.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Title","hash":{},"data":data}) : helper)))
    + "</h2><span class=\"notesubtitle\">"
    + container.escapeExpression(((helper = (helper = helpers.Subtitle || (depth0 != null ? depth0.Subtitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Subtitle","hash":{},"data":data}) : helper)))
    + "</span><div class=\"cardlist noteviewer hoverable personalnotes\"><div class=\"card notecard withButton "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasNotes : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PersonalNoteList : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"buttonList right noprint\"><a class=\"button inlineedit multi\" href=\"#\" data-id=\"editnotes\">"
    + container.escapeExpression(((helper = (helper = helpers.EditButtonText || (depth0 != null ? depth0.EditButtonText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"EditButtonText","hash":{},"data":data}) : helper)))
    + "</a></div></div><div class=\"card addItem addcard noprint "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasNotes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><a data-id=\"additem\" href=\"#\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.AddLabel || (depth0 != null ? depth0.AddLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AddLabel","hash":{},"data":data}) : helper)))
    + "\"><span class=\"vcenter\" ><span class=\"addlabel\" aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.AddLabel || (depth0 != null ? depth0.AddLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"AddLabel","hash":{},"data":data}) : helper)))
    + "</span></span></a></div></div><div class=\"personalnotes noteseditor hidden\"><form><textarea name=\"notes\" class=\"notetextarea\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.TextAreaLabel || (depth0 != null ? depth0.TextAreaLabel : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"TextAreaLabel","hash":{},"data":data}) : helper)))
    + "\" aria-live=\"polite\" rows=\"5\" data-id=\"notesbox\" "
    + ((stack1 = (helpers.validationSettingsAttribute || (depth0 && depth0.validationSettingsAttribute) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ValidationSettings : depth0),{"name":"validationSettingsAttribute","hash":{},"data":data})) != null ? stack1 : "")
    + " ></textarea>"
    + container.escapeExpression((helpers.messageDisplay || (depth0 && depth0.messageDisplay) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"notes",{"name":"messageDisplay","hash":{},"data":data}))
    + "<a href=\"#\" class=\"button personalnotes inlinesave multi\" "
    + container.escapeExpression(((helper = (helper = helpers.disableIfInvalidAttribute || (depth0 != null ? depth0.disableIfInvalidAttribute : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"disableIfInvalidAttribute","hash":{},"data":data}) : helper)))
    + " data-id=\"savenotes\">"
    + container.escapeExpression(((helper = (helper = helpers.SaveButtonText || (depth0 != null ? depth0.SaveButtonText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"SaveButtonText","hash":{},"data":data}) : helper)))
    + "</a><a href=\"#\" class=\"button personalnotes cancelworkflow multi\" data-id=\"cancelnotes\">"
    + container.escapeExpression(((helper = (helper = helpers.CancelButtonText || (depth0 != null ? depth0.CancelButtonText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CancelButtonText","hash":{},"data":data}) : helper)))
    + "</a></form></div></div>";
},"1":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.PersonalNoteList : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"cardline viewonlynotes\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>";
},"useData":true});})();
(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['QuestionnaireDescription'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ForAssigned : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"assigned_qnr_text qnrcomment\" aria-hidden=\"true\">"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageAppointmentDescription",(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span><span class=\"screenreadertext\">"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageAppointmentDescriptionScreenReader",(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<td class=\"qnrcomment\" aria-hidden=\"true\">"
    + container.escapeExpression(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Description","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true});})();
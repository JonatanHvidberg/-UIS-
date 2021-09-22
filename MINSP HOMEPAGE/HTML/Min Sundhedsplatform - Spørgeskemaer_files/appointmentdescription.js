(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['AppointmentDescription'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Date : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.Hyperspace",{"name":"setStringNamespace","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    return "<span aria-hidden=\"true\">"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DescriptionKeyDate : depth0),(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span><span class=\"screenreadertext\">"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DescriptionKeyDateScreenReader : depth0),(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<span>"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DescriptionKeyNoDate : depth0),(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span>";
},"useData":true});})();
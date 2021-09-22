(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['DueDateMobile'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<span>"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageDueDateMobile",(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"useData":true});})();
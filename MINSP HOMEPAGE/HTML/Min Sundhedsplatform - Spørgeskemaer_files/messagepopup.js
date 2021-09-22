(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['MessagePopup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div><span class=\"label\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SubjectHeader : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><p>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Subject : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</p><span class=\"label\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.SenderHeader : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><p><a href=\"\">"
    + container.escapeExpression(((helper = (helper = helpers.Sender || (depth0 != null ? depth0.Sender : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Sender","hash":{},"data":data}) : helper)))
    + "</a></p></div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"\">"
    + container.escapeExpression(((helper = (helper = helpers.Subject || (depth0 != null ? depth0.Subject : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Subject","hash":{},"data":data}) : helper)))
    + "</a>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<a href=\"\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageNoSubject",{"name":"getDisplayString","hash":{},"data":data}))
    + "</a>";
},"useData":true});})();
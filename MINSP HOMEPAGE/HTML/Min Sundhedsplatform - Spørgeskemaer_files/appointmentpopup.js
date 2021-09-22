(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['AppointmentPopup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.WhenMnemonics : depth0)) != null ? stack1.ApptDate : stack1)) != null ? stack1.Value : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"label\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WhereHeader : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>"
    + container.escapeExpression((helpers.addTemplate || (depth0 && depth0.addTemplate) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Questionnaire.Departments",(depth0 != null ? depth0.DepartmentsObject : depth0),{"name":"addTemplate","hash":{},"data":data}))
    + "</div>"
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.Hyperspace",{"name":"setStringNamespace","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"label\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WhatHeader : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span><p class=\"apptwhat\">"
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WhatDetails : depth0),(depth0 != null ? depth0.WhatMnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + "</p><span class=\"label\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WhenHeader : depth0),{"name":"getDisplayString","hash":{},"data":data}))
    + "</span>"
    + ((stack1 = (helpers.ifNotEquals || (depth0 && depth0.ifNotEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifNotEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.WhenDetails : depth0),(depth0 != null ? depth0.WhenMnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}))
    + ((stack1 = (helpers.ifNotEquals || (depth0 && depth0.ifNotEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifNotEquals","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "<a class=\"apptwhen\" href=\"\">";
},"8":function(container,depth0,helpers,partials,data) {
    return "</a>";
},"useData":true});})();
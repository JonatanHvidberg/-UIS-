(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Questionnaire = templates.Questionnaire || {};templates['QuestionnaireList'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"noquestions\"></div><div class=\"questionnairelocked\"></div>"
    + ((stack1 = (helpers.ifGt || (depth0 && depth0.ifGt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.AssignedQuestionnaires : depth0)) != null ? stack1.length : stack1),0,{"name":"ifGt","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifGt || (depth0 && depth0.ifGt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.OptionalQuestionnaires : depth0)) != null ? stack1.length : stack1),0,{"name":"ifGt","hash":{},"fn":container.program(46, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifGt || (depth0 && depth0.ifGt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,((stack1 = (depth0 != null ? depth0.AssignedQuestionnaires : depth0)) != null ? stack1.length : stack1),{"name":"ifGt","hash":{},"fn":container.program(58, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)));
},"1":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.Hyperspace",{"name":"setStringNamespace","hash":{},"data":data}));
},"3":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireList.MyChart",{"name":"setStringNamespace","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"section qnr_list_table\" id=\"assigned_questionnaires\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageAssignedQuestionnairesDescription",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p><div class=\"content\"><table id=\"tbl_assigned_qnrs\" class=\"stackable assignedqnrs\" summary='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageAssignedQuestionnairesSummary",{"name":"getDisplayString","hash":{},"data":data}))
    + "'><colgroup><col class=\"name\" /><col class=\"date\" /></colgroup><thead><tr><th class=\"primary\" title='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireNameHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}))
    + "' scope=\"col\" id=\"tbl_assigned_qnrs_col1\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireNameHeader",{"name":"getDisplayString","hash":{},"data":data}))
    + "</th><th class=\"secondary\" title='"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "' scope=\"col\" id=\"tbl_assigned_qnrs_col0\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CallingApp : depth0),2,{"name":"ifEquals","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.AssignedQuestionnaires : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table></div></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowSeriesText : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "";
},"8":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"header\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageAssignedQuestionnaires",{"name":"getDisplayString","hash":{},"data":data}))
    + "</h2>";
},"10":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireStatusHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}));
},"12":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireDueDateHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}));
},"14":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireStatusHeader",{"name":"getDisplayString","hash":{},"data":data}));
},"16":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireDueDateHeader",{"name":"getDisplayString","hash":{},"data":data}));
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<tr class=\""
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.CallingApp),2,{"name":"ifEquals","hash":{},"fn":container.program(19, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "")
    + "\" title='"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.CallingApp),2,{"name":"ifEquals","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "'data-qnr-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.ID : stack1), depth0))
    + "\" data-context-type=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextType : stack1), depth0))
    + "\"data-context-identifier=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextIdentifier : stack1), depth0))
    + "\" data-is-history=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.IsHistory : depth0), depth0))
    + "\"data-hist-ctx=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.HxData : depth0)) != null ? stack1.HxContext : stack1), depth0))
    + "\" data-hist-ctx-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.HxData : depth0)) != null ? stack1.HxContextID : stack1), depth0))
    + "\"tabindex=\"0\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><td class=\"primary\" headers=\"tbl_assigned_qnrs_col1\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Status : stack1),5,{"name":"ifEquals","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"assigned_qnr_description\" data-index=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Index : depth0), depth0))
    + "\" data-context-type=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextType : stack1), depth0))
    + "\" data-context-identifier=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextIdentifier : stack1), depth0))
    + "\"data-appt-safe-link=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.ApptIdSafe : stack1), depth0))
    + "\" data-type=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.Type : stack1), depth0))
    + "\"data-providers=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.ProvidersString : stack1), depth0))
    + "\" data-provider-ids=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.ProviderIDs : stack1), depth0))
    + "\"data-date=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.LocaleSpecificDueDate : depth0), depth0))
    + "\" data-appt-date=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.DueDateISO : depth0), depth0))
    + "\" data-time=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.TimeISO : stack1), depth0))
    + "\" data-duration=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.Duration : stack1), depth0))
    + "\"data-departments=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.ApptData : depth0)) != null ? stack1.Locations : stack1), depth0))
    + "\"data-msg-safe-link=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MsgData : depth0)) != null ? stack1.MsgIdSafe : stack1), depth0))
    + "\"data-sender=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MsgData : depth0)) != null ? stack1.MsgSender : stack1), depth0))
    + "\" data-sender-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MsgData : depth0)) != null ? stack1.MsgSenderID : stack1), depth0))
    + "\"data-subject=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MsgData : depth0)) != null ? stack1.MsgSubject : stack1), depth0))
    + "\" data-msg-date=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.MsgData : depth0)) != null ? stack1.MsgDateISO : stack1), depth0))
    + "\"data-series=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.SeriesData : depth0)) != null ? stack1.SeriesName : stack1), depth0))
    + "\"><span class=\"assigned_qnr_text\" role=\"note\"></span>"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextType : stack1),1,{"name":"ifEquals","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextType : stack1),2,{"name":"ifEquals","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></td><td class=\"secondary\" headers=\"tbl_assigned_qnrs_col0\"><span role=\"note\">"
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.CallingApp),24,{"name":"ifEquals","hash":{},"fn":container.program(31, data, 0),"inverse":container.program(36, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></td></tr>";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Status : stack1),5,{"name":"ifEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "clickable";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Status : stack1),5,{"name":"ifEquals","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireRowHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}));
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"qnr_completed\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</span>";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<a role=\"link\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</a>";
},"29":function(container,depth0,helpers,partials,data) {
    return "<div id=\"popup_child_div_"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Index : depth0), depth0))
    + "\" class=\"popupiconcontainer\" title=\"\"></div>";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.DueDateISO : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.program(34, data, 0),"data":data})) != null ? stack1 : "");
},"32":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.DueDateISO : depth0), depth0));
},"34":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageBlankDueDate",{"name":"getDisplayString","hash":{},"data":data}));
},"36":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Status : stack1),0,{"name":"ifEquals","hash":{},"fn":container.program(37, data, 0),"inverse":container.program(39, data, 0),"data":data})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireNotStarted",{"name":"getDisplayString","hash":{},"data":data}));
},"39":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Status : stack1),4,{"name":"ifEquals","hash":{},"fn":container.program(40, data, 0),"inverse":container.program(42, data, 0),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireInProgress",{"name":"getDisplayString","hash":{},"data":data}));
},"42":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireCompleted",{"name":"getDisplayString","hash":{},"data":data}));
},"44":function(container,depth0,helpers,partials,data) {
    return "<p class=\"helptext opt_out_qnr_series\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageOptOut",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"46":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"section qnr_list_table\" id=\"optional_questionnaires\"><h2 class=\"header\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageOptionalQuestionnaires",{"name":"getDisplayString","hash":{},"data":data}))
    + "</h2><p>"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageOptionalQuestionnairesDescription",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p><div class=\"content\"><table id=\"tbl_optional_qnrs\" class=\"optionalqnrs stackable\" summary='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ListPageOptionalQuestionnairesSummary",{"name":"getDisplayString","hash":{},"data":data}))
    + "'><colgroup><col class=\"name\" /><col class=\"lastdone\" /></colgroup><thead><tr><th class=\"primary\" title='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireNameHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}))
    + "' scope=\"col\" id=\"tbl_optional_qnrs_col0\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireNameHeader",{"name":"getDisplayString","hash":{},"data":data}))
    + "</th><th class=\"secondary\" title='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LastFilledOutHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}))
    + "' scope=\"col\" id=\"tbl_optional_qnrs_col1\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"LastFilledOutHeader",{"name":"getDisplayString","hash":{},"data":data}))
    + "</th></tr></thead><tbody>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OptionalQuestionnaires : depth0),{"name":"each","hash":{},"fn":container.program(47, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody></table></div></div>";
},"47":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<tr class=\"clickable\" title='"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"QuestionnaireRowHoverHelpText",{"name":"getDisplayString","hash":{},"data":data}))
    + "'data-qnr-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.ID : stack1), depth0))
    + "\" data-context-type=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextType : stack1), depth0))
    + "\"data-context-identifier=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ContextIdentifier : stack1), depth0))
    + "\"tabindex=\"0\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data}) : helper)))
    + "\"><td class=\"primary\" headers=\"tbl_optionalqnrs_col0\"><a aria-hidden=\"true\" class=\"nolinelist\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Questionnaire : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</a>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Description : depth0),{"name":"if","hash":{},"fn":container.program(48, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span role=\"link\" class=\"screenreadertext\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LastFilledOutISO : depth0),{"name":"if","hash":{},"fn":container.program(50, data, 0),"inverse":container.program(52, data, 0),"data":data})) != null ? stack1 : "")
    + "</span></td><td class=\"secondary\" aria-hidden=\"true\" headers=\"tbl_optional_qnrs_col1\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LastFilledOutISO : depth0),{"name":"if","hash":{},"fn":container.program(54, data, 0),"inverse":container.program(56, data, 0),"data":data})) != null ? stack1 : "")
    + "</td></tr>";
},"48":function(container,depth0,helpers,partials,data) {
    return "<div aria-hidden=\"true\" class=\"optional_qnr_description\" colspan=\"2\" headers=\"tbl_optional_qnrs_col0\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.Description : depth0), depth0))
    + "</div>";
},"50":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OptionalQuestionnaireFilledOut : depth0),(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}));
},"52":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayStringWithMnemonics || (depth0 && depth0.getDisplayStringWithMnemonics) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OptionalQuestionnaireNeverFilledOut : depth0),(depth0 != null ? depth0.Mnemonics : depth0),{"name":"getDisplayStringWithMnemonics","hash":{},"data":data}));
},"54":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression(container.lambda((depth0 != null ? depth0.LastFilledOutISO : depth0), depth0));
},"56":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NeverAnsweredQuestionnaire",{"name":"getDisplayString","hash":{},"data":data}));
},"58":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.ifGt || (depth0 && depth0.ifGt) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),1,((stack1 = (depth0 != null ? depth0.OptionalQuestionnaires : depth0)) != null ? stack1.length : stack1),{"name":"ifGt","hash":{},"fn":container.program(59, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"59":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p class=\"noquestionnaires "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Mobile : depth0),{"name":"if","hash":{},"fn":container.program(60, data, 0),"inverse":container.program(62, data, 0),"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression((helpers.getDisplayString || (depth0 && depth0.getDisplayString) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"NoQuestionnairesToShow",{"name":"getDisplayString","hash":{},"data":data}))
    + "</p>";
},"60":function(container,depth0,helpers,partials,data) {
    return "center";
},"62":function(container,depth0,helpers,partials,data) {
    return "nodata";
},"useData":true});})();
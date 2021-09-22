(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Visits = templates.Visits || {};templates['VisitsListHeader'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<div>"
    + container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Visits",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"filters noprint extraWide\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasMultipleOrganizations : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<label class=\"subtlecolor\" for=\"filter-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FilterLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><select name=\"filter2\" id=\"filter-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"pastUpcomingFilter\" class=\"Filter\"><option value=\"1\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1",(depth0 != null ? depth0.PastUpcomingFilterValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpcomingPastOption",{"name":"getStringResource","hash":{},"data":data}))
    + "</option><option value=\"2\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"2",(depth0 != null ? depth0.PastUpcomingFilterValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UpcomingOnlyOption",{"name":"getStringResource","hash":{},"data":data}))
    + "</option><option value=\"3\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"3",(depth0 != null ? depth0.PastUpcomingFilterValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"PastOnlyOption",{"name":"getStringResource","hash":{},"data":data}))
    + "</option></select><span class=\"tbContainer showFiltersButton "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterButton : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input id=\"showFilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"showFilters\" type=\"checkbox\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterBar : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><label for=\"showFilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"filterButton  "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterBar : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterBar : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</label></span><span class=\"loadingFilterProgressBar hidden\"></span></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.FilterOptionsLoaded : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression(((helper = (helper = helpers.clearStringNamespace || (depth0 != null ? depth0.clearStringNamespace : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"clearStringNamespace","hash":{},"data":data}) : helper)))
    + "</div>";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<label for=\"filterorg-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"subtlecolor\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowLabel",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><select name=\"filter\" id=\"filterorg-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"filter\" class=\"filter orgfilter\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Filters : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<option value=\""
    + container.escapeExpression(((helper = (helper = helpers.ProgrammaticValue || (depth0 != null ? depth0.ProgrammaticValue : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ProgrammaticValue","hash":{},"data":data}) : helper)))
    + "\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (data && data.root)) && stack1.Filter),(depth0 != null ? depth0.ProgrammaticValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.Label || (depth0 != null ? depth0.Label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Label","hash":{},"data":data}) : helper)))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    return "selected=\"selected\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\"";
},"7":function(container,depth0,helpers,partials,data) {
    return "hidden";
},"9":function(container,depth0,helpers,partials,data) {
    return " checked ";
},"11":function(container,depth0,helpers,partials,data) {
    return "checked ";
},"13":function(container,depth0,helpers,partials,data) {
    return " unchecked";
},"15":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"HideFiltersButton",{"name":"getStringResource","hash":{},"data":data}));
},"17":function(container,depth0,helpers,partials,data) {
    return container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FiltersButton",{"name":"getStringResource","hash":{},"data":data}));
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<div id=\"visitsFilterBar-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"filters noprint extraWide extendedBar "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterBar : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><label class=\"subtlecolor filterOptionsElement\" for=\"filterCategories-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"FilterOn",{"name":"getStringResource","hash":{},"data":data}))
    + "</label><select name=\"filterCat\" id=\"filterCategories-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"filterCategories\" class=\"Filter filterOptionsElement\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LoadProviders : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LoadDepartments : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.LoadSpecialties : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><div class=\"tbContainer dropdown filterOptionsElement "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterMenu : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><span class=\"tbContainer currentOptionsButton\"><input type=\"checkbox\" class=\"clearradio togglebutton\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowFilterMenu : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"currentOptionsButton-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"currentOptionsButton\" /><label for=\"currentOptionsButton-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"togglebutton currentOptionLabel truncate\">"
    + container.escapeExpression(((helper = (helper = helpers.CurrentOptionString || (depth0 != null ? depth0.CurrentOptionString : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CurrentOptionString","hash":{},"data":data}) : helper)))
    + "</label></span><table class=\"dropdown-content\"><tbody class=\"optionsTableBody\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CurrentOptionsList : depth0),{"name":"each","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!--Always put the \"other\" filter bucket on the bottom of the list-->"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CurrentOptionsList : depth0),{"name":"each","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody><tbody class=\"filterOptionsButtonsBody\"><tr class=\"filterOptionsButtonsRow\"><td class=\"filterOptionsButtons\"><input type=\"button\" class=\"button\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"UncheckAllButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"uncheckAll\" id=\"uncheckAll-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\"/><input type=\"button\" class=\"button nextstep\" value=\""
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ApplyFiltersButton",{"name":"getStringResource","hash":{},"data":data}))
    + "\" data-id=\"applyFilters\" id=\"applyFilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" /></td></tr></tbody></table></div>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.CurrentDatList : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ShowCanceledApptsSetting : depth0),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option id=\"providerOption\" class=\"providersCategory\" value=\"1\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"1",(depth0 != null ? depth0.FilterCategoryValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ProvidersCategory",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>";
},"21":function(container,depth0,helpers,partials,data) {
    return " selected=\"selected\" ";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option id=\"departmentOption\" class=\"departmentsCategory\" value=\"2\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"2",(depth0 != null ? depth0.FilterCategoryValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"DepartmentsCategory",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option id=\"specialtyOption\" class=\"specialtiesCategory \" value=\"3\" "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"3",(depth0 != null ? depth0.FilterCategoryValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"SpecialtiesCategory",{"name":"getStringResource","hash":{},"data":data}))
    + "</option>";
},"27":function(container,depth0,helpers,partials,data) {
    return " open ";
},"29":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.ifNotEquals || (depth0 && depth0.ifNotEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Other",(data && data.key),{"name":"ifNotEquals","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<tr class=\"optionsRow\"><td class=\"optionCell\"><input type=\"checkbox\" "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),(depths[1] != null ? depths[1].SelectedOptions : depths[1]),{"name":"ifIn","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"option-"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-id=\"singleFilterOption\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\" /><label for=\"option-"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "</label></td></tr>";
},"32":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Other",(data && data.key),{"name":"ifEquals","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<tr class=\"optionsRow\"><td class=\"optionCell\"><input type=\"checkbox\" "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.key),(depths[1] != null ? depths[1].SelectedOptions : depths[1]),{"name":"ifIn","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " id=\"option-"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\" data-id=\"singleFilterOption\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\" /><label for=\"option-"
    + container.escapeExpression(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OtherOptionBucket",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></td></tr>";
},"35":function(container,depth0,helpers,partials,data) {
    var helper;

  return "&nbsp;&nbsp;<span class=\"tbContainer clearFiltersButton\"><input id=\"clearFilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"clearFilters\" type=\"checkbox\"><label class=\"clearButton\" for=\"clearFilters-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ClearFiltersButton",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></span>";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"tbContainer canceledShiftedButton "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"2",(depth0 != null ? depth0.PastUpcomingFilterValue : depth0),{"name":"ifEquals","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input id=\"toggleCanceledShifted-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\" data-id=\"toggleCanceledShifted\" type=\"checkbox\" class=\"toggleCanceledInput\" "
    + ((stack1 = helpers.unless.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HideCanceledShifted : depth0),{"name":"unless","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">&nbsp;&nbsp;<label class=\"toggleCanceled\" for=\"toggleCanceledShifted-"
    + container.escapeExpression(((helper = (helper = helpers.ComponentNumber || (depth0 != null ? depth0.ComponentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ComponentNumber","hash":{},"data":data}) : helper)))
    + "\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShowCanceledButton",{"name":"getStringResource","hash":{},"data":data}))
    + "</label></span>";
},"38":function(container,depth0,helpers,partials,data) {
    return " upcomingVisitsOnly";
},"40":function(container,depth0,helpers,partials,data) {
    return " checked";
},"useData":true,"useDepths":true});})();
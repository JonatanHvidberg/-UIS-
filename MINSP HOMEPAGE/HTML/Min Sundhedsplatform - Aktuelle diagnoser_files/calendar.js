(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.Core = templates.Core || {};templates['calendar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper;

  return "<div class=\"calendar "
    + container.escapeExpression(((helper = (helper = helpers.Class || (depth0 != null ? depth0.Class : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Class","hash":{},"data":data}) : helper)))
    + "\"><table><thead><tr>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsPrevEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<th id=\"calmonth"
    + container.escapeExpression(((helper = (helper = helpers.componentNumber || (depth0 != null ? depth0.componentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"componentNumber","hash":{},"data":data}) : helper)))
    + "\" class=\"calmonth\" colspan=\"5\">"
    + container.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"Title","hash":{},"data":data}) : helper)))
    + "</th>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.IsNextEnabled : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</tr><tr>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Days : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr></thead>"
    + container.escapeExpression((helpers.$$WP$Components$Calendar$getCalendarObject || (depth0 && depth0.$$WP$Components$Calendar$getCalendarObject) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ComponentNumber : depth0),{"name":"$$WP$Components$Calendar$getCalendarObject","hash":{},"data":data}))
    + "</table></div> ";
},"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<th id=\"calprev"
    + container.escapeExpression(((helper = (helper = helpers.componentNumber || (depth0 != null ? depth0.componentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"componentNumber","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.PrevTitle || (depth0 != null ? depth0.PrevTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PrevTitle","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.PrevClass || (depth0 != null ? depth0.PrevClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PrevClass","hash":{},"data":data}) : helper)))
    + " calprev calnavbtn\"><a data-id=\"calprev\" href=\"#\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.PrevTitle || (depth0 != null ? depth0.PrevTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PrevTitle","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.PrevButton || (depth0 != null ? depth0.PrevButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"PrevButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></th>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<th></th>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<th  id=\"calnext"
    + container.escapeExpression(((helper = (helper = helpers.componentNumber || (depth0 != null ? depth0.componentNumber : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"componentNumber","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.NextTitle || (depth0 != null ? depth0.NextTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NextTitle","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + container.escapeExpression(((helper = (helper = helpers.NextClass || (depth0 != null ? depth0.NextClass : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NextClass","hash":{},"data":data}) : helper)))
    + " calnext calnavbtn\"><a data-id=\"calnext\" href=\"#\" aria-label=\""
    + container.escapeExpression(((helper = (helper = helpers.NextTitle || (depth0 != null ? depth0.NextTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NextTitle","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.NextButton || (depth0 != null ? depth0.NextButton : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"NextButton","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</a></th>";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<th class=\"hdr dayHeading\" "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].IsAriaHidden : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</th>";
},"8":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"useData":true,"useDepths":true});})();
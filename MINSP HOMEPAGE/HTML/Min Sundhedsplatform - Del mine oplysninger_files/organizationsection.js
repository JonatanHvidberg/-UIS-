(function() {var template = Handlebars.template, templates = $$WP.Templates = $$WP.Templates || {};templates = templates.AccountManagement = templates.AccountManagement || {};templates['OrganizationSection'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.setStringNamespace || (depth0 && depth0.setStringNamespace) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"AccountManagement",{"name":"setStringNamespace","hash":{},"data":data}))
    + "<div class=\"row\"><div class=\"col-4 sectionLevelContainer\"><div class=\"sectionLevelContents\"><img class=\"sectionImage\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/SharingHub/orgsection.png",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"></img><h2 class=\"sectionLabel\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"OrgSectionTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</h2></div></div><div class=\"col-8 "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OrgLinkCount : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><div class=\"grid compact "
    + ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.OrgLinkCount : depth0),1,{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasShareEverywhereSec : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasH2GManageSec : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.HasAuthSharingSec : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></div>";
},"1":function(container,depth0,helpers,partials,data) {
    return "vCenterContainer";
},"3":function(container,depth0,helpers,partials,data) {
    return "vCenterGrid";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-12\"><a href=\""
    + container.escapeExpression((helpers.makeLink || (depth0 && depth0.makeLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShareEverywhere/GenerateCode",{"name":"makeLink","hash":{},"data":data}))
    + "\"><div class=\"card clickable\"><img class=\"linkImage\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/SharingHub/onetimeaccess.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"></img><h3 class=\"linkHeader\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShareEverywhereTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</h3><p class=\"linkContents\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ShareEverywhereDescription",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div></a></div></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-12\"><a href=\""
    + container.escapeExpression((helpers.makeLink || (depth0 && depth0.makeLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Community/Manage",{"name":"makeLink","hash":{},"data":data}))
    + "\"><div class=\"card clickable\"><img class=\"linkImage\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/SharingHub/connectaccounts.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"></img><h3 class=\"linkHeader\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ConnectAccountsTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</h3><p class=\"linkContents\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"ConnectAccountsDescription",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div></a></div></div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"col-12\"><a href=\""
    + container.escapeExpression((helpers.makeLink || (depth0 && depth0.makeLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"inside.asp?mode=ceauthorization",{"name":"makeLink","hash":{},"data":data}))
    + "\"><div class=\"card clickable\"><img class=\"linkImage\" src=\""
    + container.escapeExpression((helpers.makeStaticLink || (depth0 && depth0.makeStaticLink) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"images/SharingHub/otherorgs.svg",{"name":"makeStaticLink","hash":{},"data":data}))
    + "\" aria-hidden=\"true\"></img><h3 class=\"linkHeader\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CEAuthTitle",{"name":"getStringResource","hash":{},"data":data}))
    + "</h3><p class=\"linkContents\">"
    + container.escapeExpression((helpers.getStringResource || (depth0 && depth0.getStringResource) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"CEAuthDescription",{"name":"getStringResource","hash":{},"data":data}))
    + "</p></div></a></div></div>";
},"useData":true});})();
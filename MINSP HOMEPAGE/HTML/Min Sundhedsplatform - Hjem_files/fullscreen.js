(function(){var d="</span>",e="</span></a>",c="if",b="function",a=null,g=Handlebars.template,f=$$WP.Templates=$$WP.Templates||{};f=f.Clinical=f.Clinical||{};f.FullScreen=g({compiler:[7,">= 4.0.0"],main:function(d,c,e,k,f){var i="getStringResource",h="showing_clicked_provider_details",j,g;return d.escapeExpression((e.setStringNamespace||c&&c.setStringNamespace||e.helperMissing).call(c!=a?c:d.nullContext||{},"clinical.careTeam",{name:"setStringNamespace",hash:{},data:f}))+'<div class="menudetailstable leftmenu"><div class="column1 leftcolumn column">'+((j=(e.addTemplate||c&&c.addTemplate||e.helperMissing).call(c!=a?c:d.nullContext||{},"Clinical.ProviderList",c,{name:"addTemplate",hash:{},data:f}))!=a?j:"")+'</div><div class="column3 rightcolumn column"><a href="#" class="focusanchor" name="provmaintop" title="'+d.escapeExpression((e.getStringResource||c&&c.getStringResource||e.helperMissing).call(c!=a?c:d.nullContext||{},h,{name:i,hash:{},data:f}))+'">'+d.escapeExpression((e.getStringResource||c&&c.getStringResource||e.helperMissing).call(c!=a?c:d.nullContext||{},h,{name:i,hash:{},data:f}))+"</a>"+((j=e.each.call(c!=a?c:d.nullContext||{},c!=a?c.ProvidersList:c,{name:"each",hash:{},fn:d.program(1,f,0),inverse:d.noop,data:f}))!=a?j:"")+'<a href="#" class="focusanchor tabToGoBack" data-id="endanchor"/></div></div>'+d.escapeExpression((g=(g=e.clearStringNamespace||(c!=a?c.clearStringNamespace:c))!=a?g:e.helperMissing,typeof g===b?g.call(c!=a?c:d.nullContext||{},{name:"clearStringNamespace",hash:{},data:f}):g))},"1":function(e,d,h,j,g){var i,f;return'<div data-index="'+e.escapeExpression((f=(f=h.index||g&&g.index)!=a?f:h.helperMissing,typeof f===b?f.call(d!=a?d:e.nullContext||{},{name:"index",hash:{},data:g}):f))+'" class="column2 hidden"><div class="providerTitle">'+((i=h[c].call(d!=a?d:e.nullContext||{},d!=a?d.DetailsUrl:d,{name:c,hash:{},fn:e.program(2,g,0),inverse:e.program(4,g,0),data:g}))!=a?i:"")+'</div><div class="grid"><div class="row profileContent"><div class="profilephoto col-3"><img src="'+e.escapeExpression((f=(f=h.ImageUrl||(d!=a?d.ImageUrl:d))!=a?f:h.helperMissing,typeof f===b?f.call(d!=a?d:e.nullContext||{},{name:"ImageUrl",hash:{},data:g}):f))+'" alt="'+e.escapeExpression((f=(f=h.ImageAltText||(d!=a?d.ImageAltText:d))!=a?f:h.helperMissing,typeof f===b?f.call(d!=a?d:e.nullContext||{},{name:"ImageAltText",hash:{},data:g}):f))+'"/><div class="patientActions">'+((i=h[c].call(d!=a?d:e.nullContext||{},d!=a?d.CanMessage:d,{name:c,hash:{},fn:e.program(6,g,0),inverse:e.noop,data:g}))!=a?i:"")+((i=h[c].call(d!=a?d:e.nullContext||{},d!=a?d.ScheduleDataId:d,{name:c,hash:{},fn:e.program(8,g,0),inverse:e.noop,data:g}))!=a?i:"")+'</div></div><div class="profile col-9">'+((i=h[c].call(d!=a?d:e.nullContext||{},d!=a?d.Profile:d,{name:c,hash:{},fn:e.program(10,g,0),inverse:e.program(12,g,0),data:g}))!=a?i:"")+"</div></div></div></div>"},"2":function(e,d,f,h,g){var c;return'<a href="#" title="'+e.escapeExpression((c=(c=f.DetailsUrlHoverText||(d!=a?d.DetailsUrlHoverText:d))!=a?c:f.helperMissing,typeof c===b?c.call(d!=a?d:e.nullContext||{},{name:"DetailsUrlHoverText",hash:{},data:g}):c))+'" data-id ="providerdetails" target="_blank">'+e.escapeExpression((c=(c=f.Name||(d!=a?d.Name:d))!=a?c:f.helperMissing,typeof c===b?c.call(d!=a?d:e.nullContext||{},{name:"Name",hash:{},data:g}):c))+"</a>"},"4":function(e,d,f,h,g){var c;return e.escapeExpression((c=(c=f.Name||(d!=a?d.Name:d))!=a?c:f.helperMissing,typeof c===b?c.call(d!=a?d:e.nullContext||{},{name:"Name",hash:{},data:g}):c))},"6":function(f,d,g,i,h){var c;return'<a href="#" data-id="message" class="button message" title="'+f.escapeExpression((c=(c=g.MessageHover||(d!=a?d.MessageHover:d))!=a?c:g.helperMissing,typeof c===b?c.call(d!=a?d:f.nullContext||{},{name:"MessageHover",hash:{},data:h}):c))+'"><span class="message active">'+f.escapeExpression((c=(c=g.MessageButton||(d!=a?d.MessageButton:d))!=a?c:g.helperMissing,typeof c===b?c.call(d!=a?d:f.nullContext||{},{name:"MessageButton",hash:{},data:h}):c))+e},"8":function(f,d,g,i,h){var c;return'<a href="#" data-id="'+f.escapeExpression((c=(c=g.ScheduleDataId||(d!=a?d.ScheduleDataId:d))!=a?c:g.helperMissing,typeof c===b?c.call(d!=a?d:f.nullContext||{},{name:"ScheduleDataId",hash:{},data:h}):c))+'" class="button schedule" title="'+f.escapeExpression((c=(c=g.ScheduleHover||(d!=a?d.ScheduleHover:d))!=a?c:g.helperMissing,typeof c===b?c.call(d!=a?d:f.nullContext||{},{name:"ScheduleHover",hash:{},data:h}):c))+'"><span class="schedule active">'+f.escapeExpression((c=(c=g.ScheduleButton||(d!=a?d.ScheduleButton:d))!=a?c:g.helperMissing,typeof c===b?c.call(d!=a?d:f.nullContext||{},{name:"ScheduleButton",hash:{},data:h}):c))+e},"10":function(){return'<iframe src=""></iframe>'},"12":function(e,b,g,h,f){var d;return(d=g[c].call(b!=a?b:e.nullContext||{},(d=b!=a?b.AboutMeBlurb:b)!=a?d.length:d,{name:c,hash:{},fn:e.program(13,f,0),inverse:e.program(16,f,0),data:f}))!=a?d:""},"13":function(c,b,g,h,f){var e;return'<span class="aboutmeHeading">'+c.escapeExpression(c.lambda((e=f&&f.root)&&e.AboutMeHeading,b))+d+((e=g.each.call(b!=a?b:c.nullContext||{},b!=a?b.AboutMeBlurb:b,{name:"each",hash:{},fn:c.program(14,f,0),inverse:c.noop,data:f}))!=a?e:"")},"14":function(a,b){return'<span class="aboutme subtlecolor">'+a.escapeExpression(a.lambda(b,b))+d},"16":function(f,e,g,i,h){var c;return'<span class="profiledetails subtlecolor">'+f.escapeExpression((c=(c=g.ProfileNotFoundText||(e!=a?e.ProfileNotFoundText:e))!=a?c:g.helperMissing,typeof c===b?c.call(e!=a?e:f.nullContext||{},{name:"ProfileNotFoundText",hash:{},data:h}):c))+d},useData:true})})()
(function(){var a=null,c=Handlebars.template,b=$$WP.Templates=$$WP.Templates||{};b=b.Clinical=b.Clinical||{};b.PersonalNotesEditor=c({compiler:[7,">= 4.0.0"],main:function(d,b,e,k,g){var j="AddLabel",h="if",f="function",i,c;return'<div class="personalnotescontainer"><h2 class="header">'+d.escapeExpression((c=(c=e.Title||(b!=a?b.Title:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"Title",hash:{},data:g}):c))+'</h2><span class="notesubtitle">'+d.escapeExpression((c=(c=e.Subtitle||(b!=a?b.Subtitle:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"Subtitle",hash:{},data:g}):c))+'</span><div class="cardlist noteviewer hoverable personalnotes"><div class="card notecard withButton '+((i=e.unless.call(b!=a?b:d.nullContext||{},b!=a?b.HasNotes:b,{name:"unless",hash:{},fn:d.program(1,g,0),inverse:d.noop,data:g}))!=a?i:"")+'">'+((i=e[h].call(b!=a?b:d.nullContext||{},b!=a?b.PersonalNoteList:b,{name:h,hash:{},fn:d.program(3,g,0),inverse:d.noop,data:g}))!=a?i:"")+'<div class="buttonList right noprint"><a class="button inlineedit multi" href="#" data-id="editnotes">'+d.escapeExpression((c=(c=e.EditButtonText||(b!=a?b.EditButtonText:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"EditButtonText",hash:{},data:g}):c))+'</a></div></div><div class="card addItem addcard noprint '+((i=e[h].call(b!=a?b:d.nullContext||{},b!=a?b.HasNotes:b,{name:h,hash:{},fn:d.program(1,g,0),inverse:d.noop,data:g}))!=a?i:"")+'"><a data-id="additem" href="#" aria-label="'+d.escapeExpression((c=(c=e.AddLabel||(b!=a?b.AddLabel:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:j,hash:{},data:g}):c))+'"><span class="vcenter" ><span class="addlabel" aria-hidden="true">'+d.escapeExpression((c=(c=e.AddLabel||(b!=a?b.AddLabel:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:j,hash:{},data:g}):c))+'</span></span></a></div></div><div class="personalnotes noteseditor hidden"><form><textarea name="notes" class="notetextarea" aria-label="'+d.escapeExpression((c=(c=e.TextAreaLabel||(b!=a?b.TextAreaLabel:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"TextAreaLabel",hash:{},data:g}):c))+'" aria-live="polite" rows="5" data-id="notesbox" '+((i=(e.validationSettingsAttribute||b&&b.validationSettingsAttribute||e.helperMissing).call(b!=a?b:d.nullContext||{},b!=a?b.ValidationSettings:b,{name:"validationSettingsAttribute",hash:{},data:g}))!=a?i:"")+" ></textarea>"+d.escapeExpression((e.messageDisplay||b&&b.messageDisplay||e.helperMissing).call(b!=a?b:d.nullContext||{},"notes",{name:"messageDisplay",hash:{},data:g}))+'<a href="#" class="button personalnotes inlinesave multi" '+d.escapeExpression((c=(c=e.disableIfInvalidAttribute||(b!=a?b.disableIfInvalidAttribute:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"disableIfInvalidAttribute",hash:{},data:g}):c))+' data-id="savenotes">'+d.escapeExpression((c=(c=e.SaveButtonText||(b!=a?b.SaveButtonText:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"SaveButtonText",hash:{},data:g}):c))+'</a><a href="#" class="button personalnotes cancelworkflow multi" data-id="cancelnotes">'+d.escapeExpression((c=(c=e.CancelButtonText||(b!=a?b.CancelButtonText:b))!=a?c:e.helperMissing,typeof c===f?c.call(b!=a?b:d.nullContext||{},{name:"CancelButtonText",hash:{},data:g}):c))+"</a></form></div></div>"},"1":function(){return" hidden"},"3":function(c,b,f,g,e){var d;return(d=f.each.call(b!=a?b:c.nullContext||{},b!=a?b.PersonalNoteList:b,{name:"each",hash:{},fn:c.program(4,e,0),inverse:c.noop,data:e}))!=a?d:""},"4":function(a,b){return'<div class="cardline viewonlynotes">'+a.escapeExpression(a.lambda(b,b))+"</div>"},useData:true})})()
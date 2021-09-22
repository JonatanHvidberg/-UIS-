/*! Copyright (c) Epic Systems Corporation 2016-2017 */
$$WPUtil.guaranteeExistence($$WP,"Clinical.PersonalNotes.Components");$$WP.Clinical.PersonalNotes.Components.PersonalNotesComponent=function PersonalNotesComponent(b){var a=this;a.Components$TemplateComponent(b);a.Url=makeLink("Clinical/PersonalNotes/LoadNote?type="+a.Type);a.addEventListener("click",a._clickEvent)};$$WP.Clinical.PersonalNotes.Components.PersonalNotesComponent.prototype={template:$$WP.Templates.Clinical.PersonalNotesEditor,Class:"personalnotessection",Type:"",DataFromMultipleSources:false,CommunicationsIndicator:false,AreaName:"personalnotes",mode:"",setData:function $$WP$PersonalNotes$PersonalNotesComponent$setData(a){if(a.PersonalNoteList){$$WP.Strings.setDefaultNamespace("personalnotes");a.Title=$$WP.Strings.getForTemplate(this.Type+"_title");a.Subtitle=$$WP.Strings.getForTemplate("subtitle");a.AddLabel=$$WP.Strings.getForTemplate("addlabel");a.Instructions=$$WP.Strings.getForTemplate("instructions");a.SaveButtonText=$$WP.Strings.getForTemplate(this.Type+"_savetext");a.CancelButtonText=$$WP.Strings.getForTemplate("cancellabel");a.EditButtonText=$$WP.Strings.getForTemplate("editlabel");a.TextAreaLabel=$$WP.Strings.getForTemplate("notetextarealabel");a.FormattedNotes="";for(var b=0;b<a.PersonalNoteList.length;b++){if(b!==0)a.FormattedNotes+="\n";a.FormattedNotes+=a.PersonalNoteList[b]}if(a.PersonalNoteList.length>0)a.HasNotes=true;$$WP.Strings.clearDefaultNamespace()}var c=new $$WP.FormValidation.ValidationSettings({maxLength:5e3,showCharacterCounter:true});a.ValidationSettings=c;this.Components$TemplateComponent$setData(a)},html:function $$WP$PersonalNotes$PersonalNotesComponent$html(b){var a=this;a.Components$TemplateComponent$html(b);a.$container.trigger("resize",{forceShrink:true});$afe.jq(window).trigger("matchColumnHeights");$afe.jq(window).on("resize","",a.ComponentNumber,$.proxy(a._onresize,a))},refresh:function $$WP$PersonalNotes$PersonalNotesComponent$refresh(){var a=this;$afe.select(".component[data-component-id='"+a.ComponentNumber+"']").parents(".haspersonalnotes:not(.componentsloaded)").addClass("hidepersonalnotes");a.Data.PersonalNoteList&&a.Data.PersonalNoteList!==null&&a.Components$TemplateComponent$refresh()},_onresize:function(){this.$container.trigger("resize",{forceShrink:true})},_clickEvent:function $$WP$PersonalNotes$PersonalNotesComponent$_clickEvent(j){var e="disabled",g=".notetextarea",d=".noteviewer",a="hidden",c=".noteseditor",b=this;if(j){var k=j.dataId;if(!k)return true;switch(k){case"additem":case"editnotes":b.$content.find(c).removeClass(a);b.$content.find(d).addClass(a);b.$content.trigger("resize");var h=b.$content.find(g);h.focus();h.val(b.Data.FormattedNotes);break;case"cancelnotes":b.$content.find(c).addClass(a);b.$content.find(d).removeClass(a);b.load();break;case"savenotes":var l=b.$content.find(g).val().trim();b.Data.tempnotes=l;var i=b.$content.find(".button.personalnotes");i.addClass(e);var f=function(m){var h=".notecard",g=".addcard",b=this;if(m.success===true){b.$content.find(c).addClass(a);var f=b.$content.find(d);f.removeClass(a);var k=b.$content.find(".viewonlynotes");if(k.text()===""&&b.Data.tempnotes!==""){f.find(g).addClass(a);f.find(h).removeClass(a)}if(k.text()!==""&&b.Data.tempnotes===""){f.find(g).removeClass(a);f.find(h).addClass(a)}b.load()}else{var j,l;$$WP.Strings.setDefaultNamespace("personalnotes");j={button:$$WP.Strings.getForTemplate("errorclose"),title:$$WP.Strings.getForTemplate("errortitle"),content:$$WP.Strings.getForTemplate("errorcontent")};$$WP.Strings.clearDefaultNamespace();l=[new $$WPComp.ComplexObjects.Button(j.button,null,"previousstep","continue")];new $$WPUtil.quickMessageBox(j.content,j.title,l)}i.removeClass(e)};$.ajax({url:makeLink("Clinical/PersonalNotes/SaveNotes"),context:b,type:"POST",data:"type="+b.Type+"&notes="+encodeURIComponent(l),error:f,success:f})}return false}}};$$WP.Clinical.PersonalNotes.Components.PersonalNotesComponent.extend("Components.TemplateComponent")
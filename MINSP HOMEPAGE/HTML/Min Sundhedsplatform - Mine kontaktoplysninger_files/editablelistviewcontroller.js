/*! Copyright Epic Systems Corporation 2017*/
(function ClassDefinition(){var c="model-id",b="[model-id]",a=null;$$WPUtil.guaranteeExistence($$WP,"Controllers");var d=function EditableListViewController(f,g,d,e){var c="click",b=this;b.WP$Controllers$Controller(f);!$.isFunction(g)&&$$WP.Debug.logError("EditableListViewController subclass did not provide the Handlebars template needed to render the collection.");if(d&&!$.isFunction(d)){$$WP.Debug.logError("EditableListViewController subclass provided an invalid Handlebars addTemplate.");d=a}b._$viewContainer=f;b._template=g;b._addTemplate=d;if(typeof e==="undefined")b.loadData();else b.ModelCollection=e;b.proxify("onEditButtonClicked","onSaveButtonClicked","onCancelButtonClicked","onAddButtonClicked","onRemoveButtonClicked");b._$viewContainer.on(c,".editButton:not(.disabled)",b.onEditButtonClicked);b._$viewContainer.on(c,".saveButton:not(.disabled)",b.onSaveButtonClicked);b._$viewContainer.on(c,".cancelButton:not(.disabled)",b.onCancelButtonClicked);b._$viewContainer.on(c,".inlinedelete:not(.disabled)",b.onRemoveButtonClicked);b._$viewContainer.on(c,".addItem:not(.disabled)",b.onAddButtonClicked)},e={_$viewContainer:a,_template:a,_addTemplate:a,ModelCollection:a,numberOfEditModels:0,onEditButtonClicked:function onEditButtonClicked(f){var a,e,d;a=$afe.jq(f.currentTarget);e=a.parents(b);d=$$WP.Common.Model.getInstance(e.safeAttr(c));a.remove();this.renderModel(d,true);this.afterRender([d]);f.preventDefault()},onCancelButtonClicked:function onCancelButtonClicked(f){var a,e,d;f.preventDefault();a=$afe.jq(f.currentTarget);e=a.parents(b);d=$$WP.Common.Model.getInstance(e.safeAttr(c));a.remove();this.renderModel(d,false);this.afterRender([d])},onSaveButtonClicked:function onSaveButtonClicked(g){var e,d,f;e=$afe.jq(g.currentTarget);d=e.parents(b);f=$$WP.Common.Model.getInstance(d.safeAttr(c));e.remove();if(f===a)this.saveNewModel(d);else this.saveExistingModel(f,d);g.preventDefault()},onAddButtonClicked:function onAddButtonClicked(b){b.preventDefault();this.renderModel(a,true);this.afterRender([a])},onRemoveButtonClicked:function onRemoveButtonClicked(e){var d,a,f;d=$afe.jq(e.currentTarget);a=d.parents(b);f=$$WP.Common.Model.getInstance(a.safeAttr(c));d.remove();this.removeModel(f,a);e.preventDefault()},loadData:function loadData(){$$WP.Debug.logError("EditableListViewController subclass did not override the virtual loadData method.")},createBlankModel:function createBlankModel(){$$WP.Debug.logError("EditableListViewController subclass did not override the virtual createBlankModel method.")},saveNewModel:function saveNewModel(){$$WP.Debug.logError("EditableListViewController subclass did not override the virtual saveNewModel method.")},saveExistingModel:function saveExistingModel(){$$WP.Debug.logError("EditableListViewController subclass did not override the virtual saveExistingModel method.")},removeModel:function removeModel(){$$WP.Debug.logError("EditableListViewController subclass did not override the virtual removeModel method.")},getOrderedCollection:function getOrderedCollection(){return this.ModelCollection},renderModelCollection:function renderModelCollection(){var a=this,c,b,d;a.dispose();a.numberOfEditModels=0;c=a.getOrderedCollection();for(d in c){b=c[d];b.DisplayEditable=false;a._$viewContainer.safeAppend($afe.renderTemplate(a._template,b));a.afterEachRender(b)}if(a._addTemplate){b=a.createBlankModel();b.DisplayEditable=false;a._$viewContainer.safeAppend($afe.renderTemplate(a._addTemplate,b));a.afterEachRender(b)}a.afterRender()},renderModel:function renderModel(c,d){var b=this,e,f;if(c===a)if(b._addTemplate){c=b.createBlankModel();e=b._addTemplate;f="NewModel"}else return;else{e=b._template;f=c.ModelId}if(c.DisplayEditable!==d){c.DisplayEditable=d;if(d)b.numberOfEditModels++;else b.numberOfEditModels--}b._$viewContainer.find("[model-id='"+f+"']").safeReplaceWith($afe.renderTemplate(e,c));b.afterEachRender(c)},afterEachRender:function afterEachRender(){},afterRender:function afterRender(){$$WP.FormValidation.initializeDOMSubtree(this._$viewContainer);$$WP.Utilities.UI.MatchColumnHeights();if(this.numberOfEditModels>0)WP.Events.beforeUnload();else WP.Events.cancelBeforeUnload()},dispose:function dispose(){this._$viewContainer.empty()}};d.prototype=e;$$WP.Controllers.EditableListViewController=d;d.extend($$WP.Controllers.Controller,"WP$Controllers$EditableListViewController")})()
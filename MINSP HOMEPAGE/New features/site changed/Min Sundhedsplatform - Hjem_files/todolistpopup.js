(function(){var c="addTemplate",b="Clinical.ToDoListsGroupedPopup",a=null,e=Handlebars.template,d=$$WP.Templates=$$WP.Templates||{};d=d.Clinical=d.Clinical||{};d.ToDoListPopup=e({compiler:[7,">= 4.0.0"],main:function(e,d,f,i,h){var g;return'<div id="todoevents">'+((g=f["if"].call(d!=a?d:e.nullContext||{},(g=d!=a?d.Overdue:d)!=a?g.OverdueItemsPresent:g,{name:"if",hash:{},fn:e.program(1,h,0),inverse:e.noop,data:h}))!=a?g:"")+e.escapeExpression((f.addTemplate||d&&d.addTemplate||f.helperMissing).call(d!=a?d:e.nullContext||{},b,d!=a?d.ThisMonth:d,{name:c,hash:{},data:h}))+e.escapeExpression((f.addTemplate||d&&d.addTemplate||f.helperMissing).call(d!=a?d:e.nullContext||{},b,d!=a?d.NextMonth:d,{name:c,hash:{},data:h}))+e.escapeExpression((f.addTemplate||d&&d.addTemplate||f.helperMissing).call(d!=a?d:e.nullContext||{},b,d!=a?d.Future:d,{name:c,hash:{},data:h}))+'<div id="temp"></div></div>  '},"1":function(e,d,f,h,g){return e.escapeExpression((f.addTemplate||d&&d.addTemplate||f.helperMissing).call(d!=a?d:e.nullContext||{},b,d!=a?d.Overdue:d,{name:c,hash:{},data:g}))},useData:true})})()
(function(){var e="getStringResource",c="</div>",d="function",b="if",a=null,g=Handlebars.template,f=$$WP.Templates=$$WP.Templates||{};f=f.Clinical=f.Clinical||{};f.MedicationsWidget=g({compiler:[7,">= 4.0.0"],main:function(e,c,g,j,h){var i,f;return e.escapeExpression((g.setStringNamespace||c&&c.setStringNamespace||g.helperMissing).call(c!=a?c:e.nullContext||{},"clinical.medications",{name:"setStringNamespace",hash:{},data:h}))+((i=g[b].call(c!=a?c:e.nullContext||{},c!=a?c.ErrorMessage:c,{name:b,hash:{},fn:e.program(1,h,0),inverse:e.program(3,h,0),data:h}))!=a?i:"")+e.escapeExpression((f=(f=g.clearStringNamespace||(c!=a?c.clearStringNamespace:c))!=a?f:g.helperMissing,typeof f===d?f.call(c!=a?c:e.nullContext||{},{name:"clearStringNamespace",hash:{},data:h}):f))},"1":function(f,e,g,i,h){var b;return'<div class="accesserror">'+f.escapeExpression((b=(b=g.ErrorMessage||(e!=a?e.ErrorMessage:e))!=a?b:g.helperMissing,typeof b===d?b.call(e!=a?e:f.nullContext||{},{name:"ErrorMessage",hash:{},data:h}):b))+c},"3":function(g,d,h,j,i){var f;return'<div class="medications"><div class="pretext subtle">'+g.escapeExpression((h.getStringResource||d&&d.getStringResource||h.helperMissing).call(d!=a?d:g.nullContext||{},"pretext",{name:e,hash:{},data:i}))+c+((f=h[b].call(d!=a?d:g.nullContext||{},d!=a?d.ShowPatientAdmittedBanner:d,{name:b,hash:{},fn:g.program(4,i,0),inverse:g.noop,data:i}))!=a?f:"")+g.escapeExpression((h.addTemplate||d&&d.addTemplate||h.helperMissing).call(d!=a?d:g.nullContext||{},"Medications.MedicationsWidgetList",(f=(f=d!=a?d.CommunityMembers:d)!=a?f["0"]:f)!=a?f.PrescriptionList:f,{name:"addTemplate",hash:{},data:i}))+c},"4":function(d,b,f,h,g){return'<div class="noprint admittedbanner">'+d.escapeExpression((f.getStringResource||b&&b.getStringResource||f.helperMissing).call(b!=a?b:d.nullContext||{},"admitted",{name:e,hash:{},data:g}))+c},useData:true})})()
/*! Copyright (c) Epic Systems Corporation 2016 */
(function WP$Common$ModelCollection$definition(){var f="array",e="set",g="object",a=null,h="undefined",c=true,b=",",m=$$WP.Common.Model,d=function WP$Common$ModelCollection(l,k,m){var a=this,p,d,g,o,n,e,f;l=l||[];k=k||[];m=m||[];p=$$WP.Debug.UnitTest.assert;a._indexDefinitions={};a._indexDefinitionsByProperty={};a._indices={};a._monitoredProperties={};a._monitoredEvents={add:[],remove:[]};a._modelId2listenerId={};a._indexedProperties={};a._mutexRules={};a.Models=[];a._changeBatch={changesMap:{},changeEventData:{},openBatchCounter:0,collectionEvents:{}};a._onPropertyChanged=$.proxy(a._onPropertyChanged,a);for(d=0;d<l.length;d++){g=new i(l[d]);o=g.propertyNames;for(n=0;n<o.length;n++){e=o[n];p(e.indexOf(b)===-1,"Indexed property names cannot contain commas. It will corrupt the index definitions.");a._indexedProperties[e]=c;a._indexDefinitionsByProperty[e]=a._indexDefinitionsByProperty[e]||[];a._indexDefinitionsByProperty[e].push(g)}a._indexDefinitions[g.indexName]=g;a._indices[g.indexName]={}}for(d=0;d<k.length;d++){e=k[d];a.addMonitoredProperty(e)}for(d=0;d<m.length;d++){f=new j(m[d],a);if(typeof f.indexDefinition===h){$$WP.Debug.logError("'"+e+"' is not indexed by itself and therefore cannot have mutex rules.");return}a._mutexRules[f.propertyName]=a._mutexRules[f.propertyName]||{};a._mutexRules[f.propertyName][f.value]=f}},q={_indexDefinitions:a,_indexDefinitionsByProperty:a,_indices:a,_monitoredProperties:a,_monitoredEvents:a,_modelId2listenerId:a,_changeBatch:a,_indexedProperties:a,_mutexRules:a,Models:a,empty:function WP$Common$ModelCollection$empty(){var a=this,b;a.openChangeBatch();while(a.Models.length>0){b=a.Models[0];a.remove(b)}a.closeChangeBatch()},add:function WP$Common$ModelCollection$add(b){var a=this,e,c;c=b.addPropertyListener("",a._onPropertyChanged);a._modelId2listenerId[b.ModelId]=c;a.Models.push(b);for(e in a._indexDefinitions)a._addToIndex(a._indexDefinitions[e],b);a._onCollectionEvent(d.AddEvent)},addRange:function WP$Common$ModelCollection$addRange(b){this.openChangeBatch();for(var a=0;a<b.length;a++)this.add(b[a]);this.closeChangeBatch()},remove:function WP$Common$ModelCollection$remove(b){var a=this,c;if(a.Models.indexOf(b)===-1)return;b.removePropertyListener(a._modelId2listenerId[b.ModelId]);a.Models.splice(a.Models.indexOf(b),1);for(c in a._indexDefinitions)a._removeFromIndex(a._indexDefinitions[c],b,b);a._onCollectionEvent(d.RemoveEvent)},removeRange:function WP$Common$ModelCollection$removeRange(b){this.openChangeBatch();for(var a=0;a<b.length;a++)this.remove(b[a]);this.closeChangeBatch()},getFromIndex:function WP$Common$ModelCollection$getFromIndex(i,k,p){var o,j,m,d,h,n;if(!Array.isArray(i))i=[i];if(!Array.isArray(k))k=[k];j=i.join(b)+b;m=this._indices[j];if(typeof m!==g){$$WP.Debug.logError("Index does not exist for "+j);return a}else if(i.length!==k.length){$$WP.Debug.logError("Each specified property name must have a corresponding value");return a}d=l(m,k,false);if(d===a){h=this._indexDefinitions[j];if(h.storeAs===e)d={size:0};else if(h.storeAs===f)d=[]}else if(p===c){h=this._indexDefinitions[j];if(h.storeAs===e){n={};for(o in d)n[o]=d[o];d=n}else if(h.storeAs===f)d=d.slice()}return d},getFirstInIndex:function WP$Common$ModelCollection$getFirstInIndex(c,d){var b=this.getFromIndex(c,d);if(b===a)return a;if("size"in b)b=k(b);if($.isArray(b))if(b.length===0)b=a;else b=b[0];return b},getIndex:function WP$Common$ModelCollection$getIndex(c){var d;if(typeof c==="string")c=[c];d=c.join(b)+b;return this._indices[d]||a},sortByIndex:function WP$Common$ModelCollection$sortByIndex(a){if(this._indexedProperties[a])this.Models=this.Models.sort(function(b,c){return b[a]-c[a]});else throw"["+a+"] is not an indexed property on this collection.";},addMonitoredProperty:function WP$Common$ModelCollection$addMonitoredProperty(a){if(!$.isArray(this._monitoredProperties[a]))this._monitoredProperties[a]=[]},addPropertyListener:function WP$Common$ModelCollection$addPropertyListener(b,c,d){var a;if(!$.isArray(this._monitoredProperties[b])){$$WP.Debug.logError(b+" is not a monitorable property.");return}if(!$.isFunction(c)){$$WP.Debug.logError("Property change listener must be a function");return}a={callback:c,contextData:d,listenerId:n++};this._monitoredProperties[b].push(a);return a.listenerId},removePropertyListener:function WP$Common$ModelCollection$removePropertyListener(c,d){var a,b;a=this._monitoredProperties[c];if($.isArray(a))for(b=0;b<a.length;b++)if(a[b].listenerId===d){a.splice(b,1);return}},addCollectionEventListener:function WP$Common$ModelCollection$addCollectionEventListener(d,b,c){var a;if(!$.isFunction(b)){$$WP.Debug.logError("Event listener must be a function");return}a={callback:b,contextData:c,listenerId:o++};this._monitoredEvents[d].push(a);return a.listenerId},removeCollectionEventListener:function WP$Common$ModelCollection$removeCollectionEventListener(d,c){var a,b;a=this._monitoredEvents[d];if($.isArray(a))for(b=0;b<a.length;b++)if(a[b].listenerId===c){a.splice(b,1);return}},openChangeBatch:function WP$Common$ModelCollection$openChangeBatch(){this._changeBatch.openBatchCounter++},closeChangeBatch:function WP$Common$ModelCollection$closeChangeBatch(){var a=this,f,r,d,l,k,g,j,o,n,i,v,q,e,b,t,u,s,w,p;if(a._changeBatch.openBatchCounter===0)return;a._changeBatch.openBatchCounter--;if(a._changeBatch.openBatchCounter<0){$$WP.Debug.logError("Tried to close the change batch, but there wasn't one open.");return}if(a._changeBatch.openBatchCounter>0)return;r=a._changeBatch.changesMap;f=[];for(d in r)f.push(d);f.sort();for(l=0;l<f.length;l++){d=f[l];k=m.getInstance(d);g=r[d];j={};for(b in a._indexedProperties)if(typeof g[b]!==h)j[b]=g[b].from;else j[b]=k[b];o={};for(b in g){i=a._indexDefinitionsByProperty[b];if(!$$WPUtil.IsNullOrEmpty(i))for(n=0;n<i.length;n++)o[i[n].indexName]=c}for(v in o){q=a._indexDefinitions[v];a._removeFromIndex(q,j,k);a._addToIndex(q,k)}}u=a._changeBatch.collectionEvents;e=a._changeBatch.changeEventData;a._changeBatch={changesMap:{},changeEventData:{},openBatchCounter:0,collectionEvents:{}};for(s in u)for(w in a._monitoredEvents[s]){p=a._monitoredEvents[s][w];p.callback(p.contextData)}for(b in e){for(d in e[b]){t=e[b][d];if(t.from===t.to)delete e[b][d]}!$.isEmptyObject(e[b])&&a._invokePropertyListeners(b,e[b])}},size:function WP$Common$ModelCollection$size(){return this.Models.length},contains:function WP$Common$ModelCollection$contains(a){return this.Models.indexOf(a)!==-1},toArray:function WP$Common$ModelCollection$toArray(){return this.Models},toRawObjectArray:function WP$Common$ModelCollection$toRawObjectArray(){for(var b=[],a=0;a<this.Models.length;a++)b[a]=this.Models[a].toRawObject();return b},_onCollectionEvent:function WP$Common$ModelCollection$_onCollectionEvent(d){var a=this,e,b;if(a._changeBatch.openBatchCounter>0)a._changeBatch.collectionEvents[d]=c;else for(e in a._monitoredEvents[d]){b=a._monitoredEvents[d][e];b.callback(b.contextData)}},_invokePropertyListeners:function WP$Common$ModelCollection$_invokePropertyListeners(d,e){var a,c,b;a=this._monitoredProperties[d];if($.isArray(a))for(b=0;b<a.length;b++){c=a[b];c.callback(e,c.contextData)}},_addToIndex:function WP$Common$ModelCollection$_addToIndex(l,j){var m,h,i,b,k,d;h=l.propertyNames;i=this._indices[l.indexName];b=i;for(m=0;m<h.length-1;m++){k=j[h[m]];k!==a&&typeof k===g&&$$WP.Debug.logError("Indices will not work if the indexed value is a non-null object.");b=i[k]||{};i[k]=b;i=b}d=j[h[h.length-1]];if(l.storeAs===e){b[d]=b[d]||{size:0};b[d][j.ModelId]=c;b[d].size++}else if(l.storeAs===f){b[d]=b[d]||[];b[d].push(j)}else b[d]=j},_removeFromIndex:function WP$Common$ModelCollection$_removeFromIndex(i,n,k){var h,j,g,d,m,b;j=i.propertyNames||[];g=[];for(h=0;h<j.length;h++)g[h]=n[j[h]];d=g[g.length-1];m=this._indices[i.indexName];b=l(m,g,c);if(b===a)return;if(i.storeAs===e){b[d]=b[d]||{size:0};if(b[d][k.ModelId]){delete b[d][k.ModelId];b[d].size--}}else if(i.storeAs===f){b[d]=b[d]||[];b[d].splice(b[d].indexOf(k),1);if(b[d].length===0)delete b[d]}else delete b[d]},_getMutexRule:function WP$Common$ModelCollection$_getMutexRule(c,d){var b=this._mutexRules[c]||{};b=b[d];return b||a},_onPropertyChanged:function WP$Common$ModelCollection$_onPropertyChanged(d){var c=this,f,e,b,n,m,l,i,g,j,h,k;f=d.model;e=f.ModelId;b=d.propertyName;n=c._indexedProperties[b];m=$.isArray(c._monitoredProperties[b]);if(!n&&!m)return;l=c._getMutexRule(d.propertyName,d.to);if(l!==a){k=c.getFirstInIndex(b,l.value);if(k!==a&&k[b]===l.value&&k!==f){c.openChangeBatch();k.setProperty(b,l.bumpToValue);c._onPropertyChanged(d);c.closeChangeBatch();return}}if(c._changeBatch.openBatchCounter>0){i=c._changeBatch.changesMap;i[e]=i[e]||{};i[e][b]=i[e][b]||{from:d.from};i[e][b].to=d.to;if(m){g=c._changeBatch.changeEventData;g[b]=g[b]||{};g[b][e]=i[e][b];g[b][e].model=f}}else{if(n){j=c._indexDefinitionsByProperty[b];f[b]=d.from;for(h=0;h<j.length;h++)c._removeFromIndex(j[h],f,f);f[b]=d.to;for(h=0;h<j.length;h++)c._addToIndex(j[h],f)}if(m){g={};g[e]=d;c._invokePropertyListeners(b,g)}}}},i=function WP$Common$ModelCollection$IndexDefinition(d){var c=this,a=d.propertyNames;c.storeAs=d.storeAs;if(!Array.isArray(a))a=[a];c.propertyNames=a;c.indexName=c.propertyNames.join(b)+b};i.prototype={indexName:a,storeAs:a,propertyNames:a};var j=function WP$Common$ModelCollection$MutexRule(c,d){var a=this;a.propertyName=c.propertyName;a.value=c.value;a.bumpToValue=c.bumpToValue;a.modelCollection=d;a.indexDefinition=d._indexDefinitions[a.propertyName+b]};j.prototype={propertyName:a,value:a,bumpToValue:a,indexDefinition:a,modelCollection:a};var k=function WP$Common$ModelCollection$modelIdSet2Array(f,g){var e,d,b;b=[];for(e in f){if(f[e]!==c)continue;d=m.getInstance(e);if(d!==a)if(g)b.push(d.toRawObject());else b.push(d)}return b},r="add",p="remove",n=1,o=1,l=function WP$Common$ModelCollection$s_traverseIndex(f,c,e){var b,d;b=f;for(d=0;d<c.length-1;d++){b=b[c[d]];if($.type(b)!==g)return a}return e?b:b[c[c.length-1]]||a};d.prototype=q;d.modelIdSet2Array=k;d.IndexDefinition=i;d.MutexRule=j;d.AddEvent=r;d.RemoveEvent=p;$$WP.Common=$$WP.Common||{};$$WP.Common.ModelCollection=d;d.extend($$WP.BaseObject,"WP$Common$ModelCollection")})();$$WP.Debug.UnitTest=$$WP.Debug.UnitTest||{};$$WP.Debug.UnitTest.tests=$$WP.Debug.UnitTest.tests||[];$$WP.Debug.UnitTest.tests.push(function UnitTests$Common$ModelCollection(){var f="b",g="tester2",i="a",j="tester1",h=true,l="Selected",e=null,a="Value",d="Name",c="Id",m=false,s,p,k,b,o,n,r;b=$$WP.Debug.UnitTest.assert;s=$$WP.Common.Model;p=$$WP.Common.ModelCollection;var q=function UnitTest$isSizedSet(a){return $.isPlainObject(a)&&a.hasOwnProperty("size")};(function UnitTest$Common$ModelCollection$DefineTesterClass(){var b="single";k=function WP$Common$ModelCollection$Tester(a){this.WP$Common$Model(a);this.Selected=m};k.prototype={s_dataMembers:[c,d,a],Id:e,Name:e,Value:e,Selected:e};k.extend($$WP.Common.Model,"WP$Common$ModelCollection$Tester");o=[{propertyNames:l,storeAs:"set"},{propertyNames:c,storeAs:b},{propertyNames:d,storeAs:"array"},{propertyNames:a,storeAs:"set"},{propertyNames:[a,c],storeAs:b},{propertyNames:[c,a],storeAs:b},{propertyNames:[c,d,a],storeAs:b}];n=[a];r=[{propertyName:l,value:h,bumpToValue:m}]})();(function UnitTest$Common$ModelCollection$BasicFunctionality(){var e="The value of Models[0] did not match the expected value after the call to add()",c,d,a;a=new p(o,n,r);b(a.size()===0,"size() did not return 0 for a newly created ModelCollection");b($.isArray(a.Models)&&a.Models.length===0,"The Models property on the new ModelCollection was not properly initialized as an empty array");c=new k({Id:1,Name:j,Value:i});a.add(c);b(a.size()===1,"size() did not return 1 as expected after a call to add()");b($.isArray(a.Models)&&a.Models.length===1,"The Models property was not an array of length 1 as expected after the call to add()");b($.isArray(a.Models)&&a.Models[0]===c,e);d=new k({Id:2,Name:g,Value:f});a.add(d);b(a.size()===2,"size() did not return 2 as expected after the second call to add()");b($.isArray(a.Models)&&a.Models.length===2,"The Models property was not an array of length 2 as expected after the second call to add()");b($.isArray(a.Models)&&a.Models[0]===c,"The value of Models[0] did not match the expected value after the second call to add()");b($.isArray(a.Models)&&a.Models[1]===d,"The value of Models[1] did not match the expected value after the second call to add()");a.remove(c);b(a.size()===1,"size() did not return 1 as expected after the a call to remove()");b($.isArray(a.Models)&&a.Models.length===1,"The Models property was not an array of length 1 as expected after a call to remove()");b($.isArray(a.Models)&&a.Models[0]===d,e);a.remove(d);b(a.size()===0,"size() did not return 0 as expected after the a call to remove()");b($.isArray(a.Models)&&a.Models.length===0,"The Models property was not an array of length 0 as expected after a call to remove()");c.dispose()})();(function UnitTest$Common$ModelCollection$Indexing(){var w="[Id, Name, Value] (single) index did not contain the expected instance.",v="[Id, Value] (single) index did not contain the expected instance.",m,u,l,t;t=new p(o,n,r);m=new k({Id:1,Name:j,Value:i});t.add(m);b(s.getInstance(m.ModelId)===m,"ModelId-->instance map was not correctly updated when instance was first added to the collection.");l=t.getFromIndex(c,1);b(l===m,"[Id] (single) index was not correctly updated on first instance added.");l=t.getFromIndex(d,j);b($.isArray(l)&&l.length===1&&l[0]===m,"[Name] (array) index was not correctly updated on first instance added.");l=t.getFromIndex(a,i);b(q(l)&&l.size===1&&l[m.ModelId],"[Value] (set) index was not correctly updated on first instance added.");u=new k({Id:2,Name:g,Value:i});t.add(u);l=t.getFromIndex(a,i);b(q(l)&&l.size===2&&l[m.ModelId]&&l[u.ModelId],"[Value] (set) index was not correctly updated when a second instance with the same value was added.");m.setProperty(c,-1);l=t.getFromIndex(c,1);b(l===e,"[Id] (single) index was not correctly cleared under 1 when the instance's Id property changed from 1 to -1");l=t.getFromIndex(c,-1);b(l===m,"[Id] (single) index was not correctly set under -1 when the instance's Id property changed from 1 to -1");m.setProperty(d,g);l=t.getFromIndex(d,j);b($.isArray(l)&&l.length===0,"[Name] (array) index was not correctly cleared under 'tester1' when the instance's Name property changed from 'tester1' to 'tester2'");l=t.getFromIndex(d,g);b($.isArray(l)&&l.length===2&&l[0]===u&&l[1]===m,"[Name] (array) index was not correctly set under 'tester2' when the instance's Name property changed from 'tester1' to 'tester2'");m.setProperty(a,f);l=t.getFromIndex(a,i);b(q(l)&&l.size===1&&!l[m.ModelId]&&l[u.ModelId],"[Value] (set) index did not correctly remove the instance from the value 'a'");l=t.getFromIndex(a,f);b(q(l)&&l.size===1&&l[m.ModelId],"[Value] (set) index did not correctly move the instance to the value 'b'");l=t.getFromIndex(c,-1,h);b(l===m,"[Id] (single) index: failed to ignore the asCopy=true flag in getFromIndex(). ");l=t.getFromIndex(d,g,h);b($.isArray(l)&&l.length===2&&l[0]===u&&l[1]===m&&l!==t.getFromIndex(d,g)&&l!==t.getFromIndex(d,g,h)&&t.getFromIndex(d,g)===t.getFromIndex(d,g),"[Name] (array) index: failed to get a copy of the index storage structure from getFromIndex()");l=t.getFromIndex(a,f,h);b(q(l)&&l.size===1&&l[m.ModelId]&&l!==t.getFromIndex(a,f)&&l!==t.getFromIndex(a,f,h)&&t.getFromIndex(a,f)===t.getFromIndex(a,f),"[Value] (set) index: failed to get a copy of the index storage structure from getFromIndex()");l=t.getFirstInIndex(c,-1);b(l===m,"[Id] (single) index failed to get the correct instance with getFirstInIndex");l=t.getFirstInIndex(d,g);b(l===u,"[Name] (array) index failed to get the correct instance with getFirstInIndex");l=t.getFirstInIndex(a,f);b(l===m,"[Value] (set) index failed to get the correct instance with getFirstInIndex");l=t.getFromIndex([c,a],[m.Id,m.Value]);b(l===m,v);l=t.getFromIndex([c,d,a],[m.Id,m.Name,m.Value]);b(l===m,w);m.setProperty(c,1);m.setProperty(d,j);l=t.getFromIndex([c,a],[m.Id,m.Value]);b(l===m,v);l=t.getFromIndex([c,d,a],[m.Id,m.Name,m.Value]);b(l===m,w);t.remove(m);t.remove(u);l=t.getFromIndex(c,m.Id);b(l===e,"[Id] (single) index did not properly remove the removed instance");l=t.getFromIndex([c,a],[m.Id,m.Value]);b(l===e,"[Id, Value] (single) index did not properly remove the removed instance.");l=t.getFromIndex([c,d,a],[m.Id,m.Name,m.Value]);b(l===e,"[Id, Name, Value] (single) index did not properly remove the removed instance.");l=t.getFromIndex(c,"no instances have this Id");b(l===e,"[Id] (single) index did not return null for a value for which it had no instances");l=t.getFromIndex(d,"no instances have this Name");b($.isArray(l)&&l.length===0,"[Name] (array) index did not return an empty array for a value for which it had no instances");l=t.getFromIndex(a,"no instances have this Value");b(q(l)&&l.size===0,"[Value] (set) index did not return an empty set for a value for which it had no instances");m.dispose();u.dispose()})();(function UnitTest$Common$ModelCollection$ChangeBatch(){var s="The instance was not removed from the index during removal. This should happen even if a change batch is open.",m="The instance was already moved to its new index location by changes made in an open change batch.",q,h,l;l=new p(o,n,r);q=new k({Id:1,Name:j,Value:i});l.add(q);function checkIndexUnchanged(){var k="The instance was already removed from its original index location by changes made in an open change batch.";h=l.getFirstInIndex(c,1);b(h===q,k);h=l.getFirstInIndex(d,j);b(h===q,k);h=l.getFirstInIndex(a,i);b(h===q,k);h=l.getFirstInIndex(c,2);b(h===e,m);h=l.getFirstInIndex(d,g);b(h===e,m);h=l.getFirstInIndex(a,f);b(h===e,m)}function checkIndexChanged(){var k="The instance was not removed from its original index location when the change batch was closed.";h=l.getFirstInIndex(c,1);b(h===e,k);h=l.getFirstInIndex(d,j);b(h===e,k);h=l.getFirstInIndex(a,i);b(h===e,k);h=l.getFirstInIndex(c,2);b(h===q,m);h=l.getFirstInIndex(d,g);b(h===q,m);h=l.getFirstInIndex(a,f);b(h===q,m)}l.openChangeBatch();l.openChangeBatch();q.setProperty(c,2);q.setProperty(d,g);q.setProperty(a,f);checkIndexUnchanged();l.closeChangeBatch();checkIndexUnchanged();l.closeChangeBatch();checkIndexChanged();l.openChangeBatch();l.remove(q);h=l.getFirstInIndex(c,2);b(h===e,s);h=l.getFirstInIndex(d,g);b(h===e,s);h=l.getFirstInIndex(a,f);b(h===e,s);q.dispose()})();(function UnitTest$Common$ModelCollection$Mutex(){var a,c,d;d=new p(o,n,r);a=new k({Id:1,Name:j,Value:i});c=new k({Id:2,Name:g,Value:f});d.add(a);d.add(c);a.setProperty(l,h);b(a.Selected===h&&c.Selected===m,"Initially setting an instance to be selected failed");c.setProperty(l,h);b(a.Selected===m&&c.Selected===h,"Mutual exclusion did not behave as expected when setting the second instance to be selected");d.remove(c);a.setProperty(l,h);b(a.Selected===h&&c.Selected===h,"Mutual exclusion did not behave as expected with disposed instances");a.dispose();c.dispose()})();(function UnitTest$Common$ModelCollection$PropertyMonitor(){var c,s,e,m,q,g,l,d,t;d=new p(o,n,r);s=function(b,a){q=b;m=a;e=h};l={};t=d.addPropertyListener(a,s,l);c=new k({Id:1,Name:j,Value:i});d.add(c);d.openChangeBatch();c.setProperty(a,f);b(!e,"Callback was invoked during an open change batch");c.setProperty(a,i);d.closeChangeBatch();b(!e,"Callback was invoked after a change batch closed even though the net change was nothing");d.openChangeBatch();c.setProperty(a,f);c.setProperty(a,"c");d.closeChangeBatch();g=q[c.ModelId];b(e&&m===l&&$.type(g)==="object"&&g.from===i&&g.to==="c","Callback was not correctly invoked after multiple changes inside of a change batch.");c.dispose()})()})
(function ClassDefinition(){var d="viewdocument",a=true,b=false,c=null;$$WP.Utilities.guaranteeExistence($$WP,"Documents.ViewDocument.Models");var f=$$WP.Documents.ViewDocument.Models,e=function DocumentListModel(b,d,c,e){var a=this;if(!b)b={};a.AcceptedDocuments=[];a.PendingDocuments=[];a.RejectedDocuments=[];a.Documents=[];a.WP$Common$Model(b);a.SeparateByStatus=d;a.ShowPendingAndRejected=c;a.SetOverrideTitles(e)};e.prototype={Title:"Document List",s_dataMembers:[],Documents:c,Template:c,Error:c,NoData:b,SeparateByStatus:b,ShowPendingAndRejected:a,AcceptedDocumentsTitle:$$WP.Strings.getNamespace(d).getString("acceptedDocumentsTitle"),AcceptedDocumentsHelpText:c,PendingDocumentsTitle:$$WP.Strings.getNamespace(d).getString("pendingDocumentsTitle"),PendingDocumentsHelpText:c,RejectedDocumentsTitle:$$WP.Strings.getNamespace(d).getString("rejectedDocumentsTitle"),RejectedDocumentsHelpText:c,AllDocumentsTitle:$$WP.Strings.getNamespace(d).getString("allDocumentsTitle"),addDocument:function addDocument(a){this.Documents.push(a)},populateSubLists:function populateSubLists(){var c=this,h=0,f=0,g=0;c.NoPendingDocumentsData=b,c.NoRejectedDocumentsData=b,c.NoAcceptedDocumentsData=b;c.PendingDocuments=[];c.RejectedDocuments=[];c.AcceptedDocuments=[];if(c.SeparateByStatus)for(var e=0;e<c.Documents.length;e++){var d=c.Documents[e];if(d.PendingApproval){if(d.Filtered)h++;c.PendingDocuments.push(d)}else if(d.Rejected){if(d.Filtered)g++;c.RejectedDocuments.push(d)}else{if(d.Filtered)f++;c.AcceptedDocuments.push(d)}}if(c.PendingDocuments.length===0||h===c.PendingDocuments.length)c.NoPendingDocumentsData=a;if(c.RejectedDocuments.length===0||g===c.RejectedDocuments.length)c.NoRejectedDocumentsData=a;if(c.AcceptedDocuments.length===0||f===c.AcceptedDocuments.length)c.NoAcceptedDocumentsData=a},checkForNoData:function checkForNoData(){var b=this;if(b.AcceptedDocuments.length%2===1)b.AcceptedDocuments[b.AcceptedDocuments.length-1].Final=a;if(b.PendingDocuments.length%2===1)b.PendingDocuments[b.PendingDocuments.length-1].Final=a;if(b.RejectedDocuments.length%2===1)b.RejectedDocuments[b.RejectedDocuments.length-1].Final=a;if(b.Documents.length===0)b.NoDocumentsData=a},SetOverrideTitles:function SetOverrideTitles(a){var b=this;if(a.AllDocumentsTitle)b.AllDocumentsTitle=a.AllDocumentsTitle;if(a.AcceptedDocumentsTitle)b.AcceptedDocumentsTitle=a.AcceptedDocumentsTitle;if(a.PendingDocumentsTitle)b.PendingDocumentsTitle=a.PendingDocumentsTitle;if(a.RejectedDocumentsTitle)b.RejectedDocumentsTitle=a.RejectedDocumentsTitle;if(a.DocumentWidgetHelpText)b.AcceptedDocumentsHelpText=a.DocumentWidgetHelpText;if(a.PendingDocumentsHelpText)b.PendingDocumentsHelpText=a.PendingDocumentsHelpText;if(a.RejectedDocumentsHelpText)b.RejectedDocumentsHelpText=a.RejectedDocumentsHelpText}};$$WP.Documents.ViewDocument.Models.DocumentListModel=e;e.extend($$WP.Common.Model,"WP$Documents$ViewDocument$Models$DocumentWidgetModel")})()
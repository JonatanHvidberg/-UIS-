/*! Copyright 2017-2019 Epic Systems Corporation */
(function ClassDefinition(){var a=null,c="IsHCAUpdateAllowed";$$WP.Utilities.guaranteeExistence($$WP,"Demographics.Relationships.Models");var b=function Relationship(a){if(!a)a={};this.WP$Common$Model(a);this.proxify("setCategoryTitles")};b.prototype={s_dataMembers:["Id","FirstName","LastName","FormattedName","AddressViewModel","IsPrimary","HomePhone","WorkPhone","MobilePhone","PreferredDevice","Email","IsViewOnly","IsPrivate","LinkedDocumentId","LinkedDocument","PendingLinkedDocumentId","PendingLinkedDocument","IsActiveHealthCareAgent","RelationToPatient","LegalRelationToPatient","PendingLegalRelationToPatient","IsUpdatePending","IsDeletePending","IsAddPending",c,"HCAUpdateRejectionReason",c,"DocumentList","IsHCARemovalAllowed","IsHCA","IsVRK"],Id:a,FirstName:a,LastName:a,FormattedName:a,AddressViewModel:a,IsPrimary:a,IsDeletePending:a,IsUpdatePending:a,IsAddPending:a,IsHCA:a,IsVRK:a,IsHCAUpdateAllowed:a,IsHCARemovalAllowed:a,HomePhone:a,WorkPhone:a,MobilePhone:a,PreferredDevice:a,Email:a,IsViewOnly:a,IsPrivate:a,LinkedDocumentId:a,PendingLinkedDocumentId:a,LinkedDocument:a,PendingLinkedDocument:a,IsActiveHealthCareAgent:a,RelationToPatient:{Value:a,Title:a,CategoryItems:a},LegalRelationToPatient:{Value:a,Title:a,CategoryItems:a},PendingLegalRelationToPatient:{Value:a,Title:a,CategoryItems:a},HCAUpdateRejectionReason:a,DocumentList:a,setCategoryTitles:function setCategoryTitles(){var a;[this.RelationToPatient,this.LegalRelationToPatient,this.PendingLegalRelationToPatient].forEach(function(b){for(a=0;a<b.CategoryItems.length;a++)if(b.CategoryItems[a].Value===b.Value){b.Title=b.CategoryItems[a].TitleUtf8;break}})}};b.parseList=function parseList(a){var c=[];a&&Array.isArray(a)&&a.forEach(function parseAndAdd(a){c.push(b.parse(a))});return c};b.parse=function parse(a){return new b(a)};$$WP.Demographics.Relationships.Models.Relationship=b;b.extend($$WP.Common.Model,"WP$Demographics$Relationships$Models$Relationship")})()
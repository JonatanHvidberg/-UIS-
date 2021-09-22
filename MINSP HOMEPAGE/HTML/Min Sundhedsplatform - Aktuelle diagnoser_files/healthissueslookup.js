/*! Copyright (c) Epic Systems Corporation 2016
*
* HISTORY:
*   *kagr 07/16 425396 Created.
*/
$$WPUtil.guaranteeExistence($$WP,"Clinical.HealthIssues.Components");$$WP.Clinical.HealthIssues.Components.HealthIssuesLookup=function $$WP$Clinical$HealthIssues$Lookup(a){this.Components$LookupComponent(a)};$$WP.Clinical.HealthIssues.Components.HealthIssuesLookup.prototype={makeUrl:function(c,d){var b=50,a=false;if(d===this.SUGGESTION){b=10;a=true}return makeLink("Clinical/HealthIssues/Search?searchKey="+encodeURIComponent(c)+"&maxHits="+b+"&forSuggestions="+a)}};$$WP.Clinical.HealthIssues.Components.HealthIssuesLookup.extend("Components.LookupComponent")
/*! Copyright Epic Systems Corporation 2016 */
$$WP.Utilities.guaranteeExistence($$WP,"Visits");$$WP.Visits.VisitsCalendarContainer=function WPVst$VtsCalendarComponent(b){var a=this;b=b||{};a.Containers$ContainerComponent(b);a.CalendarComponent=new $$WP.Containers.MultiMonthCalendar({Class:"Calendar",IsClosable:false,NumOfMonths:1});a.addComponent(a.CalendarComponent)};$$WP.Visits.VisitsCalendarContainer.prototype={CalendarComponent:null,IsClosable:false,show:function(a){a=a!==false;this.Containers$ContainerComponent$show(a)}};$$WP.Visits.VisitsCalendarContainer.extend("Containers.ContainerComponent")
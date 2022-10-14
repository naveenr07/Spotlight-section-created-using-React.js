(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(c,b){c=c.split(".");var a=e;c[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?a[d]&&a[d]!==Object.prototype[d]?a=a[d]:a=a[d]={}:a[d]=b}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"};
g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"d MMM",MONTH_DAY_FULL:"dd MMMM",MONTH_DAY_SHORT:"dd/MM",MONTH_DAY_MEDIUM:"d MMMM",MONTH_DAY_YEAR_MEDIUM:"d MMM y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, d MMM",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, d MMM y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"d MMM, HH:mm zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["am","pm"],DATEFORMATS:["EEEE, d MMMM y",
"d MMMM y","d MMM y","dd/MM/y"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:3};function k(c,b){if(void 0===b){b=c+"";var a=b.indexOf(".");b=Math.min(-1===a?0:b.length-a-1,3)}a=Math.pow(10,b);b={g:b,f:(c*a|0)%a};return 1==(c|0)&&0==b.g?"one":"other"}
var l=k;l=k;f("YT_I18N_FORMATTING_GOOG_LOCALE","en-GB");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"yesterday",0:"today",1:"tomorrow"},P:"one{# day ago}other{# days ago}",F:"one{in # day}other{in # days}"}},HOUR:{LONG:{R:{0:"this hour"},P:"one{# hour ago}other{# hours ago}",F:"one{in # hour}other{in # hours}"},SHORT:{R:{0:"this hour"},P:"one{# hr ago}other{# hr ago}",F:"one{in # hr}other{in # hr}"}},MINUTE:{LONG:{R:{0:"this minute"},P:"one{# minute ago}other{# minutes ago}",F:"one{in # minute}other{in # minutes}"},SHORT:{R:{0:"this minute"},
P:"one{# min ago}other{# min ago}",F:"one{in # min}other{in # min}"}},MONTH:{LONG:{R:{"-1":"last month",0:"this month",1:"next month"},P:"one{# month ago}other{# months ago}",F:"one{in # month}other{in # months}"},SHORT:{R:{"-1":"last mo",0:"this mo",1:"next mo"},P:"one{# mo ago}other{# mo ago}",F:"one{in # mo}other{in # mo}"}},QUARTER:{LONG:{R:{"-1":"last quarter",0:"this quarter",1:"next quarter"},P:"one{# quarter ago}other{# quarters ago}",F:"one{in # quarter}other{in # quarters}"},SHORT:{R:{"-1":"last qtr.",
0:"this qtr.",1:"next qtr."},P:"one{# qtr ago}other{# qtr ago}",F:"one{in # qtr}other{in # qtr}"}},SECOND:{LONG:{R:{0:"now"},P:"one{# second ago}other{# seconds ago}",F:"one{in # second}other{in # seconds}"},SHORT:{R:{0:"now"},P:"one{# sec ago}other{# sec ago}",F:"one{in # sec}other{in # sec}"}},WEEK:{LONG:{R:{"-1":"last week",0:"this week",1:"next week"},P:"one{# week ago}other{# weeks ago}",F:"one{in # week}other{in # weeks}"},SHORT:{R:{"-1":"last wk",0:"this wk",1:"next wk"},P:"one{# wk ago}other{# wk ago}",
F:"one{in # wk}other{in # wk}"}},YEAR:{LONG:{R:{"-1":"last year",0:"this year",1:"next year"},P:"one{# year ago}other{# years ago}",F:"one{in # year}other{in # years}"},SHORT:{R:{"-1":"last yr",0:"this yr",1:"next yr"},P:"one{# yr ago}other{# yr ago}",F:"one{in # yr}other{in # yr}"}}});f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",l);}).call(this);

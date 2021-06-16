(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"QBz/":function(b,o,e){"use strict";e.r(o),e.d(o,"BoxInfoModule",function(){return d});var t=e("ofXK"),r=e("tyNb"),n=e("wZee"),c=e("fXoL"),l=e("3HTj");const a=[{path:"",component:(()=>{class b{ngAfterViewInit(){n.highlightAll()}}return b.\u0275fac=function(o){return new(o||b)},b.\u0275cmp=c.Eb({type:b,selectors:[["app-box-info"]],decls:181,vars:7,consts:[[1,"row"],[1,"col-md-3","col-xs-12"],["header","Messages","iconBackgroundColor","aqua","iconStyleClass","fa fa-envelope-o"],["header","Bookmarks","iconBackgroundColor","green","iconStyleClass","fa fa-flag-o"],["header","Uploads","iconBackgroundColor","yellow","iconStyleClass","fa fa-flag-o"],["header","Uploads","iconBackgroundColor","red","iconStyleClass","fa fa-star-o"],["header","Bookmarks","footer","70% Increase in 30 Days","backgroundColor","aqua","iconStyleClass","fa fa-bookmark-o",3,"progressWidth"],["header","Likes","footer","70% Increase in 30 Days","backgroundColor","green","iconStyleClass","fa fa-thumbs-o-up",3,"progressWidth"],["header","Events","footer","70% Increase in 30 Days","backgroundColor","yellow","iconStyleClass","fa fa-calendar",3,"progressWidth"],["header","Comments","footer","70% Increase in 30 Days","backgroundColor","yellow","iconStyleClass","fa fa-comments-o",3,"progressWidth"],[1,"col-md-6","col-xs-12"],["header","Info Box with text header & footer",3,"isRemovable"],[1,"language-html"],["header","Info Box with HTML header & footer",3,"isRemovable"],["header","Properties","contentClasses","table-responsive",3,"isRemovable"],[1,"table","table-bordered","table-hover"]],template:function(b,o){1&b&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"mk-box-info",2),c.Jc(3," 1,410 "),c.Qb(),c.Qb(),c.Rb(4,"div",1),c.Rb(5,"mk-box-info",3),c.Jc(6," 410 "),c.Qb(),c.Qb(),c.Rb(7,"div",1),c.Rb(8,"mk-box-info",4),c.Jc(9," 13,648 "),c.Qb(),c.Qb(),c.Rb(10,"div",1),c.Rb(11,"mk-box-info",5),c.Jc(12," 93,139 "),c.Qb(),c.Qb(),c.Qb(),c.Rb(13,"div",0),c.Rb(14,"div",1),c.Rb(15,"mk-box-info",6),c.Jc(16," 41,410 "),c.Qb(),c.Qb(),c.Rb(17,"div",1),c.Rb(18,"mk-box-info",7),c.Jc(19," 41,410 "),c.Qb(),c.Qb(),c.Rb(20,"div",1),c.Rb(21,"mk-box-info",8),c.Jc(22," 41,410 "),c.Qb(),c.Qb(),c.Rb(23,"div",1),c.Rb(24,"mk-box-info",9),c.Jc(25," 41,410 "),c.Qb(),c.Qb(),c.Qb(),c.Rb(26,"div",0),c.Rb(27,"div",10),c.Rb(28,"mk-box",11),c.Rb(29,"pre"),c.Rb(30,"code",12),c.Jc(31,'<mk-box-info header="Header text" footer="Footer text" [progressWidth]="70" backgroundColor="yellow" iconStyleClass="fa fa-comments-o">\n  Content text\n</mk-box-info>'),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(32,"div",10),c.Rb(33,"mk-box",13),c.Rb(34,"pre"),c.Rb(35,"code",12),c.Jc(36,'<mk-box-info [progressWidth]="70" backgroundColor="yellow" iconStyleClass="fa fa-comments-o">\n  <mk-box-info-header>Header HTML</mk-box-info-header>\n  <mk-box-info-content>Content HTML</mk-box-info-content>\n  <mk-box-info-footer>Footer HTML</mk-box-info-footer>\n</mk-box-info>'),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(37,"mk-box",14),c.Rb(38,"table",15),c.Rb(39,"tbody"),c.Rb(40,"tr"),c.Rb(41,"th"),c.Jc(42,"Name"),c.Qb(),c.Rb(43,"th"),c.Jc(44,"Type"),c.Qb(),c.Rb(45,"th"),c.Jc(46,"Default"),c.Qb(),c.Rb(47,"th"),c.Jc(48,"Description"),c.Qb(),c.Qb(),c.Rb(49,"tr"),c.Rb(50,"td"),c.Jc(51,"backgroundColor"),c.Qb(),c.Rb(52,"td"),c.Jc(53,"string (aqua | green | red | yellow)"),c.Qb(),c.Rb(54,"td"),c.Jc(55,"null"),c.Qb(),c.Rb(56,"td"),c.Jc(57,"The box background color."),c.Qb(),c.Qb(),c.Rb(58,"tr"),c.Rb(59,"td"),c.Jc(60,"contentStyleClass"),c.Qb(),c.Rb(61,"td"),c.Jc(62,"string"),c.Qb(),c.Rb(63,"td"),c.Jc(64,"info-box-number"),c.Qb(),c.Rb(65,"td"),c.Jc(66,"The box content style classes."),c.Qb(),c.Qb(),c.Rb(67,"tr"),c.Rb(68,"td"),c.Jc(69,"contentColor"),c.Qb(),c.Rb(70,"td"),c.Jc(71,"string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)"),c.Qb(),c.Rb(72,"td"),c.Jc(73,"null"),c.Qb(),c.Rb(74,"td"),c.Jc(75,"The box content font color."),c.Qb(),c.Qb(),c.Rb(76,"tr"),c.Rb(77,"td"),c.Jc(78,"footer"),c.Qb(),c.Rb(79,"td"),c.Jc(80,"string"),c.Qb(),c.Rb(81,"td"),c.Jc(82,"null"),c.Qb(),c.Rb(83,"td"),c.Jc(84," Footer text of the panel."),c.Mb(85,"br"),c.Rb(86,"em"),c.Jc(87,"Note: You can use <mk-box-info-footer> for HTML footer."),c.Qb(),c.Qb(),c.Qb(),c.Rb(88,"tr"),c.Rb(89,"td"),c.Jc(90,"footerColor"),c.Qb(),c.Rb(91,"td"),c.Jc(92,"string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)"),c.Qb(),c.Rb(93,"td"),c.Jc(94,"null"),c.Qb(),c.Rb(95,"td"),c.Jc(96,"The box footer font color."),c.Qb(),c.Qb(),c.Rb(97,"tr"),c.Rb(98,"td"),c.Jc(99,"footerStyleClass"),c.Qb(),c.Rb(100,"td"),c.Jc(101,"string"),c.Qb(),c.Rb(102,"td"),c.Jc(103,"progress-description"),c.Qb(),c.Rb(104,"td"),c.Jc(105,"The box footer style classes."),c.Qb(),c.Qb(),c.Rb(106,"tr"),c.Rb(107,"td"),c.Jc(108,"header"),c.Qb(),c.Rb(109,"td"),c.Jc(110,"string"),c.Qb(),c.Rb(111,"td"),c.Jc(112,"null"),c.Qb(),c.Rb(113,"td"),c.Jc(114," Header text of the box."),c.Mb(115,"br"),c.Rb(116,"em"),c.Jc(117,"Note: You can use <mk-box-info-header> for HTML header."),c.Qb(),c.Qb(),c.Qb(),c.Rb(118,"tr"),c.Rb(119,"td"),c.Jc(120,"headerColor"),c.Qb(),c.Rb(121,"td"),c.Jc(122,"string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)"),c.Qb(),c.Rb(123,"td"),c.Jc(124,"null"),c.Qb(),c.Rb(125,"td"),c.Jc(126,"The box header font color."),c.Qb(),c.Qb(),c.Rb(127,"tr"),c.Rb(128,"td"),c.Jc(129,"headerStyleClass"),c.Qb(),c.Rb(130,"td"),c.Jc(131,"string"),c.Qb(),c.Rb(132,"td"),c.Jc(133,"info-box-text"),c.Qb(),c.Rb(134,"td"),c.Jc(135,"The box header style classes."),c.Qb(),c.Qb(),c.Rb(136,"tr"),c.Rb(137,"td"),c.Jc(138,"iconBackgroundColor"),c.Qb(),c.Rb(139,"td"),c.Jc(140,"string (aqua | green | red | yellow)"),c.Qb(),c.Rb(141,"td"),c.Jc(142,"null"),c.Qb(),c.Rb(143,"td"),c.Jc(144,"The box icon background color."),c.Qb(),c.Qb(),c.Rb(145,"tr"),c.Rb(146,"td"),c.Jc(147,"iconColor"),c.Qb(),c.Rb(148,"td"),c.Jc(149,"string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)"),c.Qb(),c.Rb(150,"td"),c.Jc(151,"null"),c.Qb(),c.Rb(152,"td"),c.Jc(153,"The box icon font color."),c.Qb(),c.Qb(),c.Rb(154,"tr"),c.Rb(155,"td"),c.Jc(156,"iconStyleClass"),c.Qb(),c.Rb(157,"td"),c.Jc(158,"string"),c.Qb(),c.Rb(159,"td"),c.Jc(160,"ion ion-bag"),c.Qb(),c.Rb(161,"td"),c.Jc(162,"The box icon style classes."),c.Qb(),c.Qb(),c.Rb(163,"tr"),c.Rb(164,"td"),c.Jc(165,"progressWidth"),c.Qb(),c.Rb(166,"td"),c.Jc(167,"number"),c.Qb(),c.Rb(168,"td"),c.Jc(169,"null"),c.Qb(),c.Rb(170,"td"),c.Jc(171,"The progress bar width of the box in percentage."),c.Qb(),c.Qb(),c.Rb(172,"tr"),c.Rb(173,"td"),c.Jc(174,"styleClass"),c.Qb(),c.Rb(175,"td"),c.Jc(176,"string"),c.Qb(),c.Rb(177,"td"),c.Jc(178,"info-box"),c.Qb(),c.Rb(179,"td"),c.Jc(180,"The box style classes."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&b&&(c.xb(15),c.lc("progressWidth",70),c.xb(3),c.lc("progressWidth",70),c.xb(3),c.lc("progressWidth",70),c.xb(3),c.lc("progressWidth",70),c.xb(4),c.lc("isRemovable",!1),c.xb(5),c.lc("isRemovable",!1),c.xb(4),c.lc("isRemovable",!1))},directives:[l.k,l.h],styles:[""]}),b})()}];let s=(()=>{class b{}return b.\u0275mod=c.Ib({type:b}),b.\u0275inj=c.Hb({factory:function(o){return new(o||b)},imports:[[r.j.forChild(a)],r.j]}),b})(),d=(()=>{class b{}return b.\u0275mod=c.Ib({type:b}),b.\u0275inj=c.Hb({factory:function(o){return new(o||b)},imports:[[t.c,s,l.m,l.l]]}),b})()}}]);
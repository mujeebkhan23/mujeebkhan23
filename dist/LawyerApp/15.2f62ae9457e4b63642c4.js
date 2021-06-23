(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{g38n:function(b,e,t){"use strict";t.r(e),t.d(e,"ConfigurationModule",function(){return d});var a=t("ofXK"),o=t("tyNb"),i=t("wZee"),r=t("fXoL"),l=t("3HTj");const s=[{path:"",component:(()=>{class b{ngAfterViewInit(){i.highlightAll()}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=r.Eb({type:b,selectors:[["app-configuration"]],decls:254,vars:14,consts:[["header","Configuring Layout",3,"isCollapsable","isRemovable"],["header","Configuration File",3,"isCollapsable","isRemovable"],[1,"language-typescript"],["header","Import Conf And Module",3,"isCollapsable","isRemovable"],["header","App view HTML",3,"isCollapsable","isRemovable"],[1,"language-html"],["header","Configuration properties","contentStyleClasses","table-responsive",3,"isCollapsable","isRemovable"],[1,"table","table-bordered","table-hover"],["header","Layout setters",3,"isCollapsable","isRemovable"],["header","Layout subscriptions",3,"isCollapsable","isRemovable"]],template:function(b,e){1&b&&(r.Rb(0,"mk-box",0),r.Rb(1,"p"),r.Jc(2,"If can use the layout components or just use the presentation components of angular-admin-lte."),r.Qb(),r.Rb(3,"p"),r.Jc(4," If you chose to use the layout you will need to:"),r.Qb(),r.Rb(5,"ol"),r.Rb(6,"li"),r.Jc(7,"Create a layout configuration file."),r.Qb(),r.Rb(8,"li"),r.Jc(9,"Import the layout module and provide the layout configuration in your main app module."),r.Qb(),r.Rb(10,"li"),r.Jc(11,"Update the main app view."),r.Qb(),r.Qb(),r.Qb(),r.Rb(12,"mk-box",1),r.Rb(13,"pre"),r.Rb(14,"code",2),r.Lb(),r.Jc(15,"export var adminLteConf = {\n  skin: 'blue',\n  ...\n  sidebarLeftMenu: [\n    {label: 'Start', route: '/', iconClasses: 'fa fa-th'},\n    ...\n  ]\n};\n"),r.Sb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(16,"mk-box",3),r.Rb(17,"pre"),r.Rb(18,"code",2),r.Jc(19,"import { adminLteConf } from './admin-lte.conf';   //Import the layout configuration.\nimport { LayoutModule } from 'angular-admin-lte';   //Import the layout module.\n\n@NgModule({\n  imports: [\n    ...\n    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.\n  ],\n  ...\n})\nexport class AppModule {}\n"),r.Qb(),r.Qb(),r.Qb(),r.Rb(20,"mk-box",4),r.Rb(21,"pre"),r.Rb(22,"code",5),r.Jc(23,"<mk-layout-wrapper>\n  <mk-layout-sidebar-right>\n    Sidebar right HTML\n  </mk-layout-sidebar-right>\n  <mk-layout-header>\n    <mk-layout-header-logo>Logo HTML</mk-layout-header-logo>\n    <mk-layout-header-logo-mini>Logo Mini HTML</mk-layout-header-logo-mini>\n    Header HTML\n  </mk-layout-header>\n  <mk-layout-sidebar-left>\n    Sidebar left HTML (just above menu)\n  </mk-layout-sidebar-left>\n  <mk-layout-content>\n    <router-outlet></router-outlet>\n  </mk-layout-content>\n  <mk-layout-footer>\n    <mk-layout-footer-left>\n      Footer left HTML\n    </mk-layout-footer-left>\n    <mk-layout-footer-right>\n      Footer right HTML\n    </mk-layout-footer-right>\n  </mk-layout-footer>\n</mk-layout-wrapper>\n"),r.Qb(),r.Qb(),r.Qb(),r.Rb(24,"mk-box",6),r.Rb(25,"table",7),r.Rb(26,"tbody"),r.Rb(27,"tr"),r.Rb(28,"th"),r.Jc(29,"Name"),r.Qb(),r.Rb(30,"th"),r.Jc(31,"Type"),r.Qb(),r.Rb(32,"th"),r.Jc(33,"Default"),r.Qb(),r.Rb(34,"th"),r.Jc(35,"Description"),r.Qb(),r.Qb(),r.Rb(36,"tr"),r.Rb(37,"td"),r.Jc(38,"skin"),r.Qb(),r.Rb(39,"td"),r.Jc(40,"string ('blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light')"),r.Qb(),r.Rb(41,"td"),r.Jc(42,"'blue'"),r.Qb(),r.Rb(43,"td"),r.Jc(44,"Set the theme skin."),r.Qb(),r.Qb(),r.Rb(45,"tr"),r.Rb(46,"td"),r.Jc(47,"isSidebarLeftCollapsed"),r.Qb(),r.Rb(48,"td"),r.Jc(49,"boolean"),r.Qb(),r.Rb(50,"td"),r.Jc(51,"false"),r.Qb(),r.Rb(52,"td"),r.Jc(53,"Defines if the sidebar left is collapsed."),r.Qb(),r.Qb(),r.Rb(54,"tr"),r.Rb(55,"td"),r.Jc(56,"isSidebarLeftExpandOnOver"),r.Qb(),r.Rb(57,"td"),r.Jc(58,"boolean"),r.Qb(),r.Rb(59,"td"),r.Jc(60,"false"),r.Qb(),r.Rb(61,"td"),r.Jc(62,"Define if sidebar left expand on mouse over."),r.Qb(),r.Qb(),r.Rb(63,"tr"),r.Rb(64,"td"),r.Jc(65,"isSidebarLeftMini"),r.Qb(),r.Rb(66,"td"),r.Jc(67,"boolean"),r.Qb(),r.Rb(68,"td"),r.Jc(69,"false"),r.Qb(),r.Rb(70,"td"),r.Jc(71,"Define if sidebar left minified is visible."),r.Qb(),r.Qb(),r.Rb(72,"tr"),r.Rb(73,"td"),r.Jc(74,"sidebarRightSkin"),r.Qb(),r.Rb(75,"td"),r.Jc(76,"string ('dark' | 'light')"),r.Qb(),r.Rb(77,"td"),r.Jc(78,"'dark'"),r.Qb(),r.Rb(79,"td"),r.Jc(80,"Set the sidebar right skin."),r.Qb(),r.Qb(),r.Rb(81,"tr"),r.Rb(82,"td"),r.Jc(83,"isSidebarRightCollapsed"),r.Qb(),r.Rb(84,"td"),r.Jc(85,"boolean"),r.Qb(),r.Rb(86,"td"),r.Jc(87,"true"),r.Qb(),r.Rb(88,"td"),r.Jc(89,"Defines if the sidebar right is collapsed."),r.Qb(),r.Qb(),r.Rb(90,"tr"),r.Rb(91,"td"),r.Jc(92,"isSidebarRightOverContent"),r.Qb(),r.Rb(93,"td"),r.Jc(94,"boolean"),r.Qb(),r.Rb(95,"td"),r.Jc(96,"true"),r.Qb(),r.Rb(97,"td"),r.Jc(98,"Defines if sidebar right slide over content."),r.Qb(),r.Qb(),r.Rb(99,"tr"),r.Rb(100,"td"),r.Jc(101,"layout"),r.Qb(),r.Rb(102,"td"),r.Jc(103,"string ('normal' | 'boxed' | 'fixed')"),r.Qb(),r.Rb(104,"td"),r.Jc(105,"'normal'"),r.Qb(),r.Rb(106,"td"),r.Jc(107,"Define the layout style."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(108,"mk-box",8),r.Rb(109,"table",7),r.Rb(110,"tbody"),r.Rb(111,"tr"),r.Rb(112,"th"),r.Jc(113,"Name"),r.Qb(),r.Rb(114,"th"),r.Jc(115,"Parameters"),r.Qb(),r.Rb(116,"th"),r.Jc(117,"Description"),r.Qb(),r.Qb(),r.Rb(118,"tr"),r.Rb(119,"td"),r.Jc(120,"sidebarLeftCollapsed()"),r.Qb(),r.Rb(121,"td"),r.Jc(122,"boolean"),r.Qb(),r.Rb(123,"td"),r.Jc(124,"Programmatically set if sidebar left is collapsed."),r.Qb(),r.Qb(),r.Rb(125,"tr"),r.Rb(126,"td"),r.Jc(127,"sidebarLeftExpandOnOver()"),r.Qb(),r.Rb(128,"td"),r.Jc(129,"boolean"),r.Qb(),r.Rb(130,"td"),r.Jc(131,"Programmatically set if sidebar left expand on over."),r.Qb(),r.Qb(),r.Rb(132,"tr"),r.Rb(133,"td"),r.Jc(134,"sidebarLeftExpandOnOver()"),r.Qb(),r.Rb(135,"td"),r.Jc(136,"boolean"),r.Qb(),r.Rb(137,"td"),r.Jc(138,"Programmatically set if sidebar left expand on over."),r.Qb(),r.Qb(),r.Rb(139,"tr"),r.Rb(140,"td"),r.Jc(141,"setSidebarRightSkin()"),r.Qb(),r.Rb(142,"td"),r.Jc(143,"'dark' | 'light'"),r.Qb(),r.Rb(144,"td"),r.Jc(145,"Programmatically defines sidebar right skin."),r.Qb(),r.Qb(),r.Rb(146,"tr"),r.Rb(147,"td"),r.Jc(148,"sidebarLeftMini()"),r.Qb(),r.Rb(149,"td"),r.Jc(150,"boolean"),r.Qb(),r.Rb(151,"td"),r.Jc(152,"Programmatically set if sidebar left collapsed is visible."),r.Qb(),r.Qb(),r.Rb(153,"tr"),r.Rb(154,"td"),r.Jc(155,"sidebarRightCollapsed()"),r.Qb(),r.Rb(156,"td"),r.Jc(157,"boolean"),r.Qb(),r.Rb(158,"td"),r.Jc(159,"Programmatically set if sidebar right is collapsed."),r.Qb(),r.Qb(),r.Rb(160,"tr"),r.Rb(161,"td"),r.Jc(162,"sidebarRightOverContent()"),r.Qb(),r.Rb(163,"td"),r.Jc(164,"boolean"),r.Qb(),r.Rb(165,"td"),r.Jc(166,"Programmatically set if sidebar right slide over content."),r.Qb(),r.Qb(),r.Rb(167,"tr"),r.Rb(168,"td"),r.Jc(169,"setSidebarLeftMenu()"),r.Qb(),r.Rb(170,"td"),r.Jc(171,"Array"),r.Qb(),r.Rb(172,"td"),r.Jc(173,"Update sidebar right menu."),r.Qb(),r.Qb(),r.Rb(174,"tr"),r.Rb(175,"td"),r.Jc(176,"setLayout()"),r.Qb(),r.Rb(177,"td"),r.Jc(178,"string"),r.Qb(),r.Rb(179,"td"),r.Jc(180,"Update layout style."),r.Qb(),r.Qb(),r.Rb(181,"tr"),r.Rb(182,"td"),r.Jc(183,"setSkin()"),r.Qb(),r.Rb(184,"td"),r.Jc(185,"string"),r.Qb(),r.Rb(186,"td"),r.Jc(187,"Update theme skin."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(188,"mk-box",9),r.Rb(189,"table",7),r.Rb(190,"tbody"),r.Rb(191,"tr"),r.Rb(192,"th"),r.Jc(193,"Name"),r.Qb(),r.Rb(194,"th"),r.Jc(195,"Parameters"),r.Qb(),r.Rb(196,"th"),r.Jc(197,"Description"),r.Qb(),r.Qb(),r.Rb(198,"tr"),r.Rb(199,"td"),r.Jc(200,"isSidebarLeftCollapsed"),r.Qb(),r.Rb(201,"td"),r.Jc(202,"Observable<boolean>"),r.Qb(),r.Rb(203,"td"),r.Jc(204,"Subscribe to sidebar left collapse status."),r.Qb(),r.Qb(),r.Rb(205,"tr"),r.Rb(206,"td"),r.Jc(207,"isSidebarLeftExpandOnOver"),r.Qb(),r.Rb(208,"td"),r.Jc(209,"Observable<boolean>"),r.Qb(),r.Rb(210,"td"),r.Jc(211,"Subscribe to sidebar left expand on over status."),r.Qb(),r.Qb(),r.Rb(212,"tr"),r.Rb(213,"td"),r.Jc(214,"isSidebarLeftMini"),r.Qb(),r.Rb(215,"td"),r.Jc(216,"Observable<boolean>"),r.Qb(),r.Rb(217,"td"),r.Jc(218,"Subscribe to sidebar left mini status."),r.Qb(),r.Qb(),r.Rb(219,"tr"),r.Rb(220,"td"),r.Jc(221,"sidebarRightSkin"),r.Qb(),r.Rb(222,"td"),r.Jc(223,"Observable<string>"),r.Qb(),r.Rb(224,"td"),r.Jc(225,"Subscribe to sidebar right skin."),r.Qb(),r.Qb(),r.Rb(226,"tr"),r.Rb(227,"td"),r.Jc(228,"isSidebarRightCollapsed"),r.Qb(),r.Rb(229,"td"),r.Jc(230,"Observable<boolean>"),r.Qb(),r.Rb(231,"td"),r.Jc(232,"Subscribe to sidebar right collapsed status."),r.Qb(),r.Qb(),r.Rb(233,"tr"),r.Rb(234,"td"),r.Jc(235,"isSidebarRightOverContent"),r.Qb(),r.Rb(236,"td"),r.Jc(237,"Observable<Array>"),r.Qb(),r.Rb(238,"td"),r.Jc(239,"Subscribe to sidebar right over content status."),r.Qb(),r.Qb(),r.Rb(240,"tr"),r.Rb(241,"td"),r.Jc(242,"layout"),r.Qb(),r.Rb(243,"td"),r.Jc(244,"Observable<string>"),r.Qb(),r.Rb(245,"td"),r.Jc(246,"Subscribe to layout style changes."),r.Qb(),r.Qb(),r.Rb(247,"tr"),r.Rb(248,"td"),r.Jc(249,"skin"),r.Qb(),r.Rb(250,"td"),r.Jc(251,"Observable<string>"),r.Qb(),r.Rb(252,"td"),r.Jc(253,"Subscribe to theme skin changes."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&b&&(r.lc("isCollapsable",!1)("isRemovable",!1),r.xb(12),r.lc("isCollapsable",!1)("isRemovable",!1),r.xb(4),r.lc("isCollapsable",!1)("isRemovable",!1),r.xb(4),r.lc("isCollapsable",!1)("isRemovable",!1),r.xb(4),r.lc("isCollapsable",!0)("isRemovable",!1),r.xb(84),r.lc("isCollapsable",!1)("isRemovable",!1),r.xb(80),r.lc("isCollapsable",!1)("isRemovable",!1))},directives:[l.h],encapsulation:2}),b})()}];let n=(()=>{class b{}return b.\u0275mod=r.Ib({type:b}),b.\u0275inj=r.Hb({factory:function(e){return new(e||b)},imports:[[o.j.forChild(s)],o.j]}),b})(),d=(()=>{class b{}return b.\u0275mod=r.Ib({type:b}),b.\u0275inj=r.Hb({factory:function(e){return new(e||b)},imports:[[a.c,n,l.m]]}),b})()}}]);
import { Injectable, Component, ChangeDetectorRef, Input, NgModule, ChangeDetectionStrategy, ElementRef, ViewChild, ContentChild, NgZone, Renderer2, EventEmitter, Directive, Output, ViewChildren, InjectionToken, Optional, SkipSelf, ContentChildren, ViewContainerRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, PRIMARY_OUTLET, Router, RouterModule, NavigationStart, ActivationStart } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { NgControl, FormsModule } from '@angular/forms';

class RoutingService {
    constructor(router) {
        this.router = router;
        this.onChange = new BehaviorSubject(undefined);
        this.events = new BehaviorSubject(undefined);
        this.init();
    }
    static createUrl(route) {
        const url = route.url.map(urlSegment => urlSegment.toString()).join('/');
        return url;
    }
    static isChildrenSelfRoute(route) {
        var _a, _b;
        let test = false;
        (_b = (_a = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.forEach(child => {
            if (child.path === '' && (child.component || child.loadChildren)) {
                test = true;
            }
        });
        return test;
    }
    static createBreadcrumb(route, url) {
        var _a, _b, _c, _d;
        let isUrl = true;
        if (route.children.length !== 0 && ((_b = (_a = route === null || route === void 0 ? void 0 : route.firstChild) === null || _a === void 0 ? void 0 : _a.routeConfig) === null || _b === void 0 ? void 0 : _b.path)) {
            if (url !== '/' && !((_c = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _c === void 0 ? void 0 : _c.loadChildren)
                && !((_d = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _d === void 0 ? void 0 : _d.component) && !RoutingService.isChildrenSelfRoute(route)) {
                isUrl = false;
            }
        }
        return {
            data: route.data,
            params: route.params,
            url: isUrl ? url : null
        };
    }
    init() {
        this.router.events.subscribe(routeEvent => {
            var _a;
            // https://github.com/angular/angular/issues/17473: event not fired anymore on load for routed component.
            if (routeEvent instanceof NavigationEnd) {
                this.events.next(routeEvent);
                let route = this.router.routerState.root.snapshot;
                let tmpUrl = '';
                let url = '';
                let rootRoot = true;
                const paths = [];
                while (route.children.length) {
                    route = route.firstChild || route;
                    tmpUrl = `/${RoutingService.createUrl(route)}`;
                    if (route.outlet !== PRIMARY_OUTLET || (!((_a = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _a === void 0 ? void 0 : _a.path) && !rootRoot)) {
                        continue;
                    }
                    rootRoot = false;
                    if (route.params && route.data) {
                        for (const key in route.params) {
                            if (!key) {
                                continue;
                            }
                            if (route.data.hasOwnProperty('title')) {
                                route.data.title = route.data.title.replace(`:${key}`, route.params[key]);
                                route.data.title = route.data.title.replace(`:${key}`, route.params[key]);
                            }
                            if (route.data.hasOwnProperty('breadcrumbs')) {
                                route.data.breadcrumbs = route.data.breadcrumbs.replace(`:${key}`, route.params[key]);
                            }
                            if (route.data.hasOwnProperty('description')) {
                                route.data.description = route.data.description.replace(`:${key}`, route.params[key]);
                            }
                        }
                    }
                    if (tmpUrl === '/') {
                        paths.push(RoutingService.createBreadcrumb(route, tmpUrl));
                    }
                    else {
                        url += tmpUrl;
                        paths.push(RoutingService.createBreadcrumb(route, url));
                    }
                }
                this.onChange.next(paths);
            }
        });
    }
}
RoutingService.decorators = [
    { type: Injectable }
];
RoutingService.ctorParameters = () => [
    { type: Router }
];

class BreadcrumbsComponent {
    constructor(routingService, changeDetectorRef) {
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.homeIcon = 'fa fa-home';
    }
    ngOnInit() {
        this.subscription = this.routingService.onChange.subscribe(paths => {
            this.breadcrumbs = paths;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-breadcrumbs',
                template: "<ol class=\"breadcrumb\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let first = first; let last = last\" [class.active]=\"last || !breadcrumb.url\">\n    <a *ngIf=\"breadcrumb.url && !last; else noLink\" [routerLink]=\"breadcrumb.url\">\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </a>\n    <ng-template #noLink>\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </ng-template>\n  </li>\n</ol>\n",
                styles: [".breadcrumb{background:transparent;border-radius:2px;float:right;font-size:12px;margin-bottom:0;margin-top:0;padding:7px 5px;position:absolute;right:10px;top:15px}.breadcrumb>li>a{color:#444;display:inline-block;text-decoration:none}.breadcrumb>li .fa,.breadcrumb>li .glyphicon,.breadcrumb>li .ion{margin-right:5px}"]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: ChangeDetectorRef }
];
BreadcrumbsComponent.propDecorators = {
    homeIcon: [{ type: Input }]
};

class BreadcrumbsModule {
}
BreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [BreadcrumbsComponent],
                declarations: [BreadcrumbsComponent]
            },] }
];

class LayoutState {
    constructor(config) {
        this.isSidebarLeftCollapsed = false;
        this.isSidebarLeftExpandOnOver = false;
        this.isSidebarLeftMouseOver = false;
        this.isSidebarLeftMini = true;
        this.sidebarRightSkin = 'dark';
        this.isSidebarRightCollapsed = true;
        this.isSidebarRightOverContent = true;
        this.layout = 'normal';
        this.sidebarLeftMenu = [];
        this.sidebarLeftMenuActiveUrl = '';
        this.skin = 'blue';
        Object.assign(this, config);
    }
}

class LayoutStore {
    constructor(layoutConfig) {
        this.initialLayoutState = new LayoutState(layoutConfig);
        this.state = new BehaviorSubject(this.initialLayoutState);
        this.layoutState = this.state.asObservable();
    }
    get windowInnerHeight() {
        return this.layoutState.pipe(pluck('windowInnerHeight'), distinctUntilChanged());
    }
    get windowInnerWidth() {
        return this.layoutState.pipe(pluck('windowInnerWidth'), distinctUntilChanged());
    }
    get isSidebarLeftCollapsed() {
        return this.layoutState.pipe(pluck('isSidebarLeftCollapsed'), distinctUntilChanged());
    }
    get isSidebarLeftExpandOnOver() {
        return this.layoutState.pipe(pluck('isSidebarLeftExpandOnOver'), distinctUntilChanged());
    }
    get isSidebarLeftMouseOver() {
        return this.layoutState.pipe(pluck('isSidebarLeftMouseOver'), distinctUntilChanged());
    }
    get isSidebarLeftMini() {
        return this.layoutState.pipe(pluck('isSidebarLeftMini'), distinctUntilChanged());
    }
    get sidebarRightSkin() {
        return this.layoutState.pipe(pluck('sidebarRightSkin'), distinctUntilChanged());
    }
    get isSidebarRightCollapsed() {
        return this.layoutState.pipe(pluck('isSidebarRightCollapsed'), distinctUntilChanged());
    }
    get isSidebarRightOverContent() {
        return this.layoutState.pipe(pluck('isSidebarRightOverContent'), distinctUntilChanged());
    }
    get sidebarLeftMenu() {
        return this.layoutState.pipe(pluck('sidebarLeftMenu'), distinctUntilChanged());
    }
    get sidebarLeftMenuActiveUrl() {
        return this.layoutState.pipe(pluck('sidebarLeftMenuActiveUrl'), distinctUntilChanged());
    }
    get sidebarLeftElementHeight() {
        return this.layoutState.pipe(pluck('sidebarLeftElementHeight'), distinctUntilChanged());
    }
    get layout() {
        return this.layoutState.pipe(pluck('layout'), distinctUntilChanged());
    }
    get skin() {
        return this.layoutState.pipe(pluck('skin'), distinctUntilChanged());
    }
    sidebarLeftCollapsed(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarLeftCollapsed: value }));
    }
    sidebarLeftExpandOnOver(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarLeftExpandOnOver: value }));
    }
    setSidebarLeftElementHeight(value) {
        this.state.next(Object.assign(this.state.value, { sidebarLeftElementHeight: value }));
    }
    setSidebarRightSkin(value) {
        this.state.next(Object.assign(this.state.value, { sidebarRightSkin: value }));
    }
    sidebarLeftMouseOver(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarLeftMouseOver: value }));
    }
    sidebarLeftMini(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarLeftMini: value }));
    }
    sidebarRightCollapsed(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarRightCollapsed: value }));
    }
    sidebarRightOverContent(value) {
        this.state.next(Object.assign(this.state.value, { isSidebarRightOverContent: value }));
    }
    setSidebarLeftMenu(value) {
        this.state.next(Object.assign(this.state.value, { sidebarLeftMenu: value }));
    }
    setSidebarLeftMenuActiveUrl(value) {
        this.state.next(Object.assign(this.state.value, { sidebarLeftMenuActiveUrl: value }));
    }
    setLayout(value) {
        this.state.next(Object.assign(this.state.value, { layout: value }));
    }
    setSkin(value) {
        this.state.next(Object.assign(this.state.value, { skin: value }));
    }
    setWindowInnerHeight(value) {
        this.state.next(Object.assign(this.state.value, { windowInnerHeight: value }));
    }
    setWindowInnerWidth(value) {
        this.state.next(Object.assign(this.state.value, { windowInnerWidth: value }));
    }
}

class SidebarRightService {
    get scrollHeight() {
        return this.elementRef ? this.elementRef.nativeElement.scrollHeight : 0;
    }
}
SidebarRightService.decorators = [
    { type: Injectable }
];

class HeaderService {
    get offsetHeight() {
        return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
    }
}
HeaderService.decorators = [
    { type: Injectable }
];

class FooterService {
    get offsetHeight() {
        return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
    }
}
FooterService.decorators = [
    { type: Injectable }
];

function throttle(callback, delay) {
    let timeout = 0;
    return (...args) => {
        if (!timeout) {
            timeout = setTimeout(() => {
                // @ts-ignore
                callback.call(this, ...args);
                timeout = 0;
            }, delay);
        }
    };
}
function removeSubscriptions(subscriptions) {
    if (subscriptions) {
        subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
    }
    return [];
}
function removeListeners(listeners = []) {
    if (listeners) {
        listeners.forEach((listener) => {
            listener();
        });
    }
    return [];
}

class ContentComponent {
    constructor(layoutStore, routingService, titleService, elementRef, changeDetectorRef, sidebarRightService, headerService, footerService, router) {
        this.layoutStore = layoutStore;
        this.routingService = routingService;
        this.titleService = titleService;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.sidebarRightService = sidebarRightService;
        this.headerService = headerService;
        this.footerService = footerService;
        this.router = router;
        this.navigationEnd = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.titleTag = this.titleService.getTitle();
        this.subscriptions.push(this.routingService.onChange.subscribe(value => {
            if (value && value[value.length - 1] && value[value.length - 1].data) {
                const data = value[value.length - 1].data;
                this.titleService.setTitle(this.getTitle(data.title) || '');
                this.header = data.title;
                this.description = data.description;
            }
            this.changeDetectorRef.markForCheck();
        }));
        this.subscriptions.push(this.router.events.subscribe(routeEvent => {
            if (routeEvent instanceof NavigationStart) {
                this.navigationEnd = false;
            }
            if (routeEvent instanceof NavigationEnd) {
                this.navigationEnd = true;
                this.setContentMinHeight();
            }
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftElementHeight.subscribe(value => {
            this.sidebarLeftHeight = value;
            this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.layout.subscribe(value => {
            this.layout = value;
            this.setContentMinHeight();
        }));
        this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(value => {
            this.windowInnerHeight = value;
            this.setContentMinHeight();
        }));
        this.heightStyle = this.windowInnerHeight;
    }
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
    get scrollHeight() {
        return this.contentInnerElement.nativeElement.scrollHeight;
    }
    getTitle(title) {
        return title ? `${title} - ${this.titleTag}` : this.titleTag;
    }
    setContentMinHeight() {
        if (this.navigationEnd) {
            let heightStyle = 0;
            const headerFooterOffsetHeight = this.headerService.offsetHeight + this.footerService.offsetHeight;
            if (this.layout === 'fixed' && this.windowInnerHeight) {
                heightStyle = this.windowInnerHeight - this.footerService.offsetHeight;
            }
            else if (this.windowInnerHeight && this.sidebarLeftHeight) {
                const sidebarRight = this.sidebarRightService.scrollHeight ?
                    this.sidebarRightService.scrollHeight - this.headerService.offsetHeight : 0;
                heightStyle = Math.max(this.windowInnerHeight - headerFooterOffsetHeight, this.sidebarLeftHeight - this.headerService.offsetHeight, sidebarRight);
            }
            if (heightStyle && heightStyle !== this.heightStyle) {
                if (this.scrollHeight > heightStyle) {
                    heightStyle = 0;
                }
                this.heightStyle = heightStyle;
                this.changeDetectorRef.detectChanges();
            }
        }
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-content',
                template: "<div class=\"content-wrapper\" [style.min-height.px]=\"heightStyle\">\n  <div #contentInnerElement class=\"content-inner\">\n    <ng-content select=\"[mk-layout-content-before-header]\"></ng-content>\n    <section *ngIf=\"header || description\" class=\"content-header\">\n      <h1>\n        {{header}}\n        <small *ngIf=\"description\">{{description}}</small>\n      </h1>\n      <mk-breadcrumbs></mk-breadcrumbs>\n    </section>\n    <ng-content select=\"[mk-layout-content-after-header]\"></ng-content>\n    <section class=\"content\">\n      <ng-content></ng-content>\n    </section>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block}.content-wrapper{position:relative}"]
            },] }
];
ContentComponent.ctorParameters = () => [
    { type: LayoutStore },
    { type: RoutingService },
    { type: Title },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: SidebarRightService },
    { type: HeaderService },
    { type: FooterService },
    { type: Router }
];
ContentComponent.propDecorators = {
    contentInnerElement: [{ type: ViewChild, args: ['contentInnerElement', { static: true },] }]
};

class ContentModule {
}
ContentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, BreadcrumbsModule],
                exports: [ContentComponent],
                declarations: [ContentComponent]
            },] }
];

class FooterLeftComponent {
}
FooterLeftComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-footer-left',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
FooterLeftComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class FooterRightComponent {
}
FooterRightComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-footer-right',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
FooterRightComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class FooterComponent {
    constructor(elementRef, footerService) {
        this.elementRef = elementRef;
        this.footerService = footerService;
    }
    ngOnInit() {
        this.footerService.elementRef = this.elementRef;
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-footer',
                template: "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <ng-template *ngIf=\"footerRightComponent\" [ngTemplateOutlet]=\"footerRightComponent.templateRef\"></ng-template>\n  </div>\n  <ng-template *ngIf=\"footerLeftComponent\" [ngTemplateOutlet]=\"footerLeftComponent.templateRef\"></ng-template>\n</footer>\n",
                styles: [":host{display:block}"]
            },] }
];
FooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: FooterService }
];
FooterComponent.propDecorators = {
    footerLeftComponent: [{ type: ContentChild, args: [FooterLeftComponent,] }],
    footerRightComponent: [{ type: ContentChild, args: [FooterRightComponent,] }]
};

class FooterModule {
}
FooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [FooterComponent, FooterLeftComponent, FooterRightComponent],
                declarations: [FooterComponent, FooterLeftComponent, FooterRightComponent]
            },] }
];

class HeaderLogoComponent {
}
HeaderLogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-header-logo',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
HeaderLogoComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class HeaderLogoMiniComponent {
}
HeaderLogoMiniComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-header-logo-mini',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
HeaderLogoMiniComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class HeaderComponent {
    constructor(layoutStore, ngZone, renderer2, elementRef, headerService) {
        this.layoutStore = layoutStore;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
        this.headerService = headerService;
        this.isSidebarLeftToggle = true;
        this.isSidebarRightToggle = true;
        this.logoLink = '/';
        this.listeners = [];
        this.subscriptions = [];
    }
    ngAfterViewInit() {
        this.headerService.elementRef = this.headerElement;
        if (this.sidebarLeftToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(value => {
                this.isSidebarLeftCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(() => {
                var _a;
                this.listeners.push(this.renderer2.listen((_a = this.sidebarLeftToggleElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'click', event => {
                    event.preventDefault();
                    this.layoutStore.sidebarLeftCollapsed(!this.isSidebarLeftCollapsed);
                }));
            });
        }
        if (this.sidebarRightToggleElement) {
            this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(value => {
                this.isSidebarRightCollapsed = value;
            }));
            this.ngZone.runOutsideAngular(() => {
                var _a;
                this.listeners.push(this.renderer2.listen((_a = this.sidebarRightToggleElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'click', event => {
                    event.preventDefault();
                    this.layoutStore.sidebarRightCollapsed(!this.isSidebarRightCollapsed);
                }));
            });
        }
    }
    ngOnDestroy() {
        this.listeners = removeListeners(this.listeners);
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-header',
                template: "<header #headerElement class=\"main-header\">\n  <a [routerLink]=\"logoLink\" class=\"logo\">\n    <span class=\"logo-mini\" *ngIf=\"headerLogoMiniComponent\"><ng-template [ngTemplateOutlet]=\"headerLogoMiniComponent.templateRef\"></ng-template></span>\n    <span class=\"logo-lg\" *ngIf=\"headerLogoComponent\"><ng-template [ngTemplateOutlet]=\"headerLogoComponent.templateRef\"></ng-template></span>\n  </a>\n  <nav class=\"navbar navbar-static-top\">\n    <a *ngIf=\"isSidebarLeftToggle\" #sidebarLeftToggleElement href=\"#\" class=\"sidebar-toggle {{sidebarLeftToggleIconClasses ? 'sidebar-toggle-custom-icon' : ''}}\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <ng-container *ngIf=\"sidebarLeftToggleIconClasses\">\n        <i [class]=\"sidebarLeftToggleIconClasses\"></i>\n      </ng-container>\n    </a>\n    <div *ngIf=\"isSidebarRightToggle\" class=\"sidebar-right-toggle\">\n      <a #sidebarRightToggleElement href=\"#\">\n        <i [class]=\"sidebarRightToggleIconClasses ? sidebarRightToggleIconClasses : 'fa fa-gears'\"></i>\n      </a>\n    </div>\n    <ng-content></ng-content>\n  </nav>\n</header>\n",
                styles: [":host{display:block}.sidebar-right-toggle{float:right}.sidebar-right-toggle a{cursor:pointer;display:block;line-height:20px;padding:15px}.sidebar-toggle-custom-icon:before{content:\"\"}"]
            },] }
];
HeaderComponent.ctorParameters = () => [
    { type: LayoutStore },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef },
    { type: HeaderService }
];
HeaderComponent.propDecorators = {
    isSidebarLeftToggle: [{ type: Input }],
    sidebarLeftToggleIconClasses: [{ type: Input }],
    isSidebarRightToggle: [{ type: Input }],
    sidebarRightToggleIconClasses: [{ type: Input }],
    logoLink: [{ type: Input }],
    headerLogoComponent: [{ type: ContentChild, args: [HeaderLogoComponent,] }],
    headerLogoMiniComponent: [{ type: ContentChild, args: [HeaderLogoMiniComponent,] }],
    headerElement: [{ type: ViewChild, args: ['headerElement', { static: true },] }],
    sidebarLeftToggleElement: [{ type: ViewChild, args: ['sidebarLeftToggleElement',] }],
    sidebarRightToggleElement: [{ type: ViewChild, args: ['sidebarRightToggleElement',] }]
};

class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent],
                declarations: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent]
            },] }
];

class CollapseAnimationDirective {
    constructor(elementRef, ngZone, renderer2) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.collapseAnimationDuration = 350;
        // tslint:disable-next-line:no-output-rename
        this.startEventEmitter = new EventEmitter();
        // tslint:disable-next-line:no-output-rename
        this.doneEventEmitter = new EventEmitter();
        this.firstStart = true;
        this.isCollapsed = false;
        this.lastIsCollapsed = false;
        this.transitioning = false;
    }
    set _isCollapsed(value) {
        this.lastIsCollapsed = this.isCollapsed;
        this.isCollapsed = value;
        if (!this.firstStart) {
            this.emit('start');
            if (value) {
                this.collapse();
            }
            else if (!value) {
                this.unCollapse();
            }
        }
    }
    ngOnInit() {
        if (this.collapseAnimationDuration && this.collapseAnimationDuration !== 350) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-duration', `${this.collapseAnimationDuration}ms`);
        }
        if (this.collapseAnimationTiming) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-timing-function', this.collapseAnimationTiming);
        }
    }
    ngAfterContentInit() {
        this.emit('start');
        if (this.isCollapsed) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
        }
        this.emit('done');
        this.firstStart = false;
        this.subscriptions();
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener();
        }
    }
    subscriptions() {
        this.ngZone.runOutsideAngular(() => {
            this.listener = this.renderer2.listen(this.elementRef.nativeElement, 'transitionend', () => {
                if (!this.isCollapsed) {
                    this.renderer2.removeClass(this.elementRef.nativeElement, 'un-collapse');
                    this.renderer2.removeClass(this.elementRef.nativeElement, 'collapsing');
                }
                else {
                    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
                }
                requestAnimationFrame(() => {
                    this.renderer2.removeStyle(this.elementRef.nativeElement, 'height');
                    this.emit('done');
                    this.transitioning = false;
                });
            });
        });
    }
    unCollapse() {
        this.transitioning = true;
        this.renderer2.addClass(this.elementRef.nativeElement, 'un-collapse');
        this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `${this.elementRef.nativeElement.scrollHeight}px`);
    }
    collapse() {
        requestAnimationFrame(() => {
            if (!this.transitioning) {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `${this.elementRef.nativeElement.offsetHeight}px`);
                this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
            }
            this.transitioning = true;
            requestAnimationFrame(() => {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `0px`);
            });
        });
    }
    emit(phaseName) {
        const event = {
            element: this.elementRef.nativeElement,
            fromState: this.lastIsCollapsed === undefined ? 'void' : this.lastIsCollapsed ? '1' : '0',
            phaseName,
            toState: this.isCollapsed === undefined ? 'void' : this.isCollapsed ? '1' : '0',
            totalTime: this.collapseAnimationDuration,
            triggerName: 'mkCollapseAnimation'
        };
        if (phaseName === 'done') {
            this.doneEventEmitter.emit(event);
        }
        else if (phaseName === 'start') {
            this.startEventEmitter.emit(event);
        }
    }
}
CollapseAnimationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkCollapseAnimation]'
            },] }
];
CollapseAnimationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
CollapseAnimationDirective.propDecorators = {
    collapseAnimationDuration: [{ type: Input }],
    collapseAnimationTiming: [{ type: Input }],
    _isCollapsed: [{ type: Input, args: ['mkCollapseAnimation',] }],
    startEventEmitter: [{ type: Output, args: ['mkCollapseAnimation.start',] }],
    doneEventEmitter: [{ type: Output, args: ['mkCollapseAnimation.done',] }]
};

class AnimationsModule {
}
AnimationsModule.decorators = [
    { type: NgModule, args: [{
                exports: [CollapseAnimationDirective],
                declarations: [CollapseAnimationDirective]
            },] }
];

class SidebarLeftToggleDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
SidebarLeftToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkMenuToggle]'
            },] }
];
SidebarLeftToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
SidebarLeftToggleDirective.propDecorators = {
    item: [{ type: Input, args: ['mkMenuToggle',] }]
};

class WrapperService {
}
WrapperService.decorators = [
    { type: Injectable }
];

class SidebarLeftComponent {
    constructor(changeDetectorRef, layoutStore, ngZone, renderer2, router, routingService, wrapperService, headerService) {
        this.changeDetectorRef = changeDetectorRef;
        this.layoutStore = layoutStore;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.router = router;
        this.routingService = routingService;
        this.wrapperService = wrapperService;
        this.headerService = headerService;
        this.isSidebarLeftMouseOver = false;
        this.collapsedItems = [];
        this.activatedItems = [];
        this.toggleListeners = [];
        this.listeners = [];
        this.itemsByIds = {};
        this.runningAnimations = 0;
        this.subscriptions = [];
        this.initialized = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(value => {
            this.menu = value;
            this.monkeyPatchMenu(this.menu);
            if (this.initialized) {
                this.setMenuListeners(this.activeUrl);
                this.setSidebarListeners();
                this.setMenuTogglesListeners();
            }
            this.initialized = true;
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftMenuActiveUrl.subscribe(value => {
            this.activeUrl = value;
            this.setMenuListeners(value);
        }));
        this.subscriptions.push(this.routingService.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.activeUrl = event.url;
                this.setMenuListeners(event.url);
            }
        }));
        this.setSidebarListeners();
    }
    ngAfterViewInit() {
        this.setMenuTogglesListeners();
        this.checkMenuWithoutChildren();
    }
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
        this.listeners = removeListeners(this.listeners);
        this.toggleListeners = removeListeners(this.toggleListeners);
    }
    setSidebarListeners() {
        this.subscriptions.push(this.layoutStore.layout.subscribe((value) => {
            this.layout = value;
            this.setSidebarHeight();
        }));
        this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(value => {
            this.windowInnerHeight = value;
            this.setSidebarHeight();
        }));
        this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(() => {
            this.changeDetectorRef.detectChanges();
        }));
        this.ngZone.runOutsideAngular(() => {
            this.listeners.push(this.renderer2.listen(this.sidebarElement.nativeElement, 'mouseenter', () => {
                this.layoutStore.sidebarLeftMouseOver(true);
            }));
            this.listeners.push(this.renderer2.listen(this.sidebarElement.nativeElement, 'mouseleave', () => {
                this.layoutStore.sidebarLeftMouseOver(false);
            }));
        });
        this.subscriptions.push(this.layoutStore.windowInnerWidth.subscribe(value => {
            this.windowInnerWidth = value;
            if (!this.isSidebarLeftCollapsed && this.windowInnerWidth && this.windowInnerWidth <= 767) {
                this.layoutStore.sidebarLeftCollapsed(true);
            }
            else if (this.windowInnerWidth && this.windowInnerWidth > 767 && this.isSidebarLeftCollapsed && !this.isSidebarLeftExpandOnOver) {
                this.layoutStore.sidebarLeftCollapsed(false);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftMouseOver.subscribe((value) => {
            this.isSidebarLeftMouseOver = value;
            if (this.isSidebarLeftExpandOnOver) {
                this.layoutStore.sidebarLeftCollapsed(!value);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftExpandOnOver.subscribe((value) => {
            this.isSidebarLeftExpandOnOver = value;
            if (this.windowInnerWidth && this.windowInnerWidth > 767 && this.isSidebarLeftCollapsed !== undefined) {
                this.layoutStore.sidebarLeftCollapsed(value);
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe((value) => {
            this.isSidebarLeftCollapsed = value;
            if (this.windowInnerWidth && this.windowInnerWidth <= 767) {
                if (value) {
                    this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                }
                else {
                    this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                }
            }
            else {
                if (this.isSidebarLeftExpandOnOver && !this.isSidebarLeftMouseOver && !value) {
                    this.layoutStore.sidebarLeftExpandOnOver(false);
                }
                if (value) {
                    this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                    if (this.isSidebarLeftExpandOnOver) {
                        this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                    }
                }
                else {
                    this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                    if (this.isSidebarLeftExpandOnOver) {
                        this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                    }
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarLeftMini.subscribe((value) => {
            if (value) {
                this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
            }
            else {
                this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
            }
        }));
    }
    getIconClasses(item) {
        if (item.iconClasses || item.iconClasses === '') {
            return item.iconClasses;
        }
        else {
            return 'fa fa-circle-o';
        }
    }
    visibilityStateStart(event) {
        this.runningAnimations++;
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.runningAnimations--;
                if (!this.runningAnimations) {
                    this.layoutStore.setSidebarLeftElementHeight(this.sidebarElement.nativeElement.offsetHeight);
                }
            }, event.totalTime);
        });
    }
    setMenuListeners(url) {
        if (url === '/') {
            this.activeItems(url);
            this.changeDetectorRef.detectChanges();
        }
        else {
            const primaryOutlet = this.router.parseUrl(url).root.children[PRIMARY_OUTLET];
            if (primaryOutlet) {
                this.activeItems(primaryOutlet.toString());
                this.changeDetectorRef.detectChanges();
            }
        }
        if (this.windowInnerWidth && this.windowInnerWidth <= 767 || this.isSidebarLeftExpandOnOver) {
            this.layoutStore.sidebarLeftCollapsed(true);
        }
    }
    uncollapseItemParents(item, isActive = false) {
        if (isActive) {
            item.isActive = true;
            this.activatedItems.push(item);
        }
        item.isCollapsed = false;
        this.collapsedItems.push(item);
        if (item.parentId) {
            this.uncollapseItemParents(this.itemsByIds[item.parentId], isActive);
        }
    }
    findItemsByUrl(url, items, returnItems = []) {
        items.forEach((item) => {
            if (item.route === url) {
                returnItems.push(item);
            }
            else if (item.children) {
                this.findItemsByUrl(url, item.children, returnItems);
            }
        });
        return returnItems;
    }
    activeItems(url) {
        if (!this.menu) {
            return;
        }
        this.activatedItems.forEach((item) => {
            item.isActive = false;
        });
        this.activatedItems = [];
        this.collapsedItems.forEach((item) => {
            item.isActive = false;
            item.isCollapsed = true;
        });
        this.collapsedItems = [];
        const items = this.findItemsByUrl(url, this.menu);
        items.forEach(item => {
            item.isActive = true;
            this.uncollapseItemParents(item, true);
            this.activatedItems.push(item);
        });
    }
    monkeyPatchMenu(items, parentId) {
        items.forEach((item, index) => {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
            if (parentId) {
                item.parentId = parentId;
            }
            if (!item.disableCollapse) {
                item.isCollapsed = true;
            }
            item.isActive = false;
            if (parentId || item.children) {
                this.itemsByIds[item.id] = item;
            }
            if (item.children) {
                this.monkeyPatchMenu(item.children, item.id);
            }
        });
    }
    setMenuTogglesListeners() {
        this.toggleListeners = removeListeners(this.toggleListeners);
        this.ngZone.runOutsideAngular(() => {
            this.sidebarLeftToggleDirectives.forEach((menuToggle) => {
                this.toggleListeners.push(this.renderer2.listen(menuToggle.elementRef.nativeElement, 'click', (event) => {
                    event.preventDefault();
                    if (menuToggle.item.isCollapsed) {
                        this.collapsedItems.forEach((item) => {
                            if (!item.disableCollapse) {
                                item.isCollapsed = true;
                            }
                        });
                        this.collapsedItems = [];
                        this.uncollapseItemParents(menuToggle.item);
                    }
                    else {
                        menuToggle.item.isCollapsed = !menuToggle.item.isCollapsed;
                    }
                    this.changeDetectorRef.detectChanges();
                }));
            });
        });
    }
    checkMenuWithoutChildren() {
        if (!this.menu) {
            return;
        }
        let menuHaveChildren;
        this.menu.forEach(item => {
            if (item.children) {
                menuHaveChildren = true;
            }
        });
        if (!menuHaveChildren) {
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.layoutStore.setSidebarLeftElementHeight(this.sidebarElement.nativeElement.offsetHeight);
                });
            });
        }
    }
    setSidebarHeight() {
        if (this.layout === 'fixed' && this.windowInnerHeight) {
            const height = this.windowInnerHeight - this.headerService.offsetHeight;
            if (height && height !== this.sidebarHeight) {
                this.sidebarHeight = height;
                this.sidebarOverflow = 'auto';
                this.changeDetectorRef.detectChanges();
            }
        }
        else if (this.sidebarHeight) {
            this.sidebarOverflow = this.sidebarHeight = undefined;
            this.changeDetectorRef.detectChanges();
        }
    }
}
SidebarLeftComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-sidebar-left',
                template: "<aside class=\"main-sidebar\">\n  <section class=\"sidebar\" #sidebarElement [style.height.px]=\"sidebarHeight\" [style.overflow]=\"sidebarOverflow\">\n    <ng-content></ng-content>\n  \t<ul class=\"sidebar-menu\">\n      <ng-container *ngFor=\"let item of menu\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n  \t</ul>\n  </section>\n</aside>\n\n<ng-template #sidebarInner let-item=\"item\">\n  <li [class.active]=\"item.isActive\" [class.header]=\"item.separator\" [class.menu-open]=\"!item.isCollapsed\">\n    <span *ngIf=\"item.separator\">{{item.label}}</span>\n    <a *ngIf=\"!item.separator && item.route\" [routerLink]=\"item.route\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <a *ngIf=\"!item.separator && !item.route\" href=\"#\" [mkMenuToggle]=\"item\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <ul *ngIf=\"item.children\" [mkCollapseAnimation]=\"item.isCollapsed\" (mkCollapseAnimation.start)=\"visibilityStateStart($event)\" class=\"treeview-menu\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n    </ul>\n  </li>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".treeview-menu.collapse{display:none}.treeview-menu,.treeview-menu.collapse.in{display:block}"]
            },] }
];
SidebarLeftComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: LayoutStore },
    { type: NgZone },
    { type: Renderer2 },
    { type: Router },
    { type: RoutingService },
    { type: WrapperService },
    { type: HeaderService }
];
SidebarLeftComponent.propDecorators = {
    sidebarElement: [{ type: ViewChild, args: ['sidebarElement', { static: true },] }],
    sidebarLeftToggleDirectives: [{ type: ViewChildren, args: [SidebarLeftToggleDirective,] }]
};

class SidebarLeftModule {
}
SidebarLeftModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, AnimationsModule],
                exports: [SidebarLeftComponent],
                declarations: [SidebarLeftToggleDirective, SidebarLeftComponent]
            },] }
];

class SidebarRightComponent {
    constructor(elementRef, renderer2, layoutStore, sidebarRightService, wrapperService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.layoutStore = layoutStore;
        this.sidebarRightService = sidebarRightService;
        this.wrapperService = wrapperService;
        this.listeners = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.renderer2.addClass(this.elementRef.nativeElement, 'control-sidebar');
        this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(value => {
            this.isSidebarRightCollapsed = value;
            if (!value) {
                this.renderer2.addClass(this.elementRef.nativeElement, 'control-sidebar-open');
                if (!this.isSidebarRightOverContent) {
                    this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'control-sidebar-open');
                if (!this.isSidebarRightOverContent) {
                    this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.isSidebarRightOverContent.subscribe(value => {
            this.isSidebarRightOverContent = value;
            if (!this.isSidebarRightCollapsed) {
                if (value) {
                    this.renderer2.removeClass(this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
                else {
                    this.renderer2.addClass(this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                }
            }
        }));
        this.subscriptions.push(this.layoutStore.sidebarRightSkin.subscribe((value) => {
            if (this.skin !== value) {
                this.renderer2.removeClass(this.elementRef.nativeElement, `control-sidebar-${this.skin}`);
            }
            this.skin = value;
            this.renderer2.addClass(this.elementRef.nativeElement, `control-sidebar-${value}`);
        }));
    }
    ngAfterViewInit() {
        this.sidebarRightService.elementRef = this.sidebarContentElement;
    }
    ngOnDestroy() {
        this.listeners = removeListeners(this.listeners);
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
SidebarRightComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-sidebar-right',
                template: "<div #sidebarContentElement class=\"control-sidebar-content\">\n  <ng-content></ng-content>\n</div>\n<div class=\"control-sidebar-bg\"></div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;height:100%}.control-sidebar-bg{z-index:-1}/deep/ .tab-content{padding:10px 15px}"]
            },] }
];
SidebarRightComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LayoutStore },
    { type: SidebarRightService },
    { type: WrapperService }
];
SidebarRightComponent.propDecorators = {
    sidebarContentElement: [{ type: ViewChild, args: ['sidebarContentElement', { static: true },] }]
};

class SidebarRightModule {
}
SidebarRightModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [SidebarRightComponent],
                declarations: [SidebarRightComponent]
            },] }
];

class WrapperComponent {
    constructor(elementRef, renderer2, layoutStore, wrapperService, ngZone) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.layoutStore = layoutStore;
        this.wrapperService = wrapperService;
        this.ngZone = ngZone;
        this.listeners = [];
        this.subscriptions = [];
    }
    ngOnInit() {
        this.layoutStore.setWindowInnerHeight(window.innerHeight);
        this.layoutStore.setWindowInnerWidth(window.innerWidth);
        this.wrapperService.wrapperElementRef = this.elementRef;
        this.ngZone.runOutsideAngular(() => {
            this.listeners.push(this.renderer2.listen('window', 'resize', throttle(() => {
                this.layoutStore.setWindowInnerHeight(window.innerHeight);
                this.layoutStore.setWindowInnerWidth(window.innerWidth);
            }, 250)));
        });
        this.subscriptions.push(this.layoutStore.layout.subscribe(value => {
            value === 'fixed' ? this.renderer2.addClass(this.elementRef.nativeElement, 'fixed') :
                this.renderer2.removeClass(this.elementRef.nativeElement, 'fixed');
            value === 'boxed' ? this.renderer2.addClass(this.elementRef.nativeElement, 'layout-boxed') :
                this.renderer2.removeClass(this.elementRef.nativeElement, 'layout-boxed');
        }));
        this.subscriptions.push(this.layoutStore.skin.subscribe(value => {
            if (this.skin && this.skin !== value) {
                this.renderer2.removeClass(this.elementRef.nativeElement, `skin-${this.skin}`);
            }
            this.skin = value;
            this.renderer2.addClass(this.elementRef.nativeElement, `skin-${this.skin}`);
        }));
    }
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
        this.listeners = removeListeners(this.listeners);
    }
}
WrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-layout-wrapper',
                template: "<div class=\"wrapper overflow\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [".wrapper.overflow{overflow:hidden}:host{display:block}:host /deep/ .sidebar-right-toggle>a{color:#fff}:host.sidebar-mini.sidebar-collapse /deep/ .treeview-menu.collapsing{height:auto!important}:host /deep/ .sidebar-right-toggle>a:hover{background:rgba(0,0,0,.1)}:host.skin-black-light /deep/ .sidebar-right-toggle>a,:host.skin-black /deep/ .sidebar-right-toggle>a{border-right-width:0;color:#333}:host.skin-black-light /deep/ .sidebar-right-toggle>a:hover,:host.skin-black /deep/ .sidebar-right-toggle>a:hover{background-color:#fff;color:#999}:host.skin-black /deep/ .sidebar-right-toggle>a{border-left:1px solid #eee}:host.skin-black-light /deep/ .sidebar-right-toggle>a{border-left:1px solid #d2d6de}"]
            },] }
];
WrapperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LayoutStore },
    { type: WrapperService },
    { type: NgZone }
];

class WrapperModule {
}
WrapperModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [WrapperComponent],
                declarations: [WrapperComponent]
            },] }
];

class LayoutService {
    constructor(router) {
        this.router = router;
        this.isCustomLayout = new BehaviorSubject(false);
        this.customLayout = false;
        this.init();
    }
    init() {
        this.router.events.subscribe(event => {
            if (event instanceof ActivationStart) {
                this.customLayout = event.snapshot.data.customLayout;
                this.isCustomLayout.next(this.customLayout);
            }
        });
    }
}
LayoutService.decorators = [
    { type: Injectable }
];
LayoutService.ctorParameters = () => [
    { type: Router }
];

const LayoutConfigToken = new InjectionToken('layoutConfig');
function layoutStoreFactory(layoutConfig) {
    return new LayoutStore(layoutConfig);
}
function layoutProvider(layoutConfig) {
    return [{
            provide: LayoutStore,
            useFactory: layoutStoreFactory,
            deps: [LayoutConfigToken]
        }, {
            provide: LayoutConfigToken,
            useValue: layoutConfig
        }
    ];
}

class LayoutModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }
    static forRoot(layoutConfig) {
        return {
            ngModule: LayoutModule,
            providers: [...layoutProvider(layoutConfig), LayoutService]
        };
    }
}
LayoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule],
                exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
                providers: [RoutingService, WrapperService, SidebarRightService, HeaderService, FooterService]
            },] }
];
LayoutModule.ctorParameters = () => [
    { type: LayoutModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

const colorsAliases = [
    'default',
    'primary',
    'danger',
    'warning',
    'info',
    'success'
];
const colors = {
    aqua: '#00c0ef',
    'aqua-active': '#00a7d0',
    black: '#111111',
    'black-active': '#000000',
    blue: '#0073b7',
    'blue-active': '#005384',
    fuchsia: '#f012be',
    'fuchsia-active': '#db0ead',
    green: '#00a65a',
    'green-active': '#008d4c',
    gray: '#d2d6de',
    'gray-active': '#b5bbc8',
    'gray-light': '#f7f7f7',
    'light-blue': '#3c8dbc',
    'light-blue-active': '#357ca5',
    lime: '#01ff70',
    'lime-active': '#00e765',
    maroon: '#d81b60',
    'maroon-active': '#ca195a',
    navy: '#001f3f',
    'navy-active': '#001a35',
    olive: '#3d9970',
    'olive-active': '#368763',
    orange: '#ff851b',
    'orange-active': '#ff7701',
    purple: '#605ca8',
    'purple-active': '#555299',
    red: '#dd4b39',
    'red-active': '#d33724',
    teal: '#39cccc',
    'teal-active': '#30bbbb',
    yellow: '#f39c12',
    'yellow-active': '#db8b0b',
};

class ColorService {
    constructor(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
    }
    setBackgroundColor(color, condition, property, prefix) {
        if (color && condition) {
            this.resetBackgroundColor();
            if (colors.hasOwnProperty(color)) {
                const knownColor = colors[color];
                this.renderer2.addClass(this.elementRef.nativeElement, 'bg-color');
                this.currentBackgroundStyle = { property, color: knownColor };
                this.renderer2.setStyle(this.elementRef.nativeElement, property, knownColor);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'bg-color');
                if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
                    this.currentBackgroundStyle = { property, color };
                    this.renderer2.setStyle(this.elementRef.nativeElement, property, color);
                }
                else if (colorsAliases.indexOf(color) !== -1) {
                    this.currentBackgroundClass = prefix ? `${prefix}-${color}` : color;
                    this.renderer2.addClass(this.elementRef.nativeElement, this.currentBackgroundClass);
                }
            }
        }
    }
    resetBackgroundColor() {
        if (this.currentBackgroundStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, this.currentBackgroundStyle.property, this.currentBackgroundStyle.color);
        }
        else if (this.currentBackgroundClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentBackgroundClass);
        }
    }
    setFontColor(color) {
        this.resetFontColor();
        if (color) {
            if (color.startsWith('#') || color.startsWith('rgb')) {
                this.currentFontStyle = color;
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
            }
            else {
                this.currentFontClass = `text-${color}`;
                this.renderer2.addClass(this.elementRef.nativeElement, this.currentFontClass);
            }
        }
    }
    resetFontColor() {
        if (this.currentFontStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'color', this.currentFontStyle);
        }
        else if (this.currentFontClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentFontClass);
        }
    }
}
ColorService.decorators = [
    { type: Injectable }
];
ColorService.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

class BackgroundColorDirective {
    constructor(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
        // TODO: ADD @Required decorator
        this.condition = true;
    }
    set setPrefix(prefix) {
        this.prefix = prefix;
        this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
    }
    set setColor(color) {
        if (color) {
            this.color = color;
            this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
        }
    }
}
BackgroundColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkColor]',
                providers: [ColorService]
            },] }
];
BackgroundColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ColorService }
];
BackgroundColorDirective.propDecorators = {
    condition: [{ type: Input, args: ['mkColorCondition',] }],
    setPrefix: [{ type: Input, args: ['mkColorPrefix',] }],
    property: [{ type: Input, args: ['mkColorProperty',] }],
    setColor: [{ type: Input, args: ['mkColor',] }]
};
class ColorDirective {
    constructor(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
    }
    set color(color) {
        this.colorService.setFontColor(color);
    }
}
ColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkFontColor]',
                providers: [ColorService]
            },] }
];
ColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ColorService }
];
ColorDirective.propDecorators = {
    color: [{ type: Input, args: ['mkFontColor',] }]
};

class ColorModule {
}
ColorModule.decorators = [
    { type: NgModule, args: [{
                exports: [BackgroundColorDirective, ColorDirective],
                declarations: [BackgroundColorDirective, ColorDirective]
            },] }
];

class AccordionToggleDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
AccordionToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkAccordionToggle]'
            },] }
];
AccordionToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
AccordionToggleDirective.propDecorators = {
    accordionComponent: [{ type: Input, args: ['mkAccordionToggle',] }]
};

class AccordionHeaderComponent {
}
AccordionHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class AccordionContentComponent {
}
AccordionContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionContentComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class AccordionComponent {
    constructor() {
        this.contentStyleClass = 'box-body';
        this.headerStyleClass = 'box-header with-border';
        this.isCollapsing = false;
        this.isCollapsed = false;
        this.index = 0;
    }
    ngOnInit() {
        this.headerStyleColor = this.headerColor;
    }
    ngAfterViewInit() {
        if (!this.header && !this.accordionHeaderComponent) {
            throw new Error('Attribute "header" OR Component "mk-accordion-header" is required for component "mk-accordion"');
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionComponent.propDecorators = {
    borderColor: [{ type: Input }],
    contentColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerColorHover: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    accordionHeaderComponent: [{ type: ContentChild, args: [AccordionHeaderComponent,] }],
    accordionContentComponent: [{ type: ContentChild, args: [AccordionContentComponent,] }],
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class AccordionGroupComponent {
    constructor(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.isMultiple = false;
        this.styleClass = 'box-group';
        this.collapseStart = new EventEmitter();
        this.collapseDone = new EventEmitter();
        this.activeIndex = [0];
        this.listeners = [];
        // @TODO change types for subscriptions to all files
        this.subscriptions = [];
    }
    set _activeIndex(value) {
        this.activeIndex = value instanceof Array ? value : [value];
    }
    static headerMouseLeave(accordion) {
        accordion.headerStyleColor = accordion.headerColor;
    }
    static headerMouseEnter(accordion) {
        if (accordion.headerColorHover) {
            accordion.headerStyleColor = accordion.headerColorHover;
        }
    }
    ngAfterContentInit() {
        this.setAccordionsIndex();
        this.updateAccordionIsCollapsed();
        this.subscriptions.push(this.accordionComponents.changes.subscribe(() => {
            this.setAccordionsIndex();
        }));
    }
    ngAfterViewInit() {
        this.setAccordionsToggle();
        this.subscriptions.push(this.accordionToggleDirectives.changes.subscribe(() => {
            this.setAccordionsToggle();
        }));
    }
    ngOnChanges(changes) {
        if (!changes._activeIndex.firstChange) {
            this.updateAccordionIsCollapsed();
        }
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
        removeSubscriptions(this.subscriptions);
    }
    toggleAccordion(event, toggleIndex) {
        event.preventDefault();
        const indexOf = this.activeIndex.indexOf(toggleIndex);
        if (indexOf === -1) {
            if (this.isMultiple) {
                this.activeIndex.push(toggleIndex);
            }
            else {
                this.activeIndex = [toggleIndex];
            }
        }
        else {
            if (this.isMultiple) {
                this.activeIndex.splice(indexOf, 1);
            }
            else {
                this.activeIndex = [];
            }
        }
        this.updateAccordionIsCollapsed();
    }
    onCollapseStart(event, accordion) {
        accordion.isCollapsing = true;
        this.collapseStart.emit({ animationEvent: event, index: accordion.index });
    }
    onCollapseDone(event, accordion) {
        accordion.isCollapsing = false;
        this.collapseDone.emit({ animationEvent: event, index: accordion.index });
    }
    setAccordionsIndex() {
        this.accordionComponents.forEach((accordion, index) => {
            accordion.index = index;
        });
    }
    setAccordionsToggle() {
        this.listeners = removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(() => {
            this.accordionToggleDirectives.forEach((accordionToggle) => {
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'click', (event) => {
                    this.toggleAccordion(event, accordionToggle.accordionComponent.index);
                    this.changeDetectorRef.detectChanges();
                }));
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseenter', () => {
                    AccordionGroupComponent.headerMouseEnter(accordionToggle.accordionComponent);
                    this.changeDetectorRef.detectChanges();
                }));
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseleave', () => {
                    AccordionGroupComponent.headerMouseLeave(accordionToggle.accordionComponent);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        });
    }
    updateAccordionIsCollapsed() {
        this.accordionComponents.forEach((accordion, index) => {
            accordion.isCollapsed = this.activeIndex.indexOf(index) === -1;
        });
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-group',
                template: "<div [ngClass]=\"styleClass\">\n  <div *ngFor=\"let accordion of accordionComponents\" class=\"panel box\" [mkColor]=\"accordion.borderColor\" mkColorProperty=\"border-top-color\" mkColorPrefix=\"box\">\n    <div [ngClass]=\"accordion.headerStyleClass\" [class.no-border]=\"accordion.isCollapsed && !accordion.isCollapsing\">\n      <h4 class=\"box-title\">\n        <a [mkAccordionToggle]=\"accordion\" href=\"#\" [mkFontColor]=\"accordion.headerStyleColor\" [class.collapsed]=\"accordion.isCollapsed\">\n          {{accordion.header}}\n          <ng-template *ngIf=\"!accordion.header && accordion.accordionHeaderComponent\" [ngTemplateOutlet]=\"accordion.accordionHeaderComponent.templateRef\"></ng-template>\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\" [mkCollapseAnimation]=\"accordion.isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event, accordion)\" (mkCollapseAnimation.done)=\"onCollapseDone($event, accordion)\">\n      <div [ngClass]=\"accordion.contentStyleClass\" [mkFontColor]=\"accordion.contentColor\">\n        <ng-template *ngIf=\"!accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.templateRef\"></ng-template>\n        <ng-template *ngIf=\"accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.accordionContentComponent.templateRef\"></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
AccordionGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
AccordionGroupComponent.propDecorators = {
    _activeIndex: [{ type: Input, args: ['activeIndex',] }],
    isMultiple: [{ type: Input }],
    styleClass: [{ type: Input }],
    collapseStart: [{ type: Output }],
    collapseDone: [{ type: Output }],
    accordionComponents: [{ type: ContentChildren, args: [AccordionComponent,] }],
    accordionToggleDirectives: [{ type: ViewChildren, args: [AccordionToggleDirective,] }]
};

class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [AccordionHeaderComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent],
                declarations: [AccordionToggleDirective, AccordionHeaderComponent,
                    AccordionContentComponent, AccordionComponent, AccordionGroupComponent]
            },] }
];

class AlertComponent {
    constructor(changeDetectorRef, ngZone, renderer2, viewContainerRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.viewContainerRef = viewContainerRef;
        this.backgroundColor = 'danger';
        this.styleClass = '';
        this.collapseStart = new EventEmitter();
        this.collapseDone = new EventEmitter();
        this.dismissibleClass = 'alert-dismissible';
        this.isDismissible = true;
        this.remove = false;
        this.removed = false;
        this.type = 'alert';
        this.listeners = [];
    }
    set callout(value) {
        this.type = value ? 'callout' : 'alert';
    }
    set _isDismissible(value) {
        this.isDismissible = value;
        if (value) {
            this.dismissibleClass = `${this.type}-dismissible`;
        }
        else {
            this.dismissibleClass = '';
        }
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            if (this.dismissOnTimeout) {
                setTimeout(() => {
                    if (!this.changeDetectorRef.destroyed) {
                        this.remove = true;
                        this.changeDetectorRef.detectChanges();
                    }
                }, this.dismissOnTimeout);
            }
            if (this.removeButtonElement) {
                this.listeners.push(this.renderer2.listen(this.removeButtonElement.nativeElement, 'click', () => {
                    this.remove = true;
                    this.changeDetectorRef.detectChanges();
                }));
            }
        });
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
    }
    onCollapseStart(event) {
        this.collapseStart.emit(event);
    }
    onCollapseDone(event) {
        if (event.toState === '1') {
            this.listeners = removeListeners(this.listeners);
            this.removed = true;
            this.viewContainerRef.clear();
            this.changeDetectorRef.detectChanges();
        }
        this.collapseDone.emit(event);
    }
}
AlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-alert',
                template: "<div *ngIf=\"!removed\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n  <div [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\" [mkColorPrefix]=\"type\" [mkFontColor]=\"color\" [ngClass]=\"[styleClass, dismissibleClass, type]\">\n    <button *ngIf=\"isDismissible\" type=\"button\" class=\"close\" #removeButtonElement>&times;</button>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".callout-dismissable,.callout-dismissible{padding-right:35px}.callout-dismissable .close,.callout-dismissible .close{color:inherit;position:relative;right:-21px;top:-2px}.callout .close{color:#000;filter:alpha(opacity=20);opacity:.2}.callout .icon{margin-right:10px}"]
            },] }
];
AlertComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: ViewContainerRef }
];
AlertComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    callout: [{ type: Input }],
    color: [{ type: Input }],
    dismissOnTimeout: [{ type: Input }],
    _isDismissible: [{ type: Input, args: ['isDismissible',] }],
    styleClass: [{ type: Input }],
    collapseStart: [{ type: Output }],
    collapseDone: [{ type: Output }],
    removeButtonElement: [{ type: ViewChild, args: ['removeButtonElement',] }]
};

class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [AlertComponent],
                declarations: [AlertComponent]
            },] }
];

class BoxContentDirective {
}
BoxContentDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-content'
            },] }
];
class BoxFooterDirective {
}
BoxFooterDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-footer'
            },] }
];
class BoxToolsDirective {
}
BoxToolsDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-tools'
            },] }
];
class BoxHeaderDirective {
}
BoxHeaderDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-header'
            },] }
];

class BoxComponent {
    constructor(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.boxColor = 'default';
        this.buttonsStyleClass = 'btn btn-box-tool';
        this.contentStyleClass = 'box-content-wrapper';
        this.footerStyleClass = 'box-footer';
        this.headerBorder = true;
        this.headerStyleClass = 'box-header';
        this.isCollapsable = true;
        this.isCollapsed = false;
        this.isLoading = false;
        this.isRemovable = true;
        this.isSolid = false;
        this.loadingStyleClass = 'fa fa-refresh fa-spin';
        this.styleClass = 'box';
        this.collapseDone = new EventEmitter();
        this.collapseStart = new EventEmitter();
        this.isCollapsing = false;
        this.remove = false;
        this.removed = false;
        this.listeners = [];
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            if (this.toggleButtonElement) {
                this.listeners.push(this.renderer2.listen(this.toggleButtonElement.nativeElement, 'click', () => {
                    this.isCollapsed = !this.isCollapsed;
                    this.changeDetectorRef.detectChanges();
                }));
            }
            if (this.removeButtonElement) {
                this.listeners.push(this.renderer2.listen(this.removeButtonElement.nativeElement, 'click', () => {
                    this.remove = true;
                    this.changeDetectorRef.detectChanges();
                }));
            }
        });
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
    }
    removedDone(event) {
        if (event.toState === '1') {
            this.removed = true;
        }
    }
    onCollapseStart(event) {
        if (event.fromState !== 'void') {
            this.isCollapsing = true;
            this.collapseStart.emit(event);
        }
    }
    onCollapseDone(event) {
        if (event.fromState !== 'void') {
            this.isCollapsing = false;
            this.collapseDone.emit(event);
        }
    }
}
BoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-box',
                template: "<div *ngIf=\"!removed\" [mkColor]=\"boxColor\" mkColorProperty=\"border-color\" mkColorPrefix=\"box\" [ngClass]=\"styleClass\" [class.collapsed-box]=\"isCollapsed && !isCollapsing\" [class.box-solid]=\"isSolid\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.done)=\"removedDone($event)\">\n  <div *ngIf=\"header || boxHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkColor]=\"boxColor\" [mkColorCondition]=\"isSolid\" mkColorProperty=\"background-color\" [class.with-border]=\"headerBorder\">\n    <h3 class=\"box-title\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </h3>\n    <div class=\"box-tools pull-right\">\n      <ng-content select=\"mk-box-tools\"></ng-content>\n      <button *ngIf=\"isCollapsable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #toggleButtonElement>\n        <i class=\"fa\" [ngClass]=\"{'fa-plus': isCollapsed, 'fa-minus': !isCollapsed}\"></i>\n      </button>\n      <button *ngIf=\"isRemovable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #removeButtonElement>\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n    <div class=\"box-body\">\n      <ng-container *ngIf=\"boxHeaderDirective || boxContentDirective || boxFooterDirective || boxToolsDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </div>\n    <div *ngIf=\"footer || boxFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </div>\n  </div>\n  <div *ngIf=\"isLoading\" class=\"overlay\">\n    <i [ngClass]=\"loadingStyleClass\" [mkFontColor]=\"loadingColor\"></i>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".box.collapsed-box .box-body,.box.collapsed-box .box-footer{display:inherit}.box-solid{border:1px solid}.box-body{background-color:#fff}.box.box-solid.bg-color>.box-header{color:#fff}"]
            },] }
];
BoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
BoxComponent.propDecorators = {
    boxColor: [{ type: Input }],
    buttonsStyleClass: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    contentColor: [{ type: Input }],
    footer: [{ type: Input }],
    footerColor: [{ type: Input }],
    footerStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerBorder: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    isCollapsable: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isLoading: [{ type: Input }],
    isRemovable: [{ type: Input }],
    isSolid: [{ type: Input }],
    loadingColor: [{ type: Input }],
    loadingStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    collapseDone: [{ type: Output }],
    collapseStart: [{ type: Output }],
    boxHeaderDirective: [{ type: ContentChild, args: [BoxHeaderDirective,] }],
    boxFooterDirective: [{ type: ContentChild, args: [BoxFooterDirective,] }],
    boxContentDirective: [{ type: ContentChild, args: [BoxContentDirective,] }],
    boxToolsDirective: [{ type: ContentChild, args: [BoxToolsDirective,] }],
    toggleButtonElement: [{ type: ViewChild, args: ['toggleButtonElement',] }],
    removeButtonElement: [{ type: ViewChild, args: ['removeButtonElement',] }]
};

class BoxModule {
}
BoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective],
                declarations: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective]
            },] }
];

class BoxInfoContentDirective {
}
BoxInfoContentDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-info-content'
            },] }
];
class BoxInfoFooterDirective {
}
BoxInfoFooterDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-info-footer'
            },] }
];
class BoxInfoHeaderDirective {
}
BoxInfoHeaderDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-info-header'
            },] }
];

class BoxInfoComponent {
    constructor() {
        this.contentStyleClass = 'info-box-number';
        this.footerStyleClass = 'progress-description';
        this.headerStyleClass = 'info-box-text';
        this.iconColor = '#fff';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'info-box';
    }
    ngOnInit() {
        if (!this.backgroundColor) {
            this.progressBarBg = this.iconBackgroundColor;
        }
    }
}
BoxInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-box-info',
                template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <span class=\"info-box-icon\" [mkColor]=\"iconBackgroundColor\" mkColorProperty=\"background-color\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </span>\n  <div class=\"info-box-content\">\n    <span *ngIf=\"header || boxInfoHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </span>\n    <span [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxInfoHeaderDirective || boxInfoContentDirective || boxInfoFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </span>\n    <div *ngIf=\"progressWidth\" class=\"progress\">\n      <div class=\"progress-bar\" [mkColor]=\"progressBarBg\" mkColorProperty=\"background-color\" [style.width.%]=\"progressWidth\"></div>\n    </div>\n    <span *ngIf=\"footer || boxInfoFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </span>\n  </div>\n</div>\n",
                styles: [".info-box.bg-color>.info-box-content{color:#fff}"]
            },] }
];
BoxInfoComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    contentColor: [{ type: Input }],
    footer: [{ type: Input }],
    footerColor: [{ type: Input }],
    footerStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    iconBackgroundColor: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconStyleClass: [{ type: Input }],
    progressWidth: [{ type: Input }],
    styleClass: [{ type: Input }],
    boxInfoHeaderDirective: [{ type: ContentChild, args: [BoxInfoHeaderDirective,] }],
    boxInfoFooterDirective: [{ type: ContentChild, args: [BoxInfoFooterDirective,] }],
    boxInfoContentDirective: [{ type: ContentChild, args: [BoxInfoContentDirective,] }]
};

class BoxInfoModule {
}
BoxInfoModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ColorModule],
                exports: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective],
                declarations: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective]
            },] }
];

class BoxSmallFooterDirective {
}
BoxSmallFooterDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-small-footer'
            },] }
];
class BoxSmallHeaderDirective {
}
BoxSmallHeaderDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-small-header'
            },] }
];
class BoxSmallContentDirective {
}
BoxSmallContentDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-box-small-content'
            },] }
];

class BoxSmallComponent {
    constructor() {
        this.contentStyleClass = 'small-box-content';
        this.footerStyleClass = 'small-box-footer';
        this.headerStyleClass = 'small-box-header';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'small-box';
    }
}
BoxSmallComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-box-small',
                template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <div class=\"inner\">\n    <h3 *ngIf=\"header || boxSmallHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-small-header\"></ng-content>\n    </h3>\n    <p [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxSmallHeaderDirective || boxSmallContentDirective || boxSmallFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-small-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </p>\n  </div>\n  <div *ngIf=\"iconStyleClass\" class=\"icon\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </div>\n  <span *ngIf=\"footer || boxSmallFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n    {{footer}}\n    <ng-content select=\"mk-box-small-footer\"></ng-content>\n  </span>\n</div>\n",
                styles: [".small-box.bg-color{color:#fff}/deep/ .small-box-footer:hover{cursor:pointer}/deep/ .small-box-footer a{color:hsla(0,0%,100%,.8)}/deep/ .small-box-footer:hover a{color:#fff}"]
            },] }
];
BoxSmallComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    contentColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    footer: [{ type: Input }],
    footerColor: [{ type: Input }],
    footerStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    boxSmallHeaderDirective: [{ type: ContentChild, args: [BoxSmallHeaderDirective,] }],
    boxSmallFooterDirective: [{ type: ContentChild, args: [BoxSmallFooterDirective,] }],
    boxSmallContentDirective: [{ type: ContentChild, args: [BoxSmallContentDirective,] }]
};

class BoxSmallModule {
}
BoxSmallModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ColorModule],
                exports: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective],
                declarations: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective]
            },] }
];

class DropdownToggleComponent {
}
DropdownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown-toggle',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DropdownToggleComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }],
    toggleElement: [{ type: ContentChild, args: ['toggleElement',] }]
};
class DropdownMenuComponent {
}
DropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown-menu',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class DropdownComponent {
    constructor(changeDetectorRef, elementRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.buttonStyleClass = 'btn dropdown-toggle';
        this.buttonBackgroundColor = 'default';
        this.contentStyleClass = 'dropdown-menu';
        this.isCollapsed = true;
        this.isWrapper = true;
        this.styleClass = 'dropdown';
        this.collapseStart = new EventEmitter();
        this.collapseDone = new EventEmitter();
        this.listeners = [];
    }
    ngAfterViewInit() {
        const toggleNativeElement = this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement ?
            this.dropdownToggleComponent.toggleElement.nativeElement : this.toggleElement ?
            this.toggleElement : this.defaultToggleElement ?
            this.defaultToggleElement.nativeElement : null;
        if (toggleNativeElement) {
            this.ngZone.runOutsideAngular(() => {
                this.listeners.push(this.renderer2.listen(toggleNativeElement, 'click', (event) => {
                    this.toggleDropdown(event);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        }
    }
    ngOnDestroy() {
        this.unBindDocumentClickListener();
        removeListeners(this.listeners);
    }
    toggleDropdown(event) {
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.bindDocumentClickListener();
                });
            });
        }
        else {
            this.unBindDocumentClickListener();
        }
    }
    onCollapseStart(event) {
        this.collapseStart.emit(event);
    }
    onCollapseDone(event) {
        this.collapseStart.emit(event);
    }
    bindDocumentClickListener() {
        this.ngZone.runOutsideAngular(() => {
            this.documentClickListener = this.renderer2.listen('document', 'click', () => {
                if (!this.isCollapsed) {
                    this.isCollapsed = true;
                    this.unBindDocumentClickListener();
                    this.changeDetectorRef.detectChanges();
                }
            });
        });
    }
    unBindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown, [mk-dropdown]',
                template: "<ng-template #innerTemplate>\n  <ng-container *ngIf=\"dropdownToggleComponent && dropdownToggleComponent.toggleElement; else noToggleElement\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n  <ng-template #noToggleElement>\n    <button *ngIf=\"toggleText || dropdownToggleComponent\" [mkColor]=\"buttonBackgroundColor\" mkColorProperty=\"background-color\" mkColorPrefix=\"btn\" [ngClass]=\"buttonStyleClass\" #toggleElement>\n      {{toggleText}}\n      <ng-container *ngIf=\"dropdownToggleComponent\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n    </button>\n  </ng-template>\n  <ul [ngClass]=\"contentStyleClass\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n    <ng-container *ngIf=\"dropdownMenuComponent; else noDropdownMenuComponent\" [ngTemplateOutlet]=\"dropdownMenuComponent.templateRef\"></ng-container>\n    <ng-template #noDropdownMenuComponent>\n      <ng-content></ng-content>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<div *ngIf=\"isWrapper; else noWrapper\" [ngClass]=\"styleClass\">\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</div>\n\n<ng-template #noWrapper>\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".dropdown-menu{display:block}.dropdown-menu.collapsing:not(.un-collapse){padding-bottom:0;padding-top:0;transition-property:height,padding-top,padding-bottom}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
DropdownComponent.propDecorators = {
    buttonStyleClass: [{ type: Input }],
    buttonBackgroundColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isWrapper: [{ type: Input }],
    styleClass: [{ type: Input }],
    toggleElement: [{ type: Input }],
    toggleText: [{ type: Input }],
    collapseStart: [{ type: Output }],
    collapseDone: [{ type: Output }],
    dropdownToggleComponent: [{ type: ContentChild, args: [DropdownToggleComponent,] }],
    dropdownMenuComponent: [{ type: ContentChild, args: [DropdownMenuComponent,] }],
    defaultToggleElement: [{ type: ViewChild, args: ['toggleElement',] }]
};

class DropdownModule {
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent],
                declarations: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent]
            },] }
];

class ClassService {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.currentClasses = [];
    }
    applyClasses(cssClasses) {
        if (typeof cssClasses === 'string') {
            cssClasses = cssClasses.split(' ');
        }
        // Remove only classes that are not in cssClasses
        const classesToRemove = this.currentClasses.filter(x => cssClasses.indexOf(x) === -1);
        classesToRemove.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer2.removeClass(this.elementRef.nativeElement, cssClasse);
            }
        });
        // Add only classes that are not in currentClasses
        const classesToAdd = cssClasses.filter(x => this.currentClasses.indexOf(x) === -1);
        classesToAdd.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer2.addClass(this.elementRef.nativeElement, cssClasse);
            }
        });
        // Update current classes for future updates
        this.currentClasses = [...cssClasses];
    }
}
ClassService.decorators = [
    { type: Injectable }
];
ClassService.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];

// @TODO onFocus Color
class InputTextDirective {
    constructor(elementRef, renderer2, ngControl, colorService, classService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngControl = ngControl;
        this.colorService = colorService;
        this.classService = classService;
        this.defaultClass = 'form-control';
        this.isSetClass = false;
        this.onKeyUp = new Subject();
        this.onKeyup = this.onKeyUp.asObservable();
    }
    set borderColor(color) {
        this.colorService.setBackgroundColor(color, true, 'border-color', '');
    }
    set class(className) {
        this.isSetClass = true;
        this.classService.applyClasses(className);
    }
    set color(color) {
        this.colorService.setFontColor(color);
    }
    keyUpListener() {
        this.onKeyUp.next(this.ngControl);
    }
    ngOnInit() {
        if (!this.isSetClass) {
            this.classService.applyClasses(this.defaultClass);
        }
    }
}
InputTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkInputText]',
                providers: [ColorService, ClassService]
            },] }
];
InputTextDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgControl },
    { type: ColorService },
    { type: ClassService }
];
InputTextDirective.propDecorators = {
    borderColor: [{ type: Input }],
    class: [{ type: Input }],
    color: [{ type: Input }],
    keyUpListener: [{ type: HostListener, args: ['keyup',] }]
};

class InputTextModule {
}
InputTextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ColorModule,
                    FormsModule
                ],
                exports: [InputTextDirective],
                declarations: [InputTextDirective]
            },] }
];

class InputGroupLabelDirective {
}
InputGroupLabelDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-input-group-label'
            },] }
];
class InputGroupAddonLeftDirective {
}
InputGroupAddonLeftDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-input-group-addon-left'
            },] }
];
class InputGroupAddonRightDirective {
}
InputGroupAddonRightDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-input-group-addon-right'
            },] }
];
class InputGroupContentDirective {
}
InputGroupContentDirective.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'mk-input-group-content'
            },] }
];

class InputGroupComponent {
    constructor() {
        this.inputColor = 'default';
        this.inputErrorColor = 'danger';
        this.inputValidColor = 'success';
        this.wrapperClasses = 'form-group';
        this.subscriptions = [];
    }
    ngAfterContentInit() {
        if (this.inputTextDirective) {
            this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe((value) => {
                if (value.invalid) {
                    this.currentColor = this.inputErrorColor;
                    this.currentFontColor = this.inputErrorFontColor;
                }
                else if (!value.invalid) {
                    this.currentColor = this.inputValidColor;
                    this.currentFontColor = this.inputValidFontColor;
                }
                else {
                    this.currentColor = this.inputColor;
                    this.currentFontColor = this.inputFontColor;
                }
            }));
        }
    }
    ngOnDestroy() {
        removeSubscriptions(this.subscriptions);
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-input-group',
                template: "<div [ngClass]=\"wrapperClasses\" [mkColor]=\"currentColor || inputColor\" mkColorPrefix=\"has\">\n  <label *ngIf=\"label || inputGroupLabelDirective\">\n    {{label}}\n    <ng-content select=\"mk-input-group-label\"></ng-content>\n  </label>\n  <div *ngIf=\"addonLeft || inputGroupAddonLeftDirective || addonRight || inputGroupAddonRightDirective; else noAddon\" class=\"input-group\">\n    <span *ngIf=\"addonLeft || inputGroupAddonLeftDirective\" class=\"input-group-addon\">\n      {{addonLeft}}\n      <ng-content select=\"mk-input-group-addon-left\"></ng-content>\n    </span>\n    <ng-content select=\"mk-input-group-content\"></ng-content>\n    <span *ngIf=\"addonRight || inputGroupAddonRightDirective\" class=\"input-group-addon\">\n      {{addonRight}}\n      <ng-content select=\"mk-input-group-addon-right\"></ng-content>\n    </span>\n  </div>\n  <ng-template #noAddon><ng-content select=\"mk-input-group-content\"></ng-content></ng-template>\n</div>\n"
            },] }
];
InputGroupComponent.propDecorators = {
    addonLeft: [{ type: Input }],
    addonRight: [{ type: Input }],
    inputColor: [{ type: Input }],
    inputFontColor: [{ type: Input }],
    inputErrorColor: [{ type: Input }],
    inputErrorFontColor: [{ type: Input }],
    inputValidColor: [{ type: Input }],
    inputValidFontColor: [{ type: Input }],
    label: [{ type: Input }],
    wrapperClasses: [{ type: Input }],
    inputGroupLabelDirective: [{ type: ContentChild, args: [InputGroupLabelDirective,] }],
    inputGroupAddonLeftDirective: [{ type: ContentChild, args: [InputGroupAddonLeftDirective,] }],
    inputGroupAddonRightDirective: [{ type: ContentChild, args: [InputGroupAddonRightDirective,] }],
    inputGroupContentDirective: [{ type: ContentChild, args: [InputGroupContentDirective,] }],
    inputTextDirective: [{ type: ContentChild, args: [InputTextDirective,] }]
};

class InputGroupModule {
}
InputGroupModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ColorModule,
                    FormsModule
                ],
                exports: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                    InputGroupAddonRightDirective, InputGroupContentDirective],
                declarations: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                    InputGroupAddonRightDirective, InputGroupContentDirective]
            },] }
];

class TabToggleDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
TabToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkTabToggle]'
            },] }
];
TabToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
TabToggleDirective.propDecorators = {
    tabComponent: [{ type: Input, args: ['mkTabToggle',] }]
};

class TabHeaderComponent {
}
TabHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class TabContentComponent {
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabContentComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class TabComponent {
    constructor() {
        this.isDisabled = false;
        this.isActive = false;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabComponent.propDecorators = {
    header: [{ type: Input }],
    isDisabled: [{ type: Input }],
    tabColor: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }],
    tabHeaderComponent: [{ type: ContentChild, args: [TabHeaderComponent,] }],
    tabContentComponent: [{ type: ContentChild, args: [TabContentComponent,] }]
};
class TabsHeaderComponent {
}
TabsHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tabs-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabsHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
class TabsComponent {
    constructor(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.headerStyleClass = 'header pull-left';
        this.navStyleClass = 'nav nav-tabs';
        this.contentStyleClass = 'tab-content';
        this.styleClass = 'nav-tabs-custom';
        this.closeTab = new EventEmitter();
        this.openTab = new EventEmitter();
        this.listeners = [];
        this.subscriptions = [];
    }
    set activeTabIndex(index) {
        this.activatedTabIndex = index;
        this.changeDetectorRef.detectChanges();
    }
    ngAfterContentInit() {
        // Set tab index on load.
        this.setTabIndex();
        // Update tab index if tabs is updated.
        if (this.tabs) {
            this.subscriptions.push(this.tabs.changes.subscribe(() => {
                this.setTabIndex();
            }));
        }
        // Open tab on load.
        this.openTabIndex();
    }
    ngAfterViewInit() {
        // Set tab toggles on load.
        this.setTabsToggle();
        // Update tab toggles if tabs is updated.
        if (this.tabToggleDirectives) {
            this.subscriptions.push(this.tabToggleDirectives.changes.subscribe(() => {
                this.setTabsToggle();
            }));
        }
    }
    ngOnChanges(changes) {
        if (changes.activeTabIndex) {
            this.openTabIndex();
        }
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
        removeSubscriptions(this.subscriptions);
    }
    openTabIndex() {
        if (this.tabs) {
            this.tabs.forEach((tab) => {
                if (this.activatedTabIndex === tab.index || (this.activatedTabIndex === undefined && tab.index === 0)) {
                    tab.isActive = true;
                    this.openTab.emit({ index: tab.index });
                    this.changeDetectorRef.detectChanges();
                }
                else if (tab.isActive) {
                    tab.isActive = false;
                    this.closeTab.emit({ index: tab.index });
                    this.changeDetectorRef.detectChanges();
                }
            });
        }
    }
    onOpenTab(event, tabToOpen) {
        event.preventDefault();
        tabToOpen.isActive = true;
        this.openTab.emit({ event, index: tabToOpen.index });
        if (this.tabs) {
            this.tabs.forEach((tab) => {
                if (tab.isActive && tabToOpen !== tab) {
                    tab.isActive = false;
                    this.closeTab.emit({ event, index: tab.index });
                }
            });
        }
    }
    setTabIndex() {
        if (this.tabs) {
            this.tabs.forEach((tab, index) => {
                tab.index = index;
            });
        }
        this.changeDetectorRef.detectChanges();
    }
    setTabsToggle() {
        this.listeners = removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.tabToggleDirectives) === null || _a === void 0 ? void 0 : _a.forEach((tabToggle) => {
                this.listeners.push(this.renderer2.listen(tabToggle.elementRef.nativeElement, 'click', (event) => {
                    this.onOpenTab(event, tabToggle.tabComponent);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        });
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tabs',
                template: "<div [ngClass]=\"styleClass\">\n  <ul [ngClass]=\"navStyleClass\" [class.pull-right]=\"header || tabsHeaderComponent\">\n    <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.isActive\" [mkColor]=\"tab.tabColor || tabsColor\" mkColorProperty=\"border-top-color\">\n      <a *ngIf=\"!tab.isDisabled\" [mkTabToggle]=\"tab\" href=\"#\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </a>\n      <ng-template [ngIf]=\"tab.isDisabled\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </ng-template>\n    </li>\n    <li *ngIf=\"tabsHeaderComponent || header\" [ngClass]=\"headerStyleClass\">\n      {{header}}\n      <ng-template *ngIf=\"tabsHeaderComponent\" [ngTemplateOutlet]=\"tabsHeaderComponent.templateRef\"></ng-template>\n    </li>\n  </ul>\n  <div [ngClass]=\"contentStyleClass\">\n    <div *ngFor=\"let tab of tabs\" class=\"tab-pane\" [class.active]=\"tab.isActive\">\n      <ng-template *ngIf=\"!tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.templateRef\"></ng-template>\n      <ng-template *ngIf=\"tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.tabContentComponent.templateRef\"></ng-template>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".nav-tabs-custom>.nav-tabs>li{border-top-width:0}.nav-tabs-custom>.nav-tabs>li.active{border-top-width:3px}"]
            },] }
];
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
TabsComponent.propDecorators = {
    activeTabIndex: [{ type: Input }],
    header: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    navStyleClass: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    tabsColor: [{ type: Input }],
    closeTab: [{ type: Output }],
    openTab: [{ type: Output }],
    tabsHeaderComponent: [{ type: ContentChild, args: [TabsHeaderComponent,] }],
    tabs: [{ type: ContentChildren, args: [TabComponent,] }],
    tabToggleDirectives: [{ type: ViewChildren, args: [TabToggleDirective,] }]
};

class TabsModule {
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ColorModule],
                exports: [TabsComponent, TabsHeaderComponent, TabComponent, TabHeaderComponent, TabContentComponent],
                declarations: [TabToggleDirective, TabsComponent, TabsHeaderComponent, TabComponent, TabHeaderComponent, TabContentComponent]
            },] }
];

/*
 * Public API Surface of angular-admin-lte
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionContentComponent, AccordionGroupComponent, AccordionHeaderComponent, AccordionModule, AccordionToggleDirective, AlertComponent, AlertModule, AnimationsModule, BackgroundColorDirective, BoxComponent, BoxContentDirective, BoxFooterDirective, BoxHeaderDirective, BoxInfoComponent, BoxInfoContentDirective, BoxInfoFooterDirective, BoxInfoHeaderDirective, BoxInfoModule, BoxModule, BoxSmallComponent, BoxSmallContentDirective, BoxSmallFooterDirective, BoxSmallHeaderDirective, BoxSmallModule, BoxToolsDirective, BreadcrumbsComponent, BreadcrumbsModule, CollapseAnimationDirective, ColorDirective, ColorModule, ContentComponent, ContentModule, DropdownComponent, DropdownMenuComponent, DropdownModule, DropdownToggleComponent, FooterComponent, FooterLeftComponent, FooterModule, FooterRightComponent, HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent, HeaderModule, InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupComponent, InputGroupContentDirective, InputGroupLabelDirective, InputGroupModule, InputTextDirective, InputTextModule, LayoutModule, LayoutService, LayoutState, LayoutStore, SidebarLeftComponent, SidebarLeftModule, SidebarLeftToggleDirective, SidebarRightComponent, SidebarRightModule, TabComponent, TabContentComponent, TabHeaderComponent, TabToggleDirective, TabsComponent, TabsHeaderComponent, TabsModule, WrapperComponent, WrapperModule };
//# sourceMappingURL=angular-admin-lte.js.map

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('rxjs'), require('@angular/platform-browser'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('angular-admin-lte', ['exports', '@angular/core', '@angular/common', '@angular/router', 'rxjs', '@angular/platform-browser', 'rxjs/operators', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-admin-lte'] = {}, global.ng.core, global.ng.common, global.ng.router, global.rxjs, global.ng.platformBrowser, global.rxjs.operators, global.ng.forms));
}(this, (function (exports, core, common, router, rxjs, platformBrowser, operators, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var RoutingService = /** @class */ (function () {
        function RoutingService(router) {
            this.router = router;
            this.onChange = new rxjs.BehaviorSubject(undefined);
            this.events = new rxjs.BehaviorSubject(undefined);
            this.init();
        }
        RoutingService.createUrl = function (route) {
            var url = route.url.map(function (urlSegment) { return urlSegment.toString(); }).join('/');
            return url;
        };
        RoutingService.isChildrenSelfRoute = function (route) {
            var _a, _b;
            var test = false;
            (_b = (_a = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.forEach(function (child) {
                if (child.path === '' && (child.component || child.loadChildren)) {
                    test = true;
                }
            });
            return test;
        };
        RoutingService.createBreadcrumb = function (route, url) {
            var _a, _b, _c, _d;
            var isUrl = true;
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
        };
        RoutingService.prototype.init = function () {
            var _this = this;
            this.router.events.subscribe(function (routeEvent) {
                var _a;
                // https://github.com/angular/angular/issues/17473: event not fired anymore on load for routed component.
                if (routeEvent instanceof router.NavigationEnd) {
                    _this.events.next(routeEvent);
                    var route = _this.router.routerState.root.snapshot;
                    var tmpUrl = '';
                    var url = '';
                    var rootRoot = true;
                    var paths = [];
                    while (route.children.length) {
                        route = route.firstChild || route;
                        tmpUrl = "/" + RoutingService.createUrl(route);
                        if (route.outlet !== router.PRIMARY_OUTLET || (!((_a = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _a === void 0 ? void 0 : _a.path) && !rootRoot)) {
                            continue;
                        }
                        rootRoot = false;
                        if (route.params && route.data) {
                            for (var key in route.params) {
                                if (!key) {
                                    continue;
                                }
                                if (route.data.hasOwnProperty('title')) {
                                    route.data.title = route.data.title.replace(":" + key, route.params[key]);
                                    route.data.title = route.data.title.replace(":" + key, route.params[key]);
                                }
                                if (route.data.hasOwnProperty('breadcrumbs')) {
                                    route.data.breadcrumbs = route.data.breadcrumbs.replace(":" + key, route.params[key]);
                                }
                                if (route.data.hasOwnProperty('description')) {
                                    route.data.description = route.data.description.replace(":" + key, route.params[key]);
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
                    _this.onChange.next(paths);
                }
            });
        };
        return RoutingService;
    }());
    RoutingService.decorators = [
        { type: core.Injectable }
    ];
    RoutingService.ctorParameters = function () { return [
        { type: router.Router }
    ]; };

    var BreadcrumbsComponent = /** @class */ (function () {
        function BreadcrumbsComponent(routingService, changeDetectorRef) {
            this.routingService = routingService;
            this.changeDetectorRef = changeDetectorRef;
            this.homeIcon = 'fa fa-home';
        }
        BreadcrumbsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscription = this.routingService.onChange.subscribe(function (paths) {
                _this.breadcrumbs = paths;
            });
        };
        BreadcrumbsComponent.prototype.ngOnDestroy = function () {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        };
        return BreadcrumbsComponent;
    }());
    BreadcrumbsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-breadcrumbs',
                    template: "<ol class=\"breadcrumb\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let first = first; let last = last\" [class.active]=\"last || !breadcrumb.url\">\n    <a *ngIf=\"breadcrumb.url && !last; else noLink\" [routerLink]=\"breadcrumb.url\">\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </a>\n    <ng-template #noLink>\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </ng-template>\n  </li>\n</ol>\n",
                    styles: [".breadcrumb{background:transparent;border-radius:2px;float:right;font-size:12px;margin-bottom:0;margin-top:0;padding:7px 5px;position:absolute;right:10px;top:15px}.breadcrumb>li>a{color:#444;display:inline-block;text-decoration:none}.breadcrumb>li .fa,.breadcrumb>li .glyphicon,.breadcrumb>li .ion{margin-right:5px}"]
                },] }
    ];
    BreadcrumbsComponent.ctorParameters = function () { return [
        { type: RoutingService },
        { type: core.ChangeDetectorRef }
    ]; };
    BreadcrumbsComponent.propDecorators = {
        homeIcon: [{ type: core.Input }]
    };

    var BreadcrumbsModule = /** @class */ (function () {
        function BreadcrumbsModule() {
        }
        return BreadcrumbsModule;
    }());
    BreadcrumbsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [BreadcrumbsComponent],
                    declarations: [BreadcrumbsComponent]
                },] }
    ];

    var LayoutState = /** @class */ (function () {
        function LayoutState(config) {
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
        return LayoutState;
    }());

    var LayoutStore = /** @class */ (function () {
        function LayoutStore(layoutConfig) {
            this.initialLayoutState = new LayoutState(layoutConfig);
            this.state = new rxjs.BehaviorSubject(this.initialLayoutState);
            this.layoutState = this.state.asObservable();
        }
        Object.defineProperty(LayoutStore.prototype, "windowInnerHeight", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('windowInnerHeight'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "windowInnerWidth", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('windowInnerWidth'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarLeftCollapsed", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarLeftCollapsed'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarLeftExpandOnOver", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarLeftExpandOnOver'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMouseOver", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarLeftMouseOver'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarLeftMini", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarLeftMini'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "sidebarRightSkin", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('sidebarRightSkin'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarRightCollapsed", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarRightCollapsed'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "isSidebarRightOverContent", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('isSidebarRightOverContent'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenu", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('sidebarLeftMenu'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "sidebarLeftMenuActiveUrl", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('sidebarLeftMenuActiveUrl'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "sidebarLeftElementHeight", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('sidebarLeftElementHeight'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "layout", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('layout'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LayoutStore.prototype, "skin", {
            get: function () {
                return this.layoutState.pipe(operators.pluck('skin'), operators.distinctUntilChanged());
            },
            enumerable: false,
            configurable: true
        });
        LayoutStore.prototype.sidebarLeftCollapsed = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarLeftCollapsed: value }));
        };
        LayoutStore.prototype.sidebarLeftExpandOnOver = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarLeftExpandOnOver: value }));
        };
        LayoutStore.prototype.setSidebarLeftElementHeight = function (value) {
            this.state.next(Object.assign(this.state.value, { sidebarLeftElementHeight: value }));
        };
        LayoutStore.prototype.setSidebarRightSkin = function (value) {
            this.state.next(Object.assign(this.state.value, { sidebarRightSkin: value }));
        };
        LayoutStore.prototype.sidebarLeftMouseOver = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarLeftMouseOver: value }));
        };
        LayoutStore.prototype.sidebarLeftMini = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarLeftMini: value }));
        };
        LayoutStore.prototype.sidebarRightCollapsed = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarRightCollapsed: value }));
        };
        LayoutStore.prototype.sidebarRightOverContent = function (value) {
            this.state.next(Object.assign(this.state.value, { isSidebarRightOverContent: value }));
        };
        LayoutStore.prototype.setSidebarLeftMenu = function (value) {
            this.state.next(Object.assign(this.state.value, { sidebarLeftMenu: value }));
        };
        LayoutStore.prototype.setSidebarLeftMenuActiveUrl = function (value) {
            this.state.next(Object.assign(this.state.value, { sidebarLeftMenuActiveUrl: value }));
        };
        LayoutStore.prototype.setLayout = function (value) {
            this.state.next(Object.assign(this.state.value, { layout: value }));
        };
        LayoutStore.prototype.setSkin = function (value) {
            this.state.next(Object.assign(this.state.value, { skin: value }));
        };
        LayoutStore.prototype.setWindowInnerHeight = function (value) {
            this.state.next(Object.assign(this.state.value, { windowInnerHeight: value }));
        };
        LayoutStore.prototype.setWindowInnerWidth = function (value) {
            this.state.next(Object.assign(this.state.value, { windowInnerWidth: value }));
        };
        return LayoutStore;
    }());

    var SidebarRightService = /** @class */ (function () {
        function SidebarRightService() {
        }
        Object.defineProperty(SidebarRightService.prototype, "scrollHeight", {
            get: function () {
                return this.elementRef ? this.elementRef.nativeElement.scrollHeight : 0;
            },
            enumerable: false,
            configurable: true
        });
        return SidebarRightService;
    }());
    SidebarRightService.decorators = [
        { type: core.Injectable }
    ];

    var HeaderService = /** @class */ (function () {
        function HeaderService() {
        }
        Object.defineProperty(HeaderService.prototype, "offsetHeight", {
            get: function () {
                return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
            },
            enumerable: false,
            configurable: true
        });
        return HeaderService;
    }());
    HeaderService.decorators = [
        { type: core.Injectable }
    ];

    var FooterService = /** @class */ (function () {
        function FooterService() {
        }
        Object.defineProperty(FooterService.prototype, "offsetHeight", {
            get: function () {
                return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
            },
            enumerable: false,
            configurable: true
        });
        return FooterService;
    }());
    FooterService.decorators = [
        { type: core.Injectable }
    ];

    function throttle(callback, delay) {
        var _this = this;
        var timeout = 0;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!timeout) {
                timeout = setTimeout(function () {
                    // @ts-ignore
                    callback.call.apply(callback, __spread([_this], args));
                    timeout = 0;
                }, delay);
            }
        };
    }
    function removeSubscriptions(subscriptions) {
        if (subscriptions) {
            subscriptions.forEach(function (subscription) {
                subscription.unsubscribe();
            });
        }
        return [];
    }
    function removeListeners(listeners) {
        if (listeners === void 0) { listeners = []; }
        if (listeners) {
            listeners.forEach(function (listener) {
                listener();
            });
        }
        return [];
    }

    var ContentComponent = /** @class */ (function () {
        function ContentComponent(layoutStore, routingService, titleService, elementRef, changeDetectorRef, sidebarRightService, headerService, footerService, router) {
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
        ContentComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.titleTag = this.titleService.getTitle();
            this.subscriptions.push(this.routingService.onChange.subscribe(function (value) {
                if (value && value[value.length - 1] && value[value.length - 1].data) {
                    var data = value[value.length - 1].data;
                    _this.titleService.setTitle(_this.getTitle(data.title) || '');
                    _this.header = data.title;
                    _this.description = data.description;
                }
                _this.changeDetectorRef.markForCheck();
            }));
            this.subscriptions.push(this.router.events.subscribe(function (routeEvent) {
                if (routeEvent instanceof router.NavigationStart) {
                    _this.navigationEnd = false;
                }
                if (routeEvent instanceof router.NavigationEnd) {
                    _this.navigationEnd = true;
                    _this.setContentMinHeight();
                }
            }));
            this.subscriptions.push(this.layoutStore.sidebarLeftElementHeight.subscribe(function (value) {
                _this.sidebarLeftHeight = value;
                _this.setContentMinHeight();
            }));
            this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
                _this.layout = value;
                _this.setContentMinHeight();
            }));
            this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(function (value) {
                _this.windowInnerHeight = value;
                _this.setContentMinHeight();
            }));
            this.heightStyle = this.windowInnerHeight;
        };
        ContentComponent.prototype.ngOnDestroy = function () {
            this.subscriptions = removeSubscriptions(this.subscriptions);
        };
        Object.defineProperty(ContentComponent.prototype, "scrollHeight", {
            get: function () {
                return this.contentInnerElement.nativeElement.scrollHeight;
            },
            enumerable: false,
            configurable: true
        });
        ContentComponent.prototype.getTitle = function (title) {
            return title ? title + " - " + this.titleTag : this.titleTag;
        };
        ContentComponent.prototype.setContentMinHeight = function () {
            if (this.navigationEnd) {
                var heightStyle = 0;
                var headerFooterOffsetHeight = this.headerService.offsetHeight + this.footerService.offsetHeight;
                if (this.layout === 'fixed' && this.windowInnerHeight) {
                    heightStyle = this.windowInnerHeight - this.footerService.offsetHeight;
                }
                else if (this.windowInnerHeight && this.sidebarLeftHeight) {
                    var sidebarRight = this.sidebarRightService.scrollHeight ?
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
        };
        return ContentComponent;
    }());
    ContentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-content',
                    template: "<div class=\"content-wrapper\" [style.min-height.px]=\"heightStyle\">\n  <div #contentInnerElement class=\"content-inner\">\n    <ng-content select=\"[mk-layout-content-before-header]\"></ng-content>\n    <section *ngIf=\"header || description\" class=\"content-header\">\n      <h1>\n        {{header}}\n        <small *ngIf=\"description\">{{description}}</small>\n      </h1>\n      <mk-breadcrumbs></mk-breadcrumbs>\n    </section>\n    <ng-content select=\"[mk-layout-content-after-header]\"></ng-content>\n    <section class=\"content\">\n      <ng-content></ng-content>\n    </section>\n  </div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block}.content-wrapper{position:relative}"]
                },] }
    ];
    ContentComponent.ctorParameters = function () { return [
        { type: LayoutStore },
        { type: RoutingService },
        { type: platformBrowser.Title },
        { type: core.ElementRef },
        { type: core.ChangeDetectorRef },
        { type: SidebarRightService },
        { type: HeaderService },
        { type: FooterService },
        { type: router.Router }
    ]; };
    ContentComponent.propDecorators = {
        contentInnerElement: [{ type: core.ViewChild, args: ['contentInnerElement', { static: true },] }]
    };

    var ContentModule = /** @class */ (function () {
        function ContentModule() {
        }
        return ContentModule;
    }());
    ContentModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, BreadcrumbsModule],
                    exports: [ContentComponent],
                    declarations: [ContentComponent]
                },] }
    ];

    var FooterLeftComponent = /** @class */ (function () {
        function FooterLeftComponent() {
        }
        return FooterLeftComponent;
    }());
    FooterLeftComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-footer-left',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    FooterLeftComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var FooterRightComponent = /** @class */ (function () {
        function FooterRightComponent() {
        }
        return FooterRightComponent;
    }());
    FooterRightComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-footer-right',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    FooterRightComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var FooterComponent = /** @class */ (function () {
        function FooterComponent(elementRef, footerService) {
            this.elementRef = elementRef;
            this.footerService = footerService;
        }
        FooterComponent.prototype.ngOnInit = function () {
            this.footerService.elementRef = this.elementRef;
        };
        return FooterComponent;
    }());
    FooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-footer',
                    template: "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <ng-template *ngIf=\"footerRightComponent\" [ngTemplateOutlet]=\"footerRightComponent.templateRef\"></ng-template>\n  </div>\n  <ng-template *ngIf=\"footerLeftComponent\" [ngTemplateOutlet]=\"footerLeftComponent.templateRef\"></ng-template>\n</footer>\n",
                    styles: [":host{display:block}"]
                },] }
    ];
    FooterComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: FooterService }
    ]; };
    FooterComponent.propDecorators = {
        footerLeftComponent: [{ type: core.ContentChild, args: [FooterLeftComponent,] }],
        footerRightComponent: [{ type: core.ContentChild, args: [FooterRightComponent,] }]
    };

    var FooterModule = /** @class */ (function () {
        function FooterModule() {
        }
        return FooterModule;
    }());
    FooterModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [FooterComponent, FooterLeftComponent, FooterRightComponent],
                    declarations: [FooterComponent, FooterLeftComponent, FooterRightComponent]
                },] }
    ];

    var HeaderLogoComponent = /** @class */ (function () {
        function HeaderLogoComponent() {
        }
        return HeaderLogoComponent;
    }());
    HeaderLogoComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-header-logo',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    HeaderLogoComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var HeaderLogoMiniComponent = /** @class */ (function () {
        function HeaderLogoMiniComponent() {
        }
        return HeaderLogoMiniComponent;
    }());
    HeaderLogoMiniComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-header-logo-mini',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    HeaderLogoMiniComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent(layoutStore, ngZone, renderer2, elementRef, headerService) {
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
        HeaderComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.headerService.elementRef = this.headerElement;
            if (this.sidebarLeftToggleElement) {
                this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
                    _this.isSidebarLeftCollapsed = value;
                }));
                this.ngZone.runOutsideAngular(function () {
                    var _a;
                    _this.listeners.push(_this.renderer2.listen((_a = _this.sidebarLeftToggleElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'click', function (event) {
                        event.preventDefault();
                        _this.layoutStore.sidebarLeftCollapsed(!_this.isSidebarLeftCollapsed);
                    }));
                });
            }
            if (this.sidebarRightToggleElement) {
                this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
                    _this.isSidebarRightCollapsed = value;
                }));
                this.ngZone.runOutsideAngular(function () {
                    var _a;
                    _this.listeners.push(_this.renderer2.listen((_a = _this.sidebarRightToggleElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'click', function (event) {
                        event.preventDefault();
                        _this.layoutStore.sidebarRightCollapsed(!_this.isSidebarRightCollapsed);
                    }));
                });
            }
        };
        HeaderComponent.prototype.ngOnDestroy = function () {
            this.listeners = removeListeners(this.listeners);
            this.subscriptions = removeSubscriptions(this.subscriptions);
        };
        return HeaderComponent;
    }());
    HeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-header',
                    template: "<header #headerElement class=\"main-header\">\n  <a [routerLink]=\"logoLink\" class=\"logo\">\n    <span class=\"logo-mini\" *ngIf=\"headerLogoMiniComponent\"><ng-template [ngTemplateOutlet]=\"headerLogoMiniComponent.templateRef\"></ng-template></span>\n    <span class=\"logo-lg\" *ngIf=\"headerLogoComponent\"><ng-template [ngTemplateOutlet]=\"headerLogoComponent.templateRef\"></ng-template></span>\n  </a>\n  <nav class=\"navbar navbar-static-top\">\n    <a *ngIf=\"isSidebarLeftToggle\" #sidebarLeftToggleElement href=\"#\" class=\"sidebar-toggle {{sidebarLeftToggleIconClasses ? 'sidebar-toggle-custom-icon' : ''}}\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <ng-container *ngIf=\"sidebarLeftToggleIconClasses\">\n        <i [class]=\"sidebarLeftToggleIconClasses\"></i>\n      </ng-container>\n    </a>\n    <div *ngIf=\"isSidebarRightToggle\" class=\"sidebar-right-toggle\">\n      <a #sidebarRightToggleElement href=\"#\">\n        <i [class]=\"sidebarRightToggleIconClasses ? sidebarRightToggleIconClasses : 'fa fa-gears'\"></i>\n      </a>\n    </div>\n    <ng-content></ng-content>\n  </nav>\n</header>\n",
                    styles: [":host{display:block}.sidebar-right-toggle{float:right}.sidebar-right-toggle a{cursor:pointer;display:block;line-height:20px;padding:15px}.sidebar-toggle-custom-icon:before{content:\"\"}"]
                },] }
    ];
    HeaderComponent.ctorParameters = function () { return [
        { type: LayoutStore },
        { type: core.NgZone },
        { type: core.Renderer2 },
        { type: core.ElementRef },
        { type: HeaderService }
    ]; };
    HeaderComponent.propDecorators = {
        isSidebarLeftToggle: [{ type: core.Input }],
        sidebarLeftToggleIconClasses: [{ type: core.Input }],
        isSidebarRightToggle: [{ type: core.Input }],
        sidebarRightToggleIconClasses: [{ type: core.Input }],
        logoLink: [{ type: core.Input }],
        headerLogoComponent: [{ type: core.ContentChild, args: [HeaderLogoComponent,] }],
        headerLogoMiniComponent: [{ type: core.ContentChild, args: [HeaderLogoMiniComponent,] }],
        headerElement: [{ type: core.ViewChild, args: ['headerElement', { static: true },] }],
        sidebarLeftToggleElement: [{ type: core.ViewChild, args: ['sidebarLeftToggleElement',] }],
        sidebarRightToggleElement: [{ type: core.ViewChild, args: ['sidebarRightToggleElement',] }]
    };

    var HeaderModule = /** @class */ (function () {
        function HeaderModule() {
        }
        return HeaderModule;
    }());
    HeaderModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent],
                    declarations: [HeaderComponent, HeaderLogoComponent, HeaderLogoMiniComponent]
                },] }
    ];

    var CollapseAnimationDirective = /** @class */ (function () {
        function CollapseAnimationDirective(elementRef, ngZone, renderer2) {
            this.elementRef = elementRef;
            this.ngZone = ngZone;
            this.renderer2 = renderer2;
            this.collapseAnimationDuration = 350;
            // tslint:disable-next-line:no-output-rename
            this.startEventEmitter = new core.EventEmitter();
            // tslint:disable-next-line:no-output-rename
            this.doneEventEmitter = new core.EventEmitter();
            this.firstStart = true;
            this.isCollapsed = false;
            this.lastIsCollapsed = false;
            this.transitioning = false;
        }
        Object.defineProperty(CollapseAnimationDirective.prototype, "_isCollapsed", {
            set: function (value) {
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
            },
            enumerable: false,
            configurable: true
        });
        CollapseAnimationDirective.prototype.ngOnInit = function () {
            if (this.collapseAnimationDuration && this.collapseAnimationDuration !== 350) {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-duration', this.collapseAnimationDuration + "ms");
            }
            if (this.collapseAnimationTiming) {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-timing-function', this.collapseAnimationTiming);
            }
        };
        CollapseAnimationDirective.prototype.ngAfterContentInit = function () {
            this.emit('start');
            if (this.isCollapsed) {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
            }
            this.emit('done');
            this.firstStart = false;
            this.subscriptions();
        };
        CollapseAnimationDirective.prototype.ngOnDestroy = function () {
            if (this.listener) {
                this.listener();
            }
        };
        CollapseAnimationDirective.prototype.subscriptions = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.listener = _this.renderer2.listen(_this.elementRef.nativeElement, 'transitionend', function () {
                    if (!_this.isCollapsed) {
                        _this.renderer2.removeClass(_this.elementRef.nativeElement, 'un-collapse');
                        _this.renderer2.removeClass(_this.elementRef.nativeElement, 'collapsing');
                    }
                    else {
                        _this.renderer2.setStyle(_this.elementRef.nativeElement, 'display', 'none');
                    }
                    requestAnimationFrame(function () {
                        _this.renderer2.removeStyle(_this.elementRef.nativeElement, 'height');
                        _this.emit('done');
                        _this.transitioning = false;
                    });
                });
            });
        };
        CollapseAnimationDirective.prototype.unCollapse = function () {
            this.transitioning = true;
            this.renderer2.addClass(this.elementRef.nativeElement, 'un-collapse');
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
            this.renderer2.setStyle(this.elementRef.nativeElement, 'height', this.elementRef.nativeElement.scrollHeight + "px");
        };
        CollapseAnimationDirective.prototype.collapse = function () {
            var _this = this;
            requestAnimationFrame(function () {
                if (!_this.transitioning) {
                    _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', _this.elementRef.nativeElement.offsetHeight + "px");
                    _this.renderer2.addClass(_this.elementRef.nativeElement, 'collapsing');
                }
                _this.transitioning = true;
                requestAnimationFrame(function () {
                    _this.renderer2.setStyle(_this.elementRef.nativeElement, 'height', "0px");
                });
            });
        };
        CollapseAnimationDirective.prototype.emit = function (phaseName) {
            var event = {
                element: this.elementRef.nativeElement,
                fromState: this.lastIsCollapsed === undefined ? 'void' : this.lastIsCollapsed ? '1' : '0',
                phaseName: phaseName,
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
        };
        return CollapseAnimationDirective;
    }());
    CollapseAnimationDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkCollapseAnimation]'
                },] }
    ];
    CollapseAnimationDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    CollapseAnimationDirective.propDecorators = {
        collapseAnimationDuration: [{ type: core.Input }],
        collapseAnimationTiming: [{ type: core.Input }],
        _isCollapsed: [{ type: core.Input, args: ['mkCollapseAnimation',] }],
        startEventEmitter: [{ type: core.Output, args: ['mkCollapseAnimation.start',] }],
        doneEventEmitter: [{ type: core.Output, args: ['mkCollapseAnimation.done',] }]
    };

    var AnimationsModule = /** @class */ (function () {
        function AnimationsModule() {
        }
        return AnimationsModule;
    }());
    AnimationsModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [CollapseAnimationDirective],
                    declarations: [CollapseAnimationDirective]
                },] }
    ];

    var SidebarLeftToggleDirective = /** @class */ (function () {
        function SidebarLeftToggleDirective(elementRef) {
            this.elementRef = elementRef;
        }
        return SidebarLeftToggleDirective;
    }());
    SidebarLeftToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkMenuToggle]'
                },] }
    ];
    SidebarLeftToggleDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    SidebarLeftToggleDirective.propDecorators = {
        item: [{ type: core.Input, args: ['mkMenuToggle',] }]
    };

    var WrapperService = /** @class */ (function () {
        function WrapperService() {
        }
        return WrapperService;
    }());
    WrapperService.decorators = [
        { type: core.Injectable }
    ];

    var SidebarLeftComponent = /** @class */ (function () {
        function SidebarLeftComponent(changeDetectorRef, layoutStore, ngZone, renderer2, router, routingService, wrapperService, headerService) {
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
        SidebarLeftComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(function (value) {
                _this.menu = value;
                _this.monkeyPatchMenu(_this.menu);
                if (_this.initialized) {
                    _this.setMenuListeners(_this.activeUrl);
                    _this.setSidebarListeners();
                    _this.setMenuTogglesListeners();
                }
                _this.initialized = true;
            }));
            this.subscriptions.push(this.layoutStore.sidebarLeftMenuActiveUrl.subscribe(function (value) {
                _this.activeUrl = value;
                _this.setMenuListeners(value);
            }));
            this.subscriptions.push(this.routingService.events.subscribe(function (event) {
                if (event instanceof router.NavigationEnd) {
                    _this.activeUrl = event.url;
                    _this.setMenuListeners(event.url);
                }
            }));
            this.setSidebarListeners();
        };
        SidebarLeftComponent.prototype.ngAfterViewInit = function () {
            this.setMenuTogglesListeners();
            this.checkMenuWithoutChildren();
        };
        SidebarLeftComponent.prototype.ngOnDestroy = function () {
            this.subscriptions = removeSubscriptions(this.subscriptions);
            this.listeners = removeListeners(this.listeners);
            this.toggleListeners = removeListeners(this.toggleListeners);
        };
        SidebarLeftComponent.prototype.setSidebarListeners = function () {
            var _this = this;
            this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
                _this.layout = value;
                _this.setSidebarHeight();
            }));
            this.subscriptions.push(this.layoutStore.windowInnerHeight.subscribe(function (value) {
                _this.windowInnerHeight = value;
                _this.setSidebarHeight();
            }));
            this.subscriptions.push(this.layoutStore.sidebarLeftMenu.subscribe(function () {
                _this.changeDetectorRef.detectChanges();
            }));
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen(_this.sidebarElement.nativeElement, 'mouseenter', function () {
                    _this.layoutStore.sidebarLeftMouseOver(true);
                }));
                _this.listeners.push(_this.renderer2.listen(_this.sidebarElement.nativeElement, 'mouseleave', function () {
                    _this.layoutStore.sidebarLeftMouseOver(false);
                }));
            });
            this.subscriptions.push(this.layoutStore.windowInnerWidth.subscribe(function (value) {
                _this.windowInnerWidth = value;
                if (!_this.isSidebarLeftCollapsed && _this.windowInnerWidth && _this.windowInnerWidth <= 767) {
                    _this.layoutStore.sidebarLeftCollapsed(true);
                }
                else if (_this.windowInnerWidth && _this.windowInnerWidth > 767 && _this.isSidebarLeftCollapsed && !_this.isSidebarLeftExpandOnOver) {
                    _this.layoutStore.sidebarLeftCollapsed(false);
                }
            }));
            this.subscriptions.push(this.layoutStore.isSidebarLeftMouseOver.subscribe(function (value) {
                _this.isSidebarLeftMouseOver = value;
                if (_this.isSidebarLeftExpandOnOver) {
                    _this.layoutStore.sidebarLeftCollapsed(!value);
                }
            }));
            this.subscriptions.push(this.layoutStore.isSidebarLeftExpandOnOver.subscribe(function (value) {
                _this.isSidebarLeftExpandOnOver = value;
                if (_this.windowInnerWidth && _this.windowInnerWidth > 767 && _this.isSidebarLeftCollapsed !== undefined) {
                    _this.layoutStore.sidebarLeftCollapsed(value);
                }
            }));
            this.subscriptions.push(this.layoutStore.isSidebarLeftCollapsed.subscribe(function (value) {
                _this.isSidebarLeftCollapsed = value;
                if (_this.windowInnerWidth && _this.windowInnerWidth <= 767) {
                    if (value) {
                        _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                    }
                    else {
                        _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-open');
                    }
                }
                else {
                    if (_this.isSidebarLeftExpandOnOver && !_this.isSidebarLeftMouseOver && !value) {
                        _this.layoutStore.sidebarLeftExpandOnOver(false);
                    }
                    if (value) {
                        _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                        if (_this.isSidebarLeftExpandOnOver) {
                            _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                        }
                    }
                    else {
                        _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-collapse');
                        if (_this.isSidebarLeftExpandOnOver) {
                            _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-expanded-on-hover');
                        }
                    }
                }
            }));
            this.subscriptions.push(this.layoutStore.isSidebarLeftMini.subscribe(function (value) {
                if (value) {
                    _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
                }
                else {
                    _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'sidebar-mini');
                }
            }));
        };
        SidebarLeftComponent.prototype.getIconClasses = function (item) {
            if (item.iconClasses || item.iconClasses === '') {
                return item.iconClasses;
            }
            else {
                return 'fa fa-circle-o';
            }
        };
        SidebarLeftComponent.prototype.visibilityStateStart = function (event) {
            var _this = this;
            this.runningAnimations++;
            this.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.runningAnimations--;
                    if (!_this.runningAnimations) {
                        _this.layoutStore.setSidebarLeftElementHeight(_this.sidebarElement.nativeElement.offsetHeight);
                    }
                }, event.totalTime);
            });
        };
        SidebarLeftComponent.prototype.setMenuListeners = function (url) {
            if (url === '/') {
                this.activeItems(url);
                this.changeDetectorRef.detectChanges();
            }
            else {
                var primaryOutlet = this.router.parseUrl(url).root.children[router.PRIMARY_OUTLET];
                if (primaryOutlet) {
                    this.activeItems(primaryOutlet.toString());
                    this.changeDetectorRef.detectChanges();
                }
            }
            if (this.windowInnerWidth && this.windowInnerWidth <= 767 || this.isSidebarLeftExpandOnOver) {
                this.layoutStore.sidebarLeftCollapsed(true);
            }
        };
        SidebarLeftComponent.prototype.uncollapseItemParents = function (item, isActive) {
            if (isActive === void 0) { isActive = false; }
            if (isActive) {
                item.isActive = true;
                this.activatedItems.push(item);
            }
            item.isCollapsed = false;
            this.collapsedItems.push(item);
            if (item.parentId) {
                this.uncollapseItemParents(this.itemsByIds[item.parentId], isActive);
            }
        };
        SidebarLeftComponent.prototype.findItemsByUrl = function (url, items, returnItems) {
            var _this = this;
            if (returnItems === void 0) { returnItems = []; }
            items.forEach(function (item) {
                if (item.route === url) {
                    returnItems.push(item);
                }
                else if (item.children) {
                    _this.findItemsByUrl(url, item.children, returnItems);
                }
            });
            return returnItems;
        };
        SidebarLeftComponent.prototype.activeItems = function (url) {
            var _this = this;
            if (!this.menu) {
                return;
            }
            this.activatedItems.forEach(function (item) {
                item.isActive = false;
            });
            this.activatedItems = [];
            this.collapsedItems.forEach(function (item) {
                item.isActive = false;
                item.isCollapsed = true;
            });
            this.collapsedItems = [];
            var items = this.findItemsByUrl(url, this.menu);
            items.forEach(function (item) {
                item.isActive = true;
                _this.uncollapseItemParents(item, true);
                _this.activatedItems.push(item);
            });
        };
        SidebarLeftComponent.prototype.monkeyPatchMenu = function (items, parentId) {
            var _this = this;
            items.forEach(function (item, index) {
                item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
                if (parentId) {
                    item.parentId = parentId;
                }
                if (!item.disableCollapse) {
                    item.isCollapsed = true;
                }
                item.isActive = false;
                if (parentId || item.children) {
                    _this.itemsByIds[item.id] = item;
                }
                if (item.children) {
                    _this.monkeyPatchMenu(item.children, item.id);
                }
            });
        };
        SidebarLeftComponent.prototype.setMenuTogglesListeners = function () {
            var _this = this;
            this.toggleListeners = removeListeners(this.toggleListeners);
            this.ngZone.runOutsideAngular(function () {
                _this.sidebarLeftToggleDirectives.forEach(function (menuToggle) {
                    _this.toggleListeners.push(_this.renderer2.listen(menuToggle.elementRef.nativeElement, 'click', function (event) {
                        event.preventDefault();
                        if (menuToggle.item.isCollapsed) {
                            _this.collapsedItems.forEach(function (item) {
                                if (!item.disableCollapse) {
                                    item.isCollapsed = true;
                                }
                            });
                            _this.collapsedItems = [];
                            _this.uncollapseItemParents(menuToggle.item);
                        }
                        else {
                            menuToggle.item.isCollapsed = !menuToggle.item.isCollapsed;
                        }
                        _this.changeDetectorRef.detectChanges();
                    }));
                });
            });
        };
        SidebarLeftComponent.prototype.checkMenuWithoutChildren = function () {
            var _this = this;
            if (!this.menu) {
                return;
            }
            var menuHaveChildren;
            this.menu.forEach(function (item) {
                if (item.children) {
                    menuHaveChildren = true;
                }
            });
            if (!menuHaveChildren) {
                this.ngZone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.layoutStore.setSidebarLeftElementHeight(_this.sidebarElement.nativeElement.offsetHeight);
                    });
                });
            }
        };
        SidebarLeftComponent.prototype.setSidebarHeight = function () {
            if (this.layout === 'fixed' && this.windowInnerHeight) {
                var height = this.windowInnerHeight - this.headerService.offsetHeight;
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
        };
        return SidebarLeftComponent;
    }());
    SidebarLeftComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-sidebar-left',
                    template: "<aside class=\"main-sidebar\">\n  <section class=\"sidebar\" #sidebarElement [style.height.px]=\"sidebarHeight\" [style.overflow]=\"sidebarOverflow\">\n    <ng-content></ng-content>\n  \t<ul class=\"sidebar-menu\">\n      <ng-container *ngFor=\"let item of menu\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n  \t</ul>\n  </section>\n</aside>\n\n<ng-template #sidebarInner let-item=\"item\">\n  <li [class.active]=\"item.isActive\" [class.header]=\"item.separator\" [class.menu-open]=\"!item.isCollapsed\">\n    <span *ngIf=\"item.separator\">{{item.label}}</span>\n    <a *ngIf=\"!item.separator && item.route\" [routerLink]=\"item.route\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <a *ngIf=\"!item.separator && !item.route\" href=\"#\" [mkMenuToggle]=\"item\">\n    \t<i [class]=\"getIconClasses(item)\"></i><span>{{item.label}}</span>\n    \t<span *ngIf=\"item.children || item.pullRights\" class=\"pull-right-container\">\n    \t\t<span *ngFor=\"let rightItem of item.pullRights\" class=\"pull-right {{rightItem.classes}}\">{{rightItem.text}}</span>\n    \t  <i *ngIf=\"!item.pullRights\" class=\"fa fa-angle-left pull-right\"></i>\n    \t</span>\n    </a>\n    <ul *ngIf=\"item.children\" [mkCollapseAnimation]=\"item.isCollapsed\" (mkCollapseAnimation.start)=\"visibilityStateStart($event)\" class=\"treeview-menu\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <ng-container *ngTemplateOutlet=\"sidebarInner; context: {item: item}\"></ng-container>\n      </ng-container>\n    </ul>\n  </li>\n</ng-template>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".treeview-menu.collapse{display:none}.treeview-menu,.treeview-menu.collapse.in{display:block}"]
                },] }
    ];
    SidebarLeftComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: LayoutStore },
        { type: core.NgZone },
        { type: core.Renderer2 },
        { type: router.Router },
        { type: RoutingService },
        { type: WrapperService },
        { type: HeaderService }
    ]; };
    SidebarLeftComponent.propDecorators = {
        sidebarElement: [{ type: core.ViewChild, args: ['sidebarElement', { static: true },] }],
        sidebarLeftToggleDirectives: [{ type: core.ViewChildren, args: [SidebarLeftToggleDirective,] }]
    };

    var SidebarLeftModule = /** @class */ (function () {
        function SidebarLeftModule() {
        }
        return SidebarLeftModule;
    }());
    SidebarLeftModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule, AnimationsModule],
                    exports: [SidebarLeftComponent],
                    declarations: [SidebarLeftToggleDirective, SidebarLeftComponent]
                },] }
    ];

    var SidebarRightComponent = /** @class */ (function () {
        function SidebarRightComponent(elementRef, renderer2, layoutStore, sidebarRightService, wrapperService) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.layoutStore = layoutStore;
            this.sidebarRightService = sidebarRightService;
            this.wrapperService = wrapperService;
            this.listeners = [];
            this.subscriptions = [];
        }
        SidebarRightComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.renderer2.addClass(this.elementRef.nativeElement, 'control-sidebar');
            this.subscriptions.push(this.layoutStore.isSidebarRightCollapsed.subscribe(function (value) {
                _this.isSidebarRightCollapsed = value;
                if (!value) {
                    _this.renderer2.addClass(_this.elementRef.nativeElement, 'control-sidebar-open');
                    if (!_this.isSidebarRightOverContent) {
                        _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                    }
                }
                else {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'control-sidebar-open');
                    if (!_this.isSidebarRightOverContent) {
                        _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                    }
                }
            }));
            this.subscriptions.push(this.layoutStore.isSidebarRightOverContent.subscribe(function (value) {
                _this.isSidebarRightOverContent = value;
                if (!_this.isSidebarRightCollapsed) {
                    if (value) {
                        _this.renderer2.removeClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                    }
                    else {
                        _this.renderer2.addClass(_this.wrapperService.wrapperElementRef.nativeElement, 'control-sidebar-open');
                    }
                }
            }));
            this.subscriptions.push(this.layoutStore.sidebarRightSkin.subscribe(function (value) {
                if (_this.skin !== value) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, "control-sidebar-" + _this.skin);
                }
                _this.skin = value;
                _this.renderer2.addClass(_this.elementRef.nativeElement, "control-sidebar-" + value);
            }));
        };
        SidebarRightComponent.prototype.ngAfterViewInit = function () {
            this.sidebarRightService.elementRef = this.sidebarContentElement;
        };
        SidebarRightComponent.prototype.ngOnDestroy = function () {
            this.listeners = removeListeners(this.listeners);
            this.subscriptions = removeSubscriptions(this.subscriptions);
        };
        return SidebarRightComponent;
    }());
    SidebarRightComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-sidebar-right',
                    template: "<div #sidebarContentElement class=\"control-sidebar-content\">\n  <ng-content></ng-content>\n</div>\n<div class=\"control-sidebar-bg\"></div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;height:100%}.control-sidebar-bg{z-index:-1}/deep/ .tab-content{padding:10px 15px}"]
                },] }
    ];
    SidebarRightComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: LayoutStore },
        { type: SidebarRightService },
        { type: WrapperService }
    ]; };
    SidebarRightComponent.propDecorators = {
        sidebarContentElement: [{ type: core.ViewChild, args: ['sidebarContentElement', { static: true },] }]
    };

    var SidebarRightModule = /** @class */ (function () {
        function SidebarRightModule() {
        }
        return SidebarRightModule;
    }());
    SidebarRightModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [SidebarRightComponent],
                    declarations: [SidebarRightComponent]
                },] }
    ];

    var WrapperComponent = /** @class */ (function () {
        function WrapperComponent(elementRef, renderer2, layoutStore, wrapperService, ngZone) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.layoutStore = layoutStore;
            this.wrapperService = wrapperService;
            this.ngZone = ngZone;
            this.listeners = [];
            this.subscriptions = [];
        }
        WrapperComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.layoutStore.setWindowInnerHeight(window.innerHeight);
            this.layoutStore.setWindowInnerWidth(window.innerWidth);
            this.wrapperService.wrapperElementRef = this.elementRef;
            this.ngZone.runOutsideAngular(function () {
                _this.listeners.push(_this.renderer2.listen('window', 'resize', throttle(function () {
                    _this.layoutStore.setWindowInnerHeight(window.innerHeight);
                    _this.layoutStore.setWindowInnerWidth(window.innerWidth);
                }, 250)));
            });
            this.subscriptions.push(this.layoutStore.layout.subscribe(function (value) {
                value === 'fixed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'fixed') :
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'fixed');
                value === 'boxed' ? _this.renderer2.addClass(_this.elementRef.nativeElement, 'layout-boxed') :
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, 'layout-boxed');
            }));
            this.subscriptions.push(this.layoutStore.skin.subscribe(function (value) {
                if (_this.skin && _this.skin !== value) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
                }
                _this.skin = value;
                _this.renderer2.addClass(_this.elementRef.nativeElement, "skin-" + _this.skin);
            }));
        };
        WrapperComponent.prototype.ngOnDestroy = function () {
            this.subscriptions = removeSubscriptions(this.subscriptions);
            this.listeners = removeListeners(this.listeners);
        };
        return WrapperComponent;
    }());
    WrapperComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-layout-wrapper',
                    template: "<div class=\"wrapper overflow\">\n  <ng-content></ng-content>\n</div>\n",
                    styles: [".wrapper.overflow{overflow:hidden}:host{display:block}:host /deep/ .sidebar-right-toggle>a{color:#fff}:host.sidebar-mini.sidebar-collapse /deep/ .treeview-menu.collapsing{height:auto!important}:host /deep/ .sidebar-right-toggle>a:hover{background:rgba(0,0,0,.1)}:host.skin-black-light /deep/ .sidebar-right-toggle>a,:host.skin-black /deep/ .sidebar-right-toggle>a{border-right-width:0;color:#333}:host.skin-black-light /deep/ .sidebar-right-toggle>a:hover,:host.skin-black /deep/ .sidebar-right-toggle>a:hover{background-color:#fff;color:#999}:host.skin-black /deep/ .sidebar-right-toggle>a{border-left:1px solid #eee}:host.skin-black-light /deep/ .sidebar-right-toggle>a{border-left:1px solid #d2d6de}"]
                },] }
    ];
    WrapperComponent.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: LayoutStore },
        { type: WrapperService },
        { type: core.NgZone }
    ]; };

    var WrapperModule = /** @class */ (function () {
        function WrapperModule() {
        }
        return WrapperModule;
    }());
    WrapperModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [WrapperComponent],
                    declarations: [WrapperComponent]
                },] }
    ];

    var LayoutService = /** @class */ (function () {
        function LayoutService(router) {
            this.router = router;
            this.isCustomLayout = new rxjs.BehaviorSubject(false);
            this.customLayout = false;
            this.init();
        }
        LayoutService.prototype.init = function () {
            var _this = this;
            this.router.events.subscribe(function (event) {
                if (event instanceof router.ActivationStart) {
                    _this.customLayout = event.snapshot.data.customLayout;
                    _this.isCustomLayout.next(_this.customLayout);
                }
            });
        };
        return LayoutService;
    }());
    LayoutService.decorators = [
        { type: core.Injectable }
    ];
    LayoutService.ctorParameters = function () { return [
        { type: router.Router }
    ]; };

    var LayoutConfigToken = new core.InjectionToken('layoutConfig');
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

    var LayoutModule = /** @class */ (function () {
        function LayoutModule(parentModule) {
            if (parentModule) {
                throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
            }
        }
        LayoutModule.forRoot = function (layoutConfig) {
            return {
                ngModule: LayoutModule,
                providers: __spread(layoutProvider(layoutConfig), [LayoutService])
            };
        };
        return LayoutModule;
    }());
    LayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, router.RouterModule],
                    exports: [ContentModule, FooterModule, HeaderModule, SidebarLeftModule, SidebarRightModule, WrapperModule],
                    providers: [RoutingService, WrapperService, SidebarRightService, HeaderService, FooterService]
                },] }
    ];
    LayoutModule.ctorParameters = function () { return [
        { type: LayoutModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
    ]; };

    var colorsAliases = [
        'default',
        'primary',
        'danger',
        'warning',
        'info',
        'success'
    ];
    var colors = {
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

    var ColorService = /** @class */ (function () {
        function ColorService(renderer2, elementRef) {
            this.renderer2 = renderer2;
            this.elementRef = elementRef;
        }
        ColorService.prototype.setBackgroundColor = function (color, condition, property, prefix) {
            if (color && condition) {
                this.resetBackgroundColor();
                if (colors.hasOwnProperty(color)) {
                    var knownColor = colors[color];
                    this.renderer2.addClass(this.elementRef.nativeElement, 'bg-color');
                    this.currentBackgroundStyle = { property: property, color: knownColor };
                    this.renderer2.setStyle(this.elementRef.nativeElement, property, knownColor);
                }
                else {
                    this.renderer2.removeClass(this.elementRef.nativeElement, 'bg-color');
                    if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
                        this.currentBackgroundStyle = { property: property, color: color };
                        this.renderer2.setStyle(this.elementRef.nativeElement, property, color);
                    }
                    else if (colorsAliases.indexOf(color) !== -1) {
                        this.currentBackgroundClass = prefix ? prefix + "-" + color : color;
                        this.renderer2.addClass(this.elementRef.nativeElement, this.currentBackgroundClass);
                    }
                }
            }
        };
        ColorService.prototype.resetBackgroundColor = function () {
            if (this.currentBackgroundStyle) {
                this.renderer2.removeStyle(this.elementRef.nativeElement, this.currentBackgroundStyle.property, this.currentBackgroundStyle.color);
            }
            else if (this.currentBackgroundClass) {
                this.renderer2.removeClass(this.elementRef.nativeElement, this.currentBackgroundClass);
            }
        };
        ColorService.prototype.setFontColor = function (color) {
            this.resetFontColor();
            if (color) {
                if (color.startsWith('#') || color.startsWith('rgb')) {
                    this.currentFontStyle = color;
                    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
                }
                else {
                    this.currentFontClass = "text-" + color;
                    this.renderer2.addClass(this.elementRef.nativeElement, this.currentFontClass);
                }
            }
        };
        ColorService.prototype.resetFontColor = function () {
            if (this.currentFontStyle) {
                this.renderer2.removeStyle(this.elementRef.nativeElement, 'color', this.currentFontStyle);
            }
            else if (this.currentFontClass) {
                this.renderer2.removeClass(this.elementRef.nativeElement, this.currentFontClass);
            }
        };
        return ColorService;
    }());
    ColorService.decorators = [
        { type: core.Injectable }
    ];
    ColorService.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };

    var BackgroundColorDirective = /** @class */ (function () {
        function BackgroundColorDirective(elementRef, renderer2, colorService) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.colorService = colorService;
            // TODO: ADD @Required decorator
            this.condition = true;
        }
        Object.defineProperty(BackgroundColorDirective.prototype, "setPrefix", {
            set: function (prefix) {
                this.prefix = prefix;
                this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BackgroundColorDirective.prototype, "setColor", {
            set: function (color) {
                if (color) {
                    this.color = color;
                    this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
                }
            },
            enumerable: false,
            configurable: true
        });
        return BackgroundColorDirective;
    }());
    BackgroundColorDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkColor]',
                    providers: [ColorService]
                },] }
    ];
    BackgroundColorDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: ColorService }
    ]; };
    BackgroundColorDirective.propDecorators = {
        condition: [{ type: core.Input, args: ['mkColorCondition',] }],
        setPrefix: [{ type: core.Input, args: ['mkColorPrefix',] }],
        property: [{ type: core.Input, args: ['mkColorProperty',] }],
        setColor: [{ type: core.Input, args: ['mkColor',] }]
    };
    var ColorDirective = /** @class */ (function () {
        function ColorDirective(elementRef, renderer2, colorService) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.colorService = colorService;
        }
        Object.defineProperty(ColorDirective.prototype, "color", {
            set: function (color) {
                this.colorService.setFontColor(color);
            },
            enumerable: false,
            configurable: true
        });
        return ColorDirective;
    }());
    ColorDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkFontColor]',
                    providers: [ColorService]
                },] }
    ];
    ColorDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: ColorService }
    ]; };
    ColorDirective.propDecorators = {
        color: [{ type: core.Input, args: ['mkFontColor',] }]
    };

    var ColorModule = /** @class */ (function () {
        function ColorModule() {
        }
        return ColorModule;
    }());
    ColorModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [BackgroundColorDirective, ColorDirective],
                    declarations: [BackgroundColorDirective, ColorDirective]
                },] }
    ];

    var AccordionToggleDirective = /** @class */ (function () {
        function AccordionToggleDirective(elementRef) {
            this.elementRef = elementRef;
        }
        return AccordionToggleDirective;
    }());
    AccordionToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkAccordionToggle]'
                },] }
    ];
    AccordionToggleDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    AccordionToggleDirective.propDecorators = {
        accordionComponent: [{ type: core.Input, args: ['mkAccordionToggle',] }]
    };

    var AccordionHeaderComponent = /** @class */ (function () {
        function AccordionHeaderComponent() {
        }
        return AccordionHeaderComponent;
    }());
    AccordionHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-accordion-header',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    AccordionHeaderComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var AccordionContentComponent = /** @class */ (function () {
        function AccordionContentComponent() {
        }
        return AccordionContentComponent;
    }());
    AccordionContentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-accordion-content',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    AccordionContentComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent() {
            this.contentStyleClass = 'box-body';
            this.headerStyleClass = 'box-header with-border';
            this.isCollapsing = false;
            this.isCollapsed = false;
            this.index = 0;
        }
        AccordionComponent.prototype.ngOnInit = function () {
            this.headerStyleColor = this.headerColor;
        };
        AccordionComponent.prototype.ngAfterViewInit = function () {
            if (!this.header && !this.accordionHeaderComponent) {
                throw new Error('Attribute "header" OR Component "mk-accordion-header" is required for component "mk-accordion"');
            }
        };
        return AccordionComponent;
    }());
    AccordionComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-accordion',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
                },] }
    ];
    AccordionComponent.propDecorators = {
        borderColor: [{ type: core.Input }],
        contentColor: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        header: [{ type: core.Input }],
        headerColor: [{ type: core.Input }],
        headerColorHover: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        accordionHeaderComponent: [{ type: core.ContentChild, args: [AccordionHeaderComponent,] }],
        accordionContentComponent: [{ type: core.ContentChild, args: [AccordionContentComponent,] }],
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var AccordionGroupComponent = /** @class */ (function () {
        function AccordionGroupComponent(changeDetectorRef, ngZone, renderer2) {
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.renderer2 = renderer2;
            this.isMultiple = false;
            this.styleClass = 'box-group';
            this.collapseStart = new core.EventEmitter();
            this.collapseDone = new core.EventEmitter();
            this.activeIndex = [0];
            this.listeners = [];
            // @TODO change types for subscriptions to all files
            this.subscriptions = [];
        }
        Object.defineProperty(AccordionGroupComponent.prototype, "_activeIndex", {
            set: function (value) {
                this.activeIndex = value instanceof Array ? value : [value];
            },
            enumerable: false,
            configurable: true
        });
        AccordionGroupComponent.headerMouseLeave = function (accordion) {
            accordion.headerStyleColor = accordion.headerColor;
        };
        AccordionGroupComponent.headerMouseEnter = function (accordion) {
            if (accordion.headerColorHover) {
                accordion.headerStyleColor = accordion.headerColorHover;
            }
        };
        AccordionGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.setAccordionsIndex();
            this.updateAccordionIsCollapsed();
            this.subscriptions.push(this.accordionComponents.changes.subscribe(function () {
                _this.setAccordionsIndex();
            }));
        };
        AccordionGroupComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.setAccordionsToggle();
            this.subscriptions.push(this.accordionToggleDirectives.changes.subscribe(function () {
                _this.setAccordionsToggle();
            }));
        };
        AccordionGroupComponent.prototype.ngOnChanges = function (changes) {
            if (!changes._activeIndex.firstChange) {
                this.updateAccordionIsCollapsed();
            }
        };
        AccordionGroupComponent.prototype.ngOnDestroy = function () {
            removeListeners(this.listeners);
            removeSubscriptions(this.subscriptions);
        };
        AccordionGroupComponent.prototype.toggleAccordion = function (event, toggleIndex) {
            event.preventDefault();
            var indexOf = this.activeIndex.indexOf(toggleIndex);
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
        };
        AccordionGroupComponent.prototype.onCollapseStart = function (event, accordion) {
            accordion.isCollapsing = true;
            this.collapseStart.emit({ animationEvent: event, index: accordion.index });
        };
        AccordionGroupComponent.prototype.onCollapseDone = function (event, accordion) {
            accordion.isCollapsing = false;
            this.collapseDone.emit({ animationEvent: event, index: accordion.index });
        };
        AccordionGroupComponent.prototype.setAccordionsIndex = function () {
            this.accordionComponents.forEach(function (accordion, index) {
                accordion.index = index;
            });
        };
        AccordionGroupComponent.prototype.setAccordionsToggle = function () {
            var _this = this;
            this.listeners = removeListeners(this.listeners);
            this.ngZone.runOutsideAngular(function () {
                _this.accordionToggleDirectives.forEach(function (accordionToggle) {
                    _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'click', function (event) {
                        _this.toggleAccordion(event, accordionToggle.accordionComponent.index);
                        _this.changeDetectorRef.detectChanges();
                    }));
                    _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseenter', function () {
                        AccordionGroupComponent.headerMouseEnter(accordionToggle.accordionComponent);
                        _this.changeDetectorRef.detectChanges();
                    }));
                    _this.listeners.push(_this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseleave', function () {
                        AccordionGroupComponent.headerMouseLeave(accordionToggle.accordionComponent);
                        _this.changeDetectorRef.detectChanges();
                    }));
                });
            });
        };
        AccordionGroupComponent.prototype.updateAccordionIsCollapsed = function () {
            var _this = this;
            this.accordionComponents.forEach(function (accordion, index) {
                accordion.isCollapsed = _this.activeIndex.indexOf(index) === -1;
            });
        };
        return AccordionGroupComponent;
    }());
    AccordionGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-accordion-group',
                    template: "<div [ngClass]=\"styleClass\">\n  <div *ngFor=\"let accordion of accordionComponents\" class=\"panel box\" [mkColor]=\"accordion.borderColor\" mkColorProperty=\"border-top-color\" mkColorPrefix=\"box\">\n    <div [ngClass]=\"accordion.headerStyleClass\" [class.no-border]=\"accordion.isCollapsed && !accordion.isCollapsing\">\n      <h4 class=\"box-title\">\n        <a [mkAccordionToggle]=\"accordion\" href=\"#\" [mkFontColor]=\"accordion.headerStyleColor\" [class.collapsed]=\"accordion.isCollapsed\">\n          {{accordion.header}}\n          <ng-template *ngIf=\"!accordion.header && accordion.accordionHeaderComponent\" [ngTemplateOutlet]=\"accordion.accordionHeaderComponent.templateRef\"></ng-template>\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\" [mkCollapseAnimation]=\"accordion.isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event, accordion)\" (mkCollapseAnimation.done)=\"onCollapseDone($event, accordion)\">\n      <div [ngClass]=\"accordion.contentStyleClass\" [mkFontColor]=\"accordion.contentColor\">\n        <ng-template *ngIf=\"!accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.templateRef\"></ng-template>\n        <ng-template *ngIf=\"accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.accordionContentComponent.templateRef\"></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"
                },] }
    ];
    AccordionGroupComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    AccordionGroupComponent.propDecorators = {
        _activeIndex: [{ type: core.Input, args: ['activeIndex',] }],
        isMultiple: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        collapseStart: [{ type: core.Output }],
        collapseDone: [{ type: core.Output }],
        accordionComponents: [{ type: core.ContentChildren, args: [AccordionComponent,] }],
        accordionToggleDirectives: [{ type: core.ViewChildren, args: [AccordionToggleDirective,] }]
    };

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        return AccordionModule;
    }());
    AccordionModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, AnimationsModule, ColorModule],
                    exports: [AccordionHeaderComponent, AccordionContentComponent, AccordionComponent, AccordionGroupComponent],
                    declarations: [AccordionToggleDirective, AccordionHeaderComponent,
                        AccordionContentComponent, AccordionComponent, AccordionGroupComponent]
                },] }
    ];

    var AlertComponent = /** @class */ (function () {
        function AlertComponent(changeDetectorRef, ngZone, renderer2, viewContainerRef) {
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.renderer2 = renderer2;
            this.viewContainerRef = viewContainerRef;
            this.backgroundColor = 'danger';
            this.styleClass = '';
            this.collapseStart = new core.EventEmitter();
            this.collapseDone = new core.EventEmitter();
            this.dismissibleClass = 'alert-dismissible';
            this.isDismissible = true;
            this.remove = false;
            this.removed = false;
            this.type = 'alert';
            this.listeners = [];
        }
        Object.defineProperty(AlertComponent.prototype, "callout", {
            set: function (value) {
                this.type = value ? 'callout' : 'alert';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AlertComponent.prototype, "_isDismissible", {
            set: function (value) {
                this.isDismissible = value;
                if (value) {
                    this.dismissibleClass = this.type + "-dismissible";
                }
                else {
                    this.dismissibleClass = '';
                }
            },
            enumerable: false,
            configurable: true
        });
        AlertComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                if (_this.dismissOnTimeout) {
                    setTimeout(function () {
                        if (!_this.changeDetectorRef.destroyed) {
                            _this.remove = true;
                            _this.changeDetectorRef.detectChanges();
                        }
                    }, _this.dismissOnTimeout);
                }
                if (_this.removeButtonElement) {
                    _this.listeners.push(_this.renderer2.listen(_this.removeButtonElement.nativeElement, 'click', function () {
                        _this.remove = true;
                        _this.changeDetectorRef.detectChanges();
                    }));
                }
            });
        };
        AlertComponent.prototype.ngOnDestroy = function () {
            removeListeners(this.listeners);
        };
        AlertComponent.prototype.onCollapseStart = function (event) {
            this.collapseStart.emit(event);
        };
        AlertComponent.prototype.onCollapseDone = function (event) {
            if (event.toState === '1') {
                this.listeners = removeListeners(this.listeners);
                this.removed = true;
                this.viewContainerRef.clear();
                this.changeDetectorRef.detectChanges();
            }
            this.collapseDone.emit(event);
        };
        return AlertComponent;
    }());
    AlertComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-alert',
                    template: "<div *ngIf=\"!removed\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n  <div [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\" [mkColorPrefix]=\"type\" [mkFontColor]=\"color\" [ngClass]=\"[styleClass, dismissibleClass, type]\">\n    <button *ngIf=\"isDismissible\" type=\"button\" class=\"close\" #removeButtonElement>&times;</button>\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".callout-dismissable,.callout-dismissible{padding-right:35px}.callout-dismissable .close,.callout-dismissible .close{color:inherit;position:relative;right:-21px;top:-2px}.callout .close{color:#000;filter:alpha(opacity=20);opacity:.2}.callout .icon{margin-right:10px}"]
                },] }
    ];
    AlertComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.Renderer2 },
        { type: core.ViewContainerRef }
    ]; };
    AlertComponent.propDecorators = {
        backgroundColor: [{ type: core.Input }],
        callout: [{ type: core.Input }],
        color: [{ type: core.Input }],
        dismissOnTimeout: [{ type: core.Input }],
        _isDismissible: [{ type: core.Input, args: ['isDismissible',] }],
        styleClass: [{ type: core.Input }],
        collapseStart: [{ type: core.Output }],
        collapseDone: [{ type: core.Output }],
        removeButtonElement: [{ type: core.ViewChild, args: ['removeButtonElement',] }]
    };

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, AnimationsModule, ColorModule],
                    exports: [AlertComponent],
                    declarations: [AlertComponent]
                },] }
    ];

    var BoxContentDirective = /** @class */ (function () {
        function BoxContentDirective() {
        }
        return BoxContentDirective;
    }());
    BoxContentDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-content'
                },] }
    ];
    var BoxFooterDirective = /** @class */ (function () {
        function BoxFooterDirective() {
        }
        return BoxFooterDirective;
    }());
    BoxFooterDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-footer'
                },] }
    ];
    var BoxToolsDirective = /** @class */ (function () {
        function BoxToolsDirective() {
        }
        return BoxToolsDirective;
    }());
    BoxToolsDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-tools'
                },] }
    ];
    var BoxHeaderDirective = /** @class */ (function () {
        function BoxHeaderDirective() {
        }
        return BoxHeaderDirective;
    }());
    BoxHeaderDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-header'
                },] }
    ];

    var BoxComponent = /** @class */ (function () {
        function BoxComponent(changeDetectorRef, ngZone, renderer2) {
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
            this.collapseDone = new core.EventEmitter();
            this.collapseStart = new core.EventEmitter();
            this.isCollapsing = false;
            this.remove = false;
            this.removed = false;
            this.listeners = [];
        }
        BoxComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                if (_this.toggleButtonElement) {
                    _this.listeners.push(_this.renderer2.listen(_this.toggleButtonElement.nativeElement, 'click', function () {
                        _this.isCollapsed = !_this.isCollapsed;
                        _this.changeDetectorRef.detectChanges();
                    }));
                }
                if (_this.removeButtonElement) {
                    _this.listeners.push(_this.renderer2.listen(_this.removeButtonElement.nativeElement, 'click', function () {
                        _this.remove = true;
                        _this.changeDetectorRef.detectChanges();
                    }));
                }
            });
        };
        BoxComponent.prototype.ngOnDestroy = function () {
            removeListeners(this.listeners);
        };
        BoxComponent.prototype.removedDone = function (event) {
            if (event.toState === '1') {
                this.removed = true;
            }
        };
        BoxComponent.prototype.onCollapseStart = function (event) {
            if (event.fromState !== 'void') {
                this.isCollapsing = true;
                this.collapseStart.emit(event);
            }
        };
        BoxComponent.prototype.onCollapseDone = function (event) {
            if (event.fromState !== 'void') {
                this.isCollapsing = false;
                this.collapseDone.emit(event);
            }
        };
        return BoxComponent;
    }());
    BoxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-box',
                    template: "<div *ngIf=\"!removed\" [mkColor]=\"boxColor\" mkColorProperty=\"border-color\" mkColorPrefix=\"box\" [ngClass]=\"styleClass\" [class.collapsed-box]=\"isCollapsed && !isCollapsing\" [class.box-solid]=\"isSolid\" [mkCollapseAnimation]=\"remove\" (mkCollapseAnimation.done)=\"removedDone($event)\">\n  <div *ngIf=\"header || boxHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkColor]=\"boxColor\" [mkColorCondition]=\"isSolid\" mkColorProperty=\"background-color\" [class.with-border]=\"headerBorder\">\n    <h3 class=\"box-title\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </h3>\n    <div class=\"box-tools pull-right\">\n      <ng-content select=\"mk-box-tools\"></ng-content>\n      <button *ngIf=\"isCollapsable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #toggleButtonElement>\n        <i class=\"fa\" [ngClass]=\"{'fa-plus': isCollapsed, 'fa-minus': !isCollapsed}\"></i>\n      </button>\n      <button *ngIf=\"isRemovable\" type=\"button\" [ngClass]=\"buttonsStyleClass\" #removeButtonElement>\n        <i class=\"fa fa-times\"></i>\n      </button>\n    </div>\n  </div>\n  <div [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n    <div class=\"box-body\">\n      <ng-container *ngIf=\"boxHeaderDirective || boxContentDirective || boxFooterDirective || boxToolsDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </div>\n    <div *ngIf=\"footer || boxFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </div>\n  </div>\n  <div *ngIf=\"isLoading\" class=\"overlay\">\n    <i [ngClass]=\"loadingStyleClass\" [mkFontColor]=\"loadingColor\"></i>\n  </div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".box.collapsed-box .box-body,.box.collapsed-box .box-footer{display:inherit}.box-solid{border:1px solid}.box-body{background-color:#fff}.box.box-solid.bg-color>.box-header{color:#fff}"]
                },] }
    ];
    BoxComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    BoxComponent.propDecorators = {
        boxColor: [{ type: core.Input }],
        buttonsStyleClass: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        contentColor: [{ type: core.Input }],
        footer: [{ type: core.Input }],
        footerColor: [{ type: core.Input }],
        footerStyleClass: [{ type: core.Input }],
        header: [{ type: core.Input }],
        headerBorder: [{ type: core.Input }],
        headerColor: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        isCollapsable: [{ type: core.Input }],
        isCollapsed: [{ type: core.Input }],
        isLoading: [{ type: core.Input }],
        isRemovable: [{ type: core.Input }],
        isSolid: [{ type: core.Input }],
        loadingColor: [{ type: core.Input }],
        loadingStyleClass: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        collapseDone: [{ type: core.Output }],
        collapseStart: [{ type: core.Output }],
        boxHeaderDirective: [{ type: core.ContentChild, args: [BoxHeaderDirective,] }],
        boxFooterDirective: [{ type: core.ContentChild, args: [BoxFooterDirective,] }],
        boxContentDirective: [{ type: core.ContentChild, args: [BoxContentDirective,] }],
        boxToolsDirective: [{ type: core.ContentChild, args: [BoxToolsDirective,] }],
        toggleButtonElement: [{ type: core.ViewChild, args: ['toggleButtonElement',] }],
        removeButtonElement: [{ type: core.ViewChild, args: ['removeButtonElement',] }]
    };

    var BoxModule = /** @class */ (function () {
        function BoxModule() {
        }
        return BoxModule;
    }());
    BoxModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, AnimationsModule, ColorModule],
                    exports: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective],
                    declarations: [BoxComponent, BoxHeaderDirective, BoxContentDirective, BoxFooterDirective, BoxToolsDirective]
                },] }
    ];

    var BoxInfoContentDirective = /** @class */ (function () {
        function BoxInfoContentDirective() {
        }
        return BoxInfoContentDirective;
    }());
    BoxInfoContentDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-info-content'
                },] }
    ];
    var BoxInfoFooterDirective = /** @class */ (function () {
        function BoxInfoFooterDirective() {
        }
        return BoxInfoFooterDirective;
    }());
    BoxInfoFooterDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-info-footer'
                },] }
    ];
    var BoxInfoHeaderDirective = /** @class */ (function () {
        function BoxInfoHeaderDirective() {
        }
        return BoxInfoHeaderDirective;
    }());
    BoxInfoHeaderDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-info-header'
                },] }
    ];

    var BoxInfoComponent = /** @class */ (function () {
        function BoxInfoComponent() {
            this.contentStyleClass = 'info-box-number';
            this.footerStyleClass = 'progress-description';
            this.headerStyleClass = 'info-box-text';
            this.iconColor = '#fff';
            this.iconStyleClass = 'ion ion-bag';
            this.styleClass = 'info-box';
        }
        BoxInfoComponent.prototype.ngOnInit = function () {
            if (!this.backgroundColor) {
                this.progressBarBg = this.iconBackgroundColor;
            }
        };
        return BoxInfoComponent;
    }());
    BoxInfoComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-box-info',
                    template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <span class=\"info-box-icon\" [mkColor]=\"iconBackgroundColor\" mkColorProperty=\"background-color\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </span>\n  <div class=\"info-box-content\">\n    <span *ngIf=\"header || boxInfoHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </span>\n    <span [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxInfoHeaderDirective || boxInfoContentDirective || boxInfoFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </span>\n    <div *ngIf=\"progressWidth\" class=\"progress\">\n      <div class=\"progress-bar\" [mkColor]=\"progressBarBg\" mkColorProperty=\"background-color\" [style.width.%]=\"progressWidth\"></div>\n    </div>\n    <span *ngIf=\"footer || boxInfoFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </span>\n  </div>\n</div>\n",
                    styles: [".info-box.bg-color>.info-box-content{color:#fff}"]
                },] }
    ];
    BoxInfoComponent.propDecorators = {
        backgroundColor: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        contentColor: [{ type: core.Input }],
        footer: [{ type: core.Input }],
        footerColor: [{ type: core.Input }],
        footerStyleClass: [{ type: core.Input }],
        header: [{ type: core.Input }],
        headerColor: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        iconBackgroundColor: [{ type: core.Input }],
        iconColor: [{ type: core.Input }],
        iconStyleClass: [{ type: core.Input }],
        progressWidth: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        boxInfoHeaderDirective: [{ type: core.ContentChild, args: [BoxInfoHeaderDirective,] }],
        boxInfoFooterDirective: [{ type: core.ContentChild, args: [BoxInfoFooterDirective,] }],
        boxInfoContentDirective: [{ type: core.ContentChild, args: [BoxInfoContentDirective,] }]
    };

    var BoxInfoModule = /** @class */ (function () {
        function BoxInfoModule() {
        }
        return BoxInfoModule;
    }());
    BoxInfoModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, ColorModule],
                    exports: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective],
                    declarations: [BoxInfoComponent, BoxInfoHeaderDirective, BoxInfoContentDirective, BoxInfoFooterDirective]
                },] }
    ];

    var BoxSmallFooterDirective = /** @class */ (function () {
        function BoxSmallFooterDirective() {
        }
        return BoxSmallFooterDirective;
    }());
    BoxSmallFooterDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-small-footer'
                },] }
    ];
    var BoxSmallHeaderDirective = /** @class */ (function () {
        function BoxSmallHeaderDirective() {
        }
        return BoxSmallHeaderDirective;
    }());
    BoxSmallHeaderDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-small-header'
                },] }
    ];
    var BoxSmallContentDirective = /** @class */ (function () {
        function BoxSmallContentDirective() {
        }
        return BoxSmallContentDirective;
    }());
    BoxSmallContentDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-box-small-content'
                },] }
    ];

    var BoxSmallComponent = /** @class */ (function () {
        function BoxSmallComponent() {
            this.contentStyleClass = 'small-box-content';
            this.footerStyleClass = 'small-box-footer';
            this.headerStyleClass = 'small-box-header';
            this.iconStyleClass = 'ion ion-bag';
            this.styleClass = 'small-box';
        }
        return BoxSmallComponent;
    }());
    BoxSmallComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-box-small',
                    template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <div class=\"inner\">\n    <h3 *ngIf=\"header || boxSmallHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-small-header\"></ng-content>\n    </h3>\n    <p [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxSmallHeaderDirective || boxSmallContentDirective || boxSmallFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-small-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </p>\n  </div>\n  <div *ngIf=\"iconStyleClass\" class=\"icon\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </div>\n  <span *ngIf=\"footer || boxSmallFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n    {{footer}}\n    <ng-content select=\"mk-box-small-footer\"></ng-content>\n  </span>\n</div>\n",
                    styles: [".small-box.bg-color{color:#fff}/deep/ .small-box-footer:hover{cursor:pointer}/deep/ .small-box-footer a{color:hsla(0,0%,100%,.8)}/deep/ .small-box-footer:hover a{color:#fff}"]
                },] }
    ];
    BoxSmallComponent.propDecorators = {
        backgroundColor: [{ type: core.Input }],
        contentColor: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        footer: [{ type: core.Input }],
        footerColor: [{ type: core.Input }],
        footerStyleClass: [{ type: core.Input }],
        header: [{ type: core.Input }],
        headerColor: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        iconColor: [{ type: core.Input }],
        iconStyleClass: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        boxSmallHeaderDirective: [{ type: core.ContentChild, args: [BoxSmallHeaderDirective,] }],
        boxSmallFooterDirective: [{ type: core.ContentChild, args: [BoxSmallFooterDirective,] }],
        boxSmallContentDirective: [{ type: core.ContentChild, args: [BoxSmallContentDirective,] }]
    };

    var BoxSmallModule = /** @class */ (function () {
        function BoxSmallModule() {
        }
        return BoxSmallModule;
    }());
    BoxSmallModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, ColorModule],
                    exports: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective],
                    declarations: [BoxSmallComponent, BoxSmallHeaderDirective, BoxSmallContentDirective, BoxSmallFooterDirective]
                },] }
    ];

    var DropdownToggleComponent = /** @class */ (function () {
        function DropdownToggleComponent() {
        }
        return DropdownToggleComponent;
    }());
    DropdownToggleComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-dropdown-toggle',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    DropdownToggleComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }],
        toggleElement: [{ type: core.ContentChild, args: ['toggleElement',] }]
    };
    var DropdownMenuComponent = /** @class */ (function () {
        function DropdownMenuComponent() {
        }
        return DropdownMenuComponent;
    }());
    DropdownMenuComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-dropdown-menu',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    DropdownMenuComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent(changeDetectorRef, elementRef, ngZone, renderer2) {
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
            this.collapseStart = new core.EventEmitter();
            this.collapseDone = new core.EventEmitter();
            this.listeners = [];
        }
        DropdownComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var toggleNativeElement = this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement ?
                this.dropdownToggleComponent.toggleElement.nativeElement : this.toggleElement ?
                this.toggleElement : this.defaultToggleElement ?
                this.defaultToggleElement.nativeElement : null;
            if (toggleNativeElement) {
                this.ngZone.runOutsideAngular(function () {
                    _this.listeners.push(_this.renderer2.listen(toggleNativeElement, 'click', function (event) {
                        _this.toggleDropdown(event);
                        _this.changeDetectorRef.detectChanges();
                    }));
                });
            }
        };
        DropdownComponent.prototype.ngOnDestroy = function () {
            this.unBindDocumentClickListener();
            removeListeners(this.listeners);
        };
        DropdownComponent.prototype.toggleDropdown = function (event) {
            var _this = this;
            event.preventDefault();
            this.isCollapsed = !this.isCollapsed;
            if (!this.isCollapsed) {
                this.ngZone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.bindDocumentClickListener();
                    });
                });
            }
            else {
                this.unBindDocumentClickListener();
            }
        };
        DropdownComponent.prototype.onCollapseStart = function (event) {
            this.collapseStart.emit(event);
        };
        DropdownComponent.prototype.onCollapseDone = function (event) {
            this.collapseStart.emit(event);
        };
        DropdownComponent.prototype.bindDocumentClickListener = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                _this.documentClickListener = _this.renderer2.listen('document', 'click', function () {
                    if (!_this.isCollapsed) {
                        _this.isCollapsed = true;
                        _this.unBindDocumentClickListener();
                        _this.changeDetectorRef.detectChanges();
                    }
                });
            });
        };
        DropdownComponent.prototype.unBindDocumentClickListener = function () {
            if (this.documentClickListener) {
                this.documentClickListener();
            }
        };
        return DropdownComponent;
    }());
    DropdownComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-dropdown, [mk-dropdown]',
                    template: "<ng-template #innerTemplate>\n  <ng-container *ngIf=\"dropdownToggleComponent && dropdownToggleComponent.toggleElement; else noToggleElement\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n  <ng-template #noToggleElement>\n    <button *ngIf=\"toggleText || dropdownToggleComponent\" [mkColor]=\"buttonBackgroundColor\" mkColorProperty=\"background-color\" mkColorPrefix=\"btn\" [ngClass]=\"buttonStyleClass\" #toggleElement>\n      {{toggleText}}\n      <ng-container *ngIf=\"dropdownToggleComponent\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n    </button>\n  </ng-template>\n  <ul [ngClass]=\"contentStyleClass\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n    <ng-container *ngIf=\"dropdownMenuComponent; else noDropdownMenuComponent\" [ngTemplateOutlet]=\"dropdownMenuComponent.templateRef\"></ng-container>\n    <ng-template #noDropdownMenuComponent>\n      <ng-content></ng-content>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<div *ngIf=\"isWrapper; else noWrapper\" [ngClass]=\"styleClass\">\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</div>\n\n<ng-template #noWrapper>\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</ng-template>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".dropdown-menu{display:block}.dropdown-menu.collapsing:not(.un-collapse){padding-bottom:0;padding-top:0;transition-property:height,padding-top,padding-bottom}"]
                },] }
    ];
    DropdownComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    DropdownComponent.propDecorators = {
        buttonStyleClass: [{ type: core.Input }],
        buttonBackgroundColor: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        isCollapsed: [{ type: core.Input }],
        isWrapper: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        toggleElement: [{ type: core.Input }],
        toggleText: [{ type: core.Input }],
        collapseStart: [{ type: core.Output }],
        collapseDone: [{ type: core.Output }],
        dropdownToggleComponent: [{ type: core.ContentChild, args: [DropdownToggleComponent,] }],
        dropdownMenuComponent: [{ type: core.ContentChild, args: [DropdownMenuComponent,] }],
        defaultToggleElement: [{ type: core.ViewChild, args: ['toggleElement',] }]
    };

    var DropdownModule = /** @class */ (function () {
        function DropdownModule() {
        }
        return DropdownModule;
    }());
    DropdownModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, AnimationsModule, ColorModule],
                    exports: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent],
                    declarations: [DropdownComponent, DropdownToggleComponent, DropdownMenuComponent]
                },] }
    ];

    var ClassService = /** @class */ (function () {
        function ClassService(elementRef, renderer2) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.currentClasses = [];
        }
        ClassService.prototype.applyClasses = function (cssClasses) {
            var _this = this;
            if (typeof cssClasses === 'string') {
                cssClasses = cssClasses.split(' ');
            }
            // Remove only classes that are not in cssClasses
            var classesToRemove = this.currentClasses.filter(function (x) { return cssClasses.indexOf(x) === -1; });
            classesToRemove.forEach(function (cssClasse) {
                if (cssClasse) {
                    _this.renderer2.removeClass(_this.elementRef.nativeElement, cssClasse);
                }
            });
            // Add only classes that are not in currentClasses
            var classesToAdd = cssClasses.filter(function (x) { return _this.currentClasses.indexOf(x) === -1; });
            classesToAdd.forEach(function (cssClasse) {
                if (cssClasse) {
                    _this.renderer2.addClass(_this.elementRef.nativeElement, cssClasse);
                }
            });
            // Update current classes for future updates
            this.currentClasses = __spread(cssClasses);
        };
        return ClassService;
    }());
    ClassService.decorators = [
        { type: core.Injectable }
    ];
    ClassService.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 }
    ]; };

    // @TODO onFocus Color
    var InputTextDirective = /** @class */ (function () {
        function InputTextDirective(elementRef, renderer2, ngControl, colorService, classService) {
            this.elementRef = elementRef;
            this.renderer2 = renderer2;
            this.ngControl = ngControl;
            this.colorService = colorService;
            this.classService = classService;
            this.defaultClass = 'form-control';
            this.isSetClass = false;
            this.onKeyUp = new rxjs.Subject();
            this.onKeyup = this.onKeyUp.asObservable();
        }
        Object.defineProperty(InputTextDirective.prototype, "borderColor", {
            set: function (color) {
                this.colorService.setBackgroundColor(color, true, 'border-color', '');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputTextDirective.prototype, "class", {
            set: function (className) {
                this.isSetClass = true;
                this.classService.applyClasses(className);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InputTextDirective.prototype, "color", {
            set: function (color) {
                this.colorService.setFontColor(color);
            },
            enumerable: false,
            configurable: true
        });
        InputTextDirective.prototype.keyUpListener = function () {
            this.onKeyUp.next(this.ngControl);
        };
        InputTextDirective.prototype.ngOnInit = function () {
            if (!this.isSetClass) {
                this.classService.applyClasses(this.defaultClass);
            }
        };
        return InputTextDirective;
    }());
    InputTextDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkInputText]',
                    providers: [ColorService, ClassService]
                },] }
    ];
    InputTextDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: core.Renderer2 },
        { type: forms.NgControl },
        { type: ColorService },
        { type: ClassService }
    ]; };
    InputTextDirective.propDecorators = {
        borderColor: [{ type: core.Input }],
        class: [{ type: core.Input }],
        color: [{ type: core.Input }],
        keyUpListener: [{ type: core.HostListener, args: ['keyup',] }]
    };

    var InputTextModule = /** @class */ (function () {
        function InputTextModule() {
        }
        return InputTextModule;
    }());
    InputTextModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        ColorModule,
                        forms.FormsModule
                    ],
                    exports: [InputTextDirective],
                    declarations: [InputTextDirective]
                },] }
    ];

    var InputGroupLabelDirective = /** @class */ (function () {
        function InputGroupLabelDirective() {
        }
        return InputGroupLabelDirective;
    }());
    InputGroupLabelDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-input-group-label'
                },] }
    ];
    var InputGroupAddonLeftDirective = /** @class */ (function () {
        function InputGroupAddonLeftDirective() {
        }
        return InputGroupAddonLeftDirective;
    }());
    InputGroupAddonLeftDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-input-group-addon-left'
                },] }
    ];
    var InputGroupAddonRightDirective = /** @class */ (function () {
        function InputGroupAddonRightDirective() {
        }
        return InputGroupAddonRightDirective;
    }());
    InputGroupAddonRightDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-input-group-addon-right'
                },] }
    ];
    var InputGroupContentDirective = /** @class */ (function () {
        function InputGroupContentDirective() {
        }
        return InputGroupContentDirective;
    }());
    InputGroupContentDirective.decorators = [
        { type: core.Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'mk-input-group-content'
                },] }
    ];

    var InputGroupComponent = /** @class */ (function () {
        function InputGroupComponent() {
            this.inputColor = 'default';
            this.inputErrorColor = 'danger';
            this.inputValidColor = 'success';
            this.wrapperClasses = 'form-group';
            this.subscriptions = [];
        }
        InputGroupComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.inputTextDirective) {
                this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe(function (value) {
                    if (value.invalid) {
                        _this.currentColor = _this.inputErrorColor;
                        _this.currentFontColor = _this.inputErrorFontColor;
                    }
                    else if (!value.invalid) {
                        _this.currentColor = _this.inputValidColor;
                        _this.currentFontColor = _this.inputValidFontColor;
                    }
                    else {
                        _this.currentColor = _this.inputColor;
                        _this.currentFontColor = _this.inputFontColor;
                    }
                }));
            }
        };
        InputGroupComponent.prototype.ngOnDestroy = function () {
            removeSubscriptions(this.subscriptions);
        };
        return InputGroupComponent;
    }());
    InputGroupComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-input-group',
                    template: "<div [ngClass]=\"wrapperClasses\" [mkColor]=\"currentColor || inputColor\" mkColorPrefix=\"has\">\n  <label *ngIf=\"label || inputGroupLabelDirective\">\n    {{label}}\n    <ng-content select=\"mk-input-group-label\"></ng-content>\n  </label>\n  <div *ngIf=\"addonLeft || inputGroupAddonLeftDirective || addonRight || inputGroupAddonRightDirective; else noAddon\" class=\"input-group\">\n    <span *ngIf=\"addonLeft || inputGroupAddonLeftDirective\" class=\"input-group-addon\">\n      {{addonLeft}}\n      <ng-content select=\"mk-input-group-addon-left\"></ng-content>\n    </span>\n    <ng-content select=\"mk-input-group-content\"></ng-content>\n    <span *ngIf=\"addonRight || inputGroupAddonRightDirective\" class=\"input-group-addon\">\n      {{addonRight}}\n      <ng-content select=\"mk-input-group-addon-right\"></ng-content>\n    </span>\n  </div>\n  <ng-template #noAddon><ng-content select=\"mk-input-group-content\"></ng-content></ng-template>\n</div>\n"
                },] }
    ];
    InputGroupComponent.propDecorators = {
        addonLeft: [{ type: core.Input }],
        addonRight: [{ type: core.Input }],
        inputColor: [{ type: core.Input }],
        inputFontColor: [{ type: core.Input }],
        inputErrorColor: [{ type: core.Input }],
        inputErrorFontColor: [{ type: core.Input }],
        inputValidColor: [{ type: core.Input }],
        inputValidFontColor: [{ type: core.Input }],
        label: [{ type: core.Input }],
        wrapperClasses: [{ type: core.Input }],
        inputGroupLabelDirective: [{ type: core.ContentChild, args: [InputGroupLabelDirective,] }],
        inputGroupAddonLeftDirective: [{ type: core.ContentChild, args: [InputGroupAddonLeftDirective,] }],
        inputGroupAddonRightDirective: [{ type: core.ContentChild, args: [InputGroupAddonRightDirective,] }],
        inputGroupContentDirective: [{ type: core.ContentChild, args: [InputGroupContentDirective,] }],
        inputTextDirective: [{ type: core.ContentChild, args: [InputTextDirective,] }]
    };

    var InputGroupModule = /** @class */ (function () {
        function InputGroupModule() {
        }
        return InputGroupModule;
    }());
    InputGroupModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        ColorModule,
                        forms.FormsModule
                    ],
                    exports: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                        InputGroupAddonRightDirective, InputGroupContentDirective],
                    declarations: [InputGroupComponent, InputGroupLabelDirective, InputGroupAddonLeftDirective,
                        InputGroupAddonRightDirective, InputGroupContentDirective]
                },] }
    ];

    var TabToggleDirective = /** @class */ (function () {
        function TabToggleDirective(elementRef) {
            this.elementRef = elementRef;
        }
        return TabToggleDirective;
    }());
    TabToggleDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[mkTabToggle]'
                },] }
    ];
    TabToggleDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    TabToggleDirective.propDecorators = {
        tabComponent: [{ type: core.Input, args: ['mkTabToggle',] }]
    };

    var TabHeaderComponent = /** @class */ (function () {
        function TabHeaderComponent() {
        }
        return TabHeaderComponent;
    }());
    TabHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-tab-header',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    TabHeaderComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var TabContentComponent = /** @class */ (function () {
        function TabContentComponent() {
        }
        return TabContentComponent;
    }());
    TabContentComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-tab-content',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    TabContentComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var TabComponent = /** @class */ (function () {
        function TabComponent() {
            this.isDisabled = false;
            this.isActive = false;
        }
        return TabComponent;
    }());
    TabComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-tab',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    TabComponent.propDecorators = {
        header: [{ type: core.Input }],
        isDisabled: [{ type: core.Input }],
        tabColor: [{ type: core.Input }],
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }],
        tabHeaderComponent: [{ type: core.ContentChild, args: [TabHeaderComponent,] }],
        tabContentComponent: [{ type: core.ContentChild, args: [TabContentComponent,] }]
    };
    var TabsHeaderComponent = /** @class */ (function () {
        function TabsHeaderComponent() {
        }
        return TabsHeaderComponent;
    }());
    TabsHeaderComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-tabs-header',
                    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    TabsHeaderComponent.propDecorators = {
        templateRef: [{ type: core.ViewChild, args: ['templateRef', { static: true },] }]
    };
    var TabsComponent = /** @class */ (function () {
        function TabsComponent(changeDetectorRef, ngZone, renderer2) {
            this.changeDetectorRef = changeDetectorRef;
            this.ngZone = ngZone;
            this.renderer2 = renderer2;
            this.headerStyleClass = 'header pull-left';
            this.navStyleClass = 'nav nav-tabs';
            this.contentStyleClass = 'tab-content';
            this.styleClass = 'nav-tabs-custom';
            this.closeTab = new core.EventEmitter();
            this.openTab = new core.EventEmitter();
            this.listeners = [];
            this.subscriptions = [];
        }
        Object.defineProperty(TabsComponent.prototype, "activeTabIndex", {
            set: function (index) {
                this.activatedTabIndex = index;
                this.changeDetectorRef.detectChanges();
            },
            enumerable: false,
            configurable: true
        });
        TabsComponent.prototype.ngAfterContentInit = function () {
            var _this = this;
            // Set tab index on load.
            this.setTabIndex();
            // Update tab index if tabs is updated.
            if (this.tabs) {
                this.subscriptions.push(this.tabs.changes.subscribe(function () {
                    _this.setTabIndex();
                }));
            }
            // Open tab on load.
            this.openTabIndex();
        };
        TabsComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // Set tab toggles on load.
            this.setTabsToggle();
            // Update tab toggles if tabs is updated.
            if (this.tabToggleDirectives) {
                this.subscriptions.push(this.tabToggleDirectives.changes.subscribe(function () {
                    _this.setTabsToggle();
                }));
            }
        };
        TabsComponent.prototype.ngOnChanges = function (changes) {
            if (changes.activeTabIndex) {
                this.openTabIndex();
            }
        };
        TabsComponent.prototype.ngOnDestroy = function () {
            removeListeners(this.listeners);
            removeSubscriptions(this.subscriptions);
        };
        TabsComponent.prototype.openTabIndex = function () {
            var _this = this;
            if (this.tabs) {
                this.tabs.forEach(function (tab) {
                    if (_this.activatedTabIndex === tab.index || (_this.activatedTabIndex === undefined && tab.index === 0)) {
                        tab.isActive = true;
                        _this.openTab.emit({ index: tab.index });
                        _this.changeDetectorRef.detectChanges();
                    }
                    else if (tab.isActive) {
                        tab.isActive = false;
                        _this.closeTab.emit({ index: tab.index });
                        _this.changeDetectorRef.detectChanges();
                    }
                });
            }
        };
        TabsComponent.prototype.onOpenTab = function (event, tabToOpen) {
            var _this = this;
            event.preventDefault();
            tabToOpen.isActive = true;
            this.openTab.emit({ event: event, index: tabToOpen.index });
            if (this.tabs) {
                this.tabs.forEach(function (tab) {
                    if (tab.isActive && tabToOpen !== tab) {
                        tab.isActive = false;
                        _this.closeTab.emit({ event: event, index: tab.index });
                    }
                });
            }
        };
        TabsComponent.prototype.setTabIndex = function () {
            if (this.tabs) {
                this.tabs.forEach(function (tab, index) {
                    tab.index = index;
                });
            }
            this.changeDetectorRef.detectChanges();
        };
        TabsComponent.prototype.setTabsToggle = function () {
            var _this = this;
            this.listeners = removeListeners(this.listeners);
            this.ngZone.runOutsideAngular(function () {
                var _a;
                (_a = _this.tabToggleDirectives) === null || _a === void 0 ? void 0 : _a.forEach(function (tabToggle) {
                    _this.listeners.push(_this.renderer2.listen(tabToggle.elementRef.nativeElement, 'click', function (event) {
                        _this.onOpenTab(event, tabToggle.tabComponent);
                        _this.changeDetectorRef.detectChanges();
                    }));
                });
            });
        };
        return TabsComponent;
    }());
    TabsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mk-tabs',
                    template: "<div [ngClass]=\"styleClass\">\n  <ul [ngClass]=\"navStyleClass\" [class.pull-right]=\"header || tabsHeaderComponent\">\n    <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.isActive\" [mkColor]=\"tab.tabColor || tabsColor\" mkColorProperty=\"border-top-color\">\n      <a *ngIf=\"!tab.isDisabled\" [mkTabToggle]=\"tab\" href=\"#\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </a>\n      <ng-template [ngIf]=\"tab.isDisabled\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </ng-template>\n    </li>\n    <li *ngIf=\"tabsHeaderComponent || header\" [ngClass]=\"headerStyleClass\">\n      {{header}}\n      <ng-template *ngIf=\"tabsHeaderComponent\" [ngTemplateOutlet]=\"tabsHeaderComponent.templateRef\"></ng-template>\n    </li>\n  </ul>\n  <div [ngClass]=\"contentStyleClass\">\n    <div *ngFor=\"let tab of tabs\" class=\"tab-pane\" [class.active]=\"tab.isActive\">\n      <ng-template *ngIf=\"!tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.templateRef\"></ng-template>\n      <ng-template *ngIf=\"tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.tabContentComponent.templateRef\"></ng-template>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".nav-tabs-custom>.nav-tabs>li{border-top-width:0}.nav-tabs-custom>.nav-tabs>li.active{border-top-width:3px}"]
                },] }
    ];
    TabsComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.NgZone },
        { type: core.Renderer2 }
    ]; };
    TabsComponent.propDecorators = {
        activeTabIndex: [{ type: core.Input }],
        header: [{ type: core.Input }],
        headerStyleClass: [{ type: core.Input }],
        navStyleClass: [{ type: core.Input }],
        contentStyleClass: [{ type: core.Input }],
        styleClass: [{ type: core.Input }],
        tabsColor: [{ type: core.Input }],
        closeTab: [{ type: core.Output }],
        openTab: [{ type: core.Output }],
        tabsHeaderComponent: [{ type: core.ContentChild, args: [TabsHeaderComponent,] }],
        tabs: [{ type: core.ContentChildren, args: [TabComponent,] }],
        tabToggleDirectives: [{ type: core.ViewChildren, args: [TabToggleDirective,] }]
    };

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        return TabsModule;
    }());
    TabsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, ColorModule],
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

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionContentComponent = AccordionContentComponent;
    exports.AccordionGroupComponent = AccordionGroupComponent;
    exports.AccordionHeaderComponent = AccordionHeaderComponent;
    exports.AccordionModule = AccordionModule;
    exports.AccordionToggleDirective = AccordionToggleDirective;
    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;
    exports.AnimationsModule = AnimationsModule;
    exports.BackgroundColorDirective = BackgroundColorDirective;
    exports.BoxComponent = BoxComponent;
    exports.BoxContentDirective = BoxContentDirective;
    exports.BoxFooterDirective = BoxFooterDirective;
    exports.BoxHeaderDirective = BoxHeaderDirective;
    exports.BoxInfoComponent = BoxInfoComponent;
    exports.BoxInfoContentDirective = BoxInfoContentDirective;
    exports.BoxInfoFooterDirective = BoxInfoFooterDirective;
    exports.BoxInfoHeaderDirective = BoxInfoHeaderDirective;
    exports.BoxInfoModule = BoxInfoModule;
    exports.BoxModule = BoxModule;
    exports.BoxSmallComponent = BoxSmallComponent;
    exports.BoxSmallContentDirective = BoxSmallContentDirective;
    exports.BoxSmallFooterDirective = BoxSmallFooterDirective;
    exports.BoxSmallHeaderDirective = BoxSmallHeaderDirective;
    exports.BoxSmallModule = BoxSmallModule;
    exports.BoxToolsDirective = BoxToolsDirective;
    exports.BreadcrumbsComponent = BreadcrumbsComponent;
    exports.BreadcrumbsModule = BreadcrumbsModule;
    exports.CollapseAnimationDirective = CollapseAnimationDirective;
    exports.ColorDirective = ColorDirective;
    exports.ColorModule = ColorModule;
    exports.ContentComponent = ContentComponent;
    exports.ContentModule = ContentModule;
    exports.DropdownComponent = DropdownComponent;
    exports.DropdownMenuComponent = DropdownMenuComponent;
    exports.DropdownModule = DropdownModule;
    exports.DropdownToggleComponent = DropdownToggleComponent;
    exports.FooterComponent = FooterComponent;
    exports.FooterLeftComponent = FooterLeftComponent;
    exports.FooterModule = FooterModule;
    exports.FooterRightComponent = FooterRightComponent;
    exports.HeaderComponent = HeaderComponent;
    exports.HeaderLogoComponent = HeaderLogoComponent;
    exports.HeaderLogoMiniComponent = HeaderLogoMiniComponent;
    exports.HeaderModule = HeaderModule;
    exports.InputGroupAddonLeftDirective = InputGroupAddonLeftDirective;
    exports.InputGroupAddonRightDirective = InputGroupAddonRightDirective;
    exports.InputGroupComponent = InputGroupComponent;
    exports.InputGroupContentDirective = InputGroupContentDirective;
    exports.InputGroupLabelDirective = InputGroupLabelDirective;
    exports.InputGroupModule = InputGroupModule;
    exports.InputTextDirective = InputTextDirective;
    exports.InputTextModule = InputTextModule;
    exports.LayoutModule = LayoutModule;
    exports.LayoutService = LayoutService;
    exports.LayoutState = LayoutState;
    exports.LayoutStore = LayoutStore;
    exports.SidebarLeftComponent = SidebarLeftComponent;
    exports.SidebarLeftModule = SidebarLeftModule;
    exports.SidebarLeftToggleDirective = SidebarLeftToggleDirective;
    exports.SidebarRightComponent = SidebarRightComponent;
    exports.SidebarRightModule = SidebarRightModule;
    exports.TabComponent = TabComponent;
    exports.TabContentComponent = TabContentComponent;
    exports.TabHeaderComponent = TabHeaderComponent;
    exports.TabToggleDirective = TabToggleDirective;
    exports.TabsComponent = TabsComponent;
    exports.TabsHeaderComponent = TabsHeaderComponent;
    exports.TabsModule = TabsModule;
    exports.WrapperComponent = WrapperComponent;
    exports.WrapperModule = WrapperModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-admin-lte.umd.js.map

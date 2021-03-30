import { Injectable } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
export class RoutingService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL3NlcnZpY2VzL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBMEIsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBY3ZDLE1BQU0sT0FBTyxjQUFjO0lBSXpCLFlBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKakIsYUFBUSxHQUFHLElBQUksZUFBZSxDQUFvQixTQUFTLENBQUMsQ0FBQztRQUM3RCxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQTRCLFNBQVMsQ0FBQyxDQUFDO1FBS3hFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQTZCO1FBQ3BELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUE2Qjs7UUFDOUQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFlBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFdBQVcsMENBQUUsUUFBUSwwQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFD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Y29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBOYXZpZ2F0aW9uRW5kLCBQUklNQVJZX09VVExFVCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBQYXRoIHtcbiAgZGF0YTogb2JqZWN0O1xuICBwYXJhbXM6IG9iamVjdDtcbiAgdXJsOiBzdHJpbmcgfCBudWxsO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF0aHMgZXh0ZW5kcyBBcnJheTxQYXRoPiB7fVxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIHB1YmxpYyBvbkNoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGF0aHMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIHB1YmxpYyBldmVudHMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5hdmlnYXRpb25FbmQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZVVybChyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IHN0cmluZyB7XG4gICAgY29uc3QgdXJsID0gcm91dGUudXJsLm1hcCh1cmxTZWdtZW50ID0+IHVybFNlZ21lbnQudG9TdHJpbmcoKSkuam9pbignLycpO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpc0NoaWxkcmVuU2VsZlJvdXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgbGV0IHRlc3QgPSBmYWxzZTtcblxuICAgIHJvdXRlPy5yb3V0ZUNvbmZpZz8uY2hpbGRyZW4/LmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKGNoaWxkLnBhdGggPT09ICcnICYmIChjaGlsZC5jb21wb25lbnQgfHwgY2hpbGQubG9hZENoaWxkcmVuKSkge1xuICAgICAgICB0ZXN0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0ZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQnJlYWRjcnVtYihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgdXJsOiBzdHJpbmcpOiBQYXRoIHtcbiAgICBsZXQgaXNVcmwgPSB0cnVlO1xuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuLmxlbmd0aCAhPT0gMCAmJiByb3V0ZT8uZmlyc3RDaGlsZD8ucm91dGVDb25maWc/LnBhdGgpIHtcbiAgICAgIGlmICh1cmwgIT09ICcvJyAmJiAhcm91dGU/LnJvdXRlQ29uZmlnPy5sb2FkQ2hpbGRyZW5cbiAgICAgICAgJiYgIXJvdXRlPy5yb3V0ZUNvbmZpZz8uY29tcG9uZW50ICYmICFSb3V0aW5nU2VydmljZS5pc0NoaWxkcmVuU2VsZlJvdXRlKHJvdXRlKSkge1xuICAgICAgICBpc1VybCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiByb3V0ZS5kYXRhLFxuICAgICAgcGFyYW1zIDogcm91dGUucGFyYW1zLFxuICAgICAgdXJsOiBpc1VybCA/IHVybCA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUocm91dGVFdmVudCA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzQ3MzogZXZlbnQgbm90IGZpcmVkIGFueW1vcmUgb24gbG9hZCBmb3Igcm91dGVkIGNvbXBvbmVudC5cbiAgICAgIGlmIChyb3V0ZUV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5uZXh0KHJvdXRlRXZlbnQpO1xuICAgICAgICBsZXQgcm91dGUgPSB0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5yb290LnNuYXBzaG90O1xuICAgICAgICBsZXQgdG1wVXJsID0gJyc7XG4gICAgICAgIGxldCB1cmwgPSAnJztcbiAgICAgICAgbGV0IHJvb3RSb290ID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCBwYXRoczogUGF0aHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAocm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkIHx8IHJvdXRlO1xuICAgICAgICAgIHRtcFVybCA9IGAvJHtSb3V0aW5nU2VydmljZS5jcmVhdGVVcmwocm91dGUpfWA7XG5cbiAgICAgICAgICBpZiAocm91dGUub3V0bGV0ICE9PSBQUklNQVJZX09VVExFVCB8fCAoIXJvdXRlPy5yb3V0ZUNvbmZpZz8ucGF0aCAmJiAhcm9vdFJvb3QpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb290Um9vdCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5kYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByb3V0ZS5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgaWYgKCFrZXkpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgaWYgKHJvdXRlLmRhdGEuaGFzT3duUHJvcGVydHkoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgICAgICByb3V0ZS5kYXRhLnRpdGxlID0gcm91dGUuZGF0YS50aXRsZS5yZXBsYWNlKGA6JHtrZXl9YCwgcm91dGUucGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgICAgIHJvdXRlLmRhdGEudGl0bGUgPSByb3V0ZS5kYXRhLnRpdGxlLnJlcGxhY2UoYDoke2tleX1gLCByb3V0ZS5wYXJhbXNba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJvdXRlLmRhdGEuaGFzT3duUHJvcGVydHkoJ2JyZWFkY3J1bWJzJykpIHtcbiAgICAgICAgICAgICAgICByb3V0ZS5kYXRhLmJyZWFkY3J1bWJzID0gcm91dGUuZGF0YS5icmVhZGNydW1icy5yZXBsYWNlKGA6JHtrZXl9YCwgcm91dGUucGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyb3V0ZS5kYXRhLmhhc093blByb3BlcnR5KCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgcm91dGUuZGF0YS5kZXNjcmlwdGlvbiA9IHJvdXRlLmRhdGEuZGVzY3JpcHRpb24ucmVwbGFjZShgOiR7a2V5fWAsIHJvdXRlLnBhcmFtc1trZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0bXBVcmwgPT09ICcvJykge1xuICAgICAgICAgICAgcGF0aHMucHVzaChSb3V0aW5nU2VydmljZS5jcmVhdGVCcmVhZGNydW1iKHJvdXRlLCB0bXBVcmwpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsICs9IHRtcFVybDtcbiAgICAgICAgICAgIHBhdGhzLnB1c2goUm91dGluZ1NlcnZpY2UuY3JlYXRlQnJlYWRjcnVtYihyb3V0ZSwgdXJsKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZS5uZXh0KHBhdGhzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
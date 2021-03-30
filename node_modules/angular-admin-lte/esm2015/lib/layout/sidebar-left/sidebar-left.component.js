import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { RoutingService } from '../../services/routing.service';
import { WrapperService } from '../wrapper/wrapper.service';
import { HeaderService } from '../header/header.service';
import { LayoutStore } from '../layout.store';
import { removeListeners, removeSubscriptions } from '../../helpers';
import { SidebarLeftToggleDirective } from './sidebar-left.directive';
export class SidebarLeftComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1sZWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvc2lkZWJhci1sZWZ0L3NpZGViYXItbGVmdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUVULE1BQU0sRUFHTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUl0RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQXlCcEUsTUFBTSxPQUFPLG9CQUFvQjtJQXlCL0IsWUFDVSxpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLE1BQWMsRUFDZCxjQUE4QixFQUM5QixjQUE4QixFQUM5QixhQUE0QjtRQVA1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFD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SSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7O1lBL1RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxzOERBQTRDO2dCQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztZQTdDQyxpQkFBaUI7WUFrQlgsV0FBVztZQWZqQixNQUFNO1lBR04sU0FBUztZQUs0QixNQUFNO1lBSXJDLGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTs7OzZCQThCbEIsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTswQ0FFNUMsWUFBWSxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2aWdhdGlvbkVuZCwgUFJJTUFSWV9PVVRMRVQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1JvdXRpbmdTZXJ2aWNlfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtXcmFwcGVyU2VydmljZX0gZnJvbSAnLi4vd3JhcHBlci93cmFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtIZWFkZXJTZXJ2aWNlfSBmcm9tICcuLi9oZWFkZXIvaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtMYXlvdXRTdG9yZX0gZnJvbSAnLi4vbGF5b3V0LnN0b3JlJztcbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtyZW1vdmVMaXN0ZW5lcnMsIHJlbW92ZVN1YnNjcmlwdGlvbnN9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtTaWRlYmFyTGVmdFRvZ2dsZURpcmVjdGl2ZX0gZnJvbSAnLi9zaWRlYmFyLWxlZnQuZGlyZWN0aXZlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJlbnRJZDogbnVtYmVyO1xuICBsYWJlbDogc3RyaW5nO1xuICByb3V0ZT86IHN0cmluZztcbiAgaWNvbkNsYXNzZXM/OiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogQXJyYXk8SXRlbT47XG4gIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgaXNDb2xsYXBzZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlQ29sbGFwc2U/OiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCB0eXBlIEl0ZW1zID0gSXRlbVtdO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1zaWRlYmFyLWxlZnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci1sZWZ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci1sZWZ0LmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckxlZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3NpZGViYXJFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNpZGViYXJFbGVtZW50ITogRWxlbWVudFJlZjtcblxuICBAVmlld0NoaWxkcmVuKFNpZGViYXJMZWZ0VG9nZ2xlRGlyZWN0aXZlKSBwdWJsaWMgc2lkZWJhckxlZnRUb2dnbGVEaXJlY3RpdmVzITogUXVlcnlMaXN0PFNpZGViYXJMZWZ0VG9nZ2xlRGlyZWN0aXZlPjtcblxuICBwdWJsaWMgbWVudT86IEl0ZW1zO1xuICBwdWJsaWMgc2lkZWJhckhlaWdodD86IG51bWJlcjtcbiAgcHVibGljIHNpZGViYXJPdmVyZmxvdz86IHN0cmluZztcblxuICBwcml2YXRlIGxheW91dCE6IHN0cmluZztcbiAgcHJpdmF0ZSBpc1NpZGViYXJMZWZ0Q29sbGFwc2VkITogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyITogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1NpZGViYXJMZWZ0TW91c2VPdmVyID0gZmFsc2U7XG4gIHByaXZhdGUgd2luZG93SW5uZXJXaWR0aD86IG51bWJlcjtcbiAgcHJpdmF0ZSB3aW5kb3dJbm5lckhlaWdodD86IG51bWJlcjtcbiAgcHJpdmF0ZSBjb2xsYXBzZWRJdGVtczogSXRlbXMgPSBbXTtcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRJdGVtczogSXRlbXMgPSBbXTtcbiAgcHJpdmF0ZSB0b2dnbGVMaXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIHByaXZhdGUgbGlzdGVuZXJzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuICBwcml2YXRlIGl0ZW1zQnlJZHM6IHtbcHJvcEtleTogbnVtYmVyXTogSXRlbX0gPSB7fTtcbiAgcHJpdmF0ZSBydW5uaW5nQW5pbWF0aW9ucyA9IDA7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBhY3RpdmVVcmwhOiBzdHJpbmc7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGxheW91dFN0b3JlOiBMYXlvdXRTdG9yZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHdyYXBwZXJTZXJ2aWNlOiBXcmFwcGVyU2VydmljZSxcbiAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUuc2lkZWJhckxlZnRNZW51LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLm1lbnUgPSB2YWx1ZTtcbiAgICAgIHRoaXMubW9ua2V5UGF0Y2hNZW51KHRoaXMubWVudSk7XG4gICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLnNldE1lbnVMaXN0ZW5lcnModGhpcy5hY3RpdmVVcmwpO1xuICAgICAgICB0aGlzLnNldFNpZGViYXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXRNZW51VG9nZ2xlc0xpc3RlbmVycygpO1xuICAgICAgfVxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfSkpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUuc2lkZWJhckxlZnRNZW51QWN0aXZlVXJsLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZVVybCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRNZW51TGlzdGVuZXJzKHZhbHVlKTtcbiAgICB9KSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yb3V0aW5nU2VydmljZS5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVVcmwgPSBldmVudC51cmw7XG4gICAgICAgIHRoaXMuc2V0TWVudUxpc3RlbmVycyhldmVudC51cmwpO1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHRoaXMuc2V0U2lkZWJhckxpc3RlbmVycygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0TWVudVRvZ2dsZXNMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmNoZWNrTWVudVdpdGhvdXRDaGlsZHJlbigpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gcmVtb3ZlU3Vic2NyaXB0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gcmVtb3ZlTGlzdGVuZXJzKHRoaXMubGlzdGVuZXJzKTtcbiAgICB0aGlzLnRvZ2dsZUxpc3RlbmVycyA9IHJlbW92ZUxpc3RlbmVycyh0aGlzLnRvZ2dsZUxpc3RlbmVycyk7XG4gIH1cblxuICBzZXRTaWRlYmFyTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUubGF5b3V0LnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5sYXlvdXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U2lkZWJhckhlaWdodCgpO1xuICAgIH0pKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUud2luZG93SW5uZXJIZWlnaHQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMud2luZG93SW5uZXJIZWlnaHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0U2lkZWJhckhlaWdodCgpO1xuICAgIH0pKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUuc2lkZWJhckxlZnRNZW51LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0aGlzLnNpZGViYXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNpZGViYXJMZWZ0TW91c2VPdmVyKHRydWUpO1xuICAgICAgfSkpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyMi5saXN0ZW4odGhpcy5zaWRlYmFyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyTGVmdE1vdXNlT3ZlcihmYWxzZSk7XG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLndpbmRvd0lubmVyV2lkdGguc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMud2luZG93SW5uZXJXaWR0aCA9IHZhbHVlO1xuICAgICAgaWYgKCF0aGlzLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQgJiYgdGhpcy53aW5kb3dJbm5lcldpZHRoICYmIHRoaXMud2luZG93SW5uZXJXaWR0aCA8PSA3NjcpIHtcbiAgICAgICAgdGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyTGVmdENvbGxhcHNlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy53aW5kb3dJbm5lcldpZHRoICYmIHRoaXMud2luZG93SW5uZXJXaWR0aCA+IDc2NyAmJiB0aGlzLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQgJiYgIXRoaXMuaXNTaWRlYmFyTGVmdEV4cGFuZE9uT3Zlcikge1xuICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNpZGViYXJMZWZ0Q29sbGFwc2VkKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmlzU2lkZWJhckxlZnRNb3VzZU92ZXIuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc1NpZGViYXJMZWZ0TW91c2VPdmVyID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5pc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyKSB7XG4gICAgICAgIHRoaXMubGF5b3V0U3RvcmUuc2lkZWJhckxlZnRDb2xsYXBzZWQoIXZhbHVlKTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmlzU2lkZWJhckxlZnRFeHBhbmRPbk92ZXIuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy53aW5kb3dJbm5lcldpZHRoICYmIHRoaXMud2luZG93SW5uZXJXaWR0aCA+IDc2NyAmJiB0aGlzLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNpZGViYXJMZWZ0Q29sbGFwc2VkKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc1NpZGViYXJMZWZ0Q29sbGFwc2VkID0gdmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLndpbmRvd0lubmVyV2lkdGggJiYgdGhpcy53aW5kb3dJbm5lcldpZHRoIDw9IDc2Nykge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaWRlYmFyTGVmdEV4cGFuZE9uT3ZlciAmJiAhdGhpcy5pc1NpZGViYXJMZWZ0TW91c2VPdmVyICYmICF2YWx1ZSkge1xuICAgICAgICAgIHRoaXMubGF5b3V0U3RvcmUuc2lkZWJhckxlZnRFeHBhbmRPbk92ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMud3JhcHBlclNlcnZpY2Uud3JhcHBlckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NpZGViYXItY29sbGFwc2UnKTtcbiAgICAgICAgICBpZiAodGhpcy5pc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLWV4cGFuZGVkLW9uLWhvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlclNlcnZpY2Uud3JhcHBlckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3NpZGViYXItY29sbGFwc2UnKTtcbiAgICAgICAgICBpZiAodGhpcy5pc1NpZGViYXJMZWZ0RXhwYW5kT25PdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLWV4cGFuZGVkLW9uLWhvdmVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5sYXlvdXRTdG9yZS5pc1NpZGViYXJMZWZ0TWluaS5zdWJzY3JpYmUoKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy53cmFwcGVyU2VydmljZS53cmFwcGVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2lkZWJhci1taW5pJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzaWRlYmFyLW1pbmknKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SWNvbkNsYXNzZXMoaXRlbTogSXRlbSk6IHN0cmluZyB7XG4gICAgaWYgKGl0ZW0uaWNvbkNsYXNzZXMgfHwgaXRlbS5pY29uQ2xhc3NlcyA9PT0gJycpIHtcbiAgICAgIHJldHVybiBpdGVtLmljb25DbGFzc2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2ZhIGZhLWNpcmNsZS1vJztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmlzaWJpbGl0eVN0YXRlU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5ydW5uaW5nQW5pbWF0aW9ucyArKztcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ydW5uaW5nQW5pbWF0aW9ucyAtLTtcbiAgICAgICAgaWYgKCF0aGlzLnJ1bm5pbmdBbmltYXRpb25zKSB7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdG9yZS5zZXRTaWRlYmFyTGVmdEVsZW1lbnRIZWlnaHQodGhpcy5zaWRlYmFyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGV2ZW50LnRvdGFsVGltZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE1lbnVMaXN0ZW5lcnModXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodXJsID09PSAnLycpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbXModXJsKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmltYXJ5T3V0bGV0ID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodXJsKS5yb290LmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXTtcbiAgICAgIGlmIChwcmltYXJ5T3V0bGV0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbXMocHJpbWFyeU91dGxldC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMud2luZG93SW5uZXJXaWR0aCAmJiB0aGlzLndpbmRvd0lubmVyV2lkdGggPD0gNzY3IHx8IHRoaXMuaXNTaWRlYmFyTGVmdEV4cGFuZE9uT3Zlcikge1xuICAgICAgdGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyTGVmdENvbGxhcHNlZCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuY29sbGFwc2VJdGVtUGFyZW50cyhpdGVtOiBJdGVtLCBpc0FjdGl2ZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBpdGVtLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgaXRlbS5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2VkSXRlbXMucHVzaChpdGVtKTtcbiAgICBpZiAoaXRlbS5wYXJlbnRJZCkge1xuICAgICAgdGhpcy51bmNvbGxhcHNlSXRlbVBhcmVudHModGhpcy5pdGVtc0J5SWRzW2l0ZW0ucGFyZW50SWRdLCBpc0FjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kSXRlbXNCeVVybCh1cmw6IHN0cmluZywgaXRlbXM6IEl0ZW1zLCByZXR1cm5JdGVtczogSXRlbXMgPSBbXSk6IEl0ZW1zIHtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtOiBJdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5yb3V0ZSA9PT0gdXJsKSB7XG4gICAgICAgIHJldHVybkl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5maW5kSXRlbXNCeVVybCh1cmwsIGl0ZW0uY2hpbGRyZW4sIHJldHVybkl0ZW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0dXJuSXRlbXM7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2ZUl0ZW1zKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm1lbnUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlZEl0ZW1zLmZvckVhY2goKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2YXRlZEl0ZW1zID0gW107XG5cbiAgICB0aGlzLmNvbGxhcHNlZEl0ZW1zLmZvckVhY2goKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGl0ZW0uaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuY29sbGFwc2VkSXRlbXMgPSBbXTtcblxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5maW5kSXRlbXNCeVVybCh1cmwsIHRoaXMubWVudSk7XG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy51bmNvbGxhcHNlSXRlbVBhcmVudHMoaXRlbSwgdHJ1ZSk7XG4gICAgICB0aGlzLmFjdGl2YXRlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG1vbmtleVBhdGNoTWVudShpdGVtczogSXRlbXMsIHBhcmVudElkPzogbnVtYmVyKTogdm9pZCB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5pZCA9IHBhcmVudElkID8gTnVtYmVyKHBhcmVudElkICsgJycgKyAoaW5kZXggKyAxKSkgOiBpbmRleCArIDE7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaXRlbS5wYXJlbnRJZCA9IHBhcmVudElkO1xuICAgICAgfVxuICAgICAgaWYgKCFpdGVtLmRpc2FibGVDb2xsYXBzZSkge1xuICAgICAgICBpdGVtLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGlmIChwYXJlbnRJZCB8fCBpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuaXRlbXNCeUlkc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICB0aGlzLm1vbmtleVBhdGNoTWVudShpdGVtLmNoaWxkcmVuLCBpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TWVudVRvZ2dsZXNMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy50b2dnbGVMaXN0ZW5lcnMgPSByZW1vdmVMaXN0ZW5lcnModGhpcy50b2dnbGVMaXN0ZW5lcnMpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc2lkZWJhckxlZnRUb2dnbGVEaXJlY3RpdmVzLmZvckVhY2goKG1lbnVUb2dnbGU6IFNpZGViYXJMZWZ0VG9nZ2xlRGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKG1lbnVUb2dnbGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmIChtZW51VG9nZ2xlLml0ZW0uaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkSXRlbXMuZm9yRWFjaCgoaXRlbTogSXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZUNvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pc0NvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy51bmNvbGxhcHNlSXRlbVBhcmVudHMobWVudVRvZ2dsZS5pdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudVRvZ2dsZS5pdGVtLmlzQ29sbGFwc2VkID0gIW1lbnVUb2dnbGUuaXRlbS5pc0NvbGxhcHNlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja01lbnVXaXRob3V0Q2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm1lbnUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbWVudUhhdmVDaGlsZHJlbjtcbiAgICB0aGlzLm1lbnUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIG1lbnVIYXZlQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghbWVudUhhdmVDaGlsZHJlbikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNldFNpZGViYXJMZWZ0RWxlbWVudEhlaWdodCh0aGlzLnNpZGViYXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFNpZGViYXJIZWlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF5b3V0ID09PSAnZml4ZWQnICYmIHRoaXMud2luZG93SW5uZXJIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMud2luZG93SW5uZXJIZWlnaHQgLSB0aGlzLmhlYWRlclNlcnZpY2Uub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKGhlaWdodCAmJiBoZWlnaHQgIT09IHRoaXMuc2lkZWJhckhlaWdodCkge1xuICAgICAgICB0aGlzLnNpZGViYXJIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuc2lkZWJhck92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc2lkZWJhckhlaWdodCkge1xuICAgICAgdGhpcy5zaWRlYmFyT3ZlcmZsb3cgPSB0aGlzLnNpZGViYXJIZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
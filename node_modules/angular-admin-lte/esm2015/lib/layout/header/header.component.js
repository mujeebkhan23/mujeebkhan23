import { Component, ContentChild, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { LayoutStore } from '../layout.store';
import { HeaderService } from './header.service';
import { removeListeners, removeSubscriptions } from '../../helpers';
export class HeaderLogoComponent {
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
export class HeaderLogoMiniComponent {
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
export class HeaderComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPbkUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsbUVBQW1FO2FBQzlFOzs7MEJBRUUsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBUTVDLE1BQU0sT0FBTyx1QkFBdUI7OztZQUpuQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLG1FQUFtRTthQUM5RTs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztBQVM1QyxNQUFNLE9BQU8sZUFBZTtJQW1CMUIsWUFDVSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsU0FBb0IsRUFDcEIsVUFBc0IsRUFDdEIsYUFBNEI7UUFKNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZUFBVSxHQUFWLFVBQVUs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ZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7TGF5b3V0U3RvcmV9IGZyb20gJy4uL2xheW91dC5zdG9yZSc7XG5pbXBvcnQge0hlYWRlclNlcnZpY2V9IGZyb20gJy4vaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtyZW1vdmVMaXN0ZW5lcnMsIHJlbW92ZVN1YnNjcmlwdGlvbnN9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1oZWFkZXItbG9nbycsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckxvZ29Db21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1oZWFkZXItbG9nby1taW5pJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI3RlbXBsYXRlUmVmPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyTG9nb01pbmlDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBpc1NpZGViYXJMZWZ0VG9nZ2xlID0gdHJ1ZTtcbiAgQElucHV0KCkgc2lkZWJhckxlZnRUb2dnbGVJY29uQ2xhc3Nlcz86IHN0cmluZztcbiAgQElucHV0KCkgaXNTaWRlYmFyUmlnaHRUb2dnbGUgPSB0cnVlO1xuICBASW5wdXQoKSBzaWRlYmFyUmlnaHRUb2dnbGVJY29uQ2xhc3Nlcz86IHN0cmluZztcbiAgQElucHV0KCkgbG9nb0xpbms6IHN0cmluZyB8IGFueVtdID0gJy8nO1xuXG4gIEBDb250ZW50Q2hpbGQoSGVhZGVyTG9nb0NvbXBvbmVudCkgcHVibGljIGhlYWRlckxvZ29Db21wb25lbnQ/OiBIZWFkZXJMb2dvQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKEhlYWRlckxvZ29NaW5pQ29tcG9uZW50KSBwdWJsaWMgaGVhZGVyTG9nb01pbmlDb21wb25lbnQ/OiBIZWFkZXJMb2dvTWluaUNvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKCdoZWFkZXJFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBoZWFkZXJFbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2lkZWJhckxlZnRUb2dnbGVFbGVtZW50JykgcHJpdmF0ZSBzaWRlYmFyTGVmdFRvZ2dsZUVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaWRlYmFyUmlnaHRUb2dnbGVFbGVtZW50JykgcHJpdmF0ZSBzaWRlYmFyUmlnaHRUb2dnbGVFbGVtZW50PzogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGlzU2lkZWJhckxlZnRDb2xsYXBzZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIGlzU2lkZWJhclJpZ2h0Q29sbGFwc2VkPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxheW91dFN0b3JlOiBMYXlvdXRTdG9yZSxcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaGVhZGVyU2VydmljZTogSGVhZGVyU2VydmljZVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaGVhZGVyU2VydmljZS5lbGVtZW50UmVmID0gdGhpcy5oZWFkZXJFbGVtZW50O1xuXG4gICAgaWYgKHRoaXMuc2lkZWJhckxlZnRUb2dnbGVFbGVtZW50KSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgdGhpcy5pc1NpZGViYXJMZWZ0Q29sbGFwc2VkID0gdmFsdWU7XG4gICAgICB9KSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuc2lkZWJhckxlZnRUb2dnbGVFbGVtZW50Py5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNpZGViYXJMZWZ0Q29sbGFwc2VkKCF0aGlzLmlzU2lkZWJhckxlZnRDb2xsYXBzZWQpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2lkZWJhclJpZ2h0VG9nZ2xlRWxlbWVudCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5sYXlvdXRTdG9yZS5pc1NpZGViYXJSaWdodENvbGxhcHNlZC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICB0aGlzLmlzU2lkZWJhclJpZ2h0Q29sbGFwc2VkID0gdmFsdWU7XG4gICAgICB9KSk7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuc2lkZWJhclJpZ2h0VG9nZ2xlRWxlbWVudD8ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyUmlnaHRDb2xsYXBzZWQoIXRoaXMuaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHJlbW92ZUxpc3RlbmVycyh0aGlzLmxpc3RlbmVycyk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gcmVtb3ZlU3Vic2NyaXB0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICB9XG59XG4iXX0=
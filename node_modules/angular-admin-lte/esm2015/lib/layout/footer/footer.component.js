import { Component, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { FooterService } from './footer.service';
export class FooterLeftComponent {
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
export class FooterRightComponent {
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
export class FooterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFPakQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBSi9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsbUVBQW1FO2FBQzlFOzs7MEJBRUUsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBUTVDLE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLG1FQUFtRTthQUM5RTs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztBQVM1QyxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUNVLFVBQXNCLEVBQ3RCLGFBQTRCO1FBRDVCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDbkMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIscVZBQXNDOzthQUV2Qzs7O1lBNUJvRCxVQUFVO1lBR3RELGFBQWE7OztrQ0EyQm5CLFlBQVksU0FBQyxtQkFBbUI7bUNBQ2hDLFlBQVksU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9vdGVyU2VydmljZSB9IGZyb20gJy4vZm9vdGVyLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1mb290ZXItbGVmdCcsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckxlZnRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWxheW91dC1mb290ZXItcmlnaHQnLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVSZWY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJSaWdodENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstbGF5b3V0LWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoRm9vdGVyTGVmdENvbXBvbmVudCkgcHVibGljIGZvb3RlckxlZnRDb21wb25lbnQ/OiBGb290ZXJMZWZ0Q29tcG9uZW50O1xuICBAQ29udGVudENoaWxkKEZvb3RlclJpZ2h0Q29tcG9uZW50KSBwdWJsaWMgZm9vdGVyUmlnaHRDb21wb25lbnQ/OiBGb290ZXJSaWdodENvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBmb290ZXJTZXJ2aWNlOiBGb290ZXJTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvb3RlclNlcnZpY2UuZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZjtcbiAgfVxufVxuIl19
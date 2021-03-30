import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { WrapperService } from '../wrapper/wrapper.service';
import { LayoutStore } from '../layout.store';
import { SidebarRightService } from './sidebar-right.service';
import { removeListeners, removeSubscriptions } from '../../helpers';
export class SidebarRightComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1yaWdodC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvbGF5b3V0L3NpZGViYXItcmlnaHQvc2lkZWJhci1yaWdodC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXJJLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVNuRSxNQUFNLE9BQU8scUJBQXFCO0lBV2hDLFlBQ1UsVUFBc0IsRUFDdEIsU0FBb0IsRUFDcEIsV0FBd0IsRUFDeEIsbUJBQXdDLEVBQ3hDLGNBQThCO1FBSjlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJoQyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFReEMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBRTFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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O1lBQ1gsbUJBQW1CO1lBRm5CLGNBQWM7OztvQ0FhbkIsU0FBUyxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7V3JhcHBlclNlcnZpY2V9IGZyb20gJy4uL3dyYXBwZXIvd3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7TGF5b3V0U3RvcmV9IGZyb20gJy4uL2xheW91dC5zdG9yZSc7XG5pbXBvcnQge1NpZGViYXJSaWdodFNlcnZpY2V9IGZyb20gJy4vc2lkZWJhci1yaWdodC5zZXJ2aWNlJztcbmltcG9ydCB7cmVtb3ZlTGlzdGVuZXJzLCByZW1vdmVTdWJzY3JpcHRpb25zfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay1sYXlvdXQtc2lkZWJhci1yaWdodCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLXJpZ2h0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci1yaWdodC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJSaWdodENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnc2lkZWJhckNvbnRlbnRFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNpZGViYXJDb250ZW50RWxlbWVudCE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGxheW91dD86IHN0cmluZztcblxuICBwcml2YXRlIHNraW4/OiBzdHJpbmc7XG4gIHByaXZhdGUgaXNTaWRlYmFyUmlnaHRPdmVyQ29udGVudD86IGJvb2xlYW47XG4gIHByaXZhdGUgaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQ/OiBib29sZWFuO1xuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbGF5b3V0U3RvcmU6IExheW91dFN0b3JlLFxuICAgIHByaXZhdGUgc2lkZWJhclJpZ2h0U2VydmljZTogU2lkZWJhclJpZ2h0U2VydmljZSxcbiAgICBwcml2YXRlIHdyYXBwZXJTZXJ2aWNlOiBXcmFwcGVyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb250cm9sLXNpZGViYXInKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUuaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQgPSB2YWx1ZTtcblxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbnRyb2wtc2lkZWJhci1vcGVuJyk7XG4gICAgICAgIGlmICghdGhpcy5pc1NpZGViYXJSaWdodE92ZXJDb250ZW50KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy53cmFwcGVyU2VydmljZS53cmFwcGVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29udHJvbC1zaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb250cm9sLXNpZGViYXItb3BlbicpO1xuICAgICAgICBpZiAoIXRoaXMuaXNTaWRlYmFyUmlnaHRPdmVyQ29udGVudCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlclNlcnZpY2Uud3JhcHBlckVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbnRyb2wtc2lkZWJhci1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmlzU2lkZWJhclJpZ2h0T3ZlckNvbnRlbnQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuaXNTaWRlYmFyUmlnaHRPdmVyQ29udGVudCA9IHZhbHVlO1xuXG4gICAgICBpZiAoIXRoaXMuaXNTaWRlYmFyUmlnaHRDb2xsYXBzZWQpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyU2VydmljZS53cmFwcGVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29udHJvbC1zaWRlYmFyLW9wZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLndyYXBwZXJTZXJ2aWNlLndyYXBwZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb250cm9sLXNpZGViYXItb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyUmlnaHRTa2luLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRoaXMuc2tpbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGBjb250cm9sLXNpZGViYXItJHt0aGlzLnNraW59YCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNraW4gPSB2YWx1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgY29udHJvbC1zaWRlYmFyLSR7dmFsdWV9YCk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2lkZWJhclJpZ2h0U2VydmljZS5lbGVtZW50UmVmID0gdGhpcy5zaWRlYmFyQ29udGVudEVsZW1lbnQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHJlbW92ZUxpc3RlbmVycyh0aGlzLmxpc3RlbmVycyk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gcmVtb3ZlU3Vic2NyaXB0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICB9XG59XG4iXX0=
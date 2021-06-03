import { Component, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LayoutStore } from '../layout.store';
import { RoutingService } from '../../services/routing.service';
import { SidebarRightService } from '../sidebar-right/sidebar-right.service';
import { HeaderService } from '../header/header.service';
import { FooterService } from '../footer/footer.service';
import { removeSubscriptions } from '../../helpers';
export class ContentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFjM0IsWUFDVSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixZQUFtQixFQUNuQixVQUFzQixFQUN0QixpQkFBb0MsRUFDcEMsbUJBQXdDLEVBQ3hDLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzVCLE1BQWM7UUFSZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsaUJBQVksR0FBWixZQUFZLENBQU87UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBaUIsR0FBakIsaUJB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QUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ25ELElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLEVBQUU7b0JBQ25DLFdBQVcsR0FBRyxDQUFDLENBQUM7aUJBQ2pCO2dCQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO2dCQUMvQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDeEM7U0FDRjtJQUNILENBQUM7OztZQWpIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsZ25CQUF1QztnQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFiUSxXQUFXO1lBQ1gsY0FBYztZQUxkLEtBQUs7WUFGcUUsVUFBVTtZQUF4QyxpQkFBaUI7WUFRN0QsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixhQUFhO1lBVGIsTUFBTTs7O2tDQW9CWixTQUFTLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMYXlvdXRTdG9yZSB9IGZyb20gJy4uL2xheW91dC5zdG9yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBTaWRlYmFyUmlnaHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZWJhci1yaWdodC9zaWRlYmFyLXJpZ2h0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL2hlYWRlci9oZWFkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGb290ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZm9vdGVyL2Zvb3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IHJlbW92ZVN1YnNjcmlwdGlvbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay1sYXlvdXQtY29udGVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250ZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGVudC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRJbm5lckVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNvbnRlbnRJbm5lckVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGhlYWRlcj86IHN0cmluZztcbiAgcHVibGljIGhlaWdodFN0eWxlPzogbnVtYmVyO1xuICBwdWJsaWMgc2lkZWJhckxlZnRIZWlnaHQ/OiBudW1iZXI7XG4gIHB1YmxpYyB3aW5kb3dJbm5lckhlaWdodD86IG51bWJlcjtcblxuICBwcml2YXRlIGxheW91dD86IHN0cmluZztcbiAgcHJpdmF0ZSB0aXRsZVRhZz86IHN0cmluZztcbiAgcHJpdmF0ZSBuYXZpZ2F0aW9uRW5kID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxheW91dFN0b3JlOiBMYXlvdXRTdG9yZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgc2lkZWJhclJpZ2h0U2VydmljZTogU2lkZWJhclJpZ2h0U2VydmljZSxcbiAgICBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb290ZXJTZXJ2aWNlOiBGb290ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGVUYWcgPSB0aGlzLnRpdGxlU2VydmljZS5nZXRUaXRsZSgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5yb3V0aW5nU2VydmljZS5vbkNoYW5nZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdICYmIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdLmRhdGEpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdLmRhdGEgYXMgYW55O1xuXG4gICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRoaXMuZ2V0VGl0bGUoZGF0YS50aXRsZSkgfHwgJycpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGRhdGEudGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKHJvdXRlRXZlbnQgPT4ge1xuICAgICAgaWYgKHJvdXRlRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uRW5kID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocm91dGVFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uRW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRDb250ZW50TWluSGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5sYXlvdXRTdG9yZS5zaWRlYmFyTGVmdEVsZW1lbnRIZWlnaHQuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIHRoaXMuc2lkZWJhckxlZnRIZWlnaHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc2V0Q29udGVudE1pbkhlaWdodCgpO1xuICAgIH0pKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUubGF5b3V0LnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICB0aGlzLmxheW91dCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRDb250ZW50TWluSGVpZ2h0KCk7XG4gICAgfSkpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5sYXlvdXRTdG9yZS53aW5kb3dJbm5lckhlaWdodC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdGhpcy53aW5kb3dJbm5lckhlaWdodCA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRDb250ZW50TWluSGVpZ2h0KCk7XG4gICAgfSkpO1xuICAgIHRoaXMuaGVpZ2h0U3R5bGUgPSB0aGlzLndpbmRvd0lubmVySGVpZ2h0O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gcmVtb3ZlU3Vic2NyaXB0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGdldCBzY3JvbGxIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50SW5uZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGl0bGUgPyBgJHt0aXRsZX0gLSAke3RoaXMudGl0bGVUYWd9YCA6IHRoaXMudGl0bGVUYWc7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRlbnRNaW5IZWlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubmF2aWdhdGlvbkVuZCkge1xuICAgICAgbGV0IGhlaWdodFN0eWxlID0gMDtcblxuICAgICAgY29uc3QgaGVhZGVyRm9vdGVyT2Zmc2V0SGVpZ2h0ID0gdGhpcy5oZWFkZXJTZXJ2aWNlLm9mZnNldEhlaWdodCArIHRoaXMuZm9vdGVyU2VydmljZS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ2ZpeGVkJyAmJiB0aGlzLndpbmRvd0lubmVySGVpZ2h0KSB7XG4gICAgICAgIGhlaWdodFN0eWxlID0gdGhpcy53aW5kb3dJbm5lckhlaWdodCAtIHRoaXMuZm9vdGVyU2VydmljZS5vZmZzZXRIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMud2luZG93SW5uZXJIZWlnaHQgJiYgdGhpcy5zaWRlYmFyTGVmdEhlaWdodCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyUmlnaHQgPVxuICAgICAgICAgIHRoaXMuc2lkZWJhclJpZ2h0U2VydmljZS5zY3JvbGxIZWlnaHQgP1xuICAgICAgICAgICAgdGhpcy5zaWRlYmFyUmlnaHRTZXJ2aWNlLnNjcm9sbEhlaWdodCAtIHRoaXMuaGVhZGVyU2VydmljZS5vZmZzZXRIZWlnaHQgOiAwO1xuXG4gICAgICAgIGhlaWdodFN0eWxlID0gTWF0aC5tYXgoXG4gICAgICAgICAgdGhpcy53aW5kb3dJbm5lckhlaWdodCAtIGhlYWRlckZvb3Rlck9mZnNldEhlaWdodCxcbiAgICAgICAgICB0aGlzLnNpZGViYXJMZWZ0SGVpZ2h0IC0gdGhpcy5oZWFkZXJTZXJ2aWNlLm9mZnNldEhlaWdodCxcbiAgICAgICAgICBzaWRlYmFyUmlnaHRcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGhlaWdodFN0eWxlICYmIGhlaWdodFN0eWxlICE9PSB0aGlzLmhlaWdodFN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbEhlaWdodCA+IGhlaWdodFN0eWxlKSB7XG4gICAgICAgICAgaGVpZ2h0U3R5bGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGVpZ2h0U3R5bGUgPSBoZWlnaHRTdHlsZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
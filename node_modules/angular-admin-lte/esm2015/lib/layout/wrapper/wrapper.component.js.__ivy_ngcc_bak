import { Component, Renderer2, ElementRef, NgZone } from '@angular/core';
import { throttle, removeSubscriptions, removeListeners } from '../../helpers';
import { LayoutStore } from '../layout.store';
import { WrapperService } from './wrapper.service';
export class WrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvbGF5b3V0L3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUk1RixPQUFPLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUW5ELE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsWUFDVSxVQUFzQixFQUN0QixTQUFvQixFQUNwQixXQUF3QixFQUN4QixjQUE4QixFQUM5QixNQUFjO1FBSmQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUmhCLGNBQVMsR0FBbUIsRUFBRSxDQUFDO1FBQy9CLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztJQVF4QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV4RCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEUsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckUsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEY7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG1GQUF1Qzs7YUFFeEM7OztZQWJzQyxVQUFVO1lBQXJCLFNBQVM7WUFLNUIsV0FBVztZQUNYLGNBQWM7WUFONEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0aHJvdHRsZSwgcmVtb3ZlU3Vic2NyaXB0aW9ucywgcmVtb3ZlTGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBMYXlvdXRTdG9yZSB9IGZyb20gJy4uL2xheW91dC5zdG9yZSc7XG5pbXBvcnQgeyBXcmFwcGVyU2VydmljZSB9IGZyb20gJy4vd3JhcHBlci5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay1sYXlvdXQtd3JhcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi93cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd3JhcHBlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBza2luPzogc3RyaW5nO1xuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbGF5b3V0U3RvcmU6IExheW91dFN0b3JlLFxuICAgIHByaXZhdGUgd3JhcHBlclNlcnZpY2U6IFdyYXBwZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubGF5b3V0U3RvcmUuc2V0V2luZG93SW5uZXJIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLmxheW91dFN0b3JlLnNldFdpbmRvd0lubmVyV2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG4gICAgdGhpcy53cmFwcGVyU2VydmljZS53cmFwcGVyRWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZjtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKCd3aW5kb3cnLCAncmVzaXplJywgdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmxheW91dFN0b3JlLnNldFdpbmRvd0lubmVySGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHRoaXMubGF5b3V0U3RvcmUuc2V0V2luZG93SW5uZXJXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgICB9LCAyNTApKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmxheW91dFN0b3JlLmxheW91dC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgdmFsdWUgPT09ICdmaXhlZCcgPyB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZpeGVkJykgOlxuICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZpeGVkJyk7XG4gICAgICB2YWx1ZSA9PT0gJ2JveGVkJyA/IHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbGF5b3V0LWJveGVkJykgOlxuICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2xheW91dC1ib3hlZCcpO1xuICAgIH0pKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMubGF5b3V0U3RvcmUuc2tpbi5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHRoaXMuc2tpbiAmJiB0aGlzLnNraW4gIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBgc2tpbi0ke3RoaXMuc2tpbn1gKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5za2luID0gdmFsdWU7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYHNraW4tJHt0aGlzLnNraW59YCk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zID0gcmVtb3ZlU3Vic2NyaXB0aW9ucyh0aGlzLnN1YnNjcmlwdGlvbnMpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gcmVtb3ZlTGlzdGVuZXJzKHRoaXMubGlzdGVuZXJzKTtcbiAgfVxufVxuIl19
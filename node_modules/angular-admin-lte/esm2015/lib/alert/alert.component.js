import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { removeListeners } from '../helpers';
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBRU4sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBRWpCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFTM0MsTUFBTSxPQUFPLGNBQWM7SUE4QnpCLFlBQ1UsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDZCxTQUFvQixFQUNwQixnQkFBa0M7UUFIbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBakM1QixvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQWMzQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWYsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25DLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk1QyxxQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztRQUN2QyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBRWQsY0FBUyxHQUFtQixFQUFFLENBQUM7SUFPcEMsQ0FBQztJQWpDSixJQUFvQixPQUFPLENBQUMsS0FBYztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDMUMsQ0FBQztJQUdELElBQW1DLGNBQWMsQ0FBQyxLQUFjO1FBQzlELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQXVCRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFFLElBQUksQ0FBQyxpQkFBNkIsQ0FBQyxTQUFTLEVBQUU7d0JBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7cUJBQ3hDO2dCQUNILENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUMzQjtZQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUU7b0JBQzlGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDTDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxlQUFlLENBQUMsS0FBcUI7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxLQUFxQjtRQUN6QyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsaWdCQUFxQztnQkFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUF2QkMsaUJBQWlCO1lBS2pCLE1BQU07WUFHTixTQUFTO1lBRVQsZ0JBQWdCOzs7OEJBZWYsS0FBSztzQkFDTCxLQUFLO29CQUdMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLLFNBQUMsZUFBZTt5QkFRckIsS0FBSzs0QkFFTCxNQUFNOzJCQUNOLE1BQU07a0NBRU4sU0FBUyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld1JlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBbmltYXRpb25FdmVudH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLmludGVyZmFjZSc7XG5pbXBvcnQge3JlbW92ZUxpc3RlbmVyc30gZnJvbSAnLi4vaGVscGVycyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICdkYW5nZXInO1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IGNhbGxvdXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnR5cGUgPSB2YWx1ZSA/ICdjYWxsb3V0JyA6ICdhbGVydCc7XG4gIH1cbiAgQElucHV0KCkgcHVibGljIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZGlzbWlzc09uVGltZW91dD86IG51bWJlcjtcbiAgQElucHV0KCdpc0Rpc21pc3NpYmxlJykgcHVibGljIHNldCBfaXNEaXNtaXNzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNEaXNtaXNzaWJsZSA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5kaXNtaXNzaWJsZUNsYXNzID0gYCR7dGhpcy50eXBlfS1kaXNtaXNzaWJsZWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzbWlzc2libGVDbGFzcyA9ICcnO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzcyA9ICcnO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY29sbGFwc2VTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjb2xsYXBzZURvbmUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgncmVtb3ZlQnV0dG9uRWxlbWVudCcpIHByaXZhdGUgcmVtb3ZlQnV0dG9uRWxlbWVudD86IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGRpc21pc3NpYmxlQ2xhc3MgPSAnYWxlcnQtZGlzbWlzc2libGUnO1xuICBwdWJsaWMgaXNEaXNtaXNzaWJsZSA9IHRydWU7XG4gIHB1YmxpYyByZW1vdmUgPSBmYWxzZTtcbiAgcHVibGljIHJlbW92ZWQgPSBmYWxzZTtcbiAgcHVibGljIHR5cGUgPSAnYWxlcnQnO1xuXG4gIHByaXZhdGUgbGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNtaXNzT25UaW1lb3V0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghKHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMuZGlzbWlzc09uVGltZW91dCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZW1vdmVCdXR0b25FbGVtZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMucmVtb3ZlQnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICByZW1vdmVMaXN0ZW5lcnModGhpcy5saXN0ZW5lcnMpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sbGFwc2VTdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNvbGxhcHNlU3RhcnQuZW1pdChldmVudCk7XG4gIH1cblxuICBwdWJsaWMgb25Db2xsYXBzZURvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICcxJykge1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSByZW1vdmVMaXN0ZW5lcnModGhpcy5saXN0ZW5lcnMpO1xuICAgICAgdGhpcy5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICAgIHRoaXMuY29sbGFwc2VEb25lLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=
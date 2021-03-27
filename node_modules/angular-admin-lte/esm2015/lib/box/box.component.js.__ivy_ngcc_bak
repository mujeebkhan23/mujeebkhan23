import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild } from '@angular/core';
import { BoxContentDirective, BoxFooterDirective, BoxHeaderDirective, BoxToolsDirective } from './box.directive';
import { removeListeners } from '../helpers';
export class BoxComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9ib3gvYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQy9HLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFTM0MsTUFBTSxPQUFPLFlBQVk7SUFxQ3ZCLFlBQ1UsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDZCxTQUFvQjtRQUZwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBdkNkLGFBQVEsR0FBRyxTQUFTLENBQUM7UUFDckIsc0JBQWlCLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsc0JBQWlCLEdBQUcscUJBQXFCLENBQUM7UUFJMUMscUJBQWdCLEdBQUcsWUFBWSxDQUFDO1FBRWhDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLHFCQUFnQixHQUFHLFlBQVksQ0FBQztRQUNoQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsc0JBQWlCLEdBQUcsdUJBQXVCLENBQUM7UUFD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LGlCQUFpQjtrQ0FFOUIsU0FBUyxTQUFDLHFCQUFxQjtrQ0FDL0IsU0FBUyxTQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0FuaW1hdGlvbkV2ZW50fSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7Qm94Q29udGVudERpcmVjdGl2ZSwgQm94Rm9vdGVyRGlyZWN0aXZlLCBCb3hIZWFkZXJEaXJlY3RpdmUsIEJveFRvb2xzRGlyZWN0aXZlfSBmcm9tICcuL2JveC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtyZW1vdmVMaXN0ZW5lcnN9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3guY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCb3hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgYm94Q29sb3IgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBidXR0b25zU3R5bGVDbGFzcyA9ICdidG4gYnRuLWJveC10b29sJztcbiAgQElucHV0KCkgcHVibGljIGNvbnRlbnRTdHlsZUNsYXNzID0gJ2JveC1jb250ZW50LXdyYXBwZXInO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmb290ZXJTdHlsZUNsYXNzID0gJ2JveC1mb290ZXInO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQm9yZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyU3R5bGVDbGFzcyA9ICdib3gtaGVhZGVyJztcbiAgQElucHV0KCkgcHVibGljIGlzQ29sbGFwc2FibGUgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgaXNSZW1vdmFibGUgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaXNTb2xpZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ0NvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgbG9hZGluZ1N0eWxlQ2xhc3MgPSAnZmEgZmEtcmVmcmVzaCBmYS1zcGluJztcbiAgQElucHV0KCkgcHVibGljIHN0eWxlQ2xhc3MgPSAnYm94JztcblxuICBAT3V0cHV0KCkgcHVibGljIGNvbGxhcHNlRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjb2xsYXBzZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGQoQm94SGVhZGVyRGlyZWN0aXZlKSBwdWJsaWMgYm94SGVhZGVyRGlyZWN0aXZlPzogQm94SGVhZGVyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEJveEZvb3RlckRpcmVjdGl2ZSkgcHVibGljIGJveEZvb3RlckRpcmVjdGl2ZT86IEJveEZvb3RlckRpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChCb3hDb250ZW50RGlyZWN0aXZlKSBwdWJsaWMgYm94Q29udGVudERpcmVjdGl2ZT86IEJveENvbnRlbnREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoQm94VG9vbHNEaXJlY3RpdmUpIHB1YmxpYyBib3hUb29sc0RpcmVjdGl2ZT86IEJveFRvb2xzRGlyZWN0aXZlO1xuXG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZUJ1dHRvbkVsZW1lbnQnKSBwcml2YXRlIHRvZ2dsZUJ1dHRvbkVsZW1lbnQ/OiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgncmVtb3ZlQnV0dG9uRWxlbWVudCcpIHByaXZhdGUgcmVtb3ZlQnV0dG9uRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG4gIHB1YmxpYyBpc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgcHVibGljIHJlbW92ZSA9IGZhbHNlO1xuICBwdWJsaWMgcmVtb3ZlZCA9IGZhbHNlO1xuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy50b2dnbGVCdXR0b25FbGVtZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMudG9nZ2xlQnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZW1vdmVCdXR0b25FbGVtZW50KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMucmVtb3ZlQnV0dG9uRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICByZW1vdmVMaXN0ZW5lcnModGhpcy5saXN0ZW5lcnMpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZWREb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50b1N0YXRlID09PSAnMScpIHtcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ29sbGFwc2VTdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuZnJvbVN0YXRlICE9PSAndm9pZCcpIHtcbiAgICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29sbGFwc2VTdGFydC5lbWl0KGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Db2xsYXBzZURvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmZyb21TdGF0ZSAhPT0gJ3ZvaWQnKSB7XG4gICAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xsYXBzZURvbmUuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=
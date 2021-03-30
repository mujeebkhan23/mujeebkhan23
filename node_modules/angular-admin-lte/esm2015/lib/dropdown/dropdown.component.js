import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild } from '@angular/core';
import { removeListeners } from '../helpers';
export class DropdownToggleComponent {
}
DropdownToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown-toggle',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DropdownToggleComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }],
    toggleElement: [{ type: ContentChild, args: ['toggleElement',] }]
};
export class DropdownMenuComponent {
}
DropdownMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown-menu',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DropdownMenuComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class DropdownComponent {
    constructor(changeDetectorRef, elementRef, ngZone, renderer2) {
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
        this.collapseStart = new EventEmitter();
        this.collapseDone = new EventEmitter();
        this.listeners = [];
    }
    ngAfterViewInit() {
        const toggleNativeElement = this.dropdownToggleComponent && this.dropdownToggleComponent.toggleElement ?
            this.dropdownToggleComponent.toggleElement.nativeElement : this.toggleElement ?
            this.toggleElement : this.defaultToggleElement ?
            this.defaultToggleElement.nativeElement : null;
        if (toggleNativeElement) {
            this.ngZone.runOutsideAngular(() => {
                this.listeners.push(this.renderer2.listen(toggleNativeElement, 'click', (event) => {
                    this.toggleDropdown(event);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        }
    }
    ngOnDestroy() {
        this.unBindDocumentClickListener();
        removeListeners(this.listeners);
    }
    toggleDropdown(event) {
        event.preventDefault();
        this.isCollapsed = !this.isCollapsed;
        if (!this.isCollapsed) {
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.bindDocumentClickListener();
                });
            });
        }
        else {
            this.unBindDocumentClickListener();
        }
    }
    onCollapseStart(event) {
        this.collapseStart.emit(event);
    }
    onCollapseDone(event) {
        this.collapseStart.emit(event);
    }
    bindDocumentClickListener() {
        this.ngZone.runOutsideAngular(() => {
            this.documentClickListener = this.renderer2.listen('document', 'click', () => {
                if (!this.isCollapsed) {
                    this.isCollapsed = true;
                    this.unBindDocumentClickListener();
                    this.changeDetectorRef.detectChanges();
                }
            });
        });
    }
    unBindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-dropdown, [mk-dropdown]',
                template: "<ng-template #innerTemplate>\n  <ng-container *ngIf=\"dropdownToggleComponent && dropdownToggleComponent.toggleElement; else noToggleElement\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n  <ng-template #noToggleElement>\n    <button *ngIf=\"toggleText || dropdownToggleComponent\" [mkColor]=\"buttonBackgroundColor\" mkColorProperty=\"background-color\" mkColorPrefix=\"btn\" [ngClass]=\"buttonStyleClass\" #toggleElement>\n      {{toggleText}}\n      <ng-container *ngIf=\"dropdownToggleComponent\" [ngTemplateOutlet]=\"dropdownToggleComponent.templateRef\"></ng-container>\n    </button>\n  </ng-template>\n  <ul [ngClass]=\"contentStyleClass\" [mkCollapseAnimation]=\"isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event)\" (mkCollapseAnimation.done)=\"onCollapseDone($event)\">\n    <ng-container *ngIf=\"dropdownMenuComponent; else noDropdownMenuComponent\" [ngTemplateOutlet]=\"dropdownMenuComponent.templateRef\"></ng-container>\n    <ng-template #noDropdownMenuComponent>\n      <ng-content></ng-content>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<div *ngIf=\"isWrapper; else noWrapper\" [ngClass]=\"styleClass\">\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</div>\n\n<ng-template #noWrapper>\n  <ng-container *ngTemplateOutlet=\"innerTemplate\"></ng-container>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".dropdown-menu{display:block}.dropdown-menu.collapsing:not(.un-collapse){padding-bottom:0;padding-top:0;transition-property:height,padding-top,padding-bottom}"]
            },] }
];
DropdownComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
DropdownComponent.propDecorators = {
    buttonStyleClass: [{ type: Input }],
    buttonBackgroundColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    isCollapsed: [{ type: Input }],
    isWrapper: [{ type: Input }],
    styleClass: [{ type: Input }],
    toggleElement: [{ type: Input }],
    toggleText: [{ type: Input }],
    collapseStart: [{ type: Output }],
    collapseDone: [{ type: Output }],
    dropdownToggleComponent: [{ type: ContentChild, args: [DropdownToggleComponent,] }],
    dropdownMenuComponent: [{ type: ContentChild, args: [DropdownMenuComponent,] }],
    defaultToggleElement: [{ type: ViewChild, args: ['toggleElement',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBUTNDLE1BQU0sT0FBTyx1QkFBdUI7OztZQUxuQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLG1FQUFtRTtnQkFDN0UsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OzswQkFFRSxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFDekMsWUFBWSxTQUFDLGVBQWU7O0FBUy9CLE1BQU0sT0FBTyxxQkFBcUI7OztZQUxqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLG1FQUFtRTtnQkFDN0UsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OzswQkFFRSxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7QUFVNUMsTUFBTSxPQUFPLGlCQUFpQjtJQXFCNUIsWUFDVSxpQkFBb0MsRUFDcEMsVUFBc0IsRUFDdEIsTUFBYyxFQUNkLFNBQW9CO1FBSHBCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4s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Q25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDeEM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDJCQUEyQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQTdGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsaTJDQUF3QztnQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUE1Q0MsaUJBQWlCO1lBR2pCLFVBQVU7WUFHVixNQUFNO1lBR04sU0FBUzs7OytCQXFDUixLQUFLO29DQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBRUwsTUFBTTsyQkFDTixNQUFNO3NDQUVOLFlBQVksU0FBQyx1QkFBdUI7b0NBQ3BDLFlBQVksU0FBQyxxQkFBcUI7bUNBRWxDLFNBQVMsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QW5pbWF0aW9uRXZlbnR9IGZyb20gJy4uL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHtyZW1vdmVMaXN0ZW5lcnN9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWRyb3Bkb3duLXRvZ2dsZScsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93blRvZ2dsZUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gIEBDb250ZW50Q2hpbGQoJ3RvZ2dsZUVsZW1lbnQnKSBwdWJsaWMgdG9nZ2xlRWxlbWVudD86IEVsZW1lbnRSZWY7XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstZHJvcGRvd24tbWVudScsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWRyb3Bkb3duLCBbbWstZHJvcGRvd25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24uY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBidXR0b25TdHlsZUNsYXNzID0gJ2J0biBkcm9wZG93bi10b2dnbGUnO1xuICBASW5wdXQoKSBwdWJsaWMgYnV0dG9uQmFja2dyb3VuZENvbG9yID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudFN0eWxlQ2xhc3MgPSAnZHJvcGRvd24tbWVudSc7XG4gIEBJbnB1dCgpIHB1YmxpYyBpc0NvbGxhcHNlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBpc1dyYXBwZXIgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzcyA9ICdkcm9wZG93bic7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b2dnbGVFbGVtZW50PzogRWxlbWVudDtcbiAgQElucHV0KCkgcHVibGljIHRvZ2dsZVRleHQ/OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBjb2xsYXBzZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIGNvbGxhcHNlRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKERyb3Bkb3duVG9nZ2xlQ29tcG9uZW50KSBwdWJsaWMgZHJvcGRvd25Ub2dnbGVDb21wb25lbnQ/OiBEcm9wZG93blRvZ2dsZUNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChEcm9wZG93bk1lbnVDb21wb25lbnQpIHB1YmxpYyBkcm9wZG93bk1lbnVDb21wb25lbnQ/OiBEcm9wZG93bk1lbnVDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZCgndG9nZ2xlRWxlbWVudCcpIHByaXZhdGUgZGVmYXVsdFRvZ2dsZUVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZG9jdW1lbnRDbGlja0xpc3RlbmVyPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6ICgoKSA9PiB2b2lkKVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRvZ2dsZU5hdGl2ZUVsZW1lbnQgPSB0aGlzLmRyb3Bkb3duVG9nZ2xlQ29tcG9uZW50ICYmIHRoaXMuZHJvcGRvd25Ub2dnbGVDb21wb25lbnQudG9nZ2xlRWxlbWVudCA/XG4gICAgICB0aGlzLmRyb3Bkb3duVG9nZ2xlQ29tcG9uZW50LnRvZ2dsZUVsZW1lbnQubmF0aXZlRWxlbWVudCA6IHRoaXMudG9nZ2xlRWxlbWVudCA/XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudCA6IHRoaXMuZGVmYXVsdFRvZ2dsZUVsZW1lbnQgP1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFRvZ2dsZUVsZW1lbnQubmF0aXZlRWxlbWVudCA6IG51bGw7XG4gICAgaWYgKHRvZ2dsZU5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaCh0aGlzLnJlbmRlcmVyMi5saXN0ZW4odG9nZ2xlTmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMudG9nZ2xlRHJvcGRvd24oZXZlbnQpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuQmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIHJlbW92ZUxpc3RlbmVycyh0aGlzLmxpc3RlbmVycyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRHJvcGRvd24oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG5cbiAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuQmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvbkNvbGxhcHNlU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5jb2xsYXBzZVN0YXJ0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgcHVibGljIG9uQ29sbGFwc2VEb25lKGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIHRoaXMuY29sbGFwc2VTdGFydC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZERvY3VtZW50Q2xpY2tMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudW5CaW5kRG9jdW1lbnRDbGlja0xpc3RlbmVyKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1bkJpbmREb2N1bWVudENsaWNrTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnRDbGlja0xpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvY3VtZW50Q2xpY2tMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxufVxuIl19
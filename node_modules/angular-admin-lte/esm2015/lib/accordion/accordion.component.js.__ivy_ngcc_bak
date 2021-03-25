import { ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AccordionToggleDirective } from './accordion.directive';
import { removeListeners, removeSubscriptions } from '../helpers';
export class AccordionHeaderComponent {
}
AccordionHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class AccordionContentComponent {
}
AccordionContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionContentComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class AccordionComponent {
    constructor() {
        this.contentStyleClass = 'box-body';
        this.headerStyleClass = 'box-header with-border';
        this.isCollapsing = false;
        this.isCollapsed = false;
        this.index = 0;
    }
    ngOnInit() {
        this.headerStyleColor = this.headerColor;
    }
    ngAfterViewInit() {
        if (!this.header && !this.accordionHeaderComponent) {
            throw new Error('Attribute "header" OR Component "mk-accordion-header" is required for component "mk-accordion"');
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
            },] }
];
AccordionComponent.propDecorators = {
    borderColor: [{ type: Input }],
    contentColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerColorHover: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    accordionHeaderComponent: [{ type: ContentChild, args: [AccordionHeaderComponent,] }],
    accordionContentComponent: [{ type: ContentChild, args: [AccordionContentComponent,] }],
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class AccordionGroupComponent {
    constructor(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.isMultiple = false;
        this.styleClass = 'box-group';
        this.collapseStart = new EventEmitter();
        this.collapseDone = new EventEmitter();
        this.activeIndex = [0];
        this.listeners = [];
        // @TODO change types for subscriptions to all files
        this.subscriptions = [];
    }
    set _activeIndex(value) {
        this.activeIndex = value instanceof Array ? value : [value];
    }
    static headerMouseLeave(accordion) {
        accordion.headerStyleColor = accordion.headerColor;
    }
    static headerMouseEnter(accordion) {
        if (accordion.headerColorHover) {
            accordion.headerStyleColor = accordion.headerColorHover;
        }
    }
    ngAfterContentInit() {
        this.setAccordionsIndex();
        this.updateAccordionIsCollapsed();
        this.subscriptions.push(this.accordionComponents.changes.subscribe(() => {
            this.setAccordionsIndex();
        }));
    }
    ngAfterViewInit() {
        this.setAccordionsToggle();
        this.subscriptions.push(this.accordionToggleDirectives.changes.subscribe(() => {
            this.setAccordionsToggle();
        }));
    }
    ngOnChanges(changes) {
        if (!changes._activeIndex.firstChange) {
            this.updateAccordionIsCollapsed();
        }
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
        removeSubscriptions(this.subscriptions);
    }
    toggleAccordion(event, toggleIndex) {
        event.preventDefault();
        const indexOf = this.activeIndex.indexOf(toggleIndex);
        if (indexOf === -1) {
            if (this.isMultiple) {
                this.activeIndex.push(toggleIndex);
            }
            else {
                this.activeIndex = [toggleIndex];
            }
        }
        else {
            if (this.isMultiple) {
                this.activeIndex.splice(indexOf, 1);
            }
            else {
                this.activeIndex = [];
            }
        }
        this.updateAccordionIsCollapsed();
    }
    onCollapseStart(event, accordion) {
        accordion.isCollapsing = true;
        this.collapseStart.emit({ animationEvent: event, index: accordion.index });
    }
    onCollapseDone(event, accordion) {
        accordion.isCollapsing = false;
        this.collapseDone.emit({ animationEvent: event, index: accordion.index });
    }
    setAccordionsIndex() {
        this.accordionComponents.forEach((accordion, index) => {
            accordion.index = index;
        });
    }
    setAccordionsToggle() {
        this.listeners = removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(() => {
            this.accordionToggleDirectives.forEach((accordionToggle) => {
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'click', (event) => {
                    this.toggleAccordion(event, accordionToggle.accordionComponent.index);
                    this.changeDetectorRef.detectChanges();
                }));
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseenter', () => {
                    AccordionGroupComponent.headerMouseEnter(accordionToggle.accordionComponent);
                    this.changeDetectorRef.detectChanges();
                }));
                this.listeners.push(this.renderer2.listen(accordionToggle.elementRef.nativeElement, 'mouseleave', () => {
                    AccordionGroupComponent.headerMouseLeave(accordionToggle.accordionComponent);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        });
    }
    updateAccordionIsCollapsed() {
        this.accordionComponents.forEach((accordion, index) => {
            accordion.isCollapsed = this.activeIndex.indexOf(index) === -1;
        });
    }
}
AccordionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-accordion-group',
                template: "<div [ngClass]=\"styleClass\">\n  <div *ngFor=\"let accordion of accordionComponents\" class=\"panel box\" [mkColor]=\"accordion.borderColor\" mkColorProperty=\"border-top-color\" mkColorPrefix=\"box\">\n    <div [ngClass]=\"accordion.headerStyleClass\" [class.no-border]=\"accordion.isCollapsed && !accordion.isCollapsing\">\n      <h4 class=\"box-title\">\n        <a [mkAccordionToggle]=\"accordion\" href=\"#\" [mkFontColor]=\"accordion.headerStyleColor\" [class.collapsed]=\"accordion.isCollapsed\">\n          {{accordion.header}}\n          <ng-template *ngIf=\"!accordion.header && accordion.accordionHeaderComponent\" [ngTemplateOutlet]=\"accordion.accordionHeaderComponent.templateRef\"></ng-template>\n        </a>\n      </h4>\n    </div>\n    <div class=\"panel-collapse\" [mkCollapseAnimation]=\"accordion.isCollapsed\" (mkCollapseAnimation.start)=\"onCollapseStart($event, accordion)\" (mkCollapseAnimation.done)=\"onCollapseDone($event, accordion)\">\n      <div [ngClass]=\"accordion.contentStyleClass\" [mkFontColor]=\"accordion.contentColor\">\n        <ng-template *ngIf=\"!accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.templateRef\"></ng-template>\n        <ng-template *ngIf=\"accordion.accordionContentComponent\" [ngTemplateOutlet]=\"accordion.accordionContentComponent.templateRef\"></ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
AccordionGroupComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
AccordionGroupComponent.propDecorators = {
    _activeIndex: [{ type: Input, args: ['activeIndex',] }],
    isMultiple: [{ type: Input }],
    styleClass: [{ type: Input }],
    collapseStart: [{ type: Output }],
    collapseDone: [{ type: Output }],
    accordionComponents: [{ type: ContentChildren, args: [AccordionComponent,] }],
    accordionToggleDirectives: [{ type: ViewChildren, args: [AccordionToggleDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNULFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQU12QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBUWxFLE1BQU0sT0FBTyx3QkFBd0I7OztZQUpwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1FQUFtRTthQUM5RTs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztBQVE1QyxNQUFNLE9BQU8seUJBQXlCOzs7WUFKckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxtRUFBbUU7YUFDOUU7OzswQkFFRSxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7QUFRNUMsTUFBTSxPQUFPLGtCQUFrQjtJQUovQjtRQU9rQixzQkFBaUIsR0FBRyxVQUFVLENBQUM7UUFJL0IscUJBQWdCLEdBQUcsd0JBQXdCLENBQUM7UUFRckQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBSyxHQUFHLENBQUMsQ0FBQztJQVduQixDQUFDO0lBVEMs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QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFO29CQUNyRyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDN0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywwQkFBMEI7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQTZCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDaEYsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsMjNDQUF5QzthQUMxQzs7O1lBbEZDLGlCQUFpQjtZQU1qQixNQUFNO1lBS04sU0FBUzs7OzJCQXlFUixLQUFLLFNBQUMsYUFBYTt5QkFHbkIsS0FBSzt5QkFDTCxLQUFLOzRCQUVMLE1BQU07MkJBQ04sTUFBTTtrQ0FFTixlQUFlLFNBQUMsa0JBQWtCO3dDQUVsQyxZQUFZLFNBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IEFjY29yZGlvblRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vYWNjb3JkaW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyByZW1vdmVMaXN0ZW5lcnMsIHJlbW92ZVN1YnNjcmlwdGlvbnMgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWFjY29yZGlvbi1oZWFkZXInLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVSZWY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25IZWFkZXJDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLWFjY29yZGlvbi1jb250ZW50JyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI3RlbXBsYXRlUmVmPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29udGVudENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstYWNjb3JkaW9uJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI3RlbXBsYXRlUmVmPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudFN0eWxlQ2xhc3MgPSAnYm94LWJvZHknO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb2xvckhvdmVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyU3R5bGVDbGFzcyA9ICdib3gtaGVhZGVyIHdpdGgtYm9yZGVyJztcblxuICBAQ29udGVudENoaWxkKEFjY29yZGlvbkhlYWRlckNvbXBvbmVudCkgcHVibGljIGFjY29yZGlvbkhlYWRlckNvbXBvbmVudD86IEFjY29yZGlvbkhlYWRlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChBY2NvcmRpb25Db250ZW50Q29tcG9uZW50KSBwdWJsaWMgYWNjb3JkaW9uQ29udGVudENvbXBvbmVudD86IEFjY29yZGlvbkNvbnRlbnRDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcblxuICBwdWJsaWMgaGVhZGVyU3R5bGVDb2xvcj86IHN0cmluZztcbiAgcHVibGljIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xuICBwdWJsaWMgaXNDb2xsYXBzZWQgPSBmYWxzZTtcbiAgcHVibGljIGluZGV4ID0gMDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhlYWRlclN0eWxlQ29sb3IgPSB0aGlzLmhlYWRlckNvbG9yO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oZWFkZXIgJiYgIXRoaXMuYWNjb3JkaW9uSGVhZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZSBcImhlYWRlclwiIE9SIENvbXBvbmVudCBcIm1rLWFjY29yZGlvbi1oZWFkZXJcIiBpcyByZXF1aXJlZCBmb3IgY29tcG9uZW50IFwibWstYWNjb3JkaW9uXCInKTtcbiAgICB9XG4gIH1cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay1hY2NvcmRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNjb3JkaW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCdhY3RpdmVJbmRleCcpIHNldCBfYWN0aXZlSW5kZXgodmFsdWU6IG51bWJlcltdIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyB2YWx1ZSA6IFt2YWx1ZV07XG4gIH1cbiAgQElucHV0KCkgcHVibGljIGlzTXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIHN0eWxlQ2xhc3MgPSAnYm94LWdyb3VwJztcblxuICBAT3V0cHV0KCkgcHVibGljIGNvbGxhcHNlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY29sbGFwc2VEb25lID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQWNjb3JkaW9uQ29tcG9uZW50KSBwdWJsaWMgYWNjb3JkaW9uQ29tcG9uZW50cyE6IFF1ZXJ5TGlzdDxBY2NvcmRpb25Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGRyZW4oQWNjb3JkaW9uVG9nZ2xlRGlyZWN0aXZlKSBwcml2YXRlIGFjY29yZGlvblRvZ2dsZURpcmVjdGl2ZXMhOiBRdWVyeUxpc3Q8QWNjb3JkaW9uVG9nZ2xlRGlyZWN0aXZlPjtcblxuICBwcml2YXRlIGFjdGl2ZUluZGV4OiBhbnkgPSBbMF07XG4gIHByaXZhdGUgbGlzdGVuZXJzOiAoKCkgPT4gdm9pZClbXSA9IFtdO1xuICAvLyBAVE9ETyBjaGFuZ2UgdHlwZXMgZm9yIHN1YnNjcmlwdGlvbnMgdG8gYWxsIGZpbGVzXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogQXJyYXk8U3Vic2NyaXB0aW9uPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHVibGljIHN0YXRpYyBoZWFkZXJNb3VzZUxlYXZlKGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgYWNjb3JkaW9uLmhlYWRlclN0eWxlQ29sb3IgPSBhY2NvcmRpb24uaGVhZGVyQ29sb3I7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGhlYWRlck1vdXNlRW50ZXIoYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBpZiAoYWNjb3JkaW9uLmhlYWRlckNvbG9ySG92ZXIpIHtcbiAgICAgIGFjY29yZGlvbi5oZWFkZXJTdHlsZUNvbG9yID0gYWNjb3JkaW9uLmhlYWRlckNvbG9ySG92ZXI7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWNjb3JkaW9uc0luZGV4KCk7XG4gICAgdGhpcy51cGRhdGVBY2NvcmRpb25Jc0NvbGxhcHNlZCgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5hY2NvcmRpb25Db21wb25lbnRzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0QWNjb3JkaW9uc0luZGV4KCk7XG4gICAgfSkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWNjb3JkaW9uc1RvZ2dsZSgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5hY2NvcmRpb25Ub2dnbGVEaXJlY3RpdmVzLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0QWNjb3JkaW9uc1RvZ2dsZSgpO1xuICAgIH0pKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoIWNoYW5nZXMuX2FjdGl2ZUluZGV4LmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUFjY29yZGlvbklzQ29sbGFwc2VkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRoaXMubGlzdGVuZXJzKTtcbiAgICByZW1vdmVTdWJzY3JpcHRpb25zKHRoaXMuc3Vic2NyaXB0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQWNjb3JkaW9uKGV2ZW50OiBFdmVudCwgdG9nZ2xlSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5hY3RpdmVJbmRleC5pbmRleE9mKHRvZ2dsZUluZGV4KTtcbiAgICBpZiAoaW5kZXhPZiA9PT0gLTEpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleC5wdXNoKHRvZ2dsZUluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBbdG9nZ2xlSW5kZXhdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXguc3BsaWNlKGluZGV4T2YsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjY29yZGlvbklzQ29sbGFwc2VkKCk7XG4gIH1cblxuICBwdWJsaWMgb25Db2xsYXBzZVN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCwgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBhY2NvcmRpb24uaXNDb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmNvbGxhcHNlU3RhcnQuZW1pdCh7YW5pbWF0aW9uRXZlbnQ6IGV2ZW50LCBpbmRleDogYWNjb3JkaW9uLmluZGV4fSk7XG4gIH1cblxuICBwdWJsaWMgb25Db2xsYXBzZURvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50LCBhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIGFjY29yZGlvbi5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNlRG9uZS5lbWl0KHthbmltYXRpb25FdmVudDogZXZlbnQsIGluZGV4OiBhY2NvcmRpb24uaW5kZXh9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWNjb3JkaW9uc0luZGV4KCk6IHZvaWQge1xuICAgIHRoaXMuYWNjb3JkaW9uQ29tcG9uZW50cy5mb3JFYWNoKChhY2NvcmRpb246IEFjY29yZGlvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgYWNjb3JkaW9uLmluZGV4ID0gaW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEFjY29yZGlvbnNUb2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSByZW1vdmVMaXN0ZW5lcnModGhpcy5saXN0ZW5lcnMpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5hY2NvcmRpb25Ub2dnbGVEaXJlY3RpdmVzLmZvckVhY2goKGFjY29yZGlvblRvZ2dsZTogQWNjb3JkaW9uVG9nZ2xlRGlyZWN0aXZlKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKGFjY29yZGlvblRvZ2dsZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWNjb3JkaW9uKGV2ZW50LCBhY2NvcmRpb25Ub2dnbGUuYWNjb3JkaW9uQ29tcG9uZW50LmluZGV4KTtcbiAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIyLmxpc3RlbihhY2NvcmRpb25Ub2dnbGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICBBY2NvcmRpb25Hcm91cENvbXBvbmVudC5oZWFkZXJNb3VzZUVudGVyKGFjY29yZGlvblRvZ2dsZS5hY2NvcmRpb25Db21wb25lbnQpO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2godGhpcy5yZW5kZXJlcjIubGlzdGVuKGFjY29yZGlvblRvZ2dsZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgIEFjY29yZGlvbkdyb3VwQ29tcG9uZW50LmhlYWRlck1vdXNlTGVhdmUoYWNjb3JkaW9uVG9nZ2xlLmFjY29yZGlvbkNvbXBvbmVudCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBY2NvcmRpb25Jc0NvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjY29yZGlvbkNvbXBvbmVudHMuZm9yRWFjaCgoYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGFjY29yZGlvbi5pc0NvbGxhcHNlZCA9IHRoaXMuYWN0aXZlSW5kZXguaW5kZXhPZihpbmRleCkgPT09IC0xO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
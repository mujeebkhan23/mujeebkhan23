import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, EventEmitter, Input, NgZone, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { TabToggleDirective } from './tabs.directive';
import { removeListeners, removeSubscriptions } from '../helpers';
export class TabHeaderComponent {
}
TabHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class TabContentComponent {
}
TabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab-content',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabContentComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class TabComponent {
    constructor() {
        this.isDisabled = false;
        this.isActive = false;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tab',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabComponent.propDecorators = {
    header: [{ type: Input }],
    isDisabled: [{ type: Input }],
    tabColor: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }],
    tabHeaderComponent: [{ type: ContentChild, args: [TabHeaderComponent,] }],
    tabContentComponent: [{ type: ContentChild, args: [TabContentComponent,] }]
};
export class TabsHeaderComponent {
}
TabsHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tabs-header',
                template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
TabsHeaderComponent.propDecorators = {
    templateRef: [{ type: ViewChild, args: ['templateRef', { static: true },] }]
};
export class TabsComponent {
    constructor(changeDetectorRef, ngZone, renderer2) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.headerStyleClass = 'header pull-left';
        this.navStyleClass = 'nav nav-tabs';
        this.contentStyleClass = 'tab-content';
        this.styleClass = 'nav-tabs-custom';
        this.closeTab = new EventEmitter();
        this.openTab = new EventEmitter();
        this.listeners = [];
        this.subscriptions = [];
    }
    set activeTabIndex(index) {
        this.activatedTabIndex = index;
        this.changeDetectorRef.detectChanges();
    }
    ngAfterContentInit() {
        // Set tab index on load.
        this.setTabIndex();
        // Update tab index if tabs is updated.
        if (this.tabs) {
            this.subscriptions.push(this.tabs.changes.subscribe(() => {
                this.setTabIndex();
            }));
        }
        // Open tab on load.
        this.openTabIndex();
    }
    ngAfterViewInit() {
        // Set tab toggles on load.
        this.setTabsToggle();
        // Update tab toggles if tabs is updated.
        if (this.tabToggleDirectives) {
            this.subscriptions.push(this.tabToggleDirectives.changes.subscribe(() => {
                this.setTabsToggle();
            }));
        }
    }
    ngOnChanges(changes) {
        if (changes.activeTabIndex) {
            this.openTabIndex();
        }
    }
    ngOnDestroy() {
        removeListeners(this.listeners);
        removeSubscriptions(this.subscriptions);
    }
    openTabIndex() {
        if (this.tabs) {
            this.tabs.forEach((tab) => {
                if (this.activatedTabIndex === tab.index || (this.activatedTabIndex === undefined && tab.index === 0)) {
                    tab.isActive = true;
                    this.openTab.emit({ index: tab.index });
                    this.changeDetectorRef.detectChanges();
                }
                else if (tab.isActive) {
                    tab.isActive = false;
                    this.closeTab.emit({ index: tab.index });
                    this.changeDetectorRef.detectChanges();
                }
            });
        }
    }
    onOpenTab(event, tabToOpen) {
        event.preventDefault();
        tabToOpen.isActive = true;
        this.openTab.emit({ event, index: tabToOpen.index });
        if (this.tabs) {
            this.tabs.forEach((tab) => {
                if (tab.isActive && tabToOpen !== tab) {
                    tab.isActive = false;
                    this.closeTab.emit({ event, index: tab.index });
                }
            });
        }
    }
    setTabIndex() {
        if (this.tabs) {
            this.tabs.forEach((tab, index) => {
                tab.index = index;
            });
        }
        this.changeDetectorRef.detectChanges();
    }
    setTabsToggle() {
        this.listeners = removeListeners(this.listeners);
        this.ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.tabToggleDirectives) === null || _a === void 0 ? void 0 : _a.forEach((tabToggle) => {
                this.listeners.push(this.renderer2.listen(tabToggle.elementRef.nativeElement, 'click', (event) => {
                    this.onOpenTab(event, tabToggle.tabComponent);
                    this.changeDetectorRef.detectChanges();
                }));
            });
        });
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-tabs',
                template: "<div [ngClass]=\"styleClass\">\n  <ul [ngClass]=\"navStyleClass\" [class.pull-right]=\"header || tabsHeaderComponent\">\n    <li *ngFor=\"let tab of tabs\" [class.active]=\"tab.isActive\" [mkColor]=\"tab.tabColor || tabsColor\" mkColorProperty=\"border-top-color\">\n      <a *ngIf=\"!tab.isDisabled\" [mkTabToggle]=\"tab\" href=\"#\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </a>\n      <ng-template [ngIf]=\"tab.isDisabled\">\n        {{tab.header}}\n        <ng-template *ngIf=\"!tab.header && tab.tabHeaderComponent\" [ngTemplateOutlet]=\"tab.tabHeaderComponent.templateRef\"></ng-template>\n      </ng-template>\n    </li>\n    <li *ngIf=\"tabsHeaderComponent || header\" [ngClass]=\"headerStyleClass\">\n      {{header}}\n      <ng-template *ngIf=\"tabsHeaderComponent\" [ngTemplateOutlet]=\"tabsHeaderComponent.templateRef\"></ng-template>\n    </li>\n  </ul>\n  <div [ngClass]=\"contentStyleClass\">\n    <div *ngFor=\"let tab of tabs\" class=\"tab-pane\" [class.active]=\"tab.isActive\">\n      <ng-template *ngIf=\"!tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.templateRef\"></ng-template>\n      <ng-template *ngIf=\"tab.tabContentComponent\" [ngTemplateOutlet]=\"tab.tabContentComponent.templateRef\"></ng-template>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".nav-tabs-custom>.nav-tabs>li{border-top-width:0}.nav-tabs-custom>.nav-tabs>li.active{border-top-width:3px}"]
            },] }
];
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Renderer2 }
];
TabsComponent.propDecorators = {
    activeTabIndex: [{ type: Input }],
    header: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    navStyleClass: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    tabsColor: [{ type: Input }],
    closeTab: [{ type: Output }],
    openTab: [{ type: Output }],
    tabsHeaderComponent: [{ type: ContentChild, args: [TabsHeaderComponent,] }],
    tabs: [{ type: ContentChildren, args: [TabComponent,] }],
    tabToggleDirectives: [{ type: ViewChildren, args: [TabToggleDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvdGFicy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFHTixNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVFsRSxNQUFNLE9BQU8sa0JBQWtCOzs7WUFMOUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztBQVM1QyxNQUFNLE9BQU8sbUJBQW1COzs7WUFML0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxtRUFBbUU7Z0JBQzdFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7MEJBRUUsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0FBUzVDLE1BQU0sT0FBTyxZQUFZO0lBTHpCO1FBT2tCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFTNUIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7WUFqQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEs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OzthQUNoRDs7O1lBOUVDLGlCQUFpQjtZQU1qQixNQUFNO1lBSU4sU0FBUzs7OzZCQXNFUixLQUFLO3FCQUlMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLE1BQU07c0JBQ04sTUFBTTtrQ0FFTixZQUFZLFNBQUMsbUJBQW1CO21CQUVoQyxlQUFlLFNBQUMsWUFBWTtrQ0FFNUIsWUFBWSxTQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IFRlbXBsYXRlUmVmLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhYlRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vdGFicy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgcmVtb3ZlTGlzdGVuZXJzLCByZW1vdmVTdWJzY3JpcHRpb25zIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstdGFiLWhlYWRlcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWJIZWFkZXJDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLXRhYi1jb250ZW50JyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGUgI3RlbXBsYXRlUmVmPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21rLXRhYicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgdGFiQ29sb3I/OiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcblxuICBAQ29udGVudENoaWxkKFRhYkhlYWRlckNvbXBvbmVudCkgcHVibGljIHRhYkhlYWRlckNvbXBvbmVudD86IFRhYkhlYWRlckNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZChUYWJDb250ZW50Q29tcG9uZW50KSBwdWJsaWMgdGFiQ29udGVudENvbXBvbmVudD86IFRhYkNvbnRlbnRDb21wb25lbnQ7XG5cbiAgcHVibGljIGluZGV4ITogbnVtYmVyO1xuICBwdWJsaWMgaXNBY3RpdmUgPSBmYWxzZTtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay10YWJzLWhlYWRlcicsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICN0ZW1wbGF0ZVJlZj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWJzSGVhZGVyQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdGVtcGxhdGVSZWYhOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJzLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHNldCBhY3RpdmVUYWJJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hY3RpdmF0ZWRUYWJJbmRleCA9IGluZGV4O1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJTdHlsZUNsYXNzID0gJ2hlYWRlciBwdWxsLWxlZnQnO1xuICBASW5wdXQoKSBwdWJsaWMgbmF2U3R5bGVDbGFzcyA9ICduYXYgbmF2LXRhYnMnO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudFN0eWxlQ2xhc3MgPSAndGFiLWNvbnRlbnQnO1xuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzcyA9ICduYXYtdGFicy1jdXN0b20nO1xuICBASW5wdXQoKSBwdWJsaWMgdGFic0NvbG9yPzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VUYWIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlblRhYiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKFRhYnNIZWFkZXJDb21wb25lbnQpIHB1YmxpYyB0YWJzSGVhZGVyQ29tcG9uZW50PzogVGFic0hlYWRlckNvbXBvbmVudDtcblxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgcHVibGljIHRhYnM/OiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFRhYlRvZ2dsZURpcmVjdGl2ZSkgcHVibGljIHRhYlRvZ2dsZURpcmVjdGl2ZXM/OiBRdWVyeUxpc3Q8VGFiVG9nZ2xlRGlyZWN0aXZlPjtcblxuICBwcml2YXRlIGFjdGl2YXRlZFRhYkluZGV4PzogbnVtYmVyO1xuICBwcml2YXRlIGxpc3RlbmVyczogKCgpID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIC8vIFNldCB0YWIgaW5kZXggb24gbG9hZC5cbiAgICB0aGlzLnNldFRhYkluZGV4KCk7XG5cbiAgICAvLyBVcGRhdGUgdGFiIGluZGV4IGlmIHRhYnMgaXMgdXBkYXRlZC5cbiAgICBpZiAodGhpcy50YWJzKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhYnMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFRhYkluZGV4KCk7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgLy8gT3BlbiB0YWIgb24gbG9hZC5cbiAgICB0aGlzLm9wZW5UYWJJbmRleCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIFNldCB0YWIgdG9nZ2xlcyBvbiBsb2FkLlxuICAgIHRoaXMuc2V0VGFic1RvZ2dsZSgpO1xuXG4gICAgLy8gVXBkYXRlIHRhYiB0b2dnbGVzIGlmIHRhYnMgaXMgdXBkYXRlZC5cbiAgICBpZiAodGhpcy50YWJUb2dnbGVEaXJlY3RpdmVzKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhYlRvZ2dsZURpcmVjdGl2ZXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFRhYnNUb2dnbGUoKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7W3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZX0pOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmVUYWJJbmRleCkge1xuICAgICAgdGhpcy5vcGVuVGFiSW5kZXgoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICByZW1vdmVMaXN0ZW5lcnModGhpcy5saXN0ZW5lcnMpO1xuICAgIHJlbW92ZVN1YnNjcmlwdGlvbnModGhpcy5zdWJzY3JpcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuVGFiSW5kZXgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFicykge1xuICAgICAgdGhpcy50YWJzLmZvckVhY2goKHRhYjogVGFiQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2YXRlZFRhYkluZGV4ID09PSB0YWIuaW5kZXggfHwgKHRoaXMuYWN0aXZhdGVkVGFiSW5kZXggPT09IHVuZGVmaW5lZCAmJiB0YWIuaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgdGFiLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm9wZW5UYWIuZW1pdCh7aW5kZXg6IHRhYi5pbmRleH0pO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYi5pc0FjdGl2ZSkge1xuICAgICAgICAgIHRhYi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xvc2VUYWIuZW1pdCh7aW5kZXg6IHRhYi5pbmRleH0pO1xuICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25PcGVuVGFiKGV2ZW50OiBFdmVudCwgdGFiVG9PcGVuOiBUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhYlRvT3Blbi5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vcGVuVGFiLmVtaXQoe2V2ZW50LCBpbmRleDogdGFiVG9PcGVuLmluZGV4fSk7XG5cbiAgICBpZiAodGhpcy50YWJzKSB7XG4gICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiOiBUYWJDb21wb25lbnQpID0+IHtcbiAgICAgICAgaWYgKHRhYi5pc0FjdGl2ZSAmJiB0YWJUb09wZW4gIT09IHRhYikge1xuICAgICAgICAgIHRhYi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY2xvc2VUYWIuZW1pdCh7ZXZlbnQsIGluZGV4OiB0YWIuaW5kZXh9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYWJJbmRleCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJzKSB7XG4gICAgICB0aGlzLnRhYnMuZm9yRWFjaCgodGFiOiBUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgdGFiLmluZGV4ID0gaW5kZXg7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGFic1RvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IHJlbW92ZUxpc3RlbmVycyh0aGlzLmxpc3RlbmVycyk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy50YWJUb2dnbGVEaXJlY3RpdmVzPy5mb3JFYWNoKCh0YWJUb2dnbGU6IFRhYlRvZ2dsZURpcmVjdGl2ZSkgPT4ge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHRoaXMucmVuZGVyZXIyLmxpc3Rlbih0YWJUb2dnbGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm9uT3BlblRhYihldmVudCwgdGFiVG9nZ2xlLnRhYkNvbXBvbmVudCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
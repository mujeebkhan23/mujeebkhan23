import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChange } from '@angular/core';
import type { TemplateRef, QueryList } from '@angular/core';
import { TabToggleDirective } from './tabs.directive';
export declare class TabHeaderComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class TabContentComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class TabComponent {
    header?: string;
    isDisabled: boolean;
    tabColor?: string;
    templateRef: TemplateRef<ElementRef>;
    tabHeaderComponent?: TabHeaderComponent;
    tabContentComponent?: TabContentComponent;
    index: number;
    isActive: boolean;
}
export declare class TabsHeaderComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class TabsComponent implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    private renderer2;
    set activeTabIndex(index: number);
    header?: string;
    headerStyleClass: string;
    navStyleClass: string;
    contentStyleClass: string;
    styleClass: string;
    tabsColor?: string;
    closeTab: EventEmitter<any>;
    openTab: EventEmitter<any>;
    tabsHeaderComponent?: TabsHeaderComponent;
    tabs?: QueryList<TabComponent>;
    tabToggleDirectives?: QueryList<TabToggleDirective>;
    private activatedTabIndex?;
    private listeners;
    private subscriptions;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, renderer2: Renderer2);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    openTabIndex(): void;
    onOpenTab(event: Event, tabToOpen: TabComponent): void;
    private setTabIndex;
    private setTabsToggle;
}

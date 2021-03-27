import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { TemplateRef, QueryList } from '@angular/core';
import { AnimationEvent } from '../animations/animations.interface';
export declare class AccordionHeaderComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class AccordionContentComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class AccordionComponent implements OnInit, AfterViewInit {
    borderColor?: string;
    contentColor?: string;
    contentStyleClass: string;
    header?: string;
    headerColor?: string;
    headerColorHover?: string;
    headerStyleClass: string;
    accordionHeaderComponent?: AccordionHeaderComponent;
    accordionContentComponent?: AccordionContentComponent;
    templateRef: TemplateRef<ElementRef>;
    headerStyleColor?: string;
    isCollapsing: boolean;
    isCollapsed: boolean;
    index: number;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export declare class AccordionGroupComponent implements AfterContentInit, AfterViewInit, OnChanges, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    private renderer2;
    set _activeIndex(value: number[] | number);
    isMultiple: boolean;
    styleClass: string;
    collapseStart: EventEmitter<any>;
    collapseDone: EventEmitter<any>;
    accordionComponents: QueryList<AccordionComponent>;
    private accordionToggleDirectives;
    private activeIndex;
    private listeners;
    private subscriptions;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, renderer2: Renderer2);
    static headerMouseLeave(accordion: AccordionComponent): void;
    static headerMouseEnter(accordion: AccordionComponent): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    toggleAccordion(event: Event, toggleIndex: number): void;
    onCollapseStart(event: AnimationEvent, accordion: AccordionComponent): void;
    onCollapseDone(event: AnimationEvent, accordion: AccordionComponent): void;
    private setAccordionsIndex;
    private setAccordionsToggle;
    private updateAccordionIsCollapsed;
}

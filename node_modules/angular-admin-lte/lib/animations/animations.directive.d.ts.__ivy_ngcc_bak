import { ElementRef, EventEmitter, Renderer2, NgZone, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
export declare class CollapseAnimationDirective implements OnInit, AfterContentInit, OnDestroy {
    private elementRef;
    private ngZone;
    private renderer2;
    collapseAnimationDuration: number;
    collapseAnimationTiming?: string;
    set _isCollapsed(value: boolean);
    startEventEmitter: EventEmitter<any>;
    doneEventEmitter: EventEmitter<any>;
    private firstStart;
    private isCollapsed;
    private lastIsCollapsed;
    private transitioning;
    private listener?;
    constructor(elementRef: ElementRef, ngZone: NgZone, renderer2: Renderer2);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private subscriptions;
    private unCollapse;
    private collapse;
    private emit;
}

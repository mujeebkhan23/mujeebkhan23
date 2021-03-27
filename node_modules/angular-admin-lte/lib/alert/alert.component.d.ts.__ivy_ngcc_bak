import { AfterViewInit, ChangeDetectorRef, EventEmitter, NgZone, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { AnimationEvent } from '../animations/animations.interface';
export declare class AlertComponent implements AfterViewInit, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    private renderer2;
    private viewContainerRef;
    backgroundColor: string;
    set callout(value: boolean);
    color?: string;
    dismissOnTimeout?: number;
    set _isDismissible(value: boolean);
    styleClass: string;
    collapseStart: EventEmitter<any>;
    collapseDone: EventEmitter<any>;
    private removeButtonElement?;
    dismissibleClass: string;
    isDismissible: boolean;
    remove: boolean;
    removed: boolean;
    type: string;
    private listeners;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, renderer2: Renderer2, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onCollapseStart(event: AnimationEvent): void;
    onCollapseDone(event: AnimationEvent): void;
}

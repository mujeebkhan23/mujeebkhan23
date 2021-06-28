import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import type { TemplateRef } from '@angular/core';
import { AnimationEvent } from '../animations/animations.interface';
export declare class DropdownToggleComponent {
    templateRef: TemplateRef<ElementRef>;
    toggleElement?: ElementRef;
}
export declare class DropdownMenuComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class DropdownComponent implements AfterViewInit, OnDestroy {
    private changeDetectorRef;
    private elementRef;
    private ngZone;
    private renderer2;
    buttonStyleClass: string;
    buttonBackgroundColor: string;
    contentStyleClass: string;
    isCollapsed: boolean;
    isWrapper: boolean;
    styleClass: string;
    toggleElement?: Element;
    toggleText?: string;
    collapseStart: EventEmitter<any>;
    collapseDone: EventEmitter<any>;
    dropdownToggleComponent?: DropdownToggleComponent;
    dropdownMenuComponent?: DropdownMenuComponent;
    private defaultToggleElement?;
    private documentClickListener?;
    private listeners;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, ngZone: NgZone, renderer2: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    toggleDropdown(event: Event): void;
    onCollapseStart(event: AnimationEvent): void;
    onCollapseDone(event: AnimationEvent): void;
    private bindDocumentClickListener;
    private unBindDocumentClickListener;
}

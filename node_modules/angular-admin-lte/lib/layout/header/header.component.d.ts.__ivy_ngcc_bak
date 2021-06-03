import { AfterViewInit, ElementRef, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import type { TemplateRef } from '@angular/core';
import { LayoutStore } from '../layout.store';
import { HeaderService } from './header.service';
export declare class HeaderLogoComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class HeaderLogoMiniComponent {
    templateRef: TemplateRef<ElementRef>;
}
export declare class HeaderComponent implements AfterViewInit, OnDestroy {
    private layoutStore;
    private ngZone;
    private renderer2;
    private elementRef;
    private headerService;
    isSidebarLeftToggle: boolean;
    sidebarLeftToggleIconClasses?: string;
    isSidebarRightToggle: boolean;
    sidebarRightToggleIconClasses?: string;
    logoLink: string | any[];
    headerLogoComponent?: HeaderLogoComponent;
    headerLogoMiniComponent?: HeaderLogoMiniComponent;
    private headerElement;
    private sidebarLeftToggleElement?;
    private sidebarRightToggleElement?;
    private isSidebarLeftCollapsed?;
    private isSidebarRightCollapsed?;
    private listeners;
    private subscriptions;
    constructor(layoutStore: LayoutStore, ngZone: NgZone, renderer2: Renderer2, elementRef: ElementRef, headerService: HeaderService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

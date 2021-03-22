import { Renderer2, ElementRef } from '@angular/core';
import { Colors } from './color.definition';
export declare class ColorService {
    private renderer2;
    private elementRef;
    private currentBackgroundStyle;
    private currentBackgroundClass;
    private currentFontStyle;
    private currentFontClass;
    constructor(renderer2: Renderer2, elementRef: ElementRef);
    setBackgroundColor(color: Colors | string, condition: boolean, property: string, prefix: string): void;
    resetBackgroundColor(): void;
    setFontColor(color: string | undefined): void;
    resetFontColor(): void;
}

import { Injectable, Renderer2, ElementRef } from '@angular/core';
import { colors, colorsAliases } from './color.definition';
export class ColorService {
    constructor(renderer2, elementRef) {
        this.renderer2 = renderer2;
        this.elementRef = elementRef;
    }
    setBackgroundColor(color, condition, property, prefix) {
        if (color && condition) {
            this.resetBackgroundColor();
            if (colors.hasOwnProperty(color)) {
                const knownColor = colors[color];
                this.renderer2.addClass(this.elementRef.nativeElement, 'bg-color');
                this.currentBackgroundStyle = { property, color: knownColor };
                this.renderer2.setStyle(this.elementRef.nativeElement, property, knownColor);
            }
            else {
                this.renderer2.removeClass(this.elementRef.nativeElement, 'bg-color');
                if (color.indexOf('#') === 0 || color.indexOf('rgb') === 0) {
                    this.currentBackgroundStyle = { property, color };
                    this.renderer2.setStyle(this.elementRef.nativeElement, property, color);
                }
                else if (colorsAliases.indexOf(color) !== -1) {
                    this.currentBackgroundClass = prefix ? `${prefix}-${color}` : color;
                    this.renderer2.addClass(this.elementRef.nativeElement, this.currentBackgroundClass);
                }
            }
        }
    }
    resetBackgroundColor() {
        if (this.currentBackgroundStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, this.currentBackgroundStyle.property, this.currentBackgroundStyle.color);
        }
        else if (this.currentBackgroundClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentBackgroundClass);
        }
    }
    setFontColor(color) {
        this.resetFontColor();
        if (color) {
            if (color.startsWith('#') || color.startsWith('rgb')) {
                this.currentFontStyle = color;
                this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
            }
            else {
                this.currentFontClass = `text-${color}`;
                this.renderer2.addClass(this.elementRef.nativeElement, this.currentFontClass);
            }
        }
    }
    resetFontColor() {
        if (this.currentFontStyle) {
            this.renderer2.removeStyle(this.elementRef.nativeElement, 'color', this.currentFontStyle);
        }
        else if (this.currentFontClass) {
            this.renderer2.removeClass(this.elementRef.nativeElement, this.currentFontClass);
        }
    }
}
ColorService.decorators = [
    { type: Injectable }
];
ColorService.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9jb2xvci9jb2xvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRSxPQUFPLEVBQVUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSW5FLE1BQU0sT0FBTyxZQUFZO0lBTXZCLFlBQ1UsU0FBb0IsRUFDcEIsVUFBc0I7UUFEdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFRyxrQkFBa0IsQ0FBQyxLQUFzQixFQUFFLFNBQWtCLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3BHLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBRSxLQUFnQixDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDOUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3RFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzFELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztvQkFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN6RTtxQkFBTSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2lCQUNyRjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sb0JBQW9CO1FBQ3pCLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BJO2FBQU0sSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQXlCO1FBQzNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsS0FBSyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQy9FO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDM0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7OztZQTlERixVQUFVOzs7WUFMVSxTQUFTO1lBQUUsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcnMsIGNvbG9ycywgY29sb3JzQWxpYXNlcyB9IGZyb20gJy4vY29sb3IuZGVmaW5pdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbG9yU2VydmljZSB7XG4gIHByaXZhdGUgY3VycmVudEJhY2tncm91bmRTdHlsZTogYW55O1xuICBwcml2YXRlIGN1cnJlbnRCYWNrZ3JvdW5kQ2xhc3M6IGFueTtcbiAgcHJpdmF0ZSBjdXJyZW50Rm9udFN0eWxlOiBhbnk7XG4gIHByaXZhdGUgY3VycmVudEZvbnRDbGFzczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwdWJsaWMgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBDb2xvcnMgfCBzdHJpbmcsIGNvbmRpdGlvbjogYm9vbGVhbiwgcHJvcGVydHk6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29sb3IgJiYgY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLnJlc2V0QmFja2dyb3VuZENvbG9yKCk7XG4gICAgICBpZiAoY29sb3JzLmhhc093blByb3BlcnR5KGNvbG9yKSkge1xuICAgICAgICBjb25zdCBrbm93bkNvbG9yID0gY29sb3JzWyhjb2xvciBhcyBDb2xvcnMpXTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JnLWNvbG9yJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhY2tncm91bmRTdHlsZSA9IHtwcm9wZXJ0eSwgY29sb3I6IGtub3duQ29sb3J9O1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgcHJvcGVydHksIGtub3duQ29sb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdiZy1jb2xvcicpO1xuICAgICAgICBpZiAoY29sb3IuaW5kZXhPZignIycpID09PSAwIHx8IGNvbG9yLmluZGV4T2YoJ3JnYicpID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50QmFja2dyb3VuZFN0eWxlID0ge3Byb3BlcnR5LCBjb2xvcn07XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHByb3BlcnR5LCBjb2xvcik7XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzQWxpYXNlcy5pbmRleE9mKGNvbG9yKSAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kQ2xhc3MgPSBwcmVmaXggPyBgJHtwcmVmaXh9LSR7Y29sb3J9YCA6IGNvbG9yO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2V0QmFja2dyb3VuZENvbG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kU3R5bGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kU3R5bGUucHJvcGVydHksIHRoaXMuY3VycmVudEJhY2tncm91bmRTdHlsZS5jb2xvcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kQ2xhc3MpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLmN1cnJlbnRCYWNrZ3JvdW5kQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRGb250Q29sb3IoY29sb3I6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXRGb250Q29sb3IoKTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgaWYgKGNvbG9yLnN0YXJ0c1dpdGgoJyMnKSB8fCBjb2xvci5zdGFydHNXaXRoKCdyZ2InKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGb250U3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb2xvcicsIGNvbG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudEZvbnRDbGFzcyA9IGB0ZXh0LSR7Y29sb3J9YDtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY3VycmVudEZvbnRDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2V0Rm9udENvbG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmN1cnJlbnRGb250U3R5bGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29sb3InLCB0aGlzLmN1cnJlbnRGb250U3R5bGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50Rm9udENsYXNzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5jdXJyZW50Rm9udENsYXNzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
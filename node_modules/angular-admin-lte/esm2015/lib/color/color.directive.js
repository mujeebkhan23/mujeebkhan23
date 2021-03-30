import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { ColorService } from './color.service';
export class BackgroundColorDirective {
    constructor(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
        // TODO: ADD @Required decorator
        this.condition = true;
    }
    set setPrefix(prefix) {
        this.prefix = prefix;
        this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
    }
    set setColor(color) {
        if (color) {
            this.color = color;
            this.colorService.setBackgroundColor(this.color, this.condition, this.property, this.prefix);
        }
    }
}
BackgroundColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkColor]',
                providers: [ColorService]
            },] }
];
BackgroundColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ColorService }
];
BackgroundColorDirective.propDecorators = {
    condition: [{ type: Input, args: ['mkColorCondition',] }],
    setPrefix: [{ type: Input, args: ['mkColorPrefix',] }],
    property: [{ type: Input, args: ['mkColorProperty',] }],
    setColor: [{ type: Input, args: ['mkColor',] }]
};
export class ColorDirective {
    constructor(elementRef, renderer2, colorService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.colorService = colorService;
    }
    set color(color) {
        this.colorService.setFontColor(color);
    }
}
ColorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkFontColor]',
                providers: [ColorService]
            },] }
];
ColorDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ColorService }
];
ColorDirective.propDecorators = {
    color: [{ type: Input, args: ['mkFontColor',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2NvbG9yL2NvbG9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVEvQyxNQUFNLE9BQU8sd0JBQXdCO0lBa0JuQyxZQUNVLFVBQXNCLEVBQ3RCLFNBQW9CLEVBQ3BCLFlBQTBCO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQXBCcEMsZ0NBQWdDO1FBQ0wsY0FBUyxHQUFHLElBQUksQ0FBQztJQW9CekMsQ0FBQztJQW5CSixJQUE0QixTQUFTLENBQUMsTUFBYztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsSUFBc0IsUUFBUSxDQUFDLEtBQWtDO1FBQy9ELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUY7SUFDSCxDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDMUI7OztZQVRxQyxVQUFVO1lBQXJCLFNBQVM7WUFFM0IsWUFBWTs7O3dCQVVsQixLQUFLLFNBQUMsa0JBQWtCO3dCQUN4QixLQUFLLFNBQUMsZUFBZTt1QkFJckIsS0FBSyxTQUFDLGlCQUFpQjt1QkFDdkIsS0FBSyxTQUFDLFNBQVM7O0FBc0JsQixNQUFNLE9BQU8sY0FBYztJQUt6QixZQUNVLFVBQXNCLEVBQ3RCLFNBQW9CLEVBQ3BCLFlBQTBCO1FBRjFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNqQyxDQUFDO0lBUkosSUFBMEIsS0FBSyxDQUFDLEtBQXlCO1FBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCOzs7WUF2Q3FDLFVBQVU7WUFBckIsU0FBUztZQUUzQixZQUFZOzs7b0JBdUNsQixLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuL2NvbG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSAnLi9jb2xvci5kZWZpbml0aW9uJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWtDb2xvcl0nLFxuICBwcm92aWRlcnM6IFtDb2xvclNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRDb2xvckRpcmVjdGl2ZSB7XG4gIC8vIFRPRE86IEFERCBAUmVxdWlyZWQgZGVjb3JhdG9yXG4gIEBJbnB1dCgnbWtDb2xvckNvbmRpdGlvbicpIGNvbmRpdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgnbWtDb2xvclByZWZpeCcpIHNldCBzZXRQcmVmaXgocHJlZml4OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB0aGlzLmNvbG9yU2VydmljZS5zZXRCYWNrZ3JvdW5kQ29sb3IodGhpcy5jb2xvciwgdGhpcy5jb25kaXRpb24sIHRoaXMucHJvcGVydHksIHRoaXMucHJlZml4KTtcbiAgfVxuICBASW5wdXQoJ21rQ29sb3JQcm9wZXJ0eScpIHByb3BlcnR5ITogc3RyaW5nO1xuICBASW5wdXQoJ21rQ29sb3InKSBzZXQgc2V0Q29sb3IoY29sb3I6IENvbG9ycyB8IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChjb2xvcikge1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5jb2xvclNlcnZpY2Uuc2V0QmFja2dyb3VuZENvbG9yKHRoaXMuY29sb3IsIHRoaXMuY29uZGl0aW9uLCB0aGlzLnByb3BlcnR5LCB0aGlzLnByZWZpeCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVmaXghOiBzdHJpbmc7XG4gIHByaXZhdGUgY29sb3IhOiBDb2xvcnMgfCBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb2xvclNlcnZpY2U6IENvbG9yU2VydmljZVxuICApIHt9XG59XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21rRm9udENvbG9yXScsXG4gIHByb3ZpZGVyczogW0NvbG9yU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JEaXJlY3RpdmUge1xuICBASW5wdXQoJ21rRm9udENvbG9yJykgc2V0IGNvbG9yKGNvbG9yOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNvbG9yU2VydmljZS5zZXRGb250Q29sb3IoY29sb3IpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjb2xvclNlcnZpY2U6IENvbG9yU2VydmljZVxuICApIHt9XG59XG4iXX0=
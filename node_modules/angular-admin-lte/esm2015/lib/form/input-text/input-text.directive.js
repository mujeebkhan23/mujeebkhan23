import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ColorService } from '../../color/color.service';
import { ClassService } from '../../services/class.service';
// @TODO onFocus Color
export class InputTextDirective {
    constructor(elementRef, renderer2, ngControl, colorService, classService) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.ngControl = ngControl;
        this.colorService = colorService;
        this.classService = classService;
        this.defaultClass = 'form-control';
        this.isSetClass = false;
        this.onKeyUp = new Subject();
        this.onKeyup = this.onKeyUp.asObservable();
    }
    set borderColor(color) {
        this.colorService.setBackgroundColor(color, true, 'border-color', '');
    }
    set class(className) {
        this.isSetClass = true;
        this.classService.applyClasses(className);
    }
    set color(color) {
        this.colorService.setFontColor(color);
    }
    keyUpListener() {
        this.onKeyUp.next(this.ngControl);
    }
    ngOnInit() {
        if (!this.isSetClass) {
            this.classService.applyClasses(this.defaultClass);
        }
    }
}
InputTextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkInputText]',
                providers: [ColorService, ClassService]
            },] }
];
InputTextDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgControl },
    { type: ColorService },
    { type: ClassService }
];
InputTextDirective.propDecorators = {
    borderColor: [{ type: Input }],
    class: [{ type: Input }],
    color: [{ type: Input }],
    keyUpListener: [{ type: HostListener, args: ['keyup',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvZm9ybS9pbnB1dC10ZXh0L2lucHV0LXRleHQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFNUQsc0JBQXNCO0FBTXRCLE1BQU0sT0FBTyxrQkFBa0I7SUFzQjdCLFlBQ1MsVUFBc0IsRUFDdEIsU0FBb0IsRUFDbkIsU0FBb0IsRUFDcEIsWUFBMEIsRUFDMUIsWUFBMEI7UUFKM0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFmNUIsaUJBQVksR0FBRyxjQUFjLENBQUM7UUFDOUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQWEsQ0FBQztRQUVwQyxZQUFPLEdBQTBCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFZakUsQ0FBQztJQTNCSixJQUFhLFdBQVcsQ0FBQyxLQUFhO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELElBQWEsS0FBSyxDQUFDLFNBQWlCO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUFhLEtBQUssQ0FBQyxLQUFhO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFRc0IsYUFBYTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2FBQ3hDOzs7WUFicUMsVUFBVTtZQUFyQixTQUFTO1lBQzNCLFNBQVM7WUFJVCxZQUFZO1lBQ1osWUFBWTs7OzBCQVNsQixLQUFLO29CQUdMLEtBQUs7b0JBSUwsS0FBSzs0QkFVTCxZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgT25Jbml0LCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb2xvci9jb2xvci5zZXJ2aWNlJztcbmltcG9ydCB7IENsYXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NsYXNzLnNlcnZpY2UnO1xuXG4vLyBAVE9ETyBvbkZvY3VzIENvbG9yXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tta0lucHV0VGV4dF0nLFxuICBwcm92aWRlcnM6IFtDb2xvclNlcnZpY2UsIENsYXNzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRUZXh0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2V0IGJvcmRlckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbG9yU2VydmljZS5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IsIHRydWUsICdib3JkZXItY29sb3InLCAnJyk7XG4gIH1cbiAgQElucHV0KCkgc2V0IGNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pc1NldENsYXNzID0gdHJ1ZTtcbiAgICB0aGlzLmNsYXNzU2VydmljZS5hcHBseUNsYXNzZXMoY2xhc3NOYW1lKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgY29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuY29sb3JTZXJ2aWNlLnNldEZvbnRDb2xvcihjb2xvcik7XG4gIH1cblxuICBwcml2YXRlIGRlZmF1bHRDbGFzcyA9ICdmb3JtLWNvbnRyb2wnO1xuICBwcml2YXRlIGlzU2V0Q2xhc3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSBvbktleVVwID0gbmV3IFN1YmplY3Q8TmdDb250cm9sPigpO1xuXG4gIHB1YmxpYyBvbktleXVwOiBPYnNlcnZhYmxlPE5nQ29udHJvbD4gPSB0aGlzLm9uS2V5VXAuYXNPYnNlcnZhYmxlKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBrZXlVcExpc3RlbmVyKCk6IHZvaWQge1xuICAgIHRoaXMub25LZXlVcC5uZXh0KHRoaXMubmdDb250cm9sKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIHByaXZhdGUgY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjbGFzc1NlcnZpY2U6IENsYXNzU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzU2V0Q2xhc3MpIHtcbiAgICAgIHRoaXMuY2xhc3NTZXJ2aWNlLmFwcGx5Q2xhc3Nlcyh0aGlzLmRlZmF1bHRDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
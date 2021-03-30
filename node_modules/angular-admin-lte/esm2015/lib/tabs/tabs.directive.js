import { Directive, Input, ElementRef } from '@angular/core';
export class TabToggleDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
TabToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkTabToggle]'
            },] }
];
TabToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
TabToggleDirective.propDecorators = {
    tabComponent: [{ type: Input, args: ['mkTabToggle',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvdGFicy90YWJzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0QsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QixZQUNTLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDNUIsQ0FBQzs7O1lBVEwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7WUFOMEIsVUFBVTs7OzJCQVNsQyxLQUFLLFNBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFicy5jb21wb25lbnQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tta1RhYlRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRhYlRvZ2dsZURpcmVjdGl2ZSB7XG4gIC8vIFRPRE86IEFkZCBAUmVxdWlyZWQgZGVjb3JhdG9yXG4gIEBJbnB1dCgnbWtUYWJUb2dnbGUnKSB0YWJDb21wb25lbnQhOiBUYWJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxufVxuIl19
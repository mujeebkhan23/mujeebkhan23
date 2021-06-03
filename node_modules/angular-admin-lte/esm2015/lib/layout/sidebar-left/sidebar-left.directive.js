import { Directive, Input, ElementRef } from '@angular/core';
export class SidebarLeftToggleDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
SidebarLeftToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkMenuToggle]'
            },] }
];
SidebarLeftToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
SidebarLeftToggleDirective.propDecorators = {
    item: [{ type: Input, args: ['mkMenuToggle',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1sZWZ0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9sYXlvdXQvc2lkZWJhci1sZWZ0L3NpZGViYXItbGVmdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTdELE1BQU0sT0FBTywwQkFBMEI7SUFJckMsWUFDUyxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzVCLENBQUM7OztZQVRMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7WUFQMEIsVUFBVTs7O21CQVVsQyxLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vc2lkZWJhci1sZWZ0LmNvbXBvbmVudCc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21rTWVudVRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFNpZGViYXJMZWZ0VG9nZ2xlRGlyZWN0aXZlIHtcbiAgLy8gVE9ETzogQWRkIEBSZXF1aXJlZCBkZWNvcmF0b3JcbiAgQElucHV0KCdta01lbnVUb2dnbGUnKSBpdGVtITogSXRlbTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG59XG4iXX0=
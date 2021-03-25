import { Injectable, Renderer2, ElementRef } from '@angular/core';
export class ClassService {
    constructor(elementRef, renderer2) {
        this.elementRef = elementRef;
        this.renderer2 = renderer2;
        this.currentClasses = [];
    }
    applyClasses(cssClasses) {
        if (typeof cssClasses === 'string') {
            cssClasses = cssClasses.split(' ');
        }
        // Remove only classes that are not in cssClasses
        const classesToRemove = this.currentClasses.filter(x => cssClasses.indexOf(x) === -1);
        classesToRemove.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer2.removeClass(this.elementRef.nativeElement, cssClasse);
            }
        });
        // Add only classes that are not in currentClasses
        const classesToAdd = cssClasses.filter(x => this.currentClasses.indexOf(x) === -1);
        classesToAdd.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer2.addClass(this.elementRef.nativeElement, cssClasse);
            }
        });
        // Update current classes for future updates
        this.currentClasses = [...cssClasses];
    }
}
ClassService.decorators = [
    { type: Injectable }
];
ClassService.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9zZXJ2aWNlcy9jbGFzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlsRSxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUNVLFVBQXNCLEVBQ3RCLFNBQW9CO1FBRHBCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUp0QixtQkFBYyxHQUFhLEVBQUUsQ0FBQztJQUtuQyxDQUFDO0lBRUcsWUFBWSxDQUFDLFVBQTZCO1FBQy9DLElBQUksT0FBTyxVQUFVLEtBQUssUUFBUSxFQUFFO1lBQ2xDLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsaURBQWlEO1FBQ2pELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLGVBQWUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDdEU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGtEQUFrRDtRQUNsRCxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRixZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9CLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ25FO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUksVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7O1lBaENGLFVBQVU7OztZQUhxQixVQUFVO1lBQXJCLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2xhc3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjdXJyZW50Q2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHVibGljIGFwcGx5Q2xhc3Nlcyhjc3NDbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgY3NzQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNzc0NsYXNzZXMgPSBjc3NDbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIG9ubHkgY2xhc3NlcyB0aGF0IGFyZSBub3QgaW4gY3NzQ2xhc3Nlc1xuICAgIGNvbnN0IGNsYXNzZXNUb1JlbW92ZSA9IHRoaXMuY3VycmVudENsYXNzZXMuZmlsdGVyKHggPT4gY3NzQ2xhc3Nlcy5pbmRleE9mKHgpID09PSAtMSk7XG4gICAgY2xhc3Nlc1RvUmVtb3ZlLmZvckVhY2goY3NzQ2xhc3NlID0+IHtcbiAgICAgIGlmIChjc3NDbGFzc2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgb25seSBjbGFzc2VzIHRoYXQgYXJlIG5vdCBpbiBjdXJyZW50Q2xhc3Nlc1xuICAgIGNvbnN0IGNsYXNzZXNUb0FkZCA9IGNzc0NsYXNzZXMuZmlsdGVyKHggPT4gdGhpcy5jdXJyZW50Q2xhc3Nlcy5pbmRleE9mKHgpID09PSAtMSk7XG4gICAgY2xhc3Nlc1RvQWRkLmZvckVhY2goY3NzQ2xhc3NlID0+IHtcbiAgICAgIGlmIChjc3NDbGFzc2UpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgY3VycmVudCBjbGFzc2VzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgIHRoaXMuY3VycmVudENsYXNzZXMgPSBbLi4uIGNzc0NsYXNzZXNdO1xuICB9XG59XG4iXX0=
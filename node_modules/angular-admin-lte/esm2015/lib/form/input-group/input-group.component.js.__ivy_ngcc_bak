import { Component, ContentChild, Input } from '@angular/core';
import { removeSubscriptions } from '../../helpers';
import { InputGroupAddonLeftDirective, InputGroupAddonRightDirective, InputGroupContentDirective, InputGroupLabelDirective } from './input-group.directive';
import { InputTextDirective } from '../input-text/input-text.directive';
export class InputGroupComponent {
    constructor() {
        this.inputColor = 'default';
        this.inputErrorColor = 'danger';
        this.inputValidColor = 'success';
        this.wrapperClasses = 'form-group';
        this.subscriptions = [];
    }
    ngAfterContentInit() {
        if (this.inputTextDirective) {
            this.subscriptions.push(this.inputTextDirective.onKeyup.subscribe((value) => {
                if (value.invalid) {
                    this.currentColor = this.inputErrorColor;
                    this.currentFontColor = this.inputErrorFontColor;
                }
                else if (!value.invalid) {
                    this.currentColor = this.inputValidColor;
                    this.currentFontColor = this.inputValidFontColor;
                }
                else {
                    this.currentColor = this.inputColor;
                    this.currentFontColor = this.inputFontColor;
                }
            }));
        }
    }
    ngOnDestroy() {
        removeSubscriptions(this.subscriptions);
    }
}
InputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-input-group',
                template: "<div [ngClass]=\"wrapperClasses\" [mkColor]=\"currentColor || inputColor\" mkColorPrefix=\"has\">\n  <label *ngIf=\"label || inputGroupLabelDirective\">\n    {{label}}\n    <ng-content select=\"mk-input-group-label\"></ng-content>\n  </label>\n  <div *ngIf=\"addonLeft || inputGroupAddonLeftDirective || addonRight || inputGroupAddonRightDirective; else noAddon\" class=\"input-group\">\n    <span *ngIf=\"addonLeft || inputGroupAddonLeftDirective\" class=\"input-group-addon\">\n      {{addonLeft}}\n      <ng-content select=\"mk-input-group-addon-left\"></ng-content>\n    </span>\n    <ng-content select=\"mk-input-group-content\"></ng-content>\n    <span *ngIf=\"addonRight || inputGroupAddonRightDirective\" class=\"input-group-addon\">\n      {{addonRight}}\n      <ng-content select=\"mk-input-group-addon-right\"></ng-content>\n    </span>\n  </div>\n  <ng-template #noAddon><ng-content select=\"mk-input-group-content\"></ng-content></ng-template>\n</div>\n"
            },] }
];
InputGroupComponent.propDecorators = {
    addonLeft: [{ type: Input }],
    addonRight: [{ type: Input }],
    inputColor: [{ type: Input }],
    inputFontColor: [{ type: Input }],
    inputErrorColor: [{ type: Input }],
    inputErrorFontColor: [{ type: Input }],
    inputValidColor: [{ type: Input }],
    inputValidFontColor: [{ type: Input }],
    label: [{ type: Input }],
    wrapperClasses: [{ type: Input }],
    inputGroupLabelDirective: [{ type: ContentChild, args: [InputGroupLabelDirective,] }],
    inputGroupAddonLeftDirective: [{ type: ContentChild, args: [InputGroupAddonLeftDirective,] }],
    inputGroupAddonRightDirective: [{ type: ContentChild, args: [InputGroupAddonRightDirective,] }],
    inputGroupContentDirective: [{ type: ContentChild, args: [InputGroupContentDirective,] }],
    inputTextDirective: [{ type: ContentChild, args: [InputTextDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2Zvcm0vaW5wdXQtZ3JvdXAvaW5wdXQtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFLNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsNkJBQTZCLEVBQzdCLDBCQUEwQixFQUMxQix3QkFBd0IsRUFDekIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU94RSxNQUFNLE9BQU8sbUJBQW1CO0lBSmhDO1FBT1csZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUV2QixvQkFBZSxHQUFHLFFBQVEsQ0FBQztRQUUzQixvQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUc1QixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQVEvQixrQkFBYSxHQUFtQixFQUFFLENBQUM7SUF5QjdDLENBQUM7SUFwQkMsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO2dCQUNyRixJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztpQkFDbEQ7cUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztpQkFDN0M7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUE5Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGs5QkFBMkM7YUFDNUM7Ozt3QkFFRSxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3VDQUVMLFlBQVksU0FBQyx3QkFBd0I7MkNBQ3JDLFlBQVksU0FBQyw0QkFBNEI7NENBQ3pDLFlBQVksU0FBQyw2QkFBNkI7eUNBQzFDLFlBQVksU0FBQywwQkFBMEI7aUNBQ3ZDLFlBQVksU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgcmVtb3ZlU3Vic2NyaXB0aW9ucyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgSW5wdXRHcm91cEFkZG9uTGVmdERpcmVjdGl2ZSxcbiAgSW5wdXRHcm91cEFkZG9uUmlnaHREaXJlY3RpdmUsXG4gIElucHV0R3JvdXBDb250ZW50RGlyZWN0aXZlLFxuICBJbnB1dEdyb3VwTGFiZWxEaXJlY3RpdmVcbn0gZnJvbSAnLi9pbnB1dC1ncm91cC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW5wdXRUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0LmRpcmVjdGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstaW5wdXQtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIElucHV0R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBhZGRvbkxlZnQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFkZG9uUmlnaHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlucHV0Q29sb3IgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGlucHV0Rm9udENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dEVycm9yQ29sb3IgPSAnZGFuZ2VyJztcbiAgQElucHV0KCkgaW5wdXRFcnJvckZvbnRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgaW5wdXRWYWxpZENvbG9yID0gJ3N1Y2Nlc3MnO1xuICBASW5wdXQoKSBpbnB1dFZhbGlkRm9udENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbD86IHN0cmluZztcbiAgQElucHV0KCkgd3JhcHBlckNsYXNzZXMgPSAnZm9ybS1ncm91cCc7XG5cbiAgQENvbnRlbnRDaGlsZChJbnB1dEdyb3VwTGFiZWxEaXJlY3RpdmUpIHB1YmxpYyBpbnB1dEdyb3VwTGFiZWxEaXJlY3RpdmU/OiBJbnB1dEdyb3VwTGFiZWxEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoSW5wdXRHcm91cEFkZG9uTGVmdERpcmVjdGl2ZSkgcHVibGljIGlucHV0R3JvdXBBZGRvbkxlZnREaXJlY3RpdmU/OiBJbnB1dEdyb3VwQWRkb25MZWZ0RGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKElucHV0R3JvdXBBZGRvblJpZ2h0RGlyZWN0aXZlKSBwdWJsaWMgaW5wdXRHcm91cEFkZG9uUmlnaHREaXJlY3RpdmU/OiBJbnB1dEdyb3VwQWRkb25SaWdodERpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChJbnB1dEdyb3VwQ29udGVudERpcmVjdGl2ZSkgcHVibGljIGlucHV0R3JvdXBDb250ZW50RGlyZWN0aXZlPzogSW5wdXRHcm91cENvbnRlbnREaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoSW5wdXRUZXh0RGlyZWN0aXZlKSBwdWJsaWMgaW5wdXRUZXh0RGlyZWN0aXZlPzogSW5wdXRUZXh0RGlyZWN0aXZlO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICBwdWJsaWMgY3VycmVudENvbG9yPzogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEZvbnRDb2xvcj86IHN0cmluZztcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRUZXh0RGlyZWN0aXZlKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmlucHV0VGV4dERpcmVjdGl2ZS5vbktleXVwLnN1YnNjcmliZSgodmFsdWU6IE5nQ29udHJvbCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUuaW52YWxpZCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudENvbG9yID0gdGhpcy5pbnB1dEVycm9yQ29sb3I7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Rm9udENvbG9yID0gdGhpcy5pbnB1dEVycm9yRm9udENvbG9yO1xuICAgICAgICB9IGVsc2UgaWYgKCF2YWx1ZS5pbnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSB0aGlzLmlucHV0VmFsaWRDb2xvcjtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRGb250Q29sb3IgPSB0aGlzLmlucHV0VmFsaWRGb250Q29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSB0aGlzLmlucHV0Q29sb3I7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Rm9udENvbG9yID0gdGhpcy5pbnB1dEZvbnRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHJlbW92ZVN1YnNjcmlwdGlvbnModGhpcy5zdWJzY3JpcHRpb25zKTtcbiAgfVxufVxuIl19
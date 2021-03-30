import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorModule } from '../../color/color.module';
import { InputTextDirective } from './input-text.directive';
export { InputTextDirective } from './input-text.directive';
export class InputTextModule {
}
InputTextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ColorModule,
                    FormsModule
                ],
                exports: [InputTextDirective],
                declarations: [InputTextDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvZm9ybS9pbnB1dC10ZXh0L2lucHV0LXRleHQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFXNUQsTUFBTSxPQUFPLGVBQWU7OztZQVQzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbG9yTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29sb3IvY29sb3IubW9kdWxlJztcblxuaW1wb3J0IHsgSW5wdXRUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC10ZXh0LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB7IElucHV0VGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtdGV4dC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvbG9yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtJbnB1dFRleHREaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dFRleHREaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIElucHV0VGV4dE1vZHVsZSB7fVxuIl19
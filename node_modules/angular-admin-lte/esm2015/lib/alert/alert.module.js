import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsModule } from '../animations/animations.module';
import { ColorModule } from '../color/color.module';
import { AlertComponent } from './alert.component';
export { AlertComponent } from './alert.component';
export class AlertModule {
}
AlertModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, AnimationsModule, ColorModule],
                exports: [AlertComponent],
                declarations: [AlertComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2FsZXJ0L2FsZXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9uRCxNQUFNLE9BQU8sV0FBVzs7O1lBTHZCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQzthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBDb2xvck1vZHVsZSB9IGZyb20gJy4uL2NvbG9yL2NvbG9yLm1vZHVsZSc7XG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcblxuZXhwb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQW5pbWF0aW9uc01vZHVsZSwgQ29sb3JNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtBbGVydENvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQWxlcnRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0TW9kdWxlIHt9XG4iXX0=
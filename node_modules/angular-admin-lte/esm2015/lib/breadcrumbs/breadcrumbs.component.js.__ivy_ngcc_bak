import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { RoutingService } from '../services/routing.service';
export class BreadcrumbsComponent {
    constructor(routingService, changeDetectorRef) {
        this.routingService = routingService;
        this.changeDetectorRef = changeDetectorRef;
        this.homeIcon = 'fa fa-home';
    }
    ngOnInit() {
        this.subscription = this.routingService.onChange.subscribe(paths => {
            this.breadcrumbs = paths;
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-breadcrumbs',
                template: "<ol class=\"breadcrumb\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let first = first; let last = last\" [class.active]=\"last || !breadcrumb.url\">\n    <a *ngIf=\"breadcrumb.url && !last; else noLink\" [routerLink]=\"breadcrumb.url\">\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </a>\n    <ng-template #noLink>\n      <i *ngIf=\"first\" ngClass=\"{{homeIcon}}\"></i>\n      <ng-template [ngIf]=\"breadcrumb.data.breadcrumbs\">{{breadcrumb.data.breadcrumbs}}</ng-template>\n      <ng-template [ngIf]=\"breadcrumb.data.title\">{{breadcrumb.data.title}}</ng-template>\n    </ng-template>\n  </li>\n</ol>\n",
                styles: [".breadcrumb{background:transparent;border-radius:2px;float:right;font-size:12px;margin-bottom:0;margin-top:0;padding:7px 5px;position:absolute;right:10px;top:15px}.breadcrumb>li>a{color:#444;display:inline-block;text-decoration:none}.breadcrumb>li .fa,.breadcrumb>li .glyphicon,.breadcrumb>li .ion{margin-right:5px}"]
            },] }
];
BreadcrumbsComponent.ctorParameters = () => [
    { type: RoutingService },
    { type: ChangeDetectorRef }
];
BreadcrumbsComponent.propDecorators = {
    homeIcon: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2RixPQUFPLEVBQVEsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFnQm5FLE1BQU0sT0FBTyxvQkFBb0I7SUFPL0IsWUFDVSxjQUE4QixFQUM5QixpQkFBb0M7UUFEcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSOUIsYUFBUSxHQUFHLFlBQVksQ0FBQztJQVNyQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsbzBCQUEyQzs7YUFFNUM7OztZQWZjLGNBQWM7WUFKaUIsaUJBQWlCOzs7dUJBcUI1RCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBQYXRoLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JvdXRpbmcuc2VydmljZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1icyBleHRlbmRzIFBhdGgge1xuICBkYXRhOiB7XG4gICAgYnJlYWRjcnVtYnM/OiBzdHJpbmc7XG4gICAgdGl0bGU/OiBzdHJpbmdcbiAgfTtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtay1icmVhZGNydW1icycsXG4gIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIGhvbWVJY29uID0gJ2ZhIGZhLWhvbWUnO1xuXG4gIHB1YmxpYyBicmVhZGNydW1icz86IEJyZWFkY3J1bWJzIFtdO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGluZ1NlcnZpY2Uub25DaGFuZ2Uuc3Vic2NyaWJlKHBhdGhzID0+IHtcbiAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBwYXRocztcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
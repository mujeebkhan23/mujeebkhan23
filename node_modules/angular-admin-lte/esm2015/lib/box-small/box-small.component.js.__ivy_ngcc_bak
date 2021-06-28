import { Component, Input, ContentChild } from '@angular/core';
import { BoxSmallContentDirective, BoxSmallFooterDirective, BoxSmallHeaderDirective } from './box-small.directive';
export class BoxSmallComponent {
    constructor() {
        this.contentStyleClass = 'small-box-content';
        this.footerStyleClass = 'small-box-footer';
        this.headerStyleClass = 'small-box-header';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'small-box';
    }
}
BoxSmallComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-box-small',
                template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <div class=\"inner\">\n    <h3 *ngIf=\"header || boxSmallHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-small-header\"></ng-content>\n    </h3>\n    <p [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxSmallHeaderDirective || boxSmallContentDirective || boxSmallFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-small-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </p>\n  </div>\n  <div *ngIf=\"iconStyleClass\" class=\"icon\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </div>\n  <span *ngIf=\"footer || boxSmallFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n    {{footer}}\n    <ng-content select=\"mk-box-small-footer\"></ng-content>\n  </span>\n</div>\n",
                styles: [".small-box.bg-color{color:#fff}/deep/ .small-box-footer:hover{cursor:pointer}/deep/ .small-box-footer a{color:hsla(0,0%,100%,.8)}/deep/ .small-box-footer:hover a{color:#fff}"]
            },] }
];
BoxSmallComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    contentColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    footer: [{ type: Input }],
    footerColor: [{ type: Input }],
    footerStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconStyleClass: [{ type: Input }],
    styleClass: [{ type: Input }],
    boxSmallHeaderDirective: [{ type: ContentChild, args: [BoxSmallHeaderDirective,] }],
    boxSmallFooterDirective: [{ type: ContentChild, args: [BoxSmallFooterDirective,] }],
    boxSmallContentDirective: [{ type: ContentChild, args: [BoxSmallContentDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LXNtYWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnJhcnkvYW5ndWxhci1hZG1pbi1sdGUvc3JjL2xpYi9ib3gtc21hbGwvYm94LXNtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFRbkgsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVFrQixzQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztRQUd4QyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUd0QyxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUV0QyxtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUMvQixlQUFVLEdBQUcsV0FBVyxDQUFDO0lBSzNDLENBQUM7OztZQXRCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLCtqQ0FBeUM7O2FBRTFDOzs7OEJBRUUsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7c0NBRUwsWUFBWSxTQUFDLHVCQUF1QjtzQ0FDcEMsWUFBWSxTQUFDLHVCQUF1Qjt1Q0FDcEMsWUFBWSxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb3hTbWFsbENvbnRlbnREaXJlY3RpdmUsIEJveFNtYWxsRm9vdGVyRGlyZWN0aXZlLCBCb3hTbWFsbEhlYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4vYm94LXNtYWxsLmRpcmVjdGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstYm94LXNtYWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JveC1zbWFsbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JveC1zbWFsbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm94U21hbGxDb21wb25lbnQge1xuICBASW5wdXQoKSBwdWJsaWMgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudFN0eWxlQ2xhc3MgPSAnc21hbGwtYm94LWNvbnRlbnQnO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmb290ZXJTdHlsZUNsYXNzID0gJ3NtYWxsLWJveC1mb290ZXInO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJTdHlsZUNsYXNzID0gJ3NtYWxsLWJveC1oZWFkZXInO1xuICBASW5wdXQoKSBwdWJsaWMgaWNvbkNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaWNvblN0eWxlQ2xhc3MgPSAnaW9uIGlvbi1iYWcnO1xuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzcyA9ICdzbWFsbC1ib3gnO1xuXG4gIEBDb250ZW50Q2hpbGQoQm94U21hbGxIZWFkZXJEaXJlY3RpdmUpIHB1YmxpYyBib3hTbWFsbEhlYWRlckRpcmVjdGl2ZT86IEJveFNtYWxsSGVhZGVyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEJveFNtYWxsRm9vdGVyRGlyZWN0aXZlKSBwdWJsaWMgYm94U21hbGxGb290ZXJEaXJlY3RpdmU/OiBCb3hTbWFsbEZvb3RlckRpcmVjdGl2ZTtcbiAgQENvbnRlbnRDaGlsZChCb3hTbWFsbENvbnRlbnREaXJlY3RpdmUpIHB1YmxpYyBib3hTbWFsbENvbnRlbnREaXJlY3RpdmU/OiBCb3hTbWFsbENvbnRlbnREaXJlY3RpdmU7XG59XG4iXX0=
import { Component, Input, ContentChild } from '@angular/core';
import { BoxInfoContentDirective, BoxInfoFooterDirective, BoxInfoHeaderDirective } from './box-info.directive';
export class BoxInfoComponent {
    constructor() {
        this.contentStyleClass = 'info-box-number';
        this.footerStyleClass = 'progress-description';
        this.headerStyleClass = 'info-box-text';
        this.iconColor = '#fff';
        this.iconStyleClass = 'ion ion-bag';
        this.styleClass = 'info-box';
    }
    ngOnInit() {
        if (!this.backgroundColor) {
            this.progressBarBg = this.iconBackgroundColor;
        }
    }
}
BoxInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'mk-box-info',
                template: "<div [ngClass]=\"styleClass\" [mkColor]=\"backgroundColor\" mkColorProperty=\"background-color\">\n  <span class=\"info-box-icon\" [mkColor]=\"iconBackgroundColor\" mkColorProperty=\"background-color\">\n    <i [ngClass]=\"iconStyleClass\" [mkFontColor]=\"iconColor\"></i>\n  </span>\n  <div class=\"info-box-content\">\n    <span *ngIf=\"header || boxInfoHeaderDirective\" [ngClass]=\"headerStyleClass\" [mkFontColor]=\"headerColor\">\n      {{header}}\n      <ng-content select=\"mk-box-header\"></ng-content>\n    </span>\n    <span [ngClass]=\"contentStyleClass\" [mkFontColor]=\"contentColor\">\n      <ng-container *ngIf=\"boxInfoHeaderDirective || boxInfoContentDirective || boxInfoFooterDirective; else noDirective\">\n        <ng-content select=\"mk-box-content\"></ng-content>\n      </ng-container>\n      <ng-template #noDirective>\n        <ng-content></ng-content>\n      </ng-template>\n    </span>\n    <div *ngIf=\"progressWidth\" class=\"progress\">\n      <div class=\"progress-bar\" [mkColor]=\"progressBarBg\" mkColorProperty=\"background-color\" [style.width.%]=\"progressWidth\"></div>\n    </div>\n    <span *ngIf=\"footer || boxInfoFooterDirective\" [ngClass]=\"footerStyleClass\" [mkFontColor]=\"footerColor\">\n      {{footer}}\n      <ng-content select=\"mk-box-footer\"></ng-content>\n    </span>\n  </div>\n</div>\n",
                styles: [".info-box.bg-color>.info-box-content{color:#fff}"]
            },] }
];
BoxInfoComponent.propDecorators = {
    backgroundColor: [{ type: Input }],
    contentStyleClass: [{ type: Input }],
    contentColor: [{ type: Input }],
    footer: [{ type: Input }],
    footerColor: [{ type: Input }],
    footerStyleClass: [{ type: Input }],
    header: [{ type: Input }],
    headerColor: [{ type: Input }],
    headerStyleClass: [{ type: Input }],
    iconBackgroundColor: [{ type: Input }],
    iconColor: [{ type: Input }],
    iconStyleClass: [{ type: Input }],
    progressWidth: [{ type: Input }],
    styleClass: [{ type: Input }],
    boxInfoHeaderDirective: [{ type: ContentChild, args: [BoxInfoHeaderDirective,] }],
    boxInfoFooterDirective: [{ type: ContentChild, args: [BoxInfoFooterDirective,] }],
    boxInfoContentDirective: [{ type: ContentChild, args: [BoxInfoContentDirective,] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbGlicmFyeS9hbmd1bGFyLWFkbWluLWx0ZS9zcmMvbGliL2JveC1pbmZvL2JveC1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFRL0csTUFBTSxPQUFPLGdCQUFnQjtJQUw3QjtRQU9rQixzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUl0QyxxQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQztRQUcxQyxxQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFFbkMsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUUvQixlQUFVLEdBQUcsVUFBVSxDQUFDO0lBYTFDLENBQUM7SUFMQyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUV2Qiw2MENBQXdDOzthQUN6Qzs7OzhCQUVFLEtBQUs7Z0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2tDQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQ0FFTCxZQUFZLFNBQUMsc0JBQXNCO3FDQUNuQyxZQUFZLFNBQUMsc0JBQXNCO3NDQUNuQyxZQUFZLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm94SW5mb0NvbnRlbnREaXJlY3RpdmUsIEJveEluZm9Gb290ZXJEaXJlY3RpdmUsIEJveEluZm9IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JveC1pbmZvLmRpcmVjdGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWstYm94LWluZm8nLFxuICBzdHlsZVVybHM6IFsnLi9ib3gtaW5mby5jb21wb25lbnQuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9ib3gtaW5mby5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQm94SW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb250ZW50U3R5bGVDbGFzcyA9ICdpbmZvLWJveC1udW1iZXInO1xuICBASW5wdXQoKSBwdWJsaWMgY29udGVudENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZm9vdGVyQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmb290ZXJTdHlsZUNsYXNzID0gJ3Byb2dyZXNzLWRlc2NyaXB0aW9uJztcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGhlYWRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyU3R5bGVDbGFzcyA9ICdpbmZvLWJveC10ZXh0JztcbiAgQElucHV0KCkgcHVibGljIGljb25CYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBpY29uQ29sb3IgPSAnI2ZmZic7XG4gIEBJbnB1dCgpIHB1YmxpYyBpY29uU3R5bGVDbGFzcyA9ICdpb24gaW9uLWJhZyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwcm9ncmVzc1dpZHRoPzogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgc3R5bGVDbGFzcyA9ICdpbmZvLWJveCc7XG5cbiAgQENvbnRlbnRDaGlsZChCb3hJbmZvSGVhZGVyRGlyZWN0aXZlKSBwdWJsaWMgYm94SW5mb0hlYWRlckRpcmVjdGl2ZT86IEJveEluZm9IZWFkZXJEaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoQm94SW5mb0Zvb3RlckRpcmVjdGl2ZSkgcHVibGljIGJveEluZm9Gb290ZXJEaXJlY3RpdmU/OiBCb3hJbmZvRm9vdGVyRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKEJveEluZm9Db250ZW50RGlyZWN0aXZlKSBwdWJsaWMgYm94SW5mb0NvbnRlbnREaXJlY3RpdmU/OiBCb3hJbmZvQ29udGVudERpcmVjdGl2ZTtcblxuICBwdWJsaWMgcHJvZ3Jlc3NCYXJCZz86IHN0cmluZztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICB0aGlzLnByb2dyZXNzQmFyQmcgPSB0aGlzLmljb25CYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICB9XG59XG4iXX0=
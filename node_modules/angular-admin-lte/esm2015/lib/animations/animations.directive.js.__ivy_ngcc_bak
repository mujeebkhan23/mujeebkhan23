import { Directive, Input, Output, ElementRef, EventEmitter, Renderer2, NgZone } from '@angular/core';
export class CollapseAnimationDirective {
    constructor(elementRef, ngZone, renderer2) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer2 = renderer2;
        this.collapseAnimationDuration = 350;
        // tslint:disable-next-line:no-output-rename
        this.startEventEmitter = new EventEmitter();
        // tslint:disable-next-line:no-output-rename
        this.doneEventEmitter = new EventEmitter();
        this.firstStart = true;
        this.isCollapsed = false;
        this.lastIsCollapsed = false;
        this.transitioning = false;
    }
    set _isCollapsed(value) {
        this.lastIsCollapsed = this.isCollapsed;
        this.isCollapsed = value;
        if (!this.firstStart) {
            this.emit('start');
            if (value) {
                this.collapse();
            }
            else if (!value) {
                this.unCollapse();
            }
        }
    }
    ngOnInit() {
        if (this.collapseAnimationDuration && this.collapseAnimationDuration !== 350) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-duration', `${this.collapseAnimationDuration}ms`);
        }
        if (this.collapseAnimationTiming) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'transition-timing-function', this.collapseAnimationTiming);
        }
    }
    ngAfterContentInit() {
        this.emit('start');
        if (this.isCollapsed) {
            this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
        }
        this.emit('done');
        this.firstStart = false;
        this.subscriptions();
    }
    ngOnDestroy() {
        if (this.listener) {
            this.listener();
        }
    }
    subscriptions() {
        this.ngZone.runOutsideAngular(() => {
            this.listener = this.renderer2.listen(this.elementRef.nativeElement, 'transitionend', () => {
                if (!this.isCollapsed) {
                    this.renderer2.removeClass(this.elementRef.nativeElement, 'un-collapse');
                    this.renderer2.removeClass(this.elementRef.nativeElement, 'collapsing');
                }
                else {
                    this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
                }
                requestAnimationFrame(() => {
                    this.renderer2.removeStyle(this.elementRef.nativeElement, 'height');
                    this.emit('done');
                    this.transitioning = false;
                });
            });
        });
    }
    unCollapse() {
        this.transitioning = true;
        this.renderer2.addClass(this.elementRef.nativeElement, 'un-collapse');
        this.renderer2.removeStyle(this.elementRef.nativeElement, 'display');
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `${this.elementRef.nativeElement.scrollHeight}px`);
    }
    collapse() {
        requestAnimationFrame(() => {
            if (!this.transitioning) {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `${this.elementRef.nativeElement.offsetHeight}px`);
                this.renderer2.addClass(this.elementRef.nativeElement, 'collapsing');
            }
            this.transitioning = true;
            requestAnimationFrame(() => {
                this.renderer2.setStyle(this.elementRef.nativeElement, 'height', `0px`);
            });
        });
    }
    emit(phaseName) {
        const event = {
            element: this.elementRef.nativeElement,
            fromState: this.lastIsCollapsed === undefined ? 'void' : this.lastIsCollapsed ? '1' : '0',
            phaseName,
            toState: this.isCollapsed === undefined ? 'void' : this.isCollapsed ? '1' : '0',
            totalTime: this.collapseAnimationDuration,
            triggerName: 'mkCollapseAnimation'
        };
        if (phaseName === 'done') {
            this.doneEventEmitter.emit(event);
        }
        else if (phaseName === 'start') {
            this.startEventEmitter.emit(event);
        }
    }
}
CollapseAnimationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mkCollapseAnimation]'
            },] }
];
CollapseAnimationDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
CollapseAnimationDirective.propDecorators = {
    collapseAnimationDuration: [{ type: Input }],
    collapseAnimationTiming: [{ type: Input }],
    _isCollapsed: [{ type: Input, args: ['mkCollapseAnimation',] }],
    startEventEmitter: [{ type: Output, args: ['mkCollapseAnimation.start',] }],
    doneEventEmitter: [{ type: Output, args: ['mkCollapseAnimation.done',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJyYXJ5L2FuZ3VsYXItYWRtaW4tbHRlL3NyYy9saWIvYW5pbWF0aW9ucy9hbmltYXRpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQVEzSSxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQyxZQUNVLFVBQXNCLEVBQ3RCLE1BQWMsRUFDZCxTQUFvQjtRQUZwQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBN0JkLDhCQUF5QixHQUFHLEdBQUcsQ0FBQztRQWVoRCw0Q0FBNEM7UUFDQSxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25GLDRDQUE0QztRQUNELHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQU8zQixDQUFDO0lBNUJKLElBQXlDLFlBQVksQ0FBQyxLQUFjO1FBQ2xFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25CLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLEVB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Q0FBQyxHQUFHO1lBQ3pGLFNBQVM7WUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQy9FLFNBQVMsRUFBRSxJQUFJLENBQUMseUJBQXlCO1lBQ3pDLFdBQVcsRUFBRSxxQkFBcUI7U0FDbkMsQ0FBQztRQUVGLElBQUksU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7WUFwSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7OztZQVBrQyxVQUFVO1lBQTJCLE1BQU07WUFBakIsU0FBUzs7O3dDQVNuRSxLQUFLO3NDQUNMLEtBQUs7MkJBQ0wsS0FBSyxTQUFDLHFCQUFxQjtnQ0FjM0IsTUFBTSxTQUFDLDJCQUEyQjsrQkFFbEMsTUFBTSxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBSZW5kZXJlcjIsIE5nWm9uZSwgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICcuL2FuaW1hdGlvbnMuaW50ZXJmYWNlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWtDb2xsYXBzZUFuaW1hdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlQW5pbWF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbiA9IDM1MDtcbiAgQElucHV0KCkgcHVibGljIGNvbGxhcHNlQW5pbWF0aW9uVGltaW5nPzogc3RyaW5nO1xuICBASW5wdXQoJ21rQ29sbGFwc2VBbmltYXRpb24nKSBwdWJsaWMgc2V0IF9pc0NvbGxhcHNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMubGFzdElzQ29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLmZpcnN0U3RhcnQpIHtcbiAgICAgIHRoaXMuZW1pdCgnc3RhcnQnKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XG4gICAgICB9IGVsc2UgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLnVuQ29sbGFwc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdta0NvbGxhcHNlQW5pbWF0aW9uLnN0YXJ0JykgcHVibGljIHN0YXJ0RXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdta0NvbGxhcHNlQW5pbWF0aW9uLmRvbmUnKSBwdWJsaWMgZG9uZUV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIGZpcnN0U3RhcnQgPSB0cnVlO1xuICBwcml2YXRlIGlzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgbGFzdElzQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgdHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGxpc3RlbmVyPzogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2xsYXBzZUFuaW1hdGlvbkR1cmF0aW9uICYmIHRoaXMuY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbiAhPT0gMzUwKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24tZHVyYXRpb24nLCBgJHt0aGlzLmNvbGxhcHNlQW5pbWF0aW9uRHVyYXRpb259bXNgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sbGFwc2VBbmltYXRpb25UaW1pbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCB0aGlzLmNvbGxhcHNlQW5pbWF0aW9uVGltaW5nKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5lbWl0KCdzdGFydCcpO1xuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdjb2xsYXBzaW5nJyk7XG4gICAgfVxuICAgIHRoaXMuZW1pdCgnZG9uZScpO1xuICAgIHRoaXMuZmlyc3RTdGFydCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgdGhpcy5saXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmxpc3RlbmVyID0gdGhpcy5yZW5kZXJlcjIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd1bi1jb2xsYXBzZScpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY29sbGFwc2luZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyMi5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICAgIHRoaXMuZW1pdCgnZG9uZScpO1xuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1bkNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd1bi1jb2xsYXBzZScpO1xuICAgIHRoaXMucmVuZGVyZXIyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIHRoaXMucmVuZGVyZXIyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YCk7XG4gIH1cblxuICBwcml2YXRlIGNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMudHJhbnNpdGlvbmluZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodH1weGApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NvbGxhcHNpbmcnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHRydWU7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyMi5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAwcHhgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0KHBoYXNlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IEFuaW1hdGlvbkV2ZW50ID0ge1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmcm9tU3RhdGU6IHRoaXMubGFzdElzQ29sbGFwc2VkID09PSB1bmRlZmluZWQgPyAndm9pZCcgOiB0aGlzLmxhc3RJc0NvbGxhcHNlZCA/ICcxJyA6ICcwJyxcbiAgICAgIHBoYXNlTmFtZSxcbiAgICAgIHRvU3RhdGU6IHRoaXMuaXNDb2xsYXBzZWQgPT09IHVuZGVmaW5lZCA/ICd2b2lkJyA6IHRoaXMuaXNDb2xsYXBzZWQgPyAnMScgOiAnMCcsXG4gICAgICB0b3RhbFRpbWU6IHRoaXMuY29sbGFwc2VBbmltYXRpb25EdXJhdGlvbixcbiAgICAgIHRyaWdnZXJOYW1lOiAnbWtDb2xsYXBzZUFuaW1hdGlvbidcbiAgICB9O1xuXG4gICAgaWYgKHBoYXNlTmFtZSA9PT0gJ2RvbmUnKSB7XG4gICAgICB0aGlzLmRvbmVFdmVudEVtaXR0ZXIuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIGlmIChwaGFzZU5hbWUgPT09ICdzdGFydCcpIHtcbiAgICAgIHRoaXMuc3RhcnRFdmVudEVtaXR0ZXIuZW1pdChldmVudCk7XG4gICAgfVxuICB9XG59XG4iXX0=
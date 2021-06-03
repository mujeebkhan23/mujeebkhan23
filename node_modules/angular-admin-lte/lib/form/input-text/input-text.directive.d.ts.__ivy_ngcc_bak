import { Renderer2, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ColorService } from '../../color/color.service';
import { ClassService } from '../../services/class.service';
export declare class InputTextDirective implements OnInit {
    elementRef: ElementRef;
    renderer2: Renderer2;
    private ngControl;
    private colorService;
    private classService;
    set borderColor(color: string);
    set class(className: string);
    set color(color: string);
    private defaultClass;
    private isSetClass;
    private onKeyUp;
    onKeyup: Observable<NgControl>;
    keyUpListener(): void;
    constructor(elementRef: ElementRef, renderer2: Renderer2, ngControl: NgControl, colorService: ColorService, classService: ClassService);
    ngOnInit(): void;
}

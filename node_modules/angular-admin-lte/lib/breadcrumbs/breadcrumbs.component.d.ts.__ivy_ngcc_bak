import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Path, RoutingService } from '../services/routing.service';
export interface Breadcrumbs extends Path {
    data: {
        breadcrumbs?: string;
        title?: string;
    };
}
export declare class BreadcrumbsComponent implements OnInit, OnDestroy {
    private routingService;
    private changeDetectorRef;
    homeIcon: string;
    breadcrumbs?: Breadcrumbs[];
    private subscription?;
    constructor(routingService: RoutingService, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

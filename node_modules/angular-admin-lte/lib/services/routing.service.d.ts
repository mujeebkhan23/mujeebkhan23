import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
export interface Path {
    data: object;
    params: object;
    url: string | null;
}
export interface Paths extends Array<Path> {
}
export declare class RoutingService {
    private router;
    onChange: BehaviorSubject<Paths | undefined>;
    events: BehaviorSubject<NavigationEnd | undefined>;
    constructor(router: Router);
    private static createUrl;
    private static isChildrenSelfRoute;
    private static createBreadcrumb;
    private init;
}

import { Subscription } from 'rxjs';
export declare function throttle(callback: () => void, delay: number): (args: Array<any>) => void;
export declare function removeSubscriptions(subscriptions: Subscription[]): Subscription[];
export declare function removeListeners(listeners?: (() => void)[]): (() => void)[];

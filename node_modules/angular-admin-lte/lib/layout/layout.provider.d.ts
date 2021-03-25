import { InjectionToken, Provider } from '@angular/core';
import { LayoutStore } from './layout.store';
import { LayoutState, LayoutStateConf } from './layout.state';
export declare const LayoutConfigToken: InjectionToken<unknown>;
export declare function layoutStoreFactory(layoutConfig: LayoutState): LayoutStore;
export declare function layoutProvider(layoutConfig: LayoutStateConf): Provider[];

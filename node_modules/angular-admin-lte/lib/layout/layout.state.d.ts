export interface LayoutStateConf {
    isSidebarLeftCollapsed?: boolean;
    isSidebarLeftExpandOnOver?: boolean;
    isSidebarLeftMouseOver?: boolean;
    isSidebarLeftMini?: boolean;
    sidebarRightSkin?: string;
    isSidebarRightCollapsed?: boolean;
    isSidebarRightOverContent?: boolean;
    layout?: string;
    sidebarLeftMenu?: Array<object>;
    sidebarLeftMenuActiveUrl?: string;
    skin?: string;
}
export declare class LayoutState implements LayoutStateConf {
    windowInnerHeight?: number;
    windowInnerWidth?: number;
    sidebarLeftElementHeight?: number;
    sidebarRightElementHeight?: number;
    isSidebarLeftCollapsed: boolean;
    isSidebarLeftExpandOnOver: boolean;
    isSidebarLeftMouseOver: boolean;
    isSidebarLeftMini: boolean;
    sidebarRightSkin: string;
    isSidebarRightCollapsed: boolean;
    isSidebarRightOverContent: boolean;
    layout: string;
    sidebarLeftMenu: never[];
    sidebarLeftMenuActiveUrl: string;
    skin: string;
    constructor(config: Partial<LayoutStateConf>);
}

import type { ITabItemInputBasic } from "./tabItemInputBasic";

export class TabItemInputString implements ITabItemInputBasic {
    warnMessage: string;

    constructor(){
        this.warnMessage = '어떤 텍스트든 상관 없습니다.';
    }

    valueCheck(){
        return true;
    };
}
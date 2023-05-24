import type { ITabItemInputBasic } from "./tabItemInputBasic";

export class TabItemInputNumber implements ITabItemInputBasic {
    warnMessage: string;

    constructor(){
        this.warnMessage = '숫자만 입력 가능 합니다.';
    }

    valueCheck( value: unknown ){
        if( typeof value !== 'number' ){
            return false;
        };

        const stringValue = value.toString();
        if( stringValue.match( /^[0-9]+$/ ) ){
            return true;
        } else {
            return false;
        };
    };
}
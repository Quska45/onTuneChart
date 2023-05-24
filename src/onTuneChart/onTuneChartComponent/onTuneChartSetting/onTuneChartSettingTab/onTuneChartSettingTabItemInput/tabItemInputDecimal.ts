import type { ITabItemInputBasic } from "./tabItemInputBasic";

export class TabItemInputDecimal implements ITabItemInputBasic {
    warnMessage: string;

    constructor(){
        this.warnMessage = '0이상 1이하 소수점만 입력 가능 합니다.';
    };

    valueCheck( value: unknown ){
        if( typeof value !== 'number' ){
            return false;
        };

        const regExp = new RegExp(`^(0(\\.\\d+)?|1(\\.0+)?)$`);
        const stringValue = value.toString();
        if( regExp.test( stringValue ) ){
            return true;
        } else {
            return false;
        };
    };
}
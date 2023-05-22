import type { IXAisBasic } from "./xAxisBasic";
import type { XAXisOption as TXAXisOption } from "echarts/types/dist/shared";
import type { TXAXisOptionType } from "../onTuneChartAxis";

export class XAXisOption implements IXAisBasic {
    xAxisOption: TXAXisOption;

    type: TXAXisOptionType;

    constructor( xAxisOption: TXAXisOption | TXAXisOption[] | undefined ){
        this.xAxisOption = ( xAxisOption as TXAXisOption );
        this.type = 'XAXisOption';
    };

    getMin(){
        const option = this.xAxisOption;

        return option.min as number;
    };

    getMax(){
        const option = this.xAxisOption;
        
        return option.max as number;
    };
};
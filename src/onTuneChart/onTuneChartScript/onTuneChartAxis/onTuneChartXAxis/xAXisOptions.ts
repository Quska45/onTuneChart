import type { XAXisOption } from "echarts/types/dist/shared";
import type { TXAXisOptionType } from "../onTuneChartAxis";
import type { IXAisBasic } from "./xAxisBasic";

export class XAXisOptions implements IXAisBasic {
    xAxisOption: XAXisOption[];

    type: TXAXisOptionType;

    constructor( xAxisOption: XAXisOption | XAXisOption[] | undefined ){
        this.xAxisOption = ( xAxisOption as XAXisOption[] );
        this.type = 'XAXisOptions';
    };

    getMin(){
        const option = this.xAxisOption[ 0 ];

        return option.min as number;
    };

    getMax(){
        const option = this.xAxisOption[ 0 ];
        
        return option.max as number;
    };
};
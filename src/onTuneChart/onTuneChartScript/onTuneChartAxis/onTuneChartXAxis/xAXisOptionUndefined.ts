import type { XAXisOption } from "echarts/types/dist/shared";
import type { TXAXisOptionType } from "../onTuneChartAxis";
import type { IXAisBasic } from "./xAxisBasic";

export class XAXisOptionUndefined implements IXAisBasic {
    xAxisOption: undefined;

    type: TXAXisOptionType;

    constructor( xAxisOption: XAXisOption | XAXisOption[] | undefined ){
        this.xAxisOption = ( xAxisOption as undefined );
        this.type = 'XAXisOptionUndefined';
    };

    getMin(){
        return 0;
    };

    getMax(){
        return 0;
    };
};
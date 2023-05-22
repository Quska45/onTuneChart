import type { YAXisOption } from "echarts/types/dist/shared";
import type { TYAXisOptionType } from "../onTuneChartAxis";
import type { IYAisBasic } from "./yAxisBasic";

export class YAXisOptionUndefined implements IYAisBasic {
    yAxisOption: undefined;

    type: TYAXisOptionType;

    constructor( yAxisOption: YAXisOption | YAXisOption[] | undefined ){
        this.yAxisOption = ( yAxisOption as undefined );
        this.type = 'YAXisOptionUndefined';
    };

    getMin(){
        return 0;
    };

    getMax(){
        return 0;
    };
};
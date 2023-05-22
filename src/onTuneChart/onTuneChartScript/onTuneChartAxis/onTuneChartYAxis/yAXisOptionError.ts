import type { YAXisOption } from "echarts/types/dist/shared";
import type { TYAXisOptionType } from "../onTuneChartAxis";
import type { IYAisBasic } from "./yAxisBasic";

export class YAXisOptionError implements IYAisBasic {
    yAxisOption: undefined;

    type: TYAXisOptionType;

    constructor( yAxisOption: YAXisOption | YAXisOption[] | undefined ){
        this.yAxisOption = ( yAxisOption as undefined );
        this.type = 'YAXisOptionError';
    };

    getMin(){
        return 0;
    };

    getMax(){
        return 0;
    };
};
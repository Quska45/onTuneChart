import type { YAXisOption } from "echarts/types/dist/shared";
import type { TYAXisOptionType } from "../onTuneChartAxis";
import type { IYAisBasic } from "./yAxisBasic";

export class YAXisOptions implements IYAisBasic {
    yAxisOption: YAXisOption[];

    type: TYAXisOptionType;

    constructor( yAxisOption: YAXisOption | YAXisOption[] | undefined ){
        this.yAxisOption = ( yAxisOption as YAXisOption[] );
        this.type = 'YAXisOptions';
    };

    getMin(){
        const option = this.yAxisOption[ 0 ];

        return option.min as number;
    };

    getMax(){
        const option = this.yAxisOption[ 0 ];
        
        return option.max as number;
    };
};
import type { IYAisBasic } from "./yAxisBasic";
import type { YAXisOption as TYAXisOption } from "echarts/types/dist/shared";
import type { TYAXisOptionType } from "../onTuneChartAxis";

export class YAXisOption implements IYAisBasic {
    yAxisOption: TYAXisOption;

    type: TYAXisOptionType;

    constructor( yAxisOption: TYAXisOption | TYAXisOption[] | undefined ){
        this.yAxisOption = ( yAxisOption as TYAXisOption );
        this.type = 'YAXisOption';
    };

    getMin(){
        const option = this.yAxisOption;

        return option.min as number;
    };

    getMax(){
        const option = this.yAxisOption;
        
        return option.max as number;
    };
};
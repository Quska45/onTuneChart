import type { SeriesOption } from "echarts/types/dist/shared";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic } from "./seriesBasic";

export class Series implements ISeriesBasic {
    series: SeriesOption;

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as SeriesOption );
        this.type = 'Series';
    };

    getSeries(){
        return [this.series];
    };
}
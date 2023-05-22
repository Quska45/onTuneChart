import type { SeriesOption } from "echarts/types/dist/shared";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic } from "./seriesBasic";

export class SeriesError implements ISeriesBasic {
    series: undefined;

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as undefined );
        this.type = 'SeriesError';
    };

    getSeries(){
        return [];
    };
}
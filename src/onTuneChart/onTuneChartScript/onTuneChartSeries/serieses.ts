import type { SeriesOption } from "echarts/types/dist/shared";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic } from "./seriesBasic";

export class Serieses implements ISeriesBasic {
    series: SeriesOption[];

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as SeriesOption[] );
        this.type = 'Serieses';
    };

    getSeries(){
        return [...this.series];
    };
}
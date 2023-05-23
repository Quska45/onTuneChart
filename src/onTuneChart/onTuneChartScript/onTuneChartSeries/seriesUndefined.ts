import type { SeriesOption } from "echarts/types/dist/shared";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic, XYAxisMinMax } from "./seriesBasic";

export class SeriesUndefined implements ISeriesBasic {
    series: undefined;

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as undefined );
        this.type = 'SeriesUndefined';
    };

    getSeries(){
        return this.series;
    };

    getSeriesMaxValueArr( xyAxisMinMax: XYAxisMinMax ){
        return [];
    };

    getMarkedSeries(){
        return this.series;
    };
}
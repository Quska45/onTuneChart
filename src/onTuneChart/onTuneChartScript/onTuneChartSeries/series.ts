import type { SeriesOption } from "echarts/types/dist/shared";
import type { TAodMaxTooltipPosition } from "../../onTuneChartConst";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic, TSeriesMaxValue, XYAxisMinMax } from "./seriesBasic";

export class Series implements ISeriesBasic {
    series: SeriesOption;

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as SeriesOption );
        this.type = 'Series';
    };

    getSeries(){
        return this.series;
    };

    getSeriesMaxValueArr( xyAxisMinMax: XYAxisMinMax ){
        return [];
    };

    getSeriesMaxValue(seriesMaxValueArr: TSeriesMaxValue[], aodMaxTooltipPosition: TAodMaxTooltipPosition){
        return {} as TSeriesMaxValue;
    };

    getMarkedSeries(){
        return this.series;
    };
}
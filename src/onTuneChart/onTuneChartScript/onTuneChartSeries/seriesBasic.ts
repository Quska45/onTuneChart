import type { SeriesOption } from "echarts/types/dist/shared";
import type { TAodMaxTooltipPosition } from "../../onTuneChartConst";
import type { TSeriesType } from "./onTuneChartSeries";

export type TSeriesMaxValue = {
    maxSeriesIndex: number,
    maxValueIndex: number,
    maxValue: number,
    maxCoord: string
};

export type XYAxisMinMax = {
    xAxisMin: number,
    xAxisMax: number,
    yAxisMin: number,
    yAxisMax: number,
};

export interface ISeriesBasic {
    series: SeriesOption | SeriesOption[] | undefined | null;
    type: TSeriesType

    getSeries: () => SeriesOption[] | SeriesOption | undefined;
    getSeriesMaxValueArr: ( xyAxisMinMax: XYAxisMinMax ) => TSeriesMaxValue[];
    getMarkedSeries: ( seriesMaxValueArr: TSeriesMaxValue[], aodMaxTooltipPosition: TAodMaxTooltipPosition ) => SeriesOption[] | SeriesOption | undefined;
};
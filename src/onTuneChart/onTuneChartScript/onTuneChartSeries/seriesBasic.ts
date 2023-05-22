import type { SeriesOption } from "echarts/types/dist/shared";
import type { TSeriesType } from "./onTuneChartSeries";

export interface ISeriesBasic {
    series: SeriesOption | SeriesOption[] | undefined | null;
    type: TSeriesType

    getSeries: () => SeriesOption[];
};
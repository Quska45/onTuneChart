import type { YAXisOption } from "echarts/types/dist/shared";
import type { TYAXisOptionType } from "../onTuneChartAxis";

export interface IYAisBasic {
    yAxisOption: YAXisOption | YAXisOption[] | undefined | null;
    type: TYAXisOptionType;

    getMin: () => number;
    getMax: () => number;
};
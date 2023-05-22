import type { XAXisOption } from "echarts/types/dist/shared";
import type { TXAXisOptionType } from "../onTuneChartAxis";

export interface IXAisBasic {
    xAxisOption: XAXisOption | XAXisOption[] | undefined | null;
    type: TXAXisOptionType;

    getMin: () => number;
    getMax: () => number;
};
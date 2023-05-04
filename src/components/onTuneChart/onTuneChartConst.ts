import type { LineSeriesOption } from "echarts/charts";
import type { DatasetComponentOption, GridComponentOption, TitleComponentOption, TooltipComponentOption } from "echarts/components";
import type { ComposeOption } from "echarts/core";

export type TOntuneChartHtmlLegendPosition = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT';

export interface IOnTuneChartConfig {
    htmlLegendPosition: TOntuneChartHtmlLegendPosition;
    showHtmlLegendPosition: boolean;
};

export const CHART_COMPONENT_DEFAULT_VALUE = {
    htmlLegendPosition: 'RIGHT' as TOntuneChartHtmlLegendPosition,
    showHtmlLegendPosition: true
};

export type TEChartOption = ComposeOption<
    LineSeriesOption
    | TitleComponentOption
    | TooltipComponentOption
    | GridComponentOption
    | DatasetComponentOption
> & {animation: boolean};

export const LineDefaultColor = [
    'rgb(154, 32, 140)'
    , 'rgb(225, 18, 153)'
    , 'rgb(255, 234, 234)'
    , 'rgb(245, 198, 236)'
    , 'rgb(113, 73, 198)'
    , 'rgb(252, 41, 71)'
    , 'rgb(254, 98, 68)'
    , 'rgb(255, 222, 185)'
    , 'rgb(255, 242, 204)'
    , 'rgb(255, 217, 102)'
    , 'rgb(244, 177, 131)'
    , 'rgb(223, 166, 123)'
    , 'rgb(36, 89, 83)'
    , 'rgb(64, 142, 145)'
    , 'rgb(228, 147, 147)'
    , 'rgb(216, 216, 216)'
    , 'rgb(187, 214, 184)'
    , 'rgb(174, 194, 182)'
    , 'rgb(148, 175, 159)'
    , 'rgb(219, 228, 198)'
];
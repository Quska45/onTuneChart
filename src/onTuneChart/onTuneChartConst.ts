import type { LineSeriesOption } from "echarts/charts";
import type { DatasetComponentOption, DataZoomComponentOption, GridComponentOption, TitleComponentOption, ToolboxComponentOption, TooltipComponentOption } from "echarts/components";
import type { ComposeOption } from "echarts/core";
import type { InsideDataZoomOption, SliderDataZoomOption } from "echarts/types/dist/shared";

export const OntuneChartHtmlLegendPositionConst =  [ 'TOP', 'RIGHT', 'BOTTOM', 'LEFT' ];
export type TOntuneChartHtmlLegendPosition = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT';

type TLabelInterval = number | "auto" | ((index: number, value: string) => boolean) | undefined;
const labelInterval: TLabelInterval = 'auto';
export const CHART_COMPONENT_DEFAULT_VALUE = {
    htmlLegend: {
        position: 'RIGHT' as TOntuneChartHtmlLegendPosition,
        show: true,
    },
    line: {
        globalTension: 0,
        globalWidth: 1,
    },
    title: {
        text: 'Chart Component',
    },
    xAxis: {
        timeRange: 1,
        labelInterval: labelInterval,
    },
    yAxis: {
        min: 0,
        max: 100,
    }
};

export type TEChartOption = ComposeOption<
    LineSeriesOption |
    TitleComponentOption |
    TooltipComponentOption |
    GridComponentOption |
    DatasetComponentOption |
    ToolboxComponentOption |
    SliderDataZoomOption |
    InsideDataZoomOption |
    DataZoomComponentOption 
> & {animation: boolean};

export const LineColor = {
    defaults: [
        'rgb(154, 32, 140)',
        'rgb(225, 18, 153)',
        'rgb(255, 234, 234)',
        'rgb(245, 198, 236)',
        'rgb(113, 73, 198)',
        'rgb(252, 41, 71)',
        'rgb(254, 98, 68)',
        'rgb(255, 222, 185)',
        'rgb(255, 242, 204)',
        'rgb(255, 217, 102)',
        'rgb(244, 177, 131)',
        'rgb(223, 166, 123)',
        'rgb(36, 89, 83)',
        'rgb(64, 142, 145)',
        'rgb(228, 147, 147)',
        'rgb(216, 216, 216)',
        'rgb(187, 214, 184)',
        'rgb(174, 194, 182)',
        'rgb(148, 175, 159)',
        'rgb(219, 228, 198)'
    ],
    embargos: [
        'rgb(0, 0, 255)', //파랑
        'rgb(255, 0, 0)', //빨갈
        'rgb(255, 255, 0)', //노랑
    ]
};
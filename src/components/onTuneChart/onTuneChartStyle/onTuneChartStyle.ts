import type { TOntuneChartHtmlLegendPosition } from "../onTuneChartConst";
import { ChartBody } from "./class/chartBody/ChartBody";
import { ChartContainer } from "./class/chartContainer/ChartContainer";
import { ChartLegendContainer } from "./class/chartLegendContainer/ChartLegendContainer";
import { ChartResizeBar } from "./class/chartResizeBar/ChartResizeBar";

const chartContainer = new ChartContainer();
const chartBody = new ChartBody();
const chartResizeBar = new ChartResizeBar();
const chartLegendContainer = new ChartLegendContainer();

/**
 * onTune_chart_body, onTune_chart_resize_bar, onTune_chart_legend_container 간의 스타일에 대한 getter
 * @returns 
 */
export const onTuneChartStyle = ( onTuneChartHtmlLegendPosition: TOntuneChartHtmlLegendPosition ) => {
    const container = chartContainer.getStyle( onTuneChartHtmlLegendPosition );
    const body = chartBody.getStyle( onTuneChartHtmlLegendPosition );
    const resizeBar = chartResizeBar.getStyle( onTuneChartHtmlLegendPosition );
    const legendContainer = chartLegendContainer.getStyle( onTuneChartHtmlLegendPosition );

    const resultStyles = {
        container,
        body,
        resizeBar,
        legendContainer
    };

    return resultStyles;
};
import type { CHART_COMPONENT_DEFAULT_VALUE } from "../onTuneChartConst";
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
export const onTuneChartStyle = ( onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE ) => {
    const container = chartContainer.getStyle( onTuneChartConfig.htmlLegend.position );
    const body = chartBody.getStyle( onTuneChartConfig.htmlLegend.position, onTuneChartConfig.htmlLegend.show );
    const resizeBar = chartResizeBar.getStyle( onTuneChartConfig.htmlLegend.position, onTuneChartConfig.htmlLegend.show );
    const legendContainer = chartLegendContainer.getStyle( onTuneChartConfig.htmlLegend.position, onTuneChartConfig.htmlLegend.show );

    const resultStyles = {
        container,
        body,
        resizeBar,
        legendContainer
    };

    return resultStyles;
};
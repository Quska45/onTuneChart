import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, TitleComponent, ToolboxComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { TEChartOption } from '../onTuneChartConst';
import { OnTuneChartTitle } from './onTuneChartTitle';
import type { EChartsOption } from 'echarts/types/dist/shared';

echarts.use(
    [
        LineChart,
        GridComponent,
        CanvasRenderer,
        ToolboxComponent,
        TitleComponent
    ]
);

export class OnTuneChart {
    containerDom: HTMLElement;

    eChartOption: TEChartOption;

    eChart: echarts.ECharts;

    onTuneChartTitle: OnTuneChartTitle;

    constructor( containerDom: HTMLElement, eChartOption: TEChartOption ){
        this.containerDom = containerDom;
        this.eChartOption = eChartOption;
        this.eChart = echarts.init( this.containerDom );
        this.eChart.setOption( eChartOption );

        const title = OnTuneChartTitle.getTitle( (this.eChart.getOption() as EChartsOption).title );
        this.onTuneChartTitle = new OnTuneChartTitle( title );
    };
};
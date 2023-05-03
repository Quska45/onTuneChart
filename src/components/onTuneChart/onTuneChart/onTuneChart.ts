import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { TEChartOption } from '../onTuneChartConst';

echarts.use(
    [ LineChart, GridComponent, CanvasRenderer ]
);

export class OnTuneChart {
    containerDom: HTMLElement;

    eChartOption: TEChartOption;

    eChart: echarts.ECharts;

    /**
     * @param {HTMLElement} containerDom 
     * @param {TEChartOption} eChartOption 
     */
    constructor( containerDom: HTMLElement, eChartOption: TEChartOption ){
        this.containerDom = containerDom;
        this.eChartOption = eChartOption;
        this.eChart = echarts.init( this.containerDom );
        this.eChart.setOption( eChartOption );
    };
};
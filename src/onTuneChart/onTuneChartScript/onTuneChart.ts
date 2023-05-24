import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GraphicComponent, GridComponent, MarkPointComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { TAodMaxTooltipPosition, TEChartOption } from '../onTuneChartConst';
import { OnTuneChartTitle } from './onTuneChartTitle';
import type { EChartsOption, GridOption } from 'echarts/types/dist/shared';
import { EChartOptionGrid } from '../eChartOption/eChartOptionGrid';
import { OnTuneChartXAxis } from './onTuneChartAxis/onTuneChartXAxis/onTuneChartXAxis';
import { OnTuneChartYAxis } from './onTuneChartAxis/onTuneChartYAxis/onTuneChartYAxis';
import { OnTuneChartSeries } from './onTuneChartSeries/onTuneChartSeries';

echarts.use(
    [
        LineChart,
        GridComponent,
        CanvasRenderer,
        ToolboxComponent,
        TitleComponent,
        TooltipComponent,
        MarkPointComponent,
        GraphicComponent,
    ]
);

let lineIdCounter = 0;
const eChartOptionGrid: EChartOptionGrid = new EChartOptionGrid();

export class OnTuneChart {
    containerDom: HTMLElement;

    eChartOption: TEChartOption;

    eChart: echarts.ECharts;

    onTuneChartTitle: OnTuneChartTitle;

    onTuneChartXAxis: OnTuneChartXAxis;

    onTuneChartYAxis: OnTuneChartYAxis;

    onTuneChartSeries: OnTuneChartSeries;

    constructor( containerDom: HTMLElement, eChartOption: TEChartOption ){
        this.containerDom = containerDom;
        this.eChartOption = eChartOption;
        this.eChart = echarts.init( this.containerDom );
        this.eChart.setOption( eChartOption );

        const title = OnTuneChartTitle.getTitle( (this.eChart.getOption() as EChartsOption).title );
        this.onTuneChartTitle = new OnTuneChartTitle( title );

        this.onTuneChartXAxis = new OnTuneChartXAxis();
        this.onTuneChartYAxis = new OnTuneChartYAxis();
        this.onTuneChartSeries = new OnTuneChartSeries();
    };

    addAodMaxTooltip( aodMaxTooltipPosition: TAodMaxTooltipPosition ){
        const onTuneChartXAxis = this.onTuneChartXAxis.getAxisOptionInstance( this );
        const onTuneChartYAxis = this.onTuneChartYAxis.getAxisOptionInstance( this );
        const onTuneChartSeries = this.onTuneChartSeries.getOnTuneSeries( this );

        const xAxisMin = onTuneChartXAxis.getMin();
        const xAxisMax = onTuneChartXAxis.getMax();
        const yAxisMin = onTuneChartYAxis.getMin();
        const yAxisMax = onTuneChartYAxis.getMax();

        const XYAxisMinMax = {
            xAxisMin: xAxisMin,
            xAxisMax: xAxisMax,
            yAxisMin: yAxisMin,
            yAxisMax: yAxisMax,
        };

        const seriesMaxValueArr = onTuneChartSeries.getSeriesMaxValueArr( XYAxisMinMax );
        const seriesMaxValue = onTuneChartSeries.getSeriesMaxValue( seriesMaxValueArr, aodMaxTooltipPosition );
        const markedSeries = onTuneChartSeries.getMarkedSeries( seriesMaxValue );
        this.onTuneChartSeries.seriesMaxValue = seriesMaxValue;
        this.onTuneChartSeries.markedSeries = markedSeries;

        const option = this.eChart.getOption();
        option.series = markedSeries;
        this.eChart.setOption( option, true );
    };

    addIndicator(){
        const eChart = this.eChart;

        eChart.getZr().on('dblclick', function( params ){
            const xCoord = params.offsetX;  // 더블클릭 이벤트 발생한 x 좌표
            const option = eChart.getOption() as EChartsOption;
            const grid = option.grid;

            if( eChartOptionGrid.isUndefied<GridOption>( grid ) ){
                return;
            };

            // 수직선 추가
            const lineId = `line-${lineIdCounter++}`;
            eChart.setOption({
                graphic: [
                    {
                        id: lineId,
                        type: 'line',
                        left: xCoord,
                        top: 58,
                        bottom: 0,
                        shape: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: eChart.getHeight() - 130,
                        },
                        style: {
                            stroke: 'red',
                            lineWidth: 2,
                        }
                    }
                ]
            });

            // 수직선 제거 기능
            const removeLine = function() {
                eChart.setOption({
                    graphic: [{
                        id: lineId,
                        $action: 'remove',
                        type: 'line'
                    }]
                });
                eChart.getZr().off('click', removeLine);
            };

            // 수직선 클릭 이벤트 리스너 추가
            eChart.getZr().on('click', removeLine);
        });
    };
};
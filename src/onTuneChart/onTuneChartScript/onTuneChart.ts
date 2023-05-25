import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GraphicComponent, GridComponent, MarkPointComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { TAodMaxTooltipPosition, TEChartOption } from '../onTuneChartConst';
import { OnTuneChartTitle } from './onTuneChartTitle';
import type { EChartsOption, GraphicComponentLooseOption, GraphSeriesOption, GridOption } from 'echarts/types/dist/shared';
import { EChartOptionGrid } from '../eChartOption/eChartOptionGrid';
import { OnTuneChartXAxis } from './onTuneChartAxis/onTuneChartXAxis/onTuneChartXAxis';
import { OnTuneChartYAxis } from './onTuneChartAxis/onTuneChartYAxis/onTuneChartYAxis';
import { OnTuneChartSeries } from './onTuneChartSeries/onTuneChartSeries';
import { OnTuneChartGrid } from './onTuneChartGrid/onTuneChartGrid';

echarts.use(
    [
        LineChart,
        GridComponent,
        CanvasRenderer,
        ToolboxComponent,
        TitleComponent,
        TooltipComponent,
        MarkPointComponent,
        GraphicComponent
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

    onTuneChartGrid: OnTuneChartGrid;

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
        this.onTuneChartGrid = new OnTuneChartGrid();
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

    addFirstEventIndicator(){
        const eChart = this.eChart;

        eChart.getZr().on('dblclick', function( params ){
            const option = eChart.getOption();
            option.yAxis[2].axisPointer.value = 100;
            eChart.setOption( option );
        });
    };

    addIndicator(){
        const eChart = this.eChart;

        eChart.getZr().on('dblclick', function( params ){
            const xCoord = params.offsetX;  // 더블클릭 이벤트 발생한 x 좌표
            const option = eChart.getOption() as TEChartOption;
            const grid = option.grid as GridOption[];
            const graphic = option.graphic as GraphicComponentLooseOption[];
            const firstGraphic = graphic[0];

            if( eChartOptionGrid.isUndefied<GridOption>( grid ) ){
                return;
            };

            // 수직선 추가
            const width = eChart.getWidth();
            const xRatioValue = xCoord / width;
            const xRatio = Math.floor(xRatioValue * 100);
            // console.log('width', width);
            // console.log('xRatioValue',xRatioValue);
            // console.log('xRatio', xRatio);

            // const gridRect = eChart.getDom().getBoundingClientRect();
            // console.log('gridRect', gridRect);
            // let chartLine = {
            //     x1: gridRect.left + (grid[0].left as number),
            //     y2: gridRect.top + (grid[0].top as number),
            //     x2: gridRect.right + 
            // };
            // eChart.convertToPixel('grid', {
            //     x:
            // });


            if( 'elements' in firstGraphic ){
                if( firstGraphic.elements != undefined ){
                    firstGraphic.elements[0].left = `${xRatio}%`;
                    // firstGraphic.elements[0].right = `${100-xRatio}%`;
                    if( 'invisible' in firstGraphic.elements[0] ){
                        firstGraphic.elements[0].invisible = false;
                    };
                    if( 'shape' in firstGraphic.elements[0] ){
                        if( firstGraphic.elements[0].shape != undefined ){
                            if( 'y2' in firstGraphic.elements[0].shape ){
                                firstGraphic.elements[0].shape.y2 = eChart.getHeight() - (grid[0].top as number);
                            }
                        }
                    };
                    eChart.setOption( option );
                };
            };


            // 수직선 제거 기능
            const removeLine = function() {
                if( 'elements' in firstGraphic ){
                    console.log(1);
                    if( firstGraphic.elements != undefined ){
                        console.log(2);
                        if( 'invisible' in firstGraphic.elements[0] ){
                            console.log(3);
                            firstGraphic.elements[0].invisible = true;
                            eChart.setOption( option, true );
                        };
                    };
                };                
                eChart.getZr().off('click', removeLine);
            };

            // 수직선 클릭 이벤트 리스너 추가
            eChart.getZr().on('click', removeLine);
        });
    };
};
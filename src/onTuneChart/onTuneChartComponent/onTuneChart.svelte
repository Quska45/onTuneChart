<script lang="ts">
    import OnTuneChartTitle from "./onTuneChartTitle.svelte";
    import { onTuneChartStyle } from "../onTuneChartStyle/onTuneChartStyle";
    import { CHART_COMPONENT_DEFAULT_VALUE, type TEChartOption } from "../onTuneChartConst";
    import { beforeUpdate, onMount } from "svelte";
    import type { ResizeBar } from "../onTuneChartHtmlDomElement/resizeBar/ResizeBar";
    import { ResizeBars } from "../onTuneChartHtmlDomElement/resizeBar";
    import { OnTuneChart } from "../onTuneChartScript/onTuneChart";
    import { ChartBody } from "../onTuneChartHtmlDomElement/chartBody/ChartBody";
    import OnTuneChartBlocker from "./onTuneChartBlocker.svelte";
    import OnTuneChartSetting from "./onTuneChartSetting/onTuneChartSetting.svelte";
    import "tailwindcss/tailwind.css";
    import OnTuneGrid from "../../onTuneGrid/OnTuneGrid.svelte";
    import type { LineSeriesOption } from "echarts/charts";
    import { OnTuneChartSeries2 } from "../onTuneChartScript/onTuneChartSeries2";
    import moment from "moment";
    import { OnTuneChartXAxis } from "../onTuneChartScript/onTuneChartAxis/onTuneChartXAxis/onTuneChartXAxis";
    import { EChartOptionMaker } from "../eChartOptionMaker";
    import { left } from "@popperjs/core";

    let isMount = false;
    export let componentWidth: string;
    export let componentHeight: string;
    export let xAxisDatas: any[];
    export let series: LineSeriesOption[] | undefined;
    export let isTitleShow: boolean = true;

    // chart component props related with config
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE = { 
        htmlLegend: {
            position: CHART_COMPONENT_DEFAULT_VALUE.htmlLegend.position,
            show: CHART_COMPONENT_DEFAULT_VALUE.htmlLegend.show,
        },
        line: {
            globalTension: CHART_COMPONENT_DEFAULT_VALUE.line.globalTension,
            globalWidth: CHART_COMPONENT_DEFAULT_VALUE.line.globalWidth,
        },
        title: {
            text: CHART_COMPONENT_DEFAULT_VALUE.title.text,
        },
        xAxis: {
            timeRange: CHART_COMPONENT_DEFAULT_VALUE.xAxis.timeRange,
            labelInterval: CHART_COMPONENT_DEFAULT_VALUE.xAxis.labelInterval,
        },
        yAxis: {
           min: CHART_COMPONENT_DEFAULT_VALUE.yAxis.min,
           max: CHART_COMPONENT_DEFAULT_VALUE.yAxis.max,
           show: CHART_COMPONENT_DEFAULT_VALUE.yAxis.show,
           position: CHART_COMPONENT_DEFAULT_VALUE.yAxis.position,
        },
        secondYAxis: {
            min: CHART_COMPONENT_DEFAULT_VALUE.secondYAxis.min,
            max: CHART_COMPONENT_DEFAULT_VALUE.secondYAxis.max,
            show: CHART_COMPONENT_DEFAULT_VALUE.secondYAxis.show,
            position: CHART_COMPONENT_DEFAULT_VALUE.secondYAxis.position,
        },
        aodMaxTooltip: {
            position: CHART_COMPONENT_DEFAULT_VALUE.aodMaxTooltip.position,
        },
        eventIndicator: {
            first: CHART_COMPONENT_DEFAULT_VALUE.eventIndicator.first,
            second: CHART_COMPONENT_DEFAULT_VALUE.eventIndicator.second,
            third: CHART_COMPONENT_DEFAULT_VALUE.eventIndicator.third,
            fourth: CHART_COMPONENT_DEFAULT_VALUE.eventIndicator.fourth,
            fifth: CHART_COMPONENT_DEFAULT_VALUE.eventIndicator.fifth,
        }
    };

    // html
    let chartContainer: HTMLElement;
    let chartBody: HTMLElement;
    let resizeBar: HTMLElement;
    let legendContainer: HTMLElement;

    // class instance
    let onTuneChart: OnTuneChart;
    let chartBodyInstance: ChartBody;
    let resizeBarInstance: ResizeBar;
    let echartOptionMaker: EChartOptionMaker = new EChartOptionMaker();
    // let onTuneChartSeries: OnTuneChartSeries = new OnTuneChartSeries();

    // global state
    let blockerDisplayValue: string;
    let seriesTerm = OnTuneChartSeries2.getSeriesTerm( series );

    // echarts config option
    const gridTop = 50;
    const gridBottom = 50;
    const gridLeft = 50;
    const gridRight = 50;
    let eChartOption: TEChartOption = {
        title: {
            id: onTuneChartConfig.title.text,
            show: false,
            text: onTuneChartConfig.title.text,
            textStyle: {
                fontSize: 18
            },
        },
        animation: false,
        grid: {
            top: gridTop,
            bottom: gridBottom,
            left: gridLeft,
            right: gridRight
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                min: seriesTerm - onTuneChartConfig.xAxis.timeRange,
                max: seriesTerm,
                axisLabel: {
                    interval: onTuneChartConfig.xAxis.labelInterval,
                    formatter: function( value, index ){
                        // console.log( 'moment(value)', moment(new Date()) );
                        // console.log( 'moment(value).format("HH:mm:ss")', moment(new Date()).format('HH:mm:ss') );
                        return value;
                    },
                    // rotate: 90,
                    showMaxLabel: true,
                    showMinLabel: true
                },
                axisTick: {
                    alignWithLabel: true,
                },
            }
        ],
        yAxis: [
            {
                id: 'yAxis',
                type: 'value',
                show: onTuneChartConfig.yAxis.show,
                min: onTuneChartConfig.yAxis.min,
                max: onTuneChartConfig.yAxis.max,
                position: echartOptionMaker.getYAxisPosition( onTuneChartConfig.yAxis.position ),
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed'
                    },
                },
                axisLabel: {
                    formatter: ( value: number ) => {
                        if( typeof value !== 'number' ){
                            return '{value}'
                        };

                        const result = value <= 1000 ? value : `${value / 1000}K`;
                        return result.toString();
                    }
                },
                triggerEvent: false,
                axisPointer: {
                    triggerTooltip: false,
                    triggerOn: 'none',
                }
            },
            {
                id: 'secondYAxis',
                type: 'value',
                show: onTuneChartConfig.secondYAxis.show,
                min: onTuneChartConfig.secondYAxis.min,
                max: onTuneChartConfig.secondYAxis.max,
                position: echartOptionMaker.getYAxisPosition( onTuneChartConfig.secondYAxis.position ),
                axisLabel: {
                    formatter: ( value: number ) => {
                        if( typeof value !== 'number' ){
                            return '{value}'
                        };

                        const result = value <= 1000 ? value : `${value / 1000}K`;
                        return result.toString();
                    }
                },
                triggerEvent: false,
                axisPointer: {
                    triggerTooltip: false,
                    triggerOn: 'none',
                }
            },
            echartOptionMaker.getEventIndicator( 'eventIndicatorYAxis1', '#ff0000', 1000, 'left' ),
            echartOptionMaker.getEventIndicator( 'eventIndicatorYAxis2', '#ff8c00', 2000, 'left' ),
            echartOptionMaker.getEventIndicator( 'eventIndicatorYAxis3', '#ffff00', 3000, 'left' ),
            echartOptionMaker.getEventIndicator( 'eventIndicatorYAxis4', '#ff8c00', 4000, 'left' ),
            echartOptionMaker.getEventIndicator( 'eventIndicatorYAxis5', '#0000ff', 5000, 'left' ),
        ],
        series: OnTuneChartSeries2.getConditionCheckedSeries( series ),
        toolbox: {
            feature: {
                saveAsImage: {},
                // dataZoom: {}
            },
        },
        tooltip: {
            // show: true,
            trigger: 'axis',
            // showContent: true,
            triggerOn: 'none',
            axisPointer: {
                type: 'cross',
            },
        },
        graphic: {
            elements: [
                {
                    id: 'line1',
                    type: 'line',
                    shape: {
                        x1: 0,
                        y1: gridTop,
                        x2: 0,
                        y2: 0,
                    },
                    z: 10,
                    style: {
                        stroke: 'red',
                        lineWidth: 2,
                    },
                    invisible: true,
                }
            ],
        }
        // dataZoom: [
        // ]
    };

    console.log( 'xAxisDatas', xAxisDatas );
    console.log( 'series', series );
    console.log( 'onTuneChartConfig', onTuneChartConfig );
    console.log( 'eChartOption', eChartOption );


    // onTuneGrid option
    let legendGridOption;

    // svelte reactive statement
    $: componentWidth = componentWidth ? componentWidth : '100%';
    $: componentHeight = componentHeight ? componentHeight : '100%';
    // 차트 내부 구성 dom 전체에 대한 style
    $: ChartStyle = onTuneChartStyle( onTuneChartConfig );
    
    onMount(() => {
        onTuneChart = new OnTuneChart( chartBody, eChartOption );
        onTuneChart.addIndicator();
        onTuneChart.addAodMaxTooltip( onTuneChartConfig.aodMaxTooltip.position );

        chartBodyInstance = new ChartBody( chartBody, () => {
            onTuneChart.eChart.resize({width: 'auto'})
        } );
        
        resizeBarInstance = new ResizeBars[ onTuneChartConfig.htmlLegend.position ]( resizeBar, chartBody, legendContainer );
        resizeBarInstance.resizeStart();

        isMount = true;
    });

    beforeUpdate(() => {
        // console.log( 'onTuneChart에서 update 일어남' );
        // console.log( 'onTuneChartConfig', onTuneChartConfig );
    });
</script>

<!-- story book에서 height 100%가 제대로 적용되지 않는 문제가 있어 추가. 컴포넌트와는 관련 없는 dom -->
<div class="error_prevent_dom_not_nessary" style="width: {componentWidth}; height: {componentHeight};">
    <div class="onTune_chart">
        <OnTuneChartBlocker
            displayValue = {blockerDisplayValue}
        />

        {#if isTitleShow}
            <OnTuneChartTitle
                bind:onTuneChart
                bind:onTuneChartConfig
                bind:blockerDisplayValue
            />

            <OnTuneChartSetting
                bind:displayValue = {blockerDisplayValue}
                bind:onTuneChart
                bind:onTuneChartConfig
            />
        {/if}

        <div bind:this="{chartContainer}" class="onTune_chart_container {isTitleShow ? null : 'no_title'}" style="flex-direction: {ChartStyle.container.flexDirection};">
            <div bind:this="{chartBody}" class="onTune_chart_body"
                style="
                    width: {ChartStyle.body.width};
                    height: {ChartStyle.body.height};
                "
            >
            </div>

            <div bind:this="{resizeBar}" class="onTune_chart_resize_bar" 
                style="
                    width: {ChartStyle.resizeBar.width};
                    height: {ChartStyle.resizeBar.height};
                    cursor: {ChartStyle.resizeBar.cursor};
                    display: {ChartStyle.resizeBar.display};
                "
            >
            </div>

            <div bind:this="{legendContainer}" class="onTune_chart_legend_container"
                style="
                    width: {ChartStyle.legendContainer.width};
                    height: {ChartStyle.legendContainer.height};
                    display: {ChartStyle.legendContainer.display};
                "
            >
                legendContainer
            </div>
        </div>
    </div>
</div>

<style>
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    * { 
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        margin: 0;
        padding: 0;
    }

    div {
        border: 1px solid black;
    }

    .onTune_chart {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .onTune_chart_container {
        width: 100%;
        height: calc(100% - 40px);
        display: flex;
    }

    .onTune_chart_container.no_title {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .onTune_chart_resize_bar {
        border: 1px solid blue;
    }
</style>
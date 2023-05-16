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
    import { OnTuneChartSeries } from "../onTuneChartScript/onTuneChartSeries";
    import App from "../../App.svelte";

    let isMount = false;
    export let componentWidth: string;
    export let componentHeight: string;
    export let xAxisDatas: any[];
    export let series: LineSeriesOption[] | undefined;

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
    // let onTuneChartSeries: OnTuneChartSeries = new OnTuneChartSeries();

    // global state
    let blockerDisplayValue: string;

    // echarts config option
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
            left: 50,
            right: 50
        },
        xAxis: {
            type: 'category',
            data: xAxisDatas,
            boundaryGap: false,
            min: xAxisDatas.length - 10,
            max: xAxisDatas.length - 1
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: `{value}`
            }
        },
        series: OnTuneChartSeries.getConditionCheckedSeries( series ),
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        tooltip: {
            // confine: true,
            show: true,
            trigger: 'axis'
        }
    };

    // onTuneGrid option
    let legendGridOption;

    // svelte reactive statement
    $: componentWidth = componentWidth ? componentWidth : '100%';
    $: componentHeight = componentHeight ? componentHeight : '100%';
    // 차트 내부 구성 dom 전체에 대한 style
    $: ChartStyle = onTuneChartStyle( onTuneChartConfig );
    
    onMount(() => {
        onTuneChart = new OnTuneChart( chartBody, eChartOption );

        chartBodyInstance = new ChartBody( chartBody, () => onTuneChart.eChart.resize() );
        
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

        <div bind:this="{chartContainer}" class="onTune_chart_container" style="flex-direction: {ChartStyle.container.flexDirection};">
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

    .onTune_chart_resize_bar {
        border: 1px solid blue;
    }
</style>
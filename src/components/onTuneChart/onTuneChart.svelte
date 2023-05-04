<script lang="ts">
    import { onTuneChartStyle } from "./onTuneChartStyle/onTuneChartStyle";
    import { CHART_COMPONENT_DEFAULT_VALUE, type TEChartOption } from "./onTuneChartConst";
    import { onMount } from "svelte";
    import type { ResizeBar } from "./onTuneChartHtmlDomElement/resizeBar/ResizeBar";
    import { ResizeBars } from "./onTuneChartHtmlDomElement/resizeBar";
    import { OnTuneChart } from "./onTuneChart/onTuneChart";
    import { ChartBody } from "./onTuneChartHtmlDomElement/chartBody/ChartBody";

    let isMount = false;
    export let componentWidth: string;
    export let componentHeight: string;
    export let xAxisDatas: any[];
    export let series: any[];
    // chart component props related with config
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE = { 
        htmlLegendPosition: CHART_COMPONENT_DEFAULT_VALUE.htmlLegendPosition,
        showHtmlLegendPosition: CHART_COMPONENT_DEFAULT_VALUE.showHtmlLegendPosition,
        globalLineTension: CHART_COMPONENT_DEFAULT_VALUE.globalLineTension,
        globalLineWidth: CHART_COMPONENT_DEFAULT_VALUE.globalLineWidth,
    };
    // echarts config option
    let eChartOption: TEChartOption = {
        animation: false,
        xAxis: {
            type: 'category',
            data: xAxisDatas,
            min: xAxisDatas.length - 10,
            max: xAxisDatas.length - 1
        },
        yAxis: {
            type: 'value'
        },
        series: series,
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {}
            }
        }
    };

    // html
    let chartContainer: HTMLElement;
    let chartBody: HTMLElement;
    let resizeBar: HTMLElement;
    let legendContainer: HTMLElement;

    // svelte reactive statement
    $: componentWidth = componentWidth ? componentWidth : '100%';
    $: componentHeight = componentHeight ? componentHeight : '100%';
    // 차트 내부 구성 dom 전체에 대한 style
    $: ChartStyle = onTuneChartStyle( onTuneChartConfig );

    // class instance
    let onTuneChart: OnTuneChart;
    let chartBodyInstance: ChartBody;
    let resizeBarInstance: ResizeBar;
    
    onMount(() => {
        onTuneChart = new OnTuneChart( chartBody, eChartOption );

        chartBodyInstance = new ChartBody( chartBody, () => onTuneChart.eChart.resize() );
        
        resizeBarInstance = new ResizeBars[ onTuneChartConfig.htmlLegendPosition ]( resizeBar, chartBody, legendContainer );
        resizeBarInstance.resizeStart();

        isMount = true;
    });
</script>

<!-- story book에서 height 100%가 제대로 적용되지 않는 문제가 있어 추가. 컴포넌트와는 관련 없는 dom -->
<div style="width: {componentWidth}; height: {componentHeight};">
<div bind:this="{chartContainer}" class="onTune_chart" style="flex-direction: {ChartStyle.container.flexDirection};">
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
    >legendContainer
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
        display: flex;
        position: relative;
    }

    .onTune_chart_resize_bar {
        border: 1px solid blue;
    }
</style>
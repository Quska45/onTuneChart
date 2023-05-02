<script lang="ts">
    import { onTuneChartStyle } from "./onTuneChartStyle/onTuneChartStyle";
    import type { IOnTuneChartConfig } from "./onTuneChartConst";

    let isMount = false;

    export let onTuneChartConfig: IOnTuneChartConfig = { 
        htmlLegendPosition: 'TOP' 
    };

    // 차트 내부 구성 dom 전체에 대한 style
    $: ChartStyle = onTuneChartStyle( onTuneChartConfig.htmlLegendPosition );

</script>

<!-- story book에서 height 100%가 제대로 적용되지 않는 문제가 있어 추가. 컴포넌트와는 관련 없는 dom -->
<div style="width: 800px; height: 500px;">
<div class="onTune_chart" style="flex-direction: {ChartStyle.container.flexDirection};">
    <div class="onTune_chart_body"
        style="
            width: {ChartStyle.body.width};
            height: {ChartStyle.body.height};
        "
    >
    </div>

    <div class="onTune_chart_resize_bar" 
        style="
            width: {ChartStyle.resizeBar.width};
            height: {ChartStyle.resizeBar.height};
            cursor: {ChartStyle.resizeBar.cursor};
            display: {ChartStyle.resizeBar.display};
        "
    >
    </div>

    <div class="onTune_chart_legend_container"
        style="
            width: {ChartStyle.legendContainer.width};
            height: {ChartStyle.legendContainer.height};
        "
    >
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
    }

    .onTune_chart_resize_bar {
        border: 1px solid blue;
    }
</style>
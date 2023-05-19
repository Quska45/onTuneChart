<script lang="ts">
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../../../onTuneChartConst";
    import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
    import { onTuneChartSettingItemValues } from "../onTuneChartSetting/onTuneChartSettingConst";
    import { Tabs, TabItem } from 'flowbite-svelte';
    import OnTuneChartSettingTabItem from "./onTuneChartSettingTabItem.svelte";

    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;

    const htmlLegends = onTuneChartSettingItemValues.htmlLegend;
    const lines = onTuneChartSettingItemValues.line;
    const titles = onTuneChartSettingItemValues.title;
    const xAxises = onTuneChartSettingItemValues.xAxis;
    const yAxises = onTuneChartSettingItemValues.yAxis;
    const secondYAxises = onTuneChartSettingItemValues.secondYAxis;
</script>

<Tabs>
    <OnTuneChartSettingTabItem
        tabOpen={true}
        id={'htmlLegend'}
        title={'htmlLegend'}
        options={htmlLegends}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />

    <OnTuneChartSettingTabItem
        tabOpen={false}
        id={'line'}
        title={'line'}
        options={lines}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />

    <OnTuneChartSettingTabItem
        tabOpen={false}
        id={'title'}
        title={'title'}
        options={titles}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />

    <OnTuneChartSettingTabItem
        tabOpen={false}
        id={'xAxis'}
        title={'xAxis'}
        options={xAxises}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />

    <OnTuneChartSettingTabItem
        tabOpen={false}
        id={'yAxis'}
        title={'yAxis'}
        options={yAxises}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />

    <OnTuneChartSettingTabItem
        tabOpen={false}
        id={'secondYAxis'}
        title={'secondYAxis'}
        options={secondYAxises}
        onTuneChart={onTuneChart}
        bind:onTuneChartConfig
    />
</Tabs>

<style>

</style>
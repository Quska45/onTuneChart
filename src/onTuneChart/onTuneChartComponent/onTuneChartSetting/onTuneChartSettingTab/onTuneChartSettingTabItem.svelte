<script lang="ts">
    import { TabItem } from "flowbite-svelte";
    import type { TOnTuneChartSettingItemValue } from "../onTuneChartSetting/onTuneChartSettingConst";
    import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../../../onTuneChartConst";
    import OnTuneChartSettingTabItemSelectbox from "./onTuneChartSettingTabItemSelectbox.svelte"

    export let id: string;
    export let title: string;
    export let options: TOnTuneChartSettingItemValue[];
    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;
    export let tabOpen: boolean;
</script>

<TabItem open={tabOpen} title="{title}">
    {#each options as option}
        <OnTuneChartSettingTabItemSelectbox
            id={id}
            option={option}
            onTuneChart={onTuneChart}
            bind:onTuneChartConfig
        />
    {/each}
</TabItem>


<style>

</style>
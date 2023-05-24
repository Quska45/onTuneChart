<script lang="ts">
    import { TabItem } from "flowbite-svelte";
    import type { TOnTuneChartSettingItemValue } from "../onTuneChartSetting/onTuneChartSettingConst";
    import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../../../onTuneChartConst";
    import OnTuneChartSettingTabItemSelectbox from "./onTuneChartSettingTabItemSelectbox.svelte"
    import OnTuneChartSettingTabItemInput from "./onTuneChartSettingTabItemInput.svelte"

    export let id: string;
    export let title: string;
    export let options: TOnTuneChartSettingItemValue[];
    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;
    export let tabOpen: boolean;
</script>

<TabItem open={tabOpen} title="{title}">
    {#each options as option}
        <div class="tab_item">
            <label for="{option.KR}">{option.KR}</label>
            {#if option.type == 'select'}
                <OnTuneChartSettingTabItemSelectbox
                    id={id}
                    option={option}
                    onTuneChart={onTuneChart}
                    bind:onTuneChartConfig
                />
            {:else if option.type === 'input'}
                <OnTuneChartSettingTabItemInput 
                    id={id}
                    option={option}
                    onTuneChart={onTuneChart}
                    bind:onTuneChartConfig
                />
            {/if}
        </div>
    {/each}
</TabItem>


<style>
    .tab_item {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: bold;
        align-items: center;
        padding: 5px 0;
    }
    label {
        width: 50%;
    }
</style>
<script lang="ts">
    import { beforeUpdate } from "svelte";
    import type { OnTuneChart } from "../onTuneChartScript/onTuneChart";
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../onTuneChartConst";

    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;
    export let blockerDisplayValue: string;

    let titleText: string | undefined;
    beforeUpdate(() => {
        if( !onTuneChart ){
            return;
        };

        blockerDisplayValue == null || blockerDisplayValue == undefined ? blockerDisplayValue = 'none' : null;
        titleText = onTuneChartConfig.title.text;
    });

    function clickSettingButton(){
        blockerDisplayValue == 'none' ? blockerDisplayValue = 'block' : blockerDisplayValue = 'none';
    };
</script>

<div class="onTune_chart_title_container">
    <div class="onTune_chart_title">
        { titleText }
    </div>
    <button class="onTune_chart_setting_button" on:click="{clickSettingButton}">
        설정
    </button>
</div>

<style>
    div {
        border: 1px solid black;
    }

    .onTune_chart_title_container {
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .onTune_chart_title {
        width: 100%;
        height: 100%;
    }

    .onTune_chart_setting_button {
        width: 50px;
        height: 100%;
    }

    .onTune_chart_setting_button:active {
        background-color: #3e8e41;
    }
</style>
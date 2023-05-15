<script lang="ts">
    import { beforeUpdate } from "svelte";
    import { CHART_COMPONENT_DEFAULT_VALUE } from "../../onTuneChartConst";
    import OntuneChartSettingList from "./onTuneChartSettingList.svelte";

    export let displayValue: string = 'none';

    function clickCloseButton(){
        displayValue == 'none' ? displayValue = 'block' : displayValue = 'none';
    };
    
    beforeUpdate(() => {
        displayValue == null || displayValue == undefined ? displayValue = 'none' : null;
    });
</script>

<div class="onTune_chart_setting" style="display: { displayValue }">
    <button class="onTune_chart_setting_close_button" on:click="{clickCloseButton}">
        X
    </button>

    <div class="onTune_chart_setting_item_container">
        <OntuneChartSettingList />
    </div>
</div>

<style>
    .onTune_chart_setting {
        width: 50%;
        height: 100%;
        position: absolute;
        background-color: red;
        z-index: 10;
        top: 0;
        right: 0;
    }

    .onTune_chart_setting_close_button {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
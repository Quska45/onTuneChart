<script lang="ts">
    import { onTuneChartSettingItemValues } from "./onTuneChartSettingConst";
    import { onTuneChartConfigStore } from "../../onTuneChartStore/onTuneChartStore";

    const configKeys = Object.keys( $onTuneChartConfigStore );
    const settingItemValuesArr = [];

    console.log('onTuneChartSettingItemValues', onTuneChartSettingItemValues);
    console.log('configKeys', configKeys);

    function getSettingItemValuesArr( configKeys: Array<string> ){
        
    };
</script>

<!-- {#each onTuneChartSettingItemValues as itemValue}
    <div>
        <label for=""></label>
    </div>
{/each} -->

<style>

</style>
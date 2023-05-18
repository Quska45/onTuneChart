<script lang="ts">
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../../../onTuneChartConst";
    import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
    import type { TOnTuneChartSettingItemValue, TOnTuneChartSettingItemValues } from "../onTuneChartSettingConst";

    export let id: string;
    export let option: TOnTuneChartSettingItemValue;
    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;

    let selectbox: HTMLSelectElement;

    function changeEvent( event: Event, option: TOnTuneChartSettingItemValue ){
        const selectedIndex = selectbox.selectedIndex;
        const selectedValue = selectbox.options[selectedIndex].value;
        
        option.callback( selectedValue, onTuneChartConfig, onTuneChart );
        onTuneChartConfig = onTuneChartConfig;

        return;
    };
</script>

<div>
    <label for="{option.KR}">{option.KR}</label>
    <select bind:this="{selectbox}" on:change="{( e )=>{changeEvent( e, option )}}">
        {#if id === 'htmlLegend'}
            {#each option.options as param, i}
                {#if option.id === 'position'}
                    {#if param === onTuneChartConfig.htmlLegend.position}
                        <option value="{option.optionValues[i]}" selected>{param}</option>
                    {:else}
                        <option value="{option.optionValues[i]}">{param}</option>
                    {/if}
                {:else if option.id === 'show'}
                    {#if param === onTuneChartConfig.htmlLegend.show}
                        <option value="{param}" selected>{param}</option>
                    {:else}
                        <option value="{param}">{param}</option>
                    {/if}
                {/if}
            {/each}

        {:else if id === 'line'}
            {#each option.options as param}
                {#if option.id === 'globalTension'}
                    {#if param === onTuneChartConfig.line.globalTension}
                        <option value="{param}" selected>{param}</option>
                    {:else}
                        <option value="{param}">{param}</option>
                    {/if}
                {:else if option.id === 'globalWidth'}
                    {#if param === onTuneChartConfig.line.globalWidth}
                        <option value="{param}" selected>{param}</option>
                    {:else}
                        <option value="{param}">{param}</option>
                    {/if}
                {/if}
            {/each}

        {:else if id === 'title'}
            {#each option.options as param}
                {#if option.id === 'text'}
                    {#if param === onTuneChartConfig.title.text}
                        <option value="{param}" selected>{param}</option>
                    {:else}
                        <option value="{param}">{param}</option>
                    {/if}
                {/if}
            {/each}
        {:else if id === 'xAxis'}
            {#each option.options as param, i}
                {#if option.id === 'timeRange'}
                    {#if option.optionValues[i] === onTuneChartConfig.xAxis.timeRange}
                        <option value="{option.optionValues[i]}" selected>{param}</option>
                    {:else}
                        <option value="{option.optionValues[i]}">{param}</option>
                    {/if}
                {/if}
                {#if option.id === 'labelInterval'}
                    {#if option.optionValues[i] === onTuneChartConfig.xAxis.labelInterval}
                        <option value="{option.optionValues[i]}" selected>{param}</option>
                    {:else}
                        <option value="{option.optionValues[i]}">{param}</option>
                    {/if}
                {/if}
            {/each}
        {:else if id === 'yAxis'}
            {#each option.options as param, i}
                {#if option.id === 'min'}
                    {#if option.optionValues[i] === onTuneChartConfig.yAxis.min}
                        <option value="{option.optionValues[i]}" selected>{param}</option>
                    {:else}
                        <option value="{option.optionValues[i]}">{param}</option>
                    {/if}
                {/if}
                {#if option.id === 'max'}
                    {#if option.optionValues[i] === onTuneChartConfig.yAxis.max}
                        <option value="{option.optionValues[i]}" selected>{param}</option>
                    {:else}
                        <option value="{option.optionValues[i]}">{param}</option>
                    {/if}
                {/if}
            {/each}
        {/if}
    </select>
</div>
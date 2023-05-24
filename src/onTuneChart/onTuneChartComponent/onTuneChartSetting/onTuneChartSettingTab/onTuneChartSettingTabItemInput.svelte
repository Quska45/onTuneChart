<script lang="ts">
    import type { CHART_COMPONENT_DEFAULT_VALUE } from "../../../onTuneChartConst";
    import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
    import type { TInputType, TOnTuneChartSettingItemValue } from "../onTuneChartSetting/onTuneChartSettingConst";
    import { Button } from 'flowbite-svelte';
    import { TabItemInputMaker } from "./onTuneChartSettingTabItemInput";

    export let id: string;
    export let option: TOnTuneChartSettingItemValue;
    export let onTuneChart: OnTuneChart;
    export let onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE;

    let inputValue: unknown = onTuneChartConfig.line[ getlineSubId( option ) ];
    const inputType = option.inputType as TInputType;
    const tabItemInputInstance = new TabItemInputMaker[ inputType ]();

    function getlineSubId( option: TOnTuneChartSettingItemValue ){
        if( option.id == 'globalTension' ){
            return 'globalTension';
        } else {
            return 'globalWidth';
        };
    };

    function configChanger(){
        if( !tabItemInputInstance.valueCheck( inputValue ) ){
            alert( tabItemInputInstance.warnMessage );
            return;
        };

        option.callback( inputValue, onTuneChartConfig, onTuneChart );
        onTuneChartConfig = onTuneChartConfig;
    };
    
    function keyUpEnter( event: KeyboardEvent, option: TOnTuneChartSettingItemValue ){
        if( event.keyCode !== 13 ){
            return;
        };

        configChanger();
    };
    
    function clickButton( event: MouseEvent, option: TOnTuneChartSettingItemValue ){
        if( !tabItemInputInstance.valueCheck( inputValue ) ){
            alert( tabItemInputInstance.warnMessage );
            return;
        };
        
        configChanger();
    };
</script>

<div>
    {#if option.inputType === 'string'}
        <input
            type="text" 
            bind:value={inputValue} 
            on:keyup="{( e ) => {keyUpEnter( e, option )}}"
        >
    {:else if option.inputType === 'number'}
        <input
            type="number"
            bind:value={inputValue} 
            on:keyup="{( e ) => {keyUpEnter( e, option )}}"
        >
    {:else if option.inputType === 'decimal'}
        <input
            type="number"
            bind:value={inputValue} 
            on:keyup="{( e ) => {keyUpEnter( e, option )}}"
        >
    {/if}

    <Button
        size={'xs'}
        on:click={( e ) => {clickButton(e, option)}}
    >적용</Button>
</div>

<style>
    div {
        width: 50%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    input {
        width: 70%;
        font-size: 12px;
        font-weight: lighter;
        height: 40px;
    }
</style>
import type { LineSeriesOption } from "echarts/charts";
import type { EChartsOption, XAXisOption, YAXisOption } from "echarts/types/dist/shared";
import { select_options } from "svelte/internal";
import type { OnTuneChart } from "./onTuneChart";

export const OnTuneChartXAxis = {
    getFormattingData( series: LineSeriesOption[] | undefined ){
        if( series === undefined ){
            return;
        };

        console.log( series );
    },

    addMaxAodTooltip( onTuneChart: OnTuneChart ){
        let option = onTuneChart.eChart.getOption();
        let xAxis: XAXisOption | XAXisOption[] | undefined;
        let yAxis: YAXisOption | YAXisOption[] | undefined;

        if( 'xAxis' in option ){
            const eChartsOption = (option as EChartsOption);
            xAxis = eChartsOption.xAxis;
            
        };

        if( 'yAxis' in option ){
            const eChartsOption = (option as EChartsOption);
            yAxis = eChartsOption.yAxis;
        };
    },

    getXAxisesType( xAxis: XAXisOption | XAXisOption[] | undefined ){
        if( xAxis === undefined ){
            return undefined;
        };

        
        return;
    },

    getXAxises( xAxis: XAXisOption | XAXisOption[] | undefined ){
        if( xAxis === undefined ){
            return [] as XAXisOption[];
        };


    }
};
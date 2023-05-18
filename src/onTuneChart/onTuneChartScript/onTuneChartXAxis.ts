import type { LineSeriesOption } from "echarts/charts";

export const OnTuneChartXAxis = {
    getFormattingData( series: LineSeriesOption[] | undefined ){
        if( series === undefined ){
            return;
        };

        console.log( series );
    }
};
import type { LineSeriesOption } from "echarts/charts";
import { LineColor } from "../onTuneChartConst";
import { onTuneChartColorUtil } from "../onTuneChartUtil";

export const OnTuneChartSeries = {
    getConditionCheckedSeries( series: LineSeriesOption[] | undefined ){
        if( series === undefined ){
            return series;
        };

        series.forEach(( item, i ) => {
            if( item.lineStyle === undefined ){
                item.lineStyle = {};
            };

            if( i < 20 ){
                item.lineStyle.color = LineColor.defaults[ i ];
            } else {
                if( item.lineStyle === undefined ){
                    item.lineStyle = {};
                };

                let newColor = onTuneChartColorUtil.getRandomColor();
                newColor = this.getNewRgb( newColor );
                item.lineStyle.color = newColor;
            };

            item = this.getCheckedEmpasisSeries( item );
        });

        return series;
    },

    getCheckedEmpasisSeries( series: LineSeriesOption ): LineSeriesOption{
        if( series == undefined ){
            return series;
        };

        if( series.lineStyle === undefined ){
            series.lineStyle = {};
            return series;
        };
        
        if( series.lineStyle.width === undefined ){
            return series;
        };
        
        if( series.emphasis === undefined ){
            series.emphasis = {};
            return series;
        };
        
        if( series.emphasis.lineStyle === undefined ){
            series.emphasis = {};
            return series;
        };

        series.emphasis.lineStyle.width = series.lineStyle.width * 2;

        return series;
    },

    getNewRgb( color: string ){
        const newColor = onTuneChartColorUtil.getRandomColor();

        if( this.checkDefaultAndEmbargoColor( color ) ){
            this.getNewRgb( newColor );
            return newColor;
        } else {
            return color;
        };
    },

    checkDefaultAndEmbargoColor( color: string ){
        const defaultAndEmbagoColor = [...LineColor.defaults, ...LineColor.embargos];
        const defaultAndEmbagoColorIndex = defaultAndEmbagoColor.findIndex(( defaultValue ) => {
            return defaultValue === color;
        });

        return defaultAndEmbagoColorIndex;
    },

    checkDefaultColor( color: string ){
        const defaultIndex = LineColor.defaults.findIndex(( defaultValue ) => {
            return defaultValue === color;
        });

        return defaultIndex;
    },

    checkEmbargoColor( color: string ){
        const embargoIndex = LineColor.embargos.findIndex(( embargo ) => {
            return embargo === color;
        });

        return embargoIndex;
    },
};
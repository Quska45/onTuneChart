import type { LineSeriesOption } from "echarts/charts";
import { LineColor } from "../onTuneChartConst";
import { onTuneChartColorUtil } from "../onTuneChartUtil";

export const OnTuneChartSeries = {
    getConditionCheckedSeries( series: LineSeriesOption[] | undefined ): LineSeriesOption[]{
        if( series === undefined ){
            return [];
        };

        const newSeries = series.reduce(( acc, cur, i ) => {
            if( cur.lineStyle === undefined ){
                cur.lineStyle = {};
            };

            if( i < 20 ){
                cur.lineStyle.color = LineColor.defaults[ i ];
            } else {
                if( cur.lineStyle === undefined ){
                    cur.lineStyle = {};
                };

                let newColor = onTuneChartColorUtil.getRandomColor();
                newColor = this.getNewRgb( newColor );
                cur.lineStyle.color = newColor;
            };

            acc.push( this.getCheckedEmpasisSeries( cur ) );

            return acc;
        }, [] as LineSeriesOption[]);

        return newSeries;
    },

    getCheckedEmpasisSeries( series: LineSeriesOption ): LineSeriesOption{
        if( series === undefined ){
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

    getSeriesTerm( series: LineSeriesOption[] | undefined ){
        if( series === undefined ){
            return 0;
        };

        const firstSeries = series[0];
        if( firstSeries === undefined ){
            return 0;
        };
        if( firstSeries.data === undefined ){
            return 0;
        };

        const term = firstSeries.data.length;

        return term;
    },
};
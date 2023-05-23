import type { SeriesOption } from "echarts/types/dist/shared";
import type { TAodMaxTooltipPosition } from "../../onTuneChartConst";
import type { TSeriesType } from "./onTuneChartSeries";
import type { ISeriesBasic, TSeriesMaxValue, XYAxisMinMax } from "./seriesBasic";

export class Serieses implements ISeriesBasic {
    series: SeriesOption[];

    type: TSeriesType;

    constructor( series: SeriesOption | SeriesOption[] | undefined ){
        this.series = ( series as SeriesOption[] );
        this.type = 'Serieses';
    };

    getSeries(){
        return [...this.series];
    };

    getSeriesMaxValueArr( xyAxisMinMax: XYAxisMinMax ){
        const series = this.series;
        const minMax = xyAxisMinMax;
        let seriesMaxValueArr: TSeriesMaxValue[] = [];
        let maxValue: number = -Infinity;

        series.forEach(( cur, seriesIndex ) => {
            for( let i=minMax.xAxisMin; i<minMax.xAxisMax; ++i ){
                const curData = (cur.data as Array<string | number>[]);
                const curArr = curData[ i ];
                const curValue = curArr[ 1 ] as number;
                if( curValue >= minMax.yAxisMin && curValue <= minMax.yAxisMax ){
                    if( curValue >= maxValue ){
                        maxValue = curValue;
                        seriesMaxValueArr.push({
                            maxSeriesIndex: seriesIndex,
                            maxValueIndex: i,
                            maxValue: curValue,
                            maxCoord: curArr[ 0 ] as string
                        });
                    };
                };
            };
        });

        const seriesMaxValue = seriesMaxValueArr[ seriesMaxValueArr.length - 1 ];
        seriesMaxValueArr = seriesMaxValueArr.filter(( cur ) => {
            return cur.maxValue = seriesMaxValue.maxValue;
        });

        return seriesMaxValueArr;
    };

    getSeriesMaxValue( seriesMaxValueArr: TSeriesMaxValue[], aodMaxTooltipPosition: TAodMaxTooltipPosition ){
        let seriesMaxValueIndex: number;
        if( aodMaxTooltipPosition == 'last' ){
            seriesMaxValueIndex = seriesMaxValueArr.length - 1;
        } else if ( aodMaxTooltipPosition == 'middle' ){
            seriesMaxValueIndex = Math.floor(( seriesMaxValueArr.length - 1 ) / 2);
        } else {
            seriesMaxValueIndex = 0;
        };
        
        const seriesMaxValue = seriesMaxValueArr[ seriesMaxValueIndex ];

        return seriesMaxValue;
    };

    getMarkedSeries( seriesMaxValue: TSeriesMaxValue ){
        const maxValueSeries = this.series[ seriesMaxValue.maxSeriesIndex ];

        this.series.forEach(( cur, i ) => {
            cur.markPoint = {};
        });

        maxValueSeries.markPoint = {
            data: [{
                value: seriesMaxValue.maxValue,
                coord: [seriesMaxValue.maxCoord, seriesMaxValue.maxValue],
            }],
        };

        return this.series;
    };
}
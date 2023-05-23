import type { SeriesOption } from "echarts/types/dist/shared";
import { SeriesMaker } from ".";
import type { TEChartOption } from "../../onTuneChartConst";
import type { OnTuneChart } from "../onTuneChart";
import type { ISeriesBasic, TSeriesMaxValue } from "./seriesBasic";
import { SeriesError } from "./seriesError";

export type TSeriesType = 'SeriesUndefined' | 'Serieses' | 'Series' | 'SeriesError';

export class OnTuneChartSeries {
    seriesMaxValue: TSeriesMaxValue;
    
    markedSeries: SeriesOption | SeriesOption[] | undefined;

    constructor(){
        this.seriesMaxValue = {} as TSeriesMaxValue;
        this.markedSeries = undefined;
    };

    getOnTuneSeries( onTuneChart: OnTuneChart ){
        const option = onTuneChart.eChart.getOption() as TEChartOption;
        const series = option.series;

        if( 'series' in option ){
            // series = option.series as SeriesOption | SeriesOption[] | undefined;

            const seriesType = this.getOnTuneSeriesType( series );
            const onTuneSeries = new SeriesMaker[ seriesType ]( series );

            return onTuneSeries;
        };

        return new SeriesError( series );
    };

    getDataBySeriesAndDataIndex( seriesBasic: ISeriesBasic, seriesIndex: number, dataIndex: number ){
        
    };

    getOnTuneSeriesType( series: SeriesOption | SeriesOption[] | undefined ){
        if( series === undefined ){
            return 'SeriesUndefined';
        };

        if( 'length' in series ){
            return 'Serieses';
        };

        if( 'animation' in series ){
            return 'Series';
        };

        return 'SeriesError';
    };
};
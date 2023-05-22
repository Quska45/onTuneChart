import type { SeriesOption } from "echarts/types/dist/shared";
import { SeriesMaker } from ".";
import type { OnTuneChart } from "../onTuneChart";
import { SeriesError } from "./seriesError";

export type TSeriesType = 'SeriesUndefined' | 'Serieses' | 'Series' | 'SeriesError';

export class OnTuneChartSeries {
    getOnTuneSeries( onTuneChart: OnTuneChart ){
        const option = onTuneChart.eChart.getOption();
        let series: SeriesOption | SeriesOption[] | undefined;

        if( 'series' in option ){
            series = option.series as SeriesOption | SeriesOption[] | undefined;

            const seriesType = this.getOnTuneSeriesType( series );
            const onTuneSeries = new SeriesMaker[ seriesType ]( series );

            return onTuneSeries;
        };

        return new SeriesError( series );
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
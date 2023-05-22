import type { EChartsOption, YAXisOption } from "echarts/types/dist/shared";
import { YAxis } from ".";
import type { OnTuneChart } from "../../onTuneChart";
import { OnTuneChartAxis } from "../onTuneChartAxis";
import type { IYAisBasic } from "./yAxisBasic";
import { YAXisOptionError } from "./yAXisOptionError";

export class OnTuneChartYAxis extends OnTuneChartAxis {
    getAxisOptionInstance( onTuneChart: OnTuneChart ): IYAisBasic{
        const option = onTuneChart.eChart.getOption();
        let yAxis: YAXisOption | YAXisOption[] | undefined;

        // console.log( 'onTuneChart.eChart.getHeight()', onTuneChart.eChart.getHeight() );
        // console.log( 'option', option );
        // console.log( '(option as EChartsOption).series[4][3598]', (option as EChartsOption).series[4].data[3598] );

        // const test = onTuneChart.eChart.convertToPixel({
        //     seriesIndex: 4,
        //     dataIndex: 3598
        // }, (option as EChartsOption).series[4].data[3598]);
        // console.log( 'test', test );

        if( 'yAxis' in option ){
            const eChartsOption = (option as EChartsOption);

            yAxis = eChartsOption.yAxis;

            const yAxisType = this.getYAxisesType( yAxis );
            const yAxisOption = new YAxis[ yAxisType ]( yAxis );

            return yAxisOption;
        };

        return new YAXisOptionError( yAxis );
    };

    getYAxisesType( yAxis: YAXisOption | YAXisOption[] | undefined ){
        if( yAxis === undefined ){
            return 'YAXisOptionUndefined';
        };

        if( 'length' in yAxis ){
            return 'YAXisOptions';
        };

        if( 'animation' in yAxis ){
            return 'YAXisOption';
        };

        return 'YAXisOptionError';
    };
};
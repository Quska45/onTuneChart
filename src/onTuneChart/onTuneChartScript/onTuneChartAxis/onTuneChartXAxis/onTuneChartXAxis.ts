import type { XAXisOption } from "echarts/types/dist/shared";
import { XAxis } from ".";
import type { OnTuneChart } from "../../onTuneChart";
import { OnTuneChartAxis } from "../onTuneChartAxis";
import type { IXAisBasic } from "./xAxisBasic";
import { XAXisOptionError } from "./xAXisOptionError";

export class OnTuneChartXAxis extends OnTuneChartAxis {
    getAxisOptionInstance( onTuneChart: OnTuneChart ): IXAisBasic{
        const option = onTuneChart.eChart.getOption();
        let xAxis: XAXisOption | XAXisOption[] | undefined;

        // console.log( 'onTuneChart.eChart.getHeight()', onTuneChart.eChart.getHeight() );
        // console.log( 'option', option );
        // console.log( '(option as EChartsOption).series[4][3598]', (option as EChartsOption).series[4].data[3598] );

        // const test = onTuneChart.eChart.convertToPixel({
        //     seriesIndex: 4,
        //     dataIndex: 3598
        // }, (option as EChartsOption).series[4].data[3598]);
        // console.log( 'test', test );

        if( 'xAxis' in option ){
            xAxis = option.xAxis as XAXisOption | XAXisOption[] | undefined;

            const xAxisType = this.getXAxisesType( xAxis );
            const xAxisOption = new XAxis[ xAxisType ]( xAxis );

            return xAxisOption;
        };

        return new XAXisOptionError( xAxis );
    };

    getXAxisesType( xAxis: XAXisOption | XAXisOption[] | undefined ){
        if( xAxis === undefined ){
            return 'XAXisOptionUndefined';
        };

        if( 'length' in xAxis ){
            return 'XAXisOptions';
        };

        if( 'animation' in xAxis ){
            return 'XAXisOption';
        };

        return 'XAXisOptionError';
    };
};
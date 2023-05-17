import type { AngleAxisOption, Axis, EChartsOption, SeriesOption, SingleAxisOption, TitleOption, XAXisOption } from "echarts/types/dist/shared";
import type { LineSeriesOption } from "echarts/charts";
import { CHART_COMPONENT_DEFAULT_VALUE, OntuneChartHtmlLegendPositionConst } from "../../onTuneChartConst";
import type { OnTuneChart } from "../../onTuneChartScript/onTuneChart";
import { OnTuneChartSeries } from "../../onTuneChartScript/onTuneChartSeries";

export type TOnTuneChartSettingItemValue = {
    id: string,
    KR: string,
    EN: string,
    type: string,
    optionValues: Array<any>,
    options: Array<any>,
    arg: null,
    callback: ( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ) => void,
};

export type TOnTuneChartSettingItemValues = {
    htmlLegend: TOnTuneChartSettingItemValue[],
    line: TOnTuneChartSettingItemValue[],
    title: TOnTuneChartSettingItemValue[],
    xAxis: TOnTuneChartSettingItemValue[],
};

export const onTuneChartSettingItemValues: TOnTuneChartSettingItemValues = {
    htmlLegend: [
        {
            id: 'position',
            KR: 'html 레전드 위치',
            EN: 'html 레전드 위치',
            type: 'select',
            optionValues: [...OntuneChartHtmlLegendPositionConst],
            options: [...OntuneChartHtmlLegendPositionConst],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                onTuneChartConfig.htmlLegend.position = selectedValue;
            }
        },
        {
            id: 'show',
            KR: 'html 레전드 show/hide',
            EN: 'html 레전드 show/hide',
            type: 'select',
            optionValues: [true, false],
            options: [true, false],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                if( onTuneChartConfig.htmlLegend.show ){
                    onTuneChartConfig.htmlLegend.show = false;
                } else {
                    onTuneChartConfig.htmlLegend.show = true;
                };
            }
        }
    ],
    line: [
        {
            id: 'globalTension',
            KR: '전체 라인 곡률',
            EN: '전체 라인 곡률',
            type: 'select',
            optionValues: [0, 0.1, 0.2, 0.3, 1],
            options: [0, 0.1, 0.2, 0.3, 1],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const series = option.series;
                selectedValue = Number(selectedValue as string);

                if( series === undefined ){
                    return;
                } else if( 'length' in series ){
                    (series as LineSeriesOption[]).forEach(( item ) => {
                        item.smooth = selectedValue;
                    });

                } else {
                    (series as LineSeriesOption).smooth = selectedValue;
                };

                onTuneChartConfig.line.globalTension = selectedValue;
                onTuneChart.eChart.setOption( option );
            }
        },
        {
            id: 'globalWidth',
            KR: '전체 라인 넓이',
            EN: '전체 라인 넓이',
            type: 'select',
            optionValues: [1, 2, 3, 4, 5],
            options: [1, 2, 3, 4, 5],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const series = option.series;
                selectedValue = Number(selectedValue as string);

                if( series === undefined ){
                    return;
                } else if( 'length' in series ){
                    (series as LineSeriesOption[]).forEach(( item ) => {
                        if( item.lineStyle !== undefined ){
                            item.lineStyle.width = selectedValue;
                            item = OnTuneChartSeries.getCheckedEmpasisSeries( item );
                        };
                    });
                } else {
                    (series as LineSeriesOption).smooth = selectedValue;
                };

                onTuneChartConfig.line.globalWidth = selectedValue;
                onTuneChart.eChart.setOption( option );
            }
        }
    ],
    title: [
        {
            id: 'text',
            KR: '차트 이름',
            EN: '차트 이름',
            type: 'select',
            optionValues: ['Chart Component1', 'Chart Componet2'],
            options: ['Chart Component1', 'Chart Componet2'],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const title = option.title;

                if( title === undefined ){
                    return;
                } else if( 'length' in title ){
                    title.forEach(( item ) => {
                        item.text = selectedValue;
                    });
                } else {
                    title.text = selectedValue;
                };
                
                onTuneChartConfig.title.text = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ],
    xAxis: [
        {
            id: 'timeRange',
            KR: 'x축 시간 데이터 범위(분)',
            EN: 'x축 시간 데이터 범위(분)',
            type: 'select',
            optionValues: [60, 300, 600, 1800, 3600],
            options: [1, 5, 10, 30, 60],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const xAxis = option.xAxis;
                selectedValue = Number(selectedValue as string);
                
                if( xAxis === undefined ){
                    return;
                } else if( 'length' in xAxis ){
                    xAxis.forEach(( item ) => {
                        const series = option.series;
                        if( series === undefined ){
                            return;
                        } else if( 'length' in series ){
                            item.min = (series[0].data as Array<any>).length - selectedValue;
                        } else {
                            item.min = (series.data as Array<any>).length - selectedValue;
                        }
                    });
                } else {
                    xAxis.min = selectedValue;
                };

                onTuneChartConfig.xAxis.timeRange = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ]
};
import type { EChartsOption } from "echarts/types/dist/shared";
import type { LineSeriesOption } from "echarts/charts";
import { CHART_COMPONENT_DEFAULT_VALUE, OntuneChartHtmlLegendPositionConst, type TEChartOption } from "../../../onTuneChartConst";
import type { OnTuneChart } from "../../../onTuneChartScript/onTuneChart";
import { OnTuneChartSeries2 } from "../../../onTuneChartScript/onTuneChartSeries2";

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
    yAxis: TOnTuneChartSettingItemValue[],
    secondYAxis: TOnTuneChartSettingItemValue[],
    aodMaxTooltip: TOnTuneChartSettingItemValue[],
};

const YAXIS_MIN_OPTION_VALUES = [ 0, 100, 500, 1000, 2000, 3000, 5000, 8000, 10000 ];
const YAXIS_MIN_OPTIONS = [ 0, 100, 500, 1000, 2000, 3000, 5000, 8000, 10000 ];
const YAXIS_POSITION_OPTION_VALUES = [ 'right', 'left' ];
const YAXIS_POSITION_OPTIONS = [ 'right', 'left' ];
const BOOLEAN_OPTIOSN = [ true, false ];

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
                            item = OnTuneChartSeries2.getCheckedEmpasisSeries( item );
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
            optionValues: [60, 300, 600, 1800, 3599],
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
                            item.min = (series[0].data as Array<unknown>).length - selectedValue;
                        } else {
                            item.min = (series.data as Array<unknown>).length - selectedValue;
                        }
                    });
                } else {
                    xAxis.min = selectedValue;
                };

                onTuneChartConfig.xAxis.timeRange = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'labelInterval',
            KR: 'x축 라벨 interval(초)',
            EN: 'x축 라벨 interval(초)',
            type: 'select',
            optionValues: ['auto', 14, 59, 299],
            options: ['auto', 15, 60, 300],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const xAxis = option.xAxis;
                if( typeof selectedValue === 'string' && selectedValue !== 'auto' ){
                    selectedValue = Number( selectedValue );
                };
                
                if( xAxis === undefined ){
                    return;
                } else if( 'length' in xAxis ){
                    xAxis.forEach(( item ) => {
                        const axisLabel = item.axisLabel;
                        if( axisLabel === undefined ){
                            return;
                        } else if( 'interval' in axisLabel ){
                            axisLabel.interval = selectedValue;
                        } else {
                            console.log( '여기는 사실상 에러로 봐야할듯?' );
                            return;
                        };
                    });
                } else {
                    const axisLabel = xAxis.axisLabel;
                    if( axisLabel === undefined ){
                        return;
                    } else if( 'interval' in axisLabel ){
                        axisLabel.interval = selectedValue;
                    } else {
                        console.log( '여기는 사실상 에러로 봐야할듯?' );
                        return;
                    };
                };

                onTuneChartConfig.xAxis.labelInterval = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ],
    yAxis: [
        {
            id: 'min',
            KR: '첫 번째 y축 최소값',
            EN: '첫 번째 y축 최소값',
            type: 'select',
            optionValues: YAXIS_MIN_OPTION_VALUES,
            options: YAXIS_MIN_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    yAxis[0].min = selectedValue;
                } else {
                    yAxis.min = selectedValue;
                };

                onTuneChartConfig.yAxis.min = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'max',
            KR: '첫 번째 y축 최대값',
            EN: '첫 번째 y축 최대값',
            type: 'select',
            optionValues: YAXIS_MIN_OPTION_VALUES,
            options: YAXIS_MIN_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    yAxis[0].max = selectedValue;
                } else {
                    yAxis.max = selectedValue;
                };

                onTuneChartConfig.yAxis.max = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'show',
            KR: '첫 번째 y축 show / hide',
            EN: '첫 번째 y축 show / hide',
            type: 'select',
            optionValues: BOOLEAN_OPTIOSN,
            options: BOOLEAN_OPTIOSN,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    yAxis[0].show = selectedValue;
                } else {
                    yAxis.show = selectedValue;
                };

                onTuneChartConfig.yAxis.show = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'position',
            KR: '첫 번째 y축 위치',
            EN: '첫 번째 y축 위치',
            type: 'select',
            optionValues: YAXIS_POSITION_OPTION_VALUES,
            options: YAXIS_POSITION_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    yAxis[0].position = selectedValue;
                } else {
                    yAxis.position = selectedValue;
                };

                onTuneChartConfig.yAxis.position = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ],
    secondYAxis: [
        {
            id: 'min',
            KR: '두 번째 y축 최소값',
            EN: '두 번째 y축 최소값',
            type: 'select',
            optionValues: YAXIS_MIN_OPTION_VALUES,
            options: YAXIS_MIN_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    const index = yAxis.length > 1 ? 1 : 0;
                    yAxis[ index ].min = selectedValue;
                } else {
                    yAxis.min = selectedValue;
                };

                onTuneChartConfig.secondYAxis.min = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'max',
            KR: '두 번째 y축 최대값',
            EN: '두 번째 y축 최대값',
            type: 'select',
            optionValues: YAXIS_MIN_OPTION_VALUES,
            options: YAXIS_MIN_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    const index = yAxis.length > 1 ? 1 : 0;
                    yAxis[ index ].max = selectedValue;
                } else {
                    yAxis.max = selectedValue;
                };

                onTuneChartConfig.secondYAxis.max = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'show',
            KR: '두 번째 y축 show / hide',
            EN: '두 번째 y축 show / hide',
            type: 'select',
            optionValues: BOOLEAN_OPTIOSN,
            options: BOOLEAN_OPTIOSN,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = Number(selectedValue as string);
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    const index = yAxis.length > 1 ? 1 : 0;
                    yAxis[ index ].show = selectedValue;
                } else {
                    yAxis.show = selectedValue;
                };

                onTuneChartConfig.secondYAxis.show = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        },
        {
            id: 'position',
            KR: '두 번째 y축 위치',
            EN: '두 번째 y축 위치',
            type: 'select',
            optionValues: YAXIS_POSITION_OPTION_VALUES,
            options: YAXIS_POSITION_OPTIONS,
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const yAxis = option.yAxis;
                selectedValue = selectedValue as string;
                
                if( yAxis === undefined ){
                    return;
                } else if( 'length' in yAxis ){
                    const index = yAxis.length > 1 ? 1 : 0;
                    yAxis[ index ].position = selectedValue;
                } else {
                    yAxis.position = selectedValue;
                };

                onTuneChartConfig.secondYAxis.position = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ],
    aodMaxTooltip: [
        {
            id: 'position',
            KR: '최대값 툴팁의 위치',
            EN: '최대값 툴팁의 위치',
            type: 'select',
            optionValues: [ 'first', 'middle', 'last' ],
            options: [ 'first', 'middle', 'last' ],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                selectedValue = selectedValue as string;
                onTuneChart.addAodMaxTooltip( selectedValue );
                // const option = onTuneChart.eChart.getOption();
                // onTuneChart.eChart.setOption( option ); 
            }
        }
    ]
};
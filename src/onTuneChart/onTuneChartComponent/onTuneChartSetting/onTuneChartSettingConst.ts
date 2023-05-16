import type { EChartsOption, TitleOption } from "echarts/types/dist/shared";
import type { LineSeriesOption } from "echarts/charts";
import { CHART_COMPONENT_DEFAULT_VALUE, OntuneChartHtmlLegendPositionConst } from "../../onTuneChartConst";
import type { OnTuneChart } from "../../onTuneChartScript/onTuneChart";

export type TOnTuneChartSettingItemValue = {
    id: string,
    KR: string,
    EN: string,
    type: string,
    options: Array<any>,
    arg: null,
    callback: ( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ) => void,
};

export type TOnTuneChartSettingItemValues = {
    htmlLegend: TOnTuneChartSettingItemValue[],
    line: TOnTuneChartSettingItemValue[],
    title: TOnTuneChartSettingItemValue[],
};

export const onTuneChartSettingItemValues: TOnTuneChartSettingItemValues = {
    htmlLegend: [
        {
            id: 'position',
            KR: 'html 레전드 위치',
            EN: 'html 레전드 위치',
            type: 'select',
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
            options: [0, 0.1, 0.2, 0.3, 1],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const series = option.series;
                selectedValue = Number(selectedValue as string);

                if( series === undefined ){
                    return;
                } else if( Array.length in series ){
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
            options: [1, 2, 3, 4, 5],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const series = option.series;
                selectedValue = Number(selectedValue as string);

                if( series === undefined ){
                    return;
                } else if( Array.length in series ){
                    (series as LineSeriesOption[]).forEach(( item ) => {
                        if( item.lineStyle !== undefined ){
                            item.lineStyle.width = selectedValue;
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
            options: ['Chart Component1', 'Chart Componet2'],
            arg: null,
            callback: function( selectedValue: any, onTuneChartConfig: typeof CHART_COMPONENT_DEFAULT_VALUE, onTuneChart: OnTuneChart ){
                const option = onTuneChart.eChart.getOption() as EChartsOption;
                const title = option.title;

                if( title === undefined ){
                    return;
                } else if( Array.length in title ){
                    (title as TitleOption[]).forEach(( item ) => {
                        item.text = selectedValue;
                    });
                } else {
                    (title as TitleOption).text = selectedValue;
                };
                
                onTuneChartConfig.title.text = selectedValue;
                onTuneChart.eChart.setOption( option );          
            }
        }
    ],
};
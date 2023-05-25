import type { YAXisOption, ZRColor } from "echarts/types/dist/shared";
import type { TOntuneChartHtmlYAxisPosition } from "./onTuneChartConst";

export class EChartOptionMaker {
    getYAxisPosition( position: TOntuneChartHtmlYAxisPosition ){
        if( position == 'RIGHT' ){
            return 'right';
        } else {
            return 'left';
        }
    };

    getEventIndicator( id: string, color: ZRColor, value: number, position: string ){
        const yAxis = {
            id: id,
            type: 'value',
            min: 0,
            max: 10000,
            position: position,
            show: true,
            axisLabel: {
                formatter: function(){
                    return '';
                }
            },
            triggerEvent: false,
            axisPointer: {
                triggerTooltip: false,
                triggerOn: 'none',
                z: 30,
                label: {
                    show: true,
                    backgroundColor: color,
                    // color: color,
                    formatter: function (params) {
                        const numberValue = Math.floor(params.value as number);
                        const result = numberValue < 1000 ? numberValue : `${numberValue / 1000}K`;
                        return result.toString();
                    },
                },
                value: value,
                show: true,
                type: 'line',
                status: 'show',
                lineStyle:{
                    color: color,
                },
                handle: {
                    show: true,
                    size: 1
                },
            },
        } as YAXisOption;

        return yAxis;
    };
};
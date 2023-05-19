import type { TOntuneChartHtmlYAxisPosition } from "./onTuneChartConst";

export class EChartOptionMaker {
    getYAxisPosition( position: TOntuneChartHtmlYAxisPosition ){
        if( position == 'RIGHT' ){
            return 'right';
        } else {
            return 'left';
        }
    };
};
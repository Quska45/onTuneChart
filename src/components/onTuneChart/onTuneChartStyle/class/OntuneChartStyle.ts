import type { TOntuneChartHtmlLegendPosition } from "../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../onTuneChartStyleConst";

export class OntuneChartStyle {
    type: TOntuneChartStyleType = 'basic';

    getStyle( position: TOntuneChartHtmlLegendPosition ){
        return {
            width: '0%',
            height: '0%'
        };
    };
};
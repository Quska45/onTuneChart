import type { TOntuneChartHtmlLegendPosition } from "../../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../../onTuneChartStyleConst";
import { OntuneChartStyle } from "../OntuneChartStyle";
import { ChartBodyStyleConst } from "./ChartBodyConst";

export class ChartBody extends OntuneChartStyle {
    type: TOntuneChartStyleType = 'body';

    getStyle( position: TOntuneChartHtmlLegendPosition, show: boolean ){
        const style = show ? ChartBodyStyleConst[ position ] : ChartBodyStyleConst[ `${position}_FULL` ];

        return {
            width: style.width,
            height: style.height
        };
    };
};
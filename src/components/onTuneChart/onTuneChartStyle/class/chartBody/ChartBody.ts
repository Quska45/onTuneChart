import type { TOntuneChartHtmlLegendPosition } from "../../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../../onTuneChartStyleConst";
import { OntuneChartStyle } from "../OntuneChartStyle";
import { ChartBodyStyleConst } from "./ChartBodyConst";

export class ChartBody extends OntuneChartStyle {
    type: TOntuneChartStyleType = 'body';

    getStyle( position: TOntuneChartHtmlLegendPosition ){
        const style = ChartBodyStyleConst[ position ];

        return {
            width: style.width,
            height: style.height
        };
    };
};
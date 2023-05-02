import type { TOntuneChartHtmlLegendPosition } from "../../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../../onTuneChartStyleConst";
import { OntuneChartStyle } from "../OntuneChartStyle";
import { ChartLegendContainerStyleConst } from "./ChartLegendContainerConst";

export class ChartLegendContainer extends OntuneChartStyle {
    type: TOntuneChartStyleType = 'body';

    getStyle( position: TOntuneChartHtmlLegendPosition ){
        const style = ChartLegendContainerStyleConst[ position ];

        return {
            width: style.width,
            height: style.height
        };
    };
};
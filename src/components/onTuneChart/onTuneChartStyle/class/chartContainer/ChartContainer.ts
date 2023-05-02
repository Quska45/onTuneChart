import type { TOntuneChartHtmlLegendPosition } from "../../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../../onTuneChartStyleConst";
import { OntuneChartStyle } from "../OntuneChartStyle";
import { ChartContainerStyleConst } from "./ChartContainerConst";

export class ChartContainer extends OntuneChartStyle {
    type: TOntuneChartStyleType = 'container';

    getStyle( position: TOntuneChartHtmlLegendPosition ){
        const style = ChartContainerStyleConst[ position ];

        return {
            width: style.width,
            height: style.height,
            flexDirection: style.flexDirection
        };
    };
};
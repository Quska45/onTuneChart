import type { TOntuneChartHtmlLegendPosition } from "../../../onTuneChartConst";
import type { TOntuneChartStyleType } from "../../onTuneChartStyleConst";
import { OntuneChartStyle } from "../OntuneChartStyle";
import { ChartResizeBarStyleConst } from "./ChartResizeBarConst";

export class ChartResizeBar extends OntuneChartStyle {
    type: TOntuneChartStyleType = 'body';

    getStyle( position: TOntuneChartHtmlLegendPosition, show?: boolean ){
        const style = ChartResizeBarStyleConst[ position ];

        return {
            width: style.width,
            height: style.height,
            cursor: style.cursor,
            display: show ? 'block' : 'none'
        };
    };
};
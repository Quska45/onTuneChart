import type { TitleOption } from "echarts/types/dist/shared";

/**
 * 타이틀은 무조건 하나 만 있는 것을 가정하고 만들어진다.
 * 만약 여러개의 타이틀이 필요해 진다면, title 인스턴스를 여러개 만들어 사용할 수 있는 형태로 onTuneChart를 변경해서 사용한다.
 */
export class OnTuneChartTitle {
    title: TitleOption;

    constructor( title: TitleOption ){
        this.title = title;
    };

    getText(){
        return this.title.text;
    };

    static getTitle( title: TitleOption | TitleOption[] | undefined, titleIndex?: number ){
        const titleProtoType = Object.prototype.toString.call( title );

        if( titleProtoType === '[object Object]' ){
            return title as TitleOption;
        } else {
            if( !titleIndex ){
                titleIndex = 0;
            };

            return ( title as TitleOption[] )[ titleIndex ];
        };
    };
};
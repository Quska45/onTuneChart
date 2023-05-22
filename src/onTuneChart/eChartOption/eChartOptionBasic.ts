export class EChartOptionBasic {
    isUndefied<T>( param: T | T[] | undefined ){
        if( param === undefined ){
            return true;
        } else {
            return false;
        };
    };
};
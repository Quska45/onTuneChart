function getAddZeroValue( time: number | string ){
    if( typeof time == 'string' ){
        time = Number( time );
    };

    if( time < 10 ){
        time = '0' + time.toString();
    };

    return time;
}

export class TestDataMaker {
    term: number;

    host: number;

    constructor( term: number, host: number ){
        this.term = term;
        this.host = host;
    };

    getCategories(){
        const categories = [];
        const startDate = new Date(new Date().getTime() - (this.term*1000));
        const startTime = startDate.getTime();

        for(let i=1; i<=this.term; ++i){
            let timeStr = '';
            const tempDate = new Date(startTime + (i*1000));
            const hour = getAddZeroValue( tempDate.getHours() );
            const min = getAddZeroValue( tempDate.getMinutes() );
            const sec = getAddZeroValue( tempDate.getSeconds() );
            
            timeStr = `${hour}:${min}:${sec}`;

            categories.push(timeStr);
        };

        return categories;
    };

    getSeries( globalLineWidth: number, globalLineTension: number ){
        const series: object[] = [];

        for( let i=0; i<this.host; ++i ){
            const data: number[] = [];
            const dataset = {
                name: `Test PC ${i}`,
                data: data,
                type: 'line',
                showSymbol: false,
                lineStyle: {
                    width: globalLineWidth,
                },
                smooth: globalLineTension,
                emphasis: {
                    lineStyle: {
                        width: globalLineWidth * 2
                    }
                },

            };

            series.push( dataset );
            for( let j=0; j<this.term; ++j ){
                dataset.data.push(parseInt((Math.random() * 10000).toString()));
            };
        };

        return series;
    };
};
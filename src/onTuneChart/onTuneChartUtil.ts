export const onTuneChartColorUtil = {
    randomColorFactor() {
        return Math.floor(Math.random() * 255);
    },
    getRandomColor(){
        return `rgb(${this.randomColorFactor()}, ${this.randomColorFactor()}, ${this.randomColorFactor()})`;
    },
    makeHexColor() {
        return Math.floor(Math.random() * 16777215).toString(16);;
    },
    rgbToHex ( rgbType: string ){ 
        /* 
        ** 컬러값과 쉼표만 남기고 삭제하기. 
        ** 쉼표(,)를 기준으로 분리해서, 배열에 담기. 
        */ 
        const rgb = rgbType.replace( /[^%,.\d]/g, "" ).split( "," ); 
        
        rgb.forEach(function (str: string, x, arr){ 
        
            /* 컬러값이 "%"일 경우, 변환하기. */ 
            if ( str.indexOf( "%" ) > -1 ) str = Math.round( parseFloat(str) * 2.55 ); 
            
            /* 16진수 문자로 변환하기. */ 
            str = parseInt( str, 10 ).toString( 16 ); 
            if ( str.length === 1 ) str = "0" + str; 
            
            arr[ x ] = str; 
        }); 
        
        return "#" + rgb.join( "" ); 
    },
    hexToRgb ( hexType: string ){ 
        /* 맨 앞의 "#" 기호를 삭제하기. */ 
        const hex = hexType.trim().replace( "#", "" ); 
        
        /* rgb로 각각 분리해서 배열에 담기. */ 
        let rgb = ( 3 === hex.length ) ? hex.match( /[a-f\d]/gi ) : hex.match( /[a-f\d]{2}/gi );
        
        rgb.forEach(function (str, x, arr){     
            /* rgb 각각의 헥사값이 한자리일 경우, 두자리로 변경하기. */ 
            if ( str.length == 1 ) str = str + str; 
            
            /* 10진수로 변환하기. */ 
            arr[ x ] = parseInt( str, 16 ); 
        }); 
        
        return "rgb(" + rgb.join(", ") + ")"; 
    } 
};
import { ResizeBar } from "./ResizeBar";

export class LeftResizeBar extends ResizeBar {
    mouseMoveHandler( event: MouseEvent ) {
        super.mouseMoveHandler( event );

        document.body.style.cursor = 'col-resize';
        
        const newSecondWidth = ((this.secondBBox.width + this.dx) * 100) / (this.resizeBarDom.parentNode as HTMLElement).getBoundingClientRect().width;
        const newFirstWidth = 100 - newSecondWidth;
        
        if( newFirstWidth < 15 ){
            return;
        };

        if( newSecondWidth < 20 ){
            return;
        };
        
        this.firstTargetDom.style.width = `${newFirstWidth}%`;
        this.secondTargetDom.style.width = `${newSecondWidth}%`;
    };
};
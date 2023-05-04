import { ResizeBar } from "./ResizeBar";

export class TopResizeBar extends ResizeBar {
    mouseMoveHandler( event: MouseEvent ) {
        super.mouseMoveHandler( event );

        document.body.style.cursor = 'row-resize';
        
        const newSecondHeight = ((this.secondBBox.height + this.dy) * 100) / (this.resizeBarDom.parentNode as HTMLElement).getBoundingClientRect().height;
        const newFirstHeight = 100 - newSecondHeight;
        
        if( newFirstHeight < 15 ){
            return;
        };

        if( newSecondHeight < 20 ){
            return;
        };
        
        this.firstTargetDom.style.height = `${newFirstHeight}%`;
        this.secondTargetDom.style.height = `${newSecondHeight}%`;
    };
};
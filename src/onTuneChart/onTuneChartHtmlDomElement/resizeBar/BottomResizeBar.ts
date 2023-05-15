import { ResizeBar } from "./ResizeBar";

export class BottomResizeBar extends ResizeBar {
    mouseMoveHandler( event: MouseEvent ) {     
        super.mouseMoveHandler( event );

        document.body.style.cursor = 'row-resize';

        const newFirstHeight = ((this.firstBBox.height + this.dy) * 100) / (this.resizeBarDom.parentNode as HTMLElement).getBoundingClientRect().height;
        const newSecondHeight = 100 - newFirstHeight;
        
        if( newFirstHeight < 20 ){
            return;
        };

        if( newSecondHeight < 15 ){
            return;
        };
        
        this.firstTargetDom.style.height = `${newFirstHeight}%`;
        this.secondTargetDom.style.height = `${newSecondHeight}%`;
    };
};
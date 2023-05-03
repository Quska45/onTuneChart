import { ResizeBar } from "./ResizeBar";

export class RightResizeBar extends ResizeBar {
    mouseMoveHandler( event: MouseEvent ) {
        super.mouseMoveHandler( event );

        document.body.style.cursor = 'col-resize';
        
        const newFirstWidth = ((this.firstBBox.width + this.dx) * 100) / (this.resizeBarDom.parentNode as HTMLElement).getBoundingClientRect().width;
        const newRightWidth = 100 - newFirstWidth;
        
        if( newFirstWidth < 20 ){
            return;
        };

        if( newRightWidth < 15 ){
            return;
        }
        
        this.firstTargetDom.style.width = `${newFirstWidth}%`;
        this.secondTargetDom.style.width = `${newRightWidth}%`;
    };
};
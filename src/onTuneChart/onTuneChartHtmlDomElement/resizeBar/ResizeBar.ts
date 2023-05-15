export class ResizeBar {
    resizeBarDom: HTMLElement;

    firstTargetDom: HTMLElement;

    secondTargetDom: HTMLElement;

    mouseX: number = Infinity;

    mouseY: number = Infinity;

    firstBBox: DOMRect;

    secondBBox: DOMRect;

    dx: number = Infinity;

    dy: number = Infinity;

    _mouseMoveHandler = ( event: MouseEvent ) => {};

    _mouseUpHandler = () => {};

    constructor( resizeBarDom: HTMLElement, firstTargetDom: HTMLElement, secondTargetDom: HTMLElement ){
        this.resizeBarDom = resizeBarDom;
        this.firstTargetDom = firstTargetDom;
        this.secondTargetDom = secondTargetDom;
        this.firstBBox = this.firstTargetDom.getBoundingClientRect();
        this.secondBBox = this.secondTargetDom.getBoundingClientRect();
    };

    resizeStart(){
        this.resizeBarDom.addEventListener( 'mousedown', this.mouseDownHandler.bind( this ) );
    };

    mouseDownHandler( event: MouseEvent ){
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.firstBBox = this.firstTargetDom.getBoundingClientRect();
        this.secondBBox = this.secondTargetDom.getBoundingClientRect();

        this._mouseMoveHandler = this.mouseMoveHandler.bind( this );
        this._mouseUpHandler = this.mouseUpHandler.bind( this );
        
        document.addEventListener('mousemove', this._mouseMoveHandler );
        document.addEventListener('mouseup', this._mouseUpHandler );
    };

    mouseMoveHandler( event: MouseEvent ){
        this.dx = event.clientX - this.mouseX;
        this.dy = event.clientY - this.mouseY;
        
        // 이동 중 양쪽 영역(왼쪽, 오른쪽)에서 마우스 이벤트와 텍스트 선택을 방지하기 위해 추가
        this.firstTargetDom.style.userSelect = 'none';
        this.firstTargetDom.style.pointerEvents = 'none';
        
        this.secondTargetDom.style.userSelect = 'none';
        this.secondTargetDom.style.pointerEvents = 'none';
    };

    mouseUpHandler(){
        document.body.style.removeProperty('cursor');

        this.firstTargetDom.style.removeProperty('user-select');
        this.firstTargetDom.style.removeProperty('pointer-events');

        this.secondTargetDom.style.removeProperty('user-select');
        this.secondTargetDom.style.removeProperty('pointer-events');

        document.removeEventListener( 'mousemove', this._mouseMoveHandler );
        document.removeEventListener( 'mouseup', this._mouseUpHandler );
    };
};
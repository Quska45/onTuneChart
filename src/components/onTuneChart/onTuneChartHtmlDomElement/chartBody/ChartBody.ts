export class ChartBody {
    dom: HTMLElement;

    observer: void;

    constructor( dom: HTMLElement, callback: () => void ){
        this.dom = dom;
        this.observer = new ResizeObserver( callback ).observe( this.dom );
    };
};
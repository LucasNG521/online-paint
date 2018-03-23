class DrawingCircleHollow extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }

    onMouseDown(coord,event){
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineWidth = lWidth;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX) + (coord[1]- this.origY)*(coord[1]- this.origY)), 0, 360, false);
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineWidth =lWidth;
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX) + (coord[1]- this.origY)*(coord[1]- this.origY)), 0, 360, false);
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        this.contextReal.stroke();
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}

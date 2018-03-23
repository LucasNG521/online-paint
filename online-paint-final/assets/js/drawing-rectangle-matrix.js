class DrawingRectangleMatrix extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextDraft.fillStyle = rgbaColor;
        this.contextDraft.lineWidth = lWidth;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.lineWidth = lWidth;
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.lineWidth = lWidth;
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.stroke();
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
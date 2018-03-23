class DrawingRectangleHollow extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineWidth = lWidth;
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        this.contextReal.stroke();
        cPush();  
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
class DrawingEllipseMatrix extends PaintFunction{
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
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.origX, this.origY, 
        Math.abs(coord[0]-this.origX)/2, Math.abs(coord[1]-this.origY)/2, 0, Math.PI*2, false)
        this.contextReal.stroke();
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.origX, this.origY, 
        Math.abs(coord[0]-this.origX)/2, Math.abs(coord[1]-this.origY)/2, 0, Math.PI*2, false)
        this.contextReal.stroke();
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}    
}
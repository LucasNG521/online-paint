class DrawingEllipse extends PaintFunction{
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
        this.contextDraft.fillStyle = rgbaColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(this.origX+(coord[0]-this.origX)/2, this.origY+(coord[1]-this.origY)/2, 
        Math.abs(coord[0]-this.origX)/2, Math.abs(coord[1]-this.origY)/2, 0, Math.PI*2, false)
        this.contextDraft.fill();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.fillStyle = rgbaColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.ellipse(this.origX+(coord[0]-this.origX)/2, this.origY+(coord[1]-this.origY)/2, 
        Math.abs(coord[0]-this.origX)/2, Math.abs(coord[1]-this.origY)/2, 0, Math.PI*2, false)
        this.contextReal.fill();
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}    
}
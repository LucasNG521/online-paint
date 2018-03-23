class DrawingCircle extends PaintFunction{
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
        this.contextDraft.arc(this.origX, this.origY, Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX) + (coord[1]- this.origY)*(coord[1]- this.origY)), 0, 2*Math.PI,);
        this.contextDraft.fill();
    }
    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.fillStyle = rgbaColor;
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX, this.origY, Math.sqrt((coord[0]- this.origX)*(coord[0]- this.origX) + (coord[1]- this.origY)*(coord[1]- this.origY)), 0, 2*Math.PI, true);
        this.contextReal.fill();
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}    
}

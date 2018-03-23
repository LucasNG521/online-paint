class DrawingSquareHollow extends PaintFunction{
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
        var lengthX=Math.abs(coord[0] - this.origX);
        var lengthY=Math.abs(coord[1]  - this.origY);
        if(lengthX>lengthY){
            var width=lengthX*(coord[0]<this.origX?-1:1);
            var height=lengthX*(coord[1]<this.origY?-1:1);
        }else{
            var width=lengthY*(coord[0]<this.origX?-1:1);
            var height=lengthY*(coord[1]<this.origY?-1:1);
        }
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.rect(this.origX,this.origY,width,height);
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.lineWidth = lWidth;
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        var lengthX=Math.abs(coord[0] - this.origX);
        var lengthY=Math.abs(coord[1]  - this.origY);
        if(lengthX>lengthY){
            var width=lengthX*(coord[0]<this.origX?-1:1);
            var height=lengthX*(coord[1]<this.origY?-1:1);
        }else{
            var width=lengthY*(coord[0]<this.origX?-1:1);
            var height=lengthY*(coord[1]<this.origY?-1:1);
        }
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX,this.origY,width,height);
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        this.contextReal.stroke();
        cPush();  
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
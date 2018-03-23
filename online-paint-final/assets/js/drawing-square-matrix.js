class DrawingSquareMatrix extends PaintFunction{
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
        if(lengthX==lengthY){
            var width=lengthX*(coord[0]<this.origX?-1:1);
            var height=lengthX*(coord[1]<this.origY?-1:1);
        }else{
            var width=lengthY*(coord[0]<this.origX?-1:1);
            var height=lengthY*(coord[1]<this.origY?-1:1);
        }
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.rect(this.origX + (coord[0] - this.origX)/2,this.origY + (coord[1]- this.origY)/2,width,height);
        this.contextReal.strokeStyle = rgbaColor;
        this.contextReal.lineWidth = lWidth;
        this.contextReal.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){ //don't use below function because when mouseup will be draw a square around the start point
        // var lengthX=Math.abs(coord[0] - this.origX);
        // var lengthY=Math.abs(coord[1]  - this.origY);
        // if(lengthX==lengthY){
        //     var width=lengthX*(coord[0]<this.origX?-1:1);
        //     var height=lengthX*(coord[1]<this.origY?-1:1);
        // }else{
        //     var width=lengthY*(coord[0]<this.origX?-1:1);
        //     var height=lengthY*(coord[1]<this.origY?-1:1);
        // }
        // this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        // this.contextReal.beginPath();
        // this.contextReal.rect(this.origX - (coord[0] - this.origX)/2,this.origY - (coord[1]- this.origY)/2,width,height);
        // this.contextReal.strokeStyle = rgbaColor;
        // this.contextReal.lineWidth = lWidth;
        // this.contextReal.stroke();
        cPush();  
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
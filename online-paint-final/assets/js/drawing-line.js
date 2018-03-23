class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;        
        this.contextDraft = contextDraft;     
    }
    
    onMouseDown(coord,event){
        this.context.strokeStyle = rgbaColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = lWidth;
        this.context.beginPath();
        this.context.lineCap = "round";
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
        
    }

    onMouseMove(){}
    onMouseUp(){
        cPush();  
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.contextDraft.closePath();
        this.context.stroke();
      
    }
}
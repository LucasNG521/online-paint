//save to .png file and download
function saveFile(){
    var link = document.getElementById("download");
    //image format (default format type is image/png)
    link.download= "paint.png";
    // number between 0 and 1 indicating image quality 
    // if the requested type is image/jpeg or image/webp
    link.href = canvasReal.toDataURL('image/png');
    link.click();
}
img="";
status="";
objects=[]; 
function preload(){
    img=loadImage('bedroom.jpg');
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stauts").innerHTML = "Status: Detecting object";

}
function modelLoaded(){
    console.log("Cocossd is Initiallized");
    status=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        console.log(objects);
    }
}
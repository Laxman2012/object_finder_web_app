Modelstatus = "";

function setup()
{

   canvas = createCanvas(400, 400);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

}


function draw()
{

  image(video , 0 , 0 , 400 , 400);

}

function Start()
{

   objectDetect = ml5.objectDetector('cocossd' , modelLoaded);
   document.getElementById("status").innerHTML = " Status: Detecting object";
   object = document.getElementById("input").value;

}

function modelLoaded()
{

   console.log("Model Loaded!!!")
   Modelstatus = true;  

}
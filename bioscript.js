



//var warn = alert("This broadcast may be sensitive toward people with epilepsy"); 



//var initiate = function(){



var drawMask = function(){

var lipCo = []; 

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35); 

lipCo.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}



var c = document.getElementById("tele"); 
var ctx = c.getContext("2d"); 
ctx.beginPath(); 
ctx.moveTo(150,20);  //some slights tweaks with the co-ords will be
ctx.lineTo(150,349);  //essential when polishing, to line things up. 
ctx.moveTo(20,20); 
ctx.lineTo(150,349);
ctx.moveTo(20,20); 
ctx.lineTo(280,20); 

ctx.moveTo(20,20); //left eye. make these blink.
ctx.lineTo(90,30); 
ctx.lineTo(150,20); 

ctx.moveTo(20,20); //left eye shadow. 
ctx.lineTo(90,35); 
ctx.lineTo(150,20); 

ctx.moveTo(150,20); //right eye. make these blink. 
ctx.lineTo(210,30); 
ctx.lineTo(280,20); 

ctx.moveTo(150,20); //right eye shadow. 
ctx.lineTo(210,35); 
ctx.lineTo(280,20); 

ctx.moveTo(280,20); 
ctx.lineTo(150,349);

ctx.moveTo(150,20); //right nose. 
ctx.lineTo(175,140);
ctx.lineTo(150,170); 

ctx.moveTo(175,140); //right nostril. 
ctx.lineTo(175,150);
ctx.lineTo(150,170); 

ctx.moveTo(150,20); //left nose
ctx.lineTo(125,140);
ctx.lineTo(150,170);

ctx.moveTo(125,140); //left nostril.
ctx.lineTo(125,150);
ctx.lineTo(150,170);

ctx.moveTo(97, 214); //mouth line. 
ctx.lineTo(203,214); 

ctx.moveTo(97,214); //upper left lip. 
ctx.lineTo(150,lipCo[1]+175); 

ctx.moveTo(97,214); //upper left lower lip. 
ctx.lineTo(150,lipCo[1]+185); 

ctx.moveTo(203,214); //upper right lip. 
ctx.lineTo(150,lipCo[1]+175);    //175 is the original vertical axis co-ord.

ctx.moveTo(203,214); //upper right lower lip. 
ctx.lineTo(150,lipCo[1]+185);    //185 is the original vertical axis co-ord. 



ctx.moveTo(97,214); //lower left lip. 
ctx.lineTo(150,lipCo[2]+235); 

ctx.moveTo(97,214); //lower left lower lip. 
ctx.lineTo(150,lipCo[2]+250); 

ctx.moveTo(203,214); //lower right lip. 
ctx.lineTo(150,lipCo[2]+235); 

ctx.moveTo(203,214); //lower right lower lip. 
ctx.lineTo(150,lipCo[2]+250); 
//note fist is x(cross) second co-ord is y (down). 


ctx.moveTo(163,85); //right mouth crease
ctx.lineTo(183,85);
ctx.lineTo(203,214);

ctx.moveTo(136,85); //left mouth crease
ctx.lineTo(116,85);
ctx.lineTo(97,214);

ctx.moveTo(183,85); //check to right eye.
ctx.lineTo(280,20);

ctx.moveTo(116,85); //check to left eye.
ctx.lineTo(20,20);

/*ctx.moveTo(20,20); //left eyebrow
ctx.lineTo(60,2);
ctx.lineTo(150,20);

ctx.moveTo(280,20); //right eyebrow
ctx.lineTo(240,2);
ctx.lineTo(150,20); */

/*

ctx.moveTo(20,20); //left eye
ctx.lineTo(75,lipCo[4]+15);
ctx.lineTo(105,lipCo[4]+15);
ctx.lineTo(150,20);

ctx.moveTo(116,85); //bottom left eye
ctx.lineTo(75,lipCo[4]+20); 
ctx.lineTo(105,lipCo[4]+20); 
ctx.lineTo(116,85);


ctx.moveTo(280,20); //right eye
ctx.lineTo(225,lipCo[4]+15);
ctx.lineTo(195,lipCo[4]+15);
ctx.lineTo(150,20);

ctx.moveTo(183,85); //bottom right eye
ctx.lineTo(195,lipCo[4]+20); 
ctx.lineTo(225,lipCo[4]+20); 
ctx.lineTo(183,85);

ctx.moveTo(75,lipCo[4]+20); //left iris
ctx.lineTo(75,lipCo[4]+15); 

ctx.moveTo(105,lipCo[4]+20); 
ctx.lineTo(105,lipCo[4]+15);

ctx.moveTo(225,lipCo[4]+20); //right iris
ctx.lineTo(225,lipCo[4]+15); 

ctx.moveTo(195,lipCo[4]+20); 
ctx.lineTo(195,lipCo[4]+15);

*/


//ctx.lineTo(44,30); 
ctx.lineWidth = 1.2;
ctx.strokeStyle="#CC33FF"; 
//might be nice to give canvas lines a subtle glow effect. 
//can increase the brightness abit by looping the lines on themselfs. 
ctx.stroke(); 

}; 


setInterval(drawMask,85);





var clearMask = function(){
   //context.clearRect(0, 0, canvas.Width, canvas.Height);
//document.getElementById('warp').innerHTML="kdakda"; 
   document.getElementById('tele').getContext('2d').clearRect(0, 0, 700, 650);
	  //canvas.width = canvas.width; 
	//canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
};

setInterval(clearMask,100); 















//brain wave script paste - start


var ripple = function(){

var co1 = []; 
var co2 = []; 
var co3 = []; 
var co4 = []; 

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co1.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co2.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co3.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co4.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

   var canvas = document.getElementById('brainWave');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(0, 50);
	   context.bezierCurveTo(17, co1[1], 37, co1[3], 57, co1[5]);
	  context.lineTo(75,50); //this creates a line from the moveTo method. 
     
	 context.moveTo(75,50);
	   context.bezierCurveTo(93, co2[1], 113, co2[3], 133, co2[5]);
	  context.lineTo(150,50); //this creates a line from the moveTo method. 
	  
	  context.moveTo(150,50);
	   context.bezierCurveTo(167, co3[1], 187, co3[3], 207, co3[5]);
	  context.lineTo(225,50); //this creates a line from the moveTo method. 
	  
	  context.moveTo(225,50);
	   context.bezierCurveTo(243, co4[1], 263, co4[3], 283, co4[5]);
	  context.lineTo(300,50); //this creates a line from the moveTo method. 

      context.lineWidth = 2;

      // line color
      context.strokeStyle = '#D65CFF';
	  
      //exicute the stroke based on the instructions we've provided.
	  context.stroke();  
      
	
	  
  


   
};




setInterval(ripple,85); 
//return;

   
 


var clearCanvas = function(){
   //context.clearRect(0, 0, canvas.Width, canvas.Height);
//document.getElementById('warp').innerHTML="kdakda"; 
   document.getElementById('brainWave').getContext('2d').clearRect(0, 0, 700, 250);
	  //canvas.width = canvas.width; 
	//canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
};

setInterval(clearCanvas,100); 
//maybe this function doesn't need an event caller due 
//to the setInterval keyword.

//brain wave script paste - end





//------------------------------------------------------------------


var ripple2 = function(){

var co1 = []; 
var co2 = []; 
var co3 = []; 
var co4 = []; 

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co1.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co2.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co3.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

for(var i=0; i<=5; i++){
var r = Math.floor(Math.random()*35+30); 

co4.push(r); 
//each time through the loop throws/pushes 6 random numbers to array 'co'.
}

   var canvas = document.getElementById('brainWave2');
      var context = canvas.getContext('2d');
      context.beginPath();
      context.moveTo(0, 50);
	   context.bezierCurveTo(17, co1[1], 37, co1[3], 57, co1[5]);
	  context.lineTo(75,50); //this creates a line from the moveTo method. 
     
	 context.moveTo(75,50);
	   context.bezierCurveTo(93, co2[1], 113, co2[3], 133, co2[5]);
	  context.lineTo(150,50); //this creates a line from the moveTo method. 
	  
	  context.moveTo(150,50);
	   context.bezierCurveTo(167, co3[1], 187, co3[3], 207, co3[5]);
	  context.lineTo(225,50); //this creates a line from the moveTo method. 
	  
	  context.moveTo(225,50);
	   context.bezierCurveTo(243, co4[1], 263, co4[3], 283, co4[5]);
	  context.lineTo(300,50); //this creates a line from the moveTo method. 

      context.lineWidth = 0.4;

      // line color
      context.strokeStyle = '#D65CFF';
	  
      //exicute the stroke based on the instructions we've provided.
	  context.stroke();  
      
	
	  
  


   
};




setInterval(ripple2,85); 
//return;

   
 


var clearCanvas2 = function(){
   //context.clearRect(0, 0, canvas.Width, canvas.Height);
//document.getElementById('warp').innerHTML="kdakda"; 
   document.getElementById('brainWave2').getContext('2d').clearRect(0, 0, 700, 250);
	  //canvas.width = canvas.width; 
	//canvas.getContext('2d').clearRect(0,0,canvas.width, canvas.height);
};

setInterval(clearCanvas2,100); 
//maybe this function doesn't need an event caller due 
//to the setInterval keyword.

//brain wave script paste - end


var gen1 = function(){ //canvas generator1
var banner = document.getElementById("generator1"); 
var bctx = banner.getContext("2d"); 
bctx.beginPath(); 

bctx.moveTo(235,180);//upper center line
bctx.lineTo(40, 180); 
bctx.lineTo(40, 1);

bctx.moveTo(270,175);//center line
bctx.lineTo(45, 175);
bctx.lineTo(45, 1); 

bctx.moveTo(235,170);//lower center line
bctx.lineTo(50, 170);
bctx.lineTo(50, 1); 

bctx.moveTo(270,180); //pipe's eye
bctx.lineTo(267,175); 
bctx.lineTo(270,170); 
bctx.lineTo(273,175); 
bctx.lineTo(270,180); 

bctx.moveTo(270,150);//vertical pipe line
bctx.lineTo(270,200); 

bctx.moveTo(270,150); //right pipe curvature
bctx.lineTo(280,175);
bctx.lineTo(270,200); 

bctx.moveTo(270,150); //left pipe curvature
bctx.lineTo(260,175);
bctx.lineTo(270,200); 

bctx.moveTo(270,150); //pipe stretch
bctx.lineTo(225,175);
bctx.lineTo(270,200); 


bctx.strokeStyle = '#413846';
bctx.lineWidth = 1; //can overlap multiple lineWidth's on top of each on header for intricate effect. 
bctx.stroke(); 

}; 


var gen2 = function(){ //canvas generator2 
var banner = document.getElementById("generator2"); 
var bctx = banner.getContext("2d"); 
bctx.beginPath(); 
bctx.moveTo(65,170);//upper center line
bctx.lineTo(250,170); 
bctx.lineTo(250,1); 

bctx.moveTo(30,175);//middle center line
bctx.lineTo(255,175); 
bctx.lineTo(255,1); 

bctx.moveTo(65,180);//lower center line
bctx.lineTo(260,180); 
bctx.lineTo(260,1); 

bctx.moveTo(30,180); //pipe's eye
bctx.lineTo(27,175); 
bctx.lineTo(30,170); 
bctx.lineTo(33,175); 
bctx.lineTo(30,180); 



bctx.moveTo(30,150);//vertical pipe line
bctx.lineTo(30, 200); 

bctx.moveTo(30,150); //left pipe curvature
bctx.lineTo(20,175);
bctx.lineTo(30,200); 

bctx.moveTo(30,150); //right pipe curvature
bctx.lineTo(40,175);
bctx.lineTo(30,200); 

bctx.moveTo(30,150); //pipe stretch
bctx.lineTo(75,175);
bctx.lineTo(30,200); 




bctx.strokeStyle = '#413846';
bctx.lineWidth = 1; //can overlap multiple lineWidth's on top of each on header for intricate effect. 
bctx.stroke(); 

}; 

//can next a bunch of functions inside window.onload and load em up this way
//for convenience. 
window.onload=function(){

gen1(); 
gen2(); 

};

//start of speech generation script------------------------------------------------


//global speech arrays
//var talk1 = ["Is", "everything", "as", "it", "seems?"];
//var talk2 = ["How", "do", "we", "appear", "when", "there", "is", "no", "human", "witness?"];
//var talk3 = ["I", "have", "been", "taught", "the", "ways", "of", "Biocentrism."];
//var obtain = []; 

var alter = function(){

//var i; 
//obtain.push(i); 


//var printer; 

var rand = Math.floor(Math.random()*10); 



if(rand<3){

var obtain = []; //this array has global scope.
var rollout1=function(){
var i; 
obtain.push(i); 
//var talk3 = ["I", "have", "been", "taught", "the", "ways", "of", "Biocentrism."];
//var printer = talk3[obtain.length,"",obtain.length,"",obtain.length];

if(obtain.length==1){
var printer = "I";  
}

if(obtain.length==2){
var printer = "I have";   //the printer var should get over-written each time it assigns a new value.
}

if(obtain.length==3){
var printer = "I have been";
}

if(obtain.length==4){
var printer = "I have been taught";
}

if(obtain.length==5){
var printer = "I have been taught the";
}

if(obtain.length==6){
var printer = "I have been taught the ways";
}

if(obtain.length==7){
var printer = "I have been taught the ways of";
}

if(obtain.length==8){
var printer = "I have been taught the ways of Biocentrism.";
}




var targetHeader = document.getElementById('speachSwitch');
var header = targetHeader.innerHTML =printer.italics(); 

};

setInterval(rollout1,250); 

}else if(rand<6){

var obtain = []; //this array has global scope.
var rollout2=function(){
var i; 
obtain.push(i); 
//var talk3 = ["I", "have", "been", "taught", "the", "ways", "of", "Biocentrism."];
//var printer = talk3[obtain.length,"",obtain.length,"",obtain.length];

if(obtain.length==1){
var printer = "Is";  
}

if(obtain.length==2){
var printer = "Is everything";   //the printer var should get over-written each time it 
                                //assigns a new value.
}

if(obtain.length==3){
var printer = "Is everything as";
}

if(obtain.length==4){
var printer = "Is everything as it";
}

if(obtain.length==5){
var printer = "Is everything as it seems?";
}

var targetHeader = document.getElementById('speachSwitch');
var header = targetHeader.innerHTML =printer.italics(); 

};

setInterval(rollout2,250); 

}
else{

var obtain = []; //this array has global scope.
var rollout3=function(){
var i; 
obtain.push(i); 
//var talk3 = ["I", "have", "been", "taught", "the", "ways", "of", "Biocentrism."];
//var printer = talk3[obtain.length,"",obtain.length,"",obtain.length];

if(obtain.length==1){
var printer = "How";  
}

if(obtain.length==2){
var printer = "How do";   //the printer var should get over-written each time it assigns a new value.
}

if(obtain.length==3){
var printer = "How do we";
}

if(obtain.length==4){
var printer = "How do we really";
}

if(obtain.length==5){
var printer = "How do we really appear?";
}




var targetHeader = document.getElementById('speachSwitch');
var header = targetHeader.innerHTML =printer.italics(); 

};

setInterval(rollout3,250); 


}





//var targetHeader = document.getElementById('speachSwitch');
//var header = targetHeader.innerHTML =printer.italics(); 



};
setInterval(alter,4000); 

//end of speech generation script----------------------------------------------

//};
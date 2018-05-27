window.setTimeout(function(){
var easy=document.querySelector(".buo");
 easy.addEventListener("click",function(){
 	easy.classList.add("bu02");
 	hard.classList.remove("bu02");
 	number=3;
 	colors=generate(number);
 	picked=pickcolor();
 	pickedcolor.textContent=picked;
 	for(var i=0;i<sqr.length;i++){
 		if(colors[i]){
 			sqr[i].style.backgroundColor=colors[i];
 		}
		else{
			sqr[i].style.display="none";
		}
}
 })
var hard=document.querySelector(".buo1");
 hard.addEventListener("click",function(){
  easy.classList.remove("bu02");
  hard.classList.add("bu02");
  number=6;
  colors=generate(number);
  picked=pickcolor();
  pickedcolor.textContent=picked;
  for(var i=0;i<sqr.length;i++){
	sqr[i].style.backgroundColor=colors[i];
	sqr[i].style.display="block";

}
 })
 var number=6;
 var colors=generate(number);

var pickedcolor=document.querySelector("#bgr");
var neww=document.querySelector("#play");
var sqr=document.querySelectorAll(".sqaure");
var back=document.querySelector(".h2");
var message=document.querySelector("#msg");
var picked=pickcolor();
var easypeasy=document.querySelectorAll(".sqaureeasy")
for(var i=0;i<sqr.length;i++){
	sqr[i].style.backgroundColor=colors[i];
	}

pickedcolor.textContent=picked;
for(var i=0;i<sqr.length;i++){
	sqr[i].addEventListener("click",function(){
		// pickedcolor.textContent=this.style.backgroundColor;
		back.style.backgroundColor=this.style.backgroundColor;

		if(this.style.backgroundColor===picked){
		message.textContent="Correct"
		allcolor(this.style.backgroundColor);
		neww.textContent="Play Again?";
	}
	else{
		message.textContent="Try Again"
		neww.textContent="New Color";
		
	    this.style.backgroundColor="#232323";
}

	})


}
neww.addEventListener("click",function(){
	colors=generate(number);
	picked=pickcolor();
	pickedcolor.textContent=picked;
	ransomcolors();
	for(var i=0;i<sqr.length;i++){
		sqr[i].style.backgroundColor=colors[i];
	}
	back.style.backgroundColor="steelblue";
	message.textContent=""
})
function allcolor(x){
	for(var i=0;i<colors.length;i++){
		sqr[i].style.backgroundColor=x;
	}
}
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generate(num){
	var arr=[]
for(i=0;i<num;i++){
	arr.push(ransomcolors());

}
return arr;
}
function ransomcolors(){
var r=Math.floor(Math.random()*256)	
var g=Math.floor(Math.random()*256)	
var b=Math.floor(Math.random()*256)
return "rgb(" + r + ", " + g + ", " + b + ")";
}

},500)
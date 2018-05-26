window.setTimeout(function(){
var color=document.querySelectorAll(".HI");
for(var i=0;i<color.length;i++){
color[i].addEventListener("mouseover",function(){
	this.classList.add("done")
})
color[i].addEventListener("mouseout",function(){
	this.classList.remove("done")
})
}
},500)
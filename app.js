var userscore=0,compscore=0;
var choices=['Rock','Paper','Scissors'];
choice=document.getElementsByClassName("choice");
result=document.getElementById("result");
usersc=document.getElementById("user-score");
compsc=document.getElementById("comp-score");
button=document.getElementById("button");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function draw(userch){
	console.log("draw");
	result.innerHTML="Draw";
}

function userw(userch,compch){
	console.log("user wins "+compch);
	userscore++;
	usersc.textContent=userscore;
	result.innerHTML=choices[userch]+" wins over "+choices[compch]+" User wins";
}
function compw(userch,compch){
	console.log("computer wins "+compch);
	compscore++;
	compsc.textContent=compscore;
	result.innerHTML=choices[compch]+" wins over "+choices[userch]+" Computer wins";
}

choice[0].addEventListener("click",function(){
	var compchoice=getRandomInt(3);
		if(compchoice==0)
			draw(0);
		else if(compchoice==1)
			compw(0,compchoice);
			
		else {userw(0,compchoice);
			result.textContent=choices[0]+" wins over "+choices[compchoice]+" User wins";
		}
});
choice[1].addEventListener("click",function(){
	var compchoice=getRandomInt(3);
		if(compchoice==1)
			draw(1);
		else if(compchoice==2)
			compw(1,compchoice);
			
		else {userw(1,compchoice);
			result.textContent=choices[1]+" wins over "+choices[compchoice]+" User wins";
		}
});
choice[2].addEventListener("click",function(){
	var compchoice=getRandomInt(3);
		if(compchoice==2)
			draw(2);
		else if(compchoice==0)
			compw(2,compchoice);
			
		else {userw(2,compchoice);
			result.textContent=choices[2]+" wins over "+choices[compchoice]+" User wins";
		}
});
document.addEventListener("click",function(){
	if(usersc.textContent>compsc.textContent)
		{usersc.style.color="green";
		 compsc.style.color="white";	}
	else if(usersc.textContent<compsc.textContent)
	 {usersc.style.color="white";
		 compsc.style.color="green";	}
});
button.addEventListener("click",function(){
	userscore=0;
	compscore=0;
	compsc.textContent=compscore;
	usersc.textContent=userscore;
});

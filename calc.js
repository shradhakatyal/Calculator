var reset=true;
var isOperator=false;
var numCount=0;
var temp;
var tmp;
function check(){
		$("#smallscreen").text("Limit exceeded!");
		reSet();
}
function reSet(){
		$("#screen").text("0");
		reset=true;
		isOperator=false;
		numCount=0;
}

$("#equals").click(function(){
	globaltemp=$("#screen").text();
	var expression=$("#screen").text();
	var result=eval(expression);
	$("#screen").text(result);
	$("#smallscreen").text(result);
	reset=true;
	numCount=0;
});

function evalAnswer(){
	switch(true):
		case '+':
			exp = exp + 1;
}

$(".numbers").click(function(){
	tmp=$("#screen").text();
	if(tmp.length>19){
		check();
	}
	else{
		if(numCount>8){
			$("#smallscreen").text("Digit limit exceeded!");
			reSet();
		}
		else{
				if(reset){
					$("#screen").text($(this).text());
					$("#smallscreen").text($(this).text());
					reset=false;
				}
				else{
					temp=$("#screen").text();
					$("#screen").text(temp+$(this).text());
					$("#smallscreen").text(temp+$(this).text());
				}
				numCount++;
		}
	}
	
	isOperator=false;
});
$(".operators").click(function(){
	tmp=$("#screen").text();
	if(tmp.length>19){
		check();
	}
	else{
		if(!isOperator){
			temp=$("#screen").text();
			$("#screen").text(temp+$(this).text());
			$("#smallscreen").text(temp+$(this).text());
			isOperator=true;
			reset=false;
		}
	}
		numCount=0;
});
$("#clear").click(function(){
	$("#smallscreen").text("0");
	reSet();
});
$("#recentclear").click(function(){
	temp=$("#screen").text();
	if(reset){
		$("#screen").text("0");	
		$("#smallscreen").text("0");
		numCount=0;
	}
	else if(isOperator){
		$("#screen").text(temp.substring(0,temp.length-1));
		$("#smallscreen").text(temp.substring(0,temp.length-1));
		isOperator=false;
	}
	else{
		if(temp.length===1){
			$("#screen").text("0");
			$("#smallscreen").text("0");
			reset=true;
		}
		else{
			$("#screen").text(temp.substring(0,temp.length-1));
			$("#screen").text(temp.substring(0,temp.length-1));
		}
		numCount--;
	}
});
$("#dot").click(function(){
	tmp=$("#screen").text();
	if(tmp.length>19){
		check();
	}
	else{
		if(numCount===0){
		numCount++;
		}
		if(!isOperator){
			if(reset){
				$("#screen").text("0"+$(this).text());
				$("#smallscreen").text("0"+$(this).text());
				reset=false;
			}
			else{
				temp=$("#screen").text();
				$("#screen").text(temp+$(this).text());
				$("#smallscreen").text(temp+$(this).text());
			}
		}
	}
	isOperator=true;
});
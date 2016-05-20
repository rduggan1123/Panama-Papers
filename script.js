var scanAnswers = function(){
var correct = 0;
var wrong = 0;

var questionList = document.querySelectorAll('li.questionText');

for(var x=0;x<questionList.length;x++){
	var numQ = document.forms[x];
		for(i=0;i<numQ.length;i++){
			if((numQ[i].checked)&&(numQ[i].value == "correct")){
				correct++;
				break;
			}
			else if((numQ[i].checked)&&(numQ[i].value == "wrong")){
				wrong++;
				break;
			}
			
		}
	}
	console.log("Correct: " + correct);
	console.log("Wrong: " + wrong);
}


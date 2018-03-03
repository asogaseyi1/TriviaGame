$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
    };
    var trivia = {
		questions: ['What year was Manchester United formed?',
								'What were they originally called?',
								'What jersey number is common among the best players the club has ever seen?',
								'1958 saw a disastrous air crash that killed most of the playing squad. Who was the most famous survivor?',
								'What country was George Best from?',
								'In 1986, Man united hired their greatest coach in their history, Sir Alex Ferguson who went on to manage the side for how long?',
								'Who did he replace?',
								'Ferguson famously dubbed which team as a wee club from the North-east?',
								'Who are Manchester United biggest rivals?',
								'Manchester United have won how many English League titles?'],
		q1: ['A. 1905',
				 'B. 2001',
				 'C. 1878',
				 'D. 1889'],
		q2: ['A. Newton Heath',
				 'B. Lily whites',
				 'C. Knickerbockers',
				 'D. Salford United'],
		q3: ['A. 21',
				 'B. 23',
				 'C. 16',
				 'D. 7'],
		q4: ['A. Duncan Edwards',
				 'B. Bobby Charlton',
				 'C. Gary Pallister',
				 'D. Karel Poborsky'],
		q5: ['A. Northern Ireland',
				 'B. Wales',
				 'C. Scotland',
				 'D. England'],
		q6: ['A. 12 months',
				 'B. 24 years',
				 'C. 27 years',
				 'D. 30 years'],
		q7: ['A. Tommy Docherty',
				 'B. Ron Atkinson',
				 'C. John Mayer ',
				 'D.Wilf McGuiness '],
		q8: ['A.Sunderland AFC',
				 'B. Derby County',
				 'C. West Bromwich Albion',
				 'D. Newcastle United'],
		q9: ['A. Liverpool',
				 'B. Manchester City',
				 'C. Arsenal',
                 'D. Chelsea'],
		q10: ['A. 13',
				  'B. 20',
				  'C. 12',
				  'D. 5']		 						
    }
    var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year was Manchester United formed?',
	possibleAnswers : ['A. 1905',
				 'B. 2001',
				 'C. 1878',
				 'D. 1889'],
	flags : [false, false, true, false],
	answer : 'C. 1878'
};

var q2 = {
	question: 'What were they originally called?',
	possibleAnswers: ['A. Newton Heath',
				 'B. Lily whites',
				 'C. Knickerbockers',
				 'D. Salford United'],
	flags : [true, false, false, false],
	answer : 'A. Newton Heath'
};

var q3 = {
	question : 'What jersey number is common among the best players the club has ever seen?',
	possibleAnswers : ['A. 21',
				 'B. 23',
				 'C. 16',
				 'D. 7'],
	flags : [false, false, false, true],
	answer : 'D. 7'
};

var q4 = {
	question : '1958 saw a disastrous air crash that killed most of the playing squad. Who was the most famous survivor?',
	possibleAnswers : ['A. Duncan Edwards',
				 'B. Bobby Charlton',
				 'C. Gary Pallister ',
				 'D. Karel Poborsky'],
	flags : [false, true, false, false],
	answer : 'B. Bobby Charlton '
};

var q5 = {
	question : 'What country was George Best from?',
	possibleAnswers : ['A. Northern Ireland',
				 'B. Wales',
				 'C. Scotland',
				 'D. England'],
	flags : [true, false, false, false],
	answer : 'A. Northern Ireland'
};

var q6 = {
	question : 'In 1986, Man united hired their greatest coach in their history, Sir Alex Ferguson who went on to manage the side for how long?',
	possibleAnswers : ['A. 12 months',
				 'B. 24 years',
				 'C.27 years',
				 'D. 30 years'],
	flags : [false, true, false, false],
	answer : 'B. 24 years'
};

var q7 = {
	question : 'What school is attended in the Disney Channel Series, Girl Meets World?',
	possibleAnswers : ['A. Vintage High School',
				 'B. Peyton Middle School',
				 'C. John Quincy Adams Middle School',
				 'D. Washington High School'],
	flags : [false, false, true, false],
	answer : 'C. John Quincy Adams Middle School'
};

var q8 = {
	question : 'Ferguson famously dubbed which team as a wee club from the North-east?',
	possibleAnswers : ['A. Sunderland AFC',
				 'B. Derby County',
				 'C. West Bromwich Albion',
				 'D. Newcastle United'],
	flags : [false, false, false, true],
	answer : 'D. Newcastle United'
};

var q9 = {
	question : 'Who are Manchester United biggest rivals??',
	possibleAnswers : ['A. Liverpool',
				 'B. Manchester City',
				 'C. Arsenal',
				 'D. Chelsea'],
	flags : [true, false, false, false],
	answer : 'A. Liverpool'
};

var q10 = {
	question : 'Manchester United have won how many English League titles?',
	possibleAnswers : ['A. 13',
				  'B. 20',
				  'C. 12',
				  'D. 5'],
	flags : [false, true, false, false],
    answer : 'B. 20'
};
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
  getAnswer();  
  nextQuestion(index);
}

function nextQuestion() {
	index = index++;
	console.log(index);
}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
		for (var i=0; i<questionArray.length; i++) {
			$('.question').append('<p>'+questionArray[i].question+'</p>');
			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
			}
			$('#possibleAnswers').on('click', function() {


		console.log("click");
        countdownTimer.start();
        		for (var i = 0; i < questionArray.length; i++) {
			console.log(i);

			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
			$('.question').html(questionArray[i].question);
			while (countdownTimer != 0) {

			}
		
  
	$('#startButton').click(countdownTimer.start);

}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


	$('#start').click(countdownTimer.start);
            });
        } 

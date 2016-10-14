//Create Questions
var questions = [
	new Question ("What is Kentucky's state bird?", [ "Cardinal", "BlueJay" ], "Cardinal"),
	new Question ("What color is a ripe strawberry?", ["orange", "red" ], "red")
	];
	
//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
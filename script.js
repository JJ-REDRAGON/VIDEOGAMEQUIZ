function quiz(){
	alert:("Hey Lets Begin")
var q1= prompt("1. which was first? Mario or Sonic?");
var score=0;
lc=q1.toLowerCase();
if (lc=="mario") {

	alert("Correct anwser");
	score++;
}

else{

	alert("wrong answer")
}

var q2= prompt("2. what is the most famous game from 2019 to 2020?");
lc=q2.toLowerCase();
if (lc=="minecraft") {

	alert("Correct answer")
	score++;
}

else{

	alert("wrong answer")
}

var q3= prompt("3. what was the first video game?");
lc=q3.toLowerCase();
if (lc=="pong") {

	alert("Correct answer")
	score++;
}

else{
	alert("wrong answer")
}

var q4= prompt("4. what was the most famous Emote of Fortnite?");
lc=q4.toLowerCase();
if (lc=="floss") {

	alert("Correct answer")
	score++;
}

else{

	alert("wrong answer")
}

var q5= prompt("2. what was the rumor on Minecraft in 2010?");
lc=q5.toLowerCase();
if (lc=="HeroBrine") {

	alert("Correct answer")
	score++;
}

else{

	alert("wrong answer")
}

/*var q6= prompt("6. ?");
lc=q6.toLowerCase();
if (lc=="HeroBrine") {

	alert("Correct answer")
	score++;
}

else{

	alert("wrong answer")
}*/

























alert("score is="+score)
}
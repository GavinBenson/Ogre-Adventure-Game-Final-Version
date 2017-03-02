//VAR STACK
var armorRoomCompletion = 0;
var puzzleButtonCount = 1;
var puzzleButtonCount2 = 2;
var puzzleButtonCount3 = 2;
var puzzleFailCount = 0;
var puzzleButton1 = 'Serpent';
var puzzleButton2 = 'Witch';
var puzzleButton3 = 'Ogre';
var submitButton = 'Submit';
//VAR STACK

//Tests if you've already gone through the armor room cave
function armorRoomCompletionTest() {
	console.log('armorRoomCompletionTest');
	if (armorRoomCompletion >= 1) {
		description = "<p>You have nothing to gain by going back in there.</p>"
		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = roomPara.innerHTML + description;
	}
	else {
		armorRoom();
	}
}


function armorRoom() {
	var description = "";
	console.log('armorRoom');

	description =
		"<p>" +
		"You leave the first " +
		"<a href='#' onclick='examineCave()'>room</a> " +
		"and enter an enormous cave. It is completely open except for a large stone pillar" +
		"protruding through the rock floor, with a " +
		"<a href='#' onclick='enterStaircase()'> staircase </a>" +
		"bored into one side spiraling up the pillar." +
		"There appears to be no exits in any direction on the floor of the cavern." +
		"</p>";

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;
}

function enterStaircase() {
	console.log('enterStaircase');
	var detail = 
	"<p>" +
	"With nowhere else to go, you decide to climb the spiral staircase. " +
	"Towards the end of the draining climb you see what appears to be a " +
	"<a href='#' onclick='puzzle()'>puzzle.</a>" +
	"</p>";

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + detail;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// START OF PUZZLE //////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Initializes the rotate buttons and rotate functions for the puzzleButton vars
function puzzle() {
	var description =
	
	"<p>" +
	"The first button has a " + puzzleButton1 + ". " +
	" The second button has a " + puzzleButton2 + ". " +
	" The third button has a " + puzzleButton3 + ". " +
	"<a href='#' onclick='puzzleButton1Function()'> Rotate button 1 </a>" + "|" +
	"<a href='#' onclick='puzzleButton2Function()'>Rotate button 2 </a>" + "|" +
	"<a href='#' onclick='puzzleButton3Function()'>Rotate button 3</a>" + "|" +
	"<a href='#' onclick='submitButtonFunction()'>Submit</a>" + "|" +
	"</p>";
	
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;

}

//Puzzle button 1-3 functions rotate through 3 different var strings
function puzzleButton1Function() {
		puzzleButtonCount++;
		
		if (puzzleButtonCount == 1) {
			puzzleButton1 = "Serpent";
		}
		else if (puzzleButtonCount == 2) {
			puzzleButton1 = "Witch";
		}
		else if (puzzleButtonCount == 3) {
			puzzleButton1 = "Ogre";
			puzzleButtonCount = 0;
		}
		
		puzzle();
}

function puzzleButton2Function() {
		puzzleButtonCount2++;
		
		if (puzzleButtonCount2 == 1) {
			puzzleButton2 = "Serpent";
		}
		else if (puzzleButtonCount2 == 2) {
			puzzleButton2 = "Witch";
		}
		else if (puzzleButtonCount2 == 3) {
			puzzleButton2 = "Ogre";
			puzzleButtonCount2 = 0;
		}
		
		puzzle();
}

function puzzleButton3Function() {
		puzzleButtonCount3++;
		
		if (puzzleButtonCount3 == 1) {
			puzzleButton3 = "Serpent";
		}
		else if (puzzleButtonCount3 == 2) {
			puzzleButton3 = "Witch";
		}
		else if (puzzleButtonCount3 == 3) {
			puzzleButton3 = "Ogre";
			puzzleButtonCount3 = 0;
		}
		puzzle();
}

//Checks if the puzzle button vars match, if yes continues you along, if no gives you 3 chances then kills you
function submitButtonFunction() {
		console.log('submitButton');
		if ((puzzleButton1 == 'Ogre') && (puzzleButton2 == 'Witch') && (puzzleButton3 == 'Ogre')) {
			console.log('submitButtonSuccess');
			puzzleSuccess();
		}
		else {
			console.log('submitButtonFail');
			puzzleFailCount ++;
			puzzleFail();
		}
}

function puzzleFail() {
	console.log('puzzleFail');
	if (puzzleFailCount >= 0) {
		console.log("deathByPoison")
		var description =
		"<p>"+
			"You hear some grinding of gears, but only for a brief moment."+
			" Suddently, panels on the ceiling open up, revealing dart guns pointed at you."+
			" They fire at you, knocking you down. You fall down the pillar, reaching the bottom at the brink of death."+
			" However, you feel a great pain all across your torso, and as the neurotoxin from the darts reaches your brain,"+
			" your vision begins to fade out, and your last thought is of how much you were hoping to have a cheeseburger for lunch."+
		"<p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = description;

	}

	else {
		console.log("thisShouldNotAppear");
		var description = 
		"<p> Good job, you broke the game. </p>";

		roomPara = document.getElementById("RoomDesc");
		roomPara.innerHTML = description;

	}
	



}



function puzzleSuccess() {
	console.log('puzzle');
	var description =
	"<p>" +
	"After completing the complicated puzzle, the sound of rusty gears" +
	//--------------The puzzle needs a little more tweaking----------//
	" grinding on eachother echoes throughout the room, and a stone drawbridge slowly lowers from the top of the pillar." +
	" The crude bridge forms a path across the large gap, and you reluctantly step onto it, cautiously making your way across the bridge." +
	" The other side appears to be a small chunk of rock that has fallen out of the " +
	"<a href='#' onclick='armorSideRoom()'>side</a> " +
	" of the room, with crudely placed pillars supporting the weight of the rock above. " +
	"</p>" ;

	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = description;

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// END OF PUZZLE ////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Room containing armor object
function armorSideRoom() {
	console.log('armorSideRoom');
	var description =
	"<p>" +
	"Upon entering the room a muddled white figure catches your eye. To the right appears to be a long dead adventurer, nothing but a " +
	"skeleton remains of the poor soul. The skeleton is wearing a full suit of bloodied " + armor.menuCreate() + "." +
	"</p>";

	//<a href='#' onclick='armor.menuCreate()'>armor.</a>" +

	armorRoomCompletion ++;
	roomPara = document.getElementById("RoomDesc");
	roomPara.innerHTML = roomPara.innerHTML + description;
}
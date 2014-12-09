//
//Location Handler
//

var locArray = []; //Sotres locations in a global array.
	
function init() { //Calls starting point of game.
	
	
	//Item instances
	var spear = new item();
	spear.name = "Spear";

	var food = new item();
	food.name =  "Food";

	var greiverTransmitter = new item();
	greiverTransmitter.name = "Greiver Transmitter";

	//Each description is pushed to the initial location prototype.
	//Location Instances
	var theglades = new locat(0);
	theglades.description = "(The Glades) You're in the glade, a small square shaped living space in the middle of the maze. Is there any hope of ever escaping?";
	locArray.push(theglades);
	
	var sector1 = new locat(1);
	sector1.description = "(Sector 1) You've been going through the maze for hours and end up in Thornhill, an enormous unkept plantation full of venomous plants.";
	locArray.push(sector1);
	
	var sector2 = new locat(2);
	sector2.description = "(Sector 2) The night sky begins to dawn, you begin to hear the long doleful cry of the Grievers fill the air. You don't want to end up one on one with a Griever. You still have time to save yourself!";
	locArray.push(sector2);
	
	var sector3 = new locat(3);
	sector3.description = "(Sector 3) You are moving quickly towards what appears to be a opening to a whole new sector which could lead to the exit point of the maze. There is a sudden force restraining you from moving any further, You realise you are stuck in quick sand and need to work something out fast before you are completely submerged. Luckily you grab hold of some vines and pull yourself to safety. Luck seems to be on your side.";
	locArray.push(sector3);
		
	var sector4 = new locat(4);
	sector4.description = "(Sector 4) Certain you had found a way out, you go down an unusual path till you meet a dead-end. I advice you hed back before something *evil* has you trapped in!";
	locArray.push(sector4);
	
	var sector5 = new locat(5);
	sector5.description = "(Sector 5) You make your your to a room within the walls of the maze. it just might seem you could escape. But guess what? You would never know until the next project! *Evil Laugh*";
	locArray.push(sector5);
	
	var sector6 = new locat(6);
	sector6.description = "(Sector 6) You seem to have found something; the base area for the grievers. The hopes of finding a way out are much brighter now.";
	sector6.item = food;
	locArray.push(sector6);
	
	var sector7 = new locat(7);
	sector7.description = "(Sector 7) Desperate to get out of this maze of misery, you run deeper into the maze in search for an exit. May this have been a wrong call?";
	sector7.item = spear;
	locArray.push(sector7);
	
	var sector8 = new locat(8);
	sector8.description = "(Sector 8) You encounter the body of a dead griever and have taken its transmission unit. This could be the key out.";
	locArray.push(sector8);
	
	var sector9 = new locat(9);
	sector9.description = "(Sector 9) I really don't think you're getting out of the this maze. The folks in the movie were way to lucky! *BOOM, in your face*";
	sector9.item = greiverTransmitter;
	locArray.push(sector9);
	
	displayMessage(locArray[0].description); //Displays the description of the players current location
	 
	currLoc = locArray[0].id;
}

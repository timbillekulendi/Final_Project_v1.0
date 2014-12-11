//
// Global Variables
//         
var currLoc = 0; //Determines the current location of the player. 
var score = 0; //For score of player.
var navigationErrorCount = 0; //Used to count the number of times the player goes in the wrong direction.
var sarcasmThreshold = 5; //Determine the threshold for the number of wrong moves a player makes to activate something.
var itemCount = 0; //Used to count how many items the player has found.
var moveCount = 0; //Used to count how many moves the player has made.
var gameOver = 0// Keeps track of players errors
   	      
var hasVisitedLoc0 = false; //Global variable to determine whether player has been in loc0.
var hasVisitedLoc1 = false; //Global variable to determine whether player has been in loc1.
var hasVisitedLoc2 = false; //Global variable to determine whether player has been in loc2.
var hasVisitedLoc3 = false; //Global variable to determine whether player has been in loc3.
var hasVisitedLoc4 = false; //Global variable to determine whether player has been in loc4.
var hasVisitedLoc5 = false; //Global variable to determine whether player has been in loc5.
var hasVisitedLoc6 = false; //Global variable to determine whether player has been in loc6.
var hasVisitedLoc7 = false; //Global variable to determine whether player has been in loc7.
var hasVisitedLoc8 = false; //Global variable to determine whether player has been in loc8.
var hasVisitedLoc9 = false; //Global variable to determine whether player has been in loc9.
// var hasVisitedLoc10 = false; 
// var hasVisitedLoc11 = false;            
//
// Initialization
//
function init() {
	look(LocArray[currloc]);
	win();
}
         
			

function navigationError() { //Handle error message in the case that the user goes the wrong way.
	navigationErrorCount = navigationErrorCount + 1;
	if (navigationErrorCount < sarcasmThreshold) {
		displayMessage("You can't go there!! *Evil Laugh*"); //Default error message.
	}
		else {
			displayMessage("You're really in the mood to die mate!"); //If the user error movements are greater than the error threshold, this message is displayed.
        }            
}
	
         
function btnGo_click () { //Handles the logic to the text input box that allows users to input movement commands
	var playerInput = document.getElementById("txtCommand").value;
  	  if (playerInput === "n"|| playerInput==="N" || playerInput === "north") {
			btnNorth_click();
    	} 
          else if (playerInput === "s"|| playerInput === "S" || playerInput === "south") {
          	btnSouth_click();
	        } 
    	      else if (playerInput === "e"|| playerInput === "E" || playerInput === "east") {
        	  	btnEast_click();
          	} 
          		else if (playerInput === "w"|| playerInput === "W" || playerInput === "west") {
          		btnWest_click();
          		}
          			else if (playerInput === "h"|| playerInput === "H" || playerInput === "help") {
          			btnHelp_Click();
          			}
          				else if (playerInput === "take") {
          				take();
          				}
          					else if (playerInput === "search") {
          					search();
          					} 
          						else if (playerInput === "inventory") {
          						inventory();
          						}
}

//
//Location Prototype
//

function locat(newid) {
	this.id = newid;
	this.name = "Room";
	this.description = "It is a room.";
	this.item = "Nothing here.";
	this.toString = function () {
								return this.description 
					}
}

//
//Item prototype
//

function item() {
	this.name = "Item";
	this.description = "";
	this.toString = function () {
								return this.name +
									   this.description; 
					}
}



function search() { //Deals with checking if there is an item in the location.
	if (locArray[currLoc].item != undefined) {
		displayMessage("Found: " + locArray[currLoc].item);
	} else {
		displayMessage("There is nothing in the room");		
	}
}

var storage = ""; //Responsible for storing the items in different locations.

function take() { 
	if (locArray[currLoc].item != undefined && locArray[currLoc].item != "Nothing here.") { //If there is an item in the location, the item is stored and the player is notified.
		itemCount+=1;
		storage = storage + "\n" + locArray[currLoc].item.name;
		displayMessage("You have taken the " + locArray[currLoc].item + ".");
		delete locArray[currLoc].item;
	} else {
			displayMessage("There is nothing to take."); //If otherwise the player is notified there is no item.
		}
}

function inventory() { //Looks in the storage, and if there is an item it is displayed in the textarea.
	if (storage === "") {
		displayMessage("There are no items in your inventory.");
	}
		else {
			displayMessage("Inventory:" + storage);
		}
}

//
//Score logic
//

function checkScore() { // This function is responsible for calculating the score of the player.
	if (! hasVisitedLoc0) {            
		if (currLoc === 0) {
			score = score + 5; //Adds a score of 5 points if the room is being visited for the first time.
			hasVisitedLoc0 = true; //Changes the boolean of the location to "True" telling the script that the location has been visited already after adding 5 points.
		}
	} 
			else if ( (! hasVisitedLoc1) && (currLoc === 1) ) {            
				score = score + 5;
				hasVisitedLoc1 = true;
			} 
				else if ( (! hasVisitedLoc2) && (currLoc === 2) ) {            
					score = score + 5;
					hasVisitedLoc2 = true;
				}
					else if ( (! hasVisitedLoc3) && (currLoc === 3) ) {            
						score = score + 5;
						hasVisitedLoc3 = true;
					}
						else if ( (! hasVisitedLoc4) && (currLoc === 4) ) {            
							score = score + 5;
							hasVisitedLoc4 = true;
						} 
							else if ( (! hasVisitedLoc5) && (currLoc === 5) ) {            
								score = score + 5;
								hasVisitedLoc5 = true;
							}
								else if ( (! hasVisitedLoc6) && (currLoc === 6) ) {            
									score = score + 5;
									hasVisitedLoc6 = true;
								} 
									else if ( (! hasVisitedLoc7) && (currLoc === 7) ) {            
										score = score + 5;
										hasVisitedLoc7 = true;
									} 
										else if ( (! hasVisitedLoc8) && (currLoc === 8) ) {            
											score = score + 5;
											hasVisitedLoc8 = true;
										} 
											else if ( (! hasVisitedLoc9) && (currLoc === 9) ) {            
												score = score + 5;
												hasVisitedLoc9 = true;
											} 
}
//
//Puzzle Element
//
//

function win1 () { // If player doesn't have more than 2 items in their inventory, they would be unable to get the food item in sector 6 and loose.
	if (currLoc === 2 && itemCount >= 2 && moveCount <= 8) {
			return 'end';
	} else if (currLoc === 2 && itemCount < 2 && moveCount > 8) {
		alert("YOU DON'T DESERVE THE ITEM THAT LAYS IN THE NEXT SECTOR, DIEEEEE!");
	}
}

function win2 () { //If player doesn't answer the question correctly, the item in the next sector cannot be collected.
	var funQue = prompt("What is 9 + 10?");	//Answer is actually 21, you'll know if you heard the joke.
	if (funQue != 21) {
			alert("You're definitely not getting this item! GAME OVER!");
	} else 
		{ return 'allow' }
}
		
// Utility Function(s)
//
		
function displayMessage(msg) { //Responsible for the general display of text in the textarea.
	var target = document.getElementById("taMain");
	target.value = msg + "\n\n" + target.value;
}

function btnHelp_Click() { 
	var helpMsg = "You are currently about to play or are playing The Maze Sprinter." + "\n\n" + "In this game you can use the directional buttons to navigate about the maze and find a way out. You can also type in the commands N, S, E, W, n, s, e, w, north, south, east, west into the command bar to navigate around the maze." + "\n\n" + "You can type in the keywords take, search and inventory to do their respective functions" + "\n\n" + "In the wasd command box, you can used the w, a, s, d keys to navigate your way around the maze. You can also use the space bar - search, r - take & x - inventory." + "\n\n" + "For every location you visit the first time, you are rewarded 5 points." + "\n\n" + "You can also pick up items in the different locations that would aid you in navigating the maze." + "\n\n" + "The game basically involves you roaming around a maze with no actual means of escaping but the opportunity to pick up items in the different sectors to survive. One item would be laying somewhere in the maze that would just require searching and taking. The others would involve having to complete some form of task. For food you would have to have a minimum of 2 items and no more than 8 moves throughout the games. For the spear you would need to answer a simple but not so simple question" + "\n\n" + "If you are still in need of for help, I'm just a hyperlink away! :)"
	displayMessage(helpMsg);
}

function txtCommand_keyPress(keyboardEvent) { //Enable player to initiate btnGo_click using the "Enter" key on the keyboard.
	if (keyboardEvent.which === 13) {
		btnGo_click(); 
	}
}

function wasdCommand_keyPress(keyboardEvent) { //Enable player to use w, a, s, d keys to navigate & r, x, space bar for other functions
	if (keyboardEvent.which === 119 || keyboardEvent.which === 87) {
		btnNorth_click();
	}
			else if (keyboardEvent.which === 115 || keyboardEvent.which === 83 ) {
				btnSouth_click();
			}
				else if (keyboardEvent.which === 115 || keyboardEvent.which === 100 ) {
					btnEast_click();
				}
					else if (keyboardEvent.which === 97 || keyboardEvent.which === 65  ) {
						btnWest_click();
					}
						else if (keyboardEvent.which === 32) {
							search();
						}
							else if (keyboardEvent.which === 114 || keyboardEvent.which === 82 ) {
								take();
							}
								else if (keyboardEvent.which === 120 || keyboardEvent.which === 88 ) {
									inventory();
								}
}		

							


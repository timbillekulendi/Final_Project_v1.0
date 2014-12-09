//
//Navigation Handler
//

var NORTH = 0;
var SOUTH = 1;
var EAST  = 2;
var WEST  = 3;
         
var nav = [ // N   S   E   W 
    /* 0 */ [  4,  1,  3,  2],
    /* 1 */ [  0,  9,  8, -1],
    /* 2 */ [ -1,  6, -1,  0],
    /* 3 */ [ -1, -1, -1,  0], 
    /* 4 */ [ -1,  0,  5,  7],
	/* 5 */ [ -1, -1,  4, -1],
    /* 6 */ [  2, -1, -1, -1],
    /* 7 */ [ -1, -1, -1,  4],
    /* 8 */ [ -1, -1, -1,  1],
    /* 9 */ [  1, -1, -1, -1],
        ];


//Assigns each button with a case
//Navigation called globally

function btnNorth_click() {  
	navigation(0);
}

function btnSouth_click() {
	navigation(1);
}

function btnWest_click() {
	navigation(2);
}

function btnEast_click() {
	navigation(3);
}


function navigation (dir){ //Default enables all the buttons.
	document.getElementById("North").disabled = true; 
	document.getElementById("South").disabled = true;
    document.getElementById("East").disabled = true;
    document.getElementById("West").disabled = true;
    
    //
    //Navigation Logic
    //
    switch(currLoc) {
    	case 0: switch (dir) { //In the case the user is in location 0, the different cases would function depending on the button pressed.
    		case 0: currLoc = locArray[4].id; //If the player is in loc 0 and goes north, the user goes to loc 4 and the other functions activated.
    				displayMessage(locArray[4].description);
    				document.getElementById("map").src = "Map4.jpg"; //Changes map based on players position
    				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 1: currLoc = locArray[1].id; //If the player is in loc 0 and goes south, the user goes to loc 1 and the other functions initialize
    				displayMessage(locArray[1].description);
    				document.getElementById("map").src = "Map1.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
    	    	    document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    	   		    document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 2: currLoc = locArray[2].id; //If the player is in loc 0 and goes north, the user goes to loc 2 and the other functions initialize
    				displayMessage(locArray[2].description);
    				document.getElementById("map").src = "Map2.jpg";
    				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
              	 	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.	
    				break;
    		case 3: currLoc = locArray[3].id; //If the player is in loc 0 and goes north, the user goes to loc 3 and the other functions initialize
    				displayMessage(locArray[3].description);
    				document.getElementById("map").src = "Map3.jpg";
    				document.getElementById("West").disabled = false;
    				break; //In the case that the button is required, they are activated here.
    	} break;
    	
    	case 1: switch (dir) { //In the case the user is in location 1, the different cases would function depending on the button pressed.
    		case 0: currLoc = locArray[0].id;
    				displayMessage(locArray[0].description);
    				document.getElementById("map").src = "MapG.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
       				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            		document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
              	 	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 1: currLoc = locArray[9].id;
    				displayMessage(locArray[9].description);
    				document.getElementById("map").src = "Map9.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 3: currLoc = locArray[8].id;
    				displayMessage(locArray[8].description);
    				document.getElementById("map").src = "Map8.jpg";
    				document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError(); //This triggers navigation error message when the user goes the wrong way.	
    } break;
    
    case 2: switch (dir) { //In the case the user is in location 2, the different cases would function depending on the button pressed.
    		case 1: currLoc = locArray[6].id;
    				displayMessage(locArray[6].description);
    				document.getElementById("map").src = "Map6.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 3: currLoc = locArray[0].id;
    				displayMessage(locArray[0].description);
    				document.getElementById("map").src = "MapG.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
       				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            		document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
             	  	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();
	} break;
	
	 case 3: switch (dir) { //In the case the user is in location 3, the different cases would function depending on the button pressed.
    		case 2: currLoc = locArray[0].id;
    				displayMessage(locArray[0].description);
    				document.getElementById("map").src = "MapG.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
       				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            		document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
             	  	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();
    } break;
    
    case 4: switch (dir) { //In the case the user is in location 4, the different cases would function depending on the button pressed.
    		case 1: currLoc = locArray[0].id;
    				displayMessage(locArray[0].description);
    				document.getElementById("map").src = "MapG.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
       				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            		document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
             	  	document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 2: currLoc = locArray[5].id;
    				displayMessage(locArray[5].description);
    				document.getElementById("map").src = "Map5.jpg";
    				document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		case 3: currLoc = locArray[7].id;
    				displayMessage(locArray[7].description);
    				document.getElementById("map").src = "Map7.jpg";
    				document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    } break;
    
    case 5: switch (dir) { //In the case the user is in location 5, the different cases would function depending on the button pressed.
    		case 3: currLoc = locArray[4].id;
    				displayMessage(locArray[4].description);
    				document.getElementById("map").src = "Map4.jpg";
    				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    } break;
    
    case 6: switch (dir) { //In the case the user is in location 6, the different cases would function depending on the button pressed.
    		case 0: currLoc = locArray[2].id;
    				displayMessage(locArray[2].description);
    				document.getElementById("map").src = "Map2.jpg";
    				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
            	   	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    } break;
    
    case 7: switch (dir) { //In the case the user is in location 7, the different cases would function depending on the button pressed.
    		case 2: currLoc = locArray[4].id;
    				displayMessage(locArray[4].description);
    				document.getElementById("map").src = "Map4.jpg";
    				document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("West").disabled = false; //In the case that the button is required, they are activated here.
    				document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    } break;
    
    case 8: switch (dir) { //In the case the user is in location 8, the different cases would function depending on the button pressed.
    		case 2: currLoc = locArray[1].id;
    				displayMessage(locArray[1].description);
    				document.getElementById("map").src = "Map1.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
    	      	  	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    	        	document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    } break;
    
    case 9: switch (dir) { //In the case the user is in location 9, the different cases would function depending on the button pressed.
    		case 0: currLoc = locArray[1].id;
    				displayMessage(locArray[1].description);
    				document.getElementById("map").src = "Map1.jpg";
    				document.getElementById("North").disabled = false; //In the case that the button is required, they are activated here.
    	      	  	document.getElementById("East").disabled = false; //In the case that the button is required, they are activated here.
    	        	document.getElementById("South").disabled = false; //In the case that the button is required, they are activated here.
    				break;
    		default: navigationError();	
    }
}
	checkScore();
	var desc ="Score: " + score;
	displayMessage(desc);
}	
    	
	
	
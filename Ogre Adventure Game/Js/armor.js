/* armor */
var armor = {
	// Create a variable to track the location of the armor.
	// Valid values are: hook, inventory, body
	location:'skeleton',
	
	// armor MENU CREATE
	menuCreate: function () {
		console.log('armor.menuCreate');
		console.log('   location = ' + this.location);
		// Store the HTML for the armor's popup menu in a variable
		// EXAMINE option is always in the popup menu
		menu = 
			"<span id='armorLinkId' class='popup'>" +
				"<a href='#' onclick='armor.menuDisplay()'>" +
					"Armor" +
				"</a>" +
				"<span id='armorMenuId' class='popuptext'>" +
					"<u onclick='armor.examine()'>" +
						"Examine" +
					"</u>";
		// GET option is in the popup menu if the armor is on the 
		if (armor.location == 'skeleton') {
			menu = menu +
					"<br>" +
					"<u onclick='armor.get()'>" +
						"Get" +
					"</u>" +
				"</span>" +
			"</span>";
		}
		// Detect errors in the armor location
		else {
			console.log('ERROR! Invalid location');
		}

		// Give the HTML for the popup menu to the caller
		return(menu)
	},

	// armor MENU DISPLAY
	menuDisplay: function () {
		console.log('armor.menuDisplay');
		// Make the browser display the popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'visible';
	},

	// EXAMINE
	examine: function () {
		console.log('armor.examine');
		// Store HTML to describe the armor in a variable
		detail = 
			"<p>The armor appears to be a once " +
			"beautiful piece, covered now in scorch " +
			"marks and deep gouges from years of " +
			"service. It isn't much, but is " +
			"definently better than nothing." +
			"</p>";
			
		// Hide the armor menu popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';
		
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	},

	// GET
	get: function () {
		console.log('armor.get');
		// Change the armor location
		armor.location = 'inventory';
		
		// Hide the armor popup menu
		popup = document.getElementById('armorMenuId');
		popup.style.visibility = 'hidden';
		
		// Recreate the armor popup menu to hold appropriate options
		popup = document.getElementById('armorLinkId');
		popup.innerHTML = armor.menuCreate();
		
		// Store the HTML to describe the action of getting the armor
		detail = "<p>You take the armor from the disgruntled skeletal man. " +
				 "There is nothing left of interest for you here, so you decide to " +
				 "<a href='#' onclick='examineCave()'>go back.</a>" +
				/* "<a href='#' onclick='examineCave()'>room</a>" +
				 " you awoke in." +*/
				 "</p>";
		document.getElementById("item1").innerHTML = armor.menuCreate();
		
		
		// Make the browser display the HTML
		roomPara = document.getElementById('RoomDesc');
		roomPara.innerHTML = roomPara.innerHTML + detail;
	}
};

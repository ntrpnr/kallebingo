/*
	To add a new year, do the following;
	-	Add a JSON array in data.js with this year's content (must be 25 objects big)
	-	Copy and paste one of the $("#bingoXXXX").tap... functions and rename it to be the correct year. 
		Don't forget the window.history... row
	-	In checkQuery(), change default year
	- 	In getBingoJSON, add a similar case for the new year and refer it to the array you created in data.js
	-	In performYearConfigs(), add another case for the year and set $('#bingoXXXX') to hide except for the last year.
		Also add the current year $('#bingo2018') to the old cases and hide it except for 2016 where you should show it
		Don't forget to set default year here as well.
	
	Done.
*/

$(document).ready(function() {
	$('body').on('touchmove', true);

	$('#footer').append(footerText);

	checkQuery();

	$('#bingo2018').tap( function() {
		$('#board').empty();
		window.history.replaceState(null, null, "?year=2018");	
		
		checkQuery();
		
		$('#header').removeClass("win");
		$('body').removeClass("winBg");
	})


	$('#bingo2017').tap( function() {
		$('#board').empty();
		window.history.replaceState(null, null, "?year=2017");	
		
		checkQuery();

		$('#header').removeClass("win");
		$('body').removeClass("winBg");
	})

	$('#bingo2016').tap( function() {
		$('#board').empty();
		window.history.replaceState(null, null, "?year=2016");	

		checkQuery();
		
		$('#header').removeClass("win");
		$('body').removeClass("winBg");
	})        
});

wireEvents = function(squareArray) {
	$('div.square').tap( function() {
		$(this).toggleClass('selected');

		let dataVal = $(this).data('value') == 1 ? 0 : 1;
		$(this).data('value', dataVal); 

		var index = $("#board").children().index(this);
		squareArray[index].enabled = dataVal == 1

		let id = convertArray(squareArray);
		window.history.replaceState(null, null, "?id=" + id);	

        clickSnd.play();

		var row1 = ($('#sq0').data('value')+$('#sq1').data('value')+$('#sq2').data('value')+$('#sq3').data('value')+$('#sq4').data('value'));
		var row2 = ($('#sq5').data('value')+$('#sq6').data('value')+$('#sq7').data('value')+$('#sq8').data('value')+$('#sq9').data('value'));
		var row3 = ($('#sq10').data('value')+$('#sq11').data('value')+$('#sq12').data('value')+$('#sq13').data('value')+$('#sq14').data('value'));
		var row4 = ($('#sq15').data('value')+$('#sq16').data('value')+$('#sq17').data('value')+$('#sq18').data('value')+$('#sq19').data('value'));	
		var row5 = ($('#sq20').data('value')+$('#sq21').data('value')+$('#sq22').data('value')+$('#sq23').data('value')+$('#sq24').data('value'));			

		var col1 = ($('#sq0').data('value')+$('#sq5').data('value')+$('#sq10').data('value')+$('#sq15').data('value')+$('#sq20').data('value'));
		var col2 = ($('#sq1').data('value')+$('#sq6').data('value')+$('#sq11').data('value')+$('#sq16').data('value')+$('#sq21').data('value'));
		var col3 = ($('#sq2').data('value')+$('#sq7').data('value')+$('#sq12').data('value')+$('#sq17').data('value')+$('#sq22').data('value'));
		var col4 = ($('#sq3').data('value')+$('#sq8').data('value')+$('#sq13').data('value')+$('#sq18').data('value')+$('#sq23').data('value'));	
		var col5 = ($('#sq4').data('value')+$('#sq9').data('value')+$('#sq14').data('value')+$('#sq19').data('value')+$('#sq24').data('value'));			

		var diag1 = ($('#sq0').data('value')+$('#sq6').data('value')+$('#sq12').data('value')+$('#sq18').data('value')+$('#sq24').data('value'));	
		var diag2 = ($('#sq4').data('value')+$('#sq8').data('value')+$('#sq12').data('value')+$('#sq16').data('value')+$('#sq20').data('value'));	
		
		if (row1 == 5 || row2 == 5 || row3 == 5 || row4 == 5 || row5 == 5 || col1 == 5 || col2 == 5 || col3 == 5  || col4 == 5  || col5 == 5 || diag1 == 5 || diag2 == 5) {
			$('#header').html(winText);
			$('#header').addClass("win");
			$('body').addClass("winBg");
	
         	winSnd.play();
    		
    	} else {
			$('#header').html(headerText);
			$('#header').removeClass("win");
			$('body').removeClass("winBg");
		}; 
	  });
}

shuffle = function(v){
    	for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    	return v;
};

function checkQuery(){
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');

	let year = urlParams.get("year");

	//Default year. Recommended to be latest year
	if(year == null)
		year = "2018"

	//Must be there and of size 25 
	if(id == null || id.length != 25){
		firstStart(year); //Will reload page again
		return;
	}
	//Else
	var squareArray = translateQuery(id);

	performYearConfigs(year);

	createGrid(squareArray, year);
}

function createGrid(squareArray, year){

	let JSONBingoArray = getBingoJSON(year);

	for (i = 0; i < squareArray.length; i++){
		let index = squareArray[i].index;
		let enabled = squareArray[i].enabled;

		let square = JSONBingoArray[index].square;

		$('#board').append("<div data-value='0' class='square' id='sq" + i + "'><div class='text'><br/>" + square + "</div></div>");
		var squareDOM = $("#sq" + i);

		if(enabled){
			squareDOM.toggleClass('selected');
			if (squareDOM.data('value') == 1) {
				squareDOM.data('value', 0); 
			}
			else {
				squareDOM.data('value', 1); 
			}
		}
	}

	wireEvents(squareArray);
}

/* Returns array of size 25 with objects containing index and if the square is enabled
	[
		{
			index: 14,
			enabled: true
		}
	]
*/
function translateQuery(id){
	var bingoArray = [];

	for(var i = 0; i < 25; i++){
		var charAtPos = id[i];
		var charValue = convertFromBase64(charAtPos);

		//If one char is not of base 64
		if(charValue == -1){
			firstStart();
			return;
		}

		var enabled = (charValue & 0x1) == 0x1;
		var arrIndex = (charValue >> 1);

		let bingoObject = {
			index: arrIndex,
			enabled: enabled
		};

		bingoArray.push(bingoObject);
	}

	return bingoArray;
}

function firstStart(year){
	console.log("First start");

	var copyArray = getBingoJSON(year);

	var id = "";

	while(copyArray.length != id.length){
		var randIndex = Math.floor(Math.random() * copyArray.length);
		var randSquare = copyArray[randIndex];
		if(randSquare != -1){
			copyArray[randIndex] = -1;
			let idNumber = randIndex << 1; //Set to disabled
			let base64Char = convertToBase64(idNumber);
			id += base64Char;
		}
	}

	window.location = "?id=" + id + "&year=" + year;
}

function getBingoJSON(year){
	switch (year) {
		case "2018":
			return JSONBingo2018.squares;
		
		case "2017":
			return JSONBingo2017.squares;

		case "2016":
			return JSONBingo2016.squares;

		default:
			return JSONBingo2018.squares;
	}
}

let base64String = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-"
function convertFromBase64(char){
	return base64String.indexOf(char);
}

function convertToBase64(number){
	return base64String[number];
}

function convertArray(squareArray){
	var id = "";

	for(var i = 0; i < squareArray.length; i++){
		let square = squareArray[i];
		var index = square.index;
		var enabled = square.enabled ? 1 : 0;

		let base64char = convertToBase64((index << 1) | enabled);
		id += base64char;
	}

	return id;
}

function performYearConfigs(year){
	switch (year) {
		case "2018":
			$('#bingo2018').hide();
			$('#bingo2017').show();
			$('#bingo2016').hide();		
			$('#header').append(headerText2018);
			break;
		
		case "2017":
			$('#bingo2018').hide();
			$('#bingo2017').hide();
			$('#bingo2016').show();		
			$('#header').append(headerText2017);
			break;

		case "2016":
			$('#bingo2018').show();
			$('#bingo2017').hide();
			$('#bingo2016').hide();		
			$('#header').append(headerText2016);
			break;

		default:
			performYearConfigs("2018");
	}
}

/*! Normalized address bar hiding for iOS & Android (c) @scottjehl MIT License */
(function( win ){
	var doc = win.document;
	
	// If there's a hash, or addEventListener is undefined, stop here
	if( !location.hash && win.addEventListener ){
		
		//scroll to 1
		window.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
		
			//reset to 0 on bodyready, if needed
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		
		win.addEventListener( "load", function(){
			setTimeout(function(){
				//at load, if user hasn't scrolled more than 20 or so...
				if( getScrollTop() < 20 ){
					//reset to hide addr bar at onload
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		} );
	}
})( this );

function updateSite(event) {
    window.applicationCache.swapCache();
}
window.applicationCache.addEventListener('updateready',
    updateSite, false);
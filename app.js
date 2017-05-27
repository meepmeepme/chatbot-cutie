var link = "";
var link2 = "http://riot.com/2rymEW3";
var girrafe = 'message';
var time = 0; 
var currentmsg = "";
var submitvalue = "";
var tion = "";

function submit() {
	// body...
	link = (document.getElementById("imgsubmit").value);
}
//this sends the message
function message() {
	if (document.getElementById("submit").value == "") {
		alert("You have not entered a message");
	}else{
		submitvalue = 'document,getElementById("submit").value;'
		currentmsg = document.getElementById("submit").value;
	var type = document.createElement("div");
	type.id = girrafe + String(time) ;
	type.className = "holder"
	var text = "";
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
	display();
	}
}
function display() {
	var type = document.createElement("div");
	type.className = girrafe;
	var text = (document.getElementById("submit").value + "");
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById(girrafe + String(time) ).appendChild(type);
	document.getElementById("submit").value = "";
	memies();
}


//this adds the photo to the end of the message
function memies() {
	// body...
	var tag = document.createElement("img");
	tag.className = (girrafe + 'img');
	tag.src = link;
	var image = "";
	var imagetag = document.createTextNode(image);
	tag.appendChild(imagetag);
	document.getElementById(girrafe+String(time)).appendChild(tag);
	end();
}
function bork() {
	// body...
	var tag = document.createElement("img");
	tag.className = (girrafe + 'img');
	tag.src = link2;
	var image = "";
	var imagetag = document.createTextNode(image);
	tag.appendChild(imagetag);
	document.getElementById(girrafe+String(time)).appendChild(tag);
	++time;
	end3();
}
function end3() {
	var type = document.createElement("p");
	var text = "";
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
	end4()
}
function end4() {
	var type = document.createElement("p");
	var text = "";
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
}
//this adds a br after the tags.
function end() {
	var type = document.createElement("p");
	var text = "";	
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
	end2()
}
function end2() {
	var type = document.createElement("p");
	var text = "";
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
	++time;
	bot();
}
function bot() {
	// body...
		console.log("running");
	var type = document.createElement("div");
	type.className = girrafe;
	type.id = girrafe + String(time);
	var text = "";
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById("screen").appendChild(type);
	choose();

	
}
function choose() {
	if (currentmsg == "What time is it?" ) {
		tion = "It is " + Date() + " today, have a nice day!";
		bork();
	}
	// body...
}

function botdisplay() {
	var type = document.createElement("div");
	type.className = girrafe;
	var text = (tion);
	var texttype = document.createTextNode(text);
	type.appendChild(texttype);
	document.getElementById(girrafe + String(time) ).appendChild(type);
	document.getElementById("submit").value = "";
	bork();
}
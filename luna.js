function takeInput(e){
	if (e.which != 13) {
		return false;
	}
	var question=this.value;
	appendOutput("<p class='us'><b>You :</b>"+question+"</p>",out);
	appendOutput("<p class='ai'><b>Luna :</b>"+processInput(question)+"</p>",out);
	this.focus();
	this.select();
	out.scrollByLines(100);
}
function processInput(question){
	var answer="I'm Learning it. The answer will be soon avialable in My next Update.";
	if (question.toUpperCase()=="GOOD MORNING") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Good morning to you too :)";
		}else if (time<17) {
			greeting="Its Afternoon now :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Its Night now :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="GOOD AFTERNOON") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Its Morning now :)";
		}else if (time<17) {
			greeting="Good Afternoon :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Its Night now :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="GOOD EVENING") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Its Morning now :)";
		}else if (time<17) {
			greeting="Its Afternoon now :)";
		}else if (time<22) {
			greeting="Good Evening :)";
		}else {
			greeting="Its Night now :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="GOOD NIGHT") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Its Morning now :)";
		}else if (time<17) {
			greeting="Its Afternoon now :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Good Night :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="HAD BREAKFAST") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Yes and you :)";
		}else if (time<17) {
			greeting="Its Lunch time now :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Its Dinner time now :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="HAD LUNCH") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Its Breakfast time now :)";
		}else if (time<17) {
			greeting="Yes and You :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Its Dinner time now :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="HAD DINNER") {
		var greeting;
		var time= new Date().getHours();
		if (time<10) {
			greeting= "Its Breakfast time now :)";
		}else if (time<17) {
			greeting="Its Lunch time now :)";
		}else if (time<22) {
			greeting="Its Evening now :)";
		}else {
			greeting="Yes and You :)";
		}
    answer=document.getElementById("grt").innerHTML = greeting;
	}
	if (question.toUpperCase()=="OPEN GOOGLE") {
		answer=window.open('https://www.google.com','_blank');
	}
	if (question.toUpperCase()=="OPEN YOUTUBE") {
		answer=window.open('https://www.youtube.com','_blank');
	}
	if (question.toUpperCase()=="OPEN FACEBOOK") {
		answer=window.open('https://www.facebook.com','_blank');
	}
	if (question.toUpperCase()=="OPEN INSTAGRAM") {
		answer=window.open('https://www.instagram.com','_blank');
	}
	if (question.toUpperCase()=="OPEN TWITTER") {
		answer=window.open('https://www.twitter.com','_blank');
	}
	if (question.toUpperCase()=="OPEN THREADI5") {
		answer=window.open('https://threadi5.aiktc.org','_blank');
	}
	if (question.toUpperCase()=="OPEN GOOGLE PLUS") {
		answer=window.open('https://www.plus.google.com','_blank');
	}
	if (question.toUpperCase()=="OPEN LINKEDIN") {
		answer=window.open('https://in.linkedin.com','_blank');
	}
	if (question.toUpperCase()=="WHAT IS THE WEATHER") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHAT IS THE WEATHER NOW") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHAT IS THE WEATHER NOW?") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHAT WEATHER IS IT") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHAT WEATHER IS IT?") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHAT IS THE WEATHER?") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHATS THE WEATHER") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="WHATS THE WEATHER?") {
		answer=window.open('https://in.news.yahoo.com/weather','_blank');
	}
	if (question.toUpperCase()=="OPEN PINTEREST") {
		answer=window.open('https://www.pinterest.com','_blank');
	}
	if (question.toUpperCase()=="OPEN BLOGGER") {
		answer=window.open('https://www.blogger.com','_blank');
	}
	if (question.toUpperCase()=="OPEN PORTAL") {
		answer=window.open('http://portal.pushbullet.com','_blank');
	}
	if (question.toUpperCase()=="I LIKE YOU") {
		answer=window.open('https://www.facebook.com/Lunathechatbot','_blank');
	}
	if (question.toUpperCase()=="#CRICKET") {
		answer=window.open('http://www.cricbuzz.com','_blank');
	}
	if (question.toUpperCase()=="#FOOTBALL") {
		answer=window.open('http://www.skysports.com/football/fixtures-results','_blank');
	}
	if (question.toUpperCase()=="#MOVIE") {
		answer=window.open('http://timesofindia.indiatimes.com/entertainment/movie-reviews','_blank');
	}
	if (question.toUpperCase()=="WHAT TIME IS IT") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT TIME IS IT?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT IS THE TIME?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT IS THE TIME") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHATS THE TIME?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHATS THE TIME") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHATS THE DATE") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHATS THE DATE?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT IS THE DATE") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT IS THE DATE?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT DATE IS IT") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="WHAT DATE IS IT?") {
		answer=document.getElementById("dt").innerHTML = Date();
	}
	if (question.toUpperCase()=="COMMANDS") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="HOW CAN YOU SERVE ME") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="HOW CAN YOU SERVE ME?") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="HOW WILL YOU SERVE ME") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="HOW WILL YOU SERVE ME?") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="WHAT CAN YOU DO FOR ME") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="WHAT CAN YOU DO FOR ME?") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="WHAT ELSE CAN YOU DO") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (question.toUpperCase()=="WHAT ELSE CAN YOU DO?") {
		answer=document.getElementById("dt").innerHTML = "Hello User. I can help you with these commands :<br>1. Accessing Social networking Websites and Search Engines.<br>i.e Open (command)<br>command = google,facebook,youtube etc.<br>2. Sport score updates.<br>i.e #(command)<br>command = cricket,football etc.<br>3. Movie Updates.<br>i.e #movie<br>4. Weather and Time updates.<br>i.e What (command) is it?<br>command = time,weather,date etc.";
	}
	if (dictionary[question.toUpperCase()]) {
		var randKey=parseInt(Math.random()*dictionary[question.toUpperCase()].length);
		answer=dictionary[question.toUpperCase()][randKey];
	}
	return answer;
}
function appendOutput(message,dest){
	dest.innerHTML+=message;
	window.setInterval(function() {
		var elem = document.getElementById('dialog');
		elem.scrollTop = elem.scrollHeight;
	}, 5000);
}
var input=document.getElementById("inText");
input.onkeyup=takeInput;
var out=document.getElementById("dialog");
input.focus();
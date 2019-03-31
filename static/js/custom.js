var button = document.getElementById("show-timeline");
button.onclick = function() {
	var timeline = document.getElementById("timeline");
	if (timeline.style.display == 'block') {
		timeline.style.display = 'none';
		button.innerHTML = "<h3><br><br>更多</h3>"
	}
	else {
		timeline.style.display = 'block';
		button.innerHTML = "<h3><br><br>收起</h3>";
	}
};

var teamButton = document.getElementById("show-team");
teamButton.onclick = function() {
	var team = document.getElementById("team-content");
	if (team.style.display == 'block') {
		team.style.display = 'none';
		teamButton.innerHTML = "<h3><br><br>更多</h3>";
	}
	else {
		team.style.display = 'block';
		teamButton.innerHTML = "<h3><br><br>收起</h3>";
	}
};
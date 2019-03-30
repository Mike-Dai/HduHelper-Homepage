
var button = document.getElementById("show-timeline");
button.onclick = function() {
	var timeline = document.getElementById("timeline");
	if (timeline.style.display == 'block') {
		timeline.style.display = 'none';
	}
	else {
		timeline.style.display = 'block';
	}
};


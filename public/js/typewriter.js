var i = 0;
var speed = 50;
var userControl = false;

var counter = 0;
document.addEventListener("click", function() {
	++counter;
	if (counter == 1) {
        document.getElementById("exWifeTitle").innerHTML = "Click to Fast-Forward";
        document.getElementById("exButton").style.display = "none";
	}
	if (counter == 2) {
        document.getElementById('exWifeNotes').style.display = "block";
        document.getElementById('target').style.display = "none";
		document.getElementById("exWifeTitle").innerHTML = "Notes from the Ex";
	}
});


function typeWriter() {
	var srcText = $("#exWifeNotes").html();
	var i = 0;
	var result = srcText[i];
	setInterval(function() {
		if (i == srcText.length) {
			clearInterval(this);
			return;
		}
		i++;
		result += srcText[i].replace("\n", "<br />");
		$("#target").html(result);
	}, 40); // the period between every character and next one, in milliseonds.
}

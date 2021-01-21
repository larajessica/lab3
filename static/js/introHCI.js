'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken over!");
		$(".jumbotron p").addClass("active");
		$("#testjs").text("Please wait...");
		$("a.thumbnail").click(projectClick); 
	});
	console.log("Project clicked")
	function projectClick(e) { 
		e.preventDefault();  
		$(this).css("background-color", "#7fff00");
		$('.img').fadeToggle()
		var description = $(containingProject).find(".project-description");
		if (description.length == 0) {
			$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
		} else {
		    description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		}
	}
	
	$('#paragraph').click(changeText);
	function changeText(event) {
		$(this).tet("Poof");
	}

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
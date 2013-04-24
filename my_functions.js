$(document).ready(function(){
	about();

	var about_bool = -1;
	var interest_bool = -1;
	var contact_bool = -1;

	function toggle_sidebar(name){
		$(name).toggle('slide', { direction: 'right' }, 1000);
	}

	$(".circle").click(function() {
		toggle_sidebar('#sidebar'); about_bool = -1 * about_bool;
		if (interest_bool == 1) {
			toggle_sidebar('#sidebarinterest');
			interest_bool = -1;
		}
		if (contact_bool == 1) {
			toggle_sidebar('#sidebarcontact');
			contact_bool = -1;
		}
	});

	$(".circleinterest").click(function() {
		toggle_sidebar('#sidebarinterest'); interest_bool = -1 * interest_bool;
		if (about_bool == 1) {
			toggle_sidebar('#sidebar');
			about_bool = -1;
		}
		if (contact_bool == 1) {
			toggle_sidebar('#sidebarcontact');
			contact_bool = -1;
		}
	});

	$(".circlecontact").click(function() {
		toggle_sidebar('#sidebarcontact'); contact_bool = -1 * contact_bool;
		if (interest_bool == 1) {
			toggle_sidebar('#sidebarinterest');
			interest_bool = -1;
		}
		if (about_bool == 1) {
			toggle_sidebar('#sidebar');
			about_bool = -1;
		}
	});

});


about = function() {
	var circle = $('<div></div>').addClass('circle');
	$('#about').append(circle);
	interest();
}

interest = function() {
	var circle = $('<div></div>').addClass('circleinterest');
	$('#interest').append(circle);
	contact();
}


contact = function() {
	var circle = $('<div></div>').addClass('circlecontact');
	$('#interest').append(circle);
}
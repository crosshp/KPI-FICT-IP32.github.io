function collapse (element_id) {
	var element = document.getElementById('subject-'+element_id);
	var postsList = $('#subject-'+element_id+'-posts');

	var margin = postsList.scrollHeight;

	if(!('collapsed' in element)) {
		element.collapsed = false;
	}

	if(element.collapsed === true) {
		element.setAttribute('class', 'collapsed');
		postsList.slideUp();
	} else {
		element.setAttribute('class', 'uncollapsed');
		postsList.slideDown();
	}
	element.collapsed = !element.collapsed;
}
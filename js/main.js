function collapse (element_id) {
	var element = document.getElementById('subject-'+element_id);
	var postsList = document.getElementById('subject-'+element_id+'-posts');

	var margin = postsList.scrollHeight;

	if(postsList.classList.contains('collapsed') === true) {
		postsList.classList.remove('collapsed');
		element.classList.remove('collapsed');

		element.classList.add('uncollapsed');
	} else {
		element.classList.remove('uncollapsed');
		
		postsList.classList.add('collapsed');
		element.classList.add('collapsed');
		
		postsList.style.marginTop = null;
	}
}
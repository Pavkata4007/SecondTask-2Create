function switchTabs(tab_id, tab_content) {

	var x = document.getElementsByClassName("tabcontent");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	document.getElementById(tab_content).style.display = 'block';
}
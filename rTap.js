jQuery.expr[':'].hasText = function(element, index){
	if (element.childNotes.length == 1 && element.firstChild.nodeType == 3){
		return jQuery.trim(element.innerHTML).length > 0;
	}
	return false;
}
console.log(jQuery(':contains("8-8867"):hasText').get());
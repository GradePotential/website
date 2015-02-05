var arr = [
	['(636) 398-8867', 'rTapNumber166398'],
	['(816) 348-8867', 'rTapNumber166389'],
	['(281) 238-8867', 'rTapNumber166379'],
	['(210) 558-8867', 'rTapNumber166383'],
	['(512) 458-8867', 'rTapNumber166387'],
	['(651) 578-8867', 'rTapNumber166397'],
	['(830) 778-8867', 'rTapNumber166388'],
	['(314) 878-8867', 'rTapNumber166386'],
	['(817) 488-8867', 'rTapNumber166382'],
	['(763) 788-8867', 'rTapNumber166391'],
	['(713) 228-8867', 'rTapNumber166380'],
	['(888) 749-3532', 'rTapNumber167592'],
	['(612) 338-8867', 'rTapNumber166396'],
	['(913) 498-8867', 'rTapNumber166385'],
	['(952) 448-8867', 'rTapNumber166390'],
	['(972) 488-8867', 'rTapNumber166384'],
	['(214) 328-8867', 'rTapNumber166378']
]

jQuery.expr[':'].hasText = function(element, index){
	if (element.childNodes.length == 1 && element.firstChild.nodeType == 3){
		return jQuery.trim(element.innerHTML).length > 0;
	}
	return false;
}
jQuery(':contains("8-8867"):hasText').each(function (i, e){
	var num = arr.filter(function (a){return a[0] == e.textContent.trim()})[0]
	if (num){
		e.innerHTML = '<span class="' + num[1] + '">' + num[0] + '</span>';
	}
});
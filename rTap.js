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

function makePhoneRegExp(phone){
	return new RegExp(phone.replace('(', '\\(').replace(')', '\\)').replace(' ', '\\s'));
}

jQuery.expr[':'].hasText = function(element, index){
	if (element.childNodes.length == 1 && element.firstChild.nodeType == 3){
		return jQuery.trim(element.innerHTML).length > 0;
	}
	return false;
}
jQuery(':contains("8-8867"):hasText').each(function (i, e){
	var nums = arr.filter(function (a){return e.textContent.match(makePhoneRegExp(a[0])) && e.textContent.match(makePhoneRegExp(a[0])).length > 0})
	nums.forEach(function (num){
		e.innerHTML = e.innerHTML.replace(makePhoneRegExp(num[0]), '<span class="' + num[1] + '">' + num[0] + '</span>');
	});
});

var adiInit = "19056", adiRVO = true;
var adiFunc = null;
(function() {
	var adiSrc = document.createElement("script"); adiSrc.type = "text/javascript";
	adiSrc.async = true;
	adiSrc.src = ("https:" == document.location.protocol ? "https://static-ssl" : "http://static-cdn")
	+ ".responsetap.com/static/scripts/rTapTrack.min.js";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(adiSrc, s);
})();
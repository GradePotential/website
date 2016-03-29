var arr = [
['(636) 398-8867', 'rTapNumber166398'],
['(816) 348-8867', 'rTapNumber166389'],
['(281) 238-8867', 'rTapNumber166379'],
['(210) 558-8867', 'rTapNumber166383'],
['(210) 904-8161', 'rTapNumber166383'],
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
['(214) 328-8867', 'rTapNumber170574'],
['(214) 295-9343', 'rTapNumber170574'],
]

var cookie = {
  set: function (cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },
  get: function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
}

function makePhoneRegExp(phone){
	return new RegExp(phone.replace('(', '\\(').replace(')', '\\)').replace(' ', '\\s'));
}

jQuery.expr[':'].hasText = function(element, index){
	if (element.childNodes.length == 1 && element.firstChild.nodeType == 3){
		return jQuery.trim(element.innerHTML).length > 0;
	}
	return false;
}
jQuery(':contains("8-8867"):hasText, :contains("9-3532"):hasText, :contains("4-8161"):hasText').each(function (i, e){
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

function rTapPostReplacement(){
  if (cookie.get('adiV')){
    jQuery.ajax({
      url: 'http://data.gradepotential.com/api/rTap/polling/' + cookie.get('adiV'),
      success: function (data){
        console.log('Called!!!', data);
        (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"4021668"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
      },
      timeout: 10*60*1000
    });
    jQuery('[class^=rTapNumber]').bind('touchstart', function(){
      (function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"4021668"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
      jQuery.ajax({
        url: 'http://data.gradepotential.com/api/rTap/touchstart/' + cookie.get('adiV'),
        success: function(data){console.log(data)}
      });
    });
  }
}

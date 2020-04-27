var infusionActions = {
  'gradepotentialtutoringslocounty.com': 'https://zcu92250.infusionsoft.com/app/form/process/0778eea6b1fc774affd4aa5d56e81c28',
  'tutoringsantabarbaraarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/6b4f96f0f3c3f35d8a884cb25b1defbd',
  'tutoringventuracounty.com': 'https://zcu92250.infusionsoft.com/app/form/process/2dcd474ccda47149d3469826d2851c58',
  'gradepotentialtutoringsandiego.com': 'https://zcu92250.infusionsoft.com/app/form/process/a6162ac29f92252f8c8fdc67f47b7997',
  'gradepotentialtutoringoc.com': 'https://zcu92250.infusionsoft.com/app/form/process/a4f8da8470a83cdd65f63139f3585ca3',
  'tutoringsanfernandovalley.com': 'https://zcu92250.infusionsoft.com/app/form/process/92fa0256460fd61581f836bbfda26b65',
  'tutoringsangabrielvalley.com': 'https://zcu92250.infusionsoft.com/app/form/process/260631a137d189c927601e7b59feebcc',
  'tutoringlongbeacharea.com': 'https://zcu92250.infusionsoft.com/app/form/process/d6a76088bd4793069a7c8e6b9ce352c6',
  'losangelestutoringservice.com': 'https://zcu92250.infusionsoft.com/app/form/process/b584e83c34505d83bd6d877e66c4508d',
  'tutoringinlandempire.com': 'https://zcu92250.infusionsoft.com/app/form/process/69169f8188036abe3e14818d3d9e7f50',
  'tutoringeastbayarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/031e120b1229664d51461810e79762d6',
  'tutoringsouthbayarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/bb51ae0c0f8fcaf9128f3736b5bbe15a',
  'tutoringpeninsula.com': 'https://zcu92250.infusionsoft.com/app/form/process/4c8a106217afc93842d75f8eda9cae76',
  'sanfranciscotutoringservice.com': 'https://zcu92250.infusionsoft.com/app/form/process/3ac7add41176bf5768cde2bbbdb54f2d',
  'gradepotentialtutoringsacmetro.com': 'https://zcu92250.infusionsoft.com/app/form/process/3ec0c16bfd5cfe1c6bd871c8b290f25e',
  'tutoringseattlemetroarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/99fd61701f2f4c471f8cb75fe7f227a2',
  'tutoringportlandmetroarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/c23da7e66a456509af458e66e46f0ffd',
  'tutoringvegasmetroarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/a01083fe73c9a230a66adbde2ccc9179',
  'tutoringphoenixmetroarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/48f65a610ed828e3c13833169773b92a',
  'tutoringtucsonmetroarea.com': 'https://zcu92250.infusionsoft.com/app/form/process/1466de1f32410c72c00b89e9e55a8b2b'
};
var infusionAction = infusionActions[document.location.hostname.toLowerCase()];
if (infusionAction){
  document.getElementById('InfoForm').action = infusionAction;
  document.getElementById('modalForm').action = infusionAction;
}

var arr = [
  ['(201) 515-6161', 'rTapNumber405685'],
  ['(202) 400-2510', 'rTapNumber226149'],
  ['(202) 408-8867', 'rTapNumber226149'],
  ['(203) 780-2009', 'rTapNumber406710'],
  ['(205) 291-8053', 'rTapNumber406696'],
  ['(206) 448-8867', 'rTapNumber254031'],
  ['(208) 295-5569', 'rTapNumber405690'],
  ['(209) 306-4192', 'rTapNumber405701'],
  ['(210) 558-8867', 'rTapNumber166383'],
  ['(210) 904-8161', 'rTapNumber166383'],
  ['(212) 472-5082', 'rTapNumber296800'],
  ['(214) 295-9343', 'rTapNumber170574'],
  ['(214) 328-8867', 'rTapNumber166378'],
  ['(214) 328-8867', 'rTapNumber170574'],
  ['(214) 390-9099', 'rTapNumber170574'],
  ['(215) 338-8867', 'rTapNumber226153'],
  ['(216) 267-8867', 'rTapNumber258593'],
  ['(216) 268-8867', 'rTapNumber258593'],
  ['(216) 468-5289', 'rTapNumber258593'],
  ['(217) 803-1664', 'rTapNumber406728'],
  ['(219) 336-7021', 'rTapNumber406714'],
  ['(229) 389-2272', 'rTapNumber406839'],
  ['(231) 299-8420', 'rTapNumber406739'],
  ['(239) 323-0929', 'rTapNumber406838'],
  ['(248) 358-8867', 'rTapNumber258578'],
  ['(251) 283-4594', 'rTapNumber406698'],
  ['(252) 438-8867', 'rTapNumber258600'],
  ['(253) 313-1879', 'rTapNumber254033'],
  ['(253) 313-1886', 'rTapNumber254033'],
  ['(253) 313-1888', 'rTapNumber254033'],
  ['(253) 313-1890', 'rTapNumber254033'],
  ['(253) 313-1895', 'rTapNumber254033'],
  ['(253) 548-8867', 'rTapNumber254033'],
  ['(254) 221-9935', 'rTapNumber406843'],
  ['(256) 666-0422', 'rTapNumber406695'],
  ['(260) 201-1859', 'rTapNumber406717'],
  ['(262) 419-5001', 'rTapNumber406702'],
  ['(269) 262-5413', 'rTapNumber406825'],
  ['(276) 262-6293', 'rTapNumber406721'],
  ['(281) 238-8867', 'rTapNumber166379'],
  ['(281) 713-4898', 'rTapNumber166379'],
  ['(281) 713-5412', 'rTapNumber166379'],
  ['(301) 568-8867', 'rTapNumber226148'],
  ['(302) 207-7437', 'rTapNumber406713'],
  ['(303) 219-8711', 'rTapNumber226723'],
  ['(303) 338-8867', 'rTapNumber226723'],
  ['(303) 502-1590', 'rTapNumber226723'],
  ['(303) 502-5179', 'rTapNumber226723'],
  ['(303) 900-7396', 'rTapNumber226723'],
  ['(303) 900-7460', 'rTapNumber226723'],
  ['(305) 448-8867', 'rTapNumber225988'],
  ['(305) 928-3378', 'rTapNumber225988'],
  ['(309) 306-9039', 'rTapNumber406729'],
  ['(310) 338-8867', 'rTapNumber261661'],
  ['(310) 774-2836', 'rTapNumber261661'],
  ['(312) 429-7261', 'rTapNumber405687'],
  ['(313) 568-8867', 'rTapNumber258576'],
  ['(314) 878-8867', 'rTapNumber166386'],
  ['(315) 515-5831', 'rTapNumber406735'],
  ['(317) 943-6281', 'rTapNumber406719'],
  ['(321) 268-8867', 'rTapNumber260489'],
  ['(323) 568-8867', 'rTapNumber261664'],
  ['(325) 241-0910', 'rTapNumber406844'],
  ['(330) 458-8867', 'rTapNumber258595'],
  ['(334) 449-7189', 'rTapNumber406697'],
  ['(336) 358-8867', 'rTapNumber258597'],
  ['(352) 549-9449', 'rTapNumber406835'],
  ['(360) 216-0357', 'rTapNumber254035'],
  ['(360) 216-0401', 'rTapNumber254035'],
  ['(360) 216-0410', 'rTapNumber254035'],
  ['(360) 658-8867', 'rTapNumber254035'],
  ['(360) 988-8867', 'rTapNumber254041'],
  ['(361) 603-0158', 'rTapNumber406845'],
  ['(386) 245-6829', 'rTapNumber406834'],
  ['(401) 593-3604', 'rTapNumber406712'],
  ['(404) 248-8867', 'rTapNumber226152'],
  ['(404) 445-5127', 'rTapNumber226152'],
  ['(404) 445-5520', 'rTapNumber226152'],
  ['(404) 666-4418', 'rTapNumber226152'],
  ['(407) 328-8867', 'rTapNumber258582'],
  ['(408) 275-2890', 'rTapNumber262154'],
  ['(408) 357-9527', 'rTapNumber262154'],
  ['(408) 448-8867', 'rTapNumber262154'],
  ['(408) 669-0053', 'rTapNumber262154'],
  ['(408) 669-0063', 'rTapNumber262154'],
  ['(408) 669-0105', 'rTapNumber262154'],
  ['(408) 669-0121', 'rTapNumber262154'],
  ['(409) 402-5732', 'rTapNumber406846'],
  ['(410) 324-3576', 'rTapNumber258586'],
  ['(410) 358-8867', 'rTapNumber258586'],
  ['(412) 312-4016', 'rTapNumber258587'],
  ['(412) 465-1207', 'rTapNumber258587'],
  ['(412) 465-1208', 'rTapNumber258587'],
  ['(412) 678-8867', 'rTapNumber258587'],
  ['(412) 701-6045', 'rTapNumber258587'],
  ['(413) 232-9828', 'rTapNumber406726'],
  ['(414) 626-9212', 'rTapNumber406703'],
  ['(415) 275-2865', 'rTapNumber262151'],
  ['(415) 788-8867', 'rTapNumber262151'],
  ['(423) 418-9973', 'rTapNumber406830'],
  ['(425) 689-5279', 'rTapNumber254036'],
  ['(425) 689-5285', 'rTapNumber254036'],
  ['(425) 689-5299', 'rTapNumber254036'],
  ['(425) 689-5301', 'rTapNumber254036'],
  ['(425) 689-5303', 'rTapNumber254036'],
  ['(425) 689-5323', 'rTapNumber254036'],
  ['(425) 778-8867', 'rTapNumber254036'],
  ['(432) 287-5573', 'rTapNumber406847'],
  ['(434) 234-8731', 'rTapNumber406722'],
  ['(440) 878-8867', 'rTapNumber258594'],
  ['(478) 219-6830', 'rTapNumber406840'],
  ['(480) 998-8867', 'rTapNumber250888'],
  ['(503) 212-9730', 'rTapNumber254043'],
  ['(503) 238-8867', 'rTapNumber254043'],
  ['(503) 420-8932', 'rTapNumber254043'],
  ['(503) 905-6677', 'rTapNumber254043'],
  ['(503) 905-9085', 'rTapNumber254043'],
  ['(508) 343-8185', 'rTapNumber406724'],
  ['(510) 200-0709', 'rTapNumber262155'],
  ['(510) 210-0289', 'rTapNumber262155'],
  ['(510) 318-9029', 'rTapNumber262155'],
  ['(510) 318-9044', 'rTapNumber262155'],
  ['(510) 339-5716', 'rTapNumber262155'],
  ['(510) 758-8867', 'rTapNumber262155'],
  ['(512) 200-7617', 'rTapNumber166387'],
  ['(512) 222-5750', 'rTapNumber166387'],
  ['(512) 458-8867', 'rTapNumber166387'],
  ['(512) 649-7575', 'rTapNumber166387'],
  ['(513) 598-8867', 'rTapNumber258591'],
  ['(516) 358-8867', 'rTapNumber258574'],
  ['(517) 334-0166', 'rTapNumber406741'],
  ['(518) 286-5411', 'rTapNumber406737'],
  ['(520) 458-8867', 'rTapNumber248604'],
  ['(530) 528-8867', 'rTapNumber253938'],
  ['(540) 329-8035', 'rTapNumber406723'],
  ['(559) 438-8867', 'rTapNumber258584'],
  ['(561) 278-8867', 'rTapNumber225999'],
  ['(562) 438-8867', 'rTapNumber261675'],
  ['(574) 319-7617', 'rTapNumber406716'],
  ['(585) 440-5237', 'rTapNumber406733'],
  ['(586) 778-8867', 'rTapNumber258577'],
  ['(602) 788-8867', 'rTapNumber250889'],
  ['(607) 210-0317', 'rTapNumber406734'],
  ['(608) 573-4837', 'rTapNumber406700'],
  ['(609) 201-2870', 'rTapNumber405704'],
  ['(610) 828-8867', 'rTapNumber226154'],
  ['(612) 338-8867', 'rTapNumber166396'],
  ['(614) 258-8867', 'rTapNumber258596'],
  ['(615) 378-5271', 'rTapNumber406832'],
  ['(616) 345-3451', 'rTapNumber406740'],
  ['(617) 229-7936', 'rTapNumber405688'],
  ['(618) 650-8536', 'rTapNumber406727'],
  ['(619) 363-5927', 'rTapNumber252524'],
  ['(619) 363-7261', 'rTapNumber252524'],
  ['(619) 492-9412', 'rTapNumber252524'],
  ['(619) 578-8867', 'rTapNumber252524'],
  ['(623) 377-4997', 'rTapNumber250890'],
  ['(623) 878-8867', 'rTapNumber250890'],
  ['(626) 338-8867', 'rTapNumber261677'],
  ['(630) 315-0807', 'rTapNumber405698'],
  ['(630) 381-1434', 'rTapNumber406730'],
  ['(631) 218-8867', 'rTapNumber258575'],
  ['(631) 246-4976', 'rTapNumber258575'],
  ['(636) 398-8867', 'rTapNumber166398'],
  ['(646) 224-0716', 'rTapNumber267615'],
  ['(650) 204-8088', 'rTapNumber262152'],
  ['(650) 209-8627', 'rTapNumber262152'],
  ['(650) 281-0550', 'rTapNumber262152'],
  ['(650) 281-0562', 'rTapNumber262152'],
  ['(650) 281-0563', 'rTapNumber262152'],
  ['(650) 968-8867', 'rTapNumber262152'],
  ['(651) 578-8867', 'rTapNumber166397'],
  ['(661) 328-8867', 'rTapNumber258585'],
  ['(702) 658-8867', 'rTapNumber252523'],
  ['(703) 208-8867', 'rTapNumber226151'],
  ['(704) 568-8867', 'rTapNumber261642'],
  ['(706) 309-7263', 'rTapNumber406841'],
  ['(707) 240-2829', 'rTapNumber405699'],
  ['(708) 683-1295', 'rTapNumber405694'],
  ['(713) 228-8867', 'rTapNumber166380'],
  ['(714) 558-8867', 'rTapNumber253925'],
  ['(715) 814-8135', 'rTapNumber406699'],
  ['(716) 293-2024', 'rTapNumber406732'],
  ['(718) 472-5063', 'rTapNumber296802'],
  ['(719) 204-4000', 'rTapNumber406705'],
  ['(720) 858-8867', 'rTapNumber226724'],
  ['(724) 438-8867', 'rTapNumber258588'],
  ['(727) 898-8867', 'rTapNumber258580'],
  ['(731) 260-8261', 'rTapNumber406828'],
  ['(732) 203-5481', 'rTapNumber405703'],
  ['(734) 848-8867', 'rTapNumber260488'],
  ['(740) 928-8867', 'rTapNumber259076'],
  ['(757) 384-2799', 'rTapNumber258589'],
  ['(757) 468-8867', 'rTapNumber258589'],
  ['(760) 203-5406', 'rTapNumber226725'],
  ['(760) 205-3413', 'rTapNumber226725'],
  ['(760) 206-8288', 'rTapNumber226725'],
  ['(760) 257-5509', 'rTapNumber226725'],
  ['(760) 260-3229', 'rTapNumber226725'],
  ['(760) 260-9145', 'rTapNumber226725'],
  ['(760) 788-8867', 'rTapNumber226725'],
  ['(763) 788-8867', 'rTapNumber166391'],
  ['(765) 230-5132', 'rTapNumber406718'],
  ['(770) 203-1854', 'rTapNumber226147'],
  ['(770) 458-8867', 'rTapNumber226147'],
  ['(770) 796-0568', 'rTapNumber226147'],
  ['(770) 796-5112', 'rTapNumber226147'],
  ['(772) 444-0181', 'rTapNumber406837'],
  ['(781) 790-4595', 'rTapNumber405691'],
  ['(801) 430-9294', 'rTapNumber405689'],
  ['(803) 232-5467', 'rTapNumber406707'],
  ['(804) 358-8867', 'rTapNumber258590'],
  ['(805) 548-8867', 'rTapNumber262183'],
  ['(805) 968-8867', 'rTapNumber262193'],
  ['(805) 968-8867', 'rTapNumber262197'],
  ['(806) 425-2398', 'rTapNumber406848'],
  ['(808) 666-2370', 'rTapNumber406711'],
  ['(810) 242-1215', 'rTapNumber406824'],
  ['(812) 389-3037', 'rTapNumber406720'],
  ['(813) 492-7928', 'rTapNumber258579'],
  ['(813) 968-8867', 'rTapNumber258579'],
  ['(815) 390-9474', 'rTapNumber406731'],
  ['(816) 348-8867', 'rTapNumber166389'],
  ['(817) 369-8173', 'rTapNumber166382'],
  ['(817) 488-8867', 'rTapNumber166382'],
  ['(817) 527-8844', 'rTapNumber166382'],
  ['(818) 358-8867', 'rTapNumber261777'],
  ['(828) 298-8867', 'rTapNumber258599'],
  ['(830) 778-8867', 'rTapNumber166388'],
  ['(831) 200-4415', 'rTapNumber405700'],
  ['(843) 800-8603', 'rTapNumber406708'],
  ['(845) 510-6815', 'rTapNumber406736'],
  ['(847) 260-9149', 'rTapNumber405693'],
  ['(850) 378-3966', 'rTapNumber406833'],
  ['(856) 200-3581', 'rTapNumber405705'],
  ['(858) 256-4818', 'rTapNumber252525'],
  ['(858) 264-5969', 'rTapNumber252525'],
  ['(858) 345-6597', 'rTapNumber252525'],
  ['(858) 578-8867', 'rTapNumber252525'],
  ['(860) 492-6017', 'rTapNumber406709'],
  ['(863) 251-9152', 'rTapNumber406836'],
  ['(864) 712-7844', 'rTapNumber406706'],
  ['(865) 415-0690', 'rTapNumber406831'],
  ['(872) 210-5998', 'rTapNumber405692'],
  ['(888) 520-0495', 'rTapNumber405558'],
  ['(888) 520-0511', 'rTapNumber405894'],
  ['(888) 562-6489', 'rTapNumber345937', '59614'],
  ['(888) 749-3532', 'rTapNumber167592'],
  ['(901) 403-6191', 'rTapNumber406827'],
  ['(903) 361-6581', 'rTapNumber406849'],
  ['(904) 245-1032', 'rTapNumber258583'],
  ['(904) 448-8867', 'rTapNumber258583'],
  ['(906) 296-3654', 'rTapNumber406738'],
  ['(908) 279-1872', 'rTapNumber405702'],
  ['(909) 338-8867', 'rTapNumber262141'],
  ['(909) 988-8867', 'rTapNumber261681'],
  ['(910) 488-8867', 'rTapNumber258601'],
  ['(912) 963-1181', 'rTapNumber406842'],
  ['(913) 369-7339', 'rTapNumber166385'],
  ['(913) 498-8867', 'rTapNumber166385'],
  ['(914) 448-8867', 'rTapNumber258571'],
  ['(915) 800-7074', 'rTapNumber406850'],
  ['(916) 238-6960', 'rTapNumber253942'],
  ['(916) 448-8867', 'rTapNumber253942'],
  ['(917) 444-5901', 'rTapNumber267616'],
  ['(919) 364-0734', 'rTapNumber258598'],
  ['(919) 558-8867', 'rTapNumber258598'],
  ['(920) 291-3573', 'rTapNumber406701'],
  ['(925) 202-0112', 'rTapNumber262157'],
  ['(925) 204-2419', 'rTapNumber262157'],
  ['(925) 268-9496', 'rTapNumber262157'],
  ['(925) 399-0073', 'rTapNumber262157'],
  ['(925) 458-8867', 'rTapNumber262157'],
  ['(931) 400-8134', 'rTapNumber406829'],
  ['(936) 227-0485', 'rTapNumber406851'],
  ['(937) 548-8867', 'rTapNumber258592'],
  ['(940) 304-0235', 'rTapNumber406853'],
  ['(941) 748-8867', 'rTapNumber258581'],
  ['(949) 248-8867', 'rTapNumber253933'],
  ['(949) 264-9937', 'rTapNumber253933'],
  ['(951) 267-9566', 'rTapNumber262148'],
  ['(951) 678-8867', 'rTapNumber262148'],
  ['(952) 448-8867', 'rTapNumber166390'],
  ['(954) 838-8867', 'rTapNumber225998'],
  ['(956) 539-7017', 'rTapNumber406854'],
  ['(970) 628-9414', 'rTapNumber406704'],
  ['(972) 488-8867', 'rTapNumber166384'],
  ['(973) 264-4008', 'rTapNumber405686'],
  ['(978) 307-4829', 'rTapNumber406725'],
  ['(979) 330-1665', 'rTapNumber406855'],
  ['(989) 283-7409', 'rTapNumber406826'],
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

var rbrtPromise = typeof runBeforeResponseTap === 'function' ? runBeforeResponseTap() : Promise.resolve();
var adiInit = "19056"
var adiRVO = true;
var adiFunc = null;
var selector = arr.map(function (e){return ':contains("' + e[0].substr(8, 6) + '"):hasText'}).join(', ');

rbrtPromise.then(function (){
  jQuery(selector).each(function (i, e){
    var nums = arr.filter(function (a){return e.textContent.match(makePhoneRegExp(a[0])) && e.textContent.match(makePhoneRegExp(a[0])).length > 0})
    nums.forEach(function (num){
      if (window.location.href.indexOf("thank") === -1) {
        e.innerHTML = e.innerHTML.replace(makePhoneRegExp(num[0]), '<span class="' + num[1] + '">' + num[0] + '</span>');
      }
      if (num[2]){
        adiInit = num[2];
      }
    });
  });

  
  (function() {
    var adiSrc = document.createElement("script"); adiSrc.type = "text/javascript";
    adiSrc.async = true;
    adiSrc.src = ("https:" == document.location.protocol ? "https://static-ssl" : "http://static-cdn")
    + ".responsetap.com/static/scripts/rTapTrack.min.js";
    var s = document.getElementsByTagName("script")[0];
    s && s.parentNode.insertBefore(adiSrc, s);
  })();
});

function rTapPostReplacement(){
  if (cookie.get('adiV')){
    jQuery.ajax({
      url: 'https://data.gradepotential.com/api/rTap/polling/' + cookie.get('adiV'),
      success: function (data){
        console.log('Called!!!', data);
        window.uetq = window.uetq || [];
        window.uetq.push({ 'ec':'phone call', 'ea':'phone call', 'el':'phone call', 'ev': 1 });
      },
      timeout: 10*60*1000
    });
    jQuery('[class^=rTapNumber]').bind('touchstart', function(){
      window.uetq = window.uetq || [];
      window.uetq.push({ 'ec':'phone call', 'ea':'phone call', 'el':'phone call', 'ev': 1 });
      jQuery.ajax({
        url: 'https://data.gradepotential.com/api/rTap/touchstart/' + cookie.get('adiV'),
        success: function(data){console.log(data)}
      });
    });
    if (jQuery('.wpcf7-form').length) {
      jQuery('.wpcf7-form')[0].rtap_ID.value = cookie.get('adiV');
      jQuery('.wpcf7-form')[1].rtap_ID.value = cookie.get('adiV');
    }
    if (jQuery('.lp-pom-form').length) {
      jQuery('.lp-pom-form')[0].children[0].inf_custom_rTapId.value = cookie.get('adiV');
    }
    if (window.ga && ga.loaded) {
      ga('send', 'event', 'Page', 'pageview', 'ResponseTap ID', {
      'dimension2':  cookie.get('adiV'),
      nonInteraction: true
      });
    }
  }
}

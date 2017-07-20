var numberList = document.querySelector('.NumberList');

var numbers = [
  {
    "number": 8055488867,
    "formatted": "(805) 548-8867",
    "label": "1. SLO"
  },
  {
    "number": 8059688867,
    "formatted": "(805) 968-8867",
    "label": "2. SBV"
  },
  {
    "number": 6195788867,
    "formatted": "(619) 578-8867",
    "label": "3. SD"
  },
  {
    "number": 8585788867,
    "formatted": "(858) 578-8867",
    "label": "3. SD"
  },
  {
    "number": 7607888867,
    "formatted": "(760) 788-8867",
    "label": "3. SD"
  },
  {
    "number": 7145588867,
    "formatted": "(714) 558-8867",
    "label": "4. OC"
  },
  {
    "number": 9492488867,
    "formatted": "(949) 248-8867",
    "label": "4. OC"
  },
  {
    "number": 8183588867,
    "formatted": "(818) 358-8867",
    "label": "4. LA"
  },
  {
    "number": 6263388867,
    "formatted": "(626) 338-8867",
    "label": "4. LA"
  },
  {
    "number": 9099888867,
    "formatted": "(909) 988-8867",
    "label": "4. LA"
  },
  {
    "number": 5624388867,
    "formatted": "(562) 438-8867",
    "label": "4. LA"
  },
  {
    "number": 3103388867,
    "formatted": "(310) 338-8867",
    "label": "4. LA"
  },
  {
    "number": 3235688867,
    "formatted": "(323) 568-8867",
    "label": "4. LA"
  },
  {
    "number": 9093388867,
    "formatted": "(909) 338-8867",
    "label": "4. IE"
  },
  {
    "number": 9516788867,
    "formatted": "(951) 678-8867",
    "label": "4. IE"
  },
  {
    "number": 4157888867,
    "formatted": "(415) 788-8867",
    "label": "5. BAY"
  },
  {
    "number": 6509688867,
    "formatted": "(650) 968-8867",
    "label": "5. BAY"
  },
  {
    "number": 4084488867,
    "formatted": "(408) 448-8867",
    "label": "5. BAY"
  },
  {
    "number": 9254588867,
    "formatted": "(925) 458-8867",
    "label": "5. BAY"
  },
  {
    "number": 5107588867,
    "formatted": "(510) 758-8867",
    "label": "5. BAY"
  },
  {
    "number": 9164488867,
    "formatted": "(916) 448-8867",
    "label": "6. SAC"
  },
  {
    "number": 5305288867,
    "formatted": "(530) 528-8867",
    "label": "6. SAC"
  },
  {
    "number": 2064488867,
    "formatted": "(206) 448-8867",
    "label": "7. SEA"
  },
  {
    "number": 2535488867,
    "formatted": "(253) 548-8867",
    "label": "7. SEA"
  },
  {
    "number": 4257788867,
    "formatted": "(425) 778-8867",
    "label": "7. SEA"
  },
  {
    "number": 3606588867,
    "formatted": "(360) 658-8867",
    "label": "7. SEA"
  },
  {
    "number": 5032388867,
    "formatted": "(503) 238-8867",
    "label": "8. PRT"
  },
  {
    "number": 3609888867,
    "formatted": "(360) 988-8867",
    "label": "8. PRT"
  },
  {
    "number": 7026588867,
    "formatted": "(702) 658-8867",
    "label": "9. LVG"
  },
  {
    "number": 3033388867,
    "formatted": "(303) 338-8867",
    "label": "12. DEN"
  },
  {
    "number": 7208588867,
    "formatted": "(720) 858-8867",
    "label": "12. DEN"
  },
  {
    "number": 6027888867,
    "formatted": "(602) 788-8867",
    "label": "13. PHX"
  },
  {
    "number": 4809988867,
    "formatted": "(480) 998-8867",
    "label": "13. PHX"
  },
  {
    "number": 6238788867,
    "formatted": "(623) 878-8867",
    "label": "13. PHX"
  },
  {
    "number": 5204588867,
    "formatted": "(520) 458-8867",
    "label": "14. TUC"
  },
  {
    "number": 2143288867,
    "formatted": "(214) 328-8867",
    "label": "15. DAL"
  },
  {
    "number": 9724888867,
    "formatted": "(972) 488-8867",
    "label": "15. DAL"
  },
  {
    "number": 8174888867,
    "formatted": "(817) 488-8867",
    "label": "15. DAL"
  },
  {
    "number": 7132288867,
    "formatted": "(713) 228-8867",
    "label": "16. HOU"
  },
  {
    "number": 2812388867,
    "formatted": "(281) 238-8867",
    "label": "16. HOU"
  },
  {
    "number": 5124588867,
    "formatted": "(512) 458-8867",
    "label": "17. AUS"
  },
  {
    "number": 2105588867,
    "formatted": "(210) 558-8867",
    "label": "18. SA"
  },
  {
    "number": 8307788867,
    "formatted": "(830) 778-8867",
    "label": "18. SA"
  },
  {
    "number": 6515788867,
    "formatted": "(651) 578-8867",
    "label": "19. MIN"
  },
  {
    "number": 6123388867,
    "formatted": "(612) 338-8867",
    "label": "19. MIN"
  },
  {
    "number": 7637888867,
    "formatted": "(763) 788-8867",
    "label": "19. MIN"
  },
  {
    "number": 9524488867,
    "formatted": "(952) 448-8867",
    "label": "19. MIN"
  },
  {
    "number": 9134988867,
    "formatted": "(913) 498-8867",
    "label": "20. KC"
  },
  {
    "number": 8163488867,
    "formatted": "(816) 348-8867",
    "label": "20. KC"
  },
  {
    "number": 3148788867,
    "formatted": "(314) 878-8867",
    "label": "21. STL"
  },
  {
    "number": 6363988867,
    "formatted": "(636) 398-8867",
    "label": "21. STL"
  },
  {
    "number": 2024088867,
    "formatted": "(202) 408-8867",
    "label": "22. WDC/BAL"
  },
  {
    "number": 7032088867,
    "formatted": "(703) 208-8867",
    "label": "22. WDC/BAL"
  },
  {
    "number": 3015688867,
    "formatted": "(301) 568-8867",
    "label": "22. WDC/BAL"
  },
  {
    "number": 4103588867,
    "formatted": "(410) 358-8867",
    "label": "22. WDC/BAL"
  },
  {
    "number": 2153388867,
    "formatted": "(215) 338-8867",
    "label": "23. PHL"
  },
  {
    "number": 6108288867,
    "formatted": "(610) 828-8867",
    "label": "23. PHL"
  },
  {
    "number": 3054488867,
    "formatted": "(305) 448-8867",
    "label": "24. MIA"
  },
  {
    "number": 9548388867,
    "formatted": "(954) 838-8867",
    "label": "24. MIA"
  },
  {
    "number": 5612788867,
    "formatted": "(561) 278-8867",
    "label": "24. MIA"
  },
  {
    "number": 4042488867,
    "formatted": "(404) 248-8867",
    "label": "25. ATL"
  },
  {
    "number": 7704588867,
    "formatted": "(770) 458-8867",
    "label": "25. ATL"
  },
  {
    "number": 2125688867,
    "formatted": "(212) 568-8867",
    "label": "26. NYJ"
  },
  {
    "number": 7183388867,
    "formatted": "(718) 338-8867",
    "label": "26. NYJ"
  },
  {
    "number": 9144488867,
    "formatted": "(914) 448-8867",
    "label": "26. NYJ"
  },
  {
    "number": 5163588867,
    "formatted": "(516) 358-8867",
    "label": "26. NYJ"
  },
  {
    "number": 6312188867,
    "formatted": "(631) 218-8867",
    "label": "26. NYJ"
  },
  {
    "number": 8139688867,
    "formatted": "(813) 968-8867",
    "label": "27. TAM/ORL"
  },
  {
    "number": 7278988867,
    "formatted": "(727) 898-8867",
    "label": "27. TAM/ORL"
  },
  {
    "number": 9417488867,
    "formatted": "(941) 748-8867",
    "label": "27. TAM/ORL"
  },
  {
    "number": 4073288867,
    "formatted": "(407) 328-8867",
    "label": "27. TAM/ORL"
  },
  {
    "number": 3212688867,
    "formatted": "(321) 268-8867",
    "label": "27. TAM/ORL"
  },
  {
    "number": 3135688867,
    "formatted": "(313) 568-8867",
    "label": "28. DET"
  },
  {
    "number": 5867788867,
    "formatted": "(586) 778-8867",
    "label": "28. DET"
  },
  {
    "number": 7348488867,
    "formatted": "(734) 848-8867",
    "label": "28. DET"
  },
  {
    "number": 2483588867,
    "formatted": "(248) 358-8867",
    "label": "28. DET"
  },
  {
    "number": 7574688867,
    "formatted": "(757) 468-8867",
    "label": "29. VB/RCH"
  },
  {
    "number": 8043588867,
    "formatted": "(804) 358-8867",
    "label": "29. VB/RCH"
  },
  {
    "number": 4126788867,
    "formatted": "(412) 678-8867",
    "label": "30. PIT"
  },
  {
    "number": 7244388867,
    "formatted": "(724) 438-8867",
    "label": "30. PIT"
  },
  {
    "number": 5594388867,
    "formatted": "(559) 438-8867",
    "label": "31. Cenval"
  },
  {
    "number": 6613288867,
    "formatted": "(661) 328-8867",
    "label": "31. Cenval"
  },
  {
    "number": 9044488867,
    "formatted": "(904) 448-8867",
    "label": "32. JAX"
  },
  {
    "number": 2162688867,
    "formatted": "(216) 268-8867",
    "label": "33. Ohio"
  },
  {
    "number": 4408788867,
    "formatted": "(440) 878-8867",
    "label": "33. Ohio"
  },
  {
    "number": 3304588867,
    "formatted": "(330) 458-8867",
    "label": "33. Ohio"
  },
  {
    "number": 9375488867,
    "formatted": "(937) 548-8867",
    "label": "33. Ohio"
  },
  {
    "number": 5135988867,
    "formatted": "(513) 598-8867",
    "label": "33. Ohio"
  },
  {
    "number": 6142588867,
    "formatted": "(614) 258-8867",
    "label": "33. Ohio"
  },
  {
    "number": 7409288867,
    "formatted": "(740) 928-8867",
    "label": "33. Ohio"
  },
  {
    "number": 7045688867,
    "formatted": "(704) 568-8867",
    "label": "34. NCar"
  },
  {
    "number": 9195588867,
    "formatted": "(919) 558-8867",
    "label": "34. NCar"
  },
  {
    "number": 3363588867,
    "formatted": "(336) 358-8867",
    "label": "34. NCar"
  },
  {
    "number": 2524388867,
    "formatted": "(252) 438-8867",
    "label": "34. NCar"
  },
  {
    "number": 9104888867,
    "formatted": "(910) 488-8867",
    "label": "34. NCar"
  },
  {
    "number": 8282988867,
    "formatted": "(828) 298-8867",
    "label": "34. NCar"
  }
];

function createListItem(number) {
	var el = document.createElement('li');
	el.className = 'Number';

	el.addEventListener('click', function(e){
		return e.currentTarget.classList.add('Number--done');
	});

	var numberLink = document.createElement('a');
	numberLink.className = 'Number__Link';
	numberLink.href = 'tel:' + number.number;

	var labelSpan = document.createElement('span');
	labelSpan.className = 'Number__Label';
	labelSpan.innerText = number.label;

	var numberSpan = document.createElement('span');
	numberSpan.className = 'Number__Number';
	numberSpan.innerText = number.formatted;

	numberLink.appendChild(labelSpan);
	numberLink.appendChild(numberSpan);

	el.appendChild(numberLink);

	return numberList.appendChild(el);
};

numbers.forEach(createListItem);
/**
 * showDateTime() SOLUTION
 * Algorithm-
 * For each list elements(America, India ..)
 * Get Nodes of Date,region and ticker
 * Initialize new UTC Date and add the current country's time displacement 
 * Add date in date node, and time in ticker node
 */
function showDateTime(){
	// As date.getUTCDay() will return 0-6
	const weekday = {0:'Monday', 1:'Tuesday',2:'Wednesday',3:'Thursday',4:'Friday',5:'Saturday',6:'Sunday'}
	
	// Later can come from database or an API
	const regions = {
		'EMEA': 0,
		'APAC' : 8,
		'India' : 5.5,
		'Americas' : -8,
	};

	// Got allZones 
	let allZones = document.querySelectorAll('ul.clock li');
    
	// Traverse every list element
	for(let i=0;i<allZones.length;++i){
       let DateNode =  allZones[i].children[0].children[1]; //Date Node
        let tickerNode = allZones[i].children[0].children[2]; //Time Node
        let region = allZones[i].children[0].children[0].textContent; // Region Node

		const date = new Date();

		// Adding country displacement, update in seconds rest will update themself
		date.setUTCSeconds(date.getUTCSeconds()+(regions[region]*60*60));
		
		let Hours = date.getUTCHours();
		let Minutes = date.getUTCMinutes();
		let Seconds = date.getUTCSeconds();
		
		// Display Date and Day
		DateNode.innerHTML = (date.getUTCDate()+" | "+weekday[date.getUTCDay()]);
		
		// Small feature to convert 24Hr to 12Hr format #moreReadable
		let ampm;
		if(Hours>12){ 
			Hours-=12;
			ampm="pm";
		}else ampm="am";

		// Again for readability of dates
		if(Hours<=9)	Hours="0"+Hours;
		if(Minutes<=9) Minutes="0"+Minutes;

		// Display time
		tickerNode.innerHTML = (Hours+":"+Minutes+ampm);
	}		
	setTimeout(showDateTime, 1000); // Run this function after every second
}

/**
 * strikeGong() solution
 * Construct message from object passed in parameter
 * bring alert div on page(use fade-in class and make alert-template visible)
 * Bell sound
 * Removing the div after 14 seconds 
 */  	
function strikeGong (message){
	//construct message 
	message = message['dealName']+"<br>"+message['saleperson']+"<br>"+message['amount'];

	// Bring alert div on page
	document.querySelector('.alert-template').style.visibility="visible";
	document.querySelector('.alert-box').classList.add('fade-in')
	document.querySelector('.alert-text').innerHTML=message;

	// Play sound, need to interact with page for it to play
	var sound = new Howl({
		src: ['images/bell.wav']
	  });
	sound.play();
	
	// Removing alert div after 14 seconds
	setTimeout(()=>{
		document.querySelector('.alert-box').classList.remove('fade-in')
		document.querySelector('.alert-template').style.visibility="hidden";
	},14000)
}






/* CODE ALREADY GIVEN */
function carousel( items, i ){
	//show item
	var item = items.eq(i);
	$(item).show().addClass('animate fadeInUp');
	setTimeout(function(){
		var nextItem = i + 1;
			nextItem = (nextItem == items.length) ? 0 : nextItem; //go back to the first item of the list

		//hide previous item and queue up the next item in 8 secs
		$(item).removeClass('animate fadeInUp').addClass('animate-fast fadeOutUp');
		setTimeout(function(){
			$(item).hide().removeClass('animate-fast fadeOutUp');
			carousel($('.tweet'), nextItem);
		}, 600);
	}, 10000);
}

const renderTweet = (message)=>{
	tweetTemplate.querySelector('div').classList.add('tweet');
	tweetTemplate.querySelector('p').innerHTML = '';
	tweetTemplate.querySelector('p').innerHTML = message;
	$messages.insertAdjacentHTML('beforeend', tweetTemplate.innerHTML);
	tweetTemplate.querySelector('div').classList.remove('tweet');
}


$(function(){
	showDateTime();
	carousel($('.tweet'), 0);
	setTimeout(function(){
		//  Passing 'Dynamic data' from the calling function strikeGong()
		strikeGong({
			dealName : 'Acquired @TheGongCompany',
			saleperson : 'arjit sharma',
			amount : '$1,000,000'
		});
	},1000);
});
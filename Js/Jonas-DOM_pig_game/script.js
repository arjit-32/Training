let score,roundScore,activePlayer,gamePlaying;


init();
 
document.querySelector('.btn--roll').addEventListener('click',function(){
	
	if(gamePlaying){
		// Generate number
	let dice = Math.ceil(Math.random()*6);

	// Display result
	let diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-'+dice+'.png';

	// Update round score if rolled number was not a 1
	if(dice !== 1){
		// add score
		roundScore += dice;
		document.querySelector('#current--'+activePlayer).textContent = roundScore; 
	}else{
		// next player
		nextPlayer();
	}
	
	}//gamePlaying if closed

});


document.querySelector('.btn--hold').addEventListener('click',function(){
	if(gamePlaying){
	// Add current score to global score
	scores[activePlayer] += roundScore;

	// Update UI
	document.querySelector('#score--'+activePlayer).textContent = scores[activePlayer];

	// Check if player won the game
	if(scores[activePlayer]>=20){
		document.querySelector('#name--'+activePlayer).textContent="Winner!";
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player--'+activePlayer).classList.add('player--winner');
		gamePlaying=false;
	}else{
	// Next PLayer 
	nextPlayer();
		}
	} // gamePLaying if closed

});

document.querySelector('.btn--new').addEventListener('click',init);


function nextPlayer(){
	activePlayer === 0 ? activePlayer=1 : activePlayer=0;
	roundScore=0;

	document.getElementById('current--0').textContent='0';
	document.getElementById('current--1').textContent='0';		

	document.querySelector('.player--0').classList.toggle('player--active');
	document.querySelector('.player--1').classList.toggle('player--active');

	document.querySelector('.dice').style.display = 'none';	
}

function init(){
	scores = [0,0]; //0th index for PLayer 0, 1st index for Player 1
	roundScore = 0;
	activePlayer = 0;
	gamePlaying=true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';  

document.getElementById('name--0').textContent='Player 0';
document.getElementById('name--1').textContent='Player 1';

document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');

// believe me this is correct - > remove from both just in case & then add to player 0
document.querySelector('.player--0').classList.add('player--active');
}








/* My Spaghetti Code Solution

const diceImg = document.querySelector(".dice");
//diceImg.style.display = 'none';
const btn = document.querySelectorAll(".btn");
btn.forEach(btn => btn.addEventListener("click",btn_clicked))

function switchplayer(){
	if(activePlayer==0){
		activePlayer=1;
		document.querySelector(".player--0").classList.remove("player--active");
		document.querySelector(".player--1").classList.add("player--active");
	}else{
		activePlayer=0;
		document.querySelector(".player--1").classList.remove("player--active");
		document.querySelector(".player--0").classList.add("player--active");
	}
	
}
function btn_clicked(){
	const tempScore = document.querySelector("#current--" + activePlayer);
	const globalScore = document.querySelector("#score--"+ activePlayer);
	
	if(scores[0]>=100 || scores[1]>=100)
		return;

	if(this.classList.contains("btn--roll")){
		//Random no. between 1 to 6
		dice = Math.ceil(Math.random()*6);
		roundScore+=dice;
		tempScore.textContent = roundScore;
		diceImg.setAttribute("src","dice-"+dice+".png");

		if(dice==1){
			tempScore.textContent=0;
			roundScore=0;
			switchplayer();
		}
	}else if(this.classList.contains("btn--hold")){
		scores[activePlayer]+=roundScore;
		globalScore.textContent=scores[activePlayer];
		roundScore=0;
		switchplayer();
	}else{
		window.reload();
	}
}

*/
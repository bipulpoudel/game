var score,player,localScore,dice,check;

initial();
document.querySelector('.btn-roll').addEventListener('click',onroll);
document.querySelector('.btn-hold').addEventListener('click',onhold);
document.querySelector('.btn-new').addEventListener('click',initial);
/*document.querySelector('.btn-start').addEventListener('click',game);*/
function onroll()
{
	if(check)
	{
	dice = Math.floor(Math.random()*6) + 1;
	if(dice === 1)
	{
		localScore =0;
		document.querySelector('#current-0').textContent = localScore;
		document.querySelector('#current-1').textContent = localScore;
		nextPlayer();
	}
	else{
	localScore += dice;
	document.querySelector('#current-'+player).textContent = localScore;
	}
	document.querySelector('.dice').src = 'dice-'+dice+'.png';}
}
function onhold()
{
	if(check)
	{
	score[player] += localScore;
	localScore = 0;
	var fscore = document.querySelector('.final-score').value;
	var finalscore = fscore || 100;
	if (score[player]<finalscore) {
	document.querySelector('#score-'+player).textContent = score[player];}
	else
		{document.querySelector('#score-'+player).textContent = 'Winner';
			check = 0;}
	document.querySelector('#current-0').textContent = localScore;
	document.querySelector('#current-1').textContent = localScore;
	nextPlayer();
}
}

function nextPlayer() {
    player === 0 ? player = 1 : player = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function initial()
{
	score = [0,0];
	player = 0;
	localScore = 0;
	check = 1;
	document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
/*
function game{
	window.location = 'game.html';
}
*/
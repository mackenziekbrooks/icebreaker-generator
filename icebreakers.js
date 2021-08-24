var icebreakers = [
'Favorite breed of dog',
'Earliest memory of the internet'
]

function newIcebreaker() {
	var randomNumber = Math.floor(Math.random() * (icebreakers.length));
	document.getElementbyID('icebreakerDisplay').innerHTML = icebreakers[randomNumber];
}
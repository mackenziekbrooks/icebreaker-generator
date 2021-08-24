var icebreakers = [
'Favorite breed of dog?',
'Earliest memory of the internet?',
'What are you nerdy about?',
'Favorite sandwich?',
'What’s a word that you knew what it meant but never knew how to pronounce?',
'If the universe could give you back one lost item, what would it be?',
'Have you ever seen a ghost?',
'What is your comfort tv show?',
'What is the least interesting fact about yourself?',
'Is there a scary thing from your childhood that still affects your behavior today?',
'Best thing on Netflix right now?',
'Favorite 90s movie?',
'Worst haircut?',
'Favorite holiday meal?',
'Favorite restaurant in town and what do you order there?'
]

function newIcebreaker() {
	var randomNumber = Math.floor(Math.random() * (icebreakers.length));
	document.getElementById('icebreakerDisplay').innerHTML = icebreakers[randomNumber];
}
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
'Favorite restaurant in town and what do you order there?',
'Favorite place to hike?',
'What is the most insulting compliment you have received?',
'What is a food you hated as a child but love now?',
'Most useless skill?',	
'What is your most quoted movie?',
'Favorite tv-watching snack?',
'What is your go-to comfort meal?',
'First concert, best concert, most embarrassing concert?',
'What is the earliest book you remember having a big impact on you?',
'What is a weird belief or misunderstanding you held for a long time?',
'You are building your dream house - what one room or feature must you include?',
'Do you collect anything?',
'Who was your favorite teacher in school and why?',
'What is your favorite kitchen appliance/utensil?',
'Describe your musical taste using food.',
'Favorite snow day activity?',
'What item have you lost that you want the universe to give back?',
'Do you have a collection? Is it organized? How?',
'You are building your dream house - what one room or feature must you include?',
'Where is your favorite place?',
'What always cheers you up?'
]

function newIcebreaker() {
	var randomNumber = Math.floor(Math.random() * (icebreakers.length));
	document.getElementById('icebreakerDisplay').innerHTML = icebreakers[randomNumber];
}

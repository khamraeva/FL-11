let max = 8;
let maxPrize = 100;
let totalPrize = 0;
let prize = 0;
let continueGame = true;
const secondAttemptDivider = 2;
const thirdAttemptDivider = 4;
const loosePrize = 0;
const attemptRise = 4;
const multiplier = 2;

let playgame = confirm('Do you want to play a game?');
if (!playgame) {
	alert('You did not become a billionaire, but can.');
} else {
	while (playgame) {
		let guessingNumber = Math.floor(Math.random() * max);
		prize = maxPrize;
		const firstChoice = parseInt(prompt(`
Choose a roulette number from 0 to ${max}
Attempts left: 3
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`));
		if (firstChoice === guessingNumber) {
			playgame = confirm('Congratulation, you won! Your prize is: ' + prize + '$. Do you want to continue?');
		} else if (continueGame) {
			prize = maxPrize / secondAttemptDivider;
			const secondChoice = parseInt(prompt(`
Choose a roulette number from 0 to ${max}
Attempts left: 2
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`));
			if (secondChoice === guessingNumber) {				
				playgame = confirm('Congratulation, you won! Your prize is: ' 
				+ prize + '$. Do you want to continue?');
			} else if (continueGame) {
				prize = maxPrize / thirdAttemptDivider;		
				const thirdChoice = parseInt(prompt(`
Choose a roulette number from 0 to ${max}
Attempts left: 1
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`));
				if (thirdChoice === guessingNumber) {
					alert('Congratulation, you won! Your prize is: ' + prize + '$');
				} else {
					alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
					playgame = confirm('Do you want to play again?');
					prize = loosePrize;
				}
			}
		}
		max = max + attemptRise;
		maxPrize = maxPrize * multiplier;
		totalPrize += prize;
	}
}
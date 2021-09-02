/*  O jogo “pedra, papel e tesoura” agora é melhor de três! O código será
colocado em uma função, e sua chamada será feita até três vezes, de
acordo com as partidas anteriores.
 */

const prompt = require('prompt-sync')();
function jogo() {
	//let chances = 3;

	const jogadas = ['Pe', 'Pa', 'T'];
	do {
		/* for (let i = 3; i > 0; i--) {
			chances--;
		} */
		let sorteio = Math.floor(Math.random() * 3);

		let maquina = jogadas[sorteio];

		const jogador = prompt('Escolha "Pe"dra, "Pa"pel ou "T"esoura: ');

		const win =
			(maquina == 'Pe' && jogador == 'T') ||
			(maquina == 'Pa' && jogador == 'Pe') ||
			(maquina == 'T' && jogador == 'Pa');

		if (maquina == jogador) {
			console.log('Empate!');
		} else {
			if (win) {
				console.log(
					`Maquina Escolheu: ${maquina}
                Você Escolheu: ${jogador}`
				);
				console.log('Você perdeu!');
			} else {
				console.log(
					`Maquina Escolheu ${maquina}
                Você Escolheu: ${jogador}`
				);
				console.log('Você ganhou!');
			}
		}
	} while (chances > 0);
	return chances;
}

jogo();

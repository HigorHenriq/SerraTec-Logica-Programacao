/* A função “Natação” devolve a categoria do nadador a partir da idade
recebida por parâmetro. Até 5 anos, Golfinho; 5 a 7 anos, Infantil A; 8 a 10
anos, Infantil B; 11-13 anos, Juvenil A; 14-17 anos, Juvenil B. Maiores de 18
anos, Adulto. */

function categoria(idade) {
	if (idade <= 5) {
		console.log(`${idade} anos, Categoria: Golfinho`);
	}
	if (idade > 5 && idade <= 7) {
		console.log(`${idade} anos, Categoria: Infantil A`);
	}
	if (idade > 7 && idade <= 10) {
		console.log(`${idade} anos, Categoria: Infantil B`);
	}
	if (idade >= 11 && idade <= 13) {
		console.log(`${idade} anos, Categoria: Juvenil A`);
	}
	if (idade >= 14 && idade <= 17) {
		console.log(`${idade} anos, Categoria: Juvenil B`);
	}
	if (idade >= 18) {
		console.log('Categoria: Adulto');
	}
}

categoria(5);

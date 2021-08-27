/* . No sistema “Todas as tabuadas”, o aluno de matemática não precisa
escolher o número: As tabuadas entre 2 e 10 serão impressas de uma vez. */

for(let i = 2; i <= 10; i++){

    console.log(";-------------;")

        for(let j = 2; j <= 10; j++){

            var mult = j * i;
            console.log(`${j} x ${i} = ${mult}`)
        }
}
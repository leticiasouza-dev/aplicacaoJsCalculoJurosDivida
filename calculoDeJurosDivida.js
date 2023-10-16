import input from 'readline-sync';

console.log("Aplicação de Juros:")

//se houver mais de 15 dias de atrasa, a taxa de juros é de 10% do valor da divída, caso contrário, a ataxa é de 5% do valor da dívida

let valorDevido = Number(input.question("Informe o valor devido: "));

if(valorDevido <= 0) {
    console.log("Aplicação encerrada");

} else {
    let diasDeAtrasos = Number(input.question("Informe os dias de atraso"));
    let juros
    
        if(diasDeAtrasos <= 0){
            console.log("Aplicação encerrada")
        } else {
            if(diasDeAtrasos > 15){
                juros = 10;
            } else{
                juros = 5;
            }

            let valorJuros = (valorDevido / 100) * juros;
            let totalDivida = valorDevido + valorJuros

            console.log("Valor original da dívida: " + valorDevido);
            console.log("Dias atrasados: " + diasDeAtrasos);
            console.log("taxas de Juros: " + juros + "%");
            console.log("Valor total com juros: " + totalDivida)
        }
}








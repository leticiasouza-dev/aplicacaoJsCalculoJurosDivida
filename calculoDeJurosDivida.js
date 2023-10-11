import input from 'readline-sync';

console.log("Aplicação de Juros:")

//se houver mais de 15 dias de atrasa, a taxa de juros é de 10% do valor da divída, caso contrário, a ataxa é de 5% do valor da dívida

let valorDevido = Number(input.question("Informe o valor devido: "))


switch(valorDevido){
    case valorDevido <= 0:
         console.log("Sistema encerrado!!")
         break

    case valorDevido > 0:
        let diasDeAtrasos = Number(input.question("Informe quantos dias se passaram desde o vencimento do boleto (dias de atraso): "))

        if(diasDeAtrasos <= 0){
            console.log("Sistema encerrado!")
        } else if(diasDeAtrasos > 15){
            juros 10%
        } else{
            juros 5%
        }
}



console.log("Valor original da dívida: " + )
console.log("Dias atrasados: " + )
console.log("taxas de Juros: " + )
console.log("Valor total com juros: " + )
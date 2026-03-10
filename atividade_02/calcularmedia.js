const calcularMedia  = function (n1, n2, n3)
{
    return (n1 + n2 + n3) / 3 
}
function notaFinal (media)

{
console.log("a nota do aluno foi : " + media.toFixed(2))

if (media >=7)
  
    console.log (" o aluno foi aprovado!")

    else 

        console.log ("aluno reprovado.")
}
let media = calcularMedia (5, 8 , 9 )
notaFinal (media)

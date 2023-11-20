let students = [
{
    name: "Jorge",
    firstGrade: 7,
    secondGrade: 8,
},
{
    name: "Maria",
    firstGrade: 7,
    secondGrade: 4,
},
{
    name: "Carlos",
    firstGrade: 3,
    secondGrade: 6,
},
{
    name: "Joana",
    firstGrade: 10,
    secondGrade: 5,
}
]


let average = function(firstGrade, secondGrade){
    return ((firstGrade + secondGrade) / 2);
}

function finalResult(student){
    if (average(student.firstGrade, student.secondGrade) >= 7) {
        return `A média do(a) candidato(a) ${student.name} é ${average(student.firstGrade, student.secondGrade)}
Parabéns! Você foi aprovado(a) no concurso!`
    }else{
        return `Não foi dessa vez ${student.name}! Sua média foi ${average(student.firstGrade, student.secondGrade)} Tente novamente na póxima vez!`
    }
}

for (let student of students) {
    let resultmessage = finalResult(student)
    alert (resultmessage)
}

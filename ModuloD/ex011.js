var idade = 66
if (idade < 16) {
    console.log(`Sua idade é ${idade} anos, portanto não vota`)
} /*else {
    if (idade >= 16 && idade <18 || idade > 65) {
        console.log(`Sua idade é ${idade} anos, voto opcional`)
    } else {
        console.log(`Sua idade é ${idade} anos, voto obrigatório`)
    }  */
else if (idade < 18 || idade > 65) {
    console.log(`Sua idade é ${idade} anos, voto opcional`)
} else if (idade >= 18 ){
    console.log(`Sua idade é ${idade} anos, voto obrigatório`)
}

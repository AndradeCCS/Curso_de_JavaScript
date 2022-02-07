let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`nosso vetor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)

if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`o valor 5 está na posição ${pos}`)
}
/*
c = 0
while (c < num.length) {
    console.log(num[c])
    c ++
} 

for(let pos=0; pos < num.length; pos ++){
    console.log(`A posição ${pos}, tem valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
*/
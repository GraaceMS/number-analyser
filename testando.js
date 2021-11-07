let num = document.querySelector('input#fnum') // input 
let lista = document.querySelector ('select#flista') // select
let res = document.querySelector ('div#res')
let valores = [] // vetor / array pra analisar os dados

function isNumero(n){
    if(Number(n) >=1 && Number(n)<= 100) { // vai receber só um parametro || se o number de n for maior ou igual a 1 e number de n for menor igual a 100                         
        return true
    } else {
        return false
    }
} 

function inLista(n, l)  { // vai recber um numero e uma lista
    if(l.indexOf(Number(n)) != -1) { // - 1 significa que o valor nao foi encontrado na lista 
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {      // analise pra ver se é um numero e se nao está em lista
        valores.push(Number(num.value)) // adicionar o elemento no vetor
        let item = document.createElement('option') // adicionar o elemento no select/option
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // limpar o campo depois que finalizar
    } else {
    window.alert('Valor invalido ou já encontrado na lista.')
   }
   num.value = '' 
   num.focus() // limpar o campo depois de escrever os numeros
} 

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //total de elementos vai ser = 
        let mai = valores [0]
        let men = valores[0]
        let soma = 0 
        media = 0 
        for(let pos in valores){ // let para cada posição / laço de percurso, pra varrer o vetor inteiro 
            soma += valores[pos] // somar o valor atual (0) e vai somando o primeiro valor com o segundo, terc ...
            if(valores[pos] > mai) { //  se valores na posição pos for maior do que o maior valor
                mai = valores [pos] // deixa de ser o anterior e passa a ser esse
            if(valores[pos]< men) { // se o valores pos for menos que o menos, o menor passa ser o valores pos 
                men = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = " "
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${mai}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${men}</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}`
        res.innerHTML += `<p> A media dos valores digitados é ${media}`


    }
    
}
}

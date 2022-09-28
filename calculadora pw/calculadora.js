class Calculadora{

    somar(a,b){
        return a+b;
    }

    subtrair(a,b){
        return a-b;
    }

    multiplicar(a,b){
        return a*b
    }

    dividir (a,b){
        return a/b
    }


}

var minhacalc = new Calculadora();


    function somar() {
    var numero1 = document.querySelector('input#n1')
    var numero2 = document.querySelector('input#n2')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var calculo = document.querySelector('div#calculo')
    let resultadodaminhasoma = minhacalc.somar(n1,n2);
    calculo.innerHTML = `${n1} + ${n2} = ${resultadodaminhasoma}`
}
    function subtrair() {
    var numero1 = document.querySelector('input#n1')
    var numero2 = document.querySelector('input#n2')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var calculo = document.querySelector('div#calculo')
    let resultadodaminhasubtracao = minhacalc.subtrair(n1,n2);
    calculo.innerHTML = `${n1} + ${n2} = ${resultadodaminhasubtracao}`
}
    function multiplicar() {
    var numero1 = document.querySelector('input#n1')
    var numero2 = document.querySelector('input#n2')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var calculo = document.querySelector('div#calculo')
    let resultadodaminhamultiplicacao = minhacalc.multiplicar(n1,n2);
    calculo.innerHTML = `${n1} + ${n2} = ${resultadodaminhamultiplicacao}`
}
    function dividir() {
    var numero1 = document.querySelector('input#n1')
    var numero2 = document.querySelector('input#n2')
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    var calculo = document.querySelector('div#calculo')
    let resultadodaminhadivisao = minhacalc.dividir(n1,n2);
    calculo.innerHTML = `${n1} + ${n2} = ${resultadodaminhadivisao}`
}
// ------ EJEMPLO DE PALABRAS PALINDROMAS ------
// let texto = 'La ruta nos aportó otro paso natural'
// let texto = 'Alá, yo soy de Mahoma el dios. Oídle a Mohamed: yo soy Alá'
let texto = 'Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla'
// let texto = 'Aten al planeta'
// let texto = 'Yo soy'

// ------ EJEMPLO DE PALABRAS NO PALINDROMAS ------
// let texto = 'Hola mundo'
// let texto = 'IS4TECH'
// let texto = 'Guatemala'
// let texto = 'Estoy aprendiendo docker'

let esPalindromo = true

let palabraAntigua = []
let palabraNueva = []

let textoEnMayusculas = texto.toUpperCase()

for (let i = textoEnMayusculas.length - 1; i >= 0; i--) {
    if (textoEnMayusculas[i] === ' ') {
        continue
    }
    palabraNueva.push(textoEnMayusculas[i])
}

for (let j = 0; j < textoEnMayusculas.length; j++) {
    if (textoEnMayusculas[j] === ' ') {
        continue
    }
    palabraAntigua.push(textoEnMayusculas[j])
}

for (let k = 0; k < palabraAntigua.length; k++) {
    if (palabraAntigua[k] === palabraNueva[k]) {
        esPalindromo = true
        //console.log(palabraAntigua[k] + ', ' + palabraNueva[k] + ' = ' + 'SI')
    }else{
        esPalindromo = false
        //console.log(palabraAntigua[k] + ', ' + palabraNueva[k] + ' = ' + 'NO')
    }
}

console.log(esPalindromo ? 'La palabra/oración es palíndromo' : 'La palabra/oración no es un palíndromo')
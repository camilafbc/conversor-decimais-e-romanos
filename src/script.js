const btnToDecimal = document.getElementById("toDecimal")
const btnToRomanos = document.getElementById("toRomanos")

const toDecimalContent = document.getElementById("toDecimalContainer")
const toRomanosContent = document.getElementById("toRomanosContainer")

toRomanosContent.style.display = 'none';

btnToRomanos.addEventListener('click', () => {
    toDecimalContent.style.display = 'none';
    toRomanosContent.style.display = 'flex';
})

btnToDecimal.addEventListener('click', () => {
    toDecimalContent.style.display = 'flex';
    toRomanosContent.style.display = 'none';
})

const romanos = ["I", "V", "X", "L" , "C", "D", "M"]
const values = [1, 5, 10, 50, 100, 500, 1000]

const input = document.querySelector("input[name='recebe-romanos']")
const saida = document.getElementById("saida-decimal")
const btn = document.getElementById("btn-convert-to-decimal")

function convertToDecimais(entrada){
    console.log(entrada)
    let value = 0

    for(let i = 0; i < entrada.length; i++){
        let curr_rom = romanos.indexOf(entrada[i])
        let next_rom = romanos.indexOf(entrada[i + 1])
        let curr_value = values[curr_rom]
        let next_value = values[next_rom]
        
        curr_value < next_value ? value -= curr_value : value += curr_value
    }
    
    saida.innerText = value
}

btn.addEventListener('click', () => {
    convertToDecimais(input.value)
})
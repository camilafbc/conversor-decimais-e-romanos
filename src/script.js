import { convertToDecimais, copyDecimais } from "./modules/convertToDecimais.js";
import { selectConvertToDecimais } from "./modules/selectConvertToDecimais.js";
import { selectConvertToRomanos } from "./modules/selectConvertToRomanos.js";
import { copyDec, copyRom, toRomanosContent, btnToRomanos, btnToDecimal, btn, inputRomanos, saidaDecimal, saidaRomanos } from "./modules/constants.js";

//Organização do display
toRomanosContent.style.display = 'none';

btnToRomanos.addEventListener('click', selectConvertToRomanos)

btnToDecimal.addEventListener('click', selectConvertToDecimais)

//Converter Romanos para Decimais
btn.addEventListener('click', () => {
    convertToDecimais(inputRomanos.value)
})


//Funções para copiar para a área de transferência
copyDec.addEventListener('click', () => {
    copyDecimais(saidaDecimal.innerText)
})

copyRom.addEventListener('click', () => {
    copyRomanos(saidaRomanos.innerText)
})
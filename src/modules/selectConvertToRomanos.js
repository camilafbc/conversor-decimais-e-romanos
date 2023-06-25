import { toDecimalContent, toRomanosContent, inputRomanos, saidaDecimal, inputDecimais } from './constants.js';


function selectConvertToRomanos(){
    toDecimalContent.style.display = 'none';
    toRomanosContent.style.display = 'flex';

    inputRomanos.value = ""
    saidaDecimal.innerText = ""
}

inputDecimais.addEventListener('input', () => {
    inputDecimais.value = inputDecimais.value.replace(/[^0-9]/gi, "")
})

export { selectConvertToRomanos }
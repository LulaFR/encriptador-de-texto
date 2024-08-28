function encriptar() {
    const str = document.getElementById('inputUsuario').value;
    let encriptado = '';
    const vocales = ["a", "e", "i", "o", "u"];

    //if (validarTexto(str)) {

        for (let index = 0; index < str.length; index++) {
            if(vocales.indexOf(str[index]) !== -1) {
                encriptado += encriptarVocal(str.charAt(index));
            } else {
                encriptado += str.charAt(index);
            }
        }
         //console.log('encriptado');
         //console.log(encriptado);
        mostrarResultado(encriptado);
    //}
}

function encriptarVocal(vocal) {
    if (vocal === vocalA.desencriptada) {
        return vocalA.encriptada;
    }
    if (vocal === vocalE.desencriptada) {
        return vocalE.encriptada;
    }
    if (vocal === vocalI.desencriptada) {
        return vocalI.encriptada;
    }
    if (vocal === vocalO.desencriptada) {
        return vocalO.encriptada;
    }
    if (vocal === vocalU.desencriptada) {
        return vocalU.encriptada;
    }
}

function desencriptar() {
    let str = document.getElementById('inputUsuario').value;
    let desencriptado = '';
    const vocales = ["a", "e", "i", "o", "u"];

    //if (validarTexto(str)) {
        str = str.replace(vocalA.encriptada, vocalA.desencriptada);
        str = str.replace(vocalE.encriptada, vocalE.desencriptada);
        str = str.replace(vocalI.encriptada, vocalI.desencriptada);
        str = str.replace(vocalO.encriptada, vocalO.desencriptada);
        str = str.replace(vocalU.encriptada, vocalU.desencriptada);
        
        //console.log('desencriptado');
        //console.log(str);
        mostrarResultado(str);
    //}
    console.log(validarTexto(str));
}

function mostrarResultado(resultado) {
    let p = document.getElementById('textoResultado');
    p.innerHTML = resultado;
    return;
}

const vocalA = {
    desencriptada : 'a',
    encriptada : 'ai',
};
const vocalE = {
    desencriptada : 'e',
    encriptada : 'enter',
};
const vocalI = {
    desencriptada : 'i',
    encriptada : 'imes',
};
const vocalO = {
    desencriptada : 'o',
    encriptada : 'ober',
};
const vocalU = {
    desencriptada : 'u',
    encriptada : 'ufat',
};

function copiar() {
    let texto = document.getElementById('textoResultado').value;
    writeClipboardText(texto);
}

async function writeClipboardText(texto) {
    try {
      await navigator.clipboard.writeText(texto);
    } catch (error) {
      console.error(error.message);
    }
}

function validarTexto(texto) { //AGREGAR MAYÚSCULAS
    const formato = /[`!@#$%^&*()_+\-=[]{};':"|,.<>?~]/;
    const pruebaTexto = (texto) => {
        console.log('hola');
        if (formato.test(texto)) {
            let p = document.getElementById('textoResultado');
            p.innerHTML = 'No se permiten caracteres especiales ni mayúsculas.';
            return false;
        }
    }
    return true;
}
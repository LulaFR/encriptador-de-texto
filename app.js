function encriptar() {
    const str = document.getElementById('textoUsuario').value;
    let encriptado = '';
    const vocales = ["a", "e", "i", "o", "u"];

    const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&#])/gm.test(str);
    if (!validacion) {

        for (let index = 0; index < str.length; index++) {
            if(vocales.indexOf(str[index]) !== -1) {
                encriptado += encriptarVocal(str.charAt(index));
            } else {
                encriptado += str.charAt(index);
            }
        }
        mostrarResultado(encriptado);
    } else {
        mostrarResultado('Texto inválido');
    }
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
    let str = document.getElementById('textoUsuario').value;

    console.log(`str: ${str}`);

    const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&#])/gm.test(str);
    if (!validacion) {
    do {
        str = str.replace(vocalA.encriptada, vocalA.desencriptada);
        console.log('a');
    } while (str.indexOf(vocalA.encriptada) !== -1);
    do {
        str = str.replace(vocalE.encriptada, vocalE.desencriptada);
        console.log('e');
    } while (str.indexOf(vocalE.encriptada) !== -1);
    do {
        str = str.replace(vocalI.encriptada, vocalI.desencriptada);
        console.log('i');
    } while (str.indexOf(vocalI.encriptada) !== -1);
    do {
        str = str.replace(vocalO.encriptada, vocalO.desencriptada);
        console.log('o');
    } while (str.indexOf(vocalO.encriptada) !== -1);
    do {
        str = str.replace(vocalU.encriptada, vocalU.desencriptada);
        console.log('u');
    } while (str.indexOf(vocalU.encriptada) !== -1);

        mostrarResultado(str);
    } else {
        mostrarResultado('Texto inválido');
    }
    console.log(str);
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


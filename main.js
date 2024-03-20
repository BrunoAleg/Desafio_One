const encrypt = text => {
    return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

const decrypt = text => {
    return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}


const validation = /[A-ZÁÉÍÓÚÜÑáéíóúüñ]/;

function encriptar(e) {
    e.preventDefault();

    let text = document.getElementById('notify').value;
  
    if (validation.test(text) == true) {
        notification();
        clear();
        return;
    }
 
    if (text != '') {
        text = encrypt(text);
        result(text);
    } else {
        clear();
    }
}

function desencriptar(e) {
    e.preventDefault();

  
    let text = document.getElementById('notify').value;

    if (validation.test(text) == true) {
        notification();
        clear();
        return;
    }
   
    if (text != '') {
        text = decrypt(text);
        result(text);
    } else {
        clear();P
    }
}

function result(text) {
    document.getElementById('texto').innerHTML = text;
    document.getElementById('decode').classList.add('disable');
    document.getElementById('copy').classList.remove('disable');
}

function clear() {
    document.getElementById('decode').classList.remove('disable');
    document.getElementById('copy').classList.add('disable');
}

function notification() {
    document.getElementById('notice').classList.remove('disable');
    setTimeout(function() {
        document.getElementById('notice').classList.add('disable');
    }, 3000);
}

async function Copiar() {
    let text = document.getElementById('texto').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
      
        console.log("Texto copiado ");
    } catch (err) {
      
        console.error("Erro ao copiar.", err);
    }
}
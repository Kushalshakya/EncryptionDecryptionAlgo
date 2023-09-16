// DOM declaration
const inputEl = document.getElementById("userInput");
const encryptEl = document.getElementById("encryptBtn");
const decryptEl = document.getElementById("decryptBtn");

const copyTextEl = document.getElementById("copyText");
const copyBtnEl = document.getElementById("showBtn");

// Encryption & Decryption Algo

let tempData = "";
const encrypt = () => {
    const inputChar = inputEl.value;
    const arr = inputChar.trim().split("");
    var arrStore = [];
    
    const getLevel = () => {
        let dumpData = [];
        for(let i=0; i<arr.length; i++){
            const str = arr[i].charCodeAt() + 5;
            arrStore.push(str);
        }
        var finalChar = "";
        for(let a=0; a<arrStore.length; a++){
            var encryptedValue = String.fromCharCode(arrStore[a]);
            finalChar = encryptedValue;
            dumpData.push(finalChar.toString());
        }
        var saveData = dumpData.join('');
        tempData = saveData;
    }
    getLevel();
    inputEl.value = "";
    copyTextEl.value = tempData;
}

let decData  = "";
const decrypt = () => {
        const decryptChar = inputEl.value;
        let decryptStore = [];
        let decryptionData = decryptChar.trim().split("");
        const decryptLevel = () => {
            let decryptArr = [];
            for(let d=0; d<decryptionData.length; d++){
                const dec = decryptionData[d].charCodeAt() - 5;
                decryptStore.push(dec);
            }
            var finalDec = "";
            for(let e=0; e<decryptStore.length; e++){
                const decryptedValue = String.fromCharCode(decryptStore[e]);
                finalDec = decryptedValue;
                decryptArr.push(finalDec.toString());
            }
            var decSave = decryptArr.join('');
            decData = decSave;
        }
        decryptLevel();
        inputEl.value = "";
        copyTextEl.value = decData;    
}

function copyText(){
    copyTextEl.select();
    copyTextEl.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copyTextEl.value);

    inputEl.value = copyTextEl.value;
}
copyBtnEl.addEventListener("click", copyText);

encryptEl.addEventListener('click', () => {
    if(inputEl.value == ""){
        console.error("Nothing to encrypt");
    }
    else{
        encrypt();
    }
});

decryptEl.addEventListener('click', () => {
    if(inputEl.value == ""){
        console.error("Nothing to decrypt");
    }
    else{
        decrypt();
    }
});
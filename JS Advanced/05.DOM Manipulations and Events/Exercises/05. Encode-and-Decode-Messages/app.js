function encodeAndDecodeMessages() {
    let textAreas = Array.from(document.querySelectorAll('textarea'));
    let inputTextArea = textAreas[0];
    let outPutTextArea = textAreas[1];
    let encodeBtn = Array.from(document.querySelectorAll('button'))
        .forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        let result = '';
        if (e.target.textContent == 'Encode and send it') {
            let message = inputTextArea.value;
            for (let i = 0; i < message.length; i++) {
               let asciiNumber = message.charCodeAt(i);
               asciiNumber++;
               result += String.fromCharCode(asciiNumber);
            }
            outPutTextArea.value = result;
            inputTextArea.value = '';
            result = '';
        } else {
            let message = outPutTextArea.value;
            for (let i = 0; i < message.length; i++) {
               let asciiNumber = message.charCodeAt(i);
               asciiNumber--;
               result += String.fromCharCode(asciiNumber);
            }
            outPutTextArea.value = result;
            result = '';
        }
    }
}

'use strict';

function getUrlsMd(transformMdToString) {
    var regex = /!?\[([^\[.]+?)\]\((.+?)\)/g;

    var foundMatches = [];
    var match = [];

    while ((match = regex.exec(transformMdToString)) !== null) {
        if (match[0].startsWith("!")) {
            continue;
        }

        var match1 = {
            'href': match[2],
            'text': match[1]
        };

        foundMatches.push(match1);
    }
    return foundMatches;
}

if (typeof window == "undefined") {
    console.log('consola');
    module.exports = getUrlsMd;
} else {
    console.log('navegador');
    window.getUrlsMd = getUrlsMd;
}



let btn = document.getElementById('btn');
btn.addEventListener('click', transformMdToString);

function transformMdToString(){
    let textInput = `${document.getElementById('userInput').value}`;


    let printUrlsMd = getUrlsMd(textInput);
    console.log(printUrlsMd);

    printTextObject(printUrlsMd);

};

function printTextObject(printUrlsMd) {
    let textObjetList = document.createElement('p');
    let containerText = document.getElementById('showResult')
    console.log(printUrlsMd.length);

    for (let i = 0; i < printUrlsMd.length; i++ ) {
        console.log(i);

        console.log(printUrlsMd[i]);

        let href = printUrlsMd[i].href;
        let text = printUrlsMd[i].text;

        let hrefObject = document.createTextNode(href + " " +text);
        console.log(hrefObject);
        textObjetList.appendChild(hrefObject);
        containerText.appendChild(textObjetList);
    }
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("userInput");
    console.log(copyText)

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

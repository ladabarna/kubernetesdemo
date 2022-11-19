const axios = require("axios");
const prompt = require('prompt-sync')();


function translate(wordParams, action) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", wordParams.source);
    encodedParams.append("target", wordParams.target);
    encodedParams.append("q", wordParams.word);

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '9af025c08fmshc06f27e874ea1e6p134fc1jsn893beae1698f',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
    };

    axios.request(options).then(function (response) {
        action(response.data.translations);
    }).catch(function (error) {
        console.error(error);
    });
}





console.log('this is the first line');
const name = prompt('What is your name?');

console.log(`Hey there ${name}`);



//promise.then(ans => console.log(ans)).catch(err => console.log(err));

function aszinkron() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ((Math.floor(Math.random() * 1000) % 2) === 0) {
                resolve("oke");
            } else {
                reject('nem oke');
            }
        }, 3000);
    });
}

async function database() {
    try {
        const value = await aszinkron();
        console.log('cica');
        return value;
    } catch (err) {
        console.log(err);
        return "szevasz";
    }
}



translate({source : 'en',target : 'es',word : 'one'}, word => {
    for(let i = 0; i < 10; i++) {
        console.log(word);
    }
})
//let answer = database();
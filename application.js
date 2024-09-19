
const express = require('express');
const fs = require('fs/promises');
const application = express();
const readText = require('./middleware/readText')
const splitText = require('./middleware/textSplitter')
const findRandomText = require('./middleware/findRandomChapter');
const path = require('path')


application.get("/readRandom", async (req, res, next) =>{
    
    try {
        text = await readText('./citadelle-ukr.txt');
        const textArr = splitText(text);
    
        const result = findRandomText(textArr);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
}
)
application.get('/home', (req,res) =>{
    return fs.readFile("./dist/index.html", "utf-8")
    .then(data => res.status(200).send(data))
})

application.get('/home.style.css', (req,res) =>{
    const rootPath = path.join(__dirname, 'dist');
    console.log(rootPath)

    res.sendFile('style.css', {
        root: rootPath
    })

})

application.get('/home.script.js', (req,res) =>{
    const rootPath = path.join(__dirname, 'dist');
    console.log(rootPath)

    res.sendFile('script.js', {
        root: rootPath
    })

})

module.exports = application;



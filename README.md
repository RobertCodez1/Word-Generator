## About
An easy to use Random word generation module
- Easy and quick word generation
- Ability to specify the number of words required
- Ability to turn on/off explicit words
- 5 Languages supported

## Installation 

Run this command in your terminal of your project
 ```
 npm i new-words
 ```           
## Functions  

`.Generate([Number of words you need], [Language], [Explicit words (boolean)])`

The **first parameter** of this function has to be the **Number of words that you want to generate**.   
If it isnt a valid number, it will default to 0.

The **second parameter** of this function can be left empty if you want the language to be set as english, if you want a different language, you can enter one of these languages:
- en (English)
- de (German)
- zh (Chinese)
- es (Spanish)
- it (Italian)

The **third parameter** of this function can be left empty if you do not want explicit words, if you do want to allow the generation of explicit words you can set the 3rd parameter to `true`
## Usage

```javascript
const Words = require('new-words')

var word = Words.Generate(3, 'en', false).then((res) => {
    console.log(res)
})

```

## Issues 
We've tested it multiple times for issues, if you do find any issues feel free to create an issue in our github repository.

### Support me!
I would love to make more packages for the community, if you would like to help me out, and contribute to my work, do consider donating here: https://www.buymeacoffee.com//robertcodez


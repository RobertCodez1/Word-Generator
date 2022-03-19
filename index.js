// German Chinese Spanish Italian English
//  de,zh,es,it,en


//https://random-word-api.herokuapp.com/word?number=10&swear=0&lang=en


module.exports.Generate = async function(AmountOfWords, Language, ExplicitWords) {
    const axios = require('axios')
    const SupportedLanuages = [
        "de",
        "zh",
        "es",
        "it",
        "en"
    ]
    var ExplicitNumber = 0
    if (AmountOfWords) {
        if (!isNaN(AmountOfWords)) {

            if (ExplicitWords) {
                if (ExplicitWords === true) {
                    ExplicitNumber = 1
                } else if (ExplicitWords === false) {
                    ExplicitNumber = 0
                } else {
                    ExplicitNumber = 0
                }
            } else {
                ExplicitNumber = 0
            }
            if (Language) {
                if (SupportedLanuages.includes(Language)) {
                    Language = Language
                } else {
                    console.log("ERROR: Entered language is not supported yet.\n\nFIX: Try using any of these languages: de , zh , es , it , en\n\nLanguage defaulted to en (English)")
                    Language = 'en'
                }
            } else {
                Language = 'en'
            }
            var result;
            await axios
                .get('https://random-word-api.herokuapp.com/word?number=' + AmountOfWords.toString() + '&swear=' + ExplicitNumber.toString() + '&lang=' + Language)
                .then((response) => {
                    result = response.data
                })

            return result;
        } else {
            console.log("ERROR: Parameter #1 of the .Generate() function is not a valid Number.\n\nFIX: Enter the amount of words that you want to generate in the 1st parameter of the .Generate() function\n\n Amount of Words Defaulted to 1")
        }
    } else {
        console.log("Please enter the amount of words that you would like to generate in the #1 parameter of the .Generate() function")
    }


}
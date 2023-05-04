(function () {
    const FORM = document.querySelector(".footer__form")
    let success


    FORM.addEventListener("submit", submitHandler)


    function validate(element) {
        if (element.type === "submit"
            || element.type === "button"
            || element.type === "reset") {
            return
        }

        const FEEDBACK = element.nextSibling.nextSibling
        const makeFeedback = message => {
            FEEDBACK.innerText = message
            success = false
        }
        FEEDBACK.innerText = ""

        if (element.required && !element.value) {
            return makeFeedback("Dette felt må ikke være tomt")
        }

        if (!includeSymbol(element.value, "@")
            || toomanyAts(element.value)
            || hasillegalAT(element.value)) {
            //return makeFeedback("skriv en gyldig email")
        }
        

        if (element.type === "number") {
            if (isTooLong(element.value)
                || isTooshort(element.value)
                || !hasLegalCharacters(element.value))
                return makeFeedback("skriv gyldigt telefonnummer")


            // hvis nummeret er for kort 
            // hvis nummeret er for langt
            // eller nummeret hhar ulovlige tegn

        }



        //     if (includeSymbol(element.value, "@") 
        //         && !toomanyAts(element.value)) {
        //     if (hasillegalAT(element.value)) {
        //        return makeFeedback("Skriv en gyldig email")
        //         // return er en måde at stoppe funktionen på
        //     }
        //     }else{
        //         return makeFeedback ("Skriv en gyldig email.")

        //     }     // if (element.type === "email"){
   
        if (success) FORM.submit()
    } // validate slutter her



    // if (element.type === "text" && element.required) {
    //     if (element.value == "") {
    //         FEEDBACK.innerText = "Dette felt må ikke være tomt"
    //     } else {
    //         FEEDBACK.innerText = ""
    //     }
    // }

    // if (element.type === "email" && element.value) {
    //     if (element.value.includes("@")) {
    //         if (element.value.indexOf("@") === 0 || element.value.indexOf("@") === element.value.length - 1) {
    //             FEEDBACK.innerText = "Din email er ugyldig" 
    //         } else {
    //             FEEDBACK.innerText = ""
    //         }
    //     } else {
    //         FEEDBACK.innerText = "Din email er ugyldig"
    //     } 
    // }

    // if (element.type === "number" && element.required){
    //     if (element.value == "") {
    //         FEEDBACK.innerText = "Udfyld dit tlf nummer"
    //     } else {
    //         FEEDBACK.innerText = ""
    //     }
    // }

    
    
    function submitHandler(event) {
        event.preventDefault()
        success = true

        Array.from(event.target)
            .forEach(element => validate(element))
    }

    // function includeSymbol(string, symbol){
    //      return string.includes(symbol)
    //  }

    const includeSymbol = (string, symbol) => string.includes(symbol)
    const toomanyAts = string => string.split("@").length > 2
    const hasillegalAT = string => string.indexOf("@") === 0 || string.indexOf("@")

    const isTooLong = (string, maxlength = 20) => string.length > maxlength
    const isTooshort = (string, minlength = 3) => string.length < minlength
    const hasLegalCharacters = (string) => /^[0-9+#\*\s]+$/.test(string)

})()
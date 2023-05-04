
const FORM = document.querySelector(".footer__form")

const FORM_INPUT_NAME = FORM.querySelector("#inputName")
const FORM_INPUT_EMAIL = FORM.querySelector("#inputEmail")
const FORM_INPUT_NUMBER = FORM.querySelector("#inputNumber")
const FORM_SPAN = FORM.querySelectorAll(".form__message")

FORM.addEventListener("submit", function(event){
event.preventDefault();

if(FORM_INPUT_NAME.value == ""){
    FORM_SPAN[0].innerHTML = "❌"
}

else if (FORM_INPUT_EMAIL.value ==""){
    FORM_SPAN[1].innerHTML = "❌"
}

else if (FORM_INPUT_NUMBER.value ==""){
    FORM_SPAN[2].innerHTML = "❌"
}
else {
    FORM.submit()
}
})




const URL_STRING = window.location.href
const URL_OBJECT = new URL(URL_STRING)

if (URL_OBJECT.searchParams.get("navn")){
    let userName = URL_OBJECT.searchParams.get("navn")
    let userPhone = URL_OBJECT.searchParams.get("nummer")
    let thankyouMessage = `hej ${userName}. vi ringer dig op på ${userPhone} snarest muligt.`

    FORM.innerHTML = thankyouMessage
}

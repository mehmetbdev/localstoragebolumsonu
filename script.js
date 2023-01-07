let elementName = document.querySelector(`#elementName`)
let elementUserName = document.querySelector(`#elementUserName`)
let btnSignIn = document.querySelector(`#btnSignIn`)

let data = (localStorage.getItem(`accountData`)) ? JSON.parse(localStorage.getItem(`accountData`)) : []
console.log(data)

btnSignIn.addEventListener(`click`, check)

function check(){
    if(elementName.value.length == 0 && elementUserName.value.length == 0){
        alert(`Tüm alanlar eksiksiz doldurduğunuzdan emin olun!`)
    }else{
        
        let accountData = {name : elementName.value, userName : elementUserName.value}
        localStorage.setItem(`accountData`, JSON.stringify(accountData))
    
    }
}
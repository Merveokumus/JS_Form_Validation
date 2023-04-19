/*get elements*/
const password=document.getElementById("password");
const inputIcon=document.getElementById("inputIcon");
const username=document.getElementById("username");
const myForm = document.getElementById("myForm");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

inputIcon.addEventListener("click",function(){
    const type=password.attributes.type.value
    if (type === "password"){
          password.attributes.type.value='text'
          inputIcon.classList.replace("fa-eye","fa-eye-slash")
    }else {
        password.attributes.type.value='password'
        inputIcon.classList.replace("fa-eye-slash","fa-eye")
    }
})

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    /*validation */
    /*email */

    if(username.value ===""){
        usernameError.innerText="Email alanı boş bırakılamaz";
        usernameError.style.visibility='visible';
        username.focus();
        return false;
        
    }
    const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    const isValidEmail = username.value.match(emailFormat);
    if (isValidEmail === null){
        // alert("email format yanlış")
        usernameError.innerText="email formatı yanlış";
        username.style.visibility="visible";
        username.focus();
        return false;
    }

    if(password.value === ""){
        passwordError.innerText="Şİfre alanı boş bırakılamaz"
        passwordError.style.visibility="visible"
        password.focus();
        return false ;
    }

    if (password.value.length < 6){
        passwordError.innerText="Şİfre en az 6 karakter olmalıdır"
        passwordError.style.visibility="visible"
        password.focus();
        return false;

}

    /*send form */
    console.log("form gönderiliyor...");
    window.location.href="profile.html"
})

username.addEventListener("focusout",function(){
    usernameError.style.visibility='hidden'
})

password.addEventListener("focusout", ()=> {
    passwordError.style.visibility = "hidden";
})
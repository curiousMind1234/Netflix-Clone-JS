
const email = document.forms['form']['email'];
const password = document.forms['form']['password'];

const email_error = document.querySelector('.email-text');
const pass_error = document.querySelector('.pass-text');



email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


email.addEventListener("keyup", validated);
password.addEventListener("keyup", validated);

document.getElementById("input-text").onclick = function() {
    this.value = '';
    this.style.color = 'white';
}
document.getElementById("input-password").onclick = function() {
    this.value = '';
    this.style.color = 'white';
}

function validated(){  
    if(email.value.length < 9){
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 6){  
        pass_error.style.display = "block";
        password.focus();
        return false;  
    }
    return true;
}

function email_Verify(){
    if (email.value.length >= 8) {
		email_error.style.display = "none";
		return true;
	}
}

function pass_Verify(){
	if (password.value.length >= 5) {
		pass_error.style.display = "none";
		return true;
	}
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('CheckBox').checked = false;
    //reset on typing
    document.getElementById('email').addEventListener("input" , function(){
        document.getElementById('EmailAlert').style.opacity = '0';
    });
    document.getElementById('PasswordInput').addEventListener("input" , function(){
        document.getElementById('PasswordAlert').style.opacity = '0';
    });

    //check
    document.getElementById('LogIn').addEventListener("click" , function(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('PasswordInput').value;
        let valid = true;
        
        if (!(/@gmail\.com$/.test(email))){
            document.getElementById('EmailAlert').style.opacity = '1';
            valid = false;
        }

        if (password.length > 5) {
            var letmatch = password.match(/[a-z]/g);
            var digmatch= password.match(/[0-9]/g);

            if(!(letmatch && digmatch)) {
                document.getElementById('PasswordAlert').innerHTML = 'password must contain letters and numbers';
                document.getElementById('PasswordAlert').style.opacity = '1';
                valid = false;
            }
        }

        else{
            document.getElementById('PasswordAlert').innerHTML = 'password length must be above 5';
            document.getElementById('PasswordAlert').style.opacity = '1';
            valid = false;
        }

        if (valid && !(document.getElementById('CheckBox').checked)) {
            const labelCheckBox = document.querySelector('.lable-check-box');
            labelCheckBox.classList.add('active');
            setTimeout(function () {
                labelCheckBox.classList.remove('active');
            }, 700);
        }
        if(valid == true){
            window.location.href = "/main/index.html";
        }
    });
});

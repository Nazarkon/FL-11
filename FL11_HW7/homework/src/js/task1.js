let validateAdminEmail = 'user@gmail.com' , validateUserEmail ='admin@gmail.com';
let correctUserPassword = 'UserPass' , correctAdminPassword = 'AdminPass';
let minimumLength = 6;

let validationLogin = prompt('Enter your Email','');

if(validationLogin === validateAdminEmail || validationLogin === validateUserEmail){
    let validationPassword = prompt('Enter your Password', '');

    if(validationPassword === correctUserPassword || validationPassword === correctUserPassword){
        alert('Correct password');
               
            let changePassword = confirm('Do you want to change your password?')
              
             if(changePassword === true){

                if(validationPassword === correctUserPassword || validationPassword === correctUserPassword){
                    alert('Correct password');
                }else if(validationPassword === null || validationPassword === ''){
                    alert('Canceled');
                }else{
                    alert('Wrong password');
                }
             }else if(changePassword === false){
                 alert('You have failed the change');
             }
    }else if(validationPassword === null || validationPassword === ''){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
    }else if(validationLogin === null || validationLogin === undefined){
        alert('Canceled');
    }else if(validationLogin.length < minimumLength){
        alert("I don't know any emails having name length less than 6 symbols");
    }else{
        alert('I don’t know you');
    }

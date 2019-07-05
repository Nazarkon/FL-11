let validateAdminEmail = 'user@gmail.com', validateUserEmail = 'admin@gmail.com';
let correctUserPassword = 'UserPass', correctAdminPassword = 'AdminPass';
let minimumLength = 6;
let minimumPasswordLength = 5;

let validationLogin = prompt('Enter your Email', '');

if (validationLogin === validateAdminEmail || validationLogin === validateUserEmail) {
    let validationPassword = prompt('Enter your Password', '');

    if (validationPassword === correctUserPassword || validationPassword === correctAdminPassword) {

        let changePassword = confirm('Do you want to change your password?')

        if (changePassword === true) {

            validationPassword = prompt('Enter your Password', '');

            if (validationPassword === correctUserPassword || validationPassword === correctAdminPassword) {

                let newPassword = prompt('Enter new password', '');

                if (newPassword.length < minimumPasswordLength) {

                    alert('It’s too short password. Sorry.');

                } else if (newPassword === null || newPassword === '') {

                    alert('Canceled');
                }else{
                    alert('You wrote the wrong Password.');
                }
            } else if (validationPassword === null || validationPassword === '') {

                alert('Canceled');
            } else {
                alert('Wrong password');
            }
        } else if (changePassword === false) {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong Password');
    }
} else if (validationLogin === null || validationLogin === '') {
    alert('Canceled');
} else if (validationLogin.length < minimumLength) {
    alert("I don't know any emails having name length less than 6 symbols");
} else {
    alert('I don’t know you');
}
let chek = prompt('Write your E-mail:');
let user = 'user@gmail.com';
let admin = 'admin@gmail.com';
let userPass;
let userPassChek;
let adminPassChek;
let newUserPass;
let newAdminPass;
let newUserPassChek;
let newAdminPassChek;
let adminPass;
let change1;
let change2;
console.log(chek);
if (chek == '' || chek == null){
    alert('Canceled!');
} else if(chek.length < 5) {
        alert("I don't know any emails having name length less than 5 symbols");
} else {
    switch (chek) {
        case user:
            userPass = prompt('Write your password:')
            if(userPass == '' || userPass == null){
                alert('Canceled!');
            } else if (userPass != 'UserPass'){
                alert('Wrong password!');
            } else {
                change1 = confirm('Do you want to change your password?');
                if ( change1 == null){
                    alert('You have failed the change.');
                } else {
                    userPassChek = prompt('Write the old password:');
                    if(userPassChek == '' || userPassChek == null){
                        alert('Canceled!');
                    } else if (userPassChek != userPass){
                        alert('Wrong password!');
                    } else {
                        newUserPass = prompt('Write your new password:');
                        if (newUserPass == '' || newUserPass == null){
                        alert('Canceled!');
                        } else if(newUserPass.length < 6){
                            alert('It’s too short password. Sorry.');
                        } else {
                            newUserPassChek = prompt('Please, enter your new password again:');
                            if(newUserPassChek != newUserPass){
                                alert('You wrote the wrong password.');
                            } else {
                                alert('You have successfully changed your password.');
                            }
                        }
                    }
                }
            }
            break;
        case admin:
            adminPass = prompt('Write your password:');
            if(adminPass == '' || adminPass == null){
                alert('Canceled!');
            } else if (adminPass != 'AdminPass'){
                alert('Wrong password!');
            } else {
                change2 = confirm('Do you want to change your password?');
                if ( change2 == null){
                    alert('You have failed the change.');
                } else {
                    adminPassChek = prompt('Write the old password:');
                    if(adminPassChek == '' || adminPassChek == null){
                        alert('Canceled!');
                    } else if (adminPassChek != adminPass){
                        alert('Wrong password!');
                    } else {
                        newAdminPass = prompt('Write your new password:');
                        if (newAdminPass == '' || newAdminPass == null){
                        alert('Canceled!');
                        } else if(newAdminPass.length < 6){
                            alert('It’s too short password. Sorry.');
                        } else {
                            newAdminPassChek = prompt('Please, enter your new password again:');
                            if(newAdminPassChek != newAdminPass){
                                alert('You wrote the wrong password.');
                            } else {
                                alert('You have successfully changed your password.');
                            }
                        }
                    }
                }
            }
            console.log(adminPass);
            break;
        default: 
            alert('I don’t know you');
        break;
    }
}


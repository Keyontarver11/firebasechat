function signUp() {
    let photoURL = $('#photo').val();
    let name = $('#name').val()
    let email = $('#email').val();
    let password = $('#password').val();
    let passwordConfirmation = $('#password_confirmation').val();

    // console.log('email >>>>> ', email);
    // console.log('password', password);
    if (!isValidEmail(email)) {
        alert('Invalid Email');
    }
    else if (!isValidPassword(password)) {
        alert('Invalid Password. Password requires uppercase character,and a number');
    }
    else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
    }
    else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {

                var user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: name,photoURL
                }).then(function () {

                }).catch(function (error) {

                });
            })
            .catch(function (error) {

                var errorCode = error.code;
                var errorMessage = error.message;

                alert(errorMessage);
            });
    }
    

}

function SignIn() {
    let email = $('#email').val();
    let password = $('#password').val();

    if (!isValidEmail(email)) {
        alert('Invalid Email');
    }
    else if (!isValidPassword(password)) {
        alert('Invalid Password. Password requires uppercase character,and a number');
    }

    else {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    }

    navigate('chat-screen');
}
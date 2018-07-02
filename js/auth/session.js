function createPersistantSession(authenticate = () => console.log('no callback passed to persistant session')) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(authenticate)
        .catch(function (error) {

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log('error', errorMessage)
        });
};

function session() {

    firebase.auth().onAuthStateChanged(function (user) {

        window.user = user;

        
        if (user) {
            navigate('chat-screen',user);
        }
        else {
            navigate('sign-in-screen');
        }
    });
            
};        
        



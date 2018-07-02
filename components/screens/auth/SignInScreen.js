function buildSignInScreen() {
    $('#loading-screen, #sign-up-screen, #chat-screen').fadeOut("fast",
        function () {
            $('#root').html(SignInScreen());
            initializeSignInScreenEventListeners();
        });

}






function SignInScreen() {
    const container = document.createElement('div');
    container.id = 'sign-in-screen';
    container.classList.add('sign-in-screen');

    container.innerHTML = `
        <div class="maincontainer">
            
            <div class="imgcontainer">
                    
                <img class="logo" src="images/Scribbl.png" alt="imgd">
                
            </div>
            
            <div class="inputcontainer">
                <div>

                    <input class="inputwrap1" type="text" placeholder="Email">

                </div>

                <div>

                    <input class="inputwrap" type="password" placeholder="Password">

                </div>



            </div>

            <div class="buttoncontainer">
            <div class="button-container">
            
                <div id= "sign_in" class="signin">Sign In</div>
            
                <div id="sign_up" class="signup">Sign Up</div>
            
            </div>    
            </div>
            
            <div class="buttoncontainer2">
            <i id="google_auth" class="fa fa-google-plus-square" style="font-size:48px;color:cornflowerblue"></i>
            <i id="facebook_auth" class="fa fa-facebook-f" style="font-size:48px;color:cornflowerblue"></i>
            </div>
                

        </div>
    `
    return container;
}

function initializeSignInScreenEventListeners() {
    $('#google_auth').on('click', function(){ createPersistantSession(googleAuth)
    });
    
    $('#facebook_auth').on('click', function(){ createPersistantSession(FacebookAuth)
    });

    $('#sign_up').on('click', function () {
        navigate('sign-up-screen');
    });
    
    $('#sign_in').on('click', function () {
        SignIn();
        
    });
}

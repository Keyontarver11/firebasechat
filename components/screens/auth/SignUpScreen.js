function buildSignUpScreen() {
  $("#sign-in-screen").fadeOut("slow", function() {
    $("#root").html(SignUpScreen());
    initializeSignUpScreenEventListeners();
  });
}

function SignUpScreen() {
  const container = document.createElement("div");
  container.id = "sign-up-screen";
  container.classList.add("sign-up-screen");

  container.innerHTML = `
    <div class="main-container">
        
        <div class="imgcontainer">
                    
                <img class="logo" src="images/Scribbl.png" alt="imgd">
        </div>
            

            <div class="inputcontainer">

                <div>

                    <input id="name" class="inputwrap3" type="text" placeholder="Name">

                </div>
                
                <div>

                    <input id="email" class="inputwrap1" type="text" placeholder="Email">

                </div>

                <div>

                    <input id="password" class="inputwrap" type="password" placeholder="Password">
                    
                </div>
                <div>

                    <input id="password_confirmation" class="inputwrap2" type="password" placeholder="Password Verification">
                    
                </div>
            </div>

            <div><i id="gobackbutton" class="fa fa-arrow-circle-left" style="font-size:48px;color:white"></i></div>

            <div class="buttoncontainer">
            

                <div>
                    <div id="sign_up" class="signup">Sign Up</div>
                </div>
                
            </div>



    </div>    
   


    

    `;

  return container;
}

function initializeSignUpScreenEventListeners() {
  $("#gobackbutton").on("click", function() {
    goBack();
  });
  $("#sign_up").on("click", signUp);
}

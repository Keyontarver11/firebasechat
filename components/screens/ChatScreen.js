let db = firebase.database();
let messages = db.ref("messages/");

function buildChatScreen(user) {
  $("#loading-screen,#sign-up-screen,#sign-in-screen").fadeOut(
    "slow",
    function() {
      $("#root").html(ChatScreen(user));
      initializeChatScreenEventListeners(user);
    }
  );
}

function ChatScreen(user) {
  const container = document.createElement("div");
  container.id = "chat-screen";
  container.classList.add("chat-screen");

  container.innerHTML = `
        

        
        <div class="chat-header">
            <img src="/images/Scribbl.png"  style="width: 40px;" />
            ${user.displayName} 
            
                <i id="signoutbutton" class="fa fa-sign-out" style="font-size:30px;color:darkorchid"></i>

        </div>

        <div id="message-container" class="message-container">
            <ul id="message-wrapper" class="messages-wrapper list" style="padding: 0px;"></ul>
        </div>

            
            
            
            
            
    <div class= "emoji-container-holder">  
        <div class="emoji-container">
            
                <div  class ="emoji-drooling" id="emoji-drooling" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/drooling.png?alt=media&token=97bcfa76-1a5a-4dfb-9cca-0aca0e450fe7"></img>     
                </div>
                <div class="emoji-smiling" id="emoji-smiling" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/smiling.png?alt=media&token=84108164-3f72-4d75-bc36-d78ee2ee0496"></img>     
                </div>
                <div class="emoji-angry" id="emoji-angry" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/angryemoji.png?alt=media&token=d6e43451-3357-486b-be72-70a95553a46a"></img>
                </div>
                <div class="emoji-blushing" id="emoji-blushing" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/blushing.png?alt=media&token=82eb9fc4-d197-456b-81bd-55266926d2e3"></img>
                </div>
                <div class="emoji-shades" id="emoji-shades" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/shades.png?alt=media&token=4929055b-12f0-41ac-a8d7-8eae5447f7cc"></img>
                </div>
                <div class="emoji-staleface" id="emoji-staleface" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/staleface.png?alt=media&token=c62ff3b0-6972-4fc2-bbcb-d1a47b0a19aa"></img>
                </div>
                <div class="emoji-winking" id="emoji-winking" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/winking.png?alt=media&token=780931aa-23c2-4d35-bf31-2326481fd8e5"></img>
                </div>
                <div class="emoji-shocked" id="emoji-shocked" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/shocked.png?alt=media&token=98dfbd3e-40df-4989-acdd-b5d3a1b9434b"></img>
                </div>
                <div class="emoji-crying" id="emoji-crying" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/crying.png?alt=media&token=c07fbed3-408e-4533-ac7d-ab7b0bf6a088"></img>
                </div>
                <div class="emoji-kissing" id="emoji-kissing" style="position:relative;">
                    <img class= "emoji" src="https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/kissing.png?alt=media&token=54d50774-71ea-4863-9351-50e61fd3089b"></img>
                </div>
            
        </div>        
    </div> 
        <div id="input-container" class="input-container">
        <div id="textbar-container">
                <input id="text-container" class="text-container" type="text">
                <i id= "sendmessagebutton" class="fa fa-send" style="font-size:30px; color:darkorchid"></i>
            </div>
        </div
            `;

  return container;
}

// let emoji 

// function sendEmoji (emoji){
//     if (emoji) {
//         messages.push(
            
//         )

        
//     }
// }

function sendMessage(text, uid, name, email, img) {
  let date = new Date();

  if (text) {
    messages.push({
      uid: uid,
      name: name,
      text: text,
      date: date.toString(),
      email: email,
      img: img
    });
    $("#text-container").val("");
  }
}

function scroll() {
  $("#message-container").scrollTop($("#message-container")[0].scrollHeight);
}

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
    });
}


const emojis = {
  drooling:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/drooling.png?alt=media&token=97bcfa76-1a5a-4dfb-9cca-0aca0e450fe7',
  smiling:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/smiling.png?alt=media&token=84108164-3f72-4d75-bc36-d78ee2ee0496',
  angry:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/angryemoji.png?alt=media&token=d6e43451-3357-486b-be72-70a95553a46a',
  blushing:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/blushing.png?alt=media&token=82eb9fc4-d197-456b-81bd-55266926d2e3',
  shades:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/shades.png?alt=media&token=4929055b-12f0-41ac-a8d7-8eae5447f7cc',
  staleface:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/staleface.png?alt=media&token=c62ff3b0-6972-4fc2-bbcb-d1a47b0a19aa',
  winking:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/winking.png?alt=media&token=780931aa-23c2-4d35-bf31-2326481fd8e5',
  shocked:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/shocked.png?alt=media&token=98dfbd3e-40df-4989-acdd-b5d3a1b9434b',
  crying:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/crying.png?alt=media&token=c07fbed3-408e-4533-ac7d-ab7b0bf6a088',
  kissing:'https://firebasestorage.googleapis.com/v0/b/chat-8d62e.appspot.com/o/kissing.png?alt=media&token=54d50774-71ea-4863-9351-50e61fd3089b'
}




function initializeChatScreenEventListeners(user) {
 
//  EMOJIs
  $("#emoji-drooling").on("click", function(){ 
    sendMessage('drooling',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-smiling").on("click", function(){ 
    sendMessage('smiling',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-angry").on("click", function(){ 
    sendMessage('angry',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-blushing").on("click", function(){ 
    sendMessage('blushing',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-shades").on("click", function(){ 
    sendMessage('shades',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-staleface").on("click", function(){ 
    sendMessage('staleface',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-winking").on("click", function(){ 
    sendMessage('winking',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-shocked").on("click", function(){ 
    sendMessage('shocked',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-crying").on("click", function(){ 
    sendMessage('crying',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  $("#emoji-kissing").on("click", function(){ 
    sendMessage('kissing',user.uid, user.displayName, user.email, user.photoURL)
  }
);
  
  
  
  
  
  
//   SIGNOut SIGN IN 
    $("#signoutbutton").on("click", function() {
    signOut();
  });
  $("#sendmessagebutton").on("click", function() {
    let text = $("#text-container").val();
    sendMessage(text, user.uid, user.displayName, user.email, user.photoURL);
  });
  $("#text-container").on("keydown", function(e) {
    console.log("pressing enter");

    if (e.keyCode === 13) {
        let text = $("#text-container").val();
        sendMessage(text, user.uid, user.displayName, user.email, user.photoURL);
    }
  });

  messages.on("value", function(snapshot) {
    //console.log(snapshot.val());
    $("#message-wrapper").html("");
    let msgs = snapshot.val();

    for (let id in msgs) {
      let msg = msgs[id];

      let emogi = `<img style="width: 30px; height="30px" src="${emojis[msg.text]}">`;

      let img = `
                <div> 
                    <img class="name" src="${user.photoURL ||
                      "../images/photo.png"}" />
                </div>
            `;

      let text = `
                <div class="msg" style="flex: 1; text-align: ${
                  window.user.uid === msg.uid ? "right" : "left"
                }" ">${emojis[msg.text] ? emogi : msg.text}</div>
            `;

      $("#message-wrapper").append(
        `
                <li style="
                    margin: 20px 10px;
                    background-color: rgb(185, 116, 221);
                    border-radius: ${
                      window.user.uid === msg.uid
                        ? "0px 0px 0px 10px"
                        : "0px 10px 0px 0px"
                    };
                    color: #fff;
                ">

                    <div 
                        class="msgcont" 
                        style="
                            flex-direction: ${
                              window.user.uid === msg.uid
                                ? "row-reverse"
                                : "row"
                            }"
                        "
                    >
                        
                        ${img}

                        ${text}
                        
                    </div>

                    <div class="date" style="display: flex; justify-content: ${
                      window.user.uid === msg.uid ? "flex-end" : "flex-start"
                    }">
                        <div class"time">${
                          format.date(new Date(msg.date)).time
                        }</div>
                    </div>
                
                </li>
                
            `
      );
    }
    scroll();
  });



}

let format = {
  date: date => {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let h = date.getHours();

    let hf = h > 11 ? "PM" : "AM";
    let hh = h > 12 ? h % 12 : h;
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    if (d < 10) d = "0" + d;
    if (m < 10) m = "0" + m;
    if (hh < 10) hh = "0" + hh;
    if (mm < 10) mm = "0" + mm;
    if (ss < 10) ss = "0" + ss;

    return {
      date: m + "/" + d,
      time: hh + ":" + mm + ":" + " " + hf
    };
  }
};

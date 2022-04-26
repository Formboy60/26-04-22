import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";

  const firebaseConfig = {
  
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const msgScreen = document.getElementById("messages");
  const msgForm = document.getElementById("messageForm"); 
  const msgInput = document.getElementById("msg-input"); 
  const msgBtn = document.getElementById("msg-btn"); 

function sendMsg(msg) {
  set(ref(db, 'msgs/'), {
    message: msg
  });
}
sendMsg("salut")

msgBtn.addEventListener('click', e =>{
    sendMsg(msgInput)
})






document.querySelector("footer").addEventListener('click', e => {

    if(e.target.className == "contact" ){
        document.location = "../main/index.html"
    }
})
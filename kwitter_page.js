//YOUR FIREBASE LINKS
var firebaseConfig = {

      apiKey: "AIzaSyAhsN3nIC1tn-o0FNpiuzmCBdgY6Yf2sio",
    
      authDomain: "happy-new-year-63ef5.firebaseapp.com",
    
      databaseURL: "https://happy-new-year-63ef5-default-rtdb.firebaseio.com",
    
      projectId: "happy-new-year-63ef5",
    
      storageBucket: "happy-new-year-63ef5.appspot.com",
    
      messagingSenderId: "417421230738",
    
      appId: "1:417421230738:web:a321e62d8e312497e05c4b"
    
    };
    
    
    // Initialize Firebase
    
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;




         
      } });  }); }
getData();

function logout() {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function send(){
     msg=document.getElementById("msg").value;
     
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

      })
      document.getElementById("msg").value="";
}
var firebaseConfig = {
    apiKey: "AIzaSyB2Lf-mpXOI6B70N1a2qZ-PvRGbi4VcMZA",
  authDomain: "lets-chat-ab823.firebaseapp.com",
  databaseURL: "https://lets-chat-ab823-default-rtdb.firebaseio.com",
  projectId: "lets-chat-ab823",
  storageBucket: "lets-chat-ab823.appspot.com",
  messagingSenderId: "603209772266",
  appId: "1:603209772266:web:775fc14f19a86809583b93"
};
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS HERE
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpouse:"Neharika has succesfully added the room name"
    })
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
  }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick'src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button><hr>"
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row

//End code
    } });  }); }
getData();

function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").value="";

}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_names-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id) '> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();
function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}
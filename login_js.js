function addUser(){
    user_name = document.getElementById("name_input").value ;

    localStorage.setItem("user_name", user_name);
    window.location="room_html.html";
}
function adduser() {
    campo1 =document.getElementById("player1_name_input").value;
    campo2 =document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",campo1);
    localStorage.setItem("player2_name",campo2);
    window.location ="juego_matematicas.html"
}
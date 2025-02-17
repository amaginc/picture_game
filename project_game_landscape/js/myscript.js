window.onload = function() {
    const player_name = prompt("Please enter your name: ");
    document.getElementById("playerName").textContent = `Welcome ${player_name}`;
}
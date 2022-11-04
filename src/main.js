function createGame(player1, hour, player2) {

    return `
    <li>
        <img src="src/assets/icon-${player1}.svg" alt="${player1}-flag">
        <strong>${hour}</strong>
        <img src="src/assets/icon-${player2}.svg" alt="${player2}-flag">
    </li>
    `
}
let delay = -0.2;
function createCard(date, day, games) {
    delay = delay + 0.2;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    `
}

document.querySelector("#cards").innerHTML = 
 createCard(
    "24/11", "quinta",
    createGame('brazil', '16:00', 'serbia') + 
    createGame('switzerland', '07:00', 'cameroon')) +
 createCard(
    "28/11", "segunda",
    createGame('brazil', '13:00', 'switzerland') + 
    createGame('portugal', '16:00', 'uruguay'))

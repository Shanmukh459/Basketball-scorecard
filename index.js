let homeScore = 12
let guestScore = 5
homeScoreEl = document.getElementById("home-score")
guestScoreEl = document.getElementById("guest-score")
document.getElementById("home-score").innerText = homeScore
document.getElementById("guest-score").innerText = guestScore


function add1Home() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}

function add2Home() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}

function add3Home() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}

function add1Guest() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}

function add2Guest() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore
}

function add3Guest() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore
}
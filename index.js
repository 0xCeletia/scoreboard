guestScoreEl = document.getElementById("guest-score")
homeScoreEl = document.getElementById("home-score")
homeScore = 0
guestScore = 0

homeScoreBtnOne = document.getElementById("home-score-btn-1")
homeScoreBtnTwo = document.getElementById("home-score-btn-2")
homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore +=2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore +=3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore +=1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore +=2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}
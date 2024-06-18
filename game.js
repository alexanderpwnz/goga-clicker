let score = 0;
let level = 1;
let pointsPerClick = 1;

function clickPhoto() {
    score += pointsPerClick;
    updateScore();
    checkLevelUp();
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

function checkLevelUp() {
    if (score >= level * 10) {
        level++;
        pointsPerClick++;
        document.getElementById('level').innerText = `Level: ${level}`;
    }
}

function buyUpgrade() {
    if (score >= 10) {
        score -= 10;
        pointsPerClick *= 2;
        updateScore();
    }
}

// Function to randomly give bonuses
function giveBonus() {
    setInterval(() => {
        let bonusChance = Math.random();
        if (bonusChance < 0.3) { // 30% chance to get a bonus
            pointsPerClick *= 2;
            document.getElementById('bonus').innerText = "Bonus: Double Points!";
            setTimeout(() => {
                pointsPerClick /= 2;
                document.getElementById('bonus').innerText = "Bonus: None";
            }, 5000); // Bonus lasts for 5 seconds
        }
    }, 10000); // Check for bonus every 10 seconds
}

giveBonus();


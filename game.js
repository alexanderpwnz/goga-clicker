let score = 0;
let level = 1;
let pointsPerClick = 1;
let voicelines = ['Гоги говорит, этот игрок — просто золото!', 'Гоги считает, этот парень далеко пойдёт!', 'Гоги уверен, этот игрок всех порвёт!', 'Гоги говорит, этот игрок всех удивит!', 'Гоги говорит, этот игрок всех поразит!', 'Гоги говорит, этот игрок всех впечатлит!', 'Гоги говорит, этот игрок всех восхитит!', 'Гоги говорит, этот игрок всех порадует!', 'Гоги говорит, этот игрок всех обрадует!', 'Гоги говорит, этот игрок всех осчастливит!', 'Гоги говорит, этот игрок всех развеселит!', 'Гоги говорит, этот игрок всех рассмешит!', 'Гоги говорит, этот игрок всех удивит!', 'Гоги говорит, этот игрок всех озадачит!', 'Гоги говорит, этот игрок всех поставит в тупик!', 'Гоги говорит, этот игрок всех запутает!', 'Гоги говорит, этот игрок всех озадачит!', 'Гоги говорит, этот игрок всех поставит в тупик!', 'Гоги говорит, этот игрок всех запутает!', 'Гоги говорит, этот игрок всех поразит!', 'УРА ВЫ ПАДЕБИЛ!!!! ВЫВИДИТЕ ВАШ ПРИЗ В ЛЮБОМ УДОБНОМ "ВКУСНО И ТОЧКА"'];

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
        document.getElementById('friend-photo').src = `friends/${level}.jpg`;
        document.getElementById('goga-says').innerText = `${voicelines[level]}`;
        
    }
    
}

function buyUpgrade() {
    if (score >= 10) {
        score -= 10;
        pointsPerClick *= 2;
        updateScore();
    }
}

function selectCharacter(character) {
    const photo = document.getElementById('friend-photo');
    if (character === 'goga') {
        photo.src = 'images/friend.jpg';
    } else if (character === 'oleg') {
        photo.src = 'images/oleg.jpg'; // Путь к изображению Олега
    }
    resetGame();
}

function resetGame() {
    score = 0;
    level = 1;
    pointsPerClick = 1;
    updateScore();
    document.getElementById('level').innerText = `Level: ${level}`;
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


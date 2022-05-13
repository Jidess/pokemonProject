let pkmnfoe = document.getElementById('foePkmn')
let foeChoice
let plyrChoice
let plyrChoiceDisplay
let result = document.getElementById('result')
let btnAttack = document.querySelectorAll('button')
let resultTxt
let plyrResult = 0;
let foeResult = 0;
let winrateCalc ;
let music = new Audio('public/assets/wav/bgSound.wav')
let victory = new Audio('public/assets/wav/win.mp3')
let hoverSelect = new Audio('public/assets/wav/select.mp3')
let mute = document.getElementById('soundOff')



btnAttack.forEach(attack =>{
    attack.addEventListener('click',(e) => {
    plyrChoiceDisplay = e.target.innerHTML
    plyrChoice = e.target.id
    aiChoice()
})
    attack.addEventListener('mouseenter',(e) =>{
        hoverSelect.play();
    })
});




function aiChoice() {
    let randomNum = Math.floor(Math.random()*3)+1
switch (randomNum) {
    case 1:
        pkmnfoe.src = 'public/assets/img/brasegali.png'
        foeChoice = 'Brasegali'
        break;
    case 2:
        pkmnfoe.src = 'public/assets/img/pingoleon.png'
        foeChoice = 'Pingoleon'
        break;
    case 3:
        pkmnfoe.src = 'public/assets/img/jungko.png'
        foeChoice = 'Jungko'
        break;
    default:
        break;
}

let animOut = () =>{
    document.getElementById('animBall').classList.add('pkmOut');
    setTimeout(() => {
        document.getElementById('animBall').classList.remove('pkmOut')
    }, 1000);
}
    // if (randomNum === 1) {
    //     pkmnfoe.src = 'public/assets/img/brasegali.png'
    //     foeChoice = 'Brasegali'
    // }
    // if (randomNum === 2) {
    //     pkmnfoe.src = 'public/assets/img/pingoleon.png'
    //     foeChoice = 'Pingoleon'
    // }
    // if (randomNum === 3) {
    //     pkmnfoe.src = 'public/assets/img/jungko.png'
    //     foeChoice = 'jungko'
    // }
    animOut()
    fightResult()
}

function fightResult() {
    if (foeChoice == plyrChoice) {resultTxt = 'égalité'}
    if (foeChoice == 'Brasegali' && plyrChoice == 'Pingoleon') {resultTxt = 'victoire'}
    if (foeChoice == 'Brasegali' && plyrChoice == 'Jungko') {resultTxt = 'défaite'}
    if (foeChoice == 'Pingoleon' && plyrChoice == 'Brasegali') {resultTxt = 'défaite'}
    if (foeChoice == 'Pingoleon' && plyrChoice == 'Jungko') {resultTxt = 'victoire'}
    if (foeChoice == 'Jungko' && plyrChoice == 'Brasegali') {resultTxt = 'victoire'}
    if (foeChoice == 'Jungko' && plyrChoice == 'Pingoleon') {resultTxt = 'défaite'}

    resultText()
}

function resultText() {
    result.innerHTML = `Vous avez utilisé l'attaque ${plyrChoiceDisplay} alors que Thierry a appelé ${foeChoice} pour se défendre ! C'est une ${resultTxt} !`
    let foeResultTxt = document.getElementById('resultFoe');
    let plyrResultTxt = document.getElementById('resultYou');
    if (resultTxt == 'victoire') {
        plyrResult++;
        plyrResultTxt.innerHTML = `${plyrResult}`;
        victory.play();
        
    }  if (resultTxt == 'défaite'){
        foeResult++;
        foeResultTxt.innerHTML = `${foeResult}`;
    }

    if (foeResult == 0 && plyrResult !=0 ) {
        
        winrateCalc = 100
        let winrateTxt = document.getElementById('resultWinrate');
    winrateTxt.innerHTML = `${winrateCalc}%`;
    } if(foeResult != 0) {
        winrateCalc = Math.round((plyrResult * 100) / foeResult / 2);
        let winrateTxt = document.getElementById('resultWinrate');
    winrateTxt.innerHTML = `${winrateCalc}%`;
    }
    
}



// music and sound part 




mute.addEventListener('click', muteSfx = () =>{
    mute.classList.toggle('sfxOn')
    let vol = document.getElementById('vol')
    if (mute.classList.contains('sfxOn')) {
        vol.src = 'public/assets/img/volumeOn.png'
        music.play();
        music.volume = 0.5;
    } else {
        vol.src = 'public/assets/img/volumeOff.png'
        music.pause()
        victory.volume = 0.01;
        hoverSelect.volume = 0.01;
        
    }
})







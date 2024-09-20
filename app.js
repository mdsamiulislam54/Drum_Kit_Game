function playGame(){
    let buttonA = document.getElementById('buttonA')
let buttonS = document.getElementById('buttonS')
let buttonD = document.getElementById('buttonD')
let buttonF = document.getElementById('buttonF')
let buttonG = document.getElementById('buttonG')
let buttonH = document.getElementById('buttonH')
let buttonJ = document.getElementById('buttonJ')
let buttonK = document.getElementById('buttonK')
let buttonL = document.getElementById('buttonL')


let drumSound =[
    './asset/A_clap.wav',
    './asset/S_hihat.wav',
    './asset/D_kick.wav',
    './asset/F_openhat.wav',
    './asset/G_boom.wav',
    './asset/H_ride.wav',
    './asset/J_snare.wav',
    './asset/K_tom.wav',
    './asset/L_tink.wav',
    
];



let audioFile = drumSound.map((audio)=> new Audio(audio))
console.log(audioFile);

function playAudio(index) {
    if (index >= 0 && index < audioFile.length) {
        audioFile[index].currentTime=0
        audioFile[index].play();
    }
}
window.addEventListener("keyup", (e) => {
    if (e.code === 'KeyA') {
        buttonA.style.backgroundColor = ''; 
        
    } else if (e.code === 'KeyS') { 
        buttonS.style.backgroundColor = '';

    } else if (e.code === 'KeyD') { 
        buttonD.style.backgroundColor = ''; 

    }  else if (e.code === 'KeyF') { 
        buttonF.style.backgroundColor = ''; 
    } else if (e.code === 'KeyD') { 
        buttonD.style.backgroundColor = ''; 

    }  else if (e.code === 'KeyG') { 
        buttonG.style.backgroundColor = ''; 
    }
        else if (e.code === 'KeyH') { 
        buttonH.style.backgroundColor = ''; 
    }
         else if (e.code === 'KeyJ') { 
        buttonJ.style.backgroundColor = ''; 
    }
       else if (e.code === 'KeyK') { 
        buttonK.style.backgroundColor = ''; 
    }
       else if (e.code === 'KeyL') { 
        buttonL.style.backgroundColor = ''; 
    }
   
});

window.addEventListener("keydown", (e) => {
    if (e.key === 'a' || e.key === 'A') { // 'A' key
        playAudio(0);
        buttonA.style.backgroundColor='red';

    } else if (e.key === 's' || e.key === 'S') {
        playAudio(1);
        buttonS.style.backgroundColor='red';
    } else if (e.key === 'd' || e.key === 'D') {
        playAudio(2);
        buttonD.style.backgroundColor='red';
    } else if (e.key === 'f' || e.key === 'F') {
        playAudio(3);
        buttonF.style.backgroundColor='red';
    } else if (e.key === 'g' || e.key === 'G') {
        playAudio(4);
        buttonG.style.backgroundColor='red';
    } else if (e.key === 'h' || e.key === 'H') {
        playAudio(5);
        buttonH.style.backgroundColor='red';
    } else if (e.key === 'j' || e.key === 'J') {
        playAudio(6)
        buttonJ.style.backgroundColor='red';
    } else if (e.key === 'k' || e.key === 'K') { 
        playAudio(7);
        buttonK.style.backgroundColor='red';
    } else if (e.key === 'l' || e.key === 'L') { 
        playAudio(8);
        buttonL.style.backgroundColor='red';
    }
});


}

document.getElementById('playGame').addEventListener('click',()=>playGame())

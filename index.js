window.addEventListener('keydown',playSound) //keydown, submit, click, transitionend

function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
if(!audio)return // used to prevent the audio play from being called if a key doesn' have an associated sound
audio.currentTime = 0 // to rewind time if you click a button again
audio.play()  //play is a built in method in HTML, used to play the audio in an audio element
key.classList.add('playing')//change behaviour/apperance of an element in response of user interactions; add,remove,toogle,force,
}


function removeTransition(e){
   if(e.propertyName !== 'transform'){
   this.classList.remove('playing') //remove transition
   }
}


const keys = document.querySelectorAll('.key')
keys.forEach(key=>key.addEventListener('transitionend',removeTransition))
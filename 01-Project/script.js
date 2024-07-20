window.addEventListener('keydown',(e)=>{
    console.log(e);
    console.log(`${e.code} = ${e.keyCode}`);
// this code is use to find the keyCode from keyboradEvent nodelist
})
window.addEventListener('keydown',(e)=>{
    //  console.log(audio);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stop the funtion which is running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
})

window.addEventListener('keyup',(e)=>{
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // key.classList.toggle('playing');
    key.classList.remove('playing');
    
})

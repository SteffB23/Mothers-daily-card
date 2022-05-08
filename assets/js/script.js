var closedFace = document.querySelector('.closed')
var openFace = document.querySelector('.open')

//add event listener #1:
closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
       openFace.classList.add('active');
       closedFace.classList.remove('active');
       console.log("user clicked the closed face");
    }
})

//add event listener #2:
openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
        console.log("user clicked open face");
    }
});
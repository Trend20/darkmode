const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const switchBtn = document.getElementById('switch');

const contents = document.querySelector('.contents');



// change background to dark
switchBtn.addEventListener('click', turnDark);

function turnDark(){
    if(true){
        document.body.style.backgroundColor = '#000',
        switchBtn.style.position = 'absolute',
        switchBtn.style.left = '87.5%',
        switchBtn.style.backgroundColor = '#fff'
        darkButton.style.backgroundColor = "#6b6969"
        contents.style.color = '#fff'
    }
}

// lightMode
darkButton.addEventListener('click', turnLight)
    
function turnLight(){
    if(true){
        document.body.style.backgroundColor = '#fff',
        switchBtn.style.position = 'absolute',
        switchBtn.style.left = '95%',
        switchBtn.style.backgroundColor = '#000',
        darkButton.style.backgroundColor = "#6b6969"
        contents.style.color = '#000'
    }
}
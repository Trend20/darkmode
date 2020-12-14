const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const switchBtn = document.getElementById('switch');



// change background to dark
switchBtn.addEventListener('click', turnDark);

function turnDark(){
    if(true){
        document.body.style.backgroundColor = '#000'
        switchBtn.style.position = 'absolute',
        switchBtn.style.left = '44%',
        switchBtn.style.backgroundColor = '#fff'
        darkButton.style.backgroundColor = "#6b6969"
    } else{
        document.body.style.backgroundColor = '#fff'
        switchBtn.style.position = 'absolute',
        switchBtn.style.left = '0%'
    }
}


// // change background to light

// lightButton.addEventListener('click', turnLight);

// function turnLight(){
//     if(true){
//         document.body.style.backgroundColor = 'white'
//     }else{
//         document.body.style.backgroundColor = '#000'
//     }
// }
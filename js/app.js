//Cursor Animation

const cursor = document.querySelector('.cursor');
let timeout;

//Follow Cursor on mousemove
document.addEventListener('mousemove',function (e){
    let x = e.clientX;
    let y = e.clientY;
    
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block'; 

    //Cursor effect on mouse stopped
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

//Cursor effects on mouseout
document.addEventListener('mouseout', ()=>{
    cursor.style.display = "none";
});

//Menu

const toggleBtn = document.querySelector('.menu');
const menu = document.querySelector('.nav-links');

toggleBtn.addEventListener('click',callMenu);

function callMenu(){
    if(menu.getAttribute('id')=='null'){
        menu.setAttribute('id','flex');
    }
    else if(menu.getAttribute('id')=='flex'){
        menu.setAttribute('id','null');
    }
}
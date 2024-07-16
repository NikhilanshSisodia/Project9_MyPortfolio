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

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
    timeout = setTimeout(mouseStopped, 200);
});

//Cursor effects on mouseout
document.addEventListener('mouseout', ()=>{
    cursor.style.display = "none";
});

//Menu

const toggleBtn = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.nav-links');
const body = document.querySelector('body');
const abtSection = document.querySelectorAll('.ContainerHidder');

toggleBtn.addEventListener('click',callMenu);
cross.addEventListener('click',callMenu);

function callMenu(){
    if(menu.getAttribute('id')=='null'){
        menu.setAttribute('id','flex');
        toggleBtn.style.display = 'none';
        cross.style.display = 'block';
        body.setAttribute('id','flex');
        abtSection[0].style.display = 'none';
        abtSection[1].style.display = 'none';
    }
    else if(menu.getAttribute('id')=='flex'){
        menu.setAttribute('id','null');
        toggleBtn.style.display = 'block';
        cross.style.display = 'none';
        body.setAttribute('id','null');
        abtSection[0].style.display = 'block';
        abtSection[1].style.display = 'block';    
    }
}

//Links

const links = document.querySelectorAll('.link');

for(let i = 0; i<links.length; i++){
    links[i].addEventListener('click', callLink);
}

function callLink(){
    menu.setAttribute('id','null');
    cross.style.display = 'none';
    toggleBtn.style.display = 'block';
    body.setAttribute('id','null');
    abtSection[0].style.display = 'block';
    abtSection[1].style.display = 'block';  

    const media = () => {
        let q = matchMedia('(orientation: portrait)');
        if(q.matches){
            toggleBtn.style.display = 'block';
        }else{
            toggleBtn.style.display = 'none';
        }
    }

    media();
    
    onload = media;
    onresize = media;
}

function reload(){
    window.location.reload()
}

onresize = reload;
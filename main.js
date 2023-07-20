let dvd = document.getElementById('dvd');

let dvd_x = 1;
let dvd_y = 1;  

function initApp(){
    uptadeColor();
    dvd.style.position = 'absolute';
    document.body.style.background = '#000000';

     setInterval(frame, 5);
}


function uptadeColor(){
    let color = Math.round((Math.random() * 100));
  dvd.style.fill = `hsl(${color},100%,50%)`;
}

function dvdCollision(){
    let dvd_height = dvd.offsetHeight;
    let dvd_width = dvd.offsetWidth;
    let dvd_top = dvd.offsetTop;
    let dvd_left = dvd.offsetLeft;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;  

    if(dvd_left <= 0 || dvd_left + dvd_width >= win_width){
    //reversing dvd_x
    dvd_x = ~dvd_x + 1;
    uptadeColor();
    }
    
    if (dvd_top <= 0 || dvd_top + dvd_height >= win_height){
        //reverse dvd_y
        dvd_y = ~dvd_y + 1;
        uptadeColor();
    }
}


function frame(){
    dvdCollision();
  dvd.style.top = dvd.offsetTop + dvd_y + 'px';
  dvd.style.left = dvd.offsetLeft + dvd_x + 'px';

}

initApp();
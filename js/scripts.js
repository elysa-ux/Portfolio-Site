console.log("Welcome!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

function menuContactToggle() {
    var x = document.getElementById('myNavtoggle');
    console.log('TCL: menuToggle -> x', x);
    if (x.className === 'navtoggle') {
    x.className += ' ';
    } else {
    x.className = 'navtoggle';
    }
}




document.getElementById('ig').style.display = 'none';
document.bgColor = 'red';
var i = 0;

var colors = {
    "82": "red",
    "66": "blue",
    "49": "brown",
    "71": "green"
};

function setBg( c ){
    document.bgColor = c;
}

function keyHandler(e){
    setBg( colors[e.keyCode] );
}
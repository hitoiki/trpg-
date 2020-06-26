//意味もなく1行空ける
Window.onload = function () {

}



function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function test() {
    var $target = document.getElementsByClassName("statusNum");
    for (var $i = 0; $i < $target.length; $i++) {
        $target[$i].value = String(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6));
    }
}


function UnivercityOfOsaka() {
    var num = randomInt(1, 8);
    document.js.str.value = String(num);
}

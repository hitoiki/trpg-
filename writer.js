//意味もなく1行空ける
window.onload = function () {
    inputNumChecker("statusNum");
    inputNumChecker("skillNum");
}
function inputNumChecker(className) {
    //statusNumを数値専用に変える
    var forms = document.getElementsByClassName(className);
    var x = document.getElementById("memo");
    for (var $i = 0; $i < forms.length; $i++) {
        forms[$i].pattern = "\d*"
        forms[$i].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); };
    }
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function roll() {
    var $target = document.getElementsByClassName("statusNum");
    for (var $i = 0; $i < $target.length; $i++) {
        $target[$i].value = String(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6));
    }
}

function addSkillTable() {
    var table = document.getElementById("skillTable");
    if (!table) return;
    var row = table.insertRow(table.rows.length);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    c1.innerHTML = '<input class="skillText" type="text" value="技能">';
    c2.innerHTML = '<input class="skillNum" type="text" pattern="\d*" value="50">';
    c2.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); };
}

function SkillTableArray() {
    var table = document.getElementById("skillTable");
    if (!table) return;
    for (var i = 0; i < table.rows.length; i++) {
        rows[i]
    }

}


function UniverCityOfOsaka() {
    return "UniverCityOfOsaka!!!!!";
}

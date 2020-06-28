//意味もなく1行空ける
window.onload = function () {
    inputNumChecker("StatusNum");
    inputNumChecker("SkillNum");
}
function inputNumChecker(className) {
    //指定したクラスのtextboxを数値専用に変える
    var forms = document.getElementsByClassName(className);
    for (var i = 0; i < forms.length; i++) {
        forms[i].pattern = "\d*"
        if (typeof forms[i].value === "string") {
            forms[i].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); };
        }
    }
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function roll() {
    var target = document.getElementsByClassName("StatusNum");
    for (var i = 0; i < target.length; i++) {
        target[i].value = String(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6));
    }
    subStatusUpdate();
}

function subStatusUpdate() {
    var target = document.getElementsByClassName("SubStatusNum");
    for (var i = 0; i < target.length; i++) {
        switch (target[i].id) {
            case "hp":
                target[i].value = String(Math.ceil((+document.getElementById("str").value + +document.getElementById("con").value) / 2));
                break;
            case "mp":
                target[i].value = document.getElementById("pow").value;
                break;
            case "san":
                target[i].value = String(document.getElementById("pow").value * 5);
                break;
            case "idea":
                target[i].value = String(document.getElementById("int").value * 5);
                break;
            case "luck":
                target[i].value = String(document.getElementById("pow").value * 5);
                break;
            case "know":
                target[i].value = String(document.getElementById("edu").value * 5);
                break;
            case "db":
                val = 1
                strPlusSiz = String(+document.getElementById("str").value + +document.getElementById("siz").value);
                target[i].value = strPlusSiz <= 12 ? "-1d6" : strPlusSiz <= 16 ? "-1d4" : strPlusSiz <= 24 ? "naiyo" : strPlusSiz <= 32 ? "+1d4" : strPlusSiz <= 40 ? "+1d6" : strPlusSiz <= 56 ? "+2d6" : strPlusSiz <= 72 ? "+3d6" : "overflow";
                break;
            default: break;
        }

    }
}

function addSkillTable() {
    var table = document.getElementById("skillTable");
    if (!table) return;
    var row = table.insertRow(table.rows.length);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);
    c1.innerHTML = '<input class="SkillText" type="text" value="技能">';
    c2.innerHTML = '<input class="SkillNum" type="text" pattern="\d*" value="50">';
    c2.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); };
}

function SkillTableArray() {
    var table = document.getElementById("SkillTable");
    if (!table) return;
    for (var i = 0; i < table.rows.length; i++) {
        rows[i]
    }

}


function UniverCityOfOsaka() {
    return "UniverCityOfOsaka!!!!!";
}

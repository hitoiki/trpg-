//意味もなく1行空ける
window.onload = function () {
    inputNumChecker("StatusNum");
    inputNumChecker("SkillNum");
    addSkillTable();
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

function statusroll() {
    var target = document.getElementsByClassName("StatusNum");
    for (var i = 0; i < target.length; i++) {
        switch (target[i].id) {
            case "edu":
                target[i].value = String(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6) + 3);
                break;
            case "int":
                target[i].value = String(randomInt(1, 6) + randomInt(1, 6) + 6);
                break;
            case "siz":
                target[i].value = String(randomInt(1, 6) + randomInt(1, 6) + 6);
                break;
            default:
                target[i].value = String(randomInt(1, 6) + randomInt(1, 6) + randomInt(1, 6));
                break;
        }
    }
    subStatusUpdate();
}

function subStatusUpdate() {
    var target = document.getElementsByClassName("SubStatusNum");
    for (var i = 0; i < target.length; i++) {
        switch (target[i].id) {
            case "hp":
                target[i].value = String(Math.ceil((+document.getElementById("con").value + +document.getElementById("siz").value) / 2));
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
            case "edupoint":
                target[i].value = String(document.getElementById("edu").value * 20);
                break;
            case "intpoint":
                target[i].value = String(document.getElementById("int").value * 10);
                break;
            default: break;
        }
        //今の技能ポイントに応じて色を変える
        if (document.getElementById("edupointnow").value <= document.getElementById("edupoint").value) {
            document.getElementById("edupointnow").style.backgroundColor = "#7bd7f9";
        } else {
            document.getElementById("edupointnow").style.backgroundColor = "#fa7a7a";
        }
        if (document.getElementById("intpointnow").value <= document.getElementById("intpoint").value) {
            document.getElementById("intpointnow").style.backgroundColor = "#7bd7f9";
        } else {
            document.getElementById("intpointnow").style.backgroundColor = "#fa7a7a";
        }

    }
}

function addSkillTable() {
    var table = document.getElementById("skillTable");
    if (!table) return;
    var row = table.insertRow(table.rows.length);
    var c1 = row.insertCell(0);
    var c2default = row.insertCell(1);
    var c2edu = row.insertCell(2);
    var c2int = row.insertCell(3);
    var c2free = row.insertCell(4);
    var c2result = row.insertCell(5);
    var c3 = row.insertCell(6);
    c1.innerHTML = '<input class="SkillText" type="text" value="技能">';
    c2default.innerHTML = '<input class="SkillSubNum SkillNumDefault" type="text" pattern="\d*" value="0">';
    c2edu.innerHTML = '<input class="SkillSubNum SkillNumEdu" type="text" pattern="\d*" value="0">';
    c2int.innerHTML = '<input class="SkillSubNum SkillNumInt" type="text" pattern="\d*" value="0">';
    c2free.innerHTML = '<input class="SkillSubNum SkillNumFree" type="text" pattern="\d*" value="0">';
    c2result.innerHTML = '<input class="SkillNum" type="text" readonly="readonly" value="0">';
    c3.innerHTML = '<input class="SkillRemove" type="button" value="x">';
    c1.children[0].oninput = function () { this.value = this.value.replace(" ", ''); };
    c2default.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); TextUpdate(row.rowIndex); };
    c2edu.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); TextUpdate(row.rowIndex); };
    c2int.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); TextUpdate(row.rowIndex); };
    c2free.children[0].oninput = function () { this.value = this.value.replace(/[^0-9]+/i, ''); TextUpdate(row.rowIndex); };
    c3.children[0].onclick = function () { table.deleteRow(row.rowIndex) };
}

function TextUpdate(rowNumber) {
    var table = document.getElementById("skillTable");
    var sum = 0;
    if (table.rows[rowNumber].getElementsByClassName("SkillNumDefault").length != 0) {
        sum += Number(table.rows[rowNumber].getElementsByClassName("SkillNumDefault")[0].value);
    }
    if (table.rows[rowNumber].getElementsByClassName("SkillNumEdu").length != 0) {
        sum += Number(table.rows[rowNumber].getElementsByClassName("SkillNumEdu")[0].value);
    }
    if (table.rows[rowNumber].getElementsByClassName("SkillNumInt").length != 0) {
        sum += Number(table.rows[rowNumber].getElementsByClassName("SkillNumInt")[0].value);
    }
    if (table.rows[rowNumber].getElementsByClassName("SkillNumFree").length != 0) {
        sum += Number(table.rows[rowNumber].getElementsByClassName("SkillNumFree")[0].value);
    }
    if (table.rows[rowNumber].getElementsByClassName("SkillNum").length != 0) {
        table.rows[rowNumber].getElementsByClassName("SkillNum")[0].value = String(sum);
    }
    SkillEduSumCheck();
    SkillIntSumCheck();
}


function SkillTableArray() {
    var table = document.getElementById("SkillTable");
    if (!table) return;
    for (var i = 0; i < table.rows.length; i++) {
        rows[i]
    }

}

function SkillEduSumCheck() {
    var sum = 0;
    var table = document.getElementById("skillTable");
    if (!table) document.getElementById("skillSum").value = 0;
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].getElementsByClassName("SkillNumEdu").length != 0) {
            sum += Number(table.rows[i].getElementsByClassName("SkillNumEdu")[0].value);
        }
    }
    if (sum <= document.getElementById("edupoint").value) {
        document.getElementById("edupointnow").style.backgroundColor = "#7bd7f9";
    } else {
        document.getElementById("edupointnow").style.backgroundColor = "#fa7a7a";
    }
    document.getElementById("edupointnow").value = sum;
}
function SkillIntSumCheck() {
    var sum = 0;
    var table = document.getElementById("skillTable");
    if (!table) document.getElementById("skillSum").value = 0;
    for (var i = 0; i < table.rows.length; i++) {
        if (table.rows[i].getElementsByClassName("SkillNumInt").length != 0) {
            sum += Number(table.rows[i].getElementsByClassName("SkillNumInt")[0].value);
        }
    }
    if (sum <= document.getElementById("edupoint").value) {
        document.getElementById("intpointnow").style.backgroundColor = "#7bd7f9";
    } else {
        document.getElementById("intpointnow").style.backgroundColor = "#fa7a7a";
    }
    document.getElementById("intpointnow").value = sum;
}


function UniverCityOfOsaka() {
    return "UniverCityOfOsaka!!!!!";
}


function Encode() {
    var data = "";
    data += "$decode "
    data += document.getElementById("name").value + ' ';

    data += "Str" + " " + document.getElementById("str").value + " ";
    data += "Con" + " " + document.getElementById("con").value + " ";
    data += "Pow" + " " + document.getElementById("pow").value + " ";
    data += "Dex" + " " + document.getElementById("dex").value + " ";
    data += "App" + " " + document.getElementById("app").value + " ";
    data += "Siz" + " " + document.getElementById("siz").value + " ";
    data += "Int" + " " + document.getElementById("int").value + " ";
    data += "Edu" + " " + document.getElementById("edu").value + " ";
    data += "San" + " " + document.getElementById("san").value + " ";
    data += "HP" + " " + document.getElementById("hp").value + " ";
    data += "MP" + " " + document.getElementById("mp").value + " ";
    data += "MaxHP" + " " + document.getElementById("hp").value + " ";
    data += "MaxMP" + " " + document.getElementById("mp").value + " ";

    data += "アイデア" + " " + document.getElementById("idea").value + " ";
    data += "幸運" + " " + document.getElementById("luck").value + " ";
    data += "知識" + " " + document.getElementById("know").value + " ";

    var table = document.getElementById("skillTable");
    if (!table) return data;
    for (var i = 0; i < table.rows.length; i++) {
        if ((table.rows[i].getElementsByClassName("SkillNum").length != 0) && (table.rows[i].getElementsByClassName("SkillText").length != 0)) {
            data += String(table.rows[i].getElementsByClassName("SkillText")[0].value) + ' ' + String(table.rows[i].getElementsByClassName("SkillNum")[0].value) + ' '
        }
    }
    return data;
}

function Encoding() {
    document.getElementById("encodeText").value = Encode();
}
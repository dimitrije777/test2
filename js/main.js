var students = ["mita", "rada", "milan"];

var naughtyList = [];

naughtyList.push(students[0]);

var index = naughtyList.indexOf("mita");
if (index > -1){
        naughtyList  = naughtyList.splice(index, 1);
}

console.log(naughtyList);
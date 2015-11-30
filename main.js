console.log("working");
var maxRuns = 50;
var runs = 0;
var iID = setInterval(clock, 5000);
var nodes = [];

init();

function init() {
    var tower1 = new Tower("Lazer");
    nodes.push(tower1);
    printProps(tower1);
}

function Tower(name) {
    this.happy = 100;
    this.sad = 0;
    this.age = 0;
    this.sick = 0;
    this.hungry = 0;
    this.thirsty = 0;
    this.bathroom = 0;
    this.name = name;
}

function printProps(tower) {
    document.write(tower.name + "[<br/>");
    for (var prop in tower) {
        document.write(prop + ": " + tower[prop] + "<br/>");
    }
    document.write("]");
}

function updateStats(node) {
    node.sick += 1;
}

function clock() {

    if (runs >= maxRuns) {
        clearInterval(iID);
        return 0;
    }
    runs += 1;
    
    document.body.innerHTML = ''; // clear the old data
    
    for (var i = 0; i < nodes.length; i++) {
        printProps(nodes[i]);
        updateStats(nodes[i]);
    }
}
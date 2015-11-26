console.log("working");
var maxRuns = 50;
var runs = 0;
var iID = setInterval(clock, 5000);
var peeps = [];

init();

function init() {
    var dude1 = new Dude("Bob");
    peeps.push(dude1);
    printProps(dude1);
}

function Dude(name) {
    this.happy = 100;
    this.sad = 0;
    this.age = 0;
    this.sick = 0;
    this.hungry = 0;
    this.thirsty = 0;
    this.bathroom = 0;
    this.name = name;
}

function printProps(dude) {
    document.write(dude.name + "[<br/>");
    for (var prop in dude) {
        document.write(prop + ": " + dude[prop] + "<br/>");
    }
    document.write("]");
}

function updateStats(peep) {
    peep.sick += 1;
}

function clock() {

    if (runs >= maxRuns) {
        clearInterval(iID);
        return 0;
    }
    runs += 1;
    
    document.body.innerHTML = ''; // clear the old data
    
    for (var i = 0; i < peeps.length; i++) {
        printProps(peeps[i]);
        updateStats(peeps[i]);
    }
}
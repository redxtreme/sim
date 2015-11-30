console.log("working");
var maxRuns = 50;
var runs = 0;
var nodes = [];
var iID = setInterval(clock, 1000);
init();

function init() {
    var tower1 = new Tower(50, 25, 0, 100, 50, "Lazer");
    nodes.push(tower1);
    tower1.checkPower();
}

function Tower(cost, damage, power, maxPower, upgradeCost, name) {
    this.cost = cost;
    this.damage = damage;
    this.power = power;
    this.maxPower = maxPower;
    this.upgradeCost = upgradeCost;
    this.name = name;
    this.clockID = -1;
    
    // Set up the clock
    this.clock = function () {
        
        this.clockID = setInterval(this.incPower.bind(this), 1000);
    };
    
    // Increase power
    this.incPower = function () {
                
        if (this.power < this.maxPower) {
            this.power += 1;
        }
        else {
            clearInterval(this.clockID);
        }
    };
    
    // Turn clock on if power lower
    this.checkPower = function () {
        
        if (this.power < this.maxPower) {
            this.clock();
        }
    };
}

function printProps(tower) {
    document.write(tower.name + "[<br/>");
    for (var prop in tower) {
        document.write(prop + ": " + tower[prop] + "<br/>");
    }
    document.write("]");
}

function clock() {
    document.body.innerHTML = ''; // clear the old data
    
    for (var i = 0; i < nodes.length; i++) {
        printProps(nodes[i]);
    }
}
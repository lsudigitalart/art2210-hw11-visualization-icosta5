let stats;
let numberOfAttempts = 0;
let propertyAttempts = 0;

function preload() {
    stats = loadTable("Crime.csv", 'csv', 'header');
}

function setup() {
  createCanvas(800, 940);
  noStroke();
  smooth();

  for(let i = 0; i < stats.getRowCount(); i++){

    if(stats.get(i, 17) == "PROPERTY") {
        propertyAttempts++;
        console.log(propertyAttempts);
        let x = random(0, 800);
        let y = random(0, 800);
        fill(0, 0, 255, 100);
        ellipse(x, y, 20);
    }

    if(stats.get(i, 17) == "SOCIETY") {
        propertyAttempts++;
        console.log(propertyAttempts);
        let x = random(0, 800);
        let y = random(0, 800);
        fill(255, 0, 0, 100);
        ellipse(x, y, 20);
    }

    if(stats.get(i, 17) == "PERSON") {
        propertyAttempts++;
        console.log(propertyAttempts);
        let x = random(0, 800);
        let y = random(0, 800);
        fill(0, 255, 0, 100);
        ellipse(x, y, 20);
    }
  }
}

function draw() {
    noFill();
    rect(0, 800, 800, 100);
//key
    fill(0);
    textSize(22);
    text("         : Crimes on Property", 10, 865);
    text("         : Crimes on Society", 10, 900);
    text("         : Crimes on a Person", 10, 935);
    text("Downtown Baton Rouge Crime Incidents Categorized by Type", 10, 830);
//colored circles in key
push();
noStroke();
smooth();
fill(0, 0, 255, 100);
ellipse(40, 855, 30);
fill(255, 0, 0, 100);
ellipse(40, 890, 30);
fill(0, 255, 0, 100);
ellipse(40, 925, 30);
pop();
} 
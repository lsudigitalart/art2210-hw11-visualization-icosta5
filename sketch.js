let stats;

function preload() {
    stats = loadTable("Crime.csv", 'csv', 'header');
}

function setup() {
  createCanvas(200, 200);

  print(stats.getRowCount());
  for(let i = 0; i < stats.getRowCount(); i++){
    let row = stats.getRow(i);
    print(row);
  }
}

function draw() {
   background(255);
}

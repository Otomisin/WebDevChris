let x1 = 1;
let x2 = 1;
let y1 = 1;
let y2 = 2;

dx = (x1-x2);
dy = (y1-y2);

let srqXDistance = Math.pow(x1 - x2, 2);
let srqYDistance = Math.pow(y1 - y2, 2);

let additionOfSqrs = srqXDistance + srqYDistance;
let distancen = Math.sqrt(additionOfSqrs);
console.log(`The Distance between the two points is ${distancen}`);

// index of and substring
let point = 'POINT(36.0997796 - 112.1212394)';
console.log("This is the point",point)
let startPoint = point.indexOf("POINT(");
console.log(startPoint + 5);

let endPoint = point.indexOf(")");
console.log(endPoint + 1);

let coordinates = point.substring(startPoint +6, endPoint);
 console.log(coordinates);

// Deifine x and y and concatinate with + and console.log it
let x = 23.13
let y = -234.4

// STRINGS /////////
let ownPoint = "POINT(" + x + " " + y +")";
console.log(ownPoint);

let startCharPointo = "POINT(";
let startPointo = ownPoint.indexOf(startCharPointo);
console.log(startCharPointo);

let endPointo = ownPoint.indexOf(")");
console.log(endPointo + 1);

let coordinateso = ownPoint.substring(startPointo +startCharPointo.length, 
  endPointo);
 console.log("The reworked coord " + coordinateso);

// ARRAYS ////////
let mylayers = ["Forest", "Satellite", "NDVI", "Streets","Roads"];
console.log(mylayers);
mylayers.sort();
console.log('Sorted', mylayers );
let layerTwo = ["Contry", "School", "Home"];

mylayers.push("layerTwo");
console.log("New appended Layer", mylayers);

let combinedLayers = mylayers.concat(layerTwo);
console.log("combined lenght",combinedLayers.length);


let polygon = [[23, 12], [1, 2], [3,5]];
console.log(polygon);
console.log(polygon[0][0]); // check the index with value 23

polygon.push([2],[3]);
console.log("The new",polygon); 

let firstWKTPoint = "POINT(1 1)";
let secondWKTPoint = "POINT(2 2)";

let startCharPointp = "POINT(";

let startPosPoint = firstWKTPoint.indexOf(startCharPointp);
let endPosPoint = firstWKTPoint.indexOf(")");
let coordinatesp = firstWKTPoint.substring(
  startPosPoint + startCharPointo.charAt.length,
  endPosPoint
);

console.log("Last",coordinatesp);

// Iterate a WKT(Well-Known Text (WKT)) polygon and store it's value like [[],[],[], ...]
// Polygon((1 2,1 4, 3 4, 3 2, 1 2))
// [[1,2], [1,4], [1,5], [1,6]]

let polygon = "POLYGON((1 2,1 4,3 4,3 2,1 2))"
let coordinateAsString = polygon.substring(9, polygon.length-2);
console.log(coordinateAsString);

let coordinateSplit = coordinateAsString.split(",");
console.log(coordinateSplit); // ['1 2', '1 4', '3 4', '3 2', '1 2']

let finalpolygon = [];
for (let i = 0; i < coordinateSplit.length; i++){
  let currentitem = coordinateSplit[i];
  let xyCord = currentitem.split(" ");

  let xAsFloat = parseFloat(xyCord[0]);
  let yAsFloat = parseFloat(xyCord[1]);
  let xyArray = [xAsFloat, yAsFloat];

  finalpolygon.push(xyArray);
}

// Get the final perimeter of the polygon
console.log(finalpolygon);
// [[1, 2],[1, 4],[3, 4], [3, 2], [1, 2]]

// Get the Perimeter of the Polygon
let perimeter = 0;
for (let i = 0; i < finalpolygon.length - 1; i++){ // Adjust loop range to avoid out of bounds error
  // get the current and next points
  let currentPoints = finalpolygon[i];
  let nextPoint = finalpolygon[i + 1];
 
  // Calculate the distance
  let distance = Math.sqrt(
    Math.pow(nextPoint[0] - currentPoints[0], 2) +
    Math.pow(currentPoints[1]- nextPoint[1], 2)
  );

  // add the distance to the perimeter
  perimeter += distance;
}

console.log(perimeter);
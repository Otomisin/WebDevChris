/** Excercise
 * - Graab the WKTPoints and get the coordinates out of them
 * - Get the distance using the previous examples
 * - Output the result in console.log
 * - Extra: Output the result in a <span>-tag below(use innerHTML)
 */

document
.getElementById("distanceButton")
.addEventListener("click", function (){
  let firstWKTpoint = document.getElementById("wktPoint1").value;
  let secondWKTPoint = document.getElementById("wktPoint2").value;

  let startCharOFPoint = "POINT(";

  // WKY Point 1
  let startPosPoint = firstWKTpoint.indexOf(startCharOFPoint);
  let endPosPoint = firstWKTpoint.indexOf(")");
  let coordinatesP1 = firstWKTpoint.substring(
    startPosPoint + startCharOFPoint.length,
    endPosPoint
  )
  console.log(coordinatesP1); // -> 1 1

  let coordsSplit = coordinatesP1.split(" ");
  console.log(coordsSplit); // -> ["1", "1"]

  let P1X = parseFloat(coordsSplit[0]);
  let P1Y = parseFloat(coordsSplit[1]);

    // WKY Point 2
  startPosPoint = secondWKTPoint.indexOf (startCharOFPoint);
  endPosPoint = secondWKTPoint.indexOf(")");
  let coordinatesP2 = secondWKTPoint.substring(
    startPosPoint + startCharOFPoint.length,
    endPosPoint
  )
  console.log(coordinatesP2); // -> 1 1

  coordsSplit = coordinatesP2.split(" ");
  console.log(coordsSplit); // -> ["2", "2"]

  let P2X = parseFloat(coordsSplit[0]);
  let P2Y = parseFloat(coordsSplit[1]);

  // get the distance
  let sqrXDistance = Math.pow(P1X-P2X, 2);
  let sqrYDistance = Math.pow(P1Y-P2Y, 2);
  let additionOfSqrs = sqrXDistance + sqrYDistance;
  let distance = Math.sqrt(additionOfSqrs);
  console.log(distance);
  let roundedDistance = distance.toFixed(5);
  console.log(roundedDistance);

    // Display the rounded distance on the screen
  let distanceDisplayElement = document.getElementById("distanceDisplay");
  distanceDisplayElement.textContent = roundedDistance;
});
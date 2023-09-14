class Polygon {
  constructor(outerRing) {
    this.ring = outerRing;
    this.perimeter = this.getPerimeter();
  }

  getPerimeter() {
    let perimeter = 0;

    for (let i = 0; i < this.ring.length - 1; ++i) {
      let currentPoint1 = this.ring[i];
      let currentPoint2 = this.ring[i + 1];

      let x1 = currentPoint1[0];
      let y1 = currentPoint1[1];
      let x2 = currentPoint2[0];
      let y2 = currentPoint2[1];

      // Calculate the distance between two points
      let sqXDistance = Math.pow(x1 - x2, 2);
      let sqYDistance = Math.pow(y1 - y2, 2);
      let additionOfSqrs = sqXDistance + sqYDistance;

      let distance = Math.sqrt(additionOfSqrs);

      // Add the distance to the perimeter
      perimeter += distance;
    }

    return perimeter;
  }
}

let pointOfPolygon = [[1, 1], [2, 1], [2, 2], [1, 2], [1, 1]];
let myPolygon = new Polygon(pointOfPolygon);
console.log(myPolygon.ring);
console.log("The Perimeter of the Polygon is: " + myPolygon.perimeter);
// Set the innerHTML of an element with id "demo2" to display the polygon's ring
document.getElementById("demo2").innerHTML = JSON.stringify(myPolygon.ring);
document.getElementById("demo2").innerHTML = "The Perimeter of the Polygon is: " + myPolygon.perimeter;


export default class Reaction {
   pointsToSvg = (points) => {
      if (points.length > 0) {
         let path = `M ${points[0].x},${points[0].y}`;
         points.forEach((point) => {
         path = `${path} L ${point.x},${point.y}`;
         });
         return path;
      } else {
         return '';
      }
   }
}
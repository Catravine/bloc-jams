var animatePoints = function() {

  var points = document.getElementsByClassName('point');

  var revealPoint = function (pointList) {
    for(var i = 0; i < pointList.length; i++) {
      pointList[i].style.opacity = 1;
      pointList[i].style.transform = "scaleX(1) translateY(0)";
      pointList[i].style.msTransform = "scaleX(1) translateY(0)";
      pointList[i].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
  };

  revealPoint(points);

};

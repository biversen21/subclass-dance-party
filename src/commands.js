// commands for all dancers

var lineup = function () {

  var newLeft = 40;
  var newTop = 80;
  var padding = 80;

  window.dancers.forEach(function(item) {
    // item.setPosition(newTop, newLeft);
    // newLeft += padding;
    // if (newLeft > screen.width - 100) {
    //   newLeft = 40;
    //   newTop += padding;
    // }

    var coord = packDanceFloor(danceFloorBoundaries);

    item.setPosition(coord.y, coord.x);


  });
};

/*
rectangle has an up, down, left and right constraint
*/
var packDanceFloor = function(rect) {
  var newPosition = function() {
    return {
      x: randRange(rect.left, rect.right),
      y: randRange(rect.up, rect.down)
    };
  };

  return newPosition(rect);
};

var danceFloorBoundaries = {
  left : 620,
  right : 1300,
  up : 450,
  down : 720
};

var randRange = function(lower, upper) {
  if (lower > upper) {
    throw 'inconsistent bounds';
  }
  return lower + Math.random() * (upper - lower);
};


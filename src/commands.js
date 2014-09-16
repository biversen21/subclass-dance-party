// commands for all dancers

var lineup, newPosition, danceFloorBoundaries, randRange;

$(document).ready(function (){

  lineup = function () {

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

      var coord = newPosition(danceFloorBoundaries);

      item.setPosition(coord.y, coord.x);


    });
  };

  /*
  rectangle has an up, down, left and right constraint
  */
  newPosition = function(rect) {
    return {
      x: randRange(rect.left, rect.right),
      y: randRange(rect.up, rect.down)
    };
  }

  danceFloorBoundaries = (function (){
    var floorboundary = $("#floorboundary");
    var out = {
      up : floorboundary.offset().top,
      left: floorboundary.offset().left
    };
    out.right = out.left + floorboundary.width();
    out.down = out.up + floorboundary.height();
    return out;
  })();

  randRange = function(lower, upper) {
    if (lower > upper) {
      throw 'inconsistent bounds';
    }
    return lower + Math.random() * (upper - lower);
  };
});

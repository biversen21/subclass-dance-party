
var ControlDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  var that = this;
  this.xvelocity = 0;
  this.yvelocity = 0;
  this.moveInterval = 30;
  setInterval(function() {that.move(danceFloorBoundaries);}, this.moveInterval);
  Dancer.call(this, top, left, timeBetweenSteps, "controlDancer");
  $(document).keydown(function(e){
    switch(e.keyCode) {
      case 87:
        that.yvelocity = -160;
        break;
      case 65:
        that.xvelocity = -160;
        break;
      case 83:
        that.yvelocity = 160;
        break;
      case 68:
        that.xvelocity = 160;
        break;
      default:
        that.xvelocity = 0;
        that.yvelocity = 0;
    }
  });

  $(document).keyup(function (){
    that.xvelocity = 0;
    that.yvelocity = 0;
  });
};

ControlDancer.prototype = Object.create(Dancer.prototype);
ControlDancer.prototype.constructor = ControlDancer;

ControlDancer.prototype.step = function() {
  this.oldStep.call(this);
  //this.$node.toggle();
};


var makeControlDancer = function(top, left, timeBetweenSteps) {
  return new ControlDancer(top, left, timeBetweenSteps);
};

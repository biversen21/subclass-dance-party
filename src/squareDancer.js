
var SquareDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.xvelocity = -25+Math.random()*50;
  this.yvelocity = -25+Math.random()*50;
  this.moveInterval = 30;
  var that = this;
  setInterval(function() {that.move(danceFloorBoundaries);}, this.moveInterval);
  Dancer.call(this, top, left, timeBetweenSteps, "squareDancer");
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  this.oldStep.call(this);   //Dancer.prototype.step.call(this);
  //this.$node.toggle();
};

var makeSquareDancer = function(top, left, timeBetweenSteps) {
  return new SquareDancer(top, left, timeBetweenSteps);
};



var SquareDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.xvelocity = 10;
  this.yvelocity = 10;
  var that = this;
  setInterval(function() {that.move(danceFloorBoundaries);}, 300);
  Dancer.call(this, top, left, timeBetweenSteps, "dancerMove");
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



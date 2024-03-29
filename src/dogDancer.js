
var DogDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  var that = this;
  this.xvelocity = -25+Math.random()*50;
  this.yvelocity = -25+Math.random()*50;
  this.moveInterval = 30;
  setInterval(function() {that.move(danceFloorBoundaries);}, this.moveInterval);
  Dancer.call(this, top, left, timeBetweenSteps, "dogDancer");
};

DogDancer.prototype = Object.create(Dancer.prototype);
DogDancer.prototype.constructor = DogDancer;

DogDancer.prototype.step = function() {
  this.oldStep.call(this);
  //this.$node.toggle();
};


var makeDogDancer = function(top, left, timeBetweenSteps) {
  return new DogDancer(top, left, timeBetweenSteps);
};

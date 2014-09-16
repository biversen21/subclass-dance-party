
var FatDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.xvelocity = 50;
  this.yvelocity = 50;
  this.moveInterval = 30;
  var that = this;
  setInterval(function() {that.move(danceFloorBoundaries);}, this.moveInterval);
  Dancer.call(this, top, left, timeBetweenSteps, "fatDancer");
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = FatDancer;

FatDancer.prototype.step = function() {
  this.oldStep.call(this);   //Dancer.prototype.step.call(this);
  //this.$node.toggle();
};


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  return new FatDancer(top, left, timeBetweenSteps);
};

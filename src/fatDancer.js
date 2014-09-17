
var FatDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  var that = this;
  this.xvelocity = -25+Math.random()*50;
  this.yvelocity = -25+Math.random()*50;
  this.moveInterval = 30;
  setInterval(function() {that.move(danceFloorBoundaries);}, this.moveInterval);
  Dancer.call(this, top, left, timeBetweenSteps, "fatDancer");
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = FatDancer;

FatDancer.prototype.step = function() {
  this.oldStep.call(this);
  //this.$node.toggle();
};


var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  return new FatDancer(top, left, timeBetweenSteps);
};

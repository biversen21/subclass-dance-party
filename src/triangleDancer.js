
var TriangleDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, "triangleDancer");
};

TriangleDancer.prototype = Object.create(Dancer.prototype);
TriangleDancer.prototype.constructor = TriangleDancer;

TriangleDancer.prototype.step = function() {
  this.oldStep.call(this);   //Dancer.prototype.step.call(this);
  //this.$node.toggle();
};


var makeTriangleDancer = function(top, left, timeBetweenSteps) {
  return new TriangleDancer(top, left, timeBetweenSteps);
};

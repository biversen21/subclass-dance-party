
var TriangleDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps, "triangleDancer");
};

TriangleDancer.prototype = Object.create(Dancer.prototype);
TriangleDancer.prototype.constructor = TriangleDancer;

TriangleDancer.prototype.step = function() {
  this.oldStep.call(this);   //Dancer.prototype.step.call(this);
  this.$node.toggle();
};


var makeTriangleDancer = function(top, left, timeBetweenSteps) {
  return new TriangleDancer(top, left, timeBetweenSteps);
};



/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
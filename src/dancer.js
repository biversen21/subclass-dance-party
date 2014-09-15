
var Dancer = function(top, left, timeBetweenSteps, cssClass) {

  cssClass = cssClass || 'dancer';

  this.$node = $('<span class="' + cssClass + '"></span>');
  this.$node.addClass('base');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // that = that || this;
    var that = this;
    setTimeout(function(){ that.step(); }, that.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  return new Dancer(top, left, timeBetweenSteps);
};




  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

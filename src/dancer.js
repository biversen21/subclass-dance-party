
var Dancer = function(top, left, timeBetweenSteps, cssClass) {
  window.dancers.push(this);
  cssClass = cssClass || 'dancer';

  this.$node = $('<div class="' + cssClass + '"></div>');
  this.$node.addClass('base');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);


  this.step();
};

Dancer.prototype.move = function(rect) {
  if (this.hasOwnProperty('xvelocity') && this.hasOwnProperty('yvelocity')) {
    this.left += this.xvelocity * (this.moveInterval/1000);
    this.top += this.yvelocity * (this.moveInterval/1000);
    if(this.left < rect.left || this.left > rect.right) {
      this.xvelocity *= -1;
    }
    if(this.top < rect.up || this.top > rect.down) {
      this.yvelocity *= -1;
    }

    this.setPosition(this.top, this.left);

  }
};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // that = that || this;
    var that = this;
    setTimeout(function(){ that.step(); }, that.timeBetweenSteps);
};

Dancer.prototype.distance = function(other) {
  var dx = this.left - other.left;
  var dy = this.top - other.top;
  return Math.sqrt(dx*dx + dy*dy);
};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

    this.top = top;
    this.left = left;

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


var Dancer = function(top, left, timeBetweenSteps, cssClass) {
  window.dancers.push(this);
  cssClass = cssClass;

  this.$node = $('<div class="' + cssClass + '"></div>');
  this.$node.addClass('base');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);

  this.step();
};

Dancer.prototype.move = function(rect) {

  // follow another dancer if the following property is set.
  if (this.following !== undefined) {

    var angle =
      Math.atan2(this.following.top - this.top, this.following.left + 50 - this.left);

    if (this.distance(this.following) > 20) {
      this.xvelocity = Math.cos(angle) * 50;
      this.yvelocity = Math.sin(angle) * 50;
    } else {
      this.xvelocity = -200 + Math.random()*100;
      this.yvelocity = -200 + Math.random()*100;
    }
  }

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
    var that = this;
    setTimeout(function(){ that.step(); }, that.timeBetweenSteps);
};

Dancer.prototype.distance = function(other) {
  var dx = this.left - other.left;
  var dy = this.top - other.top;
  return Math.sqrt(dx*dx + dy*dy);
};

Dancer.prototype.setPosition = function(top, left){
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


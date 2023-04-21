"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NUM = 1;
var pos;
var vel;
var circles = new Array();
var circles2 = new Array();
var circles3 = new Array();
var circles4 = new Array();
var donuts = new Array();
var donuts2 = new Array();
var diameter;
var c;
var windowW = window.innerWidth;
var windowH = window.innerHeight;
var breakpoint = 768;
var circle1_diameter;
var circle1_x;
var circle1_y;
var circle2_diameter;
var circle2_x;
var circle2_y;
var circle3_diameter;
var circle3_x;
var circle3_y;
var circle4_diameter;
var circle4_x;
var circle4_y;
var donuts1_strokeW;
var donuts1_diameter;
var donuts1_x;
var donuts1_y;
var donuts2_strokeW;
var donuts2_diameter;
var donuts2_x;
var donuts2_y;

if (windowW > breakpoint) {
  circle1_diameter = 215;
  circle1_x = windowW * 0.1;
  circle1_y = windowH * 0.5;
  circle2_diameter = 265;
  circle2_x = windowW * 0.5;
  circle2_y = windowH * 0.9;
  circle3_diameter = 105;
  circle3_x = windowW * 0.3;
  circle3_y = windowH * 0.1;
  circle4_diameter = 215;
  circle4_x = windowW * 0.25;
  circle4_y = windowH * 0.25;
  /*
      donuts1_strokeW = 300;
      donuts1_diameter = 95;
  */

  donuts1_strokeW = 95;
  donuts1_diameter = 300;
  donuts1_x = windowW * 0;
  donuts1_y = windowH * 0.9;
  /*
      donuts2_strokeW = 225;
      donuts2_diameter = 70;
  */

  donuts2_strokeW = 70;
  donuts2_diameter = 225;
  donuts2_x = windowW * 0.75;
  donuts2_y = windowH * 0.3;
} else {
  circle1_diameter = 80;
  //circle1_diameter = windowW * 0.8;
  circle1_x = windowW * 0.75;
  circle1_y = windowH * 1;
  circle2_diameter = 160;
  //circle2_diameter = windowW * 0.6;
  circle2_x = windowW * 0.35;
  circle2_y = windowH * 0.5;
  circle3_diameter = 106;
  //circle3_diameter = windowW * 0.7;
  circle3_x = windowW * 0.25;
  circle3_y = windowH * 0.8;
  circle4_diameter = 88;
  //circle4_diameter = windowW * 0.7;
  circle4_x = windowW * 0.3;
  circle4_y = windowH * 0.7;
  donuts1_strokeW = windowW * 0.15;
  donuts1_diameter = windowW * 0.55;
  donuts1_x = windowW * 0.2;
  donuts1_y = windowH * 0.9;
  donuts2_strokeW = windowW * 0.12;
  donuts2_diameter = windowW * 0.4;
  donuts2_x = windowW * 0.9;
  donuts2_y = windowH * 0.2;
}

function setup() {
  var app = createCanvas(windowWidth, windowHeight, P2D);
  app.parent('app');

  for (var i = 0; i < NUM; i++) {
    circles[i] = new CircleObj(i);
  }

  for (var _i = 0; _i < NUM; _i++) {
    circles2[_i] = new CircleObj2(_i);
  }

  for (var _i2 = 0; _i2 < NUM; _i2++) {
    circles3[_i2] = new CircleObj3(_i2);
  }

  for (var _i3 = 0; _i3 < NUM; _i3++) {
    circles4[_i3] = new CircleObj4(_i3);
  }
}

function draw() {
  background(242, 242, 242);

  for (var i = 0; i < NUM; i++) {
    circles3[i].drawellipse();
  }

  for (var _i6 = 0; _i6 < NUM; _i6++) {
    circles4[_i6].drawellipse();
  }

  for (var _i7 = 0; _i7 < NUM; _i7++) {
    circles2[_i7].drawellipse();
  }

  for (var _i9 = 0; _i9 < NUM; _i9++) {
    circles[_i9].drawellipse();
  }
} // 蜀�ｽ｢繧堤函謌�1��Yellow��


var CircleObj =
/*#__PURE__*/
function () {
  function CircleObj() {
    _classCallCheck(this, CircleObj);

    this.pos = createVector(circle1_x, circle1_y);
    this.vel = createVector(random(-1, 1), random(-1, 1)); // 繧ｹ繝斐�繝�

    this.diameter = int(circle1_diameter); // 螟ｧ縺阪＆

    this.c = color(241, 190, 65, 235); // 濶ｲ + 騾乗�蠎ｦ
  }

  _createClass(CircleObj, [{
    key: "drawellipse",
    value: function drawellipse() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
      this.pos.add(this.vel);

      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x = this.vel.x * -1;
      }

      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y = this.vel.y * -1;
      }
    }
  }]);

  return CircleObj;
}(); // 蜀�ｽ｢繧堤函謌�2��blue��


var CircleObj2 =
/*#__PURE__*/
function () {
  function CircleObj2() {
    _classCallCheck(this, CircleObj2);

    this.pos = createVector(circle2_x, circle2_y);
    this.vel = createVector(random(-1, 1), random(-1, 1)); // 繧ｹ繝斐�繝�

    this.diameter = int(circle2_diameter); // 螟ｧ縺阪＆

    this.c = color(48, 103, 203, 235); // 濶ｲ + 騾乗�蠎ｦ
  }

  _createClass(CircleObj2, [{
    key: "drawellipse",
    value: function drawellipse() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
      this.pos.add(this.vel);

      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x = this.vel.x * -1;
      }

      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y = this.vel.y * -1;
      }
    }
  }]);

  return CircleObj2;
}(); // 蜀�ｽ｢繧堤函謌�3��Pink��


var CircleObj3 =
/*#__PURE__*/
function () {
  function CircleObj3() {
    _classCallCheck(this, CircleObj3);

    this.pos = createVector(circle3_x, circle3_y);
    this.vel = createVector(random(-1, 1), random(-1, 1)); // 繧ｹ繝斐�繝�

    this.diameter = int(circle3_diameter); // 螟ｧ縺阪＆

    this.c = color(177, 50, 157, 235); // purple
  }

  _createClass(CircleObj3, [{
    key: "drawellipse",
    value: function drawellipse() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
      this.pos.add(this.vel);

      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x = this.vel.x * -1;
      }

      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y = this.vel.y * -1;
      }
    }
  }]);

  return CircleObj3;
}(); // 蜀�ｽ｢繧堤函謌�4��Purple��


var CircleObj4 =
/*#__PURE__*/
function () {
  function CircleObj4() {
    _classCallCheck(this, CircleObj4);

    this.pos = createVector(circle4_x, circle4_y);
    this.vel = createVector(random(-1, 1), random(-1, 1)); // 繧ｹ繝斐�繝�

    this.diameter = int(circle4_diameter); // 螟ｧ縺阪＆

    this.c = color(58, 145, 37, 235); // green
  }

  _createClass(CircleObj4, [{
    key: "drawellipse",
    value: function drawellipse() {
      noStroke();
      fill(this.c);
      ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
      this.pos.add(this.vel);

      if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x = this.vel.x * -1;
      }

      if (this.pos.y < 0 || this.pos.y > height) {
        this.vel.y = this.vel.y * -1;
      }
    }
  }]);

  return CircleObj4;
}(); // 繝峨�繝翫ャ繝�ｽ｢繧堤函謌�1��Orange��

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
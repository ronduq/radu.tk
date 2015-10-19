if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 6
	this.instance = new lib.rdq();
	this.instance.setTransform(100.2,-102.9,1,1,0,0,0,56.8,87.4);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(216).to({_off:false},0).to({x:99.6,y:-9.5},5).to({x:99.2,y:83},3).to({x:102.2,y:82},1).to({x:99.2,y:85},1).to({x:100.2,y:83},1).wait(172).to({scaleX:0.7,skewY:0.9},1).to({scaleX:0.44,skewY:178.7,regY:87.3},2).to({scaleX:0.95,skewY:180,regY:87.4},1).to({scaleX:0.68,skewY:179.1,regY:87.3},1).to({scaleX:0.45,skewY:1.4},2).to({scaleX:0.98,skewY:0,regX:56.7,regY:87.4},1).to({scaleX:0.47,regX:56.8,regY:87.3,y:83.1,alpha:0.9},1).to({scaleX:0.83,skewY:180,regX:56.7,regY:87.4,x:100.1,y:83,alpha:0.7},2).to({scaleX:0.94,skewY:0,alpha:0.34},2).to({scaleX:1,skewY:180,alpha:0},1).to({_off:true},1).wait(16));

	// Layer 3
	this.instance_1 = new lib.smallc();
	this.instance_1.setTransform(100.2,174.3,0.179,0.5,0,0,0,56,6);
	this.instance_1._off = true;

	this.timeline.addTween(Tween.get(this.instance_1).wait(216).to({_off:false},0).to({scaleX:1},8).wait(175).to({scaleX:0.14,alpha:0.9},2).to({scaleX:1,alpha:0.83},2).to({scaleX:0.14,alpha:0.77},2).to({scaleX:1,alpha:0.64},2).to({scaleX:0.11,alpha:0.52},2).to({scaleX:1,alpha:0.36},1).to({scaleX:0.09,alpha:0.3},1).to({scaleX:1,alpha:0},2).wait(17));

	// Layer 1
	this.instance_2 = new lib.logo_1();
	this.instance_2.setTransform(97.5,-3.8,1,1,0,0,0,72,138);

	this.timeline.addTween(Tween.get(this.instance_2).to({y:173},7).to({scaleY:0.73},3).to({scaleY:1.09,y:164},2).to({scaleY:0.95,y:173},1).to({scaleY:1},1).wait(186).to({scaleX:0.7,regY:138.1,y:173.1},1).to({scaleX:0.43,skewY:179.4,regX:72.1,y:173},2).to({scaleX:0.93,skewY:180,regX:72,regY:138},1).to({scaleX:0.42,skewY:179},1).to({scaleX:0.66,skewY:0,regX:72.1,x:97.6,y:173.1},2).to({scaleX:0.93,regX:72,x:97.5,y:173,alpha:0.81},1).to({scaleX:0.47,regY:138.1,alpha:0.71},1).to({scaleX:0.95,skewY:180,regY:138,alpha:0.37},2).to({skewY:0,alpha:0.09},2).to({_off:true},1).wait(216));

	// Layer 2
	this.instance_3 = new lib.smallc();
	this.instance_3.setTransform(101,169,0.518,0.518,0,0,0,56,6);

	this.timeline.addTween(Tween.get(this.instance_3).to({scaleX:1,scaleY:1},7).wait(3).to({scaleX:0.82,scaleY:0.82,regY:6.1},2).to({scaleX:1.01,scaleY:1,regY:6},1).wait(1).to({scaleX:1},0).wait(186).to({scaleX:0.11},2).to({scaleX:1},2).to({scaleX:0.14},2).to({scaleX:1},2).to({scaleX:0.14},2).to({scaleX:1},1).to({scaleX:0.14},1).to({_off:true},1).wait(216));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(25.5,-141.9,144,314.1);


// symbols:
(lib.rdq = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("real", "42px Aardvark Cafe", "#8ab049");
	this.text.textBaseline = "top";
	this.text.lineHeight = 44;
	this.text.setTransform(25.3,7);

	this.text_1 = new Text("digital", "42px Aardvark Cafe", "#8ab049");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 44;
	this.text_1.setTransform(5,46.7);

	this.text_2 = new Text("quality", "42px Aardvark Cafe", "#8ab049");
	this.text_2.textBaseline = "top";
	this.text_2.lineHeight = 44;
	this.text_2.setTransform(0,87);

	this.text_3 = new Text("design", "42px Aardvark Cafe", "#8ab049");
	this.text_3.textBaseline = "top";
	this.text_3.lineHeight = 44;
	this.text_3.setTransform(5.8,129);

	this.addChild(this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,7,113.6,174.7);


(lib.smallc = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#cccccc").p("AGMgqQikgRjoAAQjnAAikARQikASAAAYQAAAZCkASQCkARDnAAQDoAACkgRQCkgSAAgZQAAgYikgS").f();
	this.shape.setTransform(56,6);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,112,12);


(lib.logo_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_2();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,144,138);


(lib.logo_2 = function() {
	this.initialize(images.logo_2);
}).prototype = new Bitmap();
p.nominalBounds = new Rectangle(0,0,144,138);